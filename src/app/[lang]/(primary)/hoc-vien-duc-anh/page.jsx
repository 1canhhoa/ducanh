import Image from 'next/image'
import {getDictionary} from '../../dictionaries'
import StudentItem from './StudentItem'
import GridImageItem from './GridImageItem'
import Banner from './Banner'
import StudenSlide from './StudenSlide'

export default async function HocVienDucAnh({params}) {
  const t = await getDictionary(params.lang)
  // console.log(params)
  const myPageLang = t.student
  return (
    <div className='px-[0.75rem] md:px-[11rem] pt-[9.69rem]'>
      <h1 className='hidden md:block w-full title pb-[3rem] text-primary-50 text-[3rem] font-bold leading-[120%] tracking-[-0.03rem]'>
        {myPageLang.student}&nbsp;Đức Anh
      </h1>
      <Banner
        lang={myPageLang}
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
      <section className='flex flex-col md:flex-row mb-[1.5rem] md:mb-[4.5rem]'>
        <div className='w-full mr-auto'>
          <h2 className='flex flex-col mb=[1rem] md:mb-[4rem]'>
            <span className='text-greyscaletext-80 md:text-greyscaletext-40 text-[0.875rem] md:text-[1.125rem] font-bold leading-[150%] md:leading-[130%] uppercase'>
              {myPageLang.goAlong}
            </span>
            <span className='text-primary-60 font-bold w-[14rem] md:w-[unset] text-[2rem] md:text-[3rem] leading-[130%] md:leading-[120%] tracking-[-0.04rem] md:tracking-[-0.03rem]'>
              {myPageLang.outstandingStudents}
            </span>
          </h2>
          {/* slide */}
          <StudenSlide items={[]} />
        </div>
        <div className='grid grid-cols-4 gap-[0.4rem] md:gap-[0.62rem] mt-[1.5rem] md:mt-0'>
          {[0, 1, 2, 3, 4, 5, 6].map((gridItem, index) => (
            <GridImageItem
              src={'/images/hoc-vien-duc-anh/grid-demo.jpg'}
              index={index}
              key={gridItem}
            />
          ))}
        </div>
      </section>
      <section>
        <h2
          className='pb-[1.5rem] md:pb-[2rem] mb-[2rem] md:mb-[3rem] border-b border-[#C5C5C%]
         text-greyscaletext-80 text-[2rem] font-bold leading-[120%] tracking-[-0.02rem]'
        >
          {myPageLang.outstandingStudents}
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
      </section>
    </div>
  )
}
