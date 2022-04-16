import { useQuiz } from 'context/quizContext'
import React from 'react'
import { Link, useParams } from 'react-router-dom'


export const  PlayNowQuiz = () => {
  const {fetchData} = useQuiz()
    const params =  useParams()
  return (
   <>
   <button className='start-play-quiz' onClick={()=>fetchData(params.guidelineId)}>
          <Link to='/Quiz"'>
          Start quiz
          </Link>
    </button>
   </>
  )
}
