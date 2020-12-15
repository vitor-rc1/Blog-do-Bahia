import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

import './Home.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { posts: [] }
    this.loadPosts = this.loadPosts.bind(this);
  }
  componentDidMount() {
    this.loadPosts();
  }
  async loadPosts() {
    const URL = 'http://localhost:3001/posts';
    const response = await fetch(URL);
    const posts = await response.json();
    this.setState({ posts });
  }
  render() {
    const {posts} = this.state
    return (
      <div className="home">
        <Header />
        <div className="cards">
          { posts.map(({ id, post}) => {
            const objectAux = {...post, id }
            return (
              <Card cardContent={ objectAux } key={id} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default Home;
