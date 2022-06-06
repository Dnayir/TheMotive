import requests
import json
from os import environ

def fetch_food_venues():
    url = "https://wyre-data.p.rapidapi.com/restaurants/localauthority/Southwark"

    headers = {
        "X-RapidAPI-Host": "wyre-data.p.rapidapi.com",
        "x-rapidapi-key": environ.get("WYRE_API_KEY")
    }

    response = requests.request("GET", url, headers=headers)
    jsonData = json.loads(response.text)
    return jsonData

food = []
drink = []

arr = fetch_food_venues()
for x in arr:
    if x['BusinessType'] == "Pub/bar/nightclub":
        food.append(x)
    elif x['BusinessType'] == "Restaurant/Cafe/Canteen":
        drink.append(x)
    else:
        continue

# print('food: ', food[0])
# print('drink: ', type(drink))


with open('json_data.json', 'w') as outfile:
    for pog in food:
        json.dump(pog, outfile)

with open('json_data.json', 'w') as outfile:
    json.dump(drink, outfile)

