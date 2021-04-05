import React, { Component } from 'react';
import { GiEvilBook } from "react-icons/gi";
import './NotFound.css'

class NotFound extends Component {
  render() {
    return (
      <div className="not-found-component">
        <h1 className="not-found-title">404</h1>
        <GiEvilBook className="not-found-icon" />
        <h2>Infelizmente esse caminho não leva para lugar nenhum</h2>
      </div>
    );
  }
}

export default NotFound;