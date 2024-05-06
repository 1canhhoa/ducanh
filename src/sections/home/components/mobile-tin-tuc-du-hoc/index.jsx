"use client"
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
    <div className='relative pt-[2.5rem] flex-col space-y-[0em] z-10 w-full flex justify-center items-center bg-elevation-blue '>
      <div className='w-full flex flex-col items-start space-y-[1.375rem]'>
        <Title className={'pl-[1rem] '} title={'Tin tức du học'} />
        <div className='w-full pl-[1rem] no-scrollbar overflow-x-auto relative flex items-end gap-[0.75rem]'>
          <div className="z-50 w-max flex items-start space-x-[0.5rem] pr-[1rem] flex-[1_0_0]">
            {categories?.filter((f) => f?.slug !== 'uncategorized' && f?.slug !== 'bai-viet-noi-bat')?.map((t, i) => (
              <div key={i}>
                {t?.slug !== 'uncategorized' && <button onClick={() => setApiUrl(t?.id)} key={i} className={`flex xmd:w-max justify-center items-center 
                py-[0.75rem] hover:bg-primary-60 duration-500 ease-in-out px-[1rem] 
                gap-[0.625rem] rounded-[0.5rem] border border-primary-20 `
                  + (apiUrl === t.id ? 'bg-primary-60 text-white' : 'text-greyscaletext-50')}>
                  <div className=" text-xs not-italic font-bold leading-[120%] uppercase">
                    {t?.name}
                  </div>
                </button>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-start items-center w-full space-y-[0.75rem] pt-[0.75rem]">
        <SlideTinTucNoiBat
          loadingBaiviet={loadingBaiviet}
          dataTintucs={dataTintucsClient.length > 0 ? dataTintucsClient : dataTintucs} />
        <SLideBaiViet
          loadingBaiviet={loadingBaiviet}
          swiperRef={swiperRef}
          dataTintucs={dataTintucsClient.length > 0 ? dataTintucsClient : dataTintucs}
        />
      </div>
      <div className=' relative w-[6.7rem] pt-[5rem] z-50 pointer-events-none'>
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
