import requests
from models import connect_db, db, User
import pandas as pd
from models import Contact, Property, MailOptions
from datetime import datetime
from helper import get_contact_image


def extract_typeform_answers(answers):
    """ given JSON answers, check that first and last name match a registered user and fill user data in database.  """

    first_name = ''
    last_name = ''

    # check to see if the names provided in typeform match the names provided during registration
    for answer in answers:

        if answer['field']['ref'] == 'first_name':
            first_name = answer['text'].lower()
        if answer['field']['ref'] == 'last_name':
            last_name = answer['text'].lower()

    user = User.query.filter_by(first_name=first_name).filter_by(
        last_name=last_name).first()

    if user:
        for answer in answers:

            if answer['field']['ref'] == 'designation':
                text = answer['text']
                user.designation = text
            if answer['field']['ref'] == 'certifications':
                text = answer['text']
                user.certifications = text
            if answer['field']['ref'] == 'dre_num':
                text = answer['text']
                user.dre_num = text
            if answer['field']['ref'] == 'phone_num':
                text = answer['text']
                user.phone_num = text
            if answer['field']['ref'] == 'agent_email':
                text = answer['text']
                user.agent_email = text
            if answer['field']['ref'] == 'office_address':
                text = answer['text']
                user.office_address = text
            if answer['field']['ref'] == 'mls_info':
                text = answer['text']
                user.mls_info = text
            if answer['field']['ref'] == 'broker_info':
                text = answer['text']
                user.broker_info = text
            if answer['field']['ref'] == 'tagline':
                text = answer['text']
                user.tagline = text
            if answer['field']['ref'] == 'website_info':
                text = answer['text']
                user.website_info = text
            if answer['field']['ref'] == 'zillow_info':
                text = answer['text']
                user.zillow_info = text
            if answer['field']['ref'] == 'fb_info':
                text = answer['text']
                user.fb_info = text
            if answer['field']['ref'] == 'insta_info':
                text = answer['text']
                user.insta_info = text
            if answer['field']['ref'] == 'address_book_info':
                text = answer['text']
                user.address_book_info = text
            if answer['field']['ref'] == 'email_acct_info':
                text = answer['text']
                user.email_acct_info = text
            if answer['field']['ref'] == 'broker_logo_one':
                url = answer['file_url']
                file = requests.get(url)
                content = file.content
                user.broker_logo_one = content
            if answer['field']['ref'] == 'broker_logo_two':
                url = answer['file_url']
                file = requests.get(url)
                content = file.content
                user.broker_logo_two = content
            if answer['field']['ref'] == 'logo':
                url = answer['file_url']
                file = requests.get(url)
                content = file.content
                user.logo = content
            if answer['field']['ref'] == 'headshot':
                url = answer['file_url']
                file = requests.get(url)
                content = file.content
                user.headshot = content
            if answer['field']['ref'] == 'signature':
                url = answer['file_url']
                file = requests.get(url)
                content = file.content
                user.signature = content
            if answer['field']['ref'] == 'database':
                url = answer['file_url']
                file = requests.get(url)
                content = file.content
                user.database = content
                extract_database(user, content)
            if answer['field']['ref'] == 'listing_docs':
                url = answer['file_url']
                file = requests.get(url)
                content = file.content
                user.listing_docs = content
            if answer['field']['ref'] == 'buyers_docs':
                url = answer['file_url']
                file = requests.get(url)
                content = file.content
                user.buyers_docs = content
            if answer['field']['ref'] == 'bio':
                url = answer['file_url']
                file = requests.get(url)
                content = file.content
                user.bio = content
    db.session.commit()
    return user


def extract_database(user, content):
    """ extract contacts from excel file and save as individual contacts"""

    # read bynary as a pandas object
    df = pd.read_excel(content)

    # change it to a list of dictionaries that is ready to be iterated. a dictinary for each row in the excel sheet
    contact_dicts = df.to_dict('records')

    # iterate through the list and save each dictionary (each excel row) as a contact model
    for data in contact_dicts:

        # excel cells with no content come in as nan. If it does, change it to None for the database.
        for key, value in data.items():
            if pd.isna(value):
                data[key] = None

        #  since The reason there are no address data points in the contact model if we want to create a contact model
        # from the excel sheet, we must remove address-related data points from the converted dict
        # we will use these data points create a new property model. we will use that id as a foreign key to the property model
        address = data.pop('address', None)
        suite = data.pop('suite', None)
        city = data.pop('city', None)
        state = data.pop('state', None)
        zip_code = data.pop('zip_code', None)

        if address and city and state and zip_code:

            prop = Property(address=address, suite=suite,
                            city=city, state=state, zip_code=zip_code)
            db.session.add(prop)
            db.session.commit()
            property_id = prop.id
        else:
            property_id = None

        # convert Pandas Timestamp in the converted dict to datetime format
        if data['primary_DOB']:
            data['primary_DOB'] = data['primary_DOB'].to_pydatetime()

        if data['secondary_DOB']:
            # Change format
            data['secondary_DOB'] = data['secondary_DOB'].to_pydatetime()

        # replace string formatted mail options with enum object to be stored in database
        for option in MailOptions:
            if option.value == data['mail_preference']:
                data['mail_preference'] = option

        ## get random avatar picture for each contact
        name = data['primary_first_name']
        url= get_contact_image(name)


        contact = Contact(**data, property_id=property_id, image_url=url)
        user.contacts.append(contact)
        db.session.add(contact)
        db.session.commit()

        # add contact and user in user/contact table.

        # Put safeguards for when there is bad info entered.
