'use client'

import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {Navigation, Pagination} from 'swiper/modules'
import './style.css'

export default function DanhGia({isMobile, dataAcf}) {
  return (
    <section className='w-full relative h-[39.0625rem]'>
      <div className='lg:overflow-hidden w-full h-[54.625rem] xmd:h-[33.125rem] absolute top-[-6rem] py-[1rem]'>
        <Image
          className='size-full lg:scale-[1.02]'
          alt='du học sinh nói về đức anh'
          src={
            isMobile
              ? '/images/landing/bgdanhgia-mb.png'
              : '/images/landing/bgdanhgia.png'
          }
          width={1600}
          height={874}
        />
      </div>
      <div className='w-full h-full mx-auto relative z-10 lg:top-[7rem] lg:px-[4rem] flex flex-col items-center space-y-[2.5rem]'>
        <h2 className='xmd:px-[1.56rem]  w-[35.1875rem] xmd:w-[20.25rem] xmd:mb32 text-[2.5rem] font-bold leading-[1.2] text-center text-primary-5'>
          Du học sinh nói về Đức Anh Educonnect
        </h2>
        <div className='size-full'>
          <div className='pagination_danhgia space-x-[1.25rem] absolute z-20 flex justify-center items-center left-1/2 !bottom-[4rem]'></div>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={16}
            navigation={{
              prevEl: '.prev_danhgia',
              nextEl: '.next_danhgia',
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            pagination={{el: '.pagination_danhgia'}}
            modules={[Navigation, Pagination]}
            className='mySwiper_danhgia relative h-full w-full xmd:!pl-[0.75rem]'
          >
            {dataAcf?.item_slider?.map((e, index) => (
              <SwiperSlide
                key={index}
                className='!flex justify-center xmd:!w-[19.875rem]'
              >
                <div className='flex flex-col w-[23.375rem] xmd:w-[19.875rem]'>
                  <div className='item relative w-[23.375rem] xmd:w-[19.875rem] h-[18.25rem]'>
                    <div className='shadow-2xl w-[23.375rem] xmd:w-[19.875rem] rounded-t-[1rem] bg-white h-[16.6875rem] px-[2.25rem] xmd:px-[1.25rem] py-[1.56rem] flex flex-col space-y-[1.19rem] '>
                      <div className='flex'>
                        {new Array(5).fill(0).map((e, index) => (
                          <Image
                            key={index}
                            className='size-[1.5rem]'
                            alt='sao'
                            src={'/images/landing/sao.svg'}
                            width={24}
                            height={24}
                          />
                        ))}
                      </div>
                      <p className='h-[10.5rem] w-[18.8125rem] text-greyscaletext-80 text-[1rem] xmd:body16 font-normal leading-[1.6]'>
                        {e?.content}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <div className='size-[4.375rem] rounded-full overflow-hidden'>
                      <Image
                        className='object-cover rounded-[4.375rem]'
                        alt='danh gias'
                        src={e?.avatar_image?.url}
                        width={70}
                        height={70}
                      />
                    </div>
                    <div className='flex flex-col space-y-[0.25rem] ml-[0.75rem]'>
                      <span className='text-greyscaletext-80 text-[1rem] font-bold leading-[1.6]'>
                        {e?.name}
                      </span>
                      <span className='w-[15.5625rem] text-greyscaletext-80 text-[0.875rem] font-normal italic leading-[1.6]'>
                        {e?.hoc_bong}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <button className='xmd:hidden prev_danhgia flex justify-center items-center absolute z-20 top-1/2 -translate-y-full left-0 size-[2.25rem] rounded-[0.42856rem] border-[0.857px] border-solid border-primary-40'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
              >
                <path
                  d='M9.875 3.62503L5.5 8.00003L9.875 12.375'
                  stroke='#3468CD'
                  strokeWidth='1.71429'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
            <button className='xmd:hidden next_danhgia flex justify-center items-center absolute z-20 top-1/2 -translate-y-full right-0 size-[2.25rem] rounded-[0.42856rem] border-[0.857px] border-solid border-primary-40'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
              >
                <path
                  d='M6.125 3.625L10.5 8L6.125 12.375'
                  stroke='#3468CD'
                  strokeWidth='1.71429'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
