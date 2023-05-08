import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

function Contact() {
  return (
    <section id='contact'>
    <h5>Get in touch</h5>
    <h2>Contact Me</h2>

    <div className='contener contener-contact'>
      <div className='contact-options'>

          <article className='cont-opt'>
          <HiOutlineMail className='contact-icon' />
            <h4>Email</h4>
            <h5>designstarla@gmail.com</h5>
            <a href='mailto:designstarla@gmail.com'>Send a message</a>
          </article>

          <article className='cont-opt'>
          <BsMessenger className='contact-icon'/>
            <h4>Messanger</h4>
            <h5>designstarla</h5>
            <a href='https://m.me/ivana.gudovic.5'>Send a message</a>
          </article>

          <article className='cont-opt'>
          <BsWhatsapp className='contact-icon'/>
            <h4>WhatsApp</h4>
            <h5>+2168545416</h5>
            <a href="https://api.whatsapp.com/send?phone+548541355">Send a message</a>
          </article>
      </div>

        <form action=''>
          <input type='text' name='name' placeholder='your full name' required></input>
          <input type='email' name='email' placeholder='your email' required></input>
          <textarea name='message' rows='7' placeholder='your mesage' required></textarea>
           <button type='submit' className='btn btn-primary'>send mesage</button>      
         </form>

    </div>
    </section>
  )
}

export default Contact