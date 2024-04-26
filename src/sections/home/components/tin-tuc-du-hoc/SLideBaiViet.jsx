"use client"
<<<<<<< HEAD
import React from 'react'
import TinTucNoiBat from './TinTucNoiBat'
import BaiViet from './BaiViet';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
// import 'swiper/css/navigation';
// import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import 'swiper/css/thumbs';
import 'swiper/css/virtual';
import { FreeMode, Autoplay, Scrollbar, EffectCards, Pagination, Navigation, EffectCoverflow, EffectFade, A11y, EffectCreative, Thumbs, Virtual } from "swiper/modules";


const SLideBaiViet = ({ setSwiper, swiperRef }) => {
  return (



    <div className='xmd:w-screen  w-[63rem] flex justify-center items-center'>
=======
import { Skeleton } from '@/components/ui/skeleton';
import BaiViet from './BaiViet';
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from 'autoprefixer';


const data_bandau = [
  {
    data: [{ slug: 'bai-viet-noi-bat' }, { slug: 'bai-viet' }]
  },
    {
    data: [{ slug: 'bai-viet1' }, { slug: 'bai-viet' }]
  },
    {
    data: [{ slug: 'bai-viet1' }, { slug: 'bai-viet' }]
  },
    {
    data: [{ slug: 'bai-viet1' }, { slug: 'bai-viet' }]
  },
]
const ketqua = [
  {
    data: [{ slug: 'bai-viet1' }, { slug: 'bai-viet' }]
  },
  {
    data: [{ slug: 'bai-viet1' }, { slug: 'bai-viet' }]
  },
  {
    data: [{ slug: 'bai-viet1' }, { slug: 'bai-viet' }]
  },
]



const SLideBaiViet = ({dataTintucs, swiperRef, loadingBaiviet }) => {


  const loaiBoBaivietnoibat = dataTintucs?.filter(item => {
    return !item?.categories?.some(obj => obj.slug === 'bai-viet-noi-bat');
  });
  function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }
  const chunkedData = chunkArray(dataTintucs, 8);
  console.log({ dataTintucs, loaiBoBaivietnoibat });
  return (
    <div className='w-[59rem] flex justify-center items-center'>
>>>>>>> master
      <Swiper
        ref={swiperRef}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
<<<<<<< HEAD
        speed={500}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className='md:!pl-2 xmd:py-[1rem] '
      >
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
=======
        // speed={500}
        loop={false}
        spaceBetween={20}
        slidesPerView={1}
        className='!pl-2 h-full'
      >
        {chunkedData?.map((d, i) => (
        <SwiperSlide key={i}>
            <div className=' h-full grid grid-cols-2 gap-x-[1.56rem] gap-y-[2.1rem]'>
            {!loadingBaiviet && d?.map((data, i) => (
              <BaiViet data={data} loadingBaiviet={loadingBaiviet} />
            ))}
              {loadingBaiviet && Array(8).fill(0)?.map((_, index) => (
                <Skeleton className={'bg-greyscaletext-10 w-[28.6875rem] h-[7.875rem]'} />
            ))}
          </div>
        </SwiperSlide>
            ))}
>>>>>>> master
      </Swiper>

    </div>

  )
}

export default SLideBaiViet
