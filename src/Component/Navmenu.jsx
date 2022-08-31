import React from 'react'

import {Container, Navbar, Nav}  from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navmenu = () => {
  
  return (

      <div >
        <Navbar collapseOnSelect bg="light" expand="lg" fixed='top'>
            <Container>
        <Navbar.Brand href="#home">BlogApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <LinkContainer to="/"><Nav.Link className="navs me-0 me-lg-3">Home</Nav.Link></LinkContainer> 
          <LinkContainer to="/bollywood"><Nav.Link className="navs me-0 me-lg-3">Bollywood</Nav.Link></LinkContainer> 
          <LinkContainer to="/technology"><Nav.Link className="navs me-0 me-lg-3">Technology</Nav.Link></LinkContainer>
          <LinkContainer to="/hollywood"><Nav.Link className="navs me-0 me-lg-3">Hollywood</Nav.Link></LinkContainer>
          <LinkContainer to="/fitness"><Nav.Link className="navs me-0 me-lg-3">Fitness</Nav.Link></LinkContainer>
          <LinkContainer to="/food"><Nav.Link className="navs me-0 me-lg-3">Food</Nav.Link></LinkContainer>
      
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
      
    
    </div>
  )
}

export default Navmenu;