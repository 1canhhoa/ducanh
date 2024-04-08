'use client'
import Image from 'next/image'
import { country } from '@/lib/data'

export default function AsidePrimary({isMobile}) {
  console.log('isMobile-aside', isMobile)
  return (

    <aside className="mt-[10rem] flex justify-start h-[38.5rem] items-center  flex-col border-[1px] rounded-[0.75rem] border-primary-10 overflow-hidden">
      <div className=" 
          bg-linear-l5 flex items-center w-[21.8125rem] h-[3rem] 
          shrink-0 rounded-tl-[0.5rem] rounded-tr-[0.5rem] px-[1.5rem]
          text-white text-base not-italic font-bold leading-[150%]">
        Bạn muốn du học ở đâu?
      </div>
      <ul>
        {country.map((d, i) => (
          <>
            <li key={i} className="relative flex group w-[21.8125rem] items-center space-x-[1rem] px-[1.5rem] py-[0.5rem]">

              <Image className="group-hover:opacity-0 duration-500 opacity-100 z-[1] size-[2rem]" priority alt="ảnh la co" src={d.img} width={32} height={32} />

              <div className='group-hover:opacity-0 duration-700 opacity-100 flex-1 z-[1] button1 text-primary-60 uppercase'>{d.tittle}</div>

              <svg className='z-[1] group-hover:opacity-0 duration-700 opacity-100 size-[1.25rem]' xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M7.5 4.78125L13.3333 10.6146L7.5 16.4479" stroke="#132B7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <Image priority alt="ảnh" src={d.bg} width={360} height={60}
                className="absolute top-0 group-hover:opacity-100  custom-transition opacity-0 left-0 right-0 bottom-0" />

              <div className='absolute group-hover:opacity-100 duration-700 opacity-0 flex-1 z-[1] button1 text-white uppercase '>{d.tittle}</div>

            </li>
            {i !== country.length - 1 && <div className="w-[18.125rem] my-[0.033rem] h-[0.03125rem] mx-auto shrink-0 bg-primary-60 opacity-10"></div >}
          </>
        ))}
      </ul>
    </aside>
  )
}
