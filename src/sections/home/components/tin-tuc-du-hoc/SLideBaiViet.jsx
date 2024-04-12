"use client"
import React from 'react'
import TinTucNoiBat from './TinTucNoiBat'
import BaiViet from './BaiViet';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
// import 'swiper/css/navigation';
// import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import 'swiper/css/thumbs';
import 'swiper/css/virtual';
import { FreeMode, Autoplay, Scrollbar, EffectCards, Pagination, Navigation, EffectCoverflow, EffectFade, A11y, EffectCreative, Thumbs, Virtual } from "swiper/modules";


const SLideBaiViet = ({ setSwiper, swiperRef }) => {
  return (



    <div className='xmd:w-screen  w-[63rem] flex justify-center items-center'>
      <Swiper
        ref={swiperRef}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        speed={500}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className='md:!pl-2 xmd:py-[1rem] '
      >
        <SwiperSlide>
          <div className='md:mr-10  xmd:mx-auto xmd:w-fit grid grid-cols-2 xmd:grid-cols-1 gap-x-[1.56rem] xmd:gap-y-[0.75rem] gap-y-[2.1rem]'>
            <BaiViet />

            <BaiViet />

            <BaiViet />

            <BaiViet />

            <BaiViet />

            <BaiViet />

            <BaiViet />

            <BaiViet />


          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='md:mr-10  xmd:mx-auto xmd:w-fit grid grid-cols-2 xmd:grid-cols-1 gap-x-[1.56rem] xmd:gap-y-[0.75rem] gap-y-[2.1rem]'>
            <BaiViet />

            <BaiViet />

            <BaiViet />

            <BaiViet />

            <BaiViet />

            <BaiViet />

            <BaiViet />

            <BaiViet />


          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='md:mr-10  xmd:mx-auto xmd:w-fit grid grid-cols-2 xmd:grid-cols-1 gap-x-[1.56rem] xmd:gap-y-[0.75rem] gap-y-[2.1rem]'>
            <BaiViet />

            <BaiViet />

            <BaiViet />

            <BaiViet />

            <BaiViet />

            <BaiViet />

            <BaiViet />

            <BaiViet />


          </div>
        </SwiperSlide>
      </Swiper>

    </div>

  )
}

export default SLideBaiViet
