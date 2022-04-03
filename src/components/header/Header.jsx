import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
      <>
        <div className='header'>
            <Link to="/" className='brand-title'>
            Neos- Quiz
            </Link>

            <Link to='/Guide' className='guide-button'>
            guidelines
            </Link>   
        </div>
      </>
  )
}
