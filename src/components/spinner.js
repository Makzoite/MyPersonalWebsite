import React, { Component } from 'react';
import './css/spinner.css';
class Spinner extends Component {
render(){
    return(
      <>
      <div className="loading-wrapper">
        <div className="fancy-spinner">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="dot"></div>
      </div>
    </div>
    </>
    );
  }
}
export default Spinner;
