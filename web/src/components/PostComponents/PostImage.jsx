import React from 'react';
import Parser from 'html-react-parser';

import './PostImage.css';

class PostImage extends React.Component {
  constructor() {
    super();
    this.textImage = this.textImage.bind(this);
  }
  textImage(text) {
    return (
      <h6 className="post-image-component-text" >{Parser(text)}</h6>
    )
  }
  render() {
    const { url, text, width, height, colorText } = this.props.params;
    return (
      <div className="post-image-component" style={{color:`${colorText}`}}>
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