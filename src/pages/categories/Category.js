import { Link } from 'react-router-dom';

import Grapes from '../../img/fruits/grapes.png';
import Watermelon from '../../img/fruits/watermelon.png';
import Banana from '../../img/fruits/banana.png';
import Oranges from '../../img/fruits/oranges.png';
import Papaya from '../../img/fruits/papaya.png';
import Avocado from '../../img/fruits/avocado.png';
import Pineapple from '../../img/fruits/pineapple.png';

import potato from '../../img/vegetables/potato.png';
import Carrot from '../../img/vegetables/carrot.png';
import Onion from '../../img/vegetables/red onion.png';
import Cucumber from '../../img/vegetables/cucumber.png';
import Tomato from '../../img/vegetables/tomato.png';
import Pumpkin from '../../img/vegetables/pumpkin.png';
import Pepper from '../../img/vegetables/pepper.png';

import Cheese from '../../img/dairy/soft cheese.png'
import Butter from '../../img/dairy/butter.png';
import eggs from '../../img/dairy/eggs.png';
import Mozerella from '../../img/dairy/mozerella.png';
import Yoghurt from '../../img/dairy/yoghurt.png';

import Ambo  from '../../img/drinks/ambo lemon.png';
import Anchor  from '../../img/drinks/anchor powdered milk.png'
import Aquadduis from '../../img/drinks/Aquaddis 19L.png';
import Coca from '../../img/drinks/coca 1L.png';
import Fanta  from '../../img/drinks/fanta orange.png';
import Prigat from '../../img/drinks/prigat mango juice.png';
import Fanta1 from '../../img/drinks/fanta pineapple.png';
import Sprite from '../../img/drinks/sprite 500ml.png';

import Powder from '../../img/sanitizing/powder soap.png'
import Lifebuoy from '../../img/sanitizing/lifebuoy.png';
import Soap from '../../img/sanitizing/soap.png';
import Bleach from '../../img/sanitizing/bleach.png';
import Liquid from '../../img/sanitizing/liquid hand soap 5L.png';
import Laundary from '../../img/sanitizing/laundry detergent.png';
import LaundaryS from '../../img/sanitizing/laundry soap.png';

import Oreo from '../../img/snacks/oreo.png'
import Sunchips from '../../img/snacks/sunchips red.png';
import Nutella from '../../img/snacks/nutella.png';
import SunchipsB from '../../img/snacks/sunchips blue.png';
import Nib from '../../img/snacks/nib.png';
import Moya from '../../img/snacks/moya.png';

import Canned from '../../img/dairy/canned tuna.png'
import Meat from '../../img/dairy/meat.png';
import Chicken from '../../img/dairy/whole chicken.png';
import Fish from '../../img/dairy/filleted fish.png';
import  Drumstick from '../../img/dairy/chicken drumsticks.png';
import FishW from '../../img/dairy/whole fish.png';
export const categories = [
  {
    name: 'Fruits',
    products: [
      { id: 1, name: 'Grapes', price: 0.99, image: Grapes },
      { id: 2, name: 'Watermelon', price: 1.49, image: Watermelon },
      { id: 3, name: 'Banana', price: 1.49, image: Banana },
      { id: 4, name: 'Oranges', price: 1.49, image: Oranges },
      { id: 5, name: 'Papaya', price: 1.49, image: Papaya },
      { id: 6, name: 'Avocado', price: 1.49, image: Avocado },
      { id: 7, name: 'Pineapple', price: 1.49, image: Pineapple },
    ],
  },
  {
    name: 'Vegetables',
    products: [
      { id: 8, name: 'Potato', price: 0.99, image: potato },
      { id: 9, name: 'Carrot', price: 1.49, image: Carrot },
      { id: 10, name: 'Onion', price: 1.49, image: Onion },
      { id: 11, name: 'Cucumber', price: 1.49, image: Cucumber },
      { id: 12, name: 'Tomato', price: 1.49, image: Tomato },
      { id: 13, name: 'Pumpkin', price: 1.49, image: Pumpkin },
      { id: 14, name: 'Pepper', price: 1.49, image: Pepper },
    ],
  },
  {
    name: 'Dairy',
    products: [
      { id: 15, name: 'Eggs', price: 1.49, image: eggs },
      { id: 16, name: 'Cheese', price: 0.99, image: Cheese },
      { id: 17, name: 'Butter', price: 1.49, image: Butter },
      { id: 18, name: 'Mozerella', price: 1.49, image: Mozerella },
      { id: 19, name: 'Yoghurt', price: 1.49, image: Yoghurt },
      { id: 20, name: 'Meat', price: 1.49, image: Meat },
    ],
  },
  {
    name: 'Snacks',
    products: [
      { id: 21, name: 'Oreo', price: 0.99, image: Oreo },
      { id: 22, name: 'Sunchips', price: 1.49, image: Sunchips },
      { id: 23, name: 'Nutella', price: 1.49, image: Nutella },
      { id: 24, name: 'SunchipsB', price: 1.49, image: SunchipsB },
      { id: 25, name: 'Nib Chocolate', price: 1.49, image: Nib },
      { id: 26, name: 'Moya', price: 1.49, image: Moya },
    ],
  },
  {
    name: 'Meat',
    products: [
      { id: 27, name: 'Meat', price: 1.49, image: Meat },
      { id: 28, name: 'Whole Chicken', price: 1.49, image: Chicken },
      { id: 29, name: 'Whole Fish', price: 1.49, image: FishW },
      { id: 30, name: 'Chicken Drumstick', price: 1.49, image: Drumstick },
      { id: 31, name: 'Filleted Fish', price: 1.49, image: Fish },
      { id: 32, name: 'Canned Tuna', price: 0.99, image: Canned },
    ],
  },
  {
    name: 'Drinks',
    products: [
      { id: 33,name: 'Fanta Orange', price: 0.99, image:Fanta },
      { id: 34,name: 'Aquaddis', price: 1.49, image: Aquadduis },
      {id: 35, name: 'Prigat Mango Juice', price: 1.49, image: Prigat },
      {id: 36, name: 'Ambo', price: 1.49, image:Ambo },
      { id: 37,name: 'Sprite', price: 1.49, image: Sprite },
      { id: 38,name: 'Coca', price: 1.49, image: Coca },
      { id: 39,name: 'Fanta Pineapple flaviour', price: 1.49, image:Fanta1 },

    ],
  },
    {
      name: 'Sanitizers',
      products: [
        { id: 40,name: 'Powder Soap', price: 0.99, image: Powder },
        { id: 41,name: 'Lifebuoy', price: 1.49, image: Lifebuoy },
        {id: 42, name: 'Soap', price: 1.49, image: Soap },
        {id: 43, name: 'Bleach', price: 1.49, image: Bleach },
        { id: 44,name: 'Liquid Hand Soap 5L', price: 1.49, image: Liquid },
        { id: 45,name: 'Laundary Detergent', price: 1.49, image: Laundary },
        { id: 46,name: 'Laundary Soap', price: 1.49, image: LaundaryS },
  
      ],
    },

]