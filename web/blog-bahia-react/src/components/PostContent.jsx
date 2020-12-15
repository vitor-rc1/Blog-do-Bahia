import React from 'react';
import PostAudio from './PostComponents/PostAudio';
import PostImage from './PostComponents/PostImage';
import PostText from './PostComponents/PostText';
import PostVideo from './PostComponents/PostVideo';
import './PostContent.css'

class PostContent extends React.Component {
  constructor(props) {
    super();
    this.state = { postItems: [],...props.post };
  }

  renderComponent(postItem, index) {
    const { type } = postItem;
    if (type === 'audio') { return <PostAudio params={postItem} key={index} /> }
    else if (type === 'image') { return <PostImage params={postItem} key={index} /> }
    else if (type === 'text') { return <PostText params={postItem} key={index} /> }
    else if (type === 'video') { return <PostVideo params={postItem} key={index} /> }
  }

  render() {
    const { title, postItems, colorPage, titleColor } = this.state;
    return (
      <div 
        className="post" 
        style={{ backgroundColor: `${colorPage}`}}
      >
        <h2 className="post-title" style={{ color: `${titleColor}`}}>{title}</h2>
        <div className="post-content">
          <div className="post-left">
            {postItems.map((item, index) => {
              if (item.position === 'left') {
                return this.renderComponent(item, index);
              }
              return ''
            })}
          </div>
          <div className="post-middle">
            {postItems.map((item, index) => {
              if (item.position === 'middle') {
                return this.renderComponent(item, index);
              }
              return ''
            })}
          </div>
          <div className="post-right">
            {postItems.map((item, index) => {
              if (item.position === 'right') {
                return this.renderComponent(item, index);
              }
              return ''
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default PostContent;