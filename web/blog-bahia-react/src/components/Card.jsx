import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css'

import exampleImg from '../images/img1.jpg'

class Card extends React.Component {
  constructor() {
    super();
    this.state = { ...this.props.card }
  }
  render() {
    const id = 1;
    return(
      <Link className="card" to={`/post/${id}`} >
        <h2 className="card-title">
          Title
        </h2>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem cum sed ad quibusdam molestiae animi expedita quae, voluptatum iusto ex sapiente reiciendis numquam. Ullam molestias voluptate accusantium laborum ipsum.
        </p>
        <img src={exampleImg} alt="example" className="card-img"/>
      </Link>
    );
  }
}

export default Card;