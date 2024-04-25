"use client"
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide, } from "swiper/react";
import { Navigation } from 'swiper/modules'
import "swiper/css";
const HocSinhTieuBieu = ({ isMobile, dataHocSinhTieuBieu }) => {
  const [active, setActive] = useState(3);
  const [divHeight, setDivHeight] = useState(null);
  const divRef = useRef(null);
  const swiperRef = useRef(null)

  const [datHocsinh, setDatHocsinh] = useState(dataHocSinhTieuBieu);

  const handleSlideChange = (swiper) => {
    setActive(swiper.realIndex)

  }
  useEffect(() => {
    setDivHeight(document.querySelector(".text-item-" + active)?.clientHeight)
  }, [active]);

  return (
    <div className='w-full mt-[3rem] relative'>
      <div className="absolute bottom-0 left-0 " >
        <Swiper
          speed={500}
          ref={swiperRef}
          onSlideChange={handleSlideChange}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
          centeredSlides
          slidesPerView={2}
          loop={'true'}
          modules={[Navigation]}
          className='w-[23.4375rem] mySwiper h-full'
        >
          {datHocsinh?.map((d, i) => (
            <SwiperSlide>
              <div onClick={() => setActive(i)} className='box_item_slide'>
                <Image
                  key={i} loading='lazy' width={392} height={730} alt={`ảnh học sinh ${i}`}
                  className="item_slide" src={d?.image?.url} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Image loading='lazy' alt='background học sinh tieu biểu mobi' src='/images/homepage/bg-hocsinh-mobi.png'
        className='w-screen h-[46.65886rem] z-[9] shrink-0' width={380} height={700} />
      <div
        style={{
          top: `calc(3.8rem + 1.8125rem + 1rem + ${divHeight}px)`
        }}
        className=" flex absolute top-[10.5rem]  left-1/2 -translate-x-1/2 z-[1000] items-center space-x-[0.4rem]">
        {dataHocSinhTieuBieu?.map((_, i) => (
          <div key={i} className={(active === i ? " bg-[#FFF] " : " opacity-40 bg-[#FFF]") + " w-1.5 h-1.5 rounded-full"}></div>
        ))}
      </div>
      {dataHocSinhTieuBieu?.map((c, index) => (
        <div key={index} className={"inline-flex absolute flex-col space-y-[1rem] top-[2.81rem] left-[1.25rem] items-start duration-300 ease-linear " + (index !== active ? "opacity-0" : " opacity-100")}>
          <Image loading='lazy' alt='dấu quotes trích dẫn' src='/images/homepage/quotes.png'
            className='w-[2.5rem] h-[1.75rem] shrink-0' width={40} height={28} />
          <div className="flex flex-col items-start space-y-[2.8125rem]">
            <div ref={divRef} className={`text-item-${index} flex flex-col items-start gap-[1.25rem] md:w-[30.375rem]`}>
              <div className=" line-clamp-3 self-stretch w-[20.4375rem] text-[1.5rem]  text-white not-italic font-bold leading-[130%] tracking-[-0.03rem]">
                {c?.about_student?.comment}
              </div>
              <div className="flex flex-col items-start space-y-[0.25rem]">
                <div className="w-max text-[1rem] font-bold leading-[1.5] text-white">
                  - {c?.about_student?.name}
                </div>
                <div className="line-clamp-3 text-white text-[0.875rem] not-italic font-normal leading-[1.4]">
                  {c?.about_student?.ex_student}<br />
                  {c?.about_student?.award}
                </div>
              </div>
            </div>

          </div>
        </div>
      ))}
      <div
        style={{
          top: `calc(5.8rem + 1.8125rem + 1rem + ${divHeight}px)`
        }}
        className=" duration-300 ease-linear absolute top-[10.5rem] left-1/2 -translate-x-1/2 flex items-start self-stretch space-x-[0.8125rem]">
        <button className=' relative flex justify-center items-center h-[2.6rem] py-[0.9375rem] px-[2.5rem] rounded-[0.625rem]  bg-linear-l5  '>
          <div className='flex justify-center items-center absolute h-[92%] top-1/2  -translate-y-1/2 left-1/2 -translate-x-1/2 w-[97%] rounded-[0.525rem] bg-white   '>
          </div>
          <div className=" relative text-center
                   text-sm not-italic w-max font-bold leading-[1.2] tracking-[0.01313rem] normal-case
                  bg-clip-text text_gradient bg-gradient-to-b from-[#2E6BC6] from-[10.78%]
                  to-[#29A4EA] to-[81.3%]
                    ">
            Xem chi tiết
          </div>
        </button>
        <button className="flex justify-center items-center h-[2.5rem] py-[0.9375rem] px-[1.875rem]
                rounded-[0.625rem] border-[1px] border-primary-10">
          <div className="text-white w-max text-center normal-case
                     text-sm not-italic font-bold leading-[100%] tracking-[0.01313rem]
                    ">
            Tất cả học sinh
          </div>
        </button>
      </div>
    </div>
  );
};

export default HocSinhTieuBieu;
