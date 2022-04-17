import { useQuiz } from 'context/quizContext'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './quiz.css';
export const Quiz = () => {

  const navigate = useNavigate();
  const { questionCollection, score, setScore , setResult , result} = useQuiz()


  const [questionindex, setQuestionIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [option, setOption] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
   

    if (questionindex < questionCollection.length) {
      setQuestion(questionCollection[questionindex].question)
      setOption(
        questionCollection && optionShuffle([questionCollection[questionindex].correct_answer,
        ...questionCollection[questionindex].incorrect_answers])
      )
    }

  }, [questionindex])


  const nextQuestion = () => {
    const resultInfo = {
        resultQuestion : question, 
        resultOption : option,
        selected : selectedQuestion,
    } 
    setResult ((prev)=>[...prev , resultInfo])
  

    if( questionindex===9 ){
      navigate("/result")
    }
    else{
      setQuestionIndex(questionindex + 1)
      setSelectedQuestion(null)
    }
  }

 
  const optionShuffle = (option) => {
    return option.sort(() => Math.random() - 0.5)
  }
  const handleCheck = (i) => {
    setSelectedQuestion(i)
    if (i === questionCollection[questionindex].correct_answer)
      setScore(score + 1)
  }
  const handleSelect = (option) => {
    if (
      selectedQuestion === option &&
      option === questionCollection[questionindex].correct_answer
    ) {
      return "correct";
    }
    if (
      selectedQuestion === option &&
      option !== questionCollection[questionindex].correct_answer
    ) {
      return "wrong";
    }
    if (option === questionCollection[questionindex].correct_answer) {
      return "correct";
    }
  }

  return (
    <>
      <div className='quiz-question-container'>

        <div className='question-container'>
          <div className='score-container'>
            <p>Question Number : {questionindex + 1}</p>
            <p> Score : {score}</p>
          </div>
          <p>{question}</p>
          <p>{option && option.map((item, i) => (<div key={i}><button onClick={() => handleCheck(item)} className={`singleOption   ${selectedQuestion && handleSelect(item)}`} disabled={selectedQuestion}>{item}</button></div>))}</p>

          <button className='next-button' onClick={nextQuestion}>Next</button>

        </div>
      </div>


    </>
  )
}
