import React from 'react';
import PostContent from '../components/PostContent';
import SideBar from '../components/SideBar/SideBar';
import Footer from '../components/Footer';

import './Post.css';

import { getPost } from '../services/api';

class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {
        colornavfooter : '#176E8C',
      }, 
      shouldLoading: false, 
      section: {
      },
    };
    this.loadPost = this.loadPost.bind(this);
  }

  componentDidMount() {
    this.loadPost(this.props.match.params.id);
  }
  async loadPost(idPost) {
    const {post, section} = await getPost(idPost);
    this.setState({ post, section }, () => {
      this.setState({ shouldLoading: true })
    });
  }

  render() {
    console.log(this.state)
    const { shouldLoading, post: { colornavfooter }, section } = this.state;
    if (!shouldLoading) {
      return '...Carregando';
    }
    
    return (
      <div 
        className="post-component"
        style={section ? {backgroundImage: `url(${section.img})`} : null}
      >
        <SideBar color={colornavfooter} />
        <PostContent post={this.state.post} />
        <Footer color={colornavfooter} />
      </div>
    )
  }
}

export default Post;