import React from 'react'
import { categories } from 'db/categories-db'
import { QuizCard } from 'components/quizCard/QuizCard'

export const Categories = () => {
  return (
  <>
    {
        categories.map((category)=> <QuizCard key={category._id} title= {category.name}  image ={category.image} _id={category._id}/>)

    }
  </>
  )
}
