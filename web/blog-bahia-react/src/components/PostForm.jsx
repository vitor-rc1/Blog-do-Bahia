import React from 'react';

import './PostForm.css';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.post };
    this.newItem = this.newItem.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.updateItemsState = this.updateItemsState.bind(this);
    this.removeItem = this.removeItem.bind(this);

  }

  newItem() {
    const item = {
      type: '',
      url: '',
      text: '',
      width: '',
      height: '',
      color: '',
    }
    if (this.state.postItems) {
      this.setState({
        postItems: [...this.state.postItems, item]
      })
    } else {
      this.setState({
        postItems: [item]
      })
    }
  }

  updatePost(field, newValue) {
    this.setState({ [field]: newValue });
  }

  updateItemsState(index, name, value) {
    const items = this.state.postItems;
    items[index][name] = value;
    this.setState({ postItems: items });
  }

  removeItem(indexItem) {
    const items = this.state.postItems;
    const filterdItems = items.filter((item, index) => index !== indexItem);
    this.setState({ postItems: filterdItems });
  }

  render() {
    const items = this.state.postItems;
    const { cardText, cardImg, cardColor, cardTextColor, title, postItems } = this.state
    return (
      <div>
        <form>
          <h2 className="title">Criar post</h2>
          <div className="container">
            <div className="page-content">
              <label htmlFor="card-text">Texto do cartão</label>
              <textarea 
                type="text" 
                id="card-text" 
                placeholder="Digite seu texto aqui"
                name="cardText"
                onChange={({target: {name, value}}) => this.updatePost(name, value)}
                value={ cardText }
              />
              <label htmlFor="card-img">Imagem do cartão</label>
              <input 
                type="text" 
                id="card-img" 
                placeholder="URL" 
                name="cardImg"
                onChange={({target: {name, value}}) => this.updatePost(name, value)}
                value={ cardImg }
              />

              <label htmlFor="card-color">Cor do cartão</label>
              <input 
                type="text" 
                id="card-color" 
                placeholder="rgb(r, g, b)" 
                name="cardColor"
                onChange={({target: {name, value}}) => this.updatePost(name, value)}
                value={ cardColor }
              />

              <label htmlFor="card-color">Cor do texto do cartão</label>
              <input 
                type="text" 
                id="card-text-color" 
                placeholder="rgb(r, g, b)" 
                name="cardTextColor"
                onChange={({target: {name, value}}) => this.updatePost(name, value)}
                value={ cardTextColor }
              />

              <p>Conteúdo da página</p>
              <div className="items-page">
                <label htmlFor="post-title"> Titulo
                  <input 
                    type="text" 
                    id="post-title"              
                    name="title"
                    onChange={({target: {name, value}}) => this.updatePost(name, value)}
                    value={ title }
                />
                </label>
                <div>
                  {items ? items.map((item, index) => {
                    return (
                      <div className="item" key={index}>
                        <label htmlFor={`item-${index}`}>Tipo</label>
                        <select 
                          id={`item-${index}`}
                          name="type"
                          onChange={({target: {name, value}}) => this.updateItemsState(index, name, value)}
                          value={ postItems[index].type }
                        >
                          <option hidden="true">Selecione</option>
                          <option value="audio">Áudio</option>
                          <option value="image">Imagem</option>
                          <option value="text">Texto</option>
                          <option value="video">Vídeo</option>
                        </select>

                        <label htmlFor={`item-${index}`}>Posição</label>
                        <select 
                          id={`item-position-${index}`}
                          name="position"
                          onChange={({target: {name, value}}) => this.updateItemsState(index, name, value)}
                          value={ postItems[index].position }
                        >
                          <option hidden="true">Selecione</option>
                          <option value="left">Esquerda</option>
                          <option value="middle">Meio</option>
                          <option value="right">Direita</option>
                        </select>

                        <label htmlFor={`item-URL-${index}`}>URL</label>
                        <input
                          id={`item-URL-${index}`} 
                          type="text"
                          name="url"
                          onChange={({target: {name, value}}) => this.updateItemsState(index, name, value)}
                          value={ postItems[index].url }
                        />

                        <label htmlFor={`item-text-${index}`}>Text</label>
                        <textarea
                          id={`item-text-${index}`} 
                          type="text"
                          name="text"
                          onChange={({target: {name, value}}) => this.updateItemsState(index, name, value)}
                          value={ postItems[index].text }
                        />

                        <label htmlFor={`item-width-${index}`}>Largura</label>
                        <input
                          id={`item-width-${index}`} 
                          type="text" 
                          className="display"
                          name="width"
                          onChange={({target: {name, value}}) => this.updateItemsState(index, name, value)}
                          value={ postItems[index].width }
                        />

                        <label htmlFor={`item-height-${index}`}>Altura</label>
                        <input
                          id={`item-height-${index}`} 
                          type="text" 
                          className="display"
                          name="height"
                          onChange={({target: {name, value}}) => this.updateItemsState(index, name, value)}
                          value={ postItems[index].height }
                        />

                        <label htmlFor={`item-color-${index}`}>Cor</label>
                        <input
                          id={`item-color-${index}`} 
                          type="text" 
                          className="display"
                          name="color"
                          onChange={({target: {name, value}}) => this.updateItemsState(index, name, value)}
                          value={ postItems[index].color }
                        />

                        <button 
                          className="remove-button"
                          onClick= { (event) => {
                            event.preventDefault();
                            this.removeItem(index);
                          } }
                        >
                          remover
                        </button>
                      </div>
                    )
                  }) : <p>Adicione algum item</p>}
                </div>
              </div>
              <button id="add-item" onClick={
                (event) => {
                  event.preventDefault(); 
                  this.newItem();
                  }
                }
              >
                Adicionar conteúdo
              </button>

            </div>

          </div>
          <div className="buttons">
            <button 
              id="create" 
              type="submit"
              onClick={
                (event) => {
                  event.preventDefault(); 
                  this.props.handleSubmit(this.state);
                }
              }
            >
              Criar
            </button>
            <button id="preview" type="submit">Preview</button>
          </div>

        </form>

        <div id="preview-post">
          
        </div>
      </div>
    );
  }
}

export default PostForm;