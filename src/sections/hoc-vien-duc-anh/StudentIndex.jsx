import Image from 'next/image'
import StudentItem from '@/sections/hoc-vien-duc-anh/components/StudentItem'
import Banner from '@/sections/hoc-vien-duc-anh/components/Banner'
import ContactBar from '@/components/contactBar'
import Pagination from '@/components/pagination/Pagination'
import StudentSlideWrapper from './components/StudentSlideWrapper'

export default function StudentIndex({lang, isMobile, res, students}) {
  // console.log({students})
  return (
    <div className='px-[0.75rem] tablet:px-[4rem] md:px-[11rem] xmd:pt-[5rem] pt-[12rem] overflow-x-hidden'>
      <h1 className='hidden md:flex w-full items-baseline title pb-[3rem] text-primary-50 text-[3rem] font-bold leading-[120%] tracking-[-0.03rem]'>
        {lang.student}&nbsp;{res?.acf?.main_title_unit}
      </h1>
      <ContactBar />
      {/* banner */}
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
          res={res}
          lang={lang}
        />
      )}

      <StudentSlideWrapper
        lang={lang}
        students={students}
        res={res}
      />
      {/* hoc sinh tieu bieu - excellent students */}
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
          {students.map((student) => (
            <StudentItem
              key={student.id}
              data={student}
            />
          ))}
        </div>
        <Pagination />
      </section>
    </div>
  )
}
