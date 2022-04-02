import React from 'react'
import {  } from 'asset'
import './QuizCard.css'

export const QuizCard = ({title , image}) => {
  return (
   <>
        <div className='quiz-container'>
          <img src={image} className='quiz-img' alt="quiz" />
          <p  className='quiz-title'>{title}</p>
          <button className='start-quiz'>Play now</button>
        </div>
     </> 
  )
}
