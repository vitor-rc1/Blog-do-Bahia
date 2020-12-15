import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

import './Home.css';

import exampleImg from '../images/img1.jpg'


class Home extends React.Component {
  constructor() {
    super();
    this.state = {posts: []}
  }
  render() {
    const cardExample = {
      cardImg: exampleImg,
      cardText:"Percebemos, cada vez mais, que a mobilidade dos capitais internacionais acarreta um processo de reformulação e modernização das condições inegavelmente apropriadas.",
      cardTitle: "Title",
      id: 1,
    }
    return(
      <div className="home">
        <Header />
        <div className="cards">
          <Card cardContent={ cardExample } />
        </div>
      </div>
    );
  }
}

export default Home;
