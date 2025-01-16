import React from 'react';

const UserCard = ({ name, age }) => {
  return (
    <div>
      <h3>User Details</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserCard;
