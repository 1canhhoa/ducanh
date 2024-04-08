import React from 'react'
import Image from 'next/image'
import { country_truonglk } from '@/lib/data'
const TruongLienKet = () => {
  return (
    <div className='relative'>
      <Image priority alt="ảnh" src={'/images/homepage/bg-truonglk.png'} width={1600} height={620} className="xmd:hidden w-screen h-[38.125rem]" />
      <Image priority alt="ảnh" src={'/images/homepage/bg-truonglk-mobi.png'} width={1600} height={620} className="md:hidden w-screen h-[36.0625rem]" />
      {/* #2E6BC6 9.83%, #2E6BC6 35.38%, #29A4EA 86.69%) */}
      <div
        className=" text_gradient bg-clip-text bg-gradient-to-r 
        from-[#2E6BC6] from-[9.83%]  via-[#2E6BC6] via-[9.83%]  to-[#29A4EA] to-[86.69%] 
          absolute xmd:text-[7.5rem] text-[13.75rem] not-italic font-extrabold leading-[160%] xmd:tracking-[-0.225rem] tracking-[-0.4125rem] 
          xmd:top-0 xmd:left-1/2 xmd:-translate-x-1/2 md:right-[32.25rem] md:top-[7.5625rem]
          ">
        2000
      </div>
      <div className="
          xmd:backdrop-blur-[15px]
          
          flex w-screen md:w-[35.4375rem] md:bg-white justify-center items-center gap-2.5 absolute px-10 py-2 xmd:top-[5rem] xmd:left-1/2 xmd:-translate-x-1/2 md:right-[32.25rem] md:top-[17.4rem]
          @apply text-[color:var(--PRIMARY-50,#2B46A8)] xmd:text-[1rem] text-2xl not-italic font-semibold leading-[160%] xmd:tracking-[-0.02rem] tracking-[-0.03rem] uppercase">
        trường học liên kết
      </div>
      <div className='xmd:mt-[2rem] overflow-x-auto hidden-scrollbar absolute xmd:top-[8rem] md:bottom-0 hidden-scrollbar w-full'>
        <div className=" md:flex md:items-center w-max xmd:grid xmd:grid-rows-2 xmd:grid-flow-col xmd:grid-cols-3 xmd:gap-x-[2.7rem] xmd:pl-[1.4rem] ">
          {country_truonglk.map((d, i) => (
            <div key={i} className="flex marquee flex-col space-y-[0.75rem] md:w-40 md:h-[9.1875rem] justify-center items-center  py-[1.4375rem] md:px-[2.65625rem]">
              <Image priority alt="ảnh" src={d.img} width={60} height={60} className="size-[3.625rem]" />
              <div className="text-primary-60 text-center xmd:text-[1rem] text-xl not-italic xmd:font-medium font-semibold leading-[150%] xmd:tracking-normal tracking-[-0.0125rem]">
                {d.tittle}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default TruongLienKet

//   < div className = "overflow-x-auto hidden-scrollbar w-full" >
//     <div className="w-max pb-2  flex items-start  gap-[0.87848rem]">
//       <RelatedButton text='mới nhất' bg='#153454' color='white' />
//       <RelatedButton text='ipad' bg='' color='' />
//       <RelatedButton text='bút cảm ứng' bg='' color='' />
//       <RelatedButton text='camara' bg='' color='' />
//       <RelatedButton text='camara' bg='' color='' />
//       <RelatedButton text='camara' bg='' color='' />
//     </div>
//             </ >