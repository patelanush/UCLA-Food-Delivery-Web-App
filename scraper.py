import requests
from bs4 import BeautifulSoup

url = 'https://menu.dining.ucla.edu/Menus'
response = requests.get(url)
if response.status_code == 200:
    doc = BeautifulSoup(response.text, 'html.parser')

    menu_items = doc.select('a.recipelink')

    food_list = []
    for item in menu_items:
        food_list.append(item.get_text(strip=True))


print(food_list)