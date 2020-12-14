import React from 'react';
import './PostImage.css';

class PostImage extends React.Component {
  constructor() {
    super();
    this.textImage = this.textImage.bind(this);
  }
  textImage(text) {
    return (
      <h6 className="post-image-component-text" >{text}</h6>
    )
  }
  render() {
    const { url, text, width, height } = this.props.params;
    return (
      <div className="post-image-component">
        <img
          src={url}
          alt={text}
          width={width}
          height={height}
          className="post-image-component-image"
        />
        { text ? this.textImage(text) : ''}
      </div>
    )
  }
}

export default PostImage;