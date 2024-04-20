'use client'

import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import clsx from 'clsx'
import {useState} from 'react'

export default function Huongdan({text}) {
  const [indexActive, setIndexActive] = useState(1)
  return (
    <div
      id='huong_dan'
      className='xlg:w-full lg:w-[76.6875rem] xlg:px-[5.3rem] xmd:flex xmd:flex-col xmd:px-0 lg:h-[54.375rem]'
    >
      <p className='title xmd:mb32 relative w-fit xmd:w-[18.25rem]'>
        {text.hotro.huongdan.title}
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
                    indexActive == 1 ? 'xmd:text-white' : 'xmd:text-primary-50',
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
                  {text.hotro.huongdan.truockhibay.title}
                </div>
                <span
                  className={clsx(
                    'body14 xmd:body12 text-start font-medium text-greyscaletext-50 xmd:w-[16.5rem]',
                    indexActive == 1
                      ? 'xmd:text-white'
                      : 'xmd:text-greyscaletext-50',
                  )}
                >
                  {text.hotro.huongdan.truockhibay.description}
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
                    indexActive == 2 ? 'xmd:text-white' : 'xmd:text-primary-50',
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
                  {text.hotro.huongdan.bay.title}
                </div>
                <span
                  className={clsx(
                    'body14 xmd:body12 text-start font-medium text-greyscaletext-50 xmd:w-[16.5rem]',
                    indexActive == 2
                      ? 'xmd:text-white'
                      : 'xmd:text-greyscaletext-50',
                  )}
                >
                  {text.hotro.huongdan.bay.description}
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
                    indexActive == 3 ? 'xmd:text-white' : 'xmd:text-primary-50',
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
                  {text.hotro.huongdan.dennoi.title}
                </div>
                <span
                  className={clsx(
                    'body14 xmd:body12 text-start font-medium text-greyscaletext-50 xmd:w-[16.5rem]',
                    indexActive == 3
                      ? 'xmd:text-white'
                      : 'xmd:text-greyscaletext-50',
                  )}
                >
                  {text.hotro.huongdan.dennoi.description}
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
            <AccordionItem value={1}>
              <AccordionTrigger className='text-primary-50 h6'>
                Giấy tờ
              </AccordionTrigger>
              <AccordionContent>
                <ul className='flex flex-col'>
                  <li className='body font-normal text-greyscaletext-40'>
                    Tùy thân: CMT, hộ chiếu, visa, vé máy bay, thông tin nhà ở,
                    số điện thoại liên hệ tại nước bạn và VN, giấy/ thẻ bảo hiểm
                    y tế.
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
            <AccordionItem value={2}>
              <AccordionTrigger className='text-primary-50 h6'>
                Giấy tờ 1
              </AccordionTrigger>
              <AccordionContent>
                <ul className='flex flex-col'>
                  <li className='body font-normal text-greyscaletext-40'>
                    Tùy thân: CMT, hộ chiếu, visa, vé máy bay, thông tin nhà ở,
                    số điện thoại liên hệ tại nước bạn và VN, giấy/ thẻ bảo hiểm
                    y tế.
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
                    Tùy thân: CMT, hộ chiếu, visa, vé máy bay, thông tin nhà ở,
                    số điện thoại liên hệ tại nước bạn và VN, giấy/ thẻ bảo hiểm
                    y tế.
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
                    Tùy thân: CMT, hộ chiếu, visa, vé máy bay, thông tin nhà ở,
                    số điện thoại liên hệ tại nước bạn và VN, giấy/ thẻ bảo hiểm
                    y tế.
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
  )
}
