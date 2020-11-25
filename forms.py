from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, validators, TextAreaField, SubmitField, BooleanField, SelectField
from wtforms.validators import InputRequired, Email, EqualTo, Length, Optional, ValidationError
from flask_wtf.file import FileField, FileRequired, FileAllowed
from models import ContactStatus, MailOptions
from wtforms.fields.html5 import DateField, TelField
import phonenumbers


class RegisterForm(FlaskForm):
    """Form for registering a user."""

    email = StringField("Email", validators=[
                        InputRequired(), Email()])
    password = PasswordField("Password", validators=[InputRequired(), Length(min=6)])

    first_name = StringField("First Name", validators=[InputRequired()])
    last_name = StringField("Last Name", validators=[InputRequired()])


class LoginForm(FlaskForm):
    """Form for user login."""

    email = StringField("Email", validators=[InputRequired(), Email()])
    password = PasswordField("Password", validators=[InputRequired(), Length(min=6)])


class FeedbackForm (FlaskForm):
    title = StringField("Title", validators=[InputRequired()])
    content = TextAreaField("Feedback Text", validators=[InputRequired()])


class EmailForm(FlaskForm):
    email = StringField('Email', validators=[InputRequired(), Email()])


class ChangePassword(FlaskForm):
    password = PasswordField('New Password', [InputRequired(), EqualTo(
        'confirm', message='Passwords must match')])
    confirm = PasswordField('Repeat Password')


class PasswordForm(FlaskForm):
    password = PasswordField('Password', validators=[InputRequired()])


def validate_phone(self, phone):
        try:
            p = phonenumbers.parse(phone.data, 'US')
            if not phonenumbers.is_valid_number(p):
                raise ValueError()
            else: 
                phone.data=phonenumbers.format_number(p, phonenumbers.PhoneNumberFormat.NATIONAL)
        except (phonenumbers.phonenumberutil.NumberParseException, ValueError):
            raise ValidationError('Invalid US phone number. Correct it or leave it blank')


class ContactForm(FlaskForm):
    """ form for user's contacts"""
    primary_first_name = StringField("Primary First Name", validators=[InputRequired(), Length(max=50, message= "This input should be max 50 characters")])

    primary_last_name = StringField("Primary Last Name", validators=[InputRequired(), Length(max=50, message= "This input should be max 50 characters")])

    secondary_first_name = StringField("Secondary First Name", validators=[Length(max=50, message= "This input should be max 50 characters")])

    secondary_last_name = StringField("Secondary Last Name", validators=[Length(max=50, message= "This input should be max 50 characters")])

    primary_email = StringField("Primary Email", validators=[Optional(), Email(), Length(max=50, message= "This input should be max 50 characters")])

    secondary_email = StringField("Secondary Email", validators=[Optional(), Email(), Length(max=50, message= "This input should be max 50 characters")])
    
    primary_phone = StringField("Primary Phone", [Optional(), validate_phone, Length(max=50, message= "This input should be max 50 characters")])

    secondary_phone = StringField("Secondary Phone", validators=[Optional(), validate_phone, Length(max=50, message= "This input should be max 50 characters")])

    primary_DOB = DateField("Primary Date of Birth", format='%Y-%m-%d', validators=[Optional()])  ## note format is to match wft html5 format conversion

    secondary_DOB = DateField("Secondary Date of Birth", validators=[Optional()])

    address= StringField("Address", [Optional()])
    suite= StringField("Suite", [Optional()])
    city= StringField("City", [Optional()])
    state= StringField("State", [Optional()])
    zip_code= StringField("Zip", [Optional()])

    status = SelectField("Status", choices=[(st.value, st.value) for st in ContactStatus])

    mail_preference = SelectField("Mail Preferences", choices=[(pref.value, pref.value) for pref in MailOptions])

    past_client = BooleanField("Past Client?(click box)", id="customCheck1")

    notes = TextAreaField("Notes")

    # class PhoneForm(FlaskForm):
    # phone = StringField('Phone', validators=[DataRequired()])
    # submit = SubmitField('Submit')



    

    

    



#  Test form for uploading file.
class UploadFileForm(FlaskForm):
    file = FileField('File', validators=[
                     FileRequired(), FileAllowed(['csv', 'pdf', 'xlsx'], 'csv only!')])
    submit = SubmitField('Submit')
