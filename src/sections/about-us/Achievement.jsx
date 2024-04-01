import Title from '@/components/Title'
import React from 'react'
import Image from 'next/image'
const Achievement = ({ t }) => {
  return (
    <div className='flex flex-col items-start space-y-[2.25rem] w-[77rem]'>
      <Title title={t.achievement} />
      <div className='relative'>
        <Image priority alt="ảnh thành tựu công ty du họcb đức anh" src={'/images/about_us/banner_achieve.jpg'} width={1300} height={200} className="w-[77.rem]" />
        <div className="w-[25.8125rem] top-[4.06rem] left-[4.31rem] text-white absolute text-[1.5rem] font-semibold tracking-[-0.015rem]">
          Các mốc thời gian ghi dấu sự trưởng thành của công ty Đức Anh
        </div>
      </div>
    </div>
  )
}

export default Achievement
