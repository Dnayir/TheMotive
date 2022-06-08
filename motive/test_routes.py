from flask import session

from motive import find_all_categories, get_category_numbers
from motive.models.user import get_uuid


############################################################################################################################################################
                                                                #data Route#
############################################################################################################################################################


def test_get_data(api):
    """Data page loads with title"""
    resp = api.get('/data')
    assert resp.status == '200 OK'
    assert resp.status_code == 200
    assert b'The Motive' in resp.data


def test_post_data(api):
    """Does not allow POST requests to /data"""
    resp = api.post('/data')
    assert resp.status == '405 METHOD NOT ALLOWED'
    assert resp.status_code == 405


############################################################################################################################################################
                                                                #User Model#
############################################################################################################################################################


def test_uuid():
    """Random id generated is longer than 0"""
    rand = get_uuid()
    assert len(rand) > 0


############################################################################################################################################################
                                                                #@me Route#
############################################################################################################################################################


# def test_get_me(api):
#     with api.session_transaction() as session:
#         session["user_id"] = 1
#     resp = api.get("/User")

#     assert resp.status == '200 OK'
#     assert resp.status_code == 200
#     assert '1' in res.json


############################################################################################################################################################
                                                                #register Route#
############################################################################################################################################################


# def test_register_user(api):
#     """With valid data, returns correct json response and logs user is registered"""
#     resp = api.post("/register", json={        
#         'email': 'test@test.com',
#         'password': 'password'
#     })
#     assert session["user_id"] == 1

#     assert resp.status == '200 OK'
#     assert resp.status_code == 200
#     assert b'test@test.com" in resp.json  


def test_register_user_get(api):
    """With invalid data, returns with 400"""
    resp = api.post('/register')

    assert resp.status == '400 BAD REQUEST'
    assert resp.status_code == 400
    assert b'400 Error: Bad Request' in resp.data


############################################################################################################################################################
                                                                #login Route#
############################################################################################################################################################


# def test_login_user(api):
#     """With valid data, returns correct json response and logs user in"""
#     resp = api.post("/login", json={        
#         'email': 'test@test.com',
#         'password': 'password'
#     })
#     assert session["user_id"] == 1

#     assert resp.status == '200 OK'
#     assert resp.status_code == 200
#     assert b'test@test.com" in resp.json  


def test_login_user_get(api):
    """With invalid data, returns with 400"""
    resp = api.post('/login')

    assert resp.status == '400 BAD REQUEST'
    assert resp.status_code == 400
    assert b'400 Error: Bad Request' in resp.data


############################################################################################################################################################
                                                                #logout Route#
############################################################################################################################################################


# def test_logout_user(api):
#     """test session is removed when you log out"""
#     with api.session_transaction() as session:

#         session["user_id"] = 1

#         resp = api.post("/logout")
        
#         assert session["user_id"] == None
#         assert resp.status_code == 200


def test_logout_user_get(api):
    """With invalid method, returns with 405"""
    resp = api.post('/logout')

    assert resp.status == '405 METHOD NOT ALLOWED'
    assert resp.status_code == 405
    assert b'405 Method Not Allowed' in resp.data


############################################################################################################################################################
                                                                #food_motive Route#
############################################################################################################################################################


def test_post_food(api):
    """With valid data, returns correct json response"""
    resp = api.post("/food_motive", json={        
        'latitude': 51.496920,
        'longitude': -0.135380,
        'category': 'Italian'
    })

    assert resp.status == '200 OK'
    assert resp.status_code == 200
    # assert 'Ichiriki Sushi House' in resp.json['results'][0]['name']


def test_post_food_fail(api):
    """With invalid data, returns with 400"""
    resp = api.post("/food_motive", json={          
    })

    assert resp.status == '400 BAD REQUEST'
    assert resp.status_code == 400
    assert b'400 Error: Bad Request' in resp.data


############################################################################################################################################################
                                                                #drink_motive Route#
############################################################################################################################################################


def test_post_drink(api):
    """With category of bar, returns correct json response"""
    resp = api.post("/drink_motive", json={        
        'latitude': 51.496920,
        'longitude': -0.135380,
        'category': 'Bar'
    })

    assert resp.status == '200 OK'
    assert resp.status_code == 200
    assert 'The Albert' in resp.json['results'][0]['name']


def test_post_drink_pub(api):
    """With category of pub, returns only venues listed as bar"""
    resp = api.post("/drink_motive", json={        
        'latitude': 51.496920,
        'longitude': -0.135380,
        'category': 'Pub'
    })

    assert resp.status == '200 OK'
    assert resp.status_code == 200
    assert 'Greencoat Boy' in resp.json['results'][0]['name']


def test_post_drink_fail(api):
    """With invalid data, returns with 400"""
    resp = api.post("/drink_motive", json={          
    })

    assert resp.status == '400 BAD REQUEST'
    assert resp.status_code == 400
    assert b'400 Error: Bad Request' in resp.data
    

############################################################################################################################################################
                                                                #review Route#
############################################################################################################################################################


def test_user_review(api):
    """With valid data, returns correct json response for a review"""
    resp = api.post("/review", json={     
        'username': 'username',
        'restaurant_name': 'food',
        'type_of_food': 'tasty',
        'review_description': 'is very nice'
    })

    assert resp.status == '200 OK'
    assert resp.status_code == 200
    assert resp.json == {"username": 'username',
            "restaurant_name": 'food',
            "type_of_food": 'tasty',
            "review_description":'is very nice'}   


def test_user_review_fail(api):
    """With invalid data, returns with 400"""
    resp = api.post("/review", json={          
    })

    assert resp.status == '400 BAD REQUEST'
    assert resp.status_code == 400
    assert b'400 Error: Bad Request' in resp.data


############################################################################################################################################################
                                                                #find_all_categories Function#
############################################################################################################################################################


def test_find_all_categories_normal():
    """with perfect input, returns expected list"""
    min = 1
    max = 10
    assert find_all_categories(min, max) == '1,2,3,4,5,6,7,8,9,10'


def test_find_all_categories_max_first():
    """if min > max, returns None"""
    min = 10
    max = 1
    assert find_all_categories(min, max) == None


def test_find_all_categories_pub():
    """if list will contain 13018 (pub), list returns without it"""
    min = 13017
    max = 13019
    assert find_all_categories(min, max) == '13017,13019'


def test_find_all_categories_same():
    """if min == max, returns none"""
    min = 10
    max = 10
    assert find_all_categories(min, max) == None


def test_find_all_categories_negative(nums):
    """if max or min is negative, returns None"""
    for item in nums:
        min = item[0]
        max = item[1]
        assert find_all_categories(min, max) == None


############################################################################################################################################################
                                                                #react Route#
############################################################################################################################################################


def test_react_serve(api):
    """if the user navigates to a route not served by the api by get, they are served react app"""
    resp = api.get('/non-existent')

    assert resp.status == '200 OK'
    assert resp.status_code == 200
    assert b"You need to enable JavaScript to run this app." in resp.data
    

############################################################################################################################################################
                                                                #get_category_numbers Function#
############################################################################################################################################################


def test_get_category_numbers(category_options):
    """with each possible option for category (in fixture), returns correct category code(s)"""
    for item in category_options:
        choice = item
        if choice == 'Afghan':
            assert get_category_numbers(choice) == 13066
        elif choice == 'African':
            assert get_category_numbers(choice) == 13067
        elif choice == 'American':
            assert get_category_numbers(choice) == 13068
        elif choice == 'Arepa':
            assert get_category_numbers(choice) == 13069
        elif choice == 'Argentinian':
            assert get_category_numbers(choice) == 13070
        elif choice == 'Armenian':
            assert get_category_numbers(choice) == 13071
        elif choice == 'Asian':
            assert get_category_numbers(choice) == 13072
        elif choice == 'Australian':
            assert get_category_numbers(choice) == 13073
        elif choice == 'Austrian':
            assert get_category_numbers(choice) == 13074
        elif choice == 'Bangladeshi':
            assert get_category_numbers(choice) == 13075
        elif choice == 'Belarusian':
            assert get_category_numbers(choice) == 13076
        elif choice == 'Belgian':
            assert get_category_numbers(choice) == 13077
        elif choice == 'Bosnian':
            assert get_category_numbers(choice) == 13078
        elif choice == 'Brazilian':
            assert get_category_numbers(choice) == '13079,13080,13081,13082,13083,13084,13085,13086,13087,13088,13089,13090,13091,13092'
        elif choice == 'Bulgarian':
            assert get_category_numbers(choice) == 13093
        elif choice == 'Burmese':
            assert get_category_numbers(choice) == 13094
        elif choice == 'Cajun':
            assert get_category_numbers(choice) == 13095
        elif choice == 'Cambodian':
            assert get_category_numbers(choice) == 13096
        elif choice == 'Caribbean':
            assert get_category_numbers(choice) == 13097
        elif choice == 'Caucasian':
            assert get_category_numbers(choice) == 13098
        elif choice == 'Chinese':
            assert get_category_numbers(choice) == '13099,13100,13101,13102,13103,13104,13105,13106,13107,13108,13109,13110,13111,13112,13113,13114,13115,13116,13117,13118,13119,13120,13121,13122,13123,13124,13125,13126,13127,13128,13129,13130,13131,13132'
        elif choice == 'Colombian':
            assert get_category_numbers(choice) == 13133
        elif choice == 'Cuban':
            assert get_category_numbers(choice) == 13135
        elif choice == 'Czech':
            assert get_category_numbers(choice) == 13136
        elif choice == 'Dumpling':
            assert get_category_numbers(choice) == 13136
        elif choice == 'Dutch':
            assert get_category_numbers(choice) == 13138
        elif choice == 'Eastern European':
            assert get_category_numbers(choice) == 13139
        elif choice == 'Egyptian':
            assert get_category_numbers(choice) == 13140
        elif choice == 'Empanada':
            assert get_category_numbers(choice) == 13141
        elif choice == 'English':
            assert get_category_numbers(choice) == 13142
        elif choice == 'Ethiopian':
            assert get_category_numbers(choice) == 13143
        elif choice == 'Falafel':
            assert get_category_numbers(choice) == 13144
        elif choice == 'Fast Food':
            assert get_category_numbers(choice) == 13145
        elif choice == 'Filipino':
            assert get_category_numbers(choice) == 13146
        elif choice == 'French':
            assert get_category_numbers(choice) == '13148,13149,13150,13151,13152,13153,13154,13155,13156,13157,13158,13159,13160,13161,13162,13163,13164'
        elif choice == 'German':
            assert get_category_numbers(choice) == '13165,13166,13167,13168,13169,13170,13171,13172,13173,13174,13175,13176'
        elif choice == 'Greek':
            assert get_category_numbers(choice) == '13177,13178,13179,13180,13181,13182,13183,13184,13185,13186,13187,13188,13189,13190'
        elif choice == 'Halal':
            assert get_category_numbers(choice) == 13191
        elif choice == 'Hawaiian':
            assert get_category_numbers(choice) == '13192,13193'
        elif choice == 'Himalayan':
            assert get_category_numbers(choice) == 13194
        elif choice == 'Honduran':
            assert get_category_numbers(choice) == 13195
        elif choice == 'Hotpot':
            assert get_category_numbers(choice) == 13196
        elif choice == 'Hungarian':
            assert get_category_numbers(choice) == 13197
        elif choice == 'Indian':
            assert get_category_numbers(choice) == '13198,13199,13200,13201,13202,13203,13204,13205,13206,13207,13208,13209,13210,13211,13212,13213,13214,13215,13216,13217,13218,13219,13220,13221,13222,13223,13224'
        elif choice == 'Indonesian':
            assert get_category_numbers(choice) == '13225,13226,13227,13228,13229,13230,13231,13232,13233'
        elif choice == 'Iraqi':
            assert get_category_numbers(choice) == 13234
        elif choice == 'Israeli':
            assert get_category_numbers(choice) == 13235
        elif choice == 'Japanese':
            assert get_category_numbers(choice) == '13236,13237,13238,13239,13240,13241,13242,13243,13244,13245,13246,13247,13248,13249,13250,13251,13252,13253,13254,13255,13256,13257,13258,13259,13260,13261,13262'
        elif choice == 'Italian':
            assert get_category_numbers(choice) == '13263,13264,13265,13266,13267,13268,13269,13270,13271,13272,13273,13274,13275,13276,13277,13278,13279,13280,13281,13282,13283,13284,13285'
        elif choice == 'Jewish':
            assert get_category_numbers(choice) == '13286,13287'
        elif choice == 'Kebab':
            assert get_category_numbers(choice) == 13288
        elif choice == 'Korean':
            assert get_category_numbers(choice) == '13289,13290,13291,13292,13293,13294,13295'
        elif choice == 'Kurdish':
            assert get_category_numbers(choice) == 13296
        elif choice == 'Latin American':
            assert get_category_numbers(choice) == 13297
        elif choice == 'Lebanese':
            assert get_category_numbers(choice) == 13298
        elif choice == 'Malay':
            assert get_category_numbers(choice) == '13299,13300'
        elif choice == 'Mauritian':
            assert get_category_numbers(choice) == 13301
        elif choice == 'Mediterranean':
            assert get_category_numbers(choice) == 13302
        elif choice == 'Mexican':
            assert get_category_numbers(choice) == '13303,13304,13305,13306,13307,13308'
        elif choice == 'Middle Eastern':
            assert get_category_numbers(choice) == 13309
        elif choice == 'Modern European':
            assert get_category_numbers(choice) == 13310
        elif choice == 'Molecular Gastronomy':
            assert get_category_numbers(choice) == 13311
        elif choice == 'Mongolian':
            assert get_category_numbers(choice) == 13312
        elif choice == 'Moroccan':
            assert get_category_numbers(choice) == 13313
        elif choice == 'New American':
            assert get_category_numbers(choice) == 13314
        elif choice == 'Noodle':
            assert get_category_numbers(choice) == 13315
        elif choice == 'Pakistani':
            assert get_category_numbers(choice) == 13316
        elif choice == 'Persian':
            assert get_category_numbers(choice) == '13317,13318,13319,13320,13321'
        elif choice == 'Peruvian':
            assert get_category_numbers(choice) == '13322,13323'
        elif choice == 'Polish':
            assert get_category_numbers(choice) == 13324
        elif choice == 'Portuguese':
            assert get_category_numbers(choice) == 13325
        elif choice == 'Poutine':
            assert get_category_numbers(choice) == 13326
        elif choice == 'Puerto Rican':
            assert get_category_numbers(choice) == 13327
        elif choice == 'Romanian':
            assert get_category_numbers(choice) == 13328
        elif choice == 'Russian':
            assert get_category_numbers(choice) == '13329,13330,13331'
        elif choice == 'Salad':
            assert get_category_numbers(choice) == 13328
        elif choice == 'Salvadoran':
            assert get_category_numbers(choice) == 13333
        elif choice == 'Sandwich':
            assert get_category_numbers(choice) == 13334
        elif choice == 'Satay':
            assert get_category_numbers(choice) == 13335
        elif choice == 'Scandinavian':
            assert get_category_numbers(choice) == 13336
        elif choice == 'Scottish':
            assert get_category_numbers(choice) == 13337
        elif choice == 'Seafood':
            assert get_category_numbers(choice) == 13338
        elif choice == 'Shawarma':
            assert get_category_numbers(choice) == 13339
        elif choice == 'Singaporean':
            assert get_category_numbers(choice) == 13340
        elif choice == 'Slovak':
            assert get_category_numbers(choice) == 13341
        elif choice == 'Soup':
            assert get_category_numbers(choice) == 13342
        elif choice == 'South American':
            assert get_category_numbers(choice) == 13343
        elif choice == 'Southern':
            assert get_category_numbers(choice) == 13344
        elif choice == 'Spanish':
            assert get_category_numbers(choice) == '13345,13346,13347'
        elif choice == 'Sri Lankan':
            assert get_category_numbers(choice) == 13348
        elif choice == 'Swiss':
            assert get_category_numbers(choice) == 13349
        elif choice == 'Syrian':
            assert get_category_numbers(choice) == 13350
        elif choice == 'Tatar':
            assert get_category_numbers(choice) == 13351
        elif choice == 'Thai':
            assert get_category_numbers(choice) == '13352,13353'
        elif choice == 'Tibetan':
            assert get_category_numbers(choice) == 13355
        elif choice == 'Turkish':
            assert get_category_numbers(choice) == '13356,13357,13358,13359,13360,13361,13362,13363,13364,13365,13366,13367,13368,13369,13370,13371,13372,13373'
        elif choice == 'Ukrainian':
            assert get_category_numbers(choice) == '13374,13375,13376'
        elif choice == 'Vegan and Vegetarian':
            assert get_category_numbers(choice) == 13377
        elif choice == 'Venezuelan':
            assert get_category_numbers(choice) == 13378
        elif choice == 'Vietnamese':
            assert get_category_numbers(choice) == 13379
        elif choice == 'Yemeni':
            assert get_category_numbers(choice) == 13380
        else:
            assert get_category_numbers(choice) == 13065


def test_get_category_numbers_fail():
    """if category is all then default category code 13065 is returned"""
    choice = 'all'
    assert get_category_numbers(choice) == 13065


############################################################################################################################################################
                                                                #End Of Tests#
############################################################################################################################################################