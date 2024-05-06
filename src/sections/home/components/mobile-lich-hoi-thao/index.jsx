"use client"
import Title from '@/components/Title'
import { useEffect, useRef, useState } from 'react'
import useSWR from 'swr'
import "swiper/css";
import Image from 'next/image'
import Table from './Table'
import Maptiler from '@/sections/maptiler'

const Pagination = ({ className, content, slug, setCurrentPage }) => {
  return <div onClick={() => setCurrentPage(content)} className={'border border-[rgba(19,43,125,0.20)] text-primary-50 p-2.5 rounded-lg ' + (className ? className : '')}>
    <div className=" size-[1.125rem] text-center text-sm font-bold leading-[120%] uppercase">
      {content}
    </div>
  </div>
}
const LichHoiThao = ({ t, isMobile, dataCountries, dataLocations, dataLichHoithaos }) => {

  const [currentPage, setCurrentPage] = useState(1)
  const [loadingLichHoithao, setLoadingLichHoithao] = useState(false)
  const [dataLichHoithaosClient, setDataLichHoithaosClient] = useState(null);

  const fetcher = url => fetch(url).then(r => r.json())
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/wp-json/okhub/v1/events?page=${currentPage}&per_page=10`,
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

  const sectionRef = useRef(null);
  const handleClickPagination = (i) => {
    setCurrentPage(i)
    if (!loadingLichHoithao) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }



  const [isOpen, setIsOpen] = useState(true);
  const [isPopupMounted, setIsPopupMounted] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      setIsPopupMounted(!isPopupMounted); // Toggle trạng thái của việc hiển thị popup trong DOM
    }, 200)
  };
  const togglePopupClose = () => {
    setIsPopupMounted(!isPopupMounted); // Toggle trạng thái của việc hiển thị popup trong DOM
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 200)
  };
  // hủy croll sau khi bật popup map
  useEffect(() => {

    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'initial';
      document.body.style.overflow = 'initial';
    }
  }, [isOpen]);

  return (
    <div ref={sectionRef} className='flex flex-col w-fit items-start space-y-[1rem]'>
      <div className="flex flex-col items-start space-y-[3rem] px-[0.625rem] ">
        <div className="flex flex-col items-start space-y-[0.5rem]">
          <div className="text-greyscaletext-40 text-center text-[0.875rem] not-italic font-bold leading-[normal] uppercase">
            theo dõi ngay
          </div>
          <Title
            title={t.lich_hoi_thao}
            dot={'!right-[0.6025rem] !bottom-[0.55rem]'}
            className={'!text-[1.75rem] !font-extrabold !leading-[1.3] !tracking-[-0.035rem] !w-[14.875rem]'} />
        </div>
      </div>
      <div className=" flex flex-col w-screen items-center">
        <div className='overflow-x-auto no-scrollbar w-full'>
          <div className="w-[60.35139rem]">
            <Table
              dataLichHoithaos={dataLichHoithaosClient?.length > 0 ? dataLichHoithaosClient : dataLichHoithaos}
              dataCountries={dataCountries}
              dataLocations={dataLocations}
              isMobile={isMobile} />
          </div>
        </div>

        <div className="mt-[1rem] flex items-end gap-[0.5rem]">
          <div onClick={() => handleClickPagination(1)}><Pagination setCurrentPage={setCurrentPage} className={'bg-primary-60 text-white'} content={1} /></div>
          <div onClick={() => handleClickPagination(2)}><Pagination setCurrentPage={setCurrentPage} content={2} /></div>
          <div onClick={() => handleClickPagination(3)}><Pagination setCurrentPage={setCurrentPage} content={3} /></div>
        </div>

        <div className="mt-[2rem] relative">
          <div className='absolute top-[0.75rem] left-[1.52rem] flex flex-col items-start'>

            <div className=" not-italic font-extrabold leading-[100%]
            text-[3.19606rem] tracking-[-0.15981rem]
          bg-gradient-to-r text_gradient bg-clip-text  from-[#2E6BC6] from-[9.83%]  via-[#2E6BC6] via-[9.83%]  to-[#29A4EA] to-[86.69%] 
          ">
              2000
            </div>
            <div className="not-italic font-extrabold leading-[130%]
            text-[0.74425rem] tracking-[-0.01488rem]
                      bg-gradient-to-r text_gradient bg-clip-text  from-[#2E6BC6] from-[9.83%]  via-[#2E6BC6] via-[9.83%]  to-[#29A4EA] to-[86.69%] 
            ">
              TRƯỜNG HỌC LIÊN KẾT
            </div>
            <div className="absolute -top-[0.625rem] -right-5 not-italic font-extrabold leading-[130%]
            text-[2.08888rem] tracking-[-0.10444rem]
             bg-gradient-to-r text_gradient bg-clip-text  from-[#2E6BC6] from-[9.83%]  via-[#2E6BC6] via-[9.83%]  to-[#29A4EA] to-[86.69%] ">
              +
            </div>
          </div>

          <Image loading='lazy' alt="ảnh map tìm đường mobi" src={'/images/homepage/map-timduong-mobi.png'} width={375} height={370} className="w-[23.4375rem] h-[23.14813rem]" />
          <div onClick={togglePopup} className='cursor-pointer'>
            <Image loading='lazy' className=" absolute bottom-[1.1rem] right-[1rem] w-[17.5rem] h-[4.5rem]" alt="ảnh button tìm đường mobile" src={'/images/homepage/button-timduong-mobi.png'} width={350} height={105} />
            <Image loading='lazy' className="kinh-loop2 absolute bottom-[0.94rem] right-[-2.94rem] w-[2.46225rem] h-[2.61319rem]" alt="ảnh kính loop" src={'/images/homepage/search-timduong.png'} width={40} height={44} />
            <div className='absolute z-50 bottom-[2.1rem] right-[6.8rem] text-white text-center text-[0.75rem] not-italic font-semibold leading-[150%] tracking-[-0.0075rem] uppercase'>
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




