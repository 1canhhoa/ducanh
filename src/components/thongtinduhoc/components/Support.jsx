<<<<<<< HEAD
'use client'

=======
>>>>>>> master
import Image from 'next/image'

import CradDrop from './CardDrop'

<<<<<<< HEAD
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
    <section className='w-full lg:space-y-[5rem] lg:pt-[4.05rem] flex flex-col items-center'>
      <div className='w-full xmd:px-[0.75rem] xlg:px-[5.3rem] px-[11.675rem] py-[4rem] flex flex-col items-start lg:bg-background-elevation-10'>
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
        <div className='w-full flex xmd:flex-col items-start xmd:space-x-0 space-x-[5rem]'>
          <div className='flex justify-center mt-[2.5rem] relative w-[26.375rem] h-[27.125rem] xmd:w-[21.9375rem] xmd:h-[25.375rem] xmd:rounded-[0.375rem] rounded-[0.49825rem]'>
=======
import Huongdan from './Huongdan'
import clsx from 'clsx'
import getData from '@/lib/getData'

export default async function Support({
  text,
  isMobile = false,
  className,
  guide = false,
}) {
  const res = await getData('/wp-json/wp/v2/pages/421')
  const huongdan = await getData('/wp-json/wp/v2/pages/406')
  return (
    <section
      id='ho_tro'
      className={clsx(
        'w-full lg:space-y-[5rem] lg:pt-[4.05rem] flex flex-col items-center',
        className,
      )}
    >
      <div className='w-full py-[4rem] flex flex-col items-start'>
        <h1 className='title xmd:mb32 relative w-fit'>{text?.hotro?.title}</h1>
        <div className='flex flex-col items-start mt-[2.5rem] xmd:mt-[1rem]'>
          <span className='text-[1rem] font-semibold leading-[1.7] text-primary-50'>
            {text?.hotro?.description}
          </span>
          {text?.hotro?.question?.map((e, index) => (
            <div
              key={index}
              className='flex space-x-[0.75rem] items-center mt-[1rem] xmd:mt-[0.85rem]'
            >
              <Image
                alt='câu hỏi hỗ trợ su học sinh'
                src={'/images/thongtinduhoc/chamhoi.svg'}
                height={24}
                width={24}
              />
              <span className='flex-1 body14 font-medium text-greyscaletext-50 xmd:text-greyscaletext-60'>
                {e}
              </span>
            </div>
          ))}
        </div>
        <div className='w-full flex xmd:flex-col items-start xmd:space-x-0 space-x-[5rem]'>
          <div className='lg:sticky lg:top-[16rem] flex justify-center mt-[2.5rem] relative w-[26.375rem] h-[27.125rem] xmd:w-[21.9375rem] xmd:h-[25.375rem] xmd:rounded-[0.375rem] rounded-[0.49825rem]'>
>>>>>>> master
            <Image
              className='absolute size-full top-0 left-0 rounded-[0.49825rem]'
              alt='banner hỗ trợ du học sinh'
              src={'/images/thongtinduhoc/bannerSupport.jpg'}
              height={434}
              width={422}
            />
<<<<<<< HEAD
            <span className='relative z-10 xmd:mb18 text-[1.25rem] mt-[1.7rem] xmd:mt-[1.75rem] xmd:mx-[1.19rem] font-bold leading-[1.5] w-[23.375rem] xmd:w-[19.5625rem] text-white'>
              {text.information.support.text_banner}
            </span>
          </div>
          <div className='flex flex-col items-start space-y-[1rem] xmd:space-y-[0.62rem] mt-[2.5rem] xmd:mt-[1.5rem] xmd:w-full flex-1'>
            {new Array(3).fill(0).map((e, index) => (
              <CradDrop
                key={index}
                index={index}
=======
            <span className='relative z-10 xmd:mb18 text-[1.25rem] mt-[1.7rem] xmd:mt-[1.75rem] xmd:mx-[1.19rem] font-bold leading-[1.5] w-[23.375rem] xmd:w-[19.5625rem] xmd:text-center text-white'>
              {text?.hotro?.title_banner}
            </span>
          </div>
          <div className='flex flex-col items-start space-y-[1rem] xmd:space-y-[0.62rem] mt-[2.5rem] xmd:mt-[1.5rem] xmd:w-full flex-1'>
            {res?.acf?.support?.map((e, index) => (
              <CradDrop
                key={index}
                index={index}
                data={e}
>>>>>>> master
              />
            ))}
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div className='xlg:w-full lg:w-[76.6875rem] xlg:px-[5.3rem] xmd:flex xmd:flex-col xmd:px-[0.75rem] lg:h-[54.375rem]'>
        <p className='title xmd:mb32 relative w-fit xmd:w-[18.25rem]'>
          {text.information.support.title2}
          <span className='size-[0.625rem] bg-secondary-40 lg:absolute bottom-[0.625rem] right-[-1.125rem] '></span>
        </p>
        <div className='flex xmd:flex-col xmd:space-x-0 xmd:mt-0 space-x-[6rem] mt-[3.75rem]'>
          <div className='xmd:relative xmd:mb-[1rem] xmd:w-[22.625rem] xmd:h-[10.5rem] xmd:overflow-hidden xmd:mt-[1rem]'>
            <div className='xmd:absolute xmd:h-[10.5rem] xmd:overflow-x-auto xmd:overflow-y-hidden flex xmd:flex-col w-full justify-start xmd:space-x-0 space-x-[6rem]'>
              <div className='flex xmd:flex-row flex-col xmd:h-[10.5rem] xmd:space-x-[0.75rem] xmd:space-y-0 space-y-[1rem] w-[25.4375rem]'>
                <button
                  onClick={() => {
                    if (indexActive == 1) {
                      return
                    }
                    setIndexActive(1)
                  }}
                  className={clsx(
                    'xmd:h-full duration-300 transition-all py-[1.5rem] px-[2.5rem] xmd:px-[1.12rem] xmd:pt-[1.47rem] xmd:pb-[2.53rem] flex flex-col items-start xmd:space-y-[0.53rem] space-y-[0.25rem] rounded-[0.5rem] border-[1px] border-solid border-[rgba(52,104,205,0.40)] bg-white',
                    indexActive == 1
                      ? 'xmd:bg-primary-50 opacity-100'
                      : 'opacity-[0.4] xmd:opacity-100',
                  )}
                >
                  <div
                    className={clsx(
                      'lg:h-[6.375rem] xmd:flex py-[0.625rem] pr-[1.5625rem] text-center flex items-center justify-center xmd:sub18 sub24 font-bold text-primary-50',
                      indexActive == 1
                        ? 'xmd:text-white'
                        : 'xmd:text-primary-50',
                    )}
                  >
                    <Image
                      className={clsx(
                        'hidden xmd:block brightness-100',
                        indexActive == 1 ? 'invert-0' : 'invert',
                      )}
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
                    indexActive == 2
                      ? 'xmd:bg-primary-50 opacity-100'
                      : 'opacity-[0.4] xmd:opacity-100',
                  )}
                >
                  <div
                    className={clsx(
                      'lg:h-[6.375rem] xmd:flex py-[0.625rem] pr-[1.5625rem] text-center flex items-center justify-center xmd:sub18 sub24 font-bold text-primary-50',
                      indexActive == 2
                        ? 'xmd:text-white'
                        : 'xmd:text-primary-50',
                    )}
                  >
                    <Image
                      className={clsx(
                        'hidden xmd:block brightness-100',
                        indexActive == 2 ? 'invert-0' : 'invert',
                      )}
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
                    indexActive == 3
                      ? 'xmd:bg-primary-50 opacity-100'
                      : 'opacity-[0.4] xmd:opacity-100',
                  )}
                >
                  <div
                    className={clsx(
                      'lg:h-[6.375rem] xmd:flex py-[0.625rem] pr-[1.5625rem] text-center flex items-center justify-center xmd:sub18 sub24 font-bold text-primary-50',
                      indexActive == 3
                        ? 'xmd:text-white'
                        : 'xmd:text-primary-50',
                    )}
                  >
                    <Image
                      className={clsx(
                        'hidden xmd:block brightness-100',
                        indexActive == 3 ? 'invert-0' : 'invert',
                      )}
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
          {indexActive == 1 && (
            <Accordion
              className='flex-1 transition-all duration-700'
              type='single'
              collapsible
            >
              <AccordionItem value='item-1'>
                <AccordionTrigger className='text-primary-50 h6'>
                  Giấy tờ
                </AccordionTrigger>
                <AccordionContent>
                  <ul className='flex flex-col'>
                    <li className='body font-normal text-greyscaletext-40'>
                      Tùy thân: CMT, hộ chiếu, visa, vé máy bay, thông tin nhà
                      ở, số điện thoại liên hệ tại nước bạn và VN, giấy/ thẻ bảo
                      hiểm y tế.
                    </li>
                    <li className='body font-normal text-greyscaletext-40'>
                      Học tập: bản gốc bằng, học bạ hoặc bảng điểm, chứng chỉ
                      tiếng Anh, thư giới thiệu, bằng khen, cup các giải thưởng…
                      và: thư mời học, Ecoe- I.20- CAS…;
                    </li>
                    <li className='body font-normal text-greyscaletext-40'>
                      Y tế: giấy tiêm chủng, xác nhận nhóm máu, bệnh án nếu có…
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger className='text-primary-50 h6'>
                  Giấy tờ 1
                </AccordionTrigger>
                <AccordionContent>
                  <ul className='flex flex-col'>
                    <li className='body font-normal text-greyscaletext-40'>
                      Tùy thân: CMT, hộ chiếu, visa, vé máy bay, thông tin nhà
                      ở, số điện thoại liên hệ tại nước bạn và VN, giấy/ thẻ bảo
                      hiểm y tế.
                    </li>
                    <li className='body font-normal text-greyscaletext-40'>
                      Học tập: bản gốc bằng, học bạ hoặc bảng điểm, chứng chỉ
                      tiếng Anh, thư giới thiệu, bằng khen, cup các giải thưởng…
                      và: thư mời học, Ecoe- I.20- CAS…;
                    </li>
                    <li className='body font-normal text-greyscaletext-40'>
                      Y tế: giấy tiêm chủng, xác nhận nhóm máu, bệnh án nếu có…
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
          {indexActive == 2 && (
            <Accordion
              className='flex-1 transition-all duration-700'
              type='single'
              collapsible
            >
              <AccordionItem value='item-1'>
                <AccordionTrigger className='text-primary-50 h6'>
                  Giấy tờ
                </AccordionTrigger>
                <AccordionContent>
                  <ul className='flex flex-col'>
                    <li className='body font-normal text-greyscaletext-40'>
                      Tùy thân: CMT, hộ chiếu, visa, vé máy bay, thông tin nhà
                      ở, số điện thoại liên hệ tại nước bạn và VN, giấy/ thẻ bảo
                      hiểm y tế.
                    </li>
                    <li className='body font-normal text-greyscaletext-40'>
                      Học tập: bản gốc bằng, học bạ hoặc bảng điểm, chứng chỉ
                      tiếng Anh, thư giới thiệu, bằng khen, cup các giải thưởng…
                      và: thư mời học, Ecoe- I.20- CAS…;
                    </li>
                    <li className='body font-normal text-greyscaletext-40'>
                      Y tế: giấy tiêm chủng, xác nhận nhóm máu, bệnh án nếu có…
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger className='text-primary-50 h6'>
                  Giấy tờ 2
                </AccordionTrigger>
                <AccordionContent>
                  <ul className='flex flex-col'>
                    <li className='body font-normal text-greyscaletext-40'>
                      Tùy thân: CMT, hộ chiếu, visa, vé máy bay, thông tin nhà
                      ở, số điện thoại liên hệ tại nước bạn và VN, giấy/ thẻ bảo
                      hiểm y tế.
                    </li>
                    <li className='body font-normal text-greyscaletext-40'>
                      Học tập: bản gốc bằng, học bạ hoặc bảng điểm, chứng chỉ
                      tiếng Anh, thư giới thiệu, bằng khen, cup các giải thưởng…
                      và: thư mời học, Ecoe- I.20- CAS…;
                    </li>
                    <li className='body font-normal text-greyscaletext-40'>
                      Y tế: giấy tiêm chủng, xác nhận nhóm máu, bệnh án nếu có…
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </div>
      </div>
=======
      {isMobile && !guide && (
        <Huongdan
          data={huongdan?.acf?.huong_dan}
          text={text}
        />
      )}
>>>>>>> master
    </section>
  )
}
