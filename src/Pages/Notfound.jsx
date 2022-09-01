import React from 'react';
import {Link} from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import error from '../Assets/404.png';




const Notfound = () => {
 
    
  return (
   <Container className='main-container'>
<Row className='justify-content-center text-center'>
  <Col lg={4}>
    <h1>ERROR-404</h1>
    <h3>Page Not Found</h3>
    <img src={error} alt="404" width={300} className='img-fluid'/>
    <Link to="/"><Button>Go Back</Button></Link>


  </Col>
</Row>
   </Container>
  )
}

export default Notfound;
