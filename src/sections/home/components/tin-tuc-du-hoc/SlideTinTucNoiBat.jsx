"use client"
import TinTucNoiBat from './TinTucNoiBat'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const SlideTinTucNoiBat = ({ dataTintucNoibat }) => {
  console.log({ dataTintucNoibat });
  return (
    <Swiper
      speed={1500}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={'auto'}
      className='xmd:w-full  w-[37rem] xmd:!py-[0.75rem] xmd:!pl-[1rem] !pl-[3.75rem] '
    >
      {dataTintucNoibat?.map((data, i) => (
        <SwiperSlide key={i}>
          <TinTucNoiBat data={data} />
        </SwiperSlide>
      ))}
      {/* <SwiperSlide>
        <TinTucNoiBat />
      </SwiperSlide>
      <SwiperSlide>
        <TinTucNoiBat />
      </SwiperSlide> */}
    </Swiper>

  )
}

export default SlideTinTucNoiBat