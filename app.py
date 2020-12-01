import os

from flask import Flask, render_template, request, flash, redirect, session, g, url_for, send_file, Response
from flask_debugtoolbar import DebugToolbarExtension
from models import connect_db, db, User, Contact, ContactStatus, Stage, Task, Transaction, TransType, MailOptions, Property
from sqlalchemy.exc import IntegrityError
from forms import RegisterForm, LoginForm, FeedbackForm, ChangePassword, EmailForm, UploadFileForm, ContactForm
from io import BytesIO, StringIO

import requests
from typeform import extract_typeform_answers, extract_database
from os.path import splitext
from helper import random_image_selector

import csv


CURR_USER_KEY = "curr_user"

app = Flask(__name__)

# Get DB_URI from environ variable (useful for production/testing) or,
# if not set there, use development local db.
app.config['SQLALCHEMY_DATABASE_URI'] = (
    os.environ.get('DATABASE_URL', 'postgres:///jane'))

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', "it's a secret")

toolbar = DebugToolbarExtension(app)

connect_db(app)


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
    """redirect to signup for now"""

    return render_template('/home/test_home.html', current_user=g.user)


@app.route('/signup', methods=["GET", "POST"])
def signup():
    """Handle user signup.

    Create new user and add to DB. Redirect to payment page.  For now redirect to onbaord.

    If form not valid, present form.

    If the there already is a user with that username: flash message
    and re-present form.
    """

    if g.user:
        if g.user.has_paid:
            return redirect(f"/users/{g.user.id}")
        else:
            return redirect('/payment')
    # else:
    #     flash("Access unauthorized.", "danger")
    #     return redirect("/")

    form = RegisterForm()


    if form.validate_on_submit():
        email = form.email.data
        pwd = form.password.data

        # these will be checked against data coming from typeform so make sure everyting is lowercased
        first_name = form.first_name.data.lower()
        last_name = form.last_name.data.lower()

        user = User.register(email, pwd, first_name, last_name)
        db.session.add(user)

        try:
            db.session.commit()
        except IntegrityError:
            form.email.errors.append(
                'This email has already been registered. Please pick another')
            return render_template('register.html', form=form)

        do_login(user)
        flash("welcome! Successfully Created Your Account!", "success")

        return redirect('/onboard')
    else:

        return render_template('accounts/register.html', form=form)

@app.route('/login', methods=["GET", "POST"])
def login():
    """Handle user login."""

    form = LoginForm()

    if form.validate_on_submit():
        user = User.authenticate(form.email.data,
                                 form.password.data)

        if user:
            do_login(user)
            flash(f"Hello, {user.first_name}!", "success")
            return redirect("/")

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
    flash('welcome to your new home')

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

    return render_template('/home/index.html', current_user=g.user)


@app.route('/users/<int:user_id>/contacts')
def contacts(user_id):

    return render_template('/home/contacts2.html', current_user=g.user, random=random_image_selector())


@app.route('/contacts/<int:contact_id>')
def contact_details(contact_id):
    """ route for showing the details of the contact"""

    # check if there is a current paid user. 
    if g.user:
        if not g.user.has_paid:
            return redirect('/payment')
    else:
        flash("Access unauthorized.", "danger")
        return redirect("/")


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
        return redirect("/")


    ## if contact isn't the current user's contact, then go home. 
    contact = Contact.query.get_or_404(contact_id)
    if contact not in g.user.contacts:
        flash("Access unauthorized.", "danger")
        return redirect("/")


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
    for status in ContactStatus:
        if status.value == form.status.data:
            form.status.data = status

    ## Parse the numbers and put them in regularly.

    
def calculation(n):
    y = 0
    for x in range(n):
        y = y+x

    return y


####### Add db.create_all() to the beginning of this#######