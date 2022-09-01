import React from 'react'
import {NavLink} from 'react-router-dom';
import {Row, Col } from 'react-bootstrap';

const Card = (props) => {
  const { imgUrl, title, description, articleid } = props;
  return (
   <NavLink style={{textDecoration:'none'}} state={{ title: title, img: imgUrl, description: description, id: articleid }} to={`/article/${articleid}`}>
    
    <div className={articleid}>
  
    <div className="card-body mb-5">
      <Row>
       <Col  md={4}  className='card__image'>
        <img src={imgUrl} className='img-fluid' alt="card-profile" />
        </Col>
        <Col md={8}>
        <div className='card-data'>
            <h5 >{title}</h5>
            <p>{description}....</p>
        </div>
        </Col>
     
      </Row>
      </div>
     
     
        
         
          
      
      </div></NavLink>
  )
}

export default Card
