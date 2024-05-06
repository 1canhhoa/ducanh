"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Title from '@/components/Title'



const Popup = ({ b, hover }) => {
  return <div className="relative duration-500  ease-in-out px-[0.75rem] md:mt-10 xmd:mb-4  xmd:mt-4 ">
    <div className={"flex relative duration-500 ease-in-out pt-[0.56rem] pb-[0.94rem] px-[0.75rem] z-[2] xmd:bg-linear-l5 justify-center items-center md:w-[30.75rem] rounded-xl md:absolute md:h-[13.49994rem] shrink-0 bg-opacity-95 bg-white "
    }>
      <div className='md:w-[26.625rem] duration-500 ease-in-out xmd:text-white text-greyscaletext-80 xmd:text-[0.875rem] text-base not-italic font-medium leading-[150%]'>
        {b?.content}
      </div>
    </div>
    {/* <div className={(hover ? "xmd:bg-[#2c98e3] xmd:left-[17rem]" : "xmd:left-10 xmd:bg-linear-l5") + '  xmd:w-12 xmd:h-10 w-12 h-16 duration-500  z-[1] ease-in-out rounded-md rotate-45  absolute xmd:top-[-0.2rem]  -top-4 md:left-20  md:bg-white '}></div> */}
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
    <div className='mt-[3rem] z-[10] bg-white  w-full relative'>
      <div className="flex z-[1] flex-col absolute top-20 left-20 items-start space-y-[0.5rem]">
        <div className="text-greyscaletext-40 xmd:text-primary-40 text-center text-[1rem] not-italic font-bold leading-[normal] uppercase">
          Đồng hành với học sinh
        </div>
        <Title title={t.dich_vu_duc_anh} />
      </div>
      <div className='absolute top-[37rem] flex left-[3rem]'>
        {/* {renderItems()} */}
        <div className='flex items-center dichvuducanh space-x-[2rem]'>
          {dataDichVuTaiDucAnh?.map((d, i) => {
            return (
              <button
                key={i}
                onMouseEnter={() => { setHover(i) }}
                onMouseLeave={() => { setHover(0) }}
                className=' z-[100] dichvuducanh2 absolute text-center flex-col'>
                <div className='relative w-full'>
                  <div className={`${hover === i ? "opacity-0" : "opacity-100"} duration-500 ease-linear absolute bottom-[-0.5rem] text-[#2B46A8]
                  w-max text-[1.375rem] not-italic font-extrabold leading-[150%] flex flex-col
                  `}
                  >
                    {i + 1}.
                    {d?.title}
                    <div className="h-[0.1875rem] w-full rounded-[0.0625rem] 
                    bg-gradient-to-r from-[#2E6BC6] from-[9.83%] via-[#2E6BC6] via-[35.38%] to-[#29A4EA] to-[86.69%]">
                    </div>
                  </div>
                  <div className={`${hover === i ? "opacity-100" : "opacity-0"} duration-500 ease-linear absolute bottom-[-0.5rem] bg-gradient-to-b from-[#DB2C34] from-[0%] to-[#FF6A70] to-[100%] text_gradient bg-clip-text
                  w-max text-[1.375rem] flex flex-col not-italic font-extrabold leading-[150%]`}
                  >
                    {i + 1}.
                    {d?.title}
                    <div className="h-[0.1875rem] w-full rounded-[0.0625rem] bg-gradient-to-r from-[#C62E2E] from-[26.74%] to-[#EA29E2] to-[86.69%]"></div>

                  </div>

                </div>
                <div
                  className={`grid overflow-hidden absolute w-[35rem] h-[30rem]  text-slate-600 text-sm
                      ${hover === i && !isMobile
                      ? "dichvu-popup dichvu-popup-active"
                    : "dichvu-popup  pointer-events-none"
                    }`}
                >
                  <div className="overflow-hidden">
                    <Popup b={currentItem} />
                  </div>
                </div>
              </button>
            )
          })}

          <button
            onMouseEnter={() => { setHover(100) }}
            onMouseLeave={() => { setHover(-1) }}
            className='more-service h-[1rem] group'>
            <div className='flex flex-col relative items-center space-y-[0.3rem]'>
              <div className='flex items-center space-x-[0.3rem] justify-center'>
                <div className="size-[0.3rem] duration-300 ease-linear group-hover:bg-[#C62E2E] bg-[#2B46A8]">

                </div>
                <div className="size-[0.3rem] duration-300 ease-linear group-hover:bg-[#C62E2E] bg-[#2B46A8]">

                </div>
                <div className="size-[0.3rem] duration-300 ease-linear group-hover:bg-[#C62E2E] bg-[#2B46A8]">

                </div>
              </div>
              <div className={`${hover === 100 ? "opacity-0" : "opacity-100"} duration-300 ease-linear h-[0.1875rem] w-[140%] absolute top-[0.5rem] rounded-[0.0625rem] 
                bg-gradient-to-r from-[#2E6BC6] from-[9.83%] via-[#2E6BC6] via-[35.38%] to-[#29A4EA] to-[86.69%]`}>
              </div>
              <div className={`${hover === 100 ? "opacity-100" : "opacity-0"} duration-300 ease-linear h-[0.1875rem] w-[140%] absolute top-[0.5rem] rounded-[0.0625rem] 
                bg-gradient-to-r from-[#C62E2E] from-[26.74%] to-[#EA29E2] to-[86.69%]`}>
              </div>
            </div>
          </button>

        </div>

      </div>
      <div className="w-[33.25rem] text-white absolute bottom-[12rem] right-[1rem] text-center text-[2.625rem] not-italic font-extrabold leading-[120%] tracking-[-0.105rem]">

        Các dịch vụ đảm bảo chuyên nghiệp, minh bạch, hiệu quả và thân thiện
      </div>
      <Image loading='lazy' alt="ảnh nền phần dịch vụ cho web" src={'/images/homepage/bg-dichvu.png'} width={1600} height={900} className="w-full" />

    </div >
  )
}

export default DichVuDucAnh
