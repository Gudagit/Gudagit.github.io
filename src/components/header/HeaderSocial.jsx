import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {SiAdobeillustrator} from 'react-icons/si'

function HeaderSocial() {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target='_blank'><AiFillLinkedin /></a>
        <a href='https://99designs.com/profiles/2993835'><SiAdobeillustrator /></a>
    </div>
  )
}

export default HeaderSocial