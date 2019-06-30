import React, { Component } from 'react';
import './css/blog.css';
/*import { findIconDefinition, icon, library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'*/
class Blog extends Component {
render(){
    return(
      <div className="loading-wrapper">
        <div className="fancy-spinner">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="dot"></div>
      </div>
    </div>
    );
  }
}
export default Blog;
