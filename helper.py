import random
import gender_guesser.detector as gender

## defind the gender detector once so that you don't have to multiple times for each name
d = gender.Detector(case_sensitive=False)

## note: Currently not being used
def random_image_selector():
    """ selects a random number and returns it in with a 0 before the digit format, if its a single digit"""

    num = random.choice([random.randrange(1, 3), random.randrange(7, 10)])

    return '{:02.0f}'.format(num)



def get_contact_image(name):
    """ gets gender of a person given the name and returns a random image url for the person"""
    g= d.get_gender(name)
    if g == "male":
        num=random.randrange(3, 11)
        link= f"/static/avatar_img/male/{num}.png"
    elif g== 'female':
        num=random.randrange(11, 21)
        link= f"/static/avatar_img/female/{num}.png"
    else:
        num=random.randrange(1, 3)
        link= f"/static/avatar_img/andy/{num}.png"

    return link