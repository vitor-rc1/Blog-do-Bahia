import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css'


class Card extends React.Component {
  constructor(props){
    super()
    this.state = {...props.cardContent }
  }
  render() {
    const { id, cardImg, cardText, cardColor, cardTextColor, title, cardImgWidth} = this.state;
    return(
      <Link 
        className="card" 
        to={`/${id}`} 
        style={{color:`${cardTextColor}`, backgroundColor:`${cardColor}`}}
      >
        {title ? <h2 className="card-title"> {title} </h2> : ''}
        {cardText ? <p className="card-text">{cardText}</p> : ''}
        {cardImg ? <img src={cardImg} alt="example" className="card-img" style={{width:`${cardImgWidth}px`}} /> : ''}
      </Link>
    );
  }
}

export default Card;