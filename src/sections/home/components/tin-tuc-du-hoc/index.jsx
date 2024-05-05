"use client"
<<<<<<< HEAD
import React, { useRef, useState } from 'react'
import { tintucduhoc } from '@/lib/data'
import Title from '@/components/Title'
import NavigationCustom from '@/components/navigationcustom'
import SlideTinTucNoiBat from './SlideTinTucNoiBat'
import SLideBaiViet from './SLideBaiViet'
const TinTicDuHoc = () => {
  const swiperRef = useRef(null)
  // const [indexSlider, setIndexSlider] = useState(0)

  const handleSlideChange = (swiper) => {
    // setIndexSlider(swiper.realIndex)
  }
=======
import { useEffect, useRef, useState } from 'react'
import Title from '@/components/Title'
import useSWR from 'swr'
import NavigationCustom from '@/components/navigationcustom'
import SlideTinTucNoiBat from './SlideTinTucNoiBat'
import SLideBaiViet from './SLideBaiViet'



const TinTicDuHoc = ({ categories, dataTintucs }) => {  

  
  const swiperRef = useRef(null)
  const [loadingBaiviet, setLoadingBaiviet] = useState(false)
  const [dataTintucsClient, setDataTintucsClient] = useState([]);
  const [apiUrl, setApiUrl] = useState(null);
>>>>>>> master

  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }
<<<<<<< HEAD
  return (
    <div className='relative flex-col px-[3.75rem] space-y-[1.5625rem] xmd:space-y-[0em] z-10 mt-[2.5rem] w-screen flex justify-center items-center xmd:bg-elevation-blue bg-white'>
      <div className='w-full xmd:pl-[1rem] xmd:w-screen flex flex-col items-start xmd:space-y-[1.375rem] space-y-[1.5rem]'>
        <Title title={'Tin tức du học'} />
        <div className='w-full hidden-scrollbar xmd:overflow-x-auto relative flex items-end gap-[0.75rem] md:self-stretch'>
          <div className=" xmd:w-max flex items-start gap-[0.5rem] flex-[1_0_0]">
            {tintucduhoc.map((t, i) => (
              <button key={i} className={`flex xmd:w-max justify-center items-center 
              py-[0.75rem] hover:bg-primary-5 duration-500 ease-in-out px-[1rem] 
              gap-[0.625rem] rounded-[0.5rem] border border-primary-20 `
                + (i === 0 ? 'bg-primary-5 ' : '')}>
                <div className="text-greyscaletext-50 text-xs not-italic font-bold leading-[120%] uppercase">
                  {t.tittle}
=======

  const fetcher = url => fetch(url).then(r => r.json())
  const { data, error, isLoading } = useSWR(
    apiUrl ? `${process.env.NEXT_PUBLIC_API}/wp-json/okhub/v1/posts-by-category/${apiUrl}` : null,
    fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,    //Option này ngăn useSWR tự động gọi lại API khi cửa sổ hoặc tab của trình duyệt được focus lại
    revalidateOnReconnect: false //Option này ngăn useSWR tự động gọi lại API khi kết nối internet được thiết lập lại sau khi mất kết nối
  }
  );


  useEffect(() => {
    setLoadingBaiviet(isLoading)
    if (data) {
      setDataTintucsClient(data);
    }
    if (error) {
      console.error('Error fetching data:', error);
    }
  }, [data, error, isLoading]);

  return (
    <div className='relative pt-[2.5rem] flex-col  space-y-[1.5625rem] z-10 w-full flex justify-center items-center bg-white'>
      <div className='w-full px-[3.75rem] flex flex-col items-start space-y-[1.5rem]'>
        <Title title={'Tin tức du học'} />
        <div className='w-full no-scrollbar relative flex items-end gap-[0.75rem] self-stretch'>
          <div className=" flex items-start gap-[0.5rem] flex-[1_0_0]">
            {categories?.filter((f) => f?.slug !== 'uncategorized' && f?.slug !== 'bai-viet-noi-bat' && f?.slug !== 'all-bai-viet' )?.map((t, i) => (
              <button onClick={() => setApiUrl(t?.id)} key={i} className={`flex justify-center items-center 
              py-[0.75rem] hover:bg-primary-5 duration-500 ease-in-out px-[1rem] 
              gap-[0.625rem] rounded-[0.5rem] border border-primary-20 `
                + (apiUrl === t.id ? 'bg-primary-5 ' : '')}>
                <div className="text-greyscaletext-50 text-xs not-italic font-bold leading-[120%] uppercase">
                  {t?.name}
>>>>>>> master
                </div>
              </button>
            ))}
          </div>
<<<<<<< HEAD
          <div className=' xmd:hidden absolute h-full w-[6.7rem] top-1/2 -translate-y-1/2 right-0 z-1 pointer-events-none'>
=======
          <div className=' absolute right-[10.3rem] h-full w-[6.7rem] top-1/2 -translate-y-1/2 z-1 pointer-events-none'>
>>>>>>> master
            <NavigationCustom
              indexSlider={3}
              length={5}
              handlePrevSlide={handlePrevSlide}
              handleNextSlide={handleNextSlide}
              outline={true}
            />
          </div>
<<<<<<< HEAD
        </div>
      </div>
      <div className="">
        <div className=" flex bg-elevation-blue xmd:flex-col justify-start items-center w-screen">
          <SlideTinTucNoiBat />
          <SLideBaiViet swiperRef={swiperRef} />
        </div>
      </div>
      <div className=' md:hidden relative w-[6.7rem] pt-[5rem] z-50 pointer-events-none'>
        <NavigationCustom
          indexSlider={3}
          length={5}
          handlePrevSlide={handlePrevSlide}
          handleNextSlide={handleNextSlide}
          outline={true}
=======
          <button onClick={() => setApiUrl(categories?.find((f) => f?.slug === 'all-bai-viet')?.id)} className="flex h-[2.625rem] justify-center items-center gap-2.5 px-[1.875rem] py-[0.9375rem] rounded-lg
          bg-gradient-to-b from-[#2E6BC6] from-[9.83%] via-[#2E6BC6] via-[35.38%] to-[#29A4EA] to-[86.69%] 
          text-white text-center text-sm not-italic font-bold leading-[120%] w-max

          ">{categories?.find((f) => f?.slug === 'all-bai-viet')?.name}</button>
        </div>
      </div>
      <div className="flex space-x-[2.375rem] justify-center items-start w-full">
        <SlideTinTucNoiBat
          loadingBaiviet={loadingBaiviet}
          dataTintucs={dataTintucsClient.length > 0 ? dataTintucsClient : dataTintucs} />
        <SLideBaiViet
          loadingBaiviet={loadingBaiviet}
          swiperRef={swiperRef}
          dataTintucs={dataTintucsClient.length > 0 ? dataTintucsClient : dataTintucs}
>>>>>>> master
        />
      </div>
    </div>
  )
}

export default TinTicDuHoc
<<<<<<< HEAD
  // < div className = "overflow-x-auto hidden-scrollbar w-full" >
  //   <div className="w-max pb-2  flex items-start  gap-[0.87848rem]">
  //     <RelatedButton text='mới nhất' bg='#153454' color='white' />
  //     <RelatedButton text='ipad' bg='' color='' />
  //     <RelatedButton text='bút cảm ứng' bg='' color='' />
  //     <RelatedButton text='camara' bg='' color='' />
  //     <RelatedButton text='camara' bg='' color='' />
  //     <RelatedButton text='camara' bg='' color='' />
  //   </div>
  // </ >
=======
>>>>>>> master
