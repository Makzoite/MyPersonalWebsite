import React, { Component } from 'react';
import './css/undermaintenance.css';
class UnderMaintenance extends Component {
render(){
  return(
    <div className="bg-undermaintenance">
      <div className="content">
        <img className="img-maintenance" src={require('../images/maintenance.png')}/>
        <h1 className="h1-maintenance">Under Maintenance</h1>
        <p className="p-message">Hurray!!! Mahesh is going to implement his website using ReactJS.</p>
      </div>
      <div>
        <p>Email here: <a href="mailto:developer@maheshrajmainali.com.np">developer@maheshrajmainali.com.np</a></p>
      </div>
    </div>
    )
  }
}
export default UnderMaintenance;
