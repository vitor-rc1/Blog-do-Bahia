import React, { Component} from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

class Footer extends Component {
  render() {
    const { color } = this.props
    return (
      <div 
        className="footer-component"
        style={{backgroundColor: `${color}` }}
      >
        <p>Todos os direitos reservados</p>
      </div>
    );
  }
}

export default Footer;