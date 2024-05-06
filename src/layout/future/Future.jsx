import Image from 'next/image'
import React from 'react'

export default function Future({ text }) {
  return (
    <section
      id='lien_he'
      className='w-full xmd:mt-[1.19rem]'
    >
      <div className='w-full relative flex justify-center items-center xmd:px-[0.75rem] xlg:px-[5.3rem] px-[11.5625rem] pt-[3.62rem] pb-[5.62rem] h-[34.25rem]'>
        <Image
          className='xmd:hidden xlg:w-full w-[76.875rem] h-[25rem]'
          alt='ảnh liên hệ tư vấn'
          src={'/images/thongtinduhoc/lienhe.jpg'}
          height={400}
          width={1230}
        />
        <Image
          className='hidden xmd:block w-[21.9375rem] h-[33.625rem]'
          alt='ảnh liên hệ tư vấn'
          src={'/images/thongtinduhoc/lienhemb.jpg'}
          height={351}
          width={538}
        />
        <div className='flex flex-col absolute xmd:w-[17.80356rem] w-[27.85rem] left-[17.5625rem] xmd:left-[2.71rem] xmd:top-[19.13rem] top-[7.43rem]'>
          <span className='text-[1rem] xmd:text-[0.63925rem] font-extrabold leading-[1.5] text-center text-white uppercase'>
            {text?.lienHe?.title}
          </span>
          <span className='text-[3rem] xmd:text-[1.91781rem] font-extrabold leading-[1.5] text-center text-white uppercase'>
            {text?.lienHe?.future}
          </span>
        </div>
        <div className='absolute xmd:w-[19.4375rem] xmd:left-[2rem] xmd:top-[1.25rem] right-[19.46rem] xmd:space-y-0 space-y-[0.75rem] z-10 xmd:p-[1.25rem] p-[1.5rem] flex flex-col items-start justify-center rounded-[0.5rem] bg-white'>
          <h5 className='sub24 xmd:sub18 text-primary-50 font-semibold xmd:mb-[0.25rem]'>
            {text?.lienHe?.box?.title}
          </h5>
          <span className='xmd:w-auto w-[21.6875rem] body16 xmd:body14 font-normal text-greyscaletext-70'>
            {text?.lienHe?.box?.description}
          </span>
          <button className='w-full xmd:mt-[1.25rem] h-[3rem] py-[0.6875rem] pl-[1.875rem] pr-[1.25rem] rounded-[0.625rem] bg-primary-50 flex items-center'>
            <span className='body14 font-semibold text-start text-white flex-1'>
              {text?.lienHe?.box?.label}
            </span>
            <div className='p-[0.22656rem] flex justify-center items-center rounded-[2.83206rem] bg-primary-30'>
              <Image
                alt='btn Icon liên hệ'
                src={'/images/thongtinduhoc/rightbtn.svg'}
                height={21.75}
                width={21.75}
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
