import React from 'react'
import profileicon from './assets/profileicon.png';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Rory Daniel',
    image: profileicon,
    rating: [1,1,1,1,1],
    says: `The food was cooked to perfection.
    The waiter did an excellent job.
    I was happy to see how clean everything was.
    I would eat here every day if I could!`,
  },
  {
    fullName: 'Avery Dana',
    image: profileicon,
    rating: [1,1,1,1,0.5],
    says: `Every dish exceeds my expectation! Although the wait
    time was a little bit long, I would definitely come back
    again to try everything on the menu.`,
  },
  {
    fullName: 'Skylar H.',
    image: profileicon,
    rating: [1,1,1,1,1],
    says: `Love the atmosphere here. The food and drinks are always
    top notch. Lovely staff and chefs, too! Highly recommend.`,
  },
  {
    fullName: 'Charlie A.',
    image: profileicon,
    rating: [1,1,1,1,1],
    says: `One of the greatest Mediterranean restaurant in Chicago!
    Great selection of dishes! Perfect restaurant for family time.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What our customers say!</h2>
        {customers.map((customer, index) =>
          <TestimonialCard key={index} customer={customer} />
        )}
      </div>
    </section>
  );
};

export default Testimonials;