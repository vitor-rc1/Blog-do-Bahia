import React from 'react';
import Parser from 'html-react-parser';
import PostAudio from './PostComponents/PostAudio';
import PostImage from './PostComponents/PostImage';
import PostText from './PostComponents/PostText';
import PostVideo from './PostComponents/PostVideo';
import './PostContent.css'

class PostContent extends React.Component {
  constructor() {
    super();
    this.randomPost = this.randomPost.bind(this);
  }
  renderComponent(postItem, index) {
    const { type } = postItem;
    if (type === 'audio') { return <PostAudio params={postItem} key={index} /> }
    else if (type === 'image') { return <PostImage params={postItem} key={index} /> }
    else if (type === 'text') { return <PostText params={postItem} key={index} /> }
    else if (type === 'video') { return <PostVideo params={postItem} key={index} /> }
  }

  randomPost(id) {
    const allPosts = JSON.parse(sessionStorage.getItem('posts'));
    const { history } = this.props;
    console.log(allPosts)
    const filteredPosts = allPosts.filter( post => Number(post.id) !== Number(id));
    const randomPost = filteredPosts[Math.floor(Math.random() * filteredPosts.length)];
    // history.push(``)
    history.push(`/${randomPost.id}`);
  }

  nextPost(id, section) {
    console.log(id, section)
    const allPosts = JSON.parse(sessionStorage.getItem('posts')); 
    const sectionPosts = allPosts
      .filter(post => post.section === section);
    console.log(sectionPosts);
    const indexThisPost = sectionPosts.findIndex(post => post.id === id);
    const { history } = this.props;
    if (indexThisPost === sectionPosts.length - 1) {
      history.push(`section/${section}`);
    } else {
      const nextPost = sectionPosts[indexThisPost + 1].id
      history.push(`/${nextPost}`);
    }

  }

  render() {
    const {
      post: {
        title,
        postitems: { postItems },
        colorpage: colorPage,
        titlecolor: titleColor,
        section,
        id,
      },
      history
    } = this.props;
    if (postItems || title) {
      return (
        <div>
        <div
          className="post"
          style={{ backgroundColor: `${colorPage}` }}
        >
          <h2 className="post-title" style={{ color: `${titleColor}` }}>{Parser(title)}</h2>
          <div className="post-content">
            {postItems.map((item, index) => {
              return this.renderComponent(item, index);
            })}
          </div>
        </div>
        <div className="post-buttons">
            <button
              type="button"
              onClick={window.print}
            >
              Baixar em PDF
            </button>
            
            <button
              type="button" 
              onClick={() => history.push(`section/${section}`)} 
            >
              Voltar ao Menu da sessão
            </button>
            <button
              type="button"
              onClick={() => this.randomPost(id)}
            >
              ir para texto aleatório
            </button>

            <button
              type="button"
              onClick={() => this.nextPost(id, section)}
            >
              ir para o proximo texto da seção
            </button>
            
          </div>
        </div>
      );
    } else {
      return '';
    }
  }
}

export default PostContent;