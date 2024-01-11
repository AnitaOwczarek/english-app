import React from 'react'
import './ResultPanel.css'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ShowResult from '../../Components/ShowResult';
import { Link } from 'react-router-dom'

const ResultPanel = ({failList, successList, failLIstLenght, successLIstLenght}) => {
    console.log(failList, successList, failLIstLenght, successLIstLenght)

    // let newFailList = failList
    let successAnswer = (successLIstLenght/(successLIstLenght+failLIstLenght))*100
    let failAnswer = (failLIstLenght/(successLIstLenght+failLIstLenght))*100

  const showResult = () => { 
     return(
      <Row className='resultPanel-reped-words-div'>
          {failList.map((item) => (
          <Row key={item.id} className='resultPanel-repead-words'>
            <Col >{item.polish_word}</Col>
            -
            <Col >{item.english_word}</Col>
          </Row>
          )
          )}     
      </Row>   
     )
    
  }

  return (
    <div className='resultPanel'>
      <h1>{successAnswer > 50 ? 'Great job!' : 'You need to practice!' }</h1>
      <Container>
        <Row>
          <Col>
            <div className=' resultPanel-answer-btn resultPanel-good-answer-btn'> Good answer {successAnswer}%</div>
          </Col>
          <Col>
            <div className='resultPanel-answer-btn resultPanel-bad-answer-btn'>Bad answer {failAnswer}%</div>
          </Col>
        </Row>
        <Row className='resultPanel-repeat-words-cotainer'>
          {failLIstLenght != 0 ? 
          <h4>Words which you must repead:</h4>:
          <h4>You know all words!</h4>}
          {showResult()}
        </Row>
        <Row className='resultPanel-start-again-btn-container'>
          <Col>
          <Link to="/">
           <Button size='lg'>Start again!</Button>
          </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ResultPanel
