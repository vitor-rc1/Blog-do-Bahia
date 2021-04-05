import React, { Component } from 'react';
import SideBar from './SideBar/SideBar';
import Footer from './Footer';
import Parser from 'html-react-parser';
import Card from './Card';
import Map from './Map';


class SectionContent extends Component {
  render() {
    const {
      section: {
        about,
        colorsection,
        colornavfooter,
        img,
        indextext,
        title,
        id,
        mapcheckbox:mapCheckbox,
        map,
      },
      goToFirstPost,
      preview,
      posts } = this.props;
      console.log(this.props.section);
    return (
      <div
        className="section-component"
        style={img ? {
          backgroundImage: `url(${img})`,
          backgroundSize: '100vh',
          backgroundPositionX: 'center'
        } : null}
      >
        {!preview ? <SideBar color={colornavfooter} /> : ''}
        <div
          className="section"
          style={{ backgroundColor: `${colorsection}` }}
          // onClick={() => goToFirstPost(id)}
        >
          <h1 className="title">{Parser(title)}</h1>
          <div className="about">{Parser(about)}</div>
          <div className="index">{Parser(indextext)}</div>
          {
            mapCheckbox && !preview && <Map positions={map.mappositions}/>
          }
        
        </div>
        <div className="cards">
          {!preview && !mapCheckbox && posts.map((card) => {
            return (
              <Card cardContent={card} key={card.id} />
            )
          })}
        </div>
        <Footer color={colornavfooter} />
      </div>
    );
  }
}

export default SectionContent;
