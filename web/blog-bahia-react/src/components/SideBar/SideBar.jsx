import React from 'react';
import SidebarIcon from './SideBarIcon';
import './SideBar.css';

class SideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,

    };
  }

  toggleSidebar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div className="side-bar-component">
        <div className="sidebar-icon">
          <SidebarIcon
            isOpen={isOpen}
            handleClick={this.toggleSidebar}
          />
        </div>

            <div
              className={`side-bar-links ${isOpen ?'fadeIn':'fadeOut'}`}
            >
              <div className="side-bar-link">Home</div>
              <div className="side-bar-link">About</div>
              <div className="side-bar-link">Contact</div>
            </div>
      </div >
    )
  }
}

export default SideBar;