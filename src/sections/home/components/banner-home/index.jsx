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
const BannerHome = ({ dataBanner }) => {
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
    <div className='flex items-start justify-start space-x-[1.5rem] pb-[4rem]'>
      {/* SIDE_BAR BANNER HOME */}
      <div className="flex  justify-start items-start mx-auto  flex-col md:border-[1px] md:rounded-[0.75rem] border-primary-10 ">
        <div className=" 
          bg-linear-l5 flex items-center w-[21.8125rem] gap-[0.625rem] 
          shrink-0 rounded-tl-[0.5rem] rounded-tr-[0.5rem] px-[1.5rem]
          text-white text-base not-italic font-bold leading-[150%] h-[3rem]
          ">
          Bạn muốn du học ở đâu?
        </div>
        <ul className=''>
          {dataBanner?.sidebar?.map((d, i) => (
            <>
              <li key={i} className=" z-[2]
              flex items-center gap-[1rem] !overflow-hidden 
              group w-[21.8125rem] h-[3.12rem] relative  px-[1.5rem] py-[0.5]rem]">

                <Image priority className="group-hover:opacity-0 duration-500 opacity-100 z-[1] size-[2rem]" alt={`ảnh lá cờ ${d?.title} `} src={d?.image} width={32} height={32} />

                <div className='group-hover:opacity-0 duration-700 opacity-100 flex-1 z-[1] button1 text-primary-60 uppercase'>{d?.title}</div>

                <svg className='z-[1] group-hover:opacity-0 duration-700 opacity-100 size-[1.25rem]' xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M7.5 4.78125L13.3333 10.6146L7.5 16.4479" stroke="#132B7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <Image priority alt={`ảnh background lá cờ ${d?.title} `} src={d?.bg} width={360} height={60}
                  className={`${i === country?.length - 1 ? "rounded-br-xl rounded-bl-xl" : ""} absolute top-0 z-[-2] w-full h-full group-hover:opacity-100  custom-transition opacity-0 left-0 right-0 bottom-0`} />

                <div className=' button1 absolute  group-hover:opacity-100 duration-700 opacity-0 flex-1 z-[1]  text-white uppercase '>
                  {d?.title}</div>

              </li>
              {i !== country?.length - 1 && <div className=" w-[18.125rem] my-[0.033rem] h-[0.03125rem] mx-auto shrink-0 bg-primary-60 opacity-10"></div >}
            </>
          ))}
        </ul>
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
          {dataBanner?.banner?.map((d, i) => (
          <SwiperSlide key={i}>
            <div className='relative'>
                <Image priority alt='ảnh banner web 2'
                  src={d?.url}
                  className='w-full h-[38.4375rem] rounded-[0.78969rem] shrink-0' width={1100} height={615} />
              {i===0 && <button className='absolute left-[6.44rem] top-[15.19rem] bg-linear-l1 inline-flex justify-center items-center h-[2.5rem] py-[0.625rem] px-[1.25rem] gap-[0.625rem] shrink-0 rounded-[0.625rem]'>
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
    </div >
  )
}

export default BannerHome
