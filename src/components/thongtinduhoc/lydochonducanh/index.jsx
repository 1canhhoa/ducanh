'use client'

import Image from 'next/image'

export default function LyDoChonDucAnh({text, dataAcf}) {
  return (
    <>
      <section
        id='ly_do'
        className='flex pt-[8rem] xmd:pt-[6rem] flex-col mb-[9rem] xmd:mb-[1.5rem] w-full xmd:px-0 px-[11.75rem] relative'
      >
        <h1 className='title relative w-fit xmd:mb32 mb-[2.75rem] xmd:px-[0.75rem]'>
          {text?.lydochonducanh?.title}
        </h1>
        <div className='flex xmd:flex-col relative items-start pb-[2.5rem] w-full space-x-[5rem]'>
          <div className='w-[31.3125rem] xmd:w-[23.4375rem] xmd:px-[0.75rem] flex flex-col'>
            <h2 className='xmd:mb-[1rem] text_gradient w-full leading-[1.5] bg-gradient-to-b from-[#DB2C34] to-[#FF6A70] !bg-clip-text font-extrabold text-[2rem] xmd:text-[1.5rem] xmd:leading-[1.3]'>
              {text?.lydochonducanh?.label_yourself?.title}
            </h2>
            <Image
              className='lg:hidden w-[21.9375rem] h-[16.86719rem] object-cover'
              alt='tự làm hồ sơ'
              src={'/images/thongtinduhoc/banner1Lydo.jpg'}
              width={351}
              height={269.875}
            />
            <p className='lg:w-[31.3125rem] xmd:mt-[1rem] mb-[1rem] mt-[1.5rem] body16 xmd:text-[0.875rem] xlg:text-[1.5rem] font-bold text-greyscaletext-50'>
              {text?.lydochonducanh?.label_yourself?.description1}
            </p>
            <p className='lg:w-[31.3125rem] body16 xmd:text-[0.875rem] xlg:text-[1.5rem] font-bold text-greyscaletext-50'>
              {text?.lydochonducanh?.label_yourself?.description2}
            </p>
          </div>
          <Image
            className='xmd:hidden h-[28.8125rem] w-[37.47356rem]'
            alt='tự làm hồ sơ'
            src={'/images/thongtinduhoc/banner1Lydo.jpg'}
            width={649}
            height={850}
          />
        </div>
        <div className='space-y-[1rem] xmd:px-[0.75rem]'>
          {dataAcf?.tu_lam_ho_so?.map((e, index) => (
            <div
              key={index}
              className='flex flex-col items-start space-y-[0.5rem]'
            >
              <span className='text-primary-50 sub24 xmd:text-[1.25rem] font-bold'>
                {e?.title}
              </span>
              <div
                className='tulamhoso'
                dangerouslySetInnerHTML={{__html: e?.desciption}}
              />
            </div>
          ))}
        </div>
        <p className='body16 font-bold text-greyscaletext-50 mt-[1.5rem] px-[0.75rem]'>
          {text?.lydochonducanh?.label_yourself?.note}
        </p>
      </section>
      <section className='w-full xmd:z-30 z-10 relative xmd:px-0 px-[11.81rem]'>
        <div className='flex xmd:flex-col space-x-[5rem] mb-[2.5rem]'>
          <div className='flex flex-1 xmd:px-[0.75rem] xmd:flex-col h-full flex-col items-start'>
            <h2 className='text_gradient xmd:mb-[1.5rem] mb-[2rem] text-[1.875rem] w-full font-extrabold leading-[1.5] bg-gradient-to-b from-[#DB2C34] to-[#FF6A70] !bg-clip-text'>
              {text?.lydochonducanh?.label_DAself?.title}
            </h2>
            <Image
              className='lg:hidden w-[20.20469rem] h-[18.09063rem]'
              alt='đức anh làm hồ sơ'
              src={'/images/thongtinduhoc/banner2Lydo.jpg'}
              width={323.275}
              height={289.45}
            />
            <span className='mb-[1rem] xmd:mt-[1rem] text-greyscaletext-50 body16 text-[1rem] xmd:text-[1rem] xlg:text-[1.5rem] font-bold'>
              {text?.lydochonducanh?.label_DAself?.description1}
            </span>
            <span className='text-greyscaletext-50 body16 text-[1rem] xmd:text-[1rem] xlg:text-[1.5rem] font-medium'>
              {text?.lydochonducanh?.label_DAself?.description2}
            </span>
          </div>
          <Image
            className='xmd:hidden w-[30.85388rem] h-[27.62556rem]'
            alt='đức anh làm hồ sơ'
            src={'/images/thongtinduhoc/banner2Lydo.jpg'}
            width={626}
            height={850}
          />
        </div>
        <div className='flex flex-col space-y-[1rem] xmd:px-[0.75rem]'>
          {dataAcf?.duc_anh_lam_ho_so?.map((e, index) => (
            <div
              key={index}
              className='flex flex-col items-start space-y-[0.5rem]'
            >
              <span className='text-primary-50 sub24 font-bold'>
                {e?.title}
              </span>
              <p className='text-[1rem] font-medium leading-[1.7] text-greyscaletext-60'>
                {e?.description}
              </p>
            </div>
          ))}
        </div>
        <p className='body16 font-bold text-greyscaletext-50 mt-[1.5rem] xmd:px-[0.75rem]'>
          {text?.lydochonducanh?.label_DAself?.note}
        </p>
      </section>
      <div className='xmd:hidden relative w-full h-[36.875rem]'>
        <Image
          className='absolute xmd:hidden xmd:w-[41.10925rem] xmd:h-[24.64331rem] top-[-10rem] left-0 w-full'
          alt='banner'
          src={'/images/thongtinduhoc/quotes.png'}
          width={1842.57}
          height={999.259}
        />
        <div className='absolute w-full h-full flex mt-[10rem] xmd:mt-[2rem] z-10 flex-col justify-center items-center'>
          <Image
            className='xmd:h-[1.5625rem] xmd:w-[2.125rem]'
            alt='icon'
            src={'/images/thongtinduhoc/ngoackep.svg'}
            width={60}
            height={42.857}
          />
          <h3 className='w-[45.8125rem] xmd:w-[20.375rem] xmd:text-[1rem] text-center text-[1.75rem] font-bold leading-[1.5] text-white'>
            {text?.information?.maxim}
          </h3>
        </div>
      </div>
    </>
  )
}
