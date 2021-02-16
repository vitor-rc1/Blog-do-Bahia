import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import SideBar from '../components/SideBar/SideBar';
import Footer from '../components/Footer';

import './Home.css';

import {getPosts} from '../services/api';


class Home extends React.Component {
  constructor() {
    super();
    this.state = { 
      posts: [], 
      shouldLoading: false, 
    };
    this.loadPosts = this.loadPosts.bind(this);
  }
  componentDidMount() {
    this.loadPosts();
  }
  async loadPosts() {
    const posts = await getPosts();
    console.log(posts)
    this.setState({ posts }, () => {
      this.setState({ shouldLoading: true });
    });
    const postsIds = posts.map(({ id }) =>  id);
    sessionStorage.setItem('posts', JSON.stringify(postsIds));
  }
  render() {
    const { posts, shouldLoading } = this.state;
    if (!shouldLoading) {
      return '...Carregando';
    }
    return (
      <div className="home">
        <Header />
        <SideBar />
        <div className="cards">
          { posts.map((card) => {
            return (
              <Card cardContent={ card } key={card.id} />
            )
          })}
        </div>
      <Footer />
      </div>
    );
  }
}

export default Home;
