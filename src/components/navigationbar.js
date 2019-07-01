import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class NavigationBar extends Component {
render(){
  let containerClass = [];
    /*if(this.props.passClass) {
      containerClass.push('custom-bg');
    }
    else{*/
      containerClass.push('custom-bg');
    /*}*/
    return (
      <div>
      <style type="text/css">
        {`
        .custom-bg {
          background-color: #22333b !important;
          position: absolute;
          width: 100%;
          z-index:999;
        }
        .custom-bg-hide{
          display:none;
        }
        `}
      </style>
        <Navbar className={containerClass.join(' ')} bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/#home">
          <FontAwesomeIcon size="lg" color='rgba(255, 255, 255, 0.5)' icon={faHome}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Portfolio</Nav.Link>
            <Nav.Link href="/#blog">Blog</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="/#contacts">Contact</Nav.Link>
            <NavDropdown title="Extra Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="/#spinner">Spinner Page</NavDropdown.Item>
              <NavDropdown.Item href="#">404 Page</NavDropdown.Item>
              <NavDropdown.Item href="/#underconstruction">Under Construction Page</NavDropdown.Item>
          </NavDropdown>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavigationBar;
