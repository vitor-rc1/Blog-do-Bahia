import React, { Component } from 'react';
import SideBar from '../components/SideBar/SideBar';
import Footer from '../components/Footer';
import './Section.css'

import { getSection } from '../services/api';

class Section extends Component {
  constructor(props) {
    super();
    this.state = {
      shouldLoading: false, 
      section: {
        colornavfooter : '#176E8C'
      },
      id: props.match.params.id
    };
    this.loadSection = this.loadSection.bind(this);
    this.goToFirstPost = this.goToFirstPost.bind(this);
  }

  componentDidMount() {
    this.loadSection(this.state.id);
  }

  componentDidUpdate(){
    const newId = this.props.match.params.id;
    const { id } = this.state;
    if(newId !== id) {
      this.loadSection(newId);
      this.setState({ id: newId });
    }
  }

  async loadSection(idSection) {
    const [section] = await getSection(idSection);
    this.setState({ section }, () => {
      this.setState({ shouldLoading: true })
    });
  }

  goToFirstPost(sectionId) {
    const allPosts = JSON.parse(sessionStorage.getItem('posts')); 
    const firstPost = allPosts.find(post => post.section === sectionId).id;
    const { history } = this.props;

    history.push(`/${firstPost}`);
  }

  render() {
    const { shouldLoading, section: { 
      about,
      colorsection,
      colornavfooter,
      img,
      indextext,
      title,
      id,
    } } = this.state;
    if (!shouldLoading) {
      return '...Carregando';
    }
    return (
      <div 
        className="section-component"
        style={img ? {backgroundImage: `url(${img})`} : null}
      >
        <SideBar color={colornavfooter} />
        <div 
          className="section"
          style={{ backgroundColor: `${colorsection}` }}
          onClick={() => this.goToFirstPost(id)}
        >
          <h1 className="title">{title}</h1>
          <div className="about">{about}</div>
          <div className="index">{indextext}</div>
        </div>
        <Footer color={colornavfooter} />
      </div>
    );
  }
}

export default Section;