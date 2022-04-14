import React from 'react'
import {  } from 'asset'
import './QuizCard.css'
import { Link } from 'react-router-dom'

export const QuizCard = ({title , image, _id}) => {
  return (
   <>
        <div className='quiz-container'>
          <img src={image} className='quiz-img' alt="quiz" />
          <p  className='quiz-title'>{title}</p>
          <Link className='start-quiz' to={`/guideline/${_id}` }>Play now</Link>
        </div>
     </> 
  )
}
