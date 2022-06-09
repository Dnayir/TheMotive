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

from .models.user import db, User, Reviews
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
       "email": user.email,
       "username": user.username
    })
    

@app.route("/register", methods=["POST"])
def register_user():
    try:
        email = request.json["email"]
        password = request.json["password"]
        username = request.json['username']

        user_exists = User.query.filter_by(email=email).first() is not None

        if user_exists:
            return jsonify({"error": "User already exists"}), 409

        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        new_user = User(email=email, password=hashed_password, username=username)
        db.session.add(new_user)
        db.session.commit()

        session["user_id"] = new_user.id

        return jsonify({
            "id": new_user.id,
            "email": new_user.email,
            "username": new_user.username
        })
    except:
        return '400 Error: Bad Request', 400


@app.route("/login", methods=["POST"])
def login_user():
    try:
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
        "username": user.username,
        "email": user.email
        })
    except:
        return '400 Error: Bad Request', 400


@app.route("/logout", methods=["POST"])
def logout_user():
    try:
        session.pop("user_id")
        return 200
    except:
        return '405 Method Not Allowed', 405


@app.route('/food_motive', methods=["POST"])
def fetch_food_venues():
    if request.method == 'POST':
        try:
            print(request.data)
            longitude = request.json['longitude']
            latitude = request.json['latitude']
            choice = request.json['category']
            
            # latitude = 51.2884736
            # longitude = 1.0715136
            # choice = 'Italian'
            
            long = round(longitude, 4)
            lat = round(latitude, 4)
            categories = get_category_numbers(choice)

            url = "https://api.foursquare.com/v3/places/search?ll={},{}&categories={}&sort=DISTANCE&limit=25".format(lat,long,categories)

            headers = {
                "Accept": "application/json",
                "Authorization": environ.get("FOURSQUARE_API_KEY")
            }
        
            response = requests.get(url, headers=headers)
            jsonData = json.loads(response.text)
            print('jsonData: ', jsonData['results'][0]['name'])
            # print('jsonData: ', jsonData)
            return jsonData, 200
        except:
            return '400 Error: Bad Request', 400

# drinl
@app.route('/drinkmotive', methods=["POST"])
def fetch_drink_venues():
    if request.method == 'POST':
        categories = ''
        try:
            print(request.data)
            # categories = ''
            longitude = request.json['longitude']
            latitude = request.json['latitude']
            choice = request.json['category']

            # latitude = 51.2884736
            # longitude = 1.0715136
            # choice = 'Pub'

            lat = round(latitude, 4)
            long = round(longitude, 4)

            if choice == 'Pub':
                categories = 13018
            else :
                categories = find_all_categories(13003,13025)
            

            url = "https://api.foursquare.com/v3/places/search?ll={},{}&categories={}&sort=DISTANCE&limit=25".format(lat,long,categories)

            headers = {
                "Accept": "application/json",
                "Authorization": environ.get("FOURSQUARE_API_KEY")
            }

            print(url)
        
            response = requests.get(url, headers=headers)
            jsonData = json.loads(response.text)
            # print('jsonData drink: ', jsonData)
            return jsonData, 200
        except Exception as err:
            print(err)
            return '400 Error: Bad Request', 400


@app.route("/review", methods=["POST"])
def user_review():
    try:
        username = request.json["username"]
        restaurant_name = request.json["restaurant_name"]
        type_of_food = request.json["type_of_food"]
        review_description = request.json['review_description']

        new_review = Reviews(username=username, restaurant_name=restaurant_name, type_of_food=type_of_food, review_description=review_description)


        return jsonify({
            "username": new_review.username,
            "restaurant_name": new_review.restaurant_name,
            "type_of_food": new_review.type_of_food,
            "review_description":new_review.review_description
        })
    except:
            return '400 Error: Bad Request', 400


############################################################################################################################################################
                                                                #App Routes#
############################################################################################################################################################


@app.errorhandler(exceptions.NotFound)
def serve(err):
    return send_from_directory(app.static_folder, "index.html")
    


if __name__ == "__main__": # pragma: no cover
    app.run(debug=False)


############################################################################################################################################################
                                                                #App Functions#
############################################################################################################################################################


def find_all_categories(min, max):
    result = ""
    if max > min and min > 0 and max > 0:
        arr = []
        while min < max + 1:
            if min == max :
                arr.append(min)
            elif min == 13018:
                pass
            else :
                arr.append(min)
                arr.append(",")
            min = min + 1
        for item in arr:
            result+=(str(item))
    else:
        result = None

    return result


def get_category_numbers(choice):
        if choice == 'Afghan':
            categories = 13066
            return categories
        elif choice == 'African':
            categories = 13067
            return categories
        elif choice == 'American':
            categories = 13068
            return categories
        elif choice == 'Arepa':
            categories = 13069
            return categories
        elif choice == 'Argentinian':
            categories = 13070
            return categories
        elif choice == 'Armenian':
            categories = 13071
            return categories
        elif choice == 'Asian':
            categories = 13072
            return categories
        elif choice == 'Australian':
            categories = 13073
            return categories
        elif choice == 'Austrian':
            categories = 13074
            return categories
        elif choice == 'Bangladeshi':
            categories = 13075
            return categories
        elif choice == 'Belarusian':
            categories = 13076
            return categories
        elif choice == 'Belgian':
            categories = 13077
            return categories
        elif choice == 'Bosnian':
            categories = 13078
            return categories
        elif choice == 'Brazilian':
            categories = find_all_categories(13079,13092)
            return categories
        elif choice == 'Bulgarian':
            categories = 13093
            return categories
        elif choice == 'Burmese':
            categories = 13094
            return categories
        elif choice == 'Cajun':
            categories = 13095
            return categories
        elif choice == 'Cambodian':
            categories = 13096
            return categories
        elif choice == 'Caribbean':
            categories = 13097
            return categories
        elif choice == 'Caucasian':
            categories = 13098
            return categories
        elif choice == 'Chinese':
            categories = find_all_categories(13099,13132)
            return categories
        elif choice == 'Colombian':
            categories = 13133
            return categories
        elif choice == 'Cuban':
            categories = 13135
            return categories
        elif choice == 'Czech':
            categories = 13136
            return categories
        elif choice == 'Dumpling':
            categories = 13136
            return categories
        elif choice == 'Dutch':
            categories = 13138
            return categories
        elif choice == 'Eastern European':
            categories = 13139
            return categories
        elif choice == 'Egyptian':
            categories = 13140
            return categories
        elif choice == 'Empanada':
            categories = 13141
            return categories
        elif choice == 'English':
            categories = 13142
            return categories
        elif choice == 'Ethiopian':
            categories = 13143
            return categories
        elif choice == 'Falafel':
            categories = 13144
            return categories
        elif choice == 'Fast Food':
            categories = 13145
            return categories
        elif choice == 'Filipino':
            categories = 13146
            return categories
        elif choice == 'French':
            categories = find_all_categories(13148,13164)
            return categories
        elif choice == 'German':
            categories = find_all_categories(13165,13176)
            return categories
        elif choice == 'Greek':
            categories = find_all_categories(13177,13190)
            return categories
        elif choice == 'Halal':
            categories = 13191
            return categories
        elif choice == 'Hawaiian':
            categories = find_all_categories(13192,13193)
            return categories
        elif choice == 'Himalayan':
            categories = 13194
            return categories
        elif choice == 'Honduran':
            categories = 13195
            return categories
        elif choice == 'Hotpot':
            categories = 13196
            return categories
        elif choice == 'Hungarian':
            categories = 13197
            return categories
        elif choice == 'Indian':
            categories = find_all_categories(13198,13224)
            return categories
        elif choice == 'Indonesian':
            categories = find_all_categories(13225,13233)
            return categories
        elif choice == 'Iraqi':
            categories = 13234  
            return categories
        elif choice == 'Israeli':
            categories = 13235
            return categories
        elif choice == 'Japanese':
            categories = find_all_categories(13236,13262)
            return categories
        elif choice == 'Italian':
            categories = find_all_categories(13263,13285)
            return categories
        elif choice == 'Jewish':
            categories = find_all_categories(13286,13287)
            return categories
        elif choice == 'Kebab':
            categories = 13288
            return categories
        elif choice == 'Korean':
            categories = find_all_categories(13289,13295)
            return categories
        elif choice == 'Kurdish':
            categories = 13296
            return categories
        elif choice == 'Latin American':
            categories = 13297
            return categories
        elif choice == 'Lebanese':
            categories = 13298
            return categories
        elif choice == 'Malay':
            categories = find_all_categories(13299,13300)
            return categories
        elif choice == 'Mauritian':
            categories = 13301
            return categories
        elif choice == 'Mediterranean':
            categories = 13302
            return categories
        elif choice == 'Mexican':
            categories = find_all_categories(13303,13308)
            return categories
        elif choice == 'Middle Eastern':
            categories = 13309
            return categories
        elif choice == 'Modern European':
            categories = 13310
            return categories
        elif choice == 'Molecular Gastronomy':
            categories = 13311
            return categories
        elif choice == 'Mongolian':
            categories = 13312
            return categories
        elif choice == 'Moroccan':
            categories = 13313
            return categories
        elif choice == 'New American':
            categories = 13314
            return categories
        elif choice == 'Noodle':
            categories = 13315
            return categories
        elif choice == 'Pakistani':
            categories = 13316
            return categories
        elif choice == 'Persian':
            categories = find_all_categories(13317,13321)
            return categories
        elif choice == 'Peruvian':
            categories = find_all_categories(13322,13323)
            return categories
        elif choice == 'Polish':
            categories = 13324
            return categories
        elif choice == 'Portuguese':
            categories = 13325
            return categories
        elif choice == 'Poutine':
            categories = 13326
            return categories
        elif choice == 'Puerto Rican':
            categories = 13327
            return categories
        elif choice == 'Romanian':
            categories = 13328
            return categories
        elif choice == 'Russian':
            categories = find_all_categories(13329,13331)
            return categories
        elif choice == 'Salad':
            categories = 13328
            return categories
        elif choice == 'Salvadoran':
            categories = 13333
            return categories
        elif choice == 'Sandwich':
            categories = 13334
            return categories
        elif choice == 'Satay':
            categories = 13335
            return categories
        elif choice == 'Scandinavian':
            categories = 13336
            return categories
        elif choice == 'Scottish':
            categories = 13337
            return categories
        elif choice == 'Seafood':
            categories = 13338
            return categories
        elif choice == 'Shawarma':
            categories = 13339
            return categories
        elif choice == 'Singaporean':
            categories = 13340
            return categories
        elif choice == 'Slovak':
            categories = 13341
            return categories
        elif choice == 'Soup':
            categories = 13342
            return categories
        elif choice == 'South American':
            categories = 13343
            return categories
        elif choice == 'Southern':
            categories = 13344
            return categories
        elif choice == 'Spanish':
            categories = find_all_categories(13345,13347)
            return categories
        elif choice == 'Sri Lankan':
            categories = 13348
            return categories
        elif choice == 'Swiss':
            categories = 13349
            return categories
        elif choice == 'Syrian':
            categories = 13350
            return categories
        elif choice == 'Tatar':
            categories = 13351
            return categories
        elif choice == 'Thai':
            categories = find_all_categories(13352,13353)
            return categories
        elif choice == 'Tibetan':
            categories = 13355
            return categories
        elif choice == 'Turkish':
            categories = find_all_categories(13356,13373)
            return categories
        elif choice == 'Ukrainian':
            categories = find_all_categories(13374,13376)
            return categories
        elif choice == 'Vegan and Vegetarian':
            categories = 13377
            return categories
        elif choice == 'Venezuelan':
            categories = 13378
            return categories
        elif choice == 'Vietnamese':
            categories = 13379
            return categories
        elif choice == 'Yemeni':
            categories = 13380
            return categories
        else:
            categories = 13065
            return categories


############################################################################################################################################################
                                                                #End Of Server#
############################################################################################################################################################
