import React from 'react'
import Image from 'next/image'
const BaiViet = () => {
  return (
    <div className='flex xmd:w-[21.4375rem] xmd:rounded-[0.75rem] xmd:p-[0.75rem] items-start xmd:space-x-[0.75rem] space-x-[1.5rem] self-stretch xmd:bg-white xmd:shadow-[0px_3px_24px_0px_rgba(0,132,255,0.04),0px_0px_32px_0px_rgba(0,119,229,0.04)]'>
      <Image priority alt='ss' src='/images/homepage/card2.png'
        className='w-[11.9375rem] h-[7.875rem] xmd:w-[9.19rem] xmd:h-[6.0625rem] shrink-0' width={192} height={130} />
      <div className='flex flex-col items-start xmd:space-y-[1.35rem] space-y-[0.75rem] w-[15.25rem] 1g self-stretch'>
        <div className="line-clamp-2 h-[2.4625rem] self-stretch overflow-hidden text-greyscaletext-80 text-ellipsis whitespace-wrap text-base not-italic font-semibold leading-[120%] tracking-[-0.0025rem]">
          Thành công săn học của Đại  số một nước Úc là trải nghiệm như thế nào?
        </div>
        <div className=" 
        text-greyscaletext-70 text-xs not-italic font-semibold leading-[100%] tracking-[0.015rem] uppercase
        py-[0.5rem] px-[1rem] flex justify-center items-center gap-[0.625rem] rounded-[1.75rem] bg-primary-10">
          Học Sinh Đức Anh
        </div>
      </div>
    </div>
  )
}

export default BaiViet