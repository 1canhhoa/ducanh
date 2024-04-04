'use client'

import Image from 'next/image'
import Link from 'next/link'

import CradDrop from './CardDrop'
import PhanTrang from './PhanTrang'

export default function ChonNganh({text}) {
  return (
    <section className='w-full mt-[5rem]'>
      <div className='w-full xmd:px-[0.75rem] px-[11.62rem] flex flex-col justify-center items-start'>
        <h1 className='title xmd:mb32 relative w-fit mb-[2.05rem] xmd:mb-[1rem] xmd:flex xmd:items-end'>
          {text.information.title_6.title}
          <div className='size-[0.625rem] bg-secondary-40 lg:absolute bottom-[0.625rem] right-[-1.125rem]'></div>
        </h1>
        <div className='flex w-full justify-between items-center'>
          <div className='flex flex-col items-start w-[38.375rem] xmd:w-[21.9375rem]'>
            <span className='lg:w-[38.375rem] text-[1.125rem] font-medium leading-[1.7] text-primary-50'>
              {text.information.title_6.text1}
            </span>
            <span className='w-[38.375rem] xmd:w-[15rem] text-[1.125rem] font-medium leading-[1.7] text-primary-50'>
              {text.information.title_6.text2}
            </span>
            <Image
              className='lg:hidden'
              alt='chọn ngành'
              src={'/images/thongtinduhoc/bannerChonnganh.jpg'}
              width={377.662}
              height={226.136}
            />
            <span className='text-[0.875rem] xmd:body14 mt-[1.5rem] mb-[0.5rem] font-bold uppercase leading-[1.7] text-greyscaletext-30'>
              {text.information.title_6.reference}
            </span>
            <ul className='flex space-y-[1.5rem] xmd:w-full xmd:body14 flex-col items-start text-greyscaletext-60 text-[0.875rem] font-semibold leading-[1.7]'>
              <li className='xmd:w-full'>
                {text.information.title_6.reference_text1}
                <Link
                  className='text-primary-30 xmd:w-[21.93rem] text-wrap text-[0.875rem] font-semibold underline'
                  href={
                    'www.adelaide.edu.au/publications/ua/media/60/get-a-great-future.pdf'
                  }
                >
                  <span className='xmd:w-[21.93rem]'>Link tham khảo</span>
                </Link>
              </li>

              <li>{text.information.title_6.reference_text2}</li>
            </ul>
          </div>
          <Image
            className='xmd:hidden'
            alt='chọn ngành'
            src={'/images/thongtinduhoc/bannerChonnganh.jpg'}
            width={491}
            height={294}
          />
        </div>
      </div>
      <div className='w-full pt-[4.875rem] xmd:px-[0.75rem] px-[11.5625rem] pb-[6.25rem] bg-white flex flex-col items-center'>
        <div className='flex flex-col w-full items-start'>
          <h2 className='desktop32 text-primary-50 flex mb-[1.5rem]'>
            <Image
              className='size-[0.75rem] mr-[0.5rem] mt-[1rem]'
              alt='icon'
              src={'/images/hoptac/dot.png'}
              width={12}
              height={12}
            />
            {text.information.h2_choose.title}
          </h2>
          <div className='flex flex-col space-y-[1rem]'>
            <span className='text-[1rem] font-semibold leading-[1.7] text-primary-50'>
              {text.information.h2_choose.text1}
            </span>
            <div className='flex xmd:flex-col lg:space-x-[1rem] xmd:space-y-[0.62rem]'>
              <div className='flex justify-start items-center space-x-[1.0625rem] xmd:space-x-[0.62rem]'>
                <Image
                  className='max-md:size-[1.25rem]'
                  alt='check'
                  src={'/images/thongtinduhoc/check.svg'}
                  width={20}
                  height={20}
                />
                <span className='body14 xmd:flex-1 font-normal max-md:text-[0.875rem] max-md:leading-[1.7] text-greyscaletext-60 max-md:text-greyscaletext-60'>
                  {text.information.h2_choose.text2_check}
                </span>
              </div>
              <div className='flex justify-start items-center space-x-[1.0625rem] xmd:space-x-[0.62rem]'>
                <Image
                  className='max-md:size-[1.25rem]'
                  alt='check'
                  src={'/images/thongtinduhoc/check.svg'}
                  width={20}
                  height={20}
                />
                <span className='body14 font-normal max-md:text-[0.875rem] max-md:leading-[1.7] text-greyscaletext-60 max-md:text-greyscaletext-60'>
                  {text.information.h2_choose.text3_check}
                </span>
              </div>
              <div className='flex justify-start items-center space-x-[1.0625rem] xmd:space-x-[0.62rem]'>
                <Image
                  className='max-md:size-[1.25rem]'
                  alt='check'
                  src={'/images/thongtinduhoc/check.svg'}
                  width={20}
                  height={20}
                />
                <span className='body14 font-normal max-md:text-[0.875rem] max-md:leading-[1.7] text-greyscaletext-60 max-md:text-greyscaletext-60'>
                  {text.information.h2_choose.text4_check}
                </span>
              </div>
              <div className='flex justify-start items-center space-x-[1.0625rem] xmd:space-x-[0.62rem]'>
                <Image
                  className='max-md:size-[1.25rem]'
                  alt='check'
                  src={'/images/thongtinduhoc/check.svg'}
                  width={20}
                  height={20}
                />
                <span className='body14 xmd:flex-1 font-normal max-md:text-[0.875rem] max-md:leading-[1.7] text-greyscaletext-60 max-md:text-greyscaletext-60'>
                  {text.information.h2_choose.text5_check}
                </span>
              </div>
            </div>
          </div>
          <div className='lg:h-[78.125rem] xmd:space-y-[0.75rem] mt-[3rem] xmd:w-full w-[76.875rem] flex flex-wrap justify-start'>
            <div className='xmd:py-[2rem] xmd:pr-[1.9375rem] h-[9.625rem] xmd:pl-[1.875rem] lg:h-[18.125rem] lg:w-[37rem] lg:mr-[1.3rem] space-x-[1.69rem] xmd:space-x-[0.75rem] flex justify-center items-center rounded-[0.75rem] border-[1px] border-solid border-[rgba(52,104,205,0.40)] bg-white'>
              <span className='bg-gradient-to-b text-transparent leading-normal bg-clip-text font-extrabold xmd:text-[6.36363rem] text-[10rem] from-[#ED4343] to-[rgba(237,67,67,0.12)]'>
                13
              </span>
              <span className='sub24 xmd:mb18 font-bold text-primary-50 lg:w-[14.2rem]'>
                {text.information.h2_choose.popular_industry}
              </span>
            </div>
            {new Array(13).fill(0).map((e, index) => (
              <div
                key={index}
                className='lg:relative xmd:h-[10.25rem] xmd:w-[21.9375rem] xmd:rounded-[0.625rem] lg:mr-[1.42rem] flex justify-start lg:items-end h-[18.125rem] w-[17.75rem] rounded-[0.75rem] border-[1px] border-solid border-greyscaletext-5 xmd:border-[rgba(19,43,125,0.20)]'
              >
                <Image
                  className='lg:absolute top-0 left-0 size-full xmd:w-[9.25rem] xmd:h-[10.25rem] xmd:rounded-[0.625rem] rounded-[0.75rem]'
                  alt='các ngành'
                  src={'/images/thongtinduhoc/layer.jpg'}
                  width={284}
                  height={290}
                />
                <div className='flex flex-col items-start justify-center xmd:w-full xmd:h-[8.125rem] xmd:ml-[0.875rem]'>
                  <span className='lg:relative xmd:body12 xmd:w-[11.0625rem] z-10 lg:h-[1.5rem] lg:mb-[1.75rem] lg:ml-[1.25rem] w-[18.75rem] lg:px-[1.25rem] flex justify-start items-center text-[1rem] text-white xmd:text-primary-50 font-extrabold xmd:font-bold uppercase'>
                    Công nghệ thông tin
                  </span>
                  <span className='lg:hidden body12 text-greyscaletext-80 font-normal w-[11.0625rem]'>
                    truyền thông, truyền thông đa phương tiện, truyền thông số,
                    báo chí, báo giấy, báo mạng, in ấn, quản trị truyền thông,
                    truyền hình & phim ảnh…
                  </span>
                </div>
              </div>
            ))}
            <PhanTrang className={'lg:hidden'} />
          </div>
        </div>
      </div>
      <div className='w-full pt-[5rem] xmd:px-[0.75rem] px-[11.62rem] flex flex-col items-start lg:space-y-[2.25rem]'>
        <h2 className='desktop32 text-primary-50 flex mb-[1.5rem]'>
          <Image
            className='size-[0.75rem] mr-[0.5rem] mt-[1rem]'
            alt='icon'
            src={'/images/hoptac/dot.png'}
            width={12}
            height={12}
          />
          {text.information.h2_program}
        </h2>
        <div className='w-full flex lg:space-x-[3.75rem]'>
          {/* <div className='grid grid-cols-2 gap-x-[3.75rem] gap-y-[1rem] items-start  w-full'>
            {new Array(16).fill(0).map((e, index) => (
              <CradDrop
                key={index}
                index={index}
                width={36.5625}
              />
            ))}
          </div> */}
          <div className='flex flex-col items-start space-y-[0.75rem] xmd:w-[21.9375rem] w-[36.5625rem]'>
            {new Array(8).fill(0).map((e, index) => (
              <CradDrop
                key={index}
                index={index}
              />
            ))}
          </div>
          <div className='xmd:hidden flex flex-col items-start space-y-[0.75rem] w-[36.5625rem]'>
            {new Array(8).fill(0).map((e, index) => (
              <CradDrop
                key={index}
                index={index}
                column={8}
              />
            ))}
          </div>
        </div>
        <PhanTrang className={'lg:hidden'} />
      </div>
    </section>
  )
}
