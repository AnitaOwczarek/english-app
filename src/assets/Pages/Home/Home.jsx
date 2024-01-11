import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <h1>Choose you level!</h1>
        <div className="home-levels-container">
          <Container fluid="md">
          <Row className='levels-row'>
            <Col xs={12} sm={4}>
              <Link to="/beginner">
              <Button className="home-level" variant="outline-secondary" >Beginner</Button>
              </Link>
            </Col>
            <Col xs={12} sm={4}>
              <Link to="/intermediate">
                <Button className="home-level" variant="outline-secondary">Intermediate</Button>
              </Link>
            </Col>
            <Col xs={12} sm={4}>
              <Link to="/advanced">
                <Button className="home-level" variant="outline-secondary">Advanced</Button>
              </Link>
            </Col>
          </Row>
          </Container>
        </div>
    </div>
  )
}

export default Home
