import { useQuiz } from 'context/quizContext'
import React from 'react'
import "./result.css"

export const Result = () => {

  const { score, questionCollection, result } = useQuiz();


  const handleSelect = (option, selectedQuestion, questionindex) => {
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
      <div className='result-score'>You Scored : {score}</div>
      {result.map(({ resultQuestion, resultOption, selected }, Index) =>
        <div className='quiz-question-container'>

          <div className='question-container'>

            <p className=''>{resultQuestion}</p>
            <p className=''>{resultOption.map((item, i) => (<div key={i}><button className={`singleOption   ${selected && handleSelect(item, selected, Index)}`} >{item}</button></div>))}</p>

          </div>
        </div>

      )}
    </>
  )
}


