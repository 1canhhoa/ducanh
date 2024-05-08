"use client"
import Maptiler from '@/sections/maptiler';
import Title from '@/components/Title'
import NavigationCustom from '@/components/navigationcustom'
import { Button } from '@/components/ui/button'
import { useEffect, useRef, useState } from 'react'
import useSWR from 'swr'
import "swiper/css";
import Image from 'next/image'
import Table from './Table'
import Align from '@/components/icon/Align';
import Count from '@/components/count/Count'
const Pagination = ({ className, content }) => {
  return <div className={'border border-[rgba(19,43,125,0.20)] text-primary-50 p-2.5 rounded-lg ' + (className ? className : '')}>
    <div className=" size-[1.125rem] text-center text-sm font-bold leading-[120%] uppercase">
      {content}
    </div>
  </div>
}
const LichHoiThao = ({ t, isMobile, dataCountries, dataLocations, dataLichHoithaos }) => {

  const [currentPage, setCurrentPage] = useState(1)
  const [loadingLichHoithao, setLoadingLichHoithao] = useState(false)
  const [dataLichHoithaosClient, setDataLichHoithaosClient] = useState(null);
  const [apiUrl, setApiUrl] = useState(null);


  const swiperRef = useRef(null)
  const handleNextSlide = () => {
    setApiUrl('click')
    setCurrentPage(prev => prev + 1)
    swiperRef.current?.slideNext()
  }
  const handlePrevSlide = () => {

    if (currentPage > 1) {
      setApiUrl('click')
      setCurrentPage(prev => prev - 1)
    }
    swiperRef.current?.slidePrev()
  }

  const fetcher = url => fetch(url).then(r => r.json())
  const { data, error, isLoading } = useSWR(
    apiUrl ? `${process.env.NEXT_PUBLIC_API}/wp-json/okhub/v1/events?page=${currentPage}&per_page=10` : null,
    fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,//Option này ngăn useSWR tự động gọi lại API khi cửa sổ hoặc tab của trình duyệt được focus lại
    revalidateOnReconnect: false//Option này ngăn useSWR tự động gọi lại API khi kết nối internet được thiết lập lại sau khi mất kết nối
  }
  );
  useEffect(() => {
    setLoadingLichHoithao(isLoading)
    if (data) {
      setDataLichHoithaosClient(data?.events);
    }
    if (error) {
      console.error('Error fetching data:', error);
    }
  }, [data, error, isLoading]);


  const [isOpen, setIsOpen] = useState(false);
  const [isPopupMounted, setIsPopupMounted] = useState(false);

  const togglePopup = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsPopupMounted(true);
    }, 400)
  };
  const togglePopupClose = () => {
    setIsPopupMounted(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 200)
  };
  // hủy croll sau khi bật popup map
  useEffect(() => {
    // if (window.innerWidth < 0) {

    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'initial';
      document.body.style.overflow = 'initial';
    }
    // }
  }, [isOpen]);

  return (
    <div className='flex flex-col w-fit items-start space-y-[1.875rem] '>
      <div className="flex flex-col items-start space-y-[3rem]">
        <div className="flex flex-col items-start space-y-[0.5rem]">
          <div className="text-greyscaletext-40 text-center text-[1rem] not-italic font-bold leading-[normal] uppercase">
            theo dõi ngay
          </div>
          <Title
            title={t.lich_hoi_thao}
          />
        </div>
        <div className="flex items-start space-x-[1.5rem] relative">
          <div className='absolute h-full w-[6.7rem] top-1/2 -translate-y-1/2 left-0 z-1 pointer-events-none'>
            <NavigationCustom
              indexSlider={3}
              length={5}
              handlePrevSlide={handlePrevSlide}
              handleNextSlide={handleNextSlide}
              outline={true}
            />
          </div>
          <div className="flex items-start space-x-[0.625rem] pl-[7.2rem]">
            <Button className='flex hover:bg-primary-40 !px-[1rem] gap-x-[0.5rem] items-center group  hover:text-white duration-300 ease-linear'>
              <Align />
              Chọn quốc gia bạn quan tâm
              <Align />
            </Button>
            <Button className='flex !px-[1rem] gap-x-[0.5rem] items-center group hover:bg-primary-40 hover:text-white duration-300 ease-linear'>
              <Align />
              Địa điểm tổ chức
              <Align />
            </Button>
          </div>
        </div>
      </div>
      <div className=" flex w-fit space-x-[1.375rem]">
        <div className=' no-scrollbar w-max'>
          <div className='w-[60.35139rem] !pr-[0.5rem]'>
            <Table
              dataLichHoithaos={dataLichHoithaosClient?.length > 0 ? dataLichHoithaosClient : dataLichHoithaos}
              dataCountries={dataCountries}
              dataLocations={dataLocations}
              isMobile={isMobile} />
          </div>
        </div>

        <div className=" relative">
          <div className='absolute top-[0.75rem] left-[1.52rem] flex flex-col items-start'>

            <div className="  text-[5.54163rem] not-italic font-extrabold leading-[100%] tracking-[-0.27706rem]
          bg-gradient-to-r text_gradient bg-clip-text  from-[#2E6BC6] from-[9.83%]  via-[#2E6BC6] via-[9.83%]  to-[#29A4EA] to-[86.69%] 
          ">
              <Count num={2000} />
              {/* <Count num={20} /> */}
            </div>
            <div className="text-[1.29044rem] not-italic font-extrabold leading-[130%] tracking-[-0.02581rem]
                      bg-gradient-to-r text_gradient bg-clip-text  from-[#2E6BC6] from-[9.83%]  via-[#2E6BC6] via-[9.83%]  to-[#29A4EA] to-[86.69%] 
            ">
              TRƯỜNG HỌC LIÊN KẾT
            </div>
            <div className="absolute -top-5 -right-8 text-[3.62181rem] not-italic font-extrabold leading-[130%] tracking-[-0.18106rem] 
             bg-gradient-to-r text_gradient bg-clip-text  from-[#2E6BC6] from-[9.83%]  via-[#2E6BC6] via-[9.83%]  to-[#29A4EA] to-[86.69%] ">
              +
            </div>
          </div>

          <Image loading='lazy' alt="ảnh map tìm đường" src={'/images/homepage/map-timduong.png'} width={480} height={560} className="w-[29.8125rem] h-[35rem]" />

          <div onClick={togglePopup} className='cursor-pointer'>
            <Image loading='lazy' className="absolute bottom-[1.94rem] right-[2.94rem] w-[23.0625rem] h-[4.5rem]" alt="ảnh button tìm đường" src={'/images/homepage/button-timduong.png'} width={370} height={75} />
            <Image loading='lazy' className="kinh-loop absolute bottom-[1.5rem] right-[-1.5rem] w-[2.46225rem] h-[2.61319rem]" alt="ảnh kính loop" src={'/images/homepage/search-timduong.png'} width={40} height={44} />
            <div className='absolute z-2 bottom-[2.8rem] left-[4.94rem] text-white text-center text-[0.75rem] not-italic font-semibold leading-[150%] tracking-[-0.0075rem] uppercase'>
              Tìm trường cùng Đức Anh
            </div>
          </div>
          {isOpen && (
            <div className={`bg-white h-screen z-[100] fixed top-0 left-0 duration-200 ease-linear  ${isOpen && isPopupMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
              <div onClick={togglePopupClose} className="absolute z-[2000] top-[1.4rem] right-[1.4rem] cursor-pointer">
                <div className="inline-flex items-start bg-white gap-2.5 p-2.5 rounded-lg">
                  <svg className='size-[1.5rem]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#2B46A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <Maptiler isMobile={isMobile} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LichHoiThao