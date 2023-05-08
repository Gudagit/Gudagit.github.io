import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <a href='#' className='foot-logo'>DesignStarla</a>

      <ul className='link'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Expirience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolioi</a></li>
        <li><a href='#testemonials'>Testemonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='foot-socil'>
      <a href='https://www.facebook.com'><BsFacebook /></a>
      </div>

    <div className='foot-copyr'>
      <small>&copy;DesignStarla</small>
    </div>

    </footer>
  )
}

export default Footer