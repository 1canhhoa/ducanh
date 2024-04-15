'use client'
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import {useState} from 'react'
import clsx from 'clsx'
import {Button} from '@/components/ui/button'
import {Autoplay} from 'swiper/modules'
const StudenSlide = ({items = [], slideChange}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className='ml-[-0.75rem] md:ml-0'>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex)
          slideChange(swiper.realIndex)
        }}
        pagination={{clickable: true}}
        className='w-screen tablet:w-[50rem] md:w-[36rem] md:!ml-0'
        autoplay={{delay: 3000}}
      >
        {items.map((item, index) => {
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
                  className='w-[2rem] md:w-[4.0625rem] h-[1.5rem] md:h-[6.2rem] xmd:mt-0 my-[1rem] md:mt-[-2.2rem]'
                />
                <div className='md:ml-[0.94rem]'>
                  <h3
                    className='text-primary-60 md:text-greyscaletext-80 tracking-[-0.03rem] tablet:text-[2.5rem] text-[1.5rem] md:text-[2rem] font-bold md:font-bold 
                  leading-[130%] md:leading-[140%] self-stretch w-[20.4rem] tablet:w-full md:w-[30.375rem]'
                  >
                    Em tin rằng tất cả mọi người có thể làm được giống em
                  </h3>
                  <h4 className='text-greyscaletext-80 mt-[0.5rem] md:mt-[1.19rem] mb-[0.25rem] text-[1rem] tablet:text-[2rem] md:text-[1.25rem] font-bold leading-[150%] tracking-[-0.0125rem]'>
                    - Lê Minh
                  </h4>
                  <p className='text-greyscaletext-80 .font-feature-settings text-[0.875rem] tablet:text-[1.25rem] font-normal leading-[140%]'>
                    Cựu học sinh Amsterdam
                  </p>
                  <p className='text-greyscaletext-80 .font-feature-settings text-[0.875rem] tablet:text-[1.25rem] font-normal leading-[140%]'>
                    Học bổng toàn phần trường Deakin University
                  </p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      {/* pagination */}
      <div className='ml-[0.75rem] xmd:mt-[1rem] xmd:mb-[1.5rem] md:ml-0 md:hidden slide-pagination flex items-center w-full justify-center space-x-[0.25rem]'>
        {items.map((paginationItem, index) => {
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
      <div className='flex items-center mt-[1rem] md:mt-[1.81rem] xmd:justify-between md:ml-[5rem]'>
        <Button className='text-[0.875rem] md:mr-[0.81rem] font-bold leading-[120%] w-[10.5625rem] md:h-[3rem] md:w-[9.4rem] p-[0.9375rem_1.875rem] h-[2.5rem] bg-primary-50 text-white ml-[0.75rem] capitalize'>
          Xem chi tiết
        </Button>
        <Button className='text-[0.875rem] font-bold leading-[120%] md:w-[9.4rem] w-[10.5625rem] p-[0.9375rem_1.875rem] h-[2.5rem] md:h-[3rem] border-[#ECECEC] capitalize'>
          Tất cả học sinh
        </Button>
      </div>
    </div>
  )
}

export default StudenSlide
