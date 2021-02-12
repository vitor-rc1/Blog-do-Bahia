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
          className={`side-bar-links ${isOpen ? 'fadeIn' : 'fadeOut'}`}
          style={{backgroundColor: `${color}` }}
        >
          {sectionsLinks.map(({ id, title }) => (
            <Link 
              to={`/section/${id}`} 
              hidden={!isOpen} 
              className="side-bar-link"
              key={id}
            >
              {title}
            </Link>
          ))}
        </div>
      </div >
    )
  }
}

export default SideBar;