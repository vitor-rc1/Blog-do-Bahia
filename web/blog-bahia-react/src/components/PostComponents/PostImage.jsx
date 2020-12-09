import React from 'react';
import './PostImage.css';

class PostImage extends React.Component {
  constructor() {
    super();
    this.textImage = this.textImage.bind(this);
  }
  textImage() {
    return (
      <h6 className="post-image-component-text" >{this.props.params.text}</h6>
    )
  }
  render() {
    return (
      <div className="post-image-component">
        <img
          src={this.props.params.url}
          alt={this.props.params.text}
          width={this.props.params.width}
          height={this.props.params.height}
          className="post-image-component-image"
        />
        { this.props.params.text ? this.textImage() : ''}
      </div>
    )
  }
}

export default PostImage;