import React, { Component } from 'react';
import Map from '../components/Map';
import { getMap, updateMap } from '../services/api';
import { Redirect } from 'react-router-dom';

import './EditMap.css';

class EditMap extends Component {
  constructor() {
    super();
    this.state = {
      positions: [],
      shouldRedirect: false,
    }
    this.adicionarMarcador = this.adicionarMarcador.bind(this);
    this.updateItemsState= this.updateItemsState.bind(this);
    this.removeItem= this.removeItem.bind(this);
    this.getMapPositions= this.getMapPositions.bind(this);
    this.updateMapPositions= this.updateMapPositions.bind(this);
  }
  adicionarMarcador(event) {
    console.log(window);
    const { offsetX, offsetY } = event.nativeEvent;
    const { positions } = this.state;
    const currentPosition = {
      x: offsetX - 15,
      y: offsetY - 25,
      title: '',
      text: '',
      url: '',
      colorBackground: ''
    }

    this.setState({
      positions: [...positions, currentPosition],
    });
  }

  updateItemsState(index, name, value) {
    const items = this.state.positions;
    items[index][name] = value;
    this.setState({ positions: items, preview: false });
  }

  removeItem(indexItem) {
    const items = this.state.positions;
    const filterdItems = items.filter((item, index) => index !== indexItem);
    this.setState({ positions: filterdItems, preview: false });
  }

  async getMapPositions(){
    const [positions] = await getMap();
    const { mappositions: mapPositions } = positions;
    console.log(positions)
    this.setState({
      positions: mapPositions,
    })
  }

  async updateMapPositions(){
    const {positions} = this.state;
    const response = await updateMap(positions);
    alert(response.statusText);
    this.setState({ shouldRedirect: true });
  }

  componentDidMount() {
    this.getMapPositions();
  }

  render() {
    const { positions, shouldRedirect } = this.state;
    if (shouldRedirect) {
      return (<Redirect to="/admin" />);
    }
    return (
      <div className="edit-map">
        <h1>Editar mapa</h1>
        <Map adicionarMarcador={this.adicionarMarcador} positions={positions} editar={true} />
        <div className="marker-content">
          {positions && positions.map((item, index) => {
            const {
              url,
              text,
              title,
              colorBackground,
              x,
              y,
            } = positions[index];
            return (
              <div className="item" key={index}>
                <label htmlFor={`item-URL-${index}`} >URL</label>
                <input
                  id={`item-URL-${index}`}
                  type="text"
                  name="url"
                  onChange={({ target: { name, value } }) => this.updateItemsState(index, name, value)}
                  value={url}
                />

                <label htmlFor={`item-text-${index}`}>Texto</label>
                <textarea
                  id={`item-text-${index}`}
                  type="text"
                  name="text"
                  onChange={({ target: { name, value } }) => this.updateItemsState(index, name, value)}
                  value={text}
                />

                <label htmlFor={`item-title-${index}`}>Titulo</label>
                <textarea
                  id={`item-title-${index}`}
                  type="text"
                  name="title"
                  onChange={({ target: { name, value } }) => this.updateItemsState(index, name, value)}
                  value={title}
                />

                <label htmlFor={`item-x-${index}`}>X</label>
                <input
                  id={`item-x-${index}`}
                  type="number"
                  className="display"
                  placeholder="px"
                  name="x"
                  onChange={({ target: { name, value } }) => this.updateItemsState(index, name, value)}
                  value={x}
                />

                <label htmlFor={`item-y-${index}`}>Y</label>
                <input
                  id={`item-y-${index}`}
                  type="number"
                  className="display"
                  placeholder="px"
                  name="y"
                  onChange={({ target: { name, value } }) => this.updateItemsState(index, name, value)}
                  value={y}
                />

                <label htmlFor={`item-color-background-${index}`}>Cor de fundo</label>
                <input
                  id={`item-color-background-${index}`}
                  type="text"
                  className="display"
                  placeholder="rgb(r, g, b)"
                  name="colorBackground"
                  onChange={({ target: { name, value } }) => this.updateItemsState(index, name, value)}
                  value={colorBackground}
                />

                <button
                  className="remove-button"
                  onClick={(event) => {
                    event.preventDefault();
                    this.removeItem(index);
                  }}
                >
                  remover
                </button>
              </div>
            )
          })}
        </div>

          <button 
            type="button"
            className="update-map"
            onClick={this.updateMapPositions}
          >
            Atualizar Mapa
          </button>
      </div>
    );
  }
}

export default EditMap;