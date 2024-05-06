import Title from '@/components/Title'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Timestamp from './Timestamp'
const CardBuisiness = ({ d }) => {
  return <div className='flex justify-between items-start xmd:flex-col xmd:space-y-[1.125rem] md:w-[76.875rem]'>
    <Image priority alt="ảnh" src={d?.img?.url} width={380} height={370} className=" shrink-0" />
    <div className='flex flex-col items-start md:w-[46.875rem] xmd:space-y-[0.5rem] space-y-[1rem] rounded-[0.75rem] shrink-0'>
      <div className="text-secondary-50  font-feature-settings xmd:text-[1.25rem] text-[1.5rem] font-extrabold xmd:leading-[1.5] leading-[1.25] uppercase">
        {d?.maintitle}
      </div>
      <div className="sub24 line-clamp-3 xmd:text-[1.125rem] xmd:leading-[1.5] text-primary-50 font-semibold ">
        {d?.decs_short}
      </div>
      <div className="text-[0.875rem] text-greyscaletext-70 font-normal leading-[1.7] self-stretch">
        {d?.content}
      </div>
      <Button className='xmd:leading-[1.2] h-[2.5rem] xmd:w-full py-[0.75rem] md:normal-case px-[1.5rem] border-primary-50 text-primary-50 text-[1rem] font-semibold'>
        xem thêm
      </Button>
    </div>
  </div>
}
const Business = ({ t, dataLinhvuc }) => {
  return (
    <section className='flex mt-[8.13rem] xmd:mt-[0rem] flex-col w-full items-center'>
      <div className=' md:mb-[3rem] xmd:px-[0.75rem] xmd:space-y-[0.75rem] space-y-[2.5rem]'>
        <Title title={t.business} />
        <div className="flex  flex-col items-start space-y-[5.25rem] xmd:space-y-[2rem]">
          {dataLinhvuc && dataLinhvuc?.map((d, i) => (
            <>
              <CardBuisiness d={d} key={i} />
              {i != dataLinhvuc?.length - 1 && <div className="md:hidden mx-auto w-[21.9375rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]">
              </div >}
            </>
          ))}
        </div>
      </div>
      <Timestamp t={t} />
    </section>
  )
}

export default Business
