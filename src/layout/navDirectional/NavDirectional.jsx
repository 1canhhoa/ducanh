'use client'

import clsx from 'clsx'
import {useState} from 'react'

const section = [
  {
    title: 'Lý do chọn Đức Anh',
    href: 'ly_do',
  },
  {
    title: 'Học bổng hay tự túc',
    href: 'hoc_bong',
  },
  {
    title: 'Dịch vụ',
    href: 'dich_vu',
  },
  {
    title: 'Chọn ngành và chương trình học',
    href: 'chon_nganh',
  },
  {
    title: 'Chuẩn bị cho du học',
    href: 'chuan_bi',
  },
  {
    title: 'Chi phí cách chi tiêu',
    href: 'chi_phi',
  },
]

export default function NavDirectional() {
  const [indexActiveNav1, setIndexActiveNav1] = useState(0)
  const [indexActiveNav2, setIndexActiveNav2] = useState(0)
  const [indexActiveNavSmall, setIndexActiveNavSmall] = useState(0)
  return (
    <div className='flex flex-col space-y-[2rem] fixed z-[999] bg-white w-full'>
      <nav className='w-[94.8125rem] grid grid-cols-5 gap-x-[0.5rem]  mx-auto p-[0.625rem] bg-[#6196F6] rounded-[0.625rem] shadow-[0px_0px_24px_0px_rgba(78,145,246,0.15)]'>
        {new Array(10).fill(0).map((e, index) => (
          <button
            key={index}
            onClick={() => {
              setIndexActiveNav1(index)
            }}
            className={clsx(
              `transition-all duration-300 flex-1 py-[0.75rem] rounded-[0.5rem] flex justify-center items-center body14 font-medium`,
              index == indexActiveNav1
                ? 'bg-primary-10 text-primary-50'
                : 'text-white',
            )}
          >
            Lý do chọn Đức Anh
          </button>
        ))}
      </nav>
      <nav className='w-[97rem] mx-auto px-[1.5rem] pt-[0.75rem] pb-[1.25rem] rounded-[0.75rem] bg-linear-l9 flex flex-col'>
        <div className='flex justify-between'>
          {new Array(4).fill(0).map((e, index) => (
            <button
              onClick={() => {
                setIndexActiveNav2(index)
              }}
              key={index}
              className='flex w-[20.625rem] py-[0.625rem] justify-center items-center space-x-[0.62rem]'
            >
              <span
                className={clsx(
                  'button2 font-bold transition-all duration-300',
                  index == indexActiveNav2
                    ? 'text-white border-b-[0.125rem] border-solid border-white'
                    : 'text-primary-10',
                )}
              >
                THÔNG TIN CÔNG TY
              </span>
            </button>
          ))}
        </div>
        <div className='w-full justify-between p-[0.25rem] flex space-x-[0.5rem] bg-white rounded-[0.625rem]'>
          {section.map((e, index) => (
            <button
              key={index}
              onClick={() => {
                setIndexActiveNavSmall(index)
                document
                  .getElementById(`${e.href}`)
                  .scrollIntoView({behavior: 'smooth'})
              }}
              className={clsx(
                'transition-all duration-300 h-[3rem] py-[0.75rem] px-[1.25rem] rounded-[0.5rem] body14 font-medium text-primary-50',
                index == indexActiveNavSmall && 'bg-primary-10',
              )}
            >
              {e.title}
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
