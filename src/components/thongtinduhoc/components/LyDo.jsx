'use client'

import Image from 'next/image'
import CradDrop from './CardDrop'

export default function LyDoChonDucAnh({text}) {
  return (
    <>
      <section
        id='ly_do'
        className='flex xmd:flex-col lg:space-x-[7.75rem] mb-[4.38rem] xmd:mb-[1.5rem] w-full xmd:px-0 px-[11.75rem] relative'
      >
        <div className='flex flex-col items-start lg:w-[31.3125rem]'>
          <div className='w-[31.3125rem] xmd:w-[23.4375rem] xmd:px-[0.75rem] flex flex-col'>
            <h1 className='title relative w-fit xmd:mb32'>
              {text.information.title_1}
              <div className='size-[0.625rem] bg-secondary-40 absolute bottom-[0.625rem] right-[-1.125rem]'></div>
            </h1>
            <p className='lg:w-[31.3125rem] mb-[1rem] mt-[1.5rem] body16 xmd:text-[1rem] xlg:text-[1.5rem] font-bold text-greyscaletext-50'>
              {text.information.text_title_1.text1}
            </p>
            <p className='lg:w-[31.3125rem] body16 xmd:text-[1rem] xlg:text-[1.5rem] font-bold text-greyscaletext-50'>
              {text.information.text_title_1.text2}
            </p>
            <div className='flex flex-col items-start space-y-[1rem] mt-[2.5rem]'>
              {new Array(7).fill(0).map((e, index) => (
                <CradDrop
                  key={index}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='xmd:h-[18.0205rem] xmd:w-[23.4375rem] h-[31.1875rem] relative w-[48.125rem] flex xmd:justify-start justify-end items-start'>
          <Image
            className='absolute bottom-0'
            alt='banner1'
            src={'/images/thongtinduhoc/banner1.jpg'}
            width={649}
            height={850}
          />
          <span className='relative w-[17.45rem] xmd:h-[3.19875rem] xmd:w-[9.56506rem] xmd:top-[3rem] xmd:right-[-13.5rem] top-[7rem] right-[-3rem] z-10 text_gradient text-[2.25rem] xmd:text-[1.25rem] font-extrabold leading-[1.3] bg-gradient-to-b from-[#2E6BC6] to-[#29A4EA] !bg-clip-text '>
            {text.information.text_title_1.text_banner}
          </span>
        </div>
      </section>
      <section className='w-full xmd:z-30 z-10 relative lg:h-[85.5rem] lg:bg-[#FAFAFA] xmd:px-0 xlg:px-[11.81rem] pl-[11.81rem] lg:pt-[6.25rem]'>
        <div className='flex xmd:w-[23.4375rem] xlg:w-full xmd:px-[0.75rem] xmd:flex-col xmd:space-y-[1.5rem] h-full w-[31.125rem] flex-col items-start space-y-[2.25rem]'>
          <h1 className='text_gradient text-[1.875rem] w-full font-extrabold leading-[1.5] bg-gradient-to-b from-[#2E6BC6] to-[#29A4EA] !bg-clip-text'>
            {text.information.title_1_h2}
          </h1>
          <div className='flex flex-col items-start h-full space-y-[2.5rem]'>
            <div className='flex flex-col space-y-[1rem]'>
              <span className='text-greyscaletext-50 body16 text-[1rem] xmd:text-[1rem] xlg:text-[1.5rem] font-bold'>
                {text.information.text_tl1_h2.text1}
              </span>
              <span className='text-greyscaletext-50 body16 text-[1rem] xmd:text-[1rem] xlg:text-[1.5rem] font-medium'>
                {text.information.text_tl1_h2.text2}
              </span>
            </div>
            <Image
              className='lg:absolute xmd:h-[21.68888rem] xmd:w-[22.15869rem] right-[9rem]'
              alt='banner1'
              src={'/images/thongtinduhoc/banner2.png'}
              width={626}
              height={850}
            />
            <div className='flex flex-col space-y-[1rem] w-full h-full'>
              {new Array(7).fill(0).map((e, index) => (
                <CradDrop
                  key={index}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className='relative z-20 xmd:mt-[8.5rem] xlg:mt-[25rem] xmd:w-[23.4375rem] xmd:h-[16.5rem] h-[45.15975rem] bg-[#FAFAFA] w-full left-0'>
        <Image
          className='absolute xmd:hidden xmd:w-[41.10925rem] xmd:h-[24.64331rem] bottom-0 left-0 w-full'
          alt='banner'
          src={'/images/thongtinduhoc/quotes.png'}
          width={1842.591}
          height={999.277}
        />
        <Image
          className='absolute xlg:hidden xmd:block lg:hidden w-[42.32119rem] h-[27.92188rem] bottom-0 left-0'
          alt='banner'
          src={'/images/thongtinduhoc/quotesmb.png'}
          width={677.139}
          height={446.75}
        />
        <div className='flex relative mt-[10rem] xmd:mt-[2rem] z-10 flex-col justify-center items-center'>
          <Image
            className='xmd:h-[1.5625rem] xmd:w-[2.125rem]'
            alt='icon'
            src={'/images/thongtinduhoc/ngoackep.svg'}
            width={60}
            height={42.857}
          />
          <h3 className='w-[45.8125rem] xmd:w-[20.375rem] xmd:text-[1rem] text-center text-[1.75rem] font-bold leading-[1.5] text-white'>
            {text.information.maxim}
          </h3>
        </div>
      </div>
    </>
  )
}
