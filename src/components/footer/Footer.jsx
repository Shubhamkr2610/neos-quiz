import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    
            <div className="footer-container">
             

                    <p className='footer-title'>Made with ❤️ by Shubham</p>
                    <p className='footer-title'>Copyright &copy; 2022 Neos-Quiz, INC. All Right Reserved.</p>
           

                <div className="link-container">

                        <Link to="https://github.com/Shubhamkr2610" target="_blank" className="social-link"><i
                                className="fab fa-github-square"></i></Link>
                        <Link to="https://twitter.com/shubhamkr_26" target="_blank" className="social-link"><i
                                className="fab fa-twitter-square"></i></Link>
                        <Link to="https://www.instagram.com/i_subhu/" target="_blank" className="social-link"><i
                                className="fab fa-instagram"></i></Link>
                        <Link to="https://www.instagram.com/i_subhu/" target="_blank" className="social-link"><i
                                className="fab fa-linkedin"></i></Link>

                </div>
            </div>
       
    
  )
}
