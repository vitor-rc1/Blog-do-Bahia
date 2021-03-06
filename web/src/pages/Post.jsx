import React from 'react';
import PostContent from '../components/PostContent';
import SideBar from '../components/SideBar/SideBar';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

import './Post.css';

import { getPost } from '../services/api';

class Post extends React.Component {
  constructor(props) {
    super();
    this.state = {
      post: {
        colornavfooter : '#176E8C',
      }, 
      shouldLoading: false, 
      section: {
      },
      id: props.match.params.id,
    };
    this.loadPost = this.loadPost.bind(this);
    
  }

  componentDidMount() {
    this.loadPost(this.props.match.params.id);
  }

  componentDidUpdate(){
    const newId = this.props.match.params.id;
    const { id } = this.state;
    if(newId !== id) {
      this.loadPost(newId);
      this.setState({ id: newId });
    }
    window.scrollTo(0, 0)
  }

  loadPost(idPost) {
    this.setState({shouldLoading: false}, async () => {
      const {post, section} = await getPost(idPost);
      this.setState({ post, section }, () => {
        this.setState({ shouldLoading: true })
      });
    })
  }

  render() {
    const { shouldLoading, post: { colornavfooter }, section, id } = this.state;
    const { history } = this.props;
    if (!shouldLoading) {
      return <Loading />;
    }
    
    return (
      <div 
        className="post-component"
        style={section ? {
          backgroundImage: `url(${section.img})`,
          backgroundSize: '100vh',
          backgroundPositionX: 'center'
      } : null}
      >
        <SideBar color={colornavfooter} id={id} />
        <PostContent post={this.state.post} history={ history }/>
        <Footer color={colornavfooter} />
      </div>
    )
  }
}

export default Post;