import requests
from bs4 import BeautifulSoup
import json

url = 'https://menu.dining.ucla.edu/Menus'
response = requests.get(url)

if response.status_code == 200:
    doc = BeautifulSoup(response.text, 'html.parser')

    menu_items = doc.select('a.recipelink')
    
    tag_images = doc.select('img.webcode-16px')

    food_list = []
    
    for item in menu_items:
        food_name = item.get_text(strip=True)
        
        tag_img = item.find_next_sibling('img')
        
        if tag_img and tag_img['alt'] in ['V', 'VG']:
            if 'v.png' in tag_img['src']:
                food_tag = 'V'
            elif 'vg.png' in tag_img['src']:
                food_tag = 'VG'
            else:
                food_tag = ''
        else:
            food_tag = ''

        food_list.append({'name': food_name, 'tag': food_tag})

    with open('src/assets/food_list.json', 'w') as f:
        json.dump(food_list, f, indent=4)
