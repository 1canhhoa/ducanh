"use client"
import Image from 'next/image'
import { country_truonglk } from '@/lib/data'
import { useState } from 'react';
import { Swiper, SwiperSlide, } from "swiper/react";
import { Autoplay, FreeMode, Grid, Navigation } from 'swiper/modules'
import "swiper/css";
import 'swiper/css/grid';
const TruongLienKet = () => {
  const [displayData, setDisplayData] = useState(country_truonglk);


  return (
    <div className='relative w-full'>
      <Image loading='lazy' alt="ảnh nền trường liên kết web" src={'/images/homepage/bg-truonglk.png'} width={1600} height={620} className="xmd:hidden w-full h-[38.125rem]" />
      <Image loading='lazy' alt="ảnh nền trường liên kết mobi" src={'/images/homepage/bg-truonglk-mobi.png'} width={375} height={580} className="md:hidden w-full h-[36.0625rem]" />
      <div
        className=" text_gradient bg-clip-text bg-gradient-to-r 
        from-[#2E6BC6] from-[9.83%]  via-[#2E6BC6] via-[9.83%]  to-[#29A4EA] to-[86.69%] 
          absolute xmd:text-[7.5rem] text-[13.75rem] not-italic font-extrabold leading-[160%] xmd:tracking-[-0.225rem] tracking-[-0.4125rem] 
          xmd:top-0 xmd:left-1/2 xmd:-translate-x-1/2 md:right-[32.25rem] md:top-[7.5625rem]
          ">
        2000
      </div>
      <div className="xmd:backdrop-blur-[15px] flex w-full md:w-[35.4375rem] md:bg-white justify-center items-center gap-2.5 absolute px-10 py-2 xmd:top-[5rem] xmd:left-1/2 xmd:-translate-x-1/2 md:right-[32.25rem] md:top-[17.4rem]
          @apply text-[color:var(--PRIMARY-50,#2B46A8)] xmd:text-[1rem] text-2xl not-italic font-semibold leading-[160%] xmd:tracking-[-0.02rem] tracking-[-0.03rem] uppercase">
        trường học liên kết
      </div>
      <div
        className='xmd:mt-[2rem] overflow-x-hidden no-scrollbar absolute xmd:top-[8rem] md:bottom-0 w-full'>
        <Swiper
          slidesPerView='auto'
          freeMode={true}
          loop
          modules={[Navigation, Autoplay, FreeMode, Grid]}
          className='w-[23.4375rem] h-[18rem] !pointer-events-none
            '
          grid={{
            rows: 2,
          }}

          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={3000}
          id="swiper_social"
        >
          {displayData.map((d, i) => (
            <SwiperSlide className='!w-[6rem] !pointer-events-none'>

              <div key={i} className="flex flex-col space-y-[0.75rem] justify-center items-center  py-[1.4375rem]">
                <Image loading='lazy' alt={`ảnh quốc gia ${d}`} src={d?.img} width={60} height={60} className="size-[3.625rem]" />
                <div className="text-primary-60 text-center xmd:text-[1rem] text-xl not-italic xmd:font-medium font-semibold leading-[150%] xmd:tracking-normal tracking-[-0.0125rem]">
                  {d?.tittle}
                </div>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>

      </div>

    </div>
  )
}

export default TruongLienKet