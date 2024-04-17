"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Title from '@/components/Title'



const Popup = ({ b, hover }) => {
  return <div className="relative duration-500 ease-in-out px-[0.75rem] md:mt-10 xmd:mb-4  xmd:mt-4 ">
    <div className={"flex relative duration-500 ease-in-out pt-[0.56rem] pb-[0.94rem] px-[0.75rem] z-[2] xmd:bg-linear-l5 justify-center items-center md:w-[30.75rem] rounded-xl md:absolute md:h-[13.49994rem] shrink-0 bg-opacity-90 bg-white "
    }>
      <div className='md:w-[26.625rem] duration-500 ease-in-out xmd:text-white text-greyscaletext-80 xmd:text-[0.875rem] text-base not-italic font-medium leading-[150%]'>
        {b?.content}
      </div>
    </div>
    <div className={(hover ? "xmd:bg-[#2c98e3] xmd:left-[17rem]" : "xmd:left-10 xmd:bg-linear-l5") + '  xmd:w-12 xmd:h-10 w-12 h-16 duration-500  z-[1] ease-in-out rounded-md rotate-45  absolute xmd:top-[-0.2rem]  -top-4 md:left-20  md:bg-white '}></div>
  </div>
}



const DichVuDucAnh = ({ t, isMobile, dataDichVuTaiDucAnh }) => {
  const [hover, setHover] = useState(0)
  const [currentItem, setCurrentItem] = useState(dataDichVuTaiDucAnh)
  const [accordionOpen, setAccordionOpen] = useState(false);
  useEffect(() => {
    setAccordionOpen(true)
    setHover(0)
    setCurrentItem(dataDichVuTaiDucAnh[0])
  }, [])
  return (
    <div className='xmd:mt-[3rem] z-[10] bg-white  w-full relative'>
      <div className="flex z-[1] flex-col xmd:px-[0.75rem] md:absolute top-20 left-20 items-start space-y-[0.5rem]">
        <div className="text-greyscaletext-40 xmd:text-primary-40 text-center xmd:text-[0.875rem] text-[1rem] not-italic font-bold leading-[normal] uppercase">
          Đồng hành với học sinh
        </div>
        <Title title={t.dich_vu_duc_anh} className={'xmd:text-[1.75rem] xmd:font-bold xmd:leading-[1.3]'} />
      </div>
      <div className='   md:absolute xmd:pt-[1.25rem]  xmd:flex-col xmd:left-0  top-[37rem] flex md:left-[3rem] md:gap-3'>
        {/* {renderItems()} */}
        <div className='flex items-center dichvuducanh space-x-[2rem]'>
          {dataDichVuTaiDucAnh?.map((d, i) => {
            return (
              <button
                onMouseEnter={() => { setHover(i) }}
                onMouseLeave={() => { setHover(0) }}
                className=' z-[100] dichvuducanh2 absolute text-center flex-col'>
                <div className='bg-gradient-to-b from-[#DB2C34] from-[0%] to-[#FF6A70] to-[100%] text_gradient bg-clip-text
                w-max text-[1.375rem] not-italic font-extrabold leading-[150%] dec'>{i}.
                  {d?.title}
                </div>
                <div className="h-[0.1875rem] w-full rounded-[0.0625rem] bg-gradient-to-r from-[#C62E2E] from-[26.74%] to-[#EA29E2] to-[86.69%]"></div>
                <div
                  className={`grid overflow-hidden absolute md:w-[35rem] md:h-[30rem]  text-slate-600 text-sm
                      ${hover === i && !isMobile
                      ? "dichvu-popup dichvu-popup-active"
                      : "dichvu-popup "
                    }`}
                >
                  <div className="overflow-hidden">
                    <Popup b={currentItem} />
                  </div>
                </div>
              </button>
            )
          })}

        </div>

      </div>
      <div className="w-[33.25rem] text-white absolute bottom-[12rem] right-[1rem] text-center text-[2.625rem] not-italic font-extrabold leading-[120%] tracking-[-0.105rem]">

        Các dịch vụ đảm bảo chuyên nghiệp, minh bạch, hiệu quả và thân thiện
      </div>
      <Image loading='lazy' alt="ảnh nền phần dịch vụ cho web" src={'/images/homepage/bg-dichvu.png'} width={1600} height={900} className="w-full" />
      <Image loading='lazy' alt="ảnh nền phần dịch vụ cho web2" src={'/images/homepage/bg-dichvu2.png'} width={1600} height={900} className="w-full absolute bottom-0" />

    </div >
  )
}

export default DichVuDucAnh
