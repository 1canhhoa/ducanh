"use client"
import Image from 'next/image'
import NavigationCustom from '@/components/navigationcustom'
import { country } from '@/lib/data'
import { Swiper, SwiperSlide, } from "swiper/react";
import { Navigation, EffectFade } from 'swiper/modules'
import { useState, useRef } from 'react'
import "swiper/css";
import 'swiper/css/effect-fade';
import Align from '@/components/icon/Align';

const data_mini_menu = [

  { img: '/images/homepage/academy.svg', title: 'Học bổng' },
  { img: '/images/homepage/vieclam.svg', title: 'Việc làm' },
  { img: '/images/homepage/dinhcu.svg', title: 'Định cư' },
  { img: '/images/homepage/e-learning.svg', title: 'E-learning' },
]
const BannerHome = () => {

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
    <div className='flex xmd:flex-col-reverse items-start justify-start md:space-x-[1.5rem] md:pb-[7.75rem] pb-[2.23rem]'>
      {/* SIDE_BAR BANNER HOME */}
      <div className="flex xmd:mt-[2.5rem] justify-start items-start mx-auto  flex-col md:border-[1px] md:rounded-[0.75rem] md:border-primary-10 ">
        <div className=" 
          xmd:hidden
          bg-linear-l5 flex items-center w-[21.8125rem] gap-[0.625rem] 
          shrink-0 rounded-tl-[0.5rem] rounded-tr-[0.5rem] px-[1.5rem]
          text-white text-base not-italic font-bold leading-[150%] h-[3rem]
          ">
          Bạn muốn du học ở đâu?
        </div>
        <div className="md:hidden pb-[1rem] w-[19.1875rem] text-primary-60 text-base not-italic font-bold leading-[130%] uppercase">
          bạn muốn du học ?
        </div>

        <ul className='xmd:grid-cols-2 xmd:grid gap-x-[0.5rem] gap-y-[0.38rem] '>
          {country.map((d, i) => (
            <>
              <li key={i} className=" 
              flex items-center gap-[1rem] overflow-hidden 
              group md:w-[21.8125rem] md:h-[3.12rem] md:relative  md:px-[1.5rem] md:py-[0.5]rem]
              xmd:w-[10.6875rem]  xmd:gap-1.5 xmd:self-stretch xmd:p-5 xmd:rounded-[0.5rem]
              xmd:shadow-[0px_3px_24px_0px_rgba(0,132,255,0.04),0px_0px_32px_0px_rgba(0,119,229,0.04)]
              xmd:bg-white">

                <Image priority className="xmd:hidden group-hover:opacity-0 duration-500 opacity-100 z-[1] size-[2rem]" alt={`ảnh lá cờ ${d.tittle} `} src={d.img} width={32} height={32} />

                <div className='xmd:hidden group-hover:opacity-0 duration-700 opacity-100 flex-1 z-[1] button1 text-primary-60 uppercase'>{d.tittle}</div>

                <svg className='xmd:hidden z-[1] group-hover:opacity-0 duration-700 opacity-100 size-[1.25rem]' xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M7.5 4.78125L13.3333 10.6146L7.5 16.4479" stroke="#132B7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <Image priority alt={`ảnh background lá cờ ${d.tittle} `} src={d.bg} width={360} height={60}
                  className="xmd:hidden absolute top-0 w-full h-full group-hover:opacity-100  custom-transition opacity-0 left-0 right-0 bottom-0" />

                <div className='
                button1 xmd:button2 xmd:text-primary-70
                absolute  group-hover:opacity-100 duration-700 md:opacity-0 flex-1 z-[1]  text-white uppercase '>
                  {d.tittle}</div>

              </li>
              {i !== country.length - 1 && <div className="xmd:hidden md:w-[18.125rem] my-[0.033rem] h-[0.03125rem] mx-auto shrink-0 bg-primary-60 opacity-10"></div >}
            </>
          ))}
        </ul>
      </div>

      {/* IMAGE AND MINI_MENU MOBI*/}
      <div className="md:hidden flex md:h-[23.1875rem] flex-col items-center space-y-[0.75rem]">
        <Image priority alt='ảnh banner mobile' src='/images/homepage/banner-mobi.png'
          className='w-full md:hidden xmd:w-[23.4375rem] shrink-0' width={380} height={195} />
        <div className="flex w-[21.9375rem] justify-center items-end space-x-[1rem] shrink-0 shadow-[2px_4px_32px_0px_rgba(37,168,224,0.04),0px_0px_36px_0px_rgba(0,106,218,0.06)] pt-[0.375rem] pb-[0.75rem] px-0 rounded-[0.75rem]">
          {data_mini_menu.map((d, i) => (
            <div key={i} className="pt-[0.5rem] flex w-[4rem] space-y-[0.5rem] flex-col items-center shrink-0">
              <Image priority alt={` icon ${d.title} `} src={d.img} width={20} height={14} className=" size-[1.25rem] shrink-0" />
              <div className="text-[0.625rem] font-semibold text_gradient bg-gradient-to-r bg-clip-text
              from-[#082072] from-[0%] to-[#2B46A8] to-[100%]
              ">{d.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SWIPER BANNER WEB */}
      <div className='xmd:hidden relative z-[1]'>
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
          <SwiperSlide>
            <div className='relative'>
              <Image priority alt='ảnh banner web 2' src='/images/navPrimary/banner.png'
                className='w-full xmd:hidden h-[38.4375rem] rounded-[0.78969rem] shrink-0' width={1100} height={615} />
              <button className='absolute left-[6.44rem] top-[15.19rem] bg-linear-l1 inline-flex justify-center items-center h-[2.5rem] py-[0.625rem] px-[1.25rem] gap-[0.625rem] shrink-0 rounded-[0.625rem]'>
                <Align />
                <div className='text-greyscaletext0 text-center text-[1rem] text-white not-italic font-bold leading-[150%]'>
                  Tìm hiểu thêm
                </div>
                <Align />

              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative'>
              <Image loading='lazy' alt='ảnh banner web 2' src='/images/navPrimary/banner2.png'
                className='w-full h-[38.4375rem] rounded-[0.78969rem] shrink-0' width={1100} height={615} />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='xmd:hidden absolute h-full w-[calc(96%)] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50 pointer-events-none'>
          <NavigationCustom
            indexSlider={1000}
            length={5}
            handlePrevSlide={handlePrevSlide}
            handleNextSlide={handleNextSlide}
          />
        </div>
      </div>
    </div >
  )
}

export default BannerHome
