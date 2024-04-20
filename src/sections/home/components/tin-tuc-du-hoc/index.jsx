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
    apiUrl ? `${process.env.NEXT_PUBLIC_API_DOMAIN}/wp-json/okhub/v1/posts-by-category/${apiUrl}` : null,
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
                </div>
              </button>
            ))}
          </div>
          <div className=' absolute right-[10.3rem] h-full w-[6.7rem] top-1/2 -translate-y-1/2 z-1 pointer-events-none'>
            <NavigationCustom
              indexSlider={3}
              length={5}
              handlePrevSlide={handlePrevSlide}
              handleNextSlide={handleNextSlide}
              outline={true}
            />
          </div>
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
        />
      </div>
    </div>
  )
}

export default TinTicDuHoc
