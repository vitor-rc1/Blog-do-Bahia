import React from 'react';
import Parser from 'html-react-parser';
import './PostVideo.css';

class PostVideo extends React.Component {
  constructor() {
    super();
    this.textVideo = this.textVideo.bind(this);
  }
  textVideo(text) {
    return (
      <h6 className="post-video-component-text" >{Parser(text)}</h6>
    )
  }
  render() {
    const { url, text, width, height, colorText } = this.props.params;
    return (
      <div className="post-video-component" style={{color:`${colorText}`}}>
        <iframe
          src={ url }
          title= { url }
          width={ width }
          height={ height }
          className="post-video-component-video"
        />
        { text ? this.textVideo(text) : ''}
      </div>
    )
  }
}

export default PostVideo;