'use client'
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import {useState} from 'react'
import clsx from 'clsx'
const StudenSlide = ({items = []}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className='ml-[-0.75rem] md:ml-0'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        // onSwiper={(swiper) => console.log(swiper)}
        pagination={{clickable: true}}
        className='w-screen md:w-[36rem] md:!ml-0'
        autoplay={{delay: 3000}}
      >
        {Array.from({length: 3}).map((item, index) => {
          return (
            <SwiperSlide
              className='pl-[0.75rem]'
              key={index}
            >
              <div className='flex flex-col md:flex-row'>
                <Image
                  src={'/images/hoc-vien-duc-anh/quote.svg'}
                  width={40}
                  height={60}
                  priority
                  alt='hoc-vien-duc-anh'
                  className='w-[2rem] md:w-[4.0625rem] h-[1.5rem] md:h-[6.2rem] my-[1rem] md:mt-[-2.2rem]'
                />
                <div className='md:ml-[0.94rem]'>
                  <h3 className='text-primary-60 md:text-greyscaletext-80 tracking-[-0.03rem] text-[1.5rem] md:text-[2rem] font-bold md:font-bold leading-[130%] md:leading-[140%] self-stretch w-[20.4rem] md:w-[30.375rem]'>
                    Em tin rằng tất cả mọi người có thể làm được giống em
                  </h3>
                  <h4 className='text-greyscaletext-80 mt-[0.5rem] md:mt-[1.19rem] mb-[0.25rem] text=[1rem] md:text-[1.25rem] font-bold leading-[150%] tracking-[-0.0125rem]'>
                    - Lê Minh
                  </h4>
                  <p className='text-greyscaletext-80 .font-feature-settings text-[0.875rem] font-normal leading-[140%]'>
                    Cựu học sinh Amsterdam
                  </p>
                  <p className='text-greyscaletext-80 .font-feature-settings text-[0.875rem] font-normal leading-[140%]'>
                    Học bổng toàn phần trường Deakin University
                  </p>
                  <div className='flex items-center mt-[1rem] md:mt-[1.81rem]'>
                    <button className='mr-[0.81rem]'></button>
                    <button></button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className='ml-[0.75rem] md:ml-0 md:hidden slide-pagination flex items-center w-full justify-center space-x-[0.25rem]'>
        {Array.from({length: 3}).map((paginationItem, index) => {
          return (
            <span
              key={index}
              className={clsx(
                'rounded-full w-[0.375rem] h-[0.375rem] ml-0 duration-100',
                {'bg-greyscaletext-10': activeIndex !== index},
                {'bg-primary-60': activeIndex === index},
              )}
            ></span>
          )
        })}
      </div>
    </div>
  )
}

export default StudenSlide
