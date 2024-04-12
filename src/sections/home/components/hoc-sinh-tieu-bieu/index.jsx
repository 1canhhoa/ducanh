

"use client"
import React, { useState, useRef, useEffect } from 'react'
// import { FaMinus } from "react-icons/fa";
import Image from 'next/image';
import { hocsinhnoibat } from '@/lib/data';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FreeMode, Autoplay, Scrollbar, EffectCards, Pagination, Navigation, EffectCoverflow, EffectFade, A11y, EffectCreative, Thumbs, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import 'swiper/css/scrollbar';
import 'swiper/css/navigation'
import 'swiper/css/thumbs';
import NavigationCustom from '@/components/navigationcustom'

const HocSinhTieuBieu = () => {
  const swiperRef = useRef(null)
  const [indexSlider, setIndexSlider] = useState(0)
  const [current, setCurrent] = useState(0)
  console.log('current', current);
  const handleSlideChange = (swiper) => {
    console.log('swiper.activeIndex', swiper);
    setIndexSlider(swiper.realIndex)
    setCurrent(swiper.previousRealIndex)

  }

  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }
  return (
    <div className='w-[100rem] mt-[6rem] relative'>
      <Image alt='ss' src='/images/homepage/bg-hocsinh.png'
        className='w-[100rem] h-[49.25rem] shrink-0' width={9999} height={9999} />
      <div className=" absolute top-16 left-16">
        <div className="flex flex-col items-start space-y-[0.5rem]">
          <div className={"text-primary-10 text-xl not-italic font-bold leading-[120%] tracking-[-0.00313rem] uppercase"}>
            Đức Anh song hành cùng
          </div>
          <div className='flex items-end gap-[0.5rem]'>
            <div className={"w-[25.53631rem] text-white text-[4rem] not-italic font-extrabold leading-[120%] tracking-[-0.08rem] "}>
              Các học sinh
              <br />
              tiêu biểu<span className={' absolute bottom-[0.9rem] right-[8rem]  w-[0.625rem] h-[0.625rem] bg-primary-10 '} ></span>
            </div>
          </div>
        </div>
      </div>
      {/* Swiper comment students */}
      {/* <div className="absolute bd z-[100] top-[23%] -left-[8rem] hocsinh"> */}
      {hocsinhnoibat.map((c, index) => (
        <div className={"inline-flex  absolute top-[42%] -translate-y-1/2 left-1/2 -translate-x-1/2  items-start 2 p-[1.8125rem] duration-700 ease-linear " + (index !== current ? "opacity-0" : " opacity-100")}>
          <Image alt='ss' src='/images/homepage/quotes.png'
            className='w-10 h-7  shrink-0' width={9999} height={9999} />
          <div className='w-5 z-50 h-[16rem]'>
            {/* // <FaMinus color='white' className='absolute top-[8.5rem]' /> */}
          </div>
          <div className="flex flex-col items-start gap-[1.8125rem]">
            <div className="th-c-ns flex flex-col items-start gap-[1.25rem] w-[30.375rem]">
              <div className=" self-stretch text-white text-[2rem] not-italic font-extrabold leading-[130%] tracking-[-0.02rem]">
                {c.comment}
              </div>
              <div className="flex flex-col items-start gap-[0.375rem]">
                <div className="text-[1.25rem] font-bold leading-[120%] w-[5rem] text-white">
                  Lê Minh
                </div>
                <div className="text-white text-base not-italic font-normal leading-[150%] ">
                  Cựu học sinh Amsterdam<br />
                  Học bổng toàn phần trường Deakin University
                </div>
              </div>
            </div>
            <div className="flex items-start gap-[0.8125rem]">
              <div className='relative flex justify-center items-center h-[3rem]  py-[0.75rem] px-[1.875rem]  gap-[0.625rem] rounded-[0.625rem]  bg-linear-l5  '>
                <div className='flex justify-center items-center absolute h-[2.7rem] w-[97%] gap-[0.625rem] rounded-[0.525rem] bg-white   '>

                </div>
                <div className=" relative text-center
                text-primary-40 text-sm not-italic font-bold leading-[100%] tracking-[0.01313rem] uppercase
                  ">
                  XEM CHI TIẾT
                </div>
              </div>
              <div className="flex justify-center items-center h-[3rem] py-[0.75rem] px-[1.875rem]
             gap-[0.625rem] rounded-[0.625rem] border-[2px]">
                <div className="text-white text-center uppercase 
                   text-sm not-italic font-bold leading-[100%] tracking-[0.01313rem]
                  ">
                  TẤT CẢ HỌC SINH
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* </div> */}
      {/* Swiper hocsinh */}
      <div className="absolute z-[100] left-0 bottom-0 w-[100rem] hocsinh">
        <Swiper
          ref={swiperRef}
          onSlideChange={handleSlideChange}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
          speed={700}
          loop={true}
          slidesPerView={3}
          centeredSlides={true}
          className='swiper mySwiper'
          allowTouchMove={true}
        >
          {hocsinhnoibat.map((c, index) => (
            <SwiperSlide className="swiper-slide">
              {/* <div>{ index }</div> */}
              <Image width={9999} height={9999} className="item_slide" src="/images/homepage/em-thao.png" alt="item" />
            </SwiperSlide>
          ))}

        </Swiper >
        <div className='xmd:hidden absolute h-full w-[calc(7%)] -top-[8.5rem] right-[3rem] z-50 pointer-events-auto'>
          <NavigationCustom
            indexSlider={3}
            length={5}
            handlePrevSlide={handlePrevSlide}
            handleNextSlide={handleNextSlide}
            outline={true}
          />
        </div>
      </div>
    </div >

  )
}

export default HocSinhTieuBieu


// --------------------------------------------------------------------------------------------------- //

// "use client"
// import Title from '@/components/Title'
// import NavigationCustom from '@/components/navigationcustom'
// import { Button } from '@/components/ui/button'
// import { Swiper, SwiperSlide, } from "swiper/react";
// import { Navigation } from 'swiper/modules'
// import React, { useState, useRef } from 'react'
// import "swiper/css";
// import Image from 'next/image'
// import Table from './Table'
// const LichHoiThao = ({ t }) => {
//   const swiperRef = useRef(null)
//   const [indexSlider, setIndexSlider] = useState(0)

//   const handleSlideChange = (swiper) => {
//     setIndexSlider(swiper.realIndex)
//   }

//   const handleNextSlide = () => {
//     swiperRef.current?.slideNext()
//   }
//   const handlePrevSlide = () => {
//     swiperRef.current?.slidePrev()
//   }
//   return (
//     <>
//       <div className='xmd:hidden absolute h-full w-[6.7rem] top-1/2 -translate-y-1/2 left-0 z-1 pointer-events-none'>
//         <NavigationCustom
//           indexSlider={3}
//           length={5}
//           handlePrevSlide={handlePrevSlide}
//           handleNextSlide={handleNextSlide}
//           outline={true}
//         /></div>
//       <Swiper
//         ref={swiperRef}
//         onSlideChange={handleSlideChange}
//         onBeforeInit={(swiper) => {
//           swiperRef.current = swiper
//         }}
//         loop={'true'}
//         modules={[Navigation]}
//         className='w-[60.001rem]'

//       >
//         <SwiperSlide>
//           <Table />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Table />
//         </SwiperSlide>
//       </Swiper>
//     </>
// export default LichHoiThao

