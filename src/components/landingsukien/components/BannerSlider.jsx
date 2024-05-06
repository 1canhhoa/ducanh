'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {Navigation, Pagination} from 'swiper/modules'
import Image from 'next/image'
import './style.css'

export default function BannerSlider({isMobile}) {
  return (
    <section className='relative w-full h-[36.9375rem] xmd:h-[33.75rem]'>
      <div className='xmd:hidden pagination_banner absolute z-20 flex justify-center items-center left-1/2 bottom-[2rem]'></div>

      <Swiper
        slidesPerView={1}
        navigation={{
          prevEl: '.prev_banner',
          nextEl: '.next_banner',
        }}
        pagination={{el: '.pagination_banner'}}
        modules={[Navigation, Pagination]}
        className='mySwiper relative'
      >
        <SwiperSlide>
          <div className='relative'>
            <Image
              className='w-full h-[36.9375rem] xmd:h-[33.75rem]'
              alt='banner landing page sự kiện'
              src={
                isMobile
                  ? '/images/landing/banner-mb.jpg'
                  : '/images/landing/banner.jpg'
              }
              width={1600}
              height={591}
            />
            <span className='absolute right-[13.44rem] bottom-[11.78rem] text-[1.5rem] xmd:right-[2.5rem] xmd:bottom-[19.5rem] xmd:text-[0.875rem] text-white font-bold leading-[1.2] uppercase'>
              Triển lãm du học và học bổng toàn cầu
            </span>
            <span className='absolute right-[22.31rem] bottom-[0.84rem] xmd:right-[3.5rem] xmd:bottom-[13.06rem] xmd:text-[4rem] xmd:leading-[1.5] text-[7.5rem] text-white font-bold leading-[1.2] uppercase'>
              2024
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <Image
              className='w-full h-[36.9375rem] xmd:h-[33.75rem]'
              alt='banner landing page sự kiện'
              src={'/images/landing/banner.jpg'}
              width={1600}
              height={591}
            />
            <span className='absolute right-[13.44rem] bottom-[11.78rem] text-[1.5rem] xmd:right-[2.5rem] xmd:bottom-[19.5rem] xmd:text-[0.875rem] text-white font-bold leading-[1.2] uppercase'>
              Triển lãm du học và học bổng toàn cầu
            </span>
            <span className='absolute right-[22.31rem] bottom-[0.84rem] xmd:right-[3.5rem] xmd:bottom-[13.06rem] xmd:text-[4rem] xmd:leading-[1.5] text-[7.5rem] text-white font-bold leading-[1.2] uppercase'>
              2024
            </span>
          </div>
        </SwiperSlide>

        <div className='xmd:hidden next_banner flex justify-center items-center absolute z-20 top-1/2 left-[3.75rem] -translate-y-1/2 size-[2.25rem] rounded-[0.42856rem] border-[0.857px] border-solid border-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
          >
            <path
              d='M9.875 3.625L5.5 8L9.875 12.375'
              stroke='white'
              strokeWidth='1.71429'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <div className='xmd:hidden prev_banner flex justify-center items-center absolute z-20 top-1/2 right-[3.75rem] -translate-y-1/2 size-[2.25rem] rounded-[0.42856rem] border-[0.857px] border-solid border-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
          >
            <path
              d='M6.125 3.625L10.5 8L6.125 12.375'
              stroke='white'
              strokeWidth='1.71429'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </Swiper>
    </section>
  )
}
