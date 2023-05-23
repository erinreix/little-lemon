import React from 'react'
import './OurStory.css';
import marioandadrianA from './assets/marioandadrian-a.jpg';
import marioandadrianB from './assets/marioandadrian-b.jpg';

function OurStory() {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={marioandadrianA} alt="Little Lemon chefs" />
        <img src={marioandadrianB} alt="Little Lemon chefs" />
      </div>
    </section>
  );
};

export default OurStory;