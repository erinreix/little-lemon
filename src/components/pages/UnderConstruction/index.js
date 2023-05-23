import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import './index.css'

const underConstruction = () => {
  return (
    <div className="container under-construction">
      <FontAwesomeIcon icon={faPersonDigging} size="3x" />
      <h2>Page under construction</h2>
    </div>
  );
};

export default underConstruction;