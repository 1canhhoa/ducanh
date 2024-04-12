'use client'

import clsx from 'clsx'
import {useState} from 'react'

const ttdh = [
  {
    title: 'Lý do chọn Đức Anh',
    href: 'ly_do',
  },
  {
    title: 'Dịch vụ du hoc',
    href: 'dich_vu',
  },
  {
    title: 'Chuẩn bị du học',
    href: 'chuan_bi',
  },
  {
    title: 'Cách quy đổi điểm GPA',
    href: 'quy_doi',
  },
  {
    title: 'Học bổng hay tự túc',
    href: 'hoc_bong',
  },
  {
    title: 'Chọn ngành và chương trình học',
    href: 'chon_nganh',
  },
  {
    title: 'Chi phí và cách tiêu',
    href: 'chi_phi',
  },
  {
    title: 'Việc làm và định cư nước ngoài',
    href: 'viec_lam',
  },
  {
    title: 'Hỗ trợ du học sinh',
    href: 'ho_tro',
  },
  {
    title: 'Hướng dẫn trước khi lên đường',
    href: 'huong_dan',
  },
]

export default function NavDirectional() {
  const [indexActiveNav1, setIndexActiveNav1] = useState(0)

  function scrollToElement(id) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <div className='fixed top-0 z-[999] bg-white w-full'>
      <div className='xmd:relative xmd:overflow-hidden xmd:w-[27.45242rem] xmd:h-[5.1rem]'>
        <div className='xmd:absolute xmd:overflow-x-auto w-full'>
          <nav className='p-[0.625rem] rounded-[0.625rem] xmd:w-fit xmd:flex xmd:space-x-[0.73rem] lg:grid lg:grid-cols-5 lg:bg-[#6196F6] shadow-[0px_0px_24px_0px_rgba(78,145,246,0.15)]'>
            {ttdh.map((e, index) => (
              <button
                key={index}
                onClick={() => {
                  setIndexActiveNav1(index)
                  scrollToElement(`${e.href}`)
                }}
                className={clsx(
                  `transition-all duration-300 xmd:w-[12.40849rem] lg:flex-1 py-[0.75rem] rounded-[0.5rem] flex justify-center items-center body14 font-medium`,
                  index == indexActiveNav1
                    ? 'bg-primary-10 xmd:bg-primary-50 xmd:text-white text-primary-50'
                    : 'text-white xmd:text-primary-50 xmd:bg-primary-10',
                )}
              >
                {e.title}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
