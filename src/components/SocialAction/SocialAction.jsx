"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import FormDangKyTuVan from '@/components/form-dang-ki-tu-van/FormDangKyTuVan.jsx'
import useClickOutSide from '@/hooks/useClickOutSide'
const SocialAction = () => {
  const [active, setActive] = useState(-1)
  const [sideRef, isOutSide] = useClickOutSide();
  useEffect(() => {
    if (isOutSide) {
      setActive(-1)
      console.log('click been ngoai');
    } else {
      // Xử lý khi click bên trong thẻ <div>
      console.log('click been trong');

    }
  }, [isOutSide]);
  return (
    <div className=" fixed z-[50] xmd:bottom-[5.2rem] bottom-[3.2rem] xmd:right-[0.5rem] right-[1.5rem] flex flex-col xmd:space-y-[0.5rem] space-y-[0.7rem]">
      <Image onClick={() => setActive(1)} priority alt="ảnh" src={'/images/homepage/mess4.png'} width={56} height={56} className="w-full h-full cursor-pointer xmd:size-[2.5rem] size-[3.5rem]" />
      {active === 1 &&
        <div ref={sideRef} className='bd fixed w-[21.875rem] bottom-[10rem] right-[10rem]'>
          <FormDangKyTuVan />
        </div>
      }
      <Image priority alt="ảnh" src={'/images/homepage/mess.png'} width={56} height={56} className="w-full h-full  xmd:size-[2.5rem] size-[3.5rem]" />
      <Image priority alt="ảnh" src={'/images/homepage/mess3.png'} width={56} height={56} className="w-full h-full xmd:size-[2.5rem] size-[3.5rem]" />
      <Image priority alt="ảnh" src={'/images/homepage/mess2.png'} width={56} height={56} className="w-full h-full xmd:size-[2.5rem] size-[3.5rem]" />
    </div>
  )
}
export default SocialAction