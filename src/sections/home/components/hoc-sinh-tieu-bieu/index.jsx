"use client"
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide, } from "swiper/react";
import { Navigation } from 'swiper/modules'
import "swiper/css";
import NavigationCustom from '@/components/navigationcustom';
const HocSinhTieuBieu = ({ isMobile,dataHocSinhTieuBieu }) => {
  const [moveClass, setMoveClass] = useState('');

  const itemsRef = useRef([]);
  const [datHocsinh, setDatHocsinh] = useState(dataHocSinhTieuBieu);
  const [active, setActive] = useState(3);
  const [divHeight, setDivHeight] = useState(null);
  console.log({ divHeight });
  const divRef = useRef(null);
  useEffect(() => {
    setDivHeight(document.querySelector(".text-item-" + active)?.clientHeight)
  }, [active]);
  const swiperRef = useRef(null)
  const [indexSlider, setIndexSlider] = useState(0)

  const handleSlideChange = (swiper) => {
    console.log({ swiper });
    setActive(swiper.realIndex)
    setIndexSlider(swiper.realIndex)
  }

  const handleNextSlide = () => {
    swiperRef.current?.slideNext()

  }
  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }
  return (
    <div className='w-full mt-[6rem] relative'>

      <Image loading='lazy' alt='background học sinh tieu biểu web' src='/images/homepage/bg-hocsinh.png'
        className='w-full h-[49.25rem] z-[9] shrink-0' width={1600} height={790} />
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
      {datHocsinh?.map((c, index) => (
        <div key={index} className={"inline-flex absolute top-[22%] left-[48%] -translate-x-1/2  items-start  p-[1.8125rem] duration-300 ease-linear " + (index !== active ? "opacity-0" : " opacity-100")}>
          <Image loading='lazy' alt='dấu quotes trích dẫn' src='/images/homepage/quotes.png'
            className='w-[2.5rem] h-[1.75rem] shrink-0' width={40} height={28} />
          <div className='w-5 z-50 h-[16rem]'>
          </div>
          <div className="flex flex-col items-start space-y-[1.8125rem]">
            <div ref={divRef} className={`text-item-${index} flex flex-col items-start gap-[1.25rem] w-[30.375rem]`}>
              <div className="line-clamp-3 self-stretch text-white text-[2rem] not-italic font-extrabold leading-[130%] tracking-[-0.02rem]">
                {c?.about_student?.comment}
              </div>
              <div className="flex flex-col items-start space-y-[0.375rem]">
                <div className="w-max text-[1.25rem] font-bold leading-[1.2] text-white">
                  - {c?.about_student?.name}
                </div>
                <div className="line-clamp-3 text-white text-[1rem] not-italic font-normal leading-[1.5] ">
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
          top: `calc(11.8rem + 1.125rem + 1rem + ${divHeight}px)`
        }}
        className=" duration-300 ease-linear absolute top-[24.5rem] left-[45.6%] -translate-x-1/2 flex items-start self-stretch space-x-[0.8125rem]">
        <button className=' relative flex justify-center items-center h-[3rem] py-[0.75rem] px-[1.875rem] rounded-[0.625rem]  bg-linear-l5  '>
          <div className='flex justify-center items-center absolute top-1/2  -translate-y-1/2 left-1/2 -translate-x-1/2 h-[2.7rem] w-[97%] rounded-[0.525rem] bg-white   '>
          </div>
          <div className=" relative text-center
                  text-primary-40 text-sm not-italic w-max font-bold leading-[100%] tracking-[0.01313rem] uppercase
                  bg-clip-text text_gradient bg-gradient-to-b from-[#2E6BC6] from-[10.78%]
                  to-[#29A4EA] to-[81.3%]
                    ">
            Xem chi tiết
          </div>
        </button>
        <button className="flex justify-center items-center h-[3rem] py-[0.75rem] px-[1.875rem]
                rounded-[0.625rem] border-[2px]">
          <div className="text-white w-max text-center uppercase
                     text-sm not-italic font-bold leading-[100%] tracking-[0.01313rem]
                    ">
            Tất cả học sinh
          </div>
        </button>
      </div>
      <div className="absolute bottom-0 left-0" >
        <Swiper
          speed={500}
          ref={swiperRef}
          onSlideChange={handleSlideChange}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
          centeredSlides
          slidesPerView={4}
          loop={'true'}
          modules={[Navigation]}
          className='w-[98rem] mySwiper h-full !pl-[20rem]'
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
      <div className='  absolute h-full w-[6.7rem] top-[35%] -translate-y-1/2 right-[5rem] z-[100] pointer-events-none'>
        <NavigationCustom
          indexSlider={3}
          length={5}
          handlePrevSlide={handlePrevSlide}
          handleNextSlide={handleNextSlide}
          outline={false}
        />
      </div>
    </div>
  );
};

export default HocSinhTieuBieu;
