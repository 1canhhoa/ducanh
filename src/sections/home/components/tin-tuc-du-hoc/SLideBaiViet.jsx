"use client"
import BaiViet from './BaiViet';
import { Swiper, SwiperSlide } from "swiper/react";


const SLideBaiViet = ({ setSwiper, swiperRef }) => {
  return (
    <div className='md:w-[63rem] flex justify-center items-center'>
      <Swiper
        ref={swiperRef}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        speed={500}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className='md:!pl-2 xmd:py-[1rem] w-screen'
      >
        <SwiperSlide>
          <div className='  xmd:mx-auto xmd:w-fit grid grid-cols-2 xmd:grid-cols-1 gap-x-[1.56rem] xmd:gap-y-[0.75rem] gap-y-[2.1rem]'>
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
