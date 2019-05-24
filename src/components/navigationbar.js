import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
class NavigationBar extends Component {
render(){
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Mahesh</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
               <NavDropdown.Item href="#About">About Me</NavDropdown.Item>
               <NavDropdown.Item href="#Blog">Blog</NavDropdown.Item>
               <NavDropdown.Item href="#Resume">Resume</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default NavigationBar;
