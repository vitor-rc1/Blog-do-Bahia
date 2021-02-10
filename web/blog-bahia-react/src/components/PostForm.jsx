import React from 'react';
import PostContent from './PostContent';
import Card from './Card';

import './PostForm.css';

class PostForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      cardText: '',
      cardImg: '',
      cardColor: '',
      cardImgWidth: '',
      cardTextColor: '',
      cardTitle: '',
      colorPage: '',
      title: '',
      titleColor: '',
      section: '',
      postItems: [],
      preview: false
    };
    this.newItem = this.newItem.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.updateItemsState = this.updateItemsState.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.previewPost = this.previewPost.bind(this);

  }

  newItem() {
    const item = {
      type: '',
      position: '',
      url: '',
      text: '',
      width: '',
      height: '',
      colorBackground: '',
      colorText: '',
      leftPos: '',
      topPos: '',
      colorPage: '',
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
    this.setState({ [field]: newValue, preview: false });
  }

  updateItemsState(index, name, value) {
    const items = this.state.postItems;
    items[index][name] = value;
    this.setState({ postItems: items, preview: false });
  }

  removeItem(indexItem) {
    const items = this.state.postItems;
    const filterdItems = items.filter((item, index) => index !== indexItem);
    this.setState({ postItems: filterdItems, preview: false });
  }

  previewPost() {
    const {
      id,
      cardText: cardtext,
      cardImg: cardimg,
      cardColor: cardcolor,
      cardImgWidth: cardimgwidth,
      cardTextColor: cardtextcolor,
      cardTitle: cardtitle,
      colorPage: colorpage,
      title,
      titleColor: titlecolor,
      postItems,
    } = this.state
    const cardPreview = {
      id,
      cardimg,
      cardtext,
      cardcolor,
      cardtextcolor,
      cardtitle,
      cardimgwidth
    }
    const postPreview = {
          title,
          postitems: {postItems},
          colorpage,
          titlecolor
    }
    return (
      <div>
        <Card cardContent={ cardPreview } />
        <PostContent post={ postPreview } />
      </div>
    )
  }

  componentDidMount() {
    const { type } = this.props;
    if (type === 'edit') {
      this.propsToState(this.props.post);
    }
  }

  propsToState(post) {
    const {
      id,
      colorpage: colorPage,
      cardtext: cardText,
      cardimg: cardImg,
      cardcolor: cardColor,
      cardimgwidth: cardImgWidth,
      cardtextcolor: cardTextColor,
      cardtitle: cardTitle,
      title,
      titlecolor: titleColor,
      section,
      postitems: { postItems },
    } = post;
    this.setState({
      id,
      cardText,
      cardImg,
      cardColor,
      cardImgWidth,
      cardTextColor,
      cardTitle,
      title,
      titleColor,
      section,
      postItems,
      colorPage,
    })
  }

  render() {
    const items = this.state.postItems;
    const {
      colorPage,
      cardText,
      cardImg,
      cardColor,
      cardImgWidth,
      cardTextColor,
      cardTitle,
      title,
      titleColor,
      section,
      preview,
      postItems,
    } = this.state;
    const { newPost, editPost } = this.props;
    return (
      <div>
        <form>
          <h2 className="title">Criar post</h2>
          <div className="container">
            <div className="page-content">
              <fieldset className="card-content">
                <label htmlFor="card-text">Texto do cartão</label>
                <textarea
                  type="text"
                  id="card-text"
                  placeholder="Digite seu texto aqui"
                  name="cardText"
                  onChange={({ target: { name, value } }) => this.updatePost(name, value)}
                  value={cardText}
                />

                <label htmlFor="card-title">Título do cartão</label>
                <input
                  type="text"
                  id="card-title"
                  placeholder="URL"
                  name="cardTitle"
                  onChange={({ target: { name, value } }) => this.updatePost(name, value)}
                  value={cardTitle}
                />

                <label htmlFor="card-img">Imagem do cartão</label>
                <input
                  type="text"
                  id="card-img"
                  placeholder="URL"
                  name="cardImg"
                  onChange={({ target: { name, value } }) => this.updatePost(name, value)}
                  value={cardImg}
                />

                <label htmlFor="card-img">Tamanho da imagem do cartão</label>
                <input
                  type="text"
                  id="card-img-width"
                  placeholder="px"
                  name="cardImgWidth"
                  onChange={({ target: { name, value } }) => this.updatePost(name, value)}
                  value={cardImgWidth}
                />

                <label htmlFor="card-color">Cor do cartão</label>
                <input
                  type="text"
                  id="card-color"
                  placeholder="rgb(r, g, b)"
                  name="cardColor"
                  onChange={({ target: { name, value } }) => this.updatePost(name, value)}
                  value={cardColor}
                />

                <label htmlFor="card-color">Cor do texto do cartão</label>
                <input
                  type="text"
                  id="card-text-color"
                  placeholder="rgb(r, g, b)"
                  name="cardTextColor"
                  onChange={({ target: { name, value } }) => this.updatePost(name, value)}
                  value={cardTextColor}
                />

              </fieldset>


              <fieldset className="items-page">
                <p>Conteúdo da página</p>
                <label htmlFor="post-section">Seção</label>
                <input
                  type="text"
                  id="post-section"
                  name="section"
                  onChange={({ target: { name, value } }) => this.updatePost(name, value)}
                  value={section}
                />

                <label htmlFor="post-title">Titulo</label>
                <input
                  type="text"
                  id="post-title"
                  name="title"
                  onChange={({ target: { name, value } }) => this.updatePost(name, value)}
                  value={title}
                />

                <label htmlFor="post-title-color">Cor do titulo</label>
                <input
                  type="text"
                  id="post-title-color"
                  placeholder="rgb(r, g, b)"
                  name="titleColor"
                  onChange={({ target: { name, value } }) => this.updatePost(name, value)}
                  value={titleColor}
                />

                <label htmlFor="color-page">Cor de fundo do post</label>
                <input
                  type="text"
                  id="color-page"
                  placeholder="rgb(r, g, b)"
                  name="colorPage"
                  onChange={({ target: { name, value } }) => this.updatePost(name, value)}
                  value={colorPage}
                />


                <div>
                  {items ? items.map((item, index) => {
                    const {
                      type,
                      url,
                      text,
                      colorText,
                      colorBackground,
                      height,
                      width,
                      leftPos,
                      topPos,
                      position,
                    } = postItems[index];
                    return (
                      <div className="item" key={index}>
                        <label htmlFor={`item-${index}`}>Tipo</label>
                        <select
                          id={`item-${index}`}
                          name="type"
                          onChange={({ target: { name, value } }) => this.updateItemsState(index, name, value)}
                          value={type}
                        >
                          <option hidden={true}>Selecione</option>
                          <option value="audio">Áudio</option>
                          <option value="image">Imagem</option>
                          <option value="text">Texto</option>
                          <option value="video">Vídeo</option>
                        </select>

                        {/* <label htmlFor={`item-${index}`}>Posição</label>
                        <select
                          id={`item-position-${index}`}
                          name="position"
                          onChange={({ target: { name, value } }) => this.updateItemsState(index, name, value)}
                          value={position}
                        >
                          <option hidden={true}>Selecione</option>
                          <option value="left">Esquerda</option>
                          <option value="middle">Meio</option>
                          <option value="right">Direita</option>
                        </select> */}

                        <label
                          htmlFor={`item-URL-${index}`}
                          hidden={type === 'text'}
                        >
                          URL
                        </label>
                        <input
                          id={`item-URL-${index}`}
                          type="text"
                          name="url"
                          onChange={({ target: { name, value } }) => this.updateItemsState(index, name, value)}
                          value={url}
                          hidden={type === 'text'}

                        />

                        <label htmlFor={`item-text-${index}`}>Text</label>
                        <textarea
                          id={`item-text-${index}`}
                          type="text"
                          name="text"
                          onChange={({ target: { name, value } }) => this.updateItemsState(index, name, value)}
                          value={text}
                        />

                        <label
                          htmlFor={`item-width-${index}`}
                          hidden={type === 'audio'}
                        >
                          Largura
                        </label>
                        <input
                          id={`item-width-${index}`}
                          type="text"
                          className="display"
                          placeholder="px"
                          name="width"
                          onChange={({ target: { name, value } }) => this.updateItemsState(index, name, value)}
                          value={width}
                          hidden={type === 'audio'}
                        />

                        <label
                          htmlFor={`item-height-${index}`}
                          hidden={type === 'audio' || type === 'text'}
                        >
                          Altura
                        </label>
                        <input
                          id={`item-height-${index}`}
                          type="text"
                          className="display"
                          placeholder="px"
                          name="height"
                          onChange={({ target: { name, value } }) => this.updateItemsState(index, name, value)}
                          value={height}
                          hidden={type === 'audio' || type === 'text'}
                        />

                        <label
                          htmlFor={`item-top-${index}`}
                        >
                          Pos Y
                        </label>
                        <input
                          id={`item-top-${index}`}
                          type="text"
                          className="display"
                          placeholder="px"
                          name="topPos"
                          onChange={({ target: { name, value } }) => this.updateItemsState(index, name, value)}
                          value={topPos}
                        />

                        <label
                          htmlFor={`item-top-${index}`}
                        >
                          Pos X
                        </label>
                        <input
                          id={`item-left-${index}`}
                          type="text"
                          className="display"
                          placeholder="px"
                          name="leftPos"
                          onChange={({ target: { name, value } }) => this.updateItemsState(index, name, value)}
                          value={leftPos}
                        />

                        <label
                          htmlFor={`item-color-text-${index}`}
                        >
                          Cor do texto
                          </label>
                        <input
                          id={`item-color-text-${index}`}
                          type="text"
                          className="display"
                          placeholder="rgb(r, g, b)"
                          name="colorText"
                          onChange={({ target: { name, value } }) => this.updateItemsState(index, name, value)}
                          value={colorText}
                        />

                        <label
                          htmlFor={`item-color-background-${index}`}
                          hidden={type !== 'text'}
                        >
                          Cor de fundo
                        </label>
                        <input
                          id={`item-color-background-${index}`}
                          type="text"
                          className="display"
                          placeholder="rgb(r, g, b)"
                          name="colorBackground"
                          onChange={({ target: { name, value } }) => this.updateItemsState(index, name, value)}
                          value={colorBackground}
                          hidden={type !== 'text'}
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
                  }) : <p>Adicione algum item</p>}
                </div>
              </fieldset>
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
              hidden={!newPost}
            >
              Criar
            </button>

            <button
              id="update"
              type="submit"
              onClick={
                (event) => {
                  event.preventDefault();
                  this.props.handleSubmit(this.state);
                }
              }
              hidden={!editPost}
            >
              Atualizar
            </button>

            <button
              id="preview"
              type="submit"
              onClick={
                (event) => {
                  event.preventDefault();
                  this.setState({ preview: true })
                }
              }
            >
              Preview
            </button>
          </div>

        </form>

        <div id="preview-post">
          {preview ? this.previewPost() : ''}
        </div>
      </div>
    );
  }
}

export default PostForm;