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
import {useRouter, usePathname, useSearchParams} from 'next/navigation'

export default function NavDirectional2() {
  const pathname = usePathname()
  console.log(pathname)

  const [indexActiveNav2, setIndexActiveNav2] = useState(0)
  const [indexActiveNavSmall, setIndexActiveNavSmall] = useState(0)

  return (
    <div className='flex flex-col space-y-[2rem] fixed top-0 z-[999] bg-white w-full'>
      <nav className='w-[97rem] mx-auto px-[1.5rem] pt-[0.75rem] pb-[1.25rem] rounded-[0.75rem] bg-linear-l9 flex flex-col'>
        <div className='flex justify-between'>
          {new Array(4).fill(0).map((e, index) => (
            <button
              onClick={() => {
                setIndexActiveNav2(index)
              }}
              key={index}
              className='group flex w-[20.625rem] py-[0.625rem] justify-center items-center space-x-[0.62rem]'
            >
              <span
                className={clsx(
                  'button2 font-bold transition-all duration-300',
                  index == indexActiveNav2
                    ? 'text-white'
                    : 'text-primary-10 group-hover:text-white transition-all',
                )}
              >
                THÔNG TIN CÔNG TY
                <div
                  className={clsx(
                    'h-[0.14641rem] bg-white mt-[0.25rem] transition-all duration-300',
                    index == indexActiveNav2
                      ? 'w-full'
                      : 'w-0 group-hover:w-full',
                  )}
                ></div>
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
