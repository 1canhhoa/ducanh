"use client"
import React from 'react'
import Image from 'next/image'
import NavigationCustom from '@/components/navigationcustom'
import "swiper/css";
import 'swiper/css/effect-fade';
import Align from '@/components/icon/Align';
import { Swiper, SwiperSlide, } from "swiper/react";
import { Navigation, EffectFade } from 'swiper/modules'
import { useState, useRef } from 'react'
const SlideBanner = ({dataBanner}) => {
  const swiperRef = useRef(null)
  const [indexSlider, setIndexSlider] = useState(0)

  const handleSlideChange = (swiper) => {
    setIndexSlider(swiper.realIndex)
  }

  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }
  return (
    <div className='xmd:hidden h-[39.8125rem] relative z-[1]'>
      <Swiper
        ref={swiperRef}
        effect='fade'
        loop={'true'}
        modules={[Navigation, EffectFade]}
        className='w-[73.875rem]'
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
      >
        {dataBanner?.images?.map((d, i) => (
          <SwiperSlide key={i}>
            <div className='relative'>
              <Image priority alt='ảnh banner web 2'
                src={d?.img}
                className='w-full h-[39.8125rem] rounded-[0.78969rem] shrink-0' width={1100} height={615} />
              {i === 0 && <button className='absolute left-[6.44rem] top-[15.19rem] bg-linear-l1 inline-flex justify-center items-center h-[2.5rem] py-[0.625rem] px-[1.25rem] gap-[0.625rem] shrink-0 rounded-[0.625rem]'>
                <Align />
                <div className='text-greyscaletext0 text-center text-[1rem] text-white not-italic font-bold leading-[150%]'>
                  Tìm hiểu thêm
                </div>
                <Align />

              </button>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='absolute h-full w-[calc(96%)] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50 pointer-events-none'>
        <NavigationCustom
          indexSlider={1000}
          length={5}
          handlePrevSlide={handlePrevSlide}
          handleNextSlide={handleNextSlide}
        />
      </div>
    </div>
  )
}

export default SlideBanner
