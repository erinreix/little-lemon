import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const ConfirmedBooking = () => {
  return (
    <div className="container confirmed-booking">
      <FontAwesomeIcon icon={faCircleCheck} size="3x"/>
      <h2>Your reservation has been confirmed.</h2>
      <p>You'll receive an email with all the details you need. See you soon!</p>
    </div>
  );
};

export default ConfirmedBooking;