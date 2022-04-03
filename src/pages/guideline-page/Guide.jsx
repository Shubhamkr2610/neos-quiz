import React from 'react'
import { Link } from 'react-router-dom'
import './Guide.css'
import { guideimg} from 'asset'


export const Guide = () => {
  return (
    <>
      <div className='guide-container'>
     <img src={ guideimg } className='guide-banner' alt="quiz-image" />
     <div className='guide-content'>
       <span className='guide-title'>Rules to follow </span>

       <ul className='rules'>
          <li> This Quiz consists of 5 questions in each category</li>
          <li>Each right answer scores 10 Points</li>
          <li> Each multiple choice question has only one correct answer</li>
          <li> To win the quiz you need to score more than 70%</li>
          <li>You can attempt each question only once.</li>
          <li> No negative marking for wrong answers.</li>
          <li>Question are Multiple Choice Questions.</li>
          <li>Don't plagarize. Try to answer on your own.</li>
          <li>You can take the quiz multiple times.</li>
       </ul>
        <button className='start-play-quiz'>
          <Link to='/Quiz'>
          Start quiz
          </Link>
        </button>
      </div>
     
    </div>
    </>
  )
}
