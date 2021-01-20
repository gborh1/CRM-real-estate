"""User model tests."""

# run these tests like:
#
#    python -m unittest test_user_model.py


import os
from unittest import TestCase

from models import db, User, Contact

from sqlalchemy.exc import IntegrityError

# BEFORE we import our app, let's set an environmental variable
# to use a different database for tests (we need to do this
# before we import our app, since that will have already
# connected to the database

os.environ['DATABASE_URL'] = "postgresql:///jane-test"


# Now we can import app

from app import app

app.config['SQLALCHEMY_ECHO'] = False

# Make Flask errors be real errors, not HTML pages with error info
app.config['TESTING'] = True

# This is a bit of hack, but don't use Flask DebugToolbar
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']

# Create our tables (we do this here, so we only create the tables
# once for all tests --- in each test, we'll delete the data
# and create fresh new clean test data

db.drop_all()

db.create_all()


class UserModelTestCase(TestCase):
    """Test models for Users."""

    def setUp(self):
        """Create test client, add sample data."""

        User.query.delete()

        self.u = User(
            email="testy@test.com",
            first_name="test",
            last_name= "user",
            password="HASHED_PASSWORD"
        )


    def tearDown(self):
        """Clean up any fouled transaction."""

        db.session.rollback()

    def test_user_model(self):
        """Does basic model work?"""

        self.assertEqual(self.u.first_name, 'test')
        self.assertEqual(self.u.last_name, 'user')


    def test_repr(self): 
        """ does repr method work"""

        self.assertEqual(self.u.__repr__(), f"<User {self.u.first_name} {self.u.last_name}>")

    
    def test_user_signup(self): 
        """ does user signup work?"""

        user= User.register('testy@test.com','password','testuser1', "lastname")
        user2= User.register('testy2@test.com','password','testuser2', None)
        self.assertIsInstance(user, User)
        self.assertIsInstance(user2, User)
        db.session.add(user2)
        self.assertRaises(IntegrityError, db.session.commit)

    def test_user_authentication(self): 
        """ does user validation work?"""

        user1= User.register('testy@test.com','password','testuser1', "lastname")
        db.session.add(user1)
        db.session.commit()
        user2 = User.authenticate('testy@test.com', 'password')
        user3=User.authenticate('testy@test.com', 'passoword')
        user4=User.authenticate('testa@test.com', 'password')

        ## validate user with right password and username
        self.assertEqual(user1, user2)

        ## invalidate user with wrong password
        self.assertNotEqual(user1, user3)

        ## invalidate user with wrong username
        self.assertNotEqual(user1, user4)



class ContactModelTestCase(TestCase):
    """Test models for Contacts."""

    def setUp(self):
        """Create test client, add sample data."""

        Contact.query.delete()

        self.contact= Contact(primary_first_name= 'testy', primary_last_name='test', primary_email="testy@gmail.com", secondary_phone= "666-6666", address="1234 mackubin St.", suite='44', city='Seattle', state= "WA", zip_code='34556')
        db.session.add(self.contact)
        db.session.commit()
        


    def tearDown(self):
        """Clean up any fouled transaction."""

        db.session.rollback()

    def test_get_address(self): 
        """test get address method"""
        self.assertEqual(self.contact.get_address(), "1234 mackubin St., 44, Seattle, WA 34556")

    def test_get_contact_attr(self):
        """test get contact attributes method"""
        self.assertEqual(self.contact.get_contact_attribute('primary_email'), "testy@gmail.com")
        self.assertEqual(self.contact.get_contact_attribute('secondary_phone'), "666-6666")
        self.assertEqual(self.contact.get_contact_attribute('zip_code'), "34556")
        