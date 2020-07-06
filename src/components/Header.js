import React from 'react';
import PropTypes from 'prop-types';
import logo from '../icons/logo.png';

export function Header({ logoClick }){
  return <img src={logo} alt="logo" onClick={logoClick} style={{cursor: 'pointer'}}/>
}

Header.propTypes = {
  logoClick: PropTypes.func,
}

export default Header;