'use client'

import Image from 'next/image'

import Title from '@/components/Title'
import CradDrop from './CardDrop'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {useState} from 'react'
import clsx from 'clsx'

export default function Support({text}) {
  const [indexActive, setIndexActive] = useState(1)
  return (
    <section className='w-full lg:space-y-[5rem] pt-[4.05rem] flex flex-col items-center'>
      <div className='w-full xmd:px-[0.75rem] px-[11.675rem] py-[4rem] flex flex-col items-start lg:bg-background-elevation-10'>
        <h1 className='title xmd:mb32 relative w-fit'>
          {text.information.support.title1}
          <p className='size-[0.625rem] bg-secondary-40 absolute bottom-[0.625rem] right-[-1.125rem]'></p>
        </h1>
        <div className='flex flex-col items-start mt-[2.5rem] xmd:mt-[1rem]'>
          <span className='text-[1rem] font-semibold leading-[1.7] text-primary-50'>
            {text.information.support.question}
          </span>
          <div className='flex space-x-[0.75rem] items-center mt-[1rem] xmd:mt-[0.85rem]'>
            <Image
              alt='câu hỏi hỗ trợ su học sinh'
              src={'/images/thongtinduhoc/chamhoi.svg'}
              height={24}
              width={24}
            />
            <span className='flex-1 body14 font-medium text-greyscaletext-50 xmd:text-greyscaletext-60'>
              {text.information.support.question1}
            </span>
          </div>
          <div className='flex space-x-[0.75rem] items-center mt-[1rem]'>
            <Image
              alt='câu hỏi hỗ trợ su học sinh'
              src={'/images/thongtinduhoc/chamhoi.svg'}
              height={24}
              width={24}
            />
            <span className='flex-1 body14 font-medium text-greyscaletext-50 xmd:text-greyscaletext-60'>
              {text.information.support.question2}
            </span>
          </div>
          <div className='flex space-x-[0.75rem] items-center mt-[1rem]'>
            <Image
              alt='câu hỏi hỗ trợ su học sinh'
              src={'/images/thongtinduhoc/chamhoi.svg'}
              height={24}
              width={24}
            />
            <span className='flex-1 body14 font-medium text-greyscaletext-50 xmd:text-greyscaletext-60'>
              {text.information.support.question3}
            </span>
          </div>
        </div>
        <div className='w-full flex xmd:flex-col items-start lg:space-x-[5rem]'>
          <div className='flex justify-center mt-[3.3rem] relative w-[26.375rem] h-[27.125rem] xmd:w-[21.9375rem] xmd:h-[25.375rem] xmd:rounded-[0.375rem] rounded-[0.49825rem]'>
            <Image
              className='absolute size-full top-0 left-0 rounded-[0.49825rem]'
              alt='banner hỗ trợ du học sinh'
              src={'/images/thongtinduhoc/bannerSupport.jpg'}
              height={434}
              width={422}
            />
            <span className='relative z-10 xmd:mb18 text-[1.25rem] mt-[1.7rem] xmd:mt-[1.75rem] xmd:mx-[1.19rem] font-bold leading-[1.5] w-[23.375rem] xmd:w-[19.5625rem] text-white'>
              {text.information.support.text_banner}
            </span>
          </div>
          <div className='flex flex-col items-start space-y-[1rem] xmd:space-y-[0.62rem] mt-[2.5rem] xmd:mt-[1.5rem] xmd:w-full flex-1'>
            {new Array(3).fill(0).map((e, index) => (
              <CradDrop
                key={index}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='xmd:w-full w-[76.6875rem] xmd:flex xmd:flex-col xmd:px-[0.75rem] lg:h-[54.375rem]'>
        <h1 className='title xmd:mb32 relative w-fit xmd:w-[18.25rem]'>
          {text.information.support.title2}
          <p className='size-[0.625rem] bg-secondary-40 absolute bottom-[0.625rem] right-[-1.125rem] xmd:right-[4.875rem]'></p>
        </h1>
        <div className='xmd:relative xmd:w-[22.625rem] xmd:h-[10.5rem] xmd:overflow-hidden mt-[3.75rem] xmd:mt-[1rem]'>
          <div className='xmd:absolute xmd:h-[10.5rem] xmd:overflow-x-auto xmd:overflow-y-hidden lg:flex xmd:flex-col w-full justify-start lg:space-x-[6rem]'>
            <div className='flex lg:flex-col xmd:h-[10.5rem] xmd:space-x-[0.75rem] lg:space-y-[1rem] lg:w-[25.4375rem]'>
              <button
                onClick={() => {
                  if (indexActive == 1) {
                    return
                  }
                  setIndexActive(1)
                }}
                className={clsx(
                  'xmd:h-full duration-300 transition-all py-[1.5rem] px-[2.5rem] xmd:px-[1.12rem] xmd:pt-[1.47rem] xmd:pb-[2.53rem] flex flex-col items-start xmd:space-y-[0.53rem] space-y-[0.25rem] rounded-[0.5rem] border-[1px] border-solid border-[rgba(52,104,205,0.40)] bg-white',
                  indexActive == 1 && 'xmd:bg-primary-50',
                )}
              >
                <div
                  className={clsx(
                    'lg:h-[6.375rem] xmd:flex py-[0.625rem] pr-[1.5625rem] text-center flex items-center justify-center xmd:sub18 sub24 font-bold text-primary-50',
                    indexActive == 1 ? 'xmd:text-white' : 'xmd:text-primary-50',
                  )}
                >
                  <Image
                    className='lg:hidden'
                    alt='hướng dẫn khi lên máy bay'
                    src={'/images/thongtinduhoc/iconbeformaybay.svg'}
                    height={24}
                    width={23}
                  />
                  {text.information.support.before.title}
                </div>
                <span
                  className={clsx(
                    'body14 xmd:body12 text-start font-medium text-greyscaletext-50 xmd:w-[16.5rem]',
                    indexActive == 1
                      ? 'xmd:text-white'
                      : 'xmd:text-greyscaletext-50',
                  )}
                >
                  {text.information.support.before.text}
                </span>
              </button>
              <button
                onClick={() => {
                  if (indexActive == 2) {
                    return
                  }
                  setIndexActive(2)
                }}
                className={clsx(
                  'xmd:h-full duration-300 transition-all py-[1.5rem] px-[2.5rem] xmd:px-[1.12rem] xmd:pt-[1.47rem] xmd:pb-[2.53rem] flex flex-col items-start xmd:space-y-[0.53rem] space-y-[0.25rem] rounded-[0.5rem] border-[1px] border-solid border-[rgba(52,104,205,0.40)] bg-white',
                  indexActive == 2 && 'xmd:bg-primary-50',
                )}
              >
                <div
                  className={clsx(
                    'lg:h-[6.375rem] xmd:flex py-[0.625rem] pr-[1.5625rem] text-center flex items-center justify-center xmd:sub18 sub24 font-bold text-primary-50',
                    indexActive == 2 ? 'xmd:text-white' : 'xmd:text-primary-50',
                  )}
                >
                  <Image
                    className='lg:hidden'
                    alt='hướng dẫn khi lên máy bay'
                    src={'/images/thongtinduhoc/iconbeformaybay.svg'}
                    height={24}
                    width={23}
                  />
                  {text.information.support.flying.title}
                </div>
                <span
                  className={clsx(
                    'body14 xmd:body12 text-start font-medium text-greyscaletext-50 xmd:w-[16.5rem]',
                    indexActive == 2
                      ? 'xmd:text-white'
                      : 'xmd:text-greyscaletext-50',
                  )}
                >
                  {text.information.support.flying.text}
                </span>
              </button>
              <button
                onClick={() => {
                  if (indexActive == 3) {
                    return
                  }
                  setIndexActive(3)
                }}
                className={clsx(
                  'xmd:h-full duration-300 transition-all py-[1.5rem] px-[2.5rem] xmd:px-[1.12rem] xmd:pt-[1.47rem] xmd:pb-[2.53rem] flex flex-col items-start xmd:space-y-[0.53rem] space-y-[0.25rem] rounded-[0.5rem] border-[1px] border-solid border-[rgba(52,104,205,0.40)] bg-white',
                  indexActive == 3 && 'xmd:bg-primary-50',
                )}
              >
                <div
                  className={clsx(
                    'lg:h-[6.375rem] xmd:flex py-[0.625rem] pr-[1.5625rem] text-center flex items-center justify-center xmd:sub18 sub24 font-bold text-primary-50',
                    indexActive == 3 ? 'xmd:text-white' : 'xmd:text-primary-50',
                  )}
                >
                  <Image
                    className='lg:hidden'
                    alt='hướng dẫn khi lên máy bay'
                    src={'/images/thongtinduhoc/iconbeformaybay.svg'}
                    height={24}
                    width={23}
                  />
                  {text.information.support.after.title}
                </div>
                <span
                  className={clsx(
                    'body14 xmd:body12 text-start font-medium text-greyscaletext-50 xmd:w-[16.5rem]',
                    indexActive == 3
                      ? 'xmd:text-white'
                      : 'xmd:text-greyscaletext-50',
                  )}
                >
                  {text.information.support.after.text}
                </span>
              </button>
            </div>
          </div>
        </div>
        <Accordion
          className='flex-1'
          type='single'
          collapsible
        >
          <AccordionItem value='item-1'>
            <AccordionTrigger className='xmd:text-primary-50 xmd:h6'>
              Giấy tờ
            </AccordionTrigger>
            <AccordionContent>
              <ul className='flex flex-col'>
                <li className='body font-normal text-greyscaletext-40'>
                  Tùy thân: CMT, hộ chiếu, visa, vé máy bay, thông tin nhà ở, số
                  điện thoại liên hệ tại nước bạn và VN, giấy/ thẻ bảo hiểm y
                  tế.
                </li>
                <li className='body font-normal text-greyscaletext-40'>
                  Học tập: bản gốc bằng, học bạ hoặc bảng điểm, chứng chỉ tiếng
                  Anh, thư giới thiệu, bằng khen, cup các giải thưởng… và: thư
                  mời học, Ecoe- I.20- CAS…;
                </li>
                <li className='body font-normal text-greyscaletext-40'>
                  Y tế: giấy tiêm chủng, xác nhận nhóm máu, bệnh án nếu có…
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger className='xmd:text-primary-50 xmd:h6'>
              Giấy tờ
            </AccordionTrigger>
            <AccordionContent>
              <ul className='flex flex-col'>
                <li className='body font-normal text-greyscaletext-40'>
                  Tùy thân: CMT, hộ chiếu, visa, vé máy bay, thông tin nhà ở, số
                  điện thoại liên hệ tại nước bạn và VN, giấy/ thẻ bảo hiểm y
                  tế.
                </li>
                <li className='body font-normal text-greyscaletext-40'>
                  Học tập: bản gốc bằng, học bạ hoặc bảng điểm, chứng chỉ tiếng
                  Anh, thư giới thiệu, bằng khen, cup các giải thưởng… và: thư
                  mời học, Ecoe- I.20- CAS…;
                </li>
                <li className='body font-normal text-greyscaletext-40'>
                  Y tế: giấy tiêm chủng, xác nhận nhóm máu, bệnh án nếu có…
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
