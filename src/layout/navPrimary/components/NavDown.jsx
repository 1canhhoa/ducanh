'use client'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import {Children} from 'react'
const NavDown = ({data_header}) => {
  const data2 = [
    {id: 0, title: 'về chúng tôi'},
    {id: 1, title: 'thông tin du học'},
    {id: 2, title: 'học bổng'},
    {id: 3, title: 'thi pte academic'},
    {id: 4, title: 'học tiếng anh'},
    {id: 5, title: 'việc làm - định cư'},
    {id: 6, title: 'cộng đồng'},
  ]
  const data = [
    {id: 0, title: 'Lý do chọn Đức Anh'},
    {id: 1, title: 'Dịch vụ du học tại Đức Anh'},
    {id: 2, title: 'Chuẩn bị du học'},
    {id: 3, title: 'Cách quy đổi điểm GPA'},
    {id: 4, title: 'Học bổng hay tự túc'},
    {id: 5, title: 'Chọn ngành và chương trình học'},
    {id: 6, title: 'Việc làm và định cư nước ngoài'},
    {id: 7, title: 'Hỗ trợ du học sinh'},
    {id: 8, title: 'Hướng dẫn trước khi lên đường'},
  ]
  return (
    <ul className='flex items-center w-full justify-between'>
      {data_header?.nav_down?.map((d, i) => (
        <HoverCard
          openDelay={0}
          closeDelay={0}
          key={i}
        >
          <HoverCardTrigger>
            <li
              key={i}
              className='button1 text-primary-60 uppercase cursor-pointer'
            >
              {d?.title}
            </li>
          </HoverCardTrigger>
          <HoverCardContent className='pt-6'>
            <ul className='flex bg-[#3468CD] w-[20.4246rem] flex-col items-start space-y-[0.14641rem] shadow-[0px_4px_12px_0px_rgba(78,145,246,0.15)] p-[0.58565rem] rounded-[1.1713rem]'>
              {d?.Children &&
                d?.children?.map((d, i) => (
                  <li
                    className='flex group hover:bg-white cursor-pointer items-center duration-300 ease-linear gap-[0.73206rem] self-stretch px-[0.73206rem] py-[0.43924rem] rounded-[0.43924rem]'
                    key={i}
                  >
                    <div className='text-white group-hover:text-[#3468CD] duration-100 ease-linear text-[1.02489rem] not-italic font-semibold leading-[150%] w-max'>
                      {d?.title}
                    </div>
                  </li>
                ))}
            </ul>
          </HoverCardContent>
        </HoverCard>
      ))}

      <button
        className='flex justify-center items-center py-[0.625rem] px-[1.25rem] 
        rounded-[2.5rem] bg-primary-60 button1 uppercase text-white'
      >
        Nộp hồ sơ online
      </button>
    </ul>
  )
}

export default NavDown
