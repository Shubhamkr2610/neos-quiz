import { heroimg} from 'asset'
import { Categories } from 'components/categories/Categories'
import React from 'react'
import { Link } from 'react-router-dom'
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
          <Link to='/'>
          Explore quizzes
          </Link>
        </button>
      </div>
     <img src={ heroimg } className='banner' alt="quiz-image" />
     
    </div>
    <h1 className='category-heading'>Categories</h1>
    <div className='quiz-category'>
        <Categories />
    </div>
    </>
  )
}
