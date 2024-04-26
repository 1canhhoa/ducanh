'use client'

import Image from 'next/image'
<<<<<<< HEAD
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
=======
import Link from 'next/link'
import {useEffect, useRef, useState} from 'react'

export default function Item({text, data, index}) {
  const [toggle, setToggle] = useState(false)
  const [height, setHeight] = useState(0)
  const [isActive, setIsActive] = useState(0)
  const myElementRef = useRef(null)
  useEffect(() => {
    const elementHeight = myElementRef?.current?.getBoundingClientRect().height
    setHeight(elementHeight + 32)
  })
  return (
    <div className='flex xmd:w-[21.9375rem] w-[72.375rem] flex-col items-start cursor-pointer shadow-[0px_3px_24px_0px_rgba(0,132,255,0.04),0px_0px_32px_0px_rgba(0,119,229,0.04)]'>
      <button
        onClick={() => {
          setToggle(!toggle)
        }}
>>>>>>> master
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
<<<<<<< HEAD
          1. Học bổng ÚC
=======
          {index + 1}
          {'. '} {data?.title_hoc_bong}
>>>>>>> master
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
<<<<<<< HEAD
      </div>
=======
      </button>
>>>>>>> master
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
<<<<<<< HEAD
          {new Array(3).fill(0).map((e, index) => (
=======
          {data?.danh_muc.length > 1 && (
            <div className='flex w-full space-x-[1.5rem]'>
              {data?.danh_muc?.map((e, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsActive(i)
                  }}
                  className={`${
                    isActive === i
                      ? 'bg-primary-50 text-white'
                      : 'text-primary-50 bg-primary-5'
                  } flex-1 font-bold text-center text-[1rem] py-[0.75rem] rounded-[0.5rem]`}
                >
                  {e.title_danh_muc}
                </button>
              ))}
            </div>
          )}
          {data?.danh_muc[isActive]?.content?.map((e, i) => (
>>>>>>> master
            <>
              <div className='first:hidden w-[70.375rem] h-[0.0625rem] opacity-[0.2] bg-[#4E91F6] mt-[1rem]'></div>
              <div
                key={index}
                className='flex flex-col'
              >
                <div className='flex xmd:flex-col mb-[1rem] xmd:space-y-[0.62rem]'>
                  <span className='flex-1 text-[1rem] font-bold leading-[1.3] text-primary-50'>
<<<<<<< HEAD
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
=======
                    {i + 1}
                    {'. '}
                    {e?.title_content}
                  </span>
                  <div className='flex'>
                    <span className='text-[1rem] font-bold leading-[1.5] text-greyscaletext-50'>
                      {text?.hoc_bong?.xemthem?.title}{' '}
                    </span>
                    <Link
                      href={e?.link_xem_them ? e?.link_xem_them : ''}
                      className='text-[1rem] font-bold leading-[1.5] text-primary-50'
                    >
                      {text?.hoc_bong?.xemthem?.label}
                    </Link>
                  </div>
                </div>
                <div
                  className='tulamhoso pl-[1rem]'
                  dangerouslySetInnerHTML={{__html: e?.description}}
                />
>>>>>>> master
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
