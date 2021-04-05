import React, { Component } from 'react';
import { BsFillLockFill } from "react-icons/bs";

import './NotAuthorized.css'

class NotAuthorized extends Component {
  render() {
    return (
      <div className="not-authorized-component">
        <BsFillLockFill className="not-authorized-icon"/>
        <p className="not-authorized-message" >Acesso não permitido</p>
      </div>
    );
  }
}

export default NotAuthorized;