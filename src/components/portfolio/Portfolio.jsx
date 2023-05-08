import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.gif'
import IMG3 from '../../assets/img3.jpg'
import IMG4 from '../../assets/img4.jpg'
import IMG5 from '../../assets/img5.jpg'
import IMG6 from '../../assets/img6.jpg'

function Portfolio() {
  return (
    <section id='portfolio'>
    <h5>My Work</h5>
    <h2>Portfolio</h2>
    <div className='contener contener-port'>
      <article className='portfolio-item'>
        <div className='port-item-image'>

          <img src={IMG1} alt="" />
          <h3>this is portfolio item title</h3>
            <div className='port-item-cta'>
          <a href='https://99designs.com/profiles/2993835' className='btn btn-primary' target='blank'>99 design</a>
          <a href='https://github.com/Gudagit' className='btn btn-primary' target='blank'>web</a>
        </div>
        </div>
      </article>

      <article className='portfolio-item'>
        <div className='port-item-image'>

          <img src={IMG2} alt="" />
          <h3>this is portfolio item title</h3>
            <div className='port-item-cta'>
          <a href='https://99designs.com/profiles/2993835' className='btn btn-primary' target='blank'>99 design</a>
          <a href='https://github.com/Gudagit' className='btn btn-primary' target='blank'>web</a>
        </div>
        </div>
      </article>

      <article className='portfolio-item'>
        <div className='port-item-image'>

          <img src={IMG3} alt="" />
          <h3>this is portfolio item title</h3>
            <div className='port-item-cta'>
          <a href='https://99designs.com/profiles/2993835' className='btn btn-primary' target='blank'>99 design</a>
          <a href='https://github.com/Gudagit' className='btn btn-primary' target='blank'>web</a>
        </div>
        </div>
      </article>

      <article className='portfolio-item'>
        <div className='port-item-image'>

          <img src={IMG4} alt="" />
          <h3>this is portfolio item title</h3>
            <div className='port-item-cta'>
          <a href='https://99designs.com/profiles/2993835' className='btn btn-primary' target='blank'>99 design</a>
          <a href='https://github.com/Gudagit' className='btn btn-primary' target='blank'>web</a>
        </div>
        </div>
      </article>

      <article className='portfolio-item'>
        <div className='port-item-image'>

          <img src={IMG5} alt="" />
          <h3>this is portfolio item title</h3>
            <div className='port-item-cta'>
          <a href='https://99designs.com/profiles/2993835' className='btn btn-primary' target='blank'>99 design</a>
          <a href='https://github.com/Gudagit' className='btn btn-primary' target='blank'>web</a>
        </div>
        </div>
      </article>

      <article className='portfolio-item'>
        <div className='port-item-image'>

          <img src={IMG6} alt="" />
          <h3>this is portfolio item title</h3>
            <div className='port-item-cta'>
          <a href='https://99designs.com/profiles/2993835' className='btn btn-primary' target='blank'>99 design</a>
          <a href='https://github.com/Gudagit' className='btn btn-primary' target='blank'>web</a>
        </div>
        </div>
      </article>
      

    </div>
    </section>
  )
}

export default Portfolio