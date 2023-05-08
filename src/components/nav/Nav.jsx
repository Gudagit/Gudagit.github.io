import React from 'react'
import './nav.css'
import  {AiFillHome} from 'react-icons/ai'
import  {IoMdContact} from 'react-icons/io'
import  {RiFileUserFill} from 'react-icons/ri'
import  {BsFillBookFill} from 'react-icons/bs'
import  {MdOutlineMiscellaneousServices} from 'react-icons/md'

import { useState } from 'react'

function Nav() {
  const [activeNav, setActiveNav]= useState("#")
  return (
    <nav >
      <a href='#'onClick={() => setActiveNav('#')}
      className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href='#about'onClick={() => setActiveNav('#about')}
       className={activeNav === '#about' ? 'active' : ''}><RiFileUserFill /></a>
      <a href='#contact'onClick={() => setActiveNav('#contact')}
      className={activeNav === '#contact' ? 'active' : ''}><IoMdContact /></a>      
      <a href='#services'onClick={() => setActiveNav('#services')}
      className={activeNav === '#services' ? 'active' : ''}><MdOutlineMiscellaneousServices /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')}
      className={activeNav === '#experience' ? 'active' : ''}><BsFillBookFill /></a>
    </nav>
  )
}

export default Nav