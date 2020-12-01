import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

import './Home.css';

import exampleImg from '../images/img1.jpg'


class Home extends React.Component {
  render() {
    return(
      <div className="home">
        <Header />
        <div className="cards">
          <Card cardTitle="Title" cardImg={exampleImg} cardText="Percebemos, cada vez mais, que a mobilidade dos capitais internacionais acarreta um processo de reformulação e modernização das condições inegavelmente apropriadas."/>
          <Card cardTitle="Other Title"/>
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
