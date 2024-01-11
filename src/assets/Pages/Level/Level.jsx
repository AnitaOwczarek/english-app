import React, { useEffect, useState } from 'react'
import './Level.css'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import all_words from '../../all_words'
import ResultPanel from '../ResultPanel/ResultPanel';

const Level = ({category}) => {

  const [divAnimation, setDivAnimation] =useState(false);
  const [counter, setCounter] = useState(0);

  const addStyle = event =>{
    setDivAnimation(!divAnimation)
    event.currentTarget.classList.toggle('level-change-card');
  }
  
  const beginnerWords = all_words.filter(word => word.level === 'beginner')
  const intermediateWords = all_words.filter(word => word.level === 'intermediate');
  const advancedWords = all_words.filter(word => word.level === 'advanced');

  const showWord = (category, counter, language) => {

    if(category === 'beginner'){

      if(language === 'english'){
        let word = beginnerWords[counter].english_word;
        return word;
      }
      else if(language === 'polish'){
        let word = beginnerWords[counter].polish_word;
        return word;
      }  
    }

    if(category === 'intermediate'){

      if(language === 'english'){
        let word = intermediateWords[counter].english_word;
        return word;
      }
      else if(language === 'polish'){
        let word = intermediateWords[counter].polish_word;
        return word;
      }
    }

    if(category === 'advanced'){

      if(language === 'english'){
        let word = advancedWords[counter].english_word;
        return word;
      }
      else if(language === 'polish'){
        let word = advancedWords[counter].polish_word;
        return word;
      }
    }
  }

  const [failList, setFailList] = useState([])
  const [successList, setSuccessList] = useState([])

  const resultTab = (result, category) => {
    if(category === 'beginner'){
      if(result === 'fail'){
        setFailList([...failList, beginnerWords[counter]])   
      }
      if(result === 'success'){
      setSuccessList([...successList, beginnerWords[counter]])
     }
    }

    if(category === 'intermediate'){
      if(result === 'fail'){
        setFailList([...failList, intermediateWords[counter]])   
      }
      if(result === 'success'){
      setSuccessList([...successList, intermediateWords[counter]])
     }
    }

    if(category === 'advanced'){
      if(result === 'fail'){
        setFailList([...failList, advancedWords[counter]])   
      }
      if(result === 'success'){
      setSuccessList([...successList, advancedWords[counter]])
     }
    }
    
    setCounter(counter+1)
    
    
  }

  console.log(failList.length, successList)

  return (
    <div className='level'>
        {counter < 10 ?
        <h1>Level {category}</h1>
        : null
        }
        
        {counter < 10 ? 
        <Container className="level-container">
            <Row className="level-card" onClick={addStyle}>
              <Col className='level-card-word'>
                {divAnimation ? showWord(category, counter, 'english') : showWord(category, counter, 'polish')}
              </Col>
            </Row>
            <Row className="button-container">
                <Col>
                  <Button 
                  variant="outline-danger" 
                  size="lg"
                  className='level-button'
                  onClick={() => resultTab('fail', category)}
                  >
                    Wciąż się uczę {failList.length === 0 ? null : failList.length}
                  </Button>
                </Col>
                <Col>
                  <Button 
                  variant="outline-success" 
                  size="lg" 
                  className='level-button'
                  onClick={() => resultTab('success', category)}
                  >Umiem {successList.length === 0 ? null : successList.length}
                  </Button>
                </Col>
                
            </Row>
        </Container>
        : <ResultPanel failList={failList} successList={successList}  failLIstLenght={failList.length}  successLIstLenght={successList.length}/> }
    </div>
  )
}

export default Level
