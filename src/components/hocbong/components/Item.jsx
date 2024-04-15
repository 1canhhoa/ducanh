'use client'

import Image from 'next/image'
import {useEffect, useRef, useState} from 'react'

export default function Item() {
  const [toggle, setToggle] = useState(false)
  const [height, setHeight] = useState(0)
  const myElementRef = useRef(null)
  useEffect(() => {
    const elementHeight = myElementRef?.current?.getBoundingClientRect().height
    setHeight(elementHeight + 20)
  })
  return (
    <div
      onClick={() => {
        setToggle(!toggle)
      }}
      className='flex xmd:w-[21.9375rem] w-[72.375rem] flex-col items-start cursor-pointer shadow-[0px_3px_24px_0px_rgba(0,132,255,0.04),0px_0px_32px_0px_rgba(0,119,229,0.04)]'
    >
      <div
        className={`${
          toggle
            ? 'bg-gradient-to-r from-[#2E6BC6] to-[#29A4EA]'
            : 'rounded-b-[0.5rem] bg-primary-5'
        } w-full flex items-center justify-between py-[0.75rem] pl-[1rem] pr-[0.375rem] rounded-t-[0.5rem] transition-all duration-500`}
      >
        <span
          className={`${
            toggle ? 'text-white' : 'text-primary-40'
          } text-[1rem] font-bold leading-[1.2] transition-all duration-700`}
        >
          1. Học bổng ÚC
        </span>
        {toggle ? (
          <Image
            alt='hoc bông'
            src={'/images/hocbong/line.svg'}
            width={28}
            height={28}
          />
        ) : (
          <Image
            alt='hoc bông'
            src={'/images/hocbong/cong.svg'}
            width={28}
            height={28}
          />
        )}
      </div>
      <div
        style={{height: `${toggle ? `${height}px` : 0}`}}
        className={`${
          toggle ? 'p-[1rem]' : ''
        } overflow-hidden w-full rounded-b-[0.5rem] bg-white flex flex-col transition-all duration-700`}
      >
        <div
          ref={myElementRef}
          className='flex flex-col space-y-[0.75rem]'
        >
          {new Array(3).fill(0).map((e, index) => (
            <>
              <div className='first:hidden w-[70.375rem] h-[0.0625rem] opacity-[0.2] bg-[#4E91F6] mt-[1rem]'></div>
              <div
                key={index}
                className='flex flex-col'
              >
                <div className='flex xmd:flex-col mb-[1rem] xmd:space-y-[0.62rem]'>
                  <span className='flex-1 text-[1rem] font-bold leading-[1.3] text-primary-50'>
                    1. Northumbria University:
                  </span>
                  <div className='flex'>
                    <span className='text-[1rem] font-bold leading-[1.5] text-greyscaletext-50'>
                      Xem chi tiết:{' '}
                    </span>
                    <span className='text-[1rem] font-bold leading-[1.5] text-primary-50'>
                      tại đây
                    </span>
                  </div>
                </div>
                {new Array(3).fill(0).map((e, index) => (
                  <div
                    key={index}
                    className='flex space-x-[1rem] items-center'
                  >
                    <div className='size-[0.5rem] rounded-full bg-greyscaletext-30'></div>
                    <p className='flex-1 text-[1rem] font-medium leading-[1.5] text-greyscaletext-30'>
                      Học bổng £3,000 – Northumbria Undergraduate Global
                      Scholarship: dành cho bậc cử nhân ở năm học đầu tiên, yêu
                      cầu: đủ điểm đầu vào của khóa học;
                    </p>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
