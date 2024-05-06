import React from 'react'
import getData from '@/lib/getData'
import Image from 'next/image'
const AsidePrimary = async () => {
  const data = await getData(`/wp-json/acf/v3/sidebar/1276`)
  const dataBanner = data?.acf['side-bar']
  return (
    <div className='flex  justify-start items-start mx-auto  flex-col md:border-[1px] md:rounded-[0.75rem] border-primary-10 '>
      <div
        className=' 
          bg-linear-l5 flex items-center w-full gap-[0.625rem] 
          shrink-0 rounded-tl-[0.5rem] rounded-tr-[0.5rem] px-[1.5rem]
          text-white text-base not-italic font-bold leading-[150%] h-[3rem]
          '
      >
        Bạn muốn du học ở đâu?
      </div>
      <ul className=''>
        {dataBanner?.map((d, i) => (
          <li key={i}>
            <div
              className=' z-[2]
              flex items-center gap-[1rem] !overflow-hidden 
              group w-[21.8125rem] h-[3.12rem] relative  px-[1.5rem] py-[0.5]rem]'
            >
              <Image
                priority
                className='group-hover:opacity-0 duration-500 opacity-100 z-[1] size-[2rem]'
                alt={`ảnh lá cờ ${d?.title} `}
                src={d?.image}
                width={32}
                height={32}
              />

              <div className='group-hover:opacity-0 duration-700 opacity-100 flex-1 z-[1] button1 text-primary-60 uppercase'>
                {d?.title}
              </div>

              {Array.isArray(d?.chidren) === true && <svg className='z-[1] group-hover:opacity-0 duration-700 opacity-100 size-[1.25rem]' xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M7.5 4.78125L13.3333 10.6146L7.5 16.4479" stroke="#132B7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>}
              <Image priority alt={`ảnh background lá cờ ${d?.title} `} src={d?.bg} width={360} height={60}
                className={`${i === dataBanner?.length - 1 ? "rounded-br-xl rounded-bl-xl" : ""} absolute top-0 z-[-2] w-full h-full group-hover:opacity-100  custom-transition opacity-0 left-0 right-0 bottom-0`} />

              <div className=' button1 absolute  group-hover:opacity-100 duration-700 opacity-0 flex-1 z-[1]  text-white uppercase '>
                {d?.title}
              </div>
            </div>
            {i !== dataBanner?.length - 1 && (
              <div className=' w-[18.125rem] my-[0.033rem] h-[0.03125rem] mx-auto shrink-0 bg-primary-60 opacity-10'></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AsidePrimary
