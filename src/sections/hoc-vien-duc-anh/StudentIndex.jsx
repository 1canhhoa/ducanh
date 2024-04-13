'use client'
import Image from 'next/image'
import StudentItem from '@/sections/hoc-vien-duc-anh/components/StudentItem'
import GridImageItem from '@/sections/hoc-vien-duc-anh/components/GridImageItem'
import Banner from '@/sections/hoc-vien-duc-anh/components/Banner'
import StudentSlide from '@/sections/hoc-vien-duc-anh/components/StudentSlide'
import {useEffect, useState} from 'react'
import ContactBar from '@/components/contactBar'
import Pagination from '@/components/pagination/Pagination'

export default function StudentIndex({lang, isMobile}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [pictures, setPictures] = useState([
    'https://this-person-does-not-exist.com/img/avatar-gena0f2bc9209c7c43f14ab4e8bd8981c98.jpg',
    'https://this-person-does-not-exist.com/img/avatar-gen11440776fd51cf13fc059d4bbb9ed123.jpg',
    'https://this-person-does-not-exist.com/img/avatar-gen5975021542fa0c280179bedac6dc1a28.jpg',
    'https://this-person-does-not-exist.com/img/avatar-gen1187c6d03e3052fcb9e28eeaf1cc96c8.jpg',
    'https://this-person-does-not-exist.com/img/avatar-gen7b3018304435abbb234fa37ae2406255.jpg',
    'https://this-person-does-not-exist.com/img/avatar-gen9e4eb1b10a1287fbb25419ae40e31cc8.jpg',
    'https://this-person-does-not-exist.com/img/avatar-gen1174912f2832183bdeed43eb1500e7f5.jpg',
    'https://this-person-does-not-exist.com/img/avatar-gen1182d18720932245dc8de8765578d802.jpg',
  ])
  // console.log(activeIndex)
  const handleActiveIndexChange = (index) => {
    setActiveIndex(index)
  }
  useEffect(() => {
    const subPictures = pictures.slice(1)
    const firstPic = pictures.shift()
    // console.log({length: subPictures.length})
    setPictures((prevPictures) => {
      return [...subPictures, firstPic]
    })
    // console.log(pictures)
  }, [activeIndex])
  return (
    <div className='px-[0.75rem] tablet:px-[4rem] md:px-[11rem] xmd:pt-[5rem] pt-[12rem]'>
      <h1 className='hidden md:flex w-full items-baseline title pb-[3rem] text-primary-50 text-[3rem] font-bold leading-[120%] tracking-[-0.03rem]'>
        {lang.student}&nbsp;Đức Anh{' '}
        <span className='bg-secondary-40 w-[0.625rem] ml-[0.5rem] h-[0.625rem] block'></span>
      </h1>
      <ContactBar />
      {isMobile ? (
        <Image
          src={'/images/hoc-vien-duc-anh/mobile_banner.png'}
          alt={'hvda'}
          width={256}
          height={129}
          className={'w-full object-cover mb-[1.76rem]'}
          priority
        />
      ) : (
        <Banner
          lang={lang}
          data={{
            text1: `“Điều làm em ấn tượng nhất chính là công ty Đức Anh là một đối tác
      quan trọng với nhiều trường đại học, vì vậy hiểu rõ đặc điểm của
      từng trường và biết trường tìm kiếm điều gì ở mỗi học sinh. Đó là
      thế mạnh không phải công ty nào cũng có”`,
            text2: `“Điều làm em ấn tượng nhất chính là công ty Đức Anh là một đối tác quan trọng với nhiều trường đại học,
         vì vậy hiểu rõ đặc điểm của từng trường và biết trường tìm kiếm điều gì ở mỗi học sinh. Đó là thế mạnh không 
         phải công ty nào cũng có”`,
            text3: `“10 điểm cho chất lượng dịch vụ của Đức Anh. Đợt em làm UK khá khó khăn, yêu cầu nhiều giấy tờ,
         thật may mắn khi có các chị hướng dẫn và support nhiệt tình nên em cũng đỡ lo hơn.”`,
          }}
        />
      )}

      <section className='flex flex-col md:flex-row mb-[1.5rem] md:mb-[4.5rem]'>
        <div className='xmd:w-full mr-auto'>
          <h2 className='flex flex-col mb-[1rem] md:mb-[4rem]'>
            <span className='text-greyscaletext-80 md:text-greyscaletext-40 text-[0.875rem] md:text-[1.125rem] font-bold leading-[150%] md:leading-[130%] uppercase'>
              {lang.goAlong}
            </span>
            <span className='text-primary-60 flex font-bold text-[2rem] md:text-[3rem] leading-[130%] md:leading-[120%] tracking-[-0.04rem] md:tracking-[-0.03rem]'>
              <span className='inline-flex items-baseline w-[14rem] md:w-[unset] relative'>
                {lang.outstandingStudents}
                <span className='bg-secondary-50 block md:hidden absolute bottom-[0.5rem] right-[4.5rem] w-[0.8rem] md:ml-[0.5rem] h-[0.8rem]'></span>
              </span>
            </span>
          </h2>
          {/* slide */}
          <StudentSlide
            items={Array.from({length: pictures.length})}
            slideChange={handleActiveIndexChange}
          />
        </div>
        <div className='grid grid-cols-4 gap-[0.4rem] md:gap-[0.62rem] mt-[1.5rem] md:mt-0'>
          {pictures.map((pictureSrc, index) => (
            <GridImageItem
              src={pictureSrc}
              index={index}
              key={index}
              // isActive={activeIndex === index}
            />
          ))}
        </div>
      </section>
      <section>
        <h2
          className='pb-[1.5rem] md:pb-[2rem] mb-[2rem] md:mb-[3rem] border-b border-[#C5C5C%]
         text-greyscaletext-80 text-[2rem] font-bold leading-[120%] tracking-[-0.02rem]'
        >
          {lang.outstandingStudents}
        </h2>
        <div
          className='grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-y-[2rem] md:gap-y-[3.5rem]
        gap-x-[0.34rem] md:gap-x-[6.5rem]'
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <StudentItem
              key={item}
              studentData={{
                text: `“Điều làm em ấn tượng nhất chính là công ty Đức Anh là một đối tác
                quan trọng với nhiều trường đại học, vì vậy hiểu rõ đặc điểm của từng
                trường và biết trường tìm kiếm điều gì ở mỗi học sinh. Đó là thế mạnh
                không phải công ty nào cũng có”`,
                name: 'Cao Xuân An',
                img: '/images/hoc-vien-duc-anh/person.png',
                p: 'Học bổng 100% University of Melbourne',
              }}
            />
          ))}
        </div>
        <Pagination />
      </section>
    </div>
  )
}
