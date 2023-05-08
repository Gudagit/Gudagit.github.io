import React from 'react'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header>
      <div className='contener header_contener'>
        <h5>Hello I'm</h5>
        <h1>Design Starla</h1>
        <h5 className='text-light'>Designer and fullstack developer</h5>
        <HeaderSocial />
      </div>
      <div className='me'>
        <img src={ME} alt='me' />
      </div>
      <a href='#contact' className='scroll__down'>Scroll Down</a>
    </header>
    
  )
}

export default Header