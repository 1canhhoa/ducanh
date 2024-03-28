import React from 'react'
import Image from 'next/image'
const CardCentersLanguage = () => {
  return (
    <div className=' flex w-full flex-col relative items-start justify-start space-y-[0.75rem]  p-[1.5rem] stify-center rounded-[0.75rem] bg-white  border border-[rgba(52,104,205,0.40)]'>
      <div className="text-primary-60 text-[1rem] pr-[5rem] font-extrabold uppercase " >
        PTE ACADEMIC, Hồ Chí Minh
      </div>
      <div className="flex flex-col items-start space-y-[0.25rem]">
        <div className="text-greyscaletext-70 text-[0.875rem] font-medium">
          172 Bùi Thị Xuân, P. Phạm Ngũ Lão, Q.1
        </div>
        <div className="text-greyscaletext-70 text-[0.875rem] font-medium">
          028 3929 3995
        </div>
        <div className="text-greyscaletext-70 text-[0.875rem] font-medium">
          pteadmin@ducanh.edu.vn
        </div>
        <div className="text-greyscaletext-70 text-[0.875rem] font-medium">
          Hotline: 09798 05945 - 09630 49860
        </div>
      </div>
      <div className="absolute top-[0.2rem] right-[1rem] size-[2.5rem] shrink-0 flex justify-center items-center rounded-[0.25rem] bg-white border border-[rgba(52,104,205,0.40)] ">
        <Image alt="svg-ban-do" src={'/images/contact/Frame.svg'} width={30} height={40}
          className="w-[1.6875rem] h-[1.875rem] shrink-0 size-[0.5rem]" />
      </div>
    </div>
  )
}

export default CardCentersLanguage
