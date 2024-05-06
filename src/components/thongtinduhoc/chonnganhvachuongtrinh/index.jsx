'use client'

import Image from 'next/image'
import Future from '@/layout/future/Future'

export default function ChonnganhVaChuongtrinh({text, dataAcf}) {
  return (
    <section
      id='chon_nganh'
      className='w-full mt-[8rem] xmd:mt-[6rem]'
    >
      <div className='w-full xmd:px-[0.75rem] xlg:px-[5.3rem] px-[11.62rem] flex'>
        <div className='flex flex-col'>
          <h1 className='title xmd:mb32 relative w-fit mb-[3rem] xmd:mb-[1rem] xmd:flex xmd:items-end'>
            {text?.selectIndustry_and_program?.title}
          </h1>
          <div className='flex flex-col items-start lg:w-[38.375rem] xmd:w-[21.9375rem]'>
            <span className='lg:w-[38.375rem] text-[1.125rem] font-medium leading-[1.7] text-primary-50'>
              {dataAcf?.label?.label1}
            </span>
            <span className='w-[38.375rem] xmd:w-[15rem] text-[1.125rem] font-medium leading-[1.7] text-primary-50'>
              {dataAcf?.label?.label2}
            </span>
            <div className='lg:hidden translate-x-[-0.9rem] relative w-[23.60388rem]'>
              <Image
                className='lg:hidden xlg:hidden xmd:block absolute bottom-[-17rem] h-[23.1335rem] w-[23.60388rem]'
                alt='chọn ngành'
                src={dataAcf?.banner_image?.url}
                width={377.662}
                height={226.136}
              />
            </div>
            <div className='lg:hidden h-[17rem]'></div>
            <span className='text-[0.875rem] xmd:body14 mt-[1.5rem] mb-[0.5rem] font-bold uppercase leading-[1.7] text-greyscaletext-30'>
              {text?.selectIndustry_and_program?.reference}
            </span>
            <div
              className='tulamhoso'
              dangerouslySetInnerHTML={{__html: dataAcf?.reference}}
            />
          </div>
        </div>
        <Image
          className='xmd:hidden xlg:w-[40rem]'
          alt='chọn ngành'
          src={dataAcf?.banner_image?.url}
          width={491}
          height={294}
        />
      </div>
      <div className='w-full space-y-[7.5rem] xmd:space-y-[3.63rem] xmd:px-[0.75rem] xlg:px-[5.3rem] px-[11.5625rem] pb-[6.25rem] bg-white flex flex-col items-center'>
        {dataAcf?.branch &&
          dataAcf?.branch?.map((e, index) => (
            <div key={index} className='flex flex-col w-full items-start'>
              <h2 className='desktop32 text-primary-50 flex mb-[1.5rem]'>
                {e?.title}
              </h2>
              <div className='flex flex-col mb-[4.5rem]'>
                <span className='text-[1rem] font-semibold leading-[1.7] text-primary-50 mb-[1rem]'>
                  {index === 0 &&
                    text?.selectIndustry_and_program?.fieldOfStudy}
                  {index === 1 && text?.selectIndustry_and_program?.curriculum}
                </span>
                <div className='grid grid-cols-2 gap-y-[0.63rem] gap-x-[1rem]'>
                  {e?.cac_yeu_to?.map((item, index) => (
                    <div
                      key={index}
                      className='flex justify-start items-center space-x-[1.0625rem] xmd:space-x-[0.62rem]'
                    >
                      <Image
                        className='max-md:size-[1.25rem]'
                        alt='check'
                        src={'/images/thongtinduhoc/check.svg'}
                        width={20}
                        height={20}
                      />
                      <span className='body14 xmd:flex-1 font-normal max-md:text-[0.875rem] max-md:leading-[1.7] text-greyscaletext-60 max-md:text-greyscaletext-60'>
                        {item?.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className='flex flex-col items-start'>
                <h2 className='desktop32 mb-[1.5rem] text_gradient !bg-clip-text bg-gradient-to-b from-[#DB2C34] to-[#FF6A70] xmd:text-[2rem] xmd:font-extrabold font-bold flex items-center'>
                  {e?.nganh_pho_bien?.title}
                </h2>
                {e?.nganh_pho_bien?.list_branch?.map((item, index) => (
                  <div
                    key={index}
                    className='flex flex-col space-y-[0.25rem] mb-[1rem]'
                  >
                    <span className='sub24 text-primary-50 font-bold'>
                      {item.title}
                    </span>
                    <span className='text-[1rem] font-medium leading-[1.7] text-greyscaletext-60'>
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
              {e?.branch_image && (
                <Image
                  className='h-[43.75rem] xmd:h-[15.125rem] w-full'
                  alt='anh chon ngành'
                  src={e?.branch_image?.url}
                  width={1200}
                  height={700}
                />
              )}
            </div>
          ))}
      </div>
      <Future text={text} />
    </section>
  )
}
