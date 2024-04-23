'use client'
import {useState, useEffect} from 'react'
import GridImageItem from '@/sections/hoc-vien-duc-anh/components/GridImageItem'
import StudentSlide from '@/sections/hoc-vien-duc-anh/components/StudentSlide'

const StudentSlideWrapper = ({students = [], res, lang}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [studentsData, setStudentsData] = useState(students)
  //   console.log({studentsData})
  const handleActiveIndexChange = (index) => {
    setActiveIndex(index)
  }
  useEffect(() => {
    const cloneStudents = [...studentsData]
    const subStudents = cloneStudents.slice(1)
    const firstStudent = cloneStudents.shift()
    // console.log({length: subStudents.length})
    setStudentsData((prev) => {
      return [...subStudents, firstStudent]
    })
    // console.log(pictures)
  }, [activeIndex])
  return (
    <section className='flex flex-col md:flex-row mb-[1.5rem] md:mb-[4.5rem]'>
      <div className='xmd:w-full mr-auto'>
        <h2 className='flex flex-col mb-[1rem] md:mb-[4rem]'>
          <span className='text-greyscaletext-80 md:text-greyscaletext-40 text-[0.875rem] md:text-[1.125rem] font-bold leading-[150%] md:leading-[130%] uppercase'>
            {res?.acf?.main_title_unit}
            {lang.goAlong}
          </span>
          <span className='text-primary-60 flex font-bold text-[2rem] md:text-[3rem] leading-[130%] md:leading-[120%] tracking-[-0.04rem] md:tracking-[-0.03rem]'>
            <span className='inline-flex items-baseline w-[14rem] md:w-[unset] relative'>
              {lang.outstandingStudents}
            </span>
          </span>
        </h2>
        {/* slide */}
        <StudentSlide
          lang={lang}
          items={studentsData}
          slideChange={handleActiveIndexChange}
        />
      </div>
      <div className='grid grid-cols-4 gap-[0.4rem] md:gap-[0.62rem] mt-[1.5rem] md:mt-0 h-max'>
        {studentsData
          .map((studentData) => studentData?.acf?.thumbnail)
          .map((pictureSrc, index) => (
            <GridImageItem
              src={pictureSrc}
              index={index}
              key={index}
              // isActive={activeIndex === index}
            />
          ))}
      </div>
    </section>
  )
}

export default StudentSlideWrapper
