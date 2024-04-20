"use client"
import TinTucNoiBat from './TinTucNoiBat'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Skeleton } from '@/components/ui/skeleton';

const SlideTinTucNoiBat = ({ dataTintucs, loadingBaiviet }) => {
  const timBaivietNoibat = dataTintucs?.find((f, i) => f?.categories?.find((c, i) => c.slug === 'bai-viet-noi-bat'))
  return (
    // <Swiper
    //   speed={1500}
    //   loop={true}
    //   autoplay={{ delay: 3000, disableOnInteraction: false }}
    //   modules={[Autoplay]}
    //   spaceBetween={50}
    //   slidesPerView={'auto'}
    //   className='w-full !py-[0.75rem] !pl-[1rem] '
    // >
    <div>
      {!loadingBaiviet && <TinTucNoiBat data={timBaivietNoibat} />}
      {loadingBaiviet && <Skeleton className={' w-[96%] h-[37.625rem] rounded-[1rem] bg-greyscaletext-10'} />}
    </div>
    // </Swiper>

  )
}

export default SlideTinTucNoiBat