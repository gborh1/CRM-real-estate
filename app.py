import os

from flask import Flask, render_template, request, flash, redirect, session, g, url_for, send_file, Response, jsonify
from flask_debugtoolbar import DebugToolbarExtension
from models import connect_db, db, User, Contact, ContactStat, Stage, Task, Transaction, TransType, MailOptions, Property
from sqlalchemy.exc import IntegrityError
from forms import RegisterForm, LoginForm, FeedbackForm, ChangePassword, EmailForm, UploadFileForm, ContactForm, UserForm
from io import BytesIO, StringIO
from sqlalchemy import or_, desc, asc
from helper import get_contact_image
from whitenoise import WhiteNoise

import requests
from typeform import extract_typeform_answers, extract_database
from os.path import splitext
from helper import random_image_selector

import csv


CURR_USER_KEY = "curr_user"

app = Flask(__name__, static_folder='static')
app.wsgi_app= WhiteNoise(app.wsgi_app, root=os.path.join(os.path.dirname(__file__), 'static'), prefix='static/')


# Get DB_URI from environ variable (useful for production/testing) or,
# if not set there, use development local db.
app.config['SQLALCHEMY_DATABASE_URI'] = (
    os.environ.get('DATABASE_URL', 'postgres:///jane'))

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = False
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', "it's a secret")

toolbar = DebugToolbarExtension(app)

connect_db(app)

db.create_all()


##############################################################################
# User signup/login/logout


@app.before_request
def add_user_to_g():
    """If we're logged in, add curr user to Flask global."""

    if CURR_USER_KEY in session:
        g.user = User.query.get(session[CURR_USER_KEY])

    else:
        g.user = None


def do_login(user):
    """Log in user."""

    session[CURR_USER_KEY] = user.id


def do_logout():
    """Logout user."""

    if CURR_USER_KEY in session:
        del session[CURR_USER_KEY]


@app.route('/')
def home():
    """redirect to login for now"""

    return redirect('/login')


@app.route('/signup', methods=["GET", "POST"])
def signup():
    """Handle user signup.

    Create new user and add to DB. Redirect to payment page.  For now redirect to onbaord.

    If form not valid, present form.

    If the there already is a user with that username: flash message
    and re-present form.
    """

    if g.user:
        # if g.user.has_paid:
        return redirect (url_for('contacts', user_id=g.user.id))
        # else:
        #     return redirect('/payment')
    

    form = RegisterForm()


    if form.validate_on_submit():
        email = form.email.data
        pwd = form.password.data

        # these will be checked against data coming from typeform so make sure everything is lowercased
        first_name = form.first_name.data.lower()
        last_name = form.last_name.data.lower()

        user = User.register(email, pwd, first_name, last_name)
        db.session.add(user)

        try:
            db.session.commit()
        except IntegrityError:
            form.email.errors.append(
                'This email has already been registered. Please pick another')
            return render_template('accounts/register.html', form=form)

        do_login(user)
        flash("welcome! Successfully Created Your Account!", "success")

        return redirect('/onboard')
    else:

        return render_template('accounts/register.html', form=form)

@app.route('/login', methods=["GET", "POST"])
def login():
    """Handle user login."""
    if g.user:
        return redirect(url_for('contacts', user_id=g.user.id))

    form = LoginForm()

    if form.validate_on_submit():
        user = User.authenticate(form.email.data,
                                 form.password.data)

        if user:
            do_login(user)
            redirect_url = url_for('home_page', user_id=user.id)
            flash(f"Hello, {user.first_name}!", "success")
            return redirect(redirect_url)

        flash("Invalid credentials. Try again", 'danger')

    return render_template('accounts/login.html', form=form)


@app.route('/logout')
def logout():
    """Handle logout of user."""

    do_logout()
    flash("Goodbye!", "info")

    return redirect("/login")


@app.route('/onboard')
def onboard():
    """renders a page with typeform embedded to gather initial user information"""

    return render_template('/accounts/onboard.html')


#############  receiving data from typeform webhook##########################

@app.route('/webhooks', methods=['POST'])
def typeform_responses():
    """ route for typeform to send the data of each registered user. """

    answers = request.json['form_response']['answers']

    # get answers from typeform and fill user info in database
    extract_typeform_answers(answers)

    # return status 200 so that the webhook shows it works.
    return Response(status=200)


########################### Profile Routes#############################################

@app.route('/users/<int:user_id>')
def home_page(user_id):
    """ route for determined home page for user. for not it redirects to contacts"""

    # check if there is a current paid user. 
    if g.user:
        if not g.user.has_paid:
            return redirect('/payment')
    else:
        flash("Access unauthorized.", "danger")
        return redirect("/login")

    return redirect(url_for('contacts', user_id=user_id))


@app.route('/users/<int:user_id>/settings',methods=["GET", "POST"])
def user_settings(user_id):
    """ route for displaying user settings"""

    # check if there is a current paid user. 
    if g.user:
        if not g.user.has_paid:
            return redirect('/payment')
    else:
        flash("Access unauthorized.", "danger")
        return redirect("/")

    user = User.query.get_or_404(user_id)
    ## pre-populate the form with the user infor and then save the user info upon submit
    form= UserForm(obj=user)
    
    ## what follows happens when the form is submitted
    if form.validate_on_submit():
        
        form.populate_obj(user)
        db.session.add(user)
        db.session.commit()
        return redirect( url_for('user_settings', user_id=user_id))

    return render_template('/home/settings.html', current_user=g.user, form=form)

@app.route('/payment')
def payment():
    """route for displaying user payment page"""

    return render_template('/home/payment.html')

########################### Contact Routes#############################################

@app.route('/users/<int:user_id>/contacts', methods=["GET", "POST"])
def contacts(user_id):
    """ route for seeing and manipulate user's content user's contacts.  """

    # check if there is a current paid user. 
    if g.user:
        if not g.user.has_paid:
            return redirect('/payment')
    else:
        flash("Access unauthorized.", "danger")
        return redirect("/login")

    ## pre-populate the form with the contact and then save the contact upon submit
    form= ContactForm()

    ## what follows happens when the form is submitted
    if form.validate_on_submit():

        contact = Contact()

        ## get random avatar picture for each contact
        name = form.primary_first_name.data
        url= get_contact_image(name)
        contact.image_url= url

        ## adjust certain data types in form to enum
        string_to_enum(form)
        
        form.populate_obj(contact)
        db.session.add(contact)
        db.session.commit()
        return redirect (url_for('contacts', user_id=user_id))

    return render_template('/home/contacts.html', current_user=g.user, form=form)



@app.route('/contacts/<int:contact_id>')
def contact_details(contact_id):
    """ route for showing the details of the contact"""

    # check if there is a current paid user. 
    if g.user:
        if not g.user.has_paid:
            return redirect('/payment')
    else:
        flash("Access unauthorized.", "danger")
        return redirect("/login")


    ## if contact isn't the current user's contact, then go home. 
    contact = Contact.query.get_or_404(contact_id)
    if contact not in g.user.contacts:
        flash("Access unauthorized.", "danger")
        return redirect("/")

    return render_template('/home/contact_details.html', current_user=g.user, contact=contact)


@app.route('/contacts/<int:contact_id>/edit', methods=["GET", "POST"])
def contact_edit(contact_id):
    """ route for editing the contact"""

    # check if there is a current paid user. 
    if g.user:
        if not g.user.has_paid:
            return redirect('/payment')
    else:
        flash("Access unauthorized.", "danger")
        return redirect("/login")


    ## if contact isn't the current user's contact, then go home. 
    contact = Contact.query.get_or_404(contact_id)
    if contact not in g.user.contacts:
        flash("Access unauthorized.", "danger")
        return redirect("/login")


    ## pre-populate the form with the contact and then save the contact upon submit
    form= ContactForm(obj=contact)
    
    ## what follows happens when the form is submitted
    if form.validate_on_submit():

        ## adjust certain data types in form to enum
        string_to_enum(form)
        
        form.populate_obj(contact)
        db.session.add(contact)
        db.session.commit()
        return redirect(f'/contacts/{contact_id}')


    ## Note: Check for error on client side. Check for error on server side. 
    return render_template('/home/contact_edit.html', current_user=g.user, contact=contact, form=form)

@app.route('/contacts/<int:contact_id>/delete', methods=["POST"])
def delete_contact(contact_id):
    """Delete a contact."""

    # check if there is a current paid user. 
    if g.user:
        if not g.user.has_paid:
            return redirect('/payment')
    else:
        flash("Access unauthorized.", "danger")
        return redirect("/login")

    ## if contact isn't the current user's contact, then go home. 
    contact = Contact.query.get_or_404(contact_id)
    if contact not in g.user.contacts:
        flash("Access unauthorized.", "danger")
        return redirect("/login")

    contact.is_visible = False;

    db.session.add(contact)
    db.session.commit()

    redirect_url = url_for('contacts', user_id=g.user.id)

    return redirect(redirect_url)


########################### Transaction Routes#############################################

@app.route('/users/<int:user_id>/transactions')
def transactions(user_id):

    return render_template('/home/transactions.html', current_user=g.user)


@app.route('/users/<int:user_id>/transactions/<int:trans_id>')
def trans_details(user_id, trans_id):

    return render_template('/home/trans_details.html', current_user=g.user)

def string_to_enum(form):
    """ method to convert pieces of the contact form from string to enum so that it matches DB formatting"""
    
    # replace string formatted mail options with enum object to be stored in database
    for option in MailOptions:
            if option.value == form.mail_preference.data:
                form.mail_preference.data = option

    # replace string formatted status options with enum object to be stored in database
    for status in ContactStat:
        if status.value == form.status.data:
            form.status.data = status

    ## Parse the numbers and put them in regularly.



#################################################
#Restful APIs
#################################################


@app.route('/api/contacts')
def list_contacts():
    """Returns JSON w/ all requested contacts"""
    search = request.args.get("search")
    contact_id = request.args.get("contact_id")

    user=User.query.get_or_404(contact_id)



    ## search conditions for the Contact models. These will allow database lookup for each listed element. 

    p_f_name = Contact.primary_first_name.ilike(f'%{search}%')
    p_l_name= Contact.primary_last_name.ilike(f'%{search}%')
    s_f_name = Contact.secondary_first_name.ilike(f'%{search}%')
    s_l_name= Contact.secondary_last_name.ilike(f'%{search}%')
    p_email = Contact.primary_email.ilike(f'%{search}%')
    s_email= Contact.secondary_email.ilike(f'%{search}%')
    p_phone = Contact.primary_phone.ilike(f'%{search}%')
    s_phone= Contact.secondary_phone.ilike(f'%{search}%')
    notes = Contact.notes.ilike(f'%{search}%')
    address = Contact.address.ilike(f'%{search}%')
    suite = Contact.suite.ilike(f'%{search}%')
    city = Contact.city.ilike(f'%{search}%')
    state = Contact.state.ilike(f'%{search}%')
    zip_code = Contact.notes.ilike(f'%{search}%')
    is_visible = Contact.is_visible.is_(True)
    # in_user_contacts = Contact.in_(user.contacts)
    conditions = [p_f_name, p_l_name, s_f_name, s_l_name, p_email, s_email, p_phone, s_phone, notes, address, suite, city, state, zip_code]
 

    if search: 
        contacts= Contact.query.filter(or_ (*conditions)).filter(is_visible).order_by(asc('primary_last_name'))
        all_contacts = [contact.serialize() for contact in contacts if contact in user.contacts]
    else:
        contacts= Contact.query.filter(is_visible).order_by(asc('primary_last_name'))
        all_contacts = [contact.serialize() for contact in contacts if contact in user.contacts]

    return jsonify(contacts=all_contacts)
