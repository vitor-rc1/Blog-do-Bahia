import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RiMapPin2Fill } from "react-icons/ri";
import Parser from 'html-react-parser';


import './Map.css';

import mapImg from '../images/mapa.jpg';
class Map extends Component {
  render() {
    const {positions, adicionarMarcador, editar} = this.props;
    return (
      <div className="map">
          <img 
            src={mapImg} 
            onClick={(event) => editar ? adicionarMarcador(event) : null} 
            className="map-img"
          />
          {positions.map(({ x, y, title, text, url, colorBackground }) => (
            <Link to={url} className="marker-url">
            <div style={
              {
                position: 'absolute',
                left: Number(x),
                top: Number(y)
              }
            }>
              <RiMapPin2Fill key={x + y} className="marker" />
              <div className="marker-container" style={{backgroundColor: colorBackground}}>
                <h3 className="marker-title">{Parser(title)}</h3>
                <p marker="text">{Parser(text)}</p>
              </div>
            </div>
            </Link>
          ))}
      </div>
    );
  }
}

export default Map;