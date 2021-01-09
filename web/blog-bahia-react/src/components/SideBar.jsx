import React from 'react';

class SideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  

  render() {
    return (
      <div className="side-bar-component">
        SideBar Component
      </div>
    )
  }
}

export default SideBar;