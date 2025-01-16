import React from 'react';

const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

Header.defaultProps = {
    title: 'Default Title',
  };

export default Header;
