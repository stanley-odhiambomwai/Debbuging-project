import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ name, age }) => {
  return (
    <div>
      <h3>User Details</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};


UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
export default UserCard;
