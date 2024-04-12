import Title from '@/components/Title'
import React from 'react'
import Image from 'next/image'
const Achievement = ({ t }) => {
  return (
    <section className='flex flex-col px-[0.5rem] xmd:w-full items-start xmd:space-y-[1rem] space-y-[2.25rem] '>
      <Title title={t.achievement} />
      <div className='relative xmd:w-full'>
        <Image priority alt="ảnh thành tựu công ty du học đức anh" src={'/images/about_us/banner_achieve.jpg'} width={1300} height={200} className="md:w-[77rem] xmd:hidden" />
        <Image priority alt="ảnh thành tựu công ty du họcb đức anh mobile" src={'/images/about_us/achieve_mobi.jpg'} width={360} height={360} className="xmd:w-full md:hidden" />
        <div className="md:w-[25.8125rem] xmd:sub20 xmd:top-[2.37rem] xmd:left-[2.13rem] top-[4.06rem] left-[4.31rem] text-white absolute text-[1.5rem] font-semibold tracking-[-0.015rem]">
          Các mốc thời gian ghi dấu sự trưởng thành của công ty Đức Anh
        </div>
      </div>
    </section>
  )
}

export default Achievement
