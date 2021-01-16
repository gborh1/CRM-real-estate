from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from sqlalchemy.orm import backref
from datetime import datetime

import enum

bcrypt = Bcrypt()
db = SQLAlchemy()


def connect_db(app):
    """Connect this database to provided Flask app.

    You should call this in your Flask app.
    """

    db.app = app
    db.init_app(app)


class TransStatus(enum.Enum):
    opened = "Open"
    closed = "Closed"
    incomplete = "Incomplete"


class ContactStatus(enum.Enum):
    inactive = "Inactive"
    seller = "Seller"
    buyer = "Buyer"
    both = "Buyer & Seller"
    


class TransType(enum.Enum):
    seller = "Seller"
    buyer = "Buyer"


class MailOptions(enum.Enum):
    _all = "All"
    none = "None"
    holiday = "Holiday only"


class User(db.Model):
    """Site user."""

    __tablename__ = "users"

    id = db.Column(
        db.Integer,
        primary_key=True,
    )

    email = db.Column(db.String(50), nullable=False)
    password = db.Column(db.Text,
                         nullable=False)

    first_name = db.Column(db.String(30), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    image_url = db.Column(
        db.Text,
        default="/static/images/default-pic.png"
    )

    is_admin = db.Column(db.Boolean, default=False)
    is_onboarded = db.Column(db.Boolean, default=False)
    has_paid = db.Column(db.Boolean, default=True)
    reset_token = db.Column(db.Text)

    # typeform answers
    designation = db.Column(db.Text)
    certifications = db.Column(db.Text)
    dre_num = db.Column(db.Text)
    phone_num = db.Column(db.Text)
    agent_email = db.Column(db.Text)
    office_address = db.Column(db.Text)
    mls_info = db.Column(db.Text)
    broker_info = db.Column(db.Text)
    broker_logo_one = db.Column(db.LargeBinary)
    broker_logo_two = db.Column(db.LargeBinary)
    logo = db.Column(db.LargeBinary)
    headshot = db.Column(db.LargeBinary)
    signature = db.Column(db.LargeBinary)
    tagline = db.Column(db.Text)
    website_info = db.Column(db.Text)
    zillow_info = db.Column(db.Text)
    fb_info = db.Column(db.Text)
    insta_info = db.Column(db.Text)
    address_book_info = db.Column(db.Text)
    email_acct_info = db.Column(db.Text)
    database = db.Column(db.LargeBinary)
    listing_docs = db.Column(db.LargeBinary)
    buyers_docs = db.Column(db.LargeBinary)
    bio = db.Column(db.LargeBinary)

    # creating a connection user object and
    contacts = db.relationship(
        'Contact',
        secondary="users_contacts", backref= 'users'
    )

    def __repr__(self):
        return f"<User {self.first_name} {self.last_name}>"

    # start_register
    @classmethod
    def register(cls, email, pwd, first_name, last_name):
        """Register user w/hashed password & return user."""

        hashed = bcrypt.generate_password_hash(pwd)
        # turn bytestring into normal (unicode utf8) string
        hashed_utf8 = hashed.decode("utf8")

        # return instance of user w/username and hashed pwd
        return cls(email=email, password=hashed_utf8,  first_name=first_name, last_name=last_name)
    # end_register

    # start_authenticate
    @classmethod
    def authenticate(cls, email, pwd):
        """Validate that user exists & password is correct.

        Return user if valid; else return False.
        """

        u = User.query.filter_by(email=email).first()

        if u and bcrypt.check_password_hash(u.password, pwd):
            # return user instance
            return u
        else:
            return False
    # end_authenticate

    def update_password(self, pwd):
        hashed = bcrypt.generate_password_hash(pwd)
        # turn bytestring into normal (unicode utf8) string
        hashed_utf8 = hashed.decode("utf8")

        self.password = hashed_utf8


class Property(db.Model):
    """Property information"""
    __tablename__ = "properties"
    id = db.Column(
        db.Integer,
        primary_key=True
    )
    address = db.Column(db.Text, nullable=False)
    suite = db.Column(db.Text)
    city = db.Column(db.Text, nullable=False)
    state = db.Column(db.Text, nullable=False)
    zip_code = db.Column(db.Text, nullable=False)
    profile_pic = db.Column(db.LargeBinary)

    def __repr__(self):
        return f"<Property {self.address}, {self.city}, {self.state}>"


class Contact(db.Model):
    """Agent contacts"""

    __tablename__ = "contacts"

    id = db.Column(
        db.Integer,
        primary_key=True,
    )
    primary_first_name = db.Column(db.String(50), nullable=False)

    primary_last_name = db.Column(db.String(50), nullable=False)

    secondary_first_name = db.Column(db.String(50))

    secondary_last_name = db.Column(db.String(50))

    primary_email = db.Column(db.String(50))

    secondary_email = db.Column(db.String(50))

    primary_phone = db.Column(db.String(50))

    secondary_phone = db.Column(db.String(50))

    primary_DOB = db.Column(db.DateTime)

    secondary_DOB = db.Column(db.DateTime)

    status = db.Column(db.Enum(ContactStatus),
                       default=ContactStatus.inactive, nullable=False)

    past_client = db.Column(db.Boolean, default=False)

    notes = db.Column(db.Text)

    mail_preference = db.Column(db.Enum(MailOptions),
                                default=MailOptions._all, nullable=False)

    image_url = db.Column(
        db.Text,
        default="/static/assets/avatar_img/andy/1.png"
    )

    address = db.Column(db.Text)
    suite = db.Column(db.Text)
    city = db.Column(db.Text)
    state = db.Column(db.Text)
    zip_code = db.Column(db.Text)

    is_visible = db.Column(db.Boolean, nullable=False, default=True)

    tags = db.relationship(
        'Tag',
        secondary="contacts_tags", backref= 'contacts'
    )

    def serialize(self, attr=None):
        """Returns a dict representation of Contact which we can turn into JSON. Excludes mail preference, and status"""
        return {
            'id': self.id,
            'primary_first_name': self.get_contact_attribute('primary_first_name'),
            'primary_last_name': self.get_contact_attribute('primary_last_name'),
            'secondary_first_name': self.get_contact_attribute('secondary_first_name'),
            'secondary_last_name': self.get_contact_attribute('secondary_last_name'),
            'primary_email': self.get_contact_attribute('primary_email'), 
            'secondary_email': self.get_contact_attribute('secondary_email'),
            'primary_phone': self.get_contact_attribute('primary_phone'),
            'secondary_phone': self.get_contact_attribute('secondary_phone'),
            'primary_DOB': self.get_contact_attribute('primary_DOB'),
            'secondary_DOB': self.get_contact_attribute('secondary_DOB'),
            'past_client': self.get_contact_attribute('past_client'),
            'notes': self.get_contact_attribute('notes'),
            'image_url': self.get_contact_attribute('image_url'),
            'address': self.get_contact_attribute('address'),
            'suite': self.get_contact_attribute('suite'),
            'city': self.get_contact_attribute('city'),
            'state': self.get_contact_attribute('state'),
            'zip_code': self.get_contact_attribute('zip_code'),
            'tags': self.get_contact_attribute('tags'),
            'image_url': self.image_url,
            'get_address': self.get_address(),
            'get_primary_name': self.get_primary_name(),
            'get_seondary_name': self.get_secondary_name()
            
        }

    def __repr__(self):
        return f"<Contact {self.id} first_name ={self.primary_first_name} last_name ={self.primary_last_name}>"

    



    def __repr__(self):
        return f"<Contact {self.primary_first_name}, {self.primary_last_name}>"

    def get_address(self):
        """ Format the contact address into a usable string"""
        if self.address:
            if self.suite:
                return f"{self.address}, {self.suite}, {self.city}, {self.state} {self.zip_code}"
            else:
                return f"{self.address}, {self.city}, {self.state} {self.zip_code}"
        else:
            return "None"

    def get_primary_name(self): 
        """ Format primary first name and last name to be a usable string"""
        return f"{self.primary_first_name} {self.primary_last_name}"

    def get_secondary_name(self): 
        """ Format secondary first name and last name to be a usable string"""
        first= self.secondary_first_name
        last=self.secondary_last_name
        if first and last:
            return f"{first} {last}"
        elif first:
            return first
        elif last: 
            return second
        else:
            return "None"

    def get_contact_attribute(self, name):
        """ returns a certain attribute for a contact in string form.  If it doesnt exist, "none" is returned"""
        attribute=getattr(self, name)
        if attribute:
            return attribute
        else:
            return "None"

    # add Sold or bought former properties.


class UserContact(db.Model):
    """Mapping users to contacts."""

    __tablename__ = 'users_contacts'

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    user_id = db.Column(
        db.Integer,
        db.ForeignKey('users.id', ondelete='cascade')
    )

    contact_id = db.Column(
        db.Integer,
        db.ForeignKey('contacts.id', ondelete='cascade')
    )


class Transaction(db.Model):
    """transactions involving user contacts"""

    __tablename__ = 'transactions'

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    name = db.Column(
        db.Text, nullable=False
    )

    trans_type = db.Column(db.Enum(TransType), nullable=False)

    contact_id = db.Column(
        db.Integer,
        db.ForeignKey('contacts.id', ondelete='cascade')
    )

    property_id = db.Column(
        db.Integer,
        db.ForeignKey('properties.id')
    )

    listing_price = db.Column(
        db.Float)

    sold_price = db.Column(
        db.Float)

    closing_date = db.Column(db.DateTime)

    status = db.Column(db.Enum(TransStatus),
                       default=TransStatus.opened, nullable=False)

    contact = db.relationship('Contact', backref='transactions')

    _property = db.relationship('Property', backref='transactions')


class Stage(db.Model):
    """stages for the transaction """

    __tablename__ = 'stages'

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    stage_number = db.Column(
        db.Integer, nullable=False
    )

    transaction_id = db.Column(
        db.Integer,
        db.ForeignKey('transactions.id')
    )

    transaction = db.relationship('Transaction', backref="stages")


class Task(db.Model):
    """Taks for the various transactions. Tasks must be connected to a stage."""

    __tablename__ = 'tasks'

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    name = db.Column(db.Text, nullable=False)

    notes = db.Column(db.Text)

    is_done = db.Column(db.Boolean, default=False)

    stage_id = db.Column(
        db.Integer,
        db.ForeignKey('stages.id')
    )

    stage = db.relationship('Stage', backref='tasks')


class Tag(db.Model): 
    """ Tag model for tagging contacts"""

    __tablename__ = 'tags'

    id= db.Column(db.Integer, primary_key=True, autoincrement=True)

    name = db.Column(db.String(30), nullable=False)

    def __repr__(self):
        t= self
        return f"<Tag id={t.id} name={t.name}>"


class ContactTag(db.Model):
    """ Contact_Tag model for Jane Rothe app"""

    __tablename__ = 'contacts_tags'

    contact_id = db.Column(db.Integer, db.ForeignKey('contacts.id', ondelete="cascade"), nullable=False, primary_key=True)
    
    tag_id = db.Column(db.Integer, db.ForeignKey('tags.id', ondelete="cascade"), nullable=False, primary_key=True)

    def __repr__(self):
        c= self
        return f"<Contact_tag contact_id={c.contact_id} tag_id= {c.tag_id}>"