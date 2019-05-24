import React, { Component } from 'react';
import './css/home.css';
import { Container, Col,Row, Image, Breadcrumb } from 'react-bootstrap';
import Footer from './footer';
class Home extends Component {
render(){
    return (
      <div className="bg">
      <div className="trans-bg">
      <Container className="container-home">
        <Row>
          <Col>
            <Image src={require('../images/avatar.jpg')} roundedCircle />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Image src={require('../images/avatar.jpg')} roundedCircle />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Image src={require('../images/avatar.jpg')} roundedCircle />
          </Col>
        </Row>
      </Container>
      <Footer/>
      </div>
      </div>
    );
  }
}
export default Home;
