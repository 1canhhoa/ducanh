"use client"
import { useEffect, useRef, useState } from 'react'
import { tintucduhoc } from '@/lib/data'
import Title from '@/components/Title'
import useSWR from 'swr'
import NavigationCustom from '@/components/navigationcustom'
import SlideTinTucNoiBat from './SlideTinTucNoiBat'
import SLideBaiViet from './SLideBaiViet'



const TinTicDuHoc = ({ categories, dataTintucs, dataNoibat }) => {  

  
  const swiperRef = useRef(null)
  const [loadingBaiviet, setLoadingBaiviet] = useState(false)
  const [dataTintucsClient, setDataTintucsClient] = useState([]);
  const [apiUrl, setApiUrl] = useState(null);

  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }

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
    <div className='relative pt-[2.5rem] flex-col  space-y-[1.5625rem] xmd:space-y-[0em] z-10 w-full flex justify-center items-center xmd:bg-elevation-blue bg-white'>
      <div className='w-full md:px-[3.75rem] xmd:w-full flex flex-col items-start xmd:space-y-[1.375rem] space-y-[1.5rem]'>
        <Title className={'xmd:pl-[1rem] '} title={'Tin tức du học'} />
        <div className='w-full xmd:pl-[1rem] hidden-scrollbar xmd:overflow-x-auto relative flex items-end gap-[0.75rem] md:self-stretch'>
          <div className=" xmd:w-max flex items-start gap-[0.5rem] flex-[1_0_0]">
            {categories?.map((t, i) => (
              <button onClick={() => setApiUrl(t?.id)} key={i} className={`flex xmd:w-max justify-center items-center 
              py-[0.75rem] hover:bg-primary-5 duration-500 ease-in-out px-[1rem] 
              gap-[0.625rem] rounded-[0.5rem] border border-primary-20 `
                + (apiUrl === t.id ? 'bg-primary-5 ' : '')}>
                <div className="text-greyscaletext-50 text-xs not-italic font-bold leading-[120%] uppercase">
                  {t?.name}
                </div>
              </button>
            ))}
          </div>
          <div className=' xmd:hidden absolute h-full w-[6.7rem] top-1/2 -translate-y-1/2 right-0 z-1 pointer-events-none'>
            <NavigationCustom
              indexSlider={3}
              length={5}
              handlePrevSlide={handlePrevSlide}
              handleNextSlide={handleNextSlide}
              outline={true}
            />
          </div>
        </div>
      </div>
      <div className=" flex xmd:flex-col justify-start items-start w-full">
        <SlideTinTucNoiBat
          loadingBaiviet={loadingBaiviet}
          dataNoibat={dataNoibat} />
        <SLideBaiViet
          loadingBaiviet={loadingBaiviet}
          swiperRef={swiperRef}
          dataTintucs={dataTintucsClient.length > 0 ? dataTintucsClient : dataTintucs}
        />
      </div>
      <div className=' md:hidden relative w-[6.7rem] pt-[5rem] z-50 pointer-events-none'>
        <NavigationCustom
          indexSlider={3}
          length={5}
          handlePrevSlide={handlePrevSlide}
          handleNextSlide={handleNextSlide}
          outline={true}
        />
      </div>
    </div>
  )
}

export default TinTicDuHoc
