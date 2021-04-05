import React from 'react';
import SectionContent from './SectionContent';

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
      colorNavFooter: '',
      mapCheckbox: false,
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
    const {
      about,
      colorSection: colorsection,
      colorNavFooter: colornavfooter,
      img,
      indexText: indextext,
      title,
      id,
      mapCheckbox: mapcheckbox,
    } = this.state
    return (
      <div>
        <SectionContent
          section={{
            about,
            colorsection,
            colornavfooter,
            img,
            indextext,
            title,
            id,
            mapcheckbox
          }}
          goToFirstPost={() => null}
          preview={true}
        />
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
      colorsection: colorSection,
      colornavfooter: colorNavFooter,
      mapcheckbox: mapCheckbox
    } = post
    this.setState({
      title,
      img,
      about,
      indexText,
      id,
      colorSection,
      colorNavFooter,
      mapCheckbox
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
      colorNavFooter,
      mapCheckbox,
    } = this.state;
    const { newSection, editSection } = this.props;
    return (
      <div>
        <form>
          <h2 className="title">{newSection ? 'Criar section' : 'Editar section'}</h2>

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

              <label htmlFor="color-page">Cor do rodapé e da barra lateral</label>
              <input
                type="text"
                id="color-section"
                placeholder="rgb(r, g, b)"
                name="colorNavFooter"
                onChange={({ target: { name, value } }) => this.updatePost(name, value)}
                value={colorNavFooter}
              />

              <label>Habilitar mapa ?</label>
              <input
                type="checkbox"
                id="map-checkbox"
                name="mapCheckbox"
                onClick={({ target: { name, checked } }) => this.updatePost(name, checked)}
                checked={mapCheckbox}
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