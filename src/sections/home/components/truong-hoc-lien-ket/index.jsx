"use client"
import Image from 'next/image'
import { Swiper, SwiperSlide, } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from 'swiper/modules'
import "swiper/css";
const TruongLienKet = ({ dataTruongLk }) => {

  return (
    <div className='relative w-full'>
      <Image loading='lazy' alt="ảnh nền trường liên kết web" src={'/images/homepage/bg-truonglk.png'} width={1600} height={620} className="  w-full h-[38.125rem]" />
      <div
        className=" text_gradient bg-clip-text bg-gradient-to-r 
        from-[#2E6BC6] from-[9.83%]  via-[#2E6BC6] via-[9.83%]  to-[#29A4EA] to-[86.69%] 
          absolute text-[13.75rem] not-italic font-extrabold leading-[160%] tracking-[-0.4125rem] 
          right-[32.25rem] top-[7.5625rem]
          ">
        2000
      </div>
      <div className="flex w-[35.4375rem] bg-white justify-center items-center gap-2.5 absolute px-10 py-2 md:right-[32.25rem] top-[17.4rem]
           text-[color:var(--PRIMARY-50,#2B46A8)] text-2xl not-italic font-semibold leading-[160%] tracking-[-0.03rem] uppercase">
        trường học liên kết
      </div>
      <div
        className='overflow-x-hidden no-scrollbar absolute  bottom-0 w-full'>
        <div className=" contentlk flex items-center ">
          <Swiper
            slidesPerView='auto'

            freeMode={true}
            loop
            modules={[Navigation, Autoplay, FreeMode]}
            className='w-full h-full !pointer-events-none'
            centeredSlides
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={3000}
            id="swiper_social"
          >
            {dataTruongLk?.country?.map((d, i) => (
              <SwiperSlide key={i} className='!w-fit !pointer-events-none'>
                <div key={i} className="duration-500 w-fit flex z-[100] flex-col space-y-[0.75rem] h-[9.1875rem] justify-center items-center  py-[1.4375rem] px-[2.65625rem]">
                  <Image loading='lazy' alt={`ảnh quốc gia ${d}`} src={d?.image} width={60} height={60} className="size-[3.625rem]" />
                  <div className="text-primary-60 text-center text-xl not-italic font-semibold leading-[150%] tracking-[-0.0125rem]">
                    {d?.title}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  )
}

export default TruongLienKet
