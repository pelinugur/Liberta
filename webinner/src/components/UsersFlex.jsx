import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import john from "../images/john.webp"

const UsersFlex = () => {
    
  return (
    <div>

<Swiper
      style={{height:"100% !important"}}
      spaceBetween={9}
      slidesPerView={2}
      direction="vertical"
      
    >
      <SwiperSlide><img src={john} alt="" /></SwiperSlide>
      <SwiperSlide><img src={john} alt="" /></SwiperSlide>
      <SwiperSlide><img src={john} alt="" /></SwiperSlide>
      <SwiperSlide><img src={john} alt="" /></SwiperSlide>
      <SwiperSlide><img src={john} alt="" /></SwiperSlide>
      <SwiperSlide><img src={john} alt="" /></SwiperSlide>
      <SwiperSlide><img src={john} alt="" /></SwiperSlide>
      <SwiperSlide><img src={john} alt="" /></SwiperSlide>
      <SwiperSlide><img src={john} alt="" /></SwiperSlide>
      <SwiperSlide><img src={john} alt="" /></SwiperSlide>
      <SwiperSlide><img src={john} alt="" /></SwiperSlide>
      <SwiperSlide><img src={john} alt="" /></SwiperSlide>
      
      
    </Swiper>

    </div>
  )
}

export default UsersFlex