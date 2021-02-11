import React from 'react';
import PostAudio from './PostComponents/PostAudio';
import PostImage from './PostComponents/PostImage';
import PostText from './PostComponents/PostText';
import PostVideo from './PostComponents/PostVideo';
import './PostContent.css'

class PostContent extends React.Component {
  renderComponent(postItem, index) {
    const { type } = postItem;
    if (type === 'audio') { return <PostAudio params={postItem} key={index} /> }
    else if (type === 'image') { return <PostImage params={postItem} key={index} /> }
    else if (type === 'text') { return <PostText params={postItem} key={index} /> }
    else if (type === 'video') { return <PostVideo params={postItem} key={index} /> }
  }

  render() {
    const {
      title,
      postitems: { postItems },
      colorpage: colorPage,
      titlecolor: titleColor,
    } = this.props.post;
    console.log(this.props.post)
    if (postItems || title) {
      return (
        <div
          className="post"
          style={{ backgroundColor: `${colorPage}` }}
        >
          <h2 className="post-title" style={{ color: `${titleColor}` }}>{title}</h2>
          <div className="post-content">
            {postItems.map((item, index) => {
              return this.renderComponent(item, index);
            })}

            {/* <div className="post-middle">
              {postItems.map((item, index) => {
                if (item.position === 'middle') {
                  return this.renderComponent(item, index);
                }
                return ''
              })}
            </div> */}
            {/* <div className="post-right">
              {postItems.map((item, index) => {
                if (item.position === 'right') {
                  return this.renderComponent(item, index);
                }
                return ''
              })}
            </div> */}
          </div>
        </div>
      );
    } else {
      return '';
    }
  }
}

export default PostContent;