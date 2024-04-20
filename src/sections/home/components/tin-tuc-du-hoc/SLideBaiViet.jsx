"use client"
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
      <Swiper
        ref={swiperRef}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
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
      </Swiper>

    </div>

  )
}

export default SLideBaiViet
