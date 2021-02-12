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
        <Link className="link" to="/about">Sobre</Link>
        <p>Todos os direitos reservados</p>
        <div>
          <p>Contatos:</p>
          <p>email</p>
        </div>
      </div>
    );
  }
}

export default Footer;