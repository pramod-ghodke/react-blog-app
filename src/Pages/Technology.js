import React, {useContext} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { store } from './Details'
import Card from '../Component/Card'
import SmallCard from '../Component/SmallCard';
import adv from '../Assets/adv.jpg';

export const Technology = () => {
  const [detail, ] = useContext(store);
  return (
    <>
        <Container className='main-container'>
            <Row>
                <Col lg={8}>
                    <h2 className='mb-3'>Technology</h2>
                      {
                        detail.filter((article) => { return article.category === "Technology" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </Col>

                <Col lg={{span:3, offset:1}} className='d-none d-lg-block'>
                  <h4 className='mb-3'>Top Posts</h4>
                    { detail.filter((article) => { return article.category === "Technology" }).map((n) => (
                            <SmallCard
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 25)}
                                author={n.author}
                            />
                        ))
                    }
                      <div className='advertisement mt-5'>
                      <img src={adv} className='img-fluid'/>
                       </div>

                </Col>
                <div className='advertisement d-lg-none d-block'>
                <img src={adv} className='img-fluid'/>
                </div>
            </Row>


        </Container>
</>
  )
}

export default Technology