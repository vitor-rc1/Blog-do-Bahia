import React from 'react';
import PostExample from '../services/PostExample';
import PostAudio from '../components/PostComponents/PostAudio';
import PostImage from '../components/PostComponents/PostImage';
import PostText from '../components/PostComponents/PostText';
import PostVideo from '../components/PostComponents/PostVideo';
import './Post.css'

class Post extends React.Component {
  constructor() {
    super();
    // this.state = { ... this.props };
    this.state = { ...PostExample }
  }

  renderComponent(postItem) {
    const { type } = postItem;
    if (type === 'audio') { return <PostAudio params={postItem} /> }
    else if (type === 'image') { return <PostImage params={postItem} /> }
    else if (type === 'text') { return <PostText params={postItem} /> }
    else if (type === 'video') { return <PostVideo params={postItem} /> }
  }

  render() {
    const { title, postItems } = this.state;
    console.log(postItems)
    return (
      <div className="post">
        <h2 className="post-title">{title}</h2>
        <div className="post-content">
          <div className="post-left">
            {postItems.map((item) => {
              if (item.position === 'left') {
                return this.renderComponent(item);
              }
              return ''
            })}
          </div>
          <div className="post-middle">
            {postItems.map((item) => {
              if (item.position === 'middle') {
                return this.renderComponent(item);
              }
              return ''
            })}
          </div>
          <div className="post-right">
            {postItems.map((item) => {
              if (item.position === 'right') {
                return this.renderComponent(item);
              }
              return ''
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Post;