from cgitb import reset
from unittest import suite
from dotenv import load_dotenv
from os import environ
import redis
from flask_bcrypt import Bcrypt
from flask_session import Session
from flask import Flask, send_from_directory, jsonify, request, session
from flask_cors import CORS
from werkzeug import exceptions
import requests
import json

from .models.user import db, User
# Load environment variables

load_dotenv()

database_uri = environ.get('DATABASE_URL')
if 'postgres' in database_uri:
    database_uri = database_uri.replace('postgres:', 'postgresql:')


# Set up the app

app = Flask(__name__, static_folder="client/build", static_url_path="")
app.config.update(
    SQLALCHEMY_DATABASE_URI=database_uri,
    SQLALCHEMY_TRACK_MODIFICATIONS=environ.get('SQL_ALCHEMY_TRACK_MODIFICATIONS'),
    SECRET_KEY=environ.get('SECRET'),
    SESSION_TYPE = "redis",
    SESSION_PERMANENT = False,
    SESSION_REDIS = redis.from_url("redis://:pd5b772b513d356ff7c0dd1514db19557505e48a390959bd4c93242382ad159ef@ec2-54-194-35-138.eu-west-1.compute.amazonaws.com:31459"),
    SESSION_COOKIE_SECURE = True
)

CORS(app, supports_credentials=True)

bcrypt = Bcrypt(app)
server_session = Session(app)
db.app = app
db.init_app(app)

############################################################################################################################################################
                                                                #Api Routes#
############################################################################################################################################################
@app.route("/data", methods=["GET"])
def index():
    return jsonify({
        "title": "The Motive"
    })

@app.route("/@me")
def get_current_user():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unauthorised"}), 401
    
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id": user.id,
       "email": user.email
    })

@app.route("/register", methods=["POST"])
def register_user():
    email = request.json["email"]
    password = request.json["password"]

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "User already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    session["user_id"] = new_user.id

    return jsonify({
       "id": new_user.id,
       "email":new_user.email
    })



@app.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorised"}), 401 

    if not bcrypt.check_password_hash(user.password, password):
         return jsonify({"error": "Unauthorised"}), 401

    session["user_id"] = user.id

    return jsonify({
       "id": user.id,
       "email": user.email
    })

@app.route("/logout", methods=["POST"])
def logout_user():
    session.pop("user_id")
    return "200"


@app.route('/food_motive', methods=["POST"])
def fetch_food_venues():
    if request.method == 'POST':
        print(request.data)
        # longitude = request.data['longitude']
        # latitude = request.data['latitude']
        # choice = request.data['category']
        latitude = 51.2884736
        lat = round(latitude, 4)
        longitude = 1.0715136
        long = round(longitude, 4)
        choice = 'Italian'
        categories = get_category_numbers(choice)

        url = "https://api.foursquare.com/v3/places/search?ll={},{}&categories={}&sort=DISTANCE&limit=25".format(lat,long,categories)

        headers = {
            "Accept": "application/json",
            "Authorization": environ.get("FOURSQUARE_API_KEY")
        }
    
        response = requests.get(url, headers=headers)
        jsonData = json.loads(response.text)
        # print('jsonData: ', jsonData['results'][0]['name'])
        print('jsonData: ', jsonData)
        return jsonData
        # return 'pogChamp'


@app.route('/drink_motive', methods=["POST"])
def fetch_drink_venues():
    if request.method == 'POST':
        print(request.data)
        categories = ''
        # longitude = request.data['longitude']
        # latitude = request.data['latitude']
        # choice = request.data['category']
        latitude = 51.2884736
        lat = round(latitude, 4)
        longitude = 1.0715136
        long = round(longitude, 4)
        choice = 'Pub'

        if choice == 'Pub':
            categories = 13018
        else :
            min = 13003
            max = 13025
            categories = find_all_categories(min,max)
        

        url = "https://api.foursquare.com/v3/places/search?ll={},{}&categories={}&sort=DISTANCE&limit=25".format(lat,long,categories)


        headers = {
            "Accept": "application/json",
            "Authorization": environ.get("FOURSQUARE_API_KEY")
        }

        print(url)
    
        response = requests.get(url, headers=headers)
        jsonData = json.loads(response.text)
        print('jsonData: ', jsonData)
        return jsonData




# @app.route('/food_list')
# def fetch_indiviudal_venue():
#     url = "https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/get-info"

#     querystring = {"restaurantId":"522995"}

#     headers = {
#         "X-RapidAPI-Host": "the-fork-the-spoon.p.rapidapi.com",
#         "X-RapidAPI-Key": environ.get("FORK_API_KEY")
#     }

#     response = requests.request("GET", url, headers=headers, params=querystring)

#     print(response.text)
#     jsonData = response.json()
#     for item in jsonData:
#         print(item)
#     return jsonData


############################################################################################################################################################
                                                                #App Routes#
############################################################################################################################################################

@app.errorhandler(exceptions.NotFound)
def serve(err):
    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(debug=False)


############################################################################################################################################################
                                                                #App Functions#
############################################################################################################################################################

def find_all_categories(min, max):
    arr = []
    while min < max + 1:
        if min == max :
            arr.append(min)
        elif min == 13018:
            print('pub!')
        else :
            arr.append(min)
            arr.append(",")
        min = min + 1
    
    result = ""
    for item in arr:
        result+=(str(item))

    return result



def get_category_numbers(choice):
        if choice == 'Afghan':
            categories = 13066
        elif choice == 'African':
            categories = 13067
        elif choice == 'American':
            categories = 13068
        elif choice == 'Arepa':
            categories = 13069
        elif choice == 'Argentinian':
            categories = 13070
        elif choice == 'Armenian':
            categories = 13071
        elif choice == 'Asian':
            categories = 13072
        elif choice == 'Australian':
            categories = 13073
        elif choice == 'Austrian':
            categories = 13074
        elif choice == 'Bangladeshi':
            categories = 13075
        elif choice == 'Belarusian':
            categories = 13076
        elif choice == 'Belgian':
            categories = 13077
        elif choice == 'Bosnian':
            categories = 13078
        elif choice == 'Brazilian':
            categories = find_all_categories(13079,13092)
        elif choice == 'Bulgarian':
            categories = 13093
        elif choice == 'Burmese':
            categories = 13094
        elif choice == 'Cajun':
            categories = 13095
        elif choice == 'Cambodian':
            categories = 13096
        elif choice == 'Caribbean':
            categories = 13097
        elif choice == 'Caucasian':
            categories = 13098
        elif choice == 'Chinese':
            categories = find_all_categories(13099,13132)
        elif choice == 'Colombian':
            categories = 13133
        elif choice == 'Cuban':
            categories = 13135
        elif choice == 'Czech':
            categories = 13136
        elif choice == 'Dumpling':
            categories = 13136
        elif choice == 'Dutch':
            categories = 13138
        elif choice == 'Eastern European':
            categories = 13139
        elif choice == 'Egyptian':
            categories = 13140
        elif choice == 'Empanada':
            categories = 13141
        elif choice == 'English':
            categories = 13142
        elif choice == 'Ethiopian':
            categories = 13143
        elif choice == 'Falafel':
            categories = 13144
        elif choice == 'Fast Food':
            categories = 13145
        elif choice == 'Filipino':
            categories = 13146
        elif choice == 'French':
            categories = find_all_categories(13148,13164)
        elif choice == 'German':
            categories = find_all_categories(13165,13176)
        elif choice == 'Greek':
            categories = find_all_categories(13177,13190)
        elif choice == 'Halal':
            categories = 13191
        elif choice == 'Hawaiian':
            categories = find_all_categories(13192,13193)
        elif choice == 'Himalayan':
            categories = 13194
        elif choice == 'Honduran':
            categories = 13195
        elif choice == 'Hotpot':
            categories = 13196
        elif choice == 'Hungarian':
            categories = 13197
        elif choice == 'Indian':
            categories = find_all_categories(13198,13224)
        elif choice == 'Indonesian':
            categories = find_all_categories(13225,13233)
        elif choice == 'Iraqi':
            categories = 13234  
        elif choice == 'Israeli':
            categories = 13235
        elif choice == 'Japanese':
            categories = find_all_categories(13236,13262)
        elif choice == 'Italian':
            categories = find_all_categories(13263,13285)
        elif choice == 'Jewish':
            categories = find_all_categories(13286,13287)
        elif choice == 'Kebab':
            categories = 13288
        elif choice == 'Korean':
            categories = find_all_categories(13289,13295)
        elif choice == 'Kurdish':
            categories = 13296
        elif choice == 'Latin American':
            categories = 13297
        elif choice == 'Lebanese':
            categories = 13298
        elif choice == 'Malay':
            categories = find_all_categories(13299,13300)
        elif choice == 'Mauritian':
            categories = 13301
        elif choice == 'Mediterranean':
            categories = 13302
        elif choice == 'Mexican':
            categories = find_all_categories(13303,13308)
        elif choice == 'Middle Eastern':
            categories = 13309
        elif choice == 'Modern European':
            categories = 13310
        elif choice == 'Molecular Gastronomy':
            categories = 13311
        elif choice == 'Mongolian':
            categories = 13312
        elif choice == 'Moroccan':
            categories = 13313
        elif choice == 'New American':
            categories = 13314
        elif choice == 'Noodle':
            categories = 13315
        elif choice == 'Pakistani':
            categories = 13316
        elif choice == 'Persian':
            categories = find_all_categories(13317,13321)
        elif choice == 'Peruvian':
            categories = find_all_categories(13322,13323)
        elif choice == 'Polish':
            categories = 13324
        elif choice == 'Portuguese':
            categories = 13325
        elif choice == 'Poutine':
            categories = 13326
        elif choice == 'Puerto Rican':
            categories = 13327
        elif choice == 'Romanian':
            categories = 13328
        elif choice == 'Russian':
            categories = find_all_categories(13329,13331)
        elif choice == 'Salad':
            categories = 13328
        elif choice == 'Salvadoran':
            categories = 13333
        elif choice == 'Sandwich':
            categories = 13334
        elif choice == 'Satay':
            categories = 13335
        elif choice == 'Scandinavian':
            categories = 13336
        elif choice == 'Scottish':
            categories = 13337
        elif choice == 'Seafood':
            categories = 13338
        elif choice == 'Shawarma':
            categories = 13339
        elif choice == 'Singaporean':
            categories = 13340
        elif choice == 'Slovak':
            categories = 13341
        elif choice == 'Soup':
            categories = 13342
        elif choice == 'South American':
            categories = 13343
        elif choice == 'Southern':
            categories = 13344
        elif choice == 'Spanish':
            categories = find_all_categories(13345,13347)
        elif choice == 'Sri Lankan':
            categories = 13348
        elif choice == 'Swiss':
            categories = 13349
        elif choice == 'Syrian':
            categories = 13350
        elif choice == 'Tatar':
            categories = 13351
        elif choice == 'Thai':
            categories = find_all_categories(13352,13353)
        elif choice == 'Tibetan':
            categories = 13355
        elif choice == 'Turkish':
            categories = find_all_categories(13356,13373)
        elif choice == 'Ukrainian':
            categories = find_all_categories(13374,13376)
        elif choice == 'Vegan and Vegetarian':
            categories = 13377
        elif choice == 'Venezuelan':
            categories = 13378
        elif choice == 'Vietnamese':
            categories = 13379
        elif choice == 'Yemeni':
            categories = 13380
        else:
            categories = 13065
        return categories