import { heroimg , quiz2, quiz3, quiz4} from 'asset'
import { Categories } from 'components/categories/Categories'
import { QuizCard } from 'components/quizCard/QuizCard'
import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

 
export const Home = () => {
  return (
    <>
    <div className='content'>
     <div className='setting'>
       <span className='quiz-intro'>Welcome to Neos Quiz
        Bored. Want to have fun?
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
