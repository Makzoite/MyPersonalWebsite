import React, { Component } from 'react'
import './css/home.css'
/* import { findIconDefinition, icon, library } from '@fortawesome/fontawesome-svg-core'*/
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/*import ScrollAnimation from 'react-animate-on-scroll';*/
import NavigationBar from './navigationbar';
import Footer from './footer';
import Spinner from './spinner';
class Home extends Component {
  constructor(props) {
  super(props);
  this.myRef = React.createRef();
  this.state = {
    addClass: false,
    scrollToRef: true,
    addClasstoMain:false,
    isLoading:true
  }
  this.handleScroll = this.handleScroll.bind(this);
  this.scrollToMyRef = this.scrollToMyRef.bind(this);
}

componentDidMount() {
  window.addEventListener('scroll', this.handleScroll);
  setTimeout(
    function() {
        this.setState({isLoading: false});
    }
    .bind(this),
    1200
  );
//alert(this.props.location);
};

componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll);
};

handleScroll(event) {
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    this.setState({addClass: true});
    if(this.state.scrollToRef){
      this.scrollToMyRef();
    }
    this.setState({scrollToRef: false});
 }
 else if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
    this.setState({addClasstoMain:true});
 }
  else {
   this.setState({addClass: false, scrollToRef: true, addClasstoMain:false});
 }
};
scrollToMyRef(){
  window.scrollTo(0, this.myRef.current.offsetTop);
}
render(){
  let containerClass = [];
  let containerMain = [];
    if(this.state.addClass) {
      containerClass.push('detail-profile-fixed container-scroll container-scroll-fadeIn');
    }
    else{
      containerClass.push('detail-profile-fixed container-scroll');
    }
    if(this.state.addClasstoMain){
      containerMain.push('container-main container-main-fadeOut');
    }
    else{
      containerMain.push('container-main container-scroll-fadeIn');
    }
    if(this.state.isLoading){
      return(<><Spinner/></>)
    }
    return (
      <div className="bg">
      <NavigationBar passClass={this.state.addClass}/>
        <div className="trans-bg">
        {/*<div className={containerClass.join(' ')}>*/}
          {/*<div>
            <img className="img-profile image-logo"  src={require('../images/avatar.jpg')} alt="profile"/>
          </div>*/}
          <div className={containerClass.join(' ')}>
            <div className="social-scroll">
              <div>
                <a href="mailto:developer@maheshrajmainali.com.np" className="icon-click"><FontAwesomeIcon size="2x" color='#f8f4a6' icon={faEnvelope} className="fa-social"/></a></div>
              <div>
                <a href="https://www.facebook.com/makzoite" className="icon-click"><FontAwesomeIcon size="2x" color='#f8f4a6' icon={faFacebook} className="fa-social"/></a></div>
              <div>
                <a href="https://twitter.com/Makzoite" className="icon-click"><FontAwesomeIcon size="2x" color='#f8f4a6' icon={faTwitter} className="fa-social"/></a></div>
              <div>
                <a href="https://www.linkedin.com/in/mahesh-raj-mainali/" className="icon-click"><FontAwesomeIcon size="2x" color='#f8f4a6' icon={faLinkedin} className="fa-social"/></a></div>
                <div>
                  <a href="https://github.com/Makzoite/" className="icon-click"><FontAwesomeIcon size="2x" color='#f8f4a6' icon={faGithub} className="fa-social"/></a></div>
              </div>
          {/*</div>*/}
        </div>
        {/*<ScrollAnimation animateIn='fadeIn' initiallyVisible={true} animateOut='fadeOut' offset={350}>*/}
          <div className={containerMain.join(' ')} onScroll={this.handleScroll}>
                <img className="img-profile"  src={require('../images/avatar.jpg')} alt="small profile"/>
                <div className="detail-profile">
                  <h1>Mahesh Raj Mainali</h1>
                  <h2>Software Developer</h2>
                </div>
            <a href="mailto:developer@maheshrajmainali.com.np" className="icon-click"><FontAwesomeIcon size="3x" color='#f8f4a6' icon={faEnvelope} className="fa-social"/></a>
            <a href="https://www.facebook.com/makzoite" className="icon-click"><FontAwesomeIcon size="3x" color='#f8f4a6' icon={faFacebook} className="fa-social"/></a>
            <a href="https://twitter.com/Makzoite" className="icon-click"><FontAwesomeIcon size="3x" color='#f8f4a6' icon={faTwitter} className="fa-social"/></a>
            <a href="https://www.linkedin.com/in/mahesh-raj-mainali/" className="icon-click"><FontAwesomeIcon size="3x" color='#f8f4a6' icon={faLinkedin} className="fa-social"/></a>
            <a href="https://github.com/Makzoite/" className="icon-click"><FontAwesomeIcon size="3x" color='#f8f4a6' icon={faGithub}/></a>
            </div>
            <div className="arrow-wrapper">
            <div className="arrow bounce" onClick={this.scrollToMyRef}></div>
            </div>
          {/*</ScrollAnimation>*/}
        </div>

        <div ref={this.myRef} className="second-container">
          <div className="about">
            <h1>About Me</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <Footer passClass={this.state.addClass}/>
      </div>
    );
  }
}
export default Home;
