import React, { Component } from 'react';
import './css/undermaintenance.css';
import { Link } from 'react-router-dom'
/*import { findIconDefinition, icon, library } from '@fortawesome/fontawesome-svg-core'*/
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class UnderMaintenance extends Component {
render(){
  return(
    <div className="bg-undermaintenance">
      <div className="content">
        <img className="img-maintenance" src={require('../images/maintenance.png')} alt="undermaintenance gear"/>
        <h1 className="h1-maintenance">Under Maintenance</h1>
        <p className="p-message">Hurray!!! Mahesh is going to implement his website using ReactJS.</p>
        <div>
          <p>Email here: <a href="mailto:developer@maheshrajmainali.com.np">developer@maheshrajmainali.com.np</a></p>
        </div>
        <div className="page-progress-bar">
          <h2 className="text-progress-bar">60% Work Completed</h2>
          <div className="progress-percentage">
          </div>
        </div>
        <p className="what-complete">What's Completed?</p>
        <Link to="/home"><FontAwesomeIcon size="2x" color='#222' icon={faHome}/></Link>
      </div>
    </div>
    )
  }
}
export default UnderMaintenance;
