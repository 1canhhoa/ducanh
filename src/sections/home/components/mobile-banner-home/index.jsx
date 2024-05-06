"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import useClickOutSide from '@/hooks/useClickOutSide'
const BannerHome = ({ dataBanner, dataCountryMobi }) => {
  const [activeItem, setActiveItem] = useState(null)
  const [active, setActive] = useState(null)
  const [isPopupMounted, setIsPopupMounted] = useState(false);
  const [sideRef, isOutSide] = useClickOutSide(false);

  useEffect(() => {
    if (isOutSide) {
      setIsPopupMounted(false);
      setTimeout(() => {
        setActive(-1);
      }, 300)
    }
  }, [isOutSide]);

  const handleActive = (i) => {
    setActive(i)
    setTimeout(() => {
      setIsPopupMounted(true)
    }, 10)
  }
  const handleActiveItem = (j) => {
    setActiveItem(j)
    setIsPopupMounted(false);
    setTimeout(() => {
      setActive(-1);
    }, 300)
  }
  return (
    <div className=' flex flex-col items-center justify-start pb-[2.23rem]'>
      {/* IMAGE AND MINI_MENU MOBI*/}
      <div className="flex flex-col items-center space-y-[0.75rem]">
        <Image priority alt='ảnh banner mobile' src='/images/homepage/banner-mobi.png'
          className='w-[23.4375rem] shrink-0' width={380} height={195} />
        <div className="menu_mini flex w-[21.9375rem] justify-center items-end space-x-[1rem] shrink-0 shadow-[2px_4px_32px_0px_rgba(37,168,224,0.04),0px_0px_36px_0px_rgba(0,106,218,0.06)] pt-[0.375rem] pb-[0.75rem] px-0 rounded-[0.75rem]">
          {dataBanner?.menu_mini?.map((d, i) => (
            <div key={i} className="pt-[0.5rem] flex w-[4rem] space-y-[0.5rem] flex-col items-center shrink-0">
              <Image priority alt={` icon ${d.title} `} src={d.image} width={20} height={14} className={`img-menu-mini${i} shrink-0`} />
              <div className="text-[0.625rem] font-semibold text_gradient bg-gradient-to-r bg-clip-text
              from-[#082072] from-[0%] to-[#2B46A8] to-[100%]
              ">{d.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div ref={sideRef} className='mt-[2.5rem] flex flex-col items-start '>
        <div className="w-[19.1875rem] text-primary-60 text-base not-italic font-bold leading-[130%] uppercase">
          bạn muốn du học ?
        </div>

        <ul className='mt-[1rem] grid grid-cols-2 gap-x-[0.5rem] gap-y-[0.475rem]'>
          {dataCountryMobi?.map((d, i) => (
            <div key={i}>
              <li onClick={() => handleActive(i)} key={i} className='w-[10.6875rem] flex justify-start bg-white  h-[2.375rem] items-center shadow-[0px_3px_24px_0px_rgba(0,132,255,0.04),0px_0px_32px_0px_rgba(0,119,229,0.04)] p-2 rounded-lg'>
                <p className='button2 font-semibold text-primary-70'>{d?.title}</p>
              </li>
              {active === i &&
                <div className={(isPopupMounted && active === i ? "opacity-100 scale-x-100" : " opacity-0 scale-75") + ` duration-200 ease-linear fixed left-0 bg-primary-50 z-[1000] top-[7rem] flex w-[23.4375rem] flex-col justify-center 
              items-center gap-[0.5rem] p-[0.75rem] shadow-[0px_3px_24px_0px_rgba(0,132,255,0.04),0px_0px_32px_0px_rgba(0,119,229,0.04)]
              rounded-2xl`}>
                  {dataCountryMobi[0].chidren?.map((c, j) => (
                    <div onClick={() => handleActiveItem(j)} key={j} className={`${activeItem === j ? "bg-white text-primary-50" : "bg-primary-50 text-white"} ease-linear duration-300 relative flex items-center gap-1.5 self-stretch px-3 py-3.5 rounded-lg `}>
                      <Image priority alt="ảnh" src={c?.image} width={30} height={30} className="w-4 h-[0.99325rem] shrink-0" />
                      <div className=' text-xs not-italic font-semibold leading-[1.2]'>
                        {c?.title}
                      </div>
                      <svg className=" absolute top-1/2 right-3 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 9.99992L8.53553 13.5355L15.6058 6.46436" stroke="#2B46A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  ))}
                </div>}
            </div>
          ))}
        </ul>
      </div>
    </div >
  )
}

export default BannerHome
