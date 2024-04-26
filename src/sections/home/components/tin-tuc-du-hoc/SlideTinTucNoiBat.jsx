"use client"
<<<<<<< HEAD
import React from 'react'
import TinTucNoiBat from './TinTucNoiBat'

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

const SlideTinTucNoiBat = () => {

  function calculatePreviousTwo(activeIndex, totalSlides) {
    // Trừ đi 2 đơn vị và xử lý vòng lặp
    let previousIndex = (activeIndex - 2 + totalSlides) % totalSlides

    // Trường hợp activeIndex là 0 (nếu loop là true)
    if (previousIndex === 0) {
      previousIndex = totalSlides
    }

    return previousIndex
  }

  // Sử dụng hàm calculatePreviousTwo
  const activeIndex = 1 // Vị trí active là 5
  const totalSlides = 7 // Tổng số slide là 7
  const previousIndex = calculatePreviousTwo(activeIndex, totalSlides)
  console.log({ previousIndex })

  return (
    <Swiper
      speed={1500}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={'auto'}
      className='xmd:w-screen  w-[37rem] md:!py-[1.5rem] xmd:!py-[0.75rem] xmd:!pl-[1rem] !pl-[3.7rem]'
    >
      <SwiperSlide>
        <TinTucNoiBat />
      </SwiperSlide>
      <SwiperSlide>
        <TinTucNoiBat />
      </SwiperSlide>
      <SwiperSlide>
        <TinTucNoiBat />
      </SwiperSlide>
    </Swiper>
=======
import TinTucNoiBat from './TinTucNoiBat'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Skeleton } from '@/components/ui/skeleton';

const SlideTinTucNoiBat = ({ dataTintucs, loadingBaiviet }) => {
  const timBaivietNoibat = dataTintucs?.find((f, i) => f?.categories?.find((c, i) => c.slug === 'bai-viet-noi-bat'))
  console.log({ timBaivietNoibat });
  return (
    <div>
      {!loadingBaiviet && <TinTucNoiBat data={timBaivietNoibat} />}
     {loadingBaiviet && <Skeleton className={' w-[30.375rem] h-[37.625rem] rounded-[1rem] bg-greyscaletext-10'} />}
    </div>
>>>>>>> master

  )
}

export default SlideTinTucNoiBat