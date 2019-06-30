import React, { Component } from 'react';
import './css/footer.css'
class Footer extends Component {
render(){
  let containerClass = [];
    if(this.props.passClass) {
      containerClass.push('container-footer');
    }
    else{
      containerClass.push('container-footer');
    }
    return (
        <footer className={containerClass.join(' ')}>
          <div className="top-footer">
            <div className="float-left">
              <h3>Mahesh</h3>
              <p>Learning new things is always my thing.</p>
            </div>
              <div className="float-right">
              <h3>My account links</h3>
              <div className="quick-links">
                <div>
                  <a href="#/home">Home
                  </a>
                </div>
                <div>
                  <a href="#/home">About Me
                  </a>
                </div>
                <div>
                  <a href="#/home">Portfolio
                  </a>
                </div>
                <div>
                  <a href="#/home">Blog
                  </a>
                </div>
                <div>
                  <a href="#/resume">Resume
                  </a>
                </div>
                <div>
                  <a href="#/home">Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-footer">
            <div className="line"></div>
            <p className="right-reserved">Site Design | Mahesh Raj Mainali © 2019</p>
          </div>
        </footer>
    );
  }
}
export default Footer;
