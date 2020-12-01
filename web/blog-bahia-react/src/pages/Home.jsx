import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

import './Home.css';

class Home extends React.Component {
  render() {
    return(
      <div className="home">
        <Header />
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default Home;
