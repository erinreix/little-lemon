import React from 'react'
import { Link } from 'react-router-dom'
import bruschetta from './assets/bruchetta.jpg';
import greeksalad from './assets/greeksalad.jpg';
import lemondessert from './assets/lemondessert.jpg';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from './MealCard';

const meals = [
  {
    name: 'Greek Salad',
    image: greeksalad,
    price: '$12.99',
    description: `The famous greek salad of crispy lettuce, peppers,
    olives and our Chicago style feta cheese, garnished with crunchy
    garlic and rosemary croutons.`,
  },
  {
    name: 'Bruschetta',
    image: bruschetta,
    price: '$5.99',
    description: `Our Bruschetta is made from grilled bread that has
    been smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: 'Lemon Dessert',
    image: lemondessert,
    price: '$5.00',
    description: `This comes straight from grandma's recipe book, every
    last ingredient has been sourced and is as authentic as can be imagined.`,
  },
]

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <Link className="button-primary" to={pages.get('orderOnline').path}>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) =>
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default WeekSpecials;