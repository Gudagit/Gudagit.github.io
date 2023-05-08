
import React from 'react'
import './expir.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function expir() {
  return (
    <section id='experience'>
    <h5>What skills I have</h5>
    <h2>My Expirience</h2>
    <div className='contener expirienc-container'>
      <div className='experience-fronted'>
        <h3>Fronted developer</h3>
        <div className='expirienc-content'>

          <article className='expirians-detalis'>
          <BsPatchCheckFill className = 'expirians-detalis-icon' />
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Expirienced</small>
          </div>
          </article>
          <article className='expirians-detalis'>
          <BsPatchCheckFill className = 'expirians-detalis-icon' />
          <div>
          <h4>Java Script</h4>
          <small className='text-light'>Expirienced</small>
          </div>
          </article>
          <article className='expirians-detalis'>
          <BsPatchCheckFill className = 'expirians-detalis-icon' />
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Expirienced</small>
          </div>
          </article>
          <article className='expirians-detalis'>
          <BsPatchCheckFill className = 'expirians-detalis-icon' />
          <div>
          <h4>Bootstrap</h4>
          <small className='text-light'>Expirienced</small>
          </div>
          </article>
          <article className='expirians-detalis'>
          <BsPatchCheckFill className = 'expirians-detalis-icon' />
          <div>
          <h4>React</h4>
          <small className='text-light'>Expirienced</small>
          </div>
          </article>

        </div>
      </div>
      <div className='expirience-logo'>
        <h3>Logo and web dessign</h3>
        <div className='expirienc-content'>

          <article className='expirians-detalis'>
          <BsPatchCheckFill className = 'expirians-detalis-icon' />
          <div>
          <h4>Adobe Illustrator</h4>
          <small className='text-light'>Expirienced</small>
          </div>
          </article>
          <article className='expirians-detalis'>
          <BsPatchCheckFill className = 'expirians-detalis-icon' />
          <div>
          <h4>Adobe Photoshop</h4>
          <small className='text-light'>Expirienced</small>
          </div>
          </article>
          <article className='expirians-detalis'>
            </article>
          </div>
      </div>
    </div>
    </section>
  )
}

export default expir