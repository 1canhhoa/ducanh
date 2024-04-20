"use client"
import TinTucNoiBat from './TinTucNoiBat'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Skeleton } from '@/components/ui/skeleton';

const SlideTinTucNoiBat = ({ dataTintucs, loadingBaiviet }) => {
  const timBaivietNoibat = dataTintucs?.find((f, i) => f?.categories?.find((c, i) => c.slug === 'bai-viet-noi-bat'))
  console.log({ timBaivietNoibat });
  return (
    <div>
      {!loadingBaiviet && <TinTucNoiBat data={timBaivietNoibat} />}
     {loadingBaiviet && <Skeleton className={' w-[30.375rem] h-[37.625rem] rounded-[1rem] bg-greyscaletext-10'} />}
    </div>

  )
}

export default SlideTinTucNoiBat