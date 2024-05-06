'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ttdh = [
  {
    title: 'Lý do chọn Đức Anh',
    href: '/ly-do-chon-duc-anh',
  },
  {
    title: 'Dịch vụ du hoc',
    href: '/dich-vu-da',
  },
  {
    title: 'Chuẩn bị du học',
    href: '/chuan-bi',
  },
  {
    title: 'Cách quy đổi điểm GPA',
    href: '/quy-doi',
  },
  {
    title: 'Học bổng hay tự túc',
    href: '/hoc-bong-hay-tu-tuc',
  },
  {
    title: 'Chọn ngành và chương trình học',
    href: '/chon-nganh-va-chuong-trinh',
  },
  {
    title: 'Chi phí và cách tiêu',
    href: '/chi-phi',
  },
  {
    title: 'Việc làm và định cư nước ngoài',
    href: '/viec-lam',
  },
  {
    title: 'Hỗ trợ du học sinh',
    href: '/ho-tro',
  },
  {
    title: 'Hướng dẫn trước khi lên đường',
    href: '/huong-dan',
  },
]

export default function NavDirectional() {
  const pathname = usePathname()

  return (
    <div className='fixed top-[7.9rem] xmd:top-[4.5rem] z-[30] mx-auto w-full'>
      <div className='xmd:relative xmd:overflow-hidden bg-white  mx-auto w-[94.0625rem] xmd:w-[27.45242rem] xmd:h-[5.1rem]'>
        <div className='xmd:absolute xmd:overflow-x-auto no-scrollbar w-full'>
          <nav className='p-[0.625rem] rounded-[0.625rem] xmd:w-fit xmd:flex xmd:space-x-[0.73rem] lg:grid lg:grid-cols-5 bg-white shadow-[0px_0px_24px_0px_rgba(78,145,246,0.15)]'>
            {ttdh.map((e, index) => (
              <Link
                key={index}
                href={e.href}
                className={clsx(
                  `transition-all text-primary-50 duration-300 xmd:w-[12.40849rem] lg:flex-1 py-[0.75rem] rounded-[0.5rem] flex justify-center items-center body14 font-medium xmd:text-[0.625rem] xmd:font-bold leading-[1.5]`,
                  pathname == e.href ? 'bg-primary-10' : 'xmd:bg-primary-10',
                )}
              >
                {e.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}