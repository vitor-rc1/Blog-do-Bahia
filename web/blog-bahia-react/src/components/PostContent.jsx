import React from 'react';
import { Link } from  'react-router-dom';
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
      section,
    } = this.props.post;
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
          </div>
          <div className="post-buttons">
            <button>Baixar em PDF</button>
            <button>ir para texto aleatório</button>
            <Link to={`section/${section}`} >Voltar ao Menu da sessão</Link>
          </div>
        </div>
      );
    } else {
      return '';
    }
  }
}

export default PostContent;