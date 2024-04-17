"use client"
import TinTucNoiBat from './TinTucNoiBat'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Skeleton } from '@/components/ui/skeleton';

const SlideTinTucNoiBat = ({ dataTintucs, loadingBaiviet }) => {
  const timBaivietNoibat = dataTintucs?.find((f, i) => f?.categories?.find((c, i) => c.slug === 'bai-viet-noi-bat'))
  console.log({ timBaivietNoibat });
  return (
    // <Swiper
    //   speed={1500}
    //   loop={true}
    //   autoplay={{ delay: 3000, disableOnInteraction: false }}
    //   modules={[Autoplay]}
    //   spaceBetween={50}
    //   slidesPerView={'auto'}
    //   className='xmd:w-full  w-[37rem] xmd:!py-[0.75rem] xmd:!pl-[1rem] !pl-[3.75rem] '
    // >
    //   {!loadingBaiviet && dataNoibat?.map((data, i) => (
    //     <SwiperSlide key={i}>
    <div>
      {!loadingBaiviet && <TinTucNoiBat data={timBaivietNoibat} />}
     {loadingBaiviet && <Skeleton className={' w-[30.375rem] h-[37.625rem] rounded-[1rem] bg-greyscaletext-10'} />}
    </div>
        // </SwiperSlide>
    //   ))}
    // </Swiper>

  )
}

export default SlideTinTucNoiBat