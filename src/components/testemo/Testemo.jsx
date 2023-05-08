import React from 'react'
import './testemo.css'
import AVATAR from '../../assets/avatar.jpg'

// import Swiper core and required modules
import {  Pagination ,Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const data = [
  {
    avatar: AVATAR,
    namee: 'Dava Show',
    review: '⭐️⭐️⭐️⭐️⭐️ Amazing, fast, professional⭐️⭐️⭐️⭐️⭐️Amazing work i have recive from the designer and the design stands out from the crowd with a great image.'
  },
  {
    avatar: AVATAR,
    namee: 'Keyt Bow',
    review: '⭐️⭐️⭐️⭐️⭐️ Amazing, fast, professional⭐️⭐️⭐️⭐️⭐️Amazing work i have recive from the designer and the design stands out from the crowd with a great image.'
  },
  {
    avatar: AVATAR,
    namee: 'Lucy Whow',
    review: '⭐️⭐️⭐️⭐️⭐️ Amazing, fast, professional⭐️⭐️⭐️⭐️⭐️Amazing work i have recive from the designer and the design stands out from the crowd with a great image.'
  },
  {
    avatar: AVATAR,
    namee: 'Mic Show',
    review: '⭐️⭐️⭐️⭐️⭐️ Amazing, fast, professional⭐️⭐️⭐️⭐️⭐️Amazing work i have recive from the designer and the design stands out from the crowd with a great image.'
  },
]

function Testemo() {
  return (
    <section id='testemo'>
    <h5>Reviw from claent</h5>
    <h2>Testemonials</h2>

    <Swiper className='contener contener-test'>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      
    ></Swiper>
{
      data.map(({avatar, namee, review}, index) => {
        return (
          <SwiperSlide key={index} className='testemonial'>
        <div className='claent-avatar'>
          <img src={avatar} />
        </div>
        <h5 className='claent-name'>{namee}</h5>
          <small className='claent-review'>{review}</small>
      </SwiperSlide>
        )
      })
}
      </Swiper>

      
    </section>
  )
}

export default Testemo