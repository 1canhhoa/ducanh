'use client'
import clsx from 'clsx'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
const MobileTableOfContents = ({lang}) => {
  const pathName = usePathname()
  const TABLE_OF_CONTENTS_ITEMS = [
    {
      title: lang.scholarship.h2_about_united_kingdom,
      pathName: '/thong-tin-chung-ve-anh-quoc',
    },
    {
      title: lang.scholarship.h2_reason_mb,
      pathName: '/vi-sao-lua-chon-du-hoc-duc-anh',
    },
    {
      title: lang.scholarship.h2_education_system,
      pathName: '/he-thong-giao-duc-dat-nuoc',
    },
    {
      title: lang.scholarship.h2_secondary_schools,
      pathName: '/cac-truong-pho-thong-tai-anh',
    },
    {
      title: lang.scholarship.h2_training_institutes,
      pathName: '/cac-vien-dao-tao-nghe-tai-anh',
    },
    {
      title: lang.scholarship.h2_university_schools,
      pathName: '/cac-truong-dai-hoc-tai-anh',
    },
    {
      title: lang.scholarship.h2_register_to_study,
      pathName: '/dang-ky-xin-hoc-tai-anh',
    },
    {
      title: lang.scholarship.h2_visa_abroad_study,
      pathName: '/visa-du-hoc',
    },
    {
      title: lang.scholarship.h2_scholarship_en,
      pathName: '/hoc-bong-tai-anh',
    },
    {
      title: lang.scholarship.h2_job_settled,
      pathName: '/viec-lam-dinh-cu-tai-anh',
    },
  ]

  return (
    <nav
      id='table-of-contents'
      className='md:hidden h-3rem fixed top-[3.5rem] z-10 bg-white w-full flex items-center overflow-x-auto py-[0.38rem] no-scrollbar'
    >
      {TABLE_OF_CONTENTS_ITEMS.map((TOTItem, index) => {
        return (
          <Link
            prefetch={true}
            href={TOTItem.pathName}
            key={index}
            className={clsx(
              'whitespace-nowrap py-[1rem] px-[0.75rem] ml-[0.75rem] rounded-lg text-[0.7rem] font-bold leading-[100%] tracking-[0.1rem] uppercase duration-200',
              {
                'bg-primary-40 text-white': pathName === TOTItem.pathName,
                'bg-primary-5 text-primary-70': pathName !== TOTItem.pathName,
              },
            )}
          >
            {TOTItem.title}
          </Link>
        )
      })}
    </nav>
  )
}

export default MobileTableOfContents
