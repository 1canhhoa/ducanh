'use client'

import {useState} from 'react'
import ScholarshipItem from './ScholarshipItem'
import SectionSearch from './SectionSearch'
import SectionTabs from './SectionTabs'
import SectionWrapper from './SectionWrapper'
const TEMP_TAB = [
  {
    id: 0,
    title: 'Trường Đại học (Cử nhân, Thạc sỹ, Tiến sỹ)',
    slug: 'university',
    search: true,
  },
  {
    id: 1,
    title: 'Dự bị Đại học, Cao đẳng',
    slug: 'preparation',
    search: true,
  },
  {
    id: 2,
    title: 'Lưu ý quan trọng về trường học',
    slug: 'important-note',
  },
]
const ScholarshipEngland = ({lang, id = 'scholarship-england'}) => {
  const [search, setSearch] = useState({
    enabled: true,
    slug: TEMP_TAB[0].slug,
  })
  const tabCallBack = (tabItem) => {
    setSearch({
      enabled: tabItem.search,
      slug: tabItem.slug,
    })
  }
  return (
    <SectionWrapper
      id={id}
      lang={lang}
      title={lang.h2_scholarship_en}
      mobileMargin={false}
    >
      <SectionTabs
        items={TEMP_TAB}
        className='mt-[1.25rem] xmd:mt-[0.75rem]'
        selectChange={tabCallBack}
      />
      {search.enabled && (
        <SectionSearch className='mt-[1.25rem] xmd:mt-[0] xmd:mx-[0.75rem]' />
      )}
      {Array.from({length: 4}).map((item, index) => (
        <ScholarshipItem
          key={index}
          data={{
            title: index + 1 + '. Northumbria University:',
            href: '#',
            details: [
              'Học bổng £3,000 – Northumbria Undergraduate Global Scholarship: dành cho bậc cử nhân ở năm học đầu tiên, yêu cầu: đủ điểm đầu vào của khóa học;',
              'Học bổng £2,000 – Northumbria Postgraduate Global Scholarship: dành cho bậc thạc sỹ, yêu cầu: đủ điểm đầu vào của khóa học;',
              'Học bổng 20% tự động – Northumbria University Alumni Discount: Dành cho các sinh viên đã từng học ở đại học Northumbria, áp dụng cho bậc thạc sỹ tín chỉ hoặc thạc sỹ nghiên cứu.',
            ],
          }}
        />
      ))}
      <span className='xmd:mx-[0.75rem] xmd:text-[1.25rem] text-[1.5rem] mt-[1.5rem] inline-block text-primary-50 xmd:font-semibold font-bold xmd:leading-[150%] leading-[1.95rem] xmd:tracking-[-0.0125rem]'>
        Chi tiết học bổng của hơn 100 trường đại học khác xem 
        <a
          href='#'
          className='underline'
          target='_blank'
        >
          tại đây
        </a>
      </span>
    </SectionWrapper>
  )
}

export default ScholarshipEngland
