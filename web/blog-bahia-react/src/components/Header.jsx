import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="title">
          <h1>Bahia  Blog</h1>
        </div>
        <Link to="/about" className="about">Sobre</Link>
      </div>
    );
  }
}

export default Header;