import React from 'react'
import { Link } from 'react-router-dom';
import {Row, Col } from 'react-bootstrap';

const SmallCard = (props) => {
  const { imgUrl, title, description, articleid } = props;
  return (
    <Link style={{textDecoration:'none'}} state={{ title: title, img: imgUrl, description: description,  id: articleid }} to={`/article/${articleid}`}>

      <div className='card-small mb-4'>
        <Row>
          <Col xs={7}>
          <img src={imgUrl} className='img-fluid' alt="card-profile"/>
          </Col>
          <Col xs={3}>
            <div className='card-small-data'>
          <h6>{title} .....</h6>
          </div>
          </Col>

        </Row>
       
      </div></Link>
  )
}

export default SmallCard;
