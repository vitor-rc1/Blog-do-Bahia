import React from 'react';
import PostContent from './PostContent';
import Card from './Card';

import './PostForm.css';

class SectionForm extends React.Component {
  constructor() {
    super();
    this.state = {
      preview: false,
      title: '',
      img: '',
      about: '',
      indexText: '',
      id: 0,
      colorSection: '',
    };
    this.updatePost = this.updatePost.bind(this);
    this.updateItemsState = this.updateItemsState.bind(this);
    this.previewPost = this.previewPost.bind(this);

  }

  updatePost(field, newValue) {
    this.setState({ [field]: newValue, preview: false });
  }

  updateItemsState(index, name, value) {
    const items = this.state.postItems;
    items[index][name] = value;
    this.setState({ postItems: items, preview: false });
  }

  previewPost() {
    return (
      <div>
        <PostContent post={this.state} />
      </div>
    )
  }

  componentDidMount() {
    const { type } = this.props;
    if (type === 'edit') {
      this.propsToState(this.props.post)
    }
  }

  propsToState(post) {
    const {
      title,
      img,
      about,
      indextext: indexText,
      id,
      colorsection: colorSection
    } = post
    this.setState({
      title,
      img,
      about,
      indexText,
      id,
      colorSection,
    })
  }

  render() {
    const {
      title,
      img,
      about,
      indexText,
      preview,
      colorSection,
    } = this.state;
    const { newSection, editSection } = this.props;
    return (
      <div>
        <form>
          <h2 className="title">Criar section</h2>

          <div className="container">
            <div className="page-content">
              <label htmlFor="post-title">Titulo</label>
              <input
                type="text"
                id="post-title"
                placeholder="Titulo"
                name="title"
                onChange={({ target: { name, value } }) => this.updatePost(name, value)}
                value={title}
              />

              <label htmlFor="card-img">Imagem da seção</label>
              <input
                type="text"
                id="card-img"
                placeholder="URL"
                name="img"
                onChange={({ target: { name, value } }) => this.updatePost(name, value)}
                value={img}
              />

              {/* <label htmlFor="card-img">Tamanho da imagem da seção</label>
              <input
                type="text"
                id="card-img-width"
                placeholder="px"
                name="imgSize"
                onChange={({ target: { name, value } }) => this.updatePost(name, value)}
                value={imgSize}
              /> */}

              <label htmlFor="color-page">Cor da section</label>
              <input
                type="text"
                id="color-section"
                placeholder="rgb(r, g, b)"
                name="colorSection"
                onChange={({ target: { name, value } }) => this.updatePost(name, value)}
                value={colorSection}
              />

              <label htmlFor="card-text">Sobre</label>
              <textarea
                type="text"
                id="card-text"
                placeholder="Digite seu texto aqui"
                name="about"
                onChange={({ target: { name, value } }) => this.updatePost(name, value)}
                value={about}
              />

              <label htmlFor="card-text">Índice</label>
              <textarea
                type="text"
                id="card-text"
                placeholder="Digite seu texto aqui"
                name="indexText"
                onChange={({ target: { name, value } }) => this.updatePost(name, value)}
                value={indexText}
              />

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
              hidden={!newSection}
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
              hidden={!editSection}
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

export default SectionForm;