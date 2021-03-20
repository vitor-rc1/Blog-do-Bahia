import React from 'react';
import SideBar from '../components/SideBar/SideBar';

import './About.css'

class About extends React.Component {
  render() {
    return (
      <div className="about-component">
        <SideBar />
        About component
      </div>
    );
  }
}

export default About;