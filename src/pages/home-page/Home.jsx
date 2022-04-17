import { heroimg} from 'asset'
import { Categories } from 'components/categories/Categories'
import React from 'react'
import './Home.css'

export const Home = () => {
  return (
    <>
    <div className='content'>
     <div className='setting'>
       <span className='quiz-intro'>Welcome to Neos Quiz
        Board. Want to have fun?
        Participate in the quizzes handpicked for you </span>
        <button className='quiz-explore'>
          <a href='#quiz-card-category'>
          Explore quizzes
          </a>
        </button>
      </div>
     <img src={ heroimg } className='banner' alt="quiz-image" />
     
    </div>
    <h1 className='category-heading' id='quiz-card-category' >Categories</h1>
    <div className='quiz-category' >
        <Categories />
    </div>
    </>
  )
}
