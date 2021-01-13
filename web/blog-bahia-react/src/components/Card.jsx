import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css'


class Card extends React.Component {
  constructor(props){
    super()
    this.state = {...props.cardContent }
  }
  render() {
    const { 
      id, 
      cardimg: cardImg, 
      cardtext: cardText, 
      cardcolor: cardColor, 
      cardtextcolor:cardTextColor, 
      cardtitle: cardTitle, 
      cardimgwidth: cardImgWidth 
    } = this.state;
    return(
      <Link 
        className="card" 
        to={`/${id}`} 
        style={{color:`${cardTextColor}`, backgroundColor:`${cardColor}`}}
      >
        {cardTitle ? <h2 className="card-title"> {cardTitle} </h2> : ''}
        {cardText ? <p className="card-text">{cardText}</p> : ''}
        {cardImg ? <img src={cardImg} alt="example" className="card-img" style={{width:`${cardImgWidth}px`}} /> : ''}
      </Link>
    );
  }
}

export default Card;