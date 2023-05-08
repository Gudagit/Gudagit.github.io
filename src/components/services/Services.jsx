import React from 'react'
import './services.css'
import {BiCheckDouble} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>What I offfer</h5>
      <h2>Services</h2>

      <div className='contener contener-service'>
      
      <article className='service'>
        <div className='service-header'>
        <h3>UI/UX design</h3>
        </div>

          <ui className='service-list'>
            <li>
              <BiCheckDouble className='service-list-icon' />
              <p>Najbolji dizajn</p>
            </li>
          </ui>
          <ui className='service-list'>
            <li>
              <BiCheckDouble className='service-list-icon' />
              <p>Najbolji dizajn</p>
            </li>
          </ui>
          <ui className='service-list'>
            <li>
              <BiCheckDouble className='service-list-icon' />
              <p>Najbolji dizajn</p>
            </li>
          </ui>
      </article>
      <article className='service'>
        <div className='service-header'>
        <h3>Web development</h3>
        </div>

          <ui className='service-list'>
            <li>
              <BiCheckDouble className='service-list-icon' />
              <p>Najbolji dizajn</p>
            </li>
          </ui>
          <ui className='service-list'>
            <li>
              <BiCheckDouble className='service-list-icon' />
              <p>Najbolji dizajn</p>
            </li>
          </ui>
          <ui className='service-list'>
            <li>
              <BiCheckDouble className='service-list-icon' />
              <p>Najbolji dizajn</p>
            </li>
          </ui>
      </article>

      <article className='service'>
        <div className='service-header'>
        <h3>Logo</h3>
        </div>

          <ui className='service-list'>
            <li>
              <BiCheckDouble className='service-list-icon' />
              <p>Najbolji dizajn</p>
            </li>
          </ui>
          <ui className='service-list'>
            <li>
              <BiCheckDouble className='service-list-icon' />
              <p>Najbolji dizajn</p>
            </li>
          </ui>
          <ui className='service-list'>
            <li>
              <BiCheckDouble className='service-list-icon' />
              <p>Najbolji dizajn</p>
            </li>
          </ui>
      </article>
      
      </div>
    </section>
  )
}

export default Services