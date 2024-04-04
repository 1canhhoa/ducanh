'use client'

import Image from 'next/image'
import CradDrop from './CardDrop'
import BoxCard from './BoxCard'

export default function HocBong({text}) {
  return (
    <section className='w-full mt-[8.12rem] xmd:mt-[3rem]'>
      <div className='flex flex-col xmd:px-[0.75rem] items-start lg:w-[76.875rem] lg:mx-auto'>
        <div className='h-[27.125rem] w-[76.875rem] xmd:h-[16.45313rem] xmd:w-[21.9375rem] mb-[4.12rem] xmd:mb-[1.5rem]'>
          <Image
            className='rounded-[1.25rem] size-full xmd:hidden'
            alt='Học bổng'
            src={'/images/thongtinduhoc/bannerHocbong.jpg'}
            width={1230}
            height={434}
          />
          <Image
            className='rounded-[0.75rem size-full lg:hidden'
            alt='Học bổng'
            src={'/images/thongtinduhoc/bannerHocbongmb.jpg'}
            width={1230}
            height={434}
          />
        </div>

        <h1 className='title mb32 relative w-fit mb-[1.5rem]'>
          {text.information.title_4}
          <div className='size-[0.625rem] bg-secondary-40 absolute bottom-[0.625rem] right-[-1.125rem]'></div>
        </h1>
        <p className='w-[35.375rem] xmd:w-[21.9375rem] body16 text-greyscaletext-50'>
          {text.information.text_title_4}
        </p>

        <div className='flex xmd:flex-col space-y-[0.75rem] justify-start lg:space-x-[6.87rem]'>
          <div className='flex flex-col items-start space-y-[1rem] xmd:space-y-[0.75rem] mt-[2.5rem] xmd:mt-[0.75rem] xmd:w-[21.9375rem] w-[35.3125rem]'>
            {new Array(5).fill(0).map((e, index) => (
              <CradDrop
                key={index}
                index={index}
              />
            ))}
          </div>
          <div className='lg:w-[34.6155rem] h-[29.375rem] xmd:h-[24.0625rem] xmd:w-[21.4375rem] lg:translate-y-[-3.06rem]'>
            <Image
              className='rounded-[1.25rem] size-full'
              alt='Học bổng'
              src={'/images/thongtinduhoc/bannerHocbong2.jpg'}
              width={553.848}
              height={548.128}
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:space-y-[5rem] space-y-[1.5rem]'>
        <div className='flex flex-col items-start w-full xmd:px-[0.75rem] xmd:py-[2rem] px-[11.625rem] py-[3.75rem] space-y-[1.5rem] bg-background-elevation-10'>
          <span className='lg:w-[52.3125rem] xmd:sub20 text-[1.5rem] font-bold leading-[1.5] text-primary-50'>
            {text.information.types_scholarships}
          </span>
          <div className='flex xmd:flex-col items-start xmd:space-y-[0.75rem] lg:space-x-[1.5rem] w-full'>
            {new Array(3).fill(0).map((e, index) => (
              <CradDrop
                key={index}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className='flex flex-col items-start space-y-[1.5rem] w-full xmd:px-[0.75rem] px-[11.625rem]'>
          <h2 className='desktop32 xmd:mb20 font-bold text-primary-50 flex items-center'>
            <Image
              className='size-[0.75rem] mr-[0.5rem] lg:mt-[1rem]'
              alt='icon'
              src={'/images/hoptac/dot.png'}
              width={12}
              height={12}
            />
            {text.information.h2_criteria_scholarship.title}
          </h2>
          <div className='flex xmd:flex-col lg:space-x-[8.12rem] xmd:space-y-[1.5rem] items-start w-full'>
            <div className='flex flex-col items-start space-y-[1rem]'>
              <p className='lg:w-[35rem] xmd:body16 text-[1rem] font-medium leading-[1.5625rem] text-greyscaletext-50'>
                {text.information.h2_criteria_scholarship.text_1}
              </p>
              <p className='lg:w-[35rem] xmd:body16 text-[1rem] font-medium leading-[1.5625rem] text-greyscaletext-50'>
                {text.information.h2_criteria_scholarship.text_2}
              </p>
            </div>
            <div className='flex flex-col items-start space-y-[1rem] w-full'>
              {new Array(3).fill(0).map((e, index) => (
                <CradDrop
                  key={index}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col items-start space-y-[1.5rem] w-full lg:px-[11.625rem] px-[0.75rem]'>
          <h2 className='desktop32 xmd:mb20 font-bold text-primary-50 flex items-center'>
            <Image
              className='size-[0.75rem] mr-[0.5rem] lg:mt-[1rem]'
              alt='icon'
              src={'/images/hoptac/dot.png'}
              width={12}
              height={12}
            />
            {text.information.h2_reference}
          </h2>
          <div className='flex xmd:flex-col xmd:space-y-[1.5rem] lg:space-x-[1.5rem] items-start w-full'>
            {new Array(4).fill(0).map((e, index) => (
              <BoxCard key={index}></BoxCard>
            ))}
          </div>
        </div>
        <div className='xmd:px-[0.75rem] px-[11.625rem] w-full flex flex-col justify-start items-start'>
          <div className='relative w-full h-[25.8125rem] xmd:h-[45.25rem] xmd:pt-[1.5rem] xmd:pl-[1rem] pt-[2.95rem] pl-[2.45rem]'>
            <Image
              className='rounded-[0.75rem] absolute top-0 left-0 size-full xmd:hidden'
              alt='banner hồ sơ xin học bổng'
              src={'/images/thongtinduhoc/bannerHosoxinHb.jpg'}
              width={1230}
              height={413}
            />
            <Image
              className='rounded-[0.75rem] absolute top-0 left-0 size-full lg:hidden'
              alt='banner hồ sơ xin học bổng'
              src={'/images/thongtinduhoc/bannerHosoxinHbmb.jpg'}
              width={351}
              height={724}
            />
            <div className='flex flex-col items-start relative z-10 space-y-[1.5rem]'>
              <h2 className='desktop32 text-white flex'>
                <Image
                  className='size-[0.75rem] mr-[0.5rem] mt-[1rem]'
                  alt='icon'
                  src={'/images/hoptac/dot.png'}
                  width={12}
                  height={12}
                />
                {text.information.h2_file.title}
              </h2>
              <ul className='flex flex-col items-start'>
                <li className='body16 text-white'>
                  {text.information.h2_file.text1}
                </li>
                <li className='body16 text-white'>
                  {text.information.h2_file.text2}
                </li>
                <li className='body16 text-white'>
                  {text.information.h2_file.text3}
                </li>
                <li className='body16 text-white'>
                  {text.information.h2_file.text4}
                </li>
                <li className='body16 text-white'>
                  {text.information.h2_file.text5}
                </li>
              </ul>
              <div className='flex flex-col items-start'>
                <span className='text-primary-10 body16'>
                  {text.information.h2_file.title_sub}
                </span>
                <ul className='flex flex-col items-start'>
                  <li className='body16 text-white'>
                    {text.information.h2_file.text_sub1}
                  </li>
                  <li className='body16 text-white'>
                    {text.information.h2_file.text_sub2}
                  </li>
                  <li className='body16 text-white'>
                    {text.information.h2_file.text_sub3}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='mt-[3.75rem] xmd:mt-[1.5rem] flex flex-col space-y-[1.3rem]'>
            <h2 className='desktop32 text-primary-50 flex'>
              <Image
                className='size-[0.75rem] mr-[0.5rem] mt-[1rem]'
                alt='icon'
                src={'/images/hoptac/dot.png'}
                width={12}
                height={12}
              />
              {text.information.h2_note.title}
            </h2>
            <p className='body14 lg:w-[37.625rem] text-greyscaletext-80'>
              {text.information.h2_note.text1}
            </p>
          </div>
          <div className='mt-[4rem] xmd:w-full xmd:mt-[2rem] flex flex-col items-start space-y-[2.25rem] xmd:space-y-[1.5rem]'>
            <h2 className='sub20 text-primary-50 flex'>
              <Image
                className='size-[0.75rem] mr-[0.5rem] mt-[1rem]'
                alt='icon'
                src={'/images/hoptac/dot.png'}
                width={12}
                height={12}
              />
              {text.information.h2_reference_countries}
            </h2>
            <div className='flex flex-wrap'>
              {new Array(12).fill(0).map((e, index) => (
                <div
                  key={index}
                  className='w-[24.3125rem] xmd:w-full mt-[1.5rem] mr-[1rem] xmd:mr-0 wrap_hocbong pl-[1.5rem] flex justify-start items-center h-[3rem] relative rounded-[0.25rem]'
                >
                  <span className='text-[0.875rem] relative z-10 font-extrabold leading-[1.5] text-white uppercase'>
                    Australia
                  </span>
                  <Image
                    className='absolute top-0 left-0 size-full'
                    alt='hoc phi cac nuoc'
                    src={'/images/thongtinduhoc/bg-co.jpg'}
                    width={411.807}
                    height={209.807}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
