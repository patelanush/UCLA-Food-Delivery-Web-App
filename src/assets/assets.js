
import foodListData from './food_list.json';
import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import food_1 from './food_1.png'
import food_2 from './food_2.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import cross_icon from './cross_icon.png'
import rating_stars from './rating_stars.png'

const getRandomPrice = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const assets = {
    logo,
    basket_icon,
    header_img,
    rating_stars,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    cross_icon
}

export const menu_list = [
    {
        menu_name: "Vegetarian",
        menu_image: menu_1
    },
    {
        menu_name: "Non-Veg",
        menu_image: menu_2
    
    },
    {
        menu_name: "Vegan",
        menu_image: menu_3
    
    }

]

export const food_list = foodListData.map((item, index) => ({

    _id: (index + 1).toString(),
    name: item.name,
    image: index < foodListData.length/2 ? food_1 : food_2,
    price: getRandomPrice(6, 9),
    description: "UCLA's " + item.name + " is the best " + item.name + " in all of America's college dining halls.",
    category: item.tag === "V" ? "Vegetarian" : item.tag === "VG" ? "Vegan" : "Non-Veg"
}));


