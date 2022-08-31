import React from 'react';

import {Container, Row, Col, Button}  from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import bolly from "../Assets/bolly.jpg";


//import { store } from './Details'
import adv from '../Assets/adv.jpg';

const Home = () => {

  //const [detail, setDetail] = useContext(store);
  return (

    <>
 <Container fluid className='hero mt-5'>
    <div className='hero-text'>
        <h1>Welcome To React BlogApp</h1> 
        <p>This is powerful react blog app, which gives user very great reading experinece</p>
     <Button href="#home-cards">Scroll Down</Button></div>
    
 </Container>

 <Container className='mt-4 mb-4'>
        <Row id="home-cards">
            <h2 className='home-cards-heading'>Explore various categories</h2>
            <Col xs={6} md={4}>
            <LinkContainer to="/bollywood">
                <div className='home-card'>
                  <img src={bolly}  alt={50*50} className='img-fluid' /> <h4>Bollywood</h4>
                 </div>
            </LinkContainer>
            </Col>
            <Col xs={6} md={4}>
            <LinkContainer to="/technology">
                <div className='home-card'>
                  <img src={bolly}  alt="Technology" className='img-fluid' /> <h4>Technology</h4>
                </div>
            </LinkContainer>
            </Col>
            <Col xs={6} md={4}>
            <LinkContainer to="/hollywood">
                <div className='home-card'>
                  <img src={bolly}  alt={50*50} className='img-fluid' /> <h4>Hollywood</h4>
                 </div>
            </LinkContainer>
            </Col>

            <Col xs={6} md={4}>
            <LinkContainer to="/fitness">
                <div className='home-card'>
                  <img src={bolly}  alt={50*50} className='img-fluid' /> <h4>Fitness</h4>
                 </div>
            </LinkContainer>
            </Col>
            <Col xs={6} md={4}>
            <LinkContainer to="/food">
                <div className='home-card'>
                  <img src={bolly}  alt={50*50} className='img-fluid' /> <h4>Food</h4>
                </div>
            </LinkContainer>
            </Col>
           

        </Row>
      </Container>

      <Container>
        <Row>
        <div className='advertisement mb-5'>
                <img src={adv} alt="Advertisement" className='img-fluid'/>
        </div>
        </Row>
      </Container>


    <div>
        
   
  
    </div>
    </>
  )
}

export default Home