import React from 'react';
import './PostAudio.css';

class PostAudio extends React.Component {
  constructor() {
    super();
    this.textAudio = this.textAudio.bind(this);
  }
  textAudio(text) {
    return (
      <h6 className="post-audio-component-text" >{text}</h6>
    )
  }
  render() {
    const { url, text } = this.props.params;
    return (
      <div className="post-audio-component">
        <audio controls
          className="post-audio-component-audio"
        >
          <source
            src={url}
          />
        </audio>
        { text ? this.textAudio(text) : ''}
      </div>
    )
  }
}

export default PostAudio;