import React from 'react';
import SidebarIcon from './SideBarIcon';
import { getSections } from '../../services/api';
import { Link } from 'react-router-dom';
import './SideBar.css';

class SideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      sectionsLinks: [],
      random: 0
    };
    this.randomPost = this.randomPost.bind(this);
    this.loadSections = this.loadSections.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentDidMount() {
    const {id} = this.props;
    this.loadSections();
    this.randomPost(id);
  }

  async loadSections() {
    const sections = await getSections();
    this.setState({ sectionsLinks: sections });
  }

  toggleSidebar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  randomPost(id) {
    const allPosts = JSON.parse(sessionStorage.getItem('posts'));
    const filteredPosts = allPosts.filter( post => Number(post.id) !== Number(id));
    const randomPost = filteredPosts[Math.floor(Math.random() * filteredPosts.length)];
    console.log(filteredPosts);
    console.log(randomPost.id, 'randomico')
    this.setState({ random: randomPost.id });
  }

  render() {
    const { isOpen, sectionsLinks, random } = this.state;
    const { color, id } = this.props
    return (
      <div className="side-bar-component">
        <div className="sidebar-icon-component">
          <SidebarIcon
            isOpen={isOpen}
            handleClick={this.toggleSidebar}
          />
        </div>
        <div
          style={{backgroundColor: `${color}` }}
          className={`side-bar-links ${isOpen ? 'fadeIn' : 'fadeOut'}`}
        >
          {sectionsLinks.map(({ id, title }) => (
            <Link 
              to={`/section/${id}`} 
              // hidden={!isOpen} 
              className="side-bar-link"
              key={id}
            >
              {title}
            </Link>
          ))}
          <hr className="dividing-line" />
          <Link 
            to={`/${random}`}
            className="side-bar-link" 
            // hidden={!isOpen} 
            >
              Leve-me a qualquer lugar
            </Link>
          <Link
            to="/" 
            className="side-bar-link" 
            // hidden={!isOpen} 
            >
            Voltar à página inicial
          </Link>
        </div>
      </div >
    )
  }
}

export default SideBar;