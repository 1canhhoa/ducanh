"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Title from '@/components/Title'
import { buttonDuhoc } from '@/lib/data'



const Popup = ({ hover, i, b }) => {
  return <div className="relative px-[0.75rem] md:-translate-x-6 md:mt-10 xmd:mt-7 ">
    <div className={"flex pt-[0.56rem] pb-[0.94rem] px-[0.75rem] xmd:bg-linear-l5 justify-center items-center md:w-[30.75rem] duration-100 ease-in-out drop-shadow-xl rounded-xl md:absolute md:h-[13.49994rem] z-10 shrink-0 bg-white xmd:shadow-[0px_-8px_24px_0px_rgba(0,0,0,0.08),74px_151px_67px_0px_rgba(158,158,158,0.01),42px_85px_57px_0px_rgba(158,158,158,0.05)] "
      + (hover === i ? '-translate-y-5 scale-100 opacity-100' : 'opacity-0 -translate-y-10 scale-95')}>
      <div className='md:w-[26.625rem] xmd:text-white text-greyscaletext-80 xmd:text-[0.875rem] text-base not-italic font-medium leading-[150%]'>
        {b?.content}
      </div>
    </div>
    <div className={'w-12 h-16 duration-100 ease-in-out rounded-md rotate-45  absolute z-[-1] -top-4 left-20 bg-white '
      + (hover === i ? '-translate-y-5 scale-100 opacity-100' : 'opacity-0 -translate-y-10 scale-95')}></div>
  </div>
}




const DichVuDucAnh = ({ t, isMobile }) => {
  const [hover, setHover] = useState(-1)
  const [currentItem, setCurrentItem] = useState(buttonDuhoc[0])
  const width = isMobile ? 2 : 1
  const lenght = isMobile ? buttonDuhoc.length : 1
  const renderItems = () => {
    const result = [];
    for (let i = 0; i < lenght; i += width) {
      const group = isMobile ? buttonDuhoc.slice(i, i + width) : buttonDuhoc; // Lấy group phần tử theo width
      const checkIsGroupOpen = group.find((f) => f.id === currentItem.id)
      result.push(
        <div className='flex xmd:flex-col items-center'>
          <div className='flex'>
            {group.map((b, i) => {
              const translateYValue = `-${i * 2.8}rem`;
              return (
                <a
                  className={'dichvuducanh2 z-10'}
                  key={i}
                  style={{ transform: isMobile ? `` : `translateY(${translateYValue})` }}
                >
                  <div
                    onClick={isMobile ? () => {
                      setHover(i)
                      setCurrentItem(b)
                    } : () => { }}
                    onMouseEnter={isMobile ? () => { } : () => { setHover(i) }}
                    onMouseLeave={() => { setHover(0) }}
                    className={(hover != -1 && i === hover && checkIsGroupOpen ? '' : ' ') + 'duration-300 ease-in-out  dichvuducanh3 relative  w-[11.5rem] h-[5.4375rem] '}>

                    <Image alt='ss' src='/images/homepage/union1.svg'
                      className={'z-0 shrink-0 xmd:hidden absolute w-[11.5rem] h-[5.4375rem] duration-1000 ease-in-out ' + (hover != -1 && i === hover && checkIsGroupOpen ? 'opacity-0 ' : 'opacity-100')} width={9999} height={9999} />

                    <Image alt='ss' src='/images/homepage/union.svg'
                      className={'z-0 shrink-0  absolute duration-1000 w-[11.5rem] h-[5.4375rem] ease-in-out ' + (hover != -1 && i === hover && checkIsGroupOpen ? 'opacity-100 ' : 'opacity-0')} width={9999} height={9999} />
                    <div className={(hover != -1 && i === hover && checkIsGroupOpen ? '' : 'z-[-1] xmd:shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] xmd:rounded-2xl bg-white') + " md:hidden  absolute top-0 left-2  w-[10.59375rem] h-[4.6875rem]"}></div>
                    <div className={' dichvuducanh4 absolute top-3 *: '}>
                      <div className={(hover != -1 && i === hover && checkIsGroupOpen ? '' : 'xmd:!text-primary-40') + ' text-[1rem] font-bold leading-[1.2]  duration-300 ease-in-out text-center text-white'}>
                        {b.tittle}
                      </div>
                    </div>
                  </div>
                  {!isMobile && <Popup hover={hover} i={i} b={currentItem} />}
                </a>
              )
            })
            }
          </div>
          {isMobile && checkIsGroupOpen && <Popup hover={1} i={1} b={currentItem} />}
        </div>
      );
    }
    return result;
  };


  return (
    <div className='xmd:mt-[2rem] xmd:px-[0.75rem] z-[10] h-[50rem] xmd:w-screen relative'>
      <div className="flex flex-col md:absolute top-20 left-20 items-start space-y-[0.5rem]">
        <div className="text-greyscaletext-40 xmd:text-primary-40 text-center xmd:text-[0.875rem] text-[1rem] not-italic font-bold leading-[normal] uppercase">
          Đồng hành với học sinh
        </div>
        <Title title={t.dich_vu_duc_anh} className={'text-[1.75rem] font-bold leading-[1.3]'} />
      </div>
      <div className='dichvuducanh absolute xmd:mt-[1.25rem] xmd:flex-col xmd:gap-[0.75rem] xmd:top-[5rem] xmd:left-0  top-[23rem] flex md:left-[3rem] md:gap-3'>
        {renderItems()}
      </div>

      <Image priority alt="ảnh" src={'/images/homepage/bg_dichvu.jpg'} width={1600} height={900} className="xmd:hidden w-screen h-[54.375rem]" />
      <Image priority alt="ảnh" src={'/images/homepage/bg-dichvu-mobi.png'} width={1600} height={900} className="md:hidden absolute left-0 z-[-1] top-[13rem] " />

    </div >
  )
}

export default DichVuDucAnh
