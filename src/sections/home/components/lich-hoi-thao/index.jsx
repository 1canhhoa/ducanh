"use client"
import Title from '@/components/Title'
import NavigationCustom from '@/components/navigationcustom'
import { Button } from '@/components/ui/button'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules'
import { useEffect, useRef, useState } from 'react'
import useSWR from 'swr'
import "swiper/css";
import Image from 'next/image'
import Table from './Table'


const Pagination = ({ className, content }) => {
  return <div className={'border border-[rgba(19,43,125,0.20)] text-primary-50 p-2.5 rounded-lg ' + (className ? className : '')}>
    <div className=" size-[1.125rem] text-center text-sm font-bold leading-[120%] uppercase">
      {content}
    </div>
  </div>
}
const LichHoiThao = ({ t, isMobile, dataCountries, dataLocations, dataLichHoithaos }) => {

const [currentPage,setCurrentPage] = useState(1)
  const [loadingLichHoithao, setLoadingLichHoithao] = useState(false)
  const [dataLichHoithaosClient, setDataLichHoithaosClient] = useState(null);
  const [apiUrl, setApiUrl] = useState(null);

  
  const swiperRef = useRef(null)
  const handleNextSlide = () => {
    setApiUrl('click')
    setCurrentPage(prev=>prev+1)
    swiperRef.current?.slideNext()
  }
  const handlePrevSlide = () => {
    
    if(currentPage>1){
      setApiUrl('click')
      setCurrentPage(prev=>prev-1)
    }
    swiperRef.current?.slidePrev()
  }

  const fetcher = url => fetch(url).then(r => r.json())
  const { data, error, isLoading } = useSWR(
    apiUrl ? `${process.env.NEXT_PUBLIC_API}/wp-json/okhub/v1/events?page=${currentPage}&per_page=10`:null,
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

  return (
    <div className='flex flex-col w-fit items-start xmd:space-y-[1rem] space-y-[1.875rem] '>
      <div className="flex flex-col items-start space-y-[3rem] xmd:px-[0.625rem] ">
        <div className="flex flex-col items-start space-y-[0.5rem]">
          <div className="text-greyscaletext-40 text-center xmd:text-[0.875rem] text-[1rem] not-italic font-bold leading-[normal] uppercase">
            theo dõi ngay
          </div>
          <Title
            title={t.lich_hoi_thao}
            dot={'xmd:!right-[0.6025rem] xmd:!bottom-[0.55rem]'}
            className={'xmd:!text-[1.75rem] xmd:!font-extrabold xmd:!leading-[1.3] xmd:!tracking-[-0.035rem] xmd:!w-[14.875rem]'} />
        </div>
        <div className="xmd:hidden flex items-start space-x-[1.5rem] relative">
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
            <Button >Chọn quốc gia bạn quan tâm</Button>
            <Button >Địa điểm tổ chức</Button>
          </div> 
        </div>
      </div>
      <div className=" flex xmd:flex-col w-screen md:w-fit xmd:items-center md:space-x-[1.375rem]">
        <div className='xmd:overflow-x-auto no-scrollbar xmd:w-full w-max'>
          <Swiper
            ref={swiperRef}
            spaceBetween={20}
            loop={'true'}
            modules={[Navigation]}
            className='w-[60.35139rem] !pr-[0.5rem]'
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper
            }}
          >
            <SwiperSlide className=' xmd:pr-[1rem]'>
              <Table
                dataLichHoithaos={dataLichHoithaosClient?.length > 0 ? dataLichHoithaosClient :dataLichHoithaos }
                dataCountries={dataCountries}
                dataLocations={dataLocations}
                isMobile={isMobile} />
            </SwiperSlide>
            {/* <SwiperSlide className=' xmd:pr-[1rem]'>
              <Table isMobile={isMobile} />
            </SwiperSlide> */}
          </Swiper>
        </div>

        <div className="mt-[1rem] md:hidden flex items-end gap-[0.5rem]">
          <Pagination className={'bg-primary-60 text-white'} content={1} />
          <Pagination content={2} />
          <Pagination content={3} />
        </div>

        <div className="xmd:mt-[2rem] relative">
          <div className='absolute top-[0.75rem] left-[1.52rem] flex flex-col items-start'>

            <div className="  text-[5.54163rem] not-italic font-extrabold leading-[100%] tracking-[-0.27706rem]
            xmd:text-[3.19606rem] ] xmd:tracking-[-0.15981rem]
          bg-gradient-to-r text_gradient bg-clip-text  from-[#2E6BC6] from-[9.83%]  via-[#2E6BC6] via-[9.83%]  to-[#29A4EA] to-[86.69%] 
          ">
              2000
            </div>
            <div className="text-[1.29044rem] not-italic font-extrabold leading-[130%] tracking-[-0.02581rem]
            xmd:text-[0.74425rem] xmd:tracking-[-0.01488rem]
                      bg-gradient-to-r text_gradient bg-clip-text  from-[#2E6BC6] from-[9.83%]  via-[#2E6BC6] via-[9.83%]  to-[#29A4EA] to-[86.69%] 
            ">
              TRƯỜNG HỌC LIÊN KẾT
            </div>
            <div className="absolute xmd:-top-[0.625rem] xmd:-right-5 -top-5 -right-8 text-[3.62181rem] not-italic font-extrabold leading-[130%] tracking-[-0.18106rem] 
            xmd:text-[2.08888rem] xmd:tracking-[-0.10444rem]
             bg-gradient-to-r text_gradient bg-clip-text  from-[#2E6BC6] from-[9.83%]  via-[#2E6BC6] via-[9.83%]  to-[#29A4EA] to-[86.69%] ">
              +
            </div>
          </div>

          <Image loading='lazy' alt="ảnh map tìm đường" src={'/images/homepage/map-timduong.png'} width={480} height={560} className="xmd:hidden w-[29.8125rem] h-[35rem] xmd:w-[23.4375rem] xmd:h-[23.14813rem]" />
          <Image loading='lazy' alt="ảnh map tìm đường mobi" src={'/images/homepage/map-timduong-mobi.png'} width={375} height={370} className="md:hidden w-[29.8125rem] h-[35rem] xmd:w-[23.4375rem] xmd:h-[23.14813rem]" />

          <Image loading='lazy' className="xmd:hidden absolute bottom-[1.94rem] right-[2.94rem] w-[23.0625rem] h-[4.5rem]" alt="ảnh button tìm đường" src={'/images/homepage/button-timduong.png'} width={370} height={75} />
          <Image loading='lazy' className="md:hidden absolute bottom-[1.1rem] right-[1rem] w-[17.5rem] h-[4.5rem]" alt="ảnh button tìm đường mobile" src={'/images/homepage/button-timduong-mobi.png'} width={350} height={105} />
          <Image loading='lazy' className="absolute bottom-[1.94rem] right-[2.94rem] w-[2.46225rem] h-[2.61319rem]" alt="ảnh kính loop" src={'/images/homepage/search-timduong.png'} width={40} height={44} />
          <div className='absolute z-50 xmd:bottom-[2.1rem] xmd:right-[2.8rem] bottom-[2.8rem] left-[4.94rem] text-white text-center text-[0.75rem] not-italic font-semibold leading-[150%] tracking-[-0.0075rem] uppercase'>
            Tìm trường cùng Đức Anh
          </div>
        </div>
      </div>
    </div>
  )
}

export default LichHoiThao
