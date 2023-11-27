import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Stars = ({ quantity }) => {
  const starArray = Array.from({ length: quantity }, (_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={faStar}
      size="lg"
      style={{
        color: '#fa7348',
        marginTop: '10vh',
        marginRight: '1vh',
        border: '1px solid #E4E4E4',
        borderRadius: '5px',
        padding: '10px',
      }}
    />
  ));

  return <div>{starArray}</div>;
};

export default Stars;
