import React, { Component } from 'react'
import './css/home.css'
import { Container, Col,Row, Image, Breadcrumb } from 'react-bootstrap';
import Footer from './footer'
import { findIconDefinition, icon, library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ScrollAnimation from 'react-animate-on-scroll';
class Home extends Component {
  constructor(props) {
  super(props);
  this.state = {addClass: false}
  this.handleScroll = this.handleScroll.bind(this);
}

componentDidMount() {
  window.addEventListener('scroll', this.handleScroll);
};

componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll);
};

handleScroll(event) {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    this.setState({addClass: true});
 } else {
this.setState({addClass: false});
 }
};
render(){
  let containerClass = [];
    if(this.state.addClass) {
      containerClass.push('container-scroll container-scroll-fadeIn');
    }
    else{
      containerClass.push('container-scroll');
    }
    return (
      <div className="bg">
        <div className="trans-bg">

        <div className={containerClass.join(' ')}>
          <div>
          <img className="img-profile image-logo"  src={require('../images/avatar.jpg')}/>
          </div>
          <div className="detail-profile-fixed">
            <div className="social-scroll">
            <div><a href="mailto:developer@maheshrajmainali.com.np" className="icon-click"><FontAwesomeIcon size="2x" color='#f8f4a6' icon={faEnvelope} className="fa-social"/></a></div>
            <div><a href="https://www.facebook.com/makzoite" className="icon-click"><FontAwesomeIcon size="2x" color='#f8f4a6' icon={faFacebook} className="fa-social"/></a></div>
            <div><a href="https://twitter.com/Makzoite" className="icon-click"><FontAwesomeIcon size="2x" color='#f8f4a6' icon={faTwitter} className="fa-social"/></a></div>
            <div><a href="https://www.linkedin.com/in/mahesh-raj-mainali/" className="icon-click"><FontAwesomeIcon size="2x" color='#f8f4a6' icon={faLinkedin} className="fa-social"/></a></div>
            </div>
          </div>
        </div>
        <ScrollAnimation animateIn='fadeIn' initiallyVisible={true} animateOut='fadeOut' offset={350}>
          <Container className="container-main" onScroll={this.handleScroll}>
                <img className="img-profile"  src={require('../images/avatar.jpg')}/>
                <div className="detail-profile">
                  <h1>Mahesh Raj Mainali</h1>
                  <h2>Software Developer</h2>
                </div>
            <a href="mailto:developer@maheshrajmainali.com.np" className="icon-click"><FontAwesomeIcon size="3x" color='#f8f4a6' icon={faEnvelope} className="fa-social"/></a>
            <a href="https://www.facebook.com/makzoite" className="icon-click"><FontAwesomeIcon size="3x" color='#f8f4a6' icon={faFacebook} className="fa-social"/></a>
            <a href="https://twitter.com/Makzoite" className="icon-click"><FontAwesomeIcon size="3x" color='#f8f4a6' icon={faTwitter} className="fa-social"/></a>
            <a href="https://www.linkedin.com/in/mahesh-raj-mainali/" className="icon-click"><FontAwesomeIcon size="3x" color='#f8f4a6' icon={faLinkedin} className="fa-social"/></a>
            </Container>
          </ScrollAnimation>
          <div className="second-container">
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
