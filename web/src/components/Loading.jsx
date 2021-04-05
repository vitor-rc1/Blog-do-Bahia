import React, { Component } from 'react';
import Loader from "react-loader-spinner";

import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading-component">
        <Loader
          type="Watch"
          color="#000000"
          height={100}
          width={100}
        />
      </div>
    );
  }
}

export default Loading;