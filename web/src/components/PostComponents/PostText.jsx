import React from 'react';
import Parser from 'html-react-parser';

import './PostText.css';

class PostText extends React.Component {
  render() {
    const { text, colorBackground, colorText, width } = this.props.params
    return (
      <div
        className="post-text-component"
        style={{ color: `${colorText}`, backgroundColor: `${colorBackground}`, width: `${width}`}}
      >
        { Parser(text) }
      </div>
    )
  }
}

export default PostText;