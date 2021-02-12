import React, { Component } from 'react';
import SideBar from '../components/SideBar/SideBar';
import Footer from '../components/Footer';

import { getSection } from '../services/api';

class Section extends Component {
  constructor() {
    super();
    this.state = {
      shouldLoading: false, 
      section: {
        colornavfooter : '#176E8C'
      },
    };
    this.loadSection = this.loadSection.bind(this);
  }

  componentDidMount() {
    this.loadSection(this.props.match.params.id);
  }

  async loadSection(idSection) {
    const [section] = await getSection(idSection);
    console.log(section)
    this.setState({ section }, () => {
      this.setState({ shouldLoading: true })
    });
  }

  render() {
    const { shouldLoading, section: { colornavfooter } } = this.state;
    if (!shouldLoading) {
      return '...Carregando';
    }
    return (
      <div>
        <SideBar color={colornavfooter} />
        Section component
        <Footer color={colornavfooter} />
      </div>
    );
  }
}

export default Section;