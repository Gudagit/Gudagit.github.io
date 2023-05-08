import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpg'
import {BsAwardFill} from 'react-icons/bs'
import {HiOutlineUsers} from 'react-icons/hi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

function About() {
  return (
    <section id='about'>
    <h5>GEt to know</h5>
    <h2>about me</h2>
    <div className='contener about__contener'>
    <div className='about__me'>
      <div className='aboutme__image'>
        <img src={ME} alt='slika' />
      </div>
    </div>  

    <div className='about__contect'>
      <div className='about__cards'>
        <article className='about_card'>
          <BsAwardFill className='about__icon'/>
           <h5>expirience</h5>
           <small>3+ years working</small>
        </article>
        <article className='about_card'>
          <HiOutlineUsers className='about__icon'/>
           <h5>clients</h5>
           <small>200+ clients</small>
        </article>
        <article className='about_card'>
          <AiOutlineFundProjectionScreen className='about__icon'/>
           <h5>project</h5>
           <small>300+ complited</small>
        </article>
      </div>

      <p>I will be happy to make your logo 🙂
        Your logo will probably be the first thing your customers see, so let’s make it the first thing they remember!
        I'm available for new projects!</p>
        <a href='#contact' className='btn btn-primary'> Let's talk </a>

    </div> 
    </div>
    </section>
  )
}

export default About