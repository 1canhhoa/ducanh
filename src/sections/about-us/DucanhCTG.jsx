import React from 'react'
import Image from 'next/image'
import './style.css'
const DucanhCTG = ({ data, t }) => {
  console.log({ sasas: data?.img1 })
  return (
    <div className='w-full ducanh-ctg'>
      <div className='mx-auto xmd:px-[0.75rem]  md:w-[77rem]'>
        <div className='text-primary-50 text-5xl xmd:text-[2rem] font-extrabold xmd:leading-[1.3] leading-[1.2] xmd:tracking-[-0.04rem] tracking-[-0.03rem]'>
          {t?.ducanhCtg}
        </div>

        <div className='xmd:mt-[1rem] mt-[4rem] flex xmd:flex-col xmd:justify-start items-start justify-between flex-1 md:space-x-[4rem]'>
          <div className='first'>
            {/* class active 1 */}
            <div dangerouslySetInnerHTML={{ __html: data?.data[0].editor1 }} />
          </div>
          <Image
            priority
            alt='ảnh'
            src={data?.img1}
            width={600}
            height={330}
            className='w-full xmd:mt-[1.5rem] md:w-[36.4375rem] h-[20.125rem]'
          />
        </div>

        <div className='mt-[4rem] xmd:mt-[1.5rem]'>
          <div dangerouslySetInnerHTML={{ __html: data?.data[1].editor1 }} />
          <div className='xmd:mt-[0.625rem] mt-[1rem] xmd:ml-[0.8rem] ml-[1.1rem] ducanh-ctg1 flex xmd:flex-col items-start md:space-x-[5.75rem]'>
            <div dangerouslySetInnerHTML={{ __html: data?.data[2].editor1 }} />
            <div dangerouslySetInnerHTML={{ __html: data?.data[3].editor1 }} />
          </div>
        </div>
        <div className='relative'>
          <span className="w-[25.8125rem] xmd:text-center xmd:w-[18.125rem] absolute xmd:top-[2.12rem] top-1/2 md:-translate-y-1/2 xmd:left-[2.08rem] left-[4.31rem] text-white text-2xl xmd:text-[1.25rem] not-italic font-bold leading-[150%] xmd:tracking-normal tracking-[-0.015rem]">{data?.title_img2}</span>
          <Image
            priority
            alt='ảnh'
            src={data?.img2}
            width={1230}
            height={360}
            className='xmd:hidden mt-[4rem] md:w-[76.875rem] h-[12.625rem] shrink-0'
          />
          <Image
            priority
            alt='ảnh'
            src={data?.img2_mobi}
            width={1230}
            height={360}
            className='md:hidden mt-[1.5rem] shrink-0'
          />
        </div>

        <div className='ducanh-ctg2'> <div dangerouslySetInnerHTML={{ __html: data?.data[4].editor1 }} /></div>
      </div>
    </div>
  )
}

export default DucanhCTG
