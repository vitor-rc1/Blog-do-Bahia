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
      sectionsLinks: []
    };
  }

  componentDidMount() {
    this.loadSections();
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

  render() {
    const { isOpen, sectionsLinks } = this.state;
    const { color } = this.props
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
            to="/about" 
            className="side-bar-link" 
            // hidden={!isOpen} 
            >
              Sobre
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