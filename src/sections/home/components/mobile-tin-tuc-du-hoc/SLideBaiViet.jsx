"use client"
import { Skeleton } from '@/components/ui/skeleton';
import BaiViet from './BaiViet';
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from 'autoprefixer';


const SLideBaiViet = ({ setSwiper, dataTintucs, swiperRef, loadingBaiviet }) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className='md:w-[63rem] flex justify-center items-center'>
      <Swiper
        ref={swiperRef}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        // speed={500}
        loop={false}
        spaceBetween={20}
        slidesPerView={1}
        className='md:!pl-2 h-full xmd:py-[1rem] w-screen'
      >
        <SwiperSlide>
          <div className=' h-full  xmd:mx-auto xmd:w-fit grid grid-cols-2 xmd:grid-cols-1 gap-x-[1.56rem] xmd:gap-y-[0.75rem] gap-y-[2.1rem]'>
            {!loadingBaiviet && dataTintucs?.map((data, i) => (
              <BaiViet data={data} loadingBaiviet={loadingBaiviet} />
            ))}
            {loadingBaiviet && data.map((_, index) => (
              <Skeleton className={'bg-greyscaletext-10 xmd:hidden w-[28.6875rem] h-[7.875rem]'} />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>

    </div>

  )
}

export default SLideBaiViet
