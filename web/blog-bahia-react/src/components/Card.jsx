import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css'


class Card extends React.Component {
  render() {
    const { id, cardImg, cardText, cardColor, cardTextColor, cardTitle} = this.props;
    return(
      <Link 
        className="card" 
        to={`/${id}`} 
        style={{color:`${cardTextColor}`, backgroundColor:`${cardColor}`}}
      >
        {cardTitle ? <h2 className="card-title"> Title </h2> : ''}
        {cardText ? <p className="card-text">{cardText}</p> : ''}
        {cardImg ? <img src={cardImg} alt="example" className="card-img"/> : ''}
      </Link>
    );
  }
}

export default Card;