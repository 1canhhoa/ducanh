"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import FormDangKyTuVan from '@/components/form-dang-ki-tu-van/FormDangKyTuVan'
import useClickOutSide from '@/hooks/useClickOutSide'
const SocialAction = () => {
  const [sideRef, isOutSide] = useClickOutSide(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupMounted, setIsPopupMounted] = useState(false);
  useEffect(() => {
    if (isOutSide) {
      setIsPopupMounted(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 300)
    }
  }, [isOutSide]);
  const togglePopup = () => {
    if (isOpen) {
      setIsPopupMounted(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 300)
    } else {
      setIsOpen(true);
      setTimeout(() => {
        setIsPopupMounted(true);
      }, 10)
    }
  };
  return (
    <div ref={sideRef} className=" fixed z-[50] xmd:bottom-[5.2rem] bottom-[3.7rem] xmd:right-[0.5rem] right-[1.5rem] flex flex-col xmd:space-y-[0.5rem] space-y-[0.7rem]">
      <Image

        onClick={togglePopup}
        priority alt="ảnh" src={'/images/homepage/mess4.png'} width={56} height={56} className="w-full h-full cursor-pointer xmd:size-[2.5rem] size-[3.5rem]" />
      {isOpen && <div
        className={`${isOpen && isPopupMounted ? 'opacity-100  md:translate-x-[-50%] scale-100' : 'opacity-0 md:translate-x-[-40%] scale-90'} 
        xmd:w-full duration-200 ease-linear md:translate-y-full  fixed w-[21.875rem] xmd:right-0 xmd:bottom-0 md:bottom-[37.9rem] md:right-[-2rem]`}>
        <FormDangKyTuVan type='mini' togglePopup={togglePopup} />
      </div>}
      <Image priority alt="ảnh" src={'/images/homepage/mess.png'} width={56} height={56} className="w-full h-full  xmd:size-[2.5rem] size-[3.5rem]" />
      <Image priority alt="ảnh" src={'/images/homepage/mess3.png'} width={56} height={56} className="w-full h-full xmd:size-[2.5rem] size-[3.5rem]" />
      <Image priority alt="ảnh" src={'/images/homepage/mess2.png'} width={56} height={56} className="w-full h-full xmd:size-[2.5rem] size-[3.5rem]" />
    </div>
  )
}
export default SocialAction