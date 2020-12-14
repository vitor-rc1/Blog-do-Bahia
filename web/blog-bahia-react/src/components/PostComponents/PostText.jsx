import React from 'react';
import './PostText.css';

class PostText extends React.Component {
  render() {
    const { text, colorBackground, colorText, width } = this.props.params
    return (
      <div
        className="post-text-component"
        style={{ color: `${colorText}`, backgroundColor: `${colorBackground}`, width: `${width}px`}}
      >
        { text }
      </div>
    )
  }
}

export default PostText;