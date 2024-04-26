'use client'
import {useEffect, useState} from 'react'
import RelatedPosts from '@/components/BaiVietLienQuan/RelatedPosts'
import './cam-nang-du-hoc.css'

const AbroadGuideIndex = ({lang, res, paramsLang}) => {
<<<<<<< HEAD
  // console.log(res)
  const [headingTexts, setHeadingTexts] = useState([])
  const pageLang = lang.study_abroad_guide

  const createdPostDay = new Date(res.date)
=======
  const [headingTexts, setHeadingTexts] = useState([])
  const pageLang = lang.study_abroad_guide

  const createdPostDay = new Date(res?.post_date)
>>>>>>> master
  const dayOfWeek = createdPostDay.getDay()
  const weekdays = {
    vi: ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
    en: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
  }
  const weekdayName = weekdays[paramsLang][dayOfWeek]
  // time display
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }
  let formattedDate = createdPostDay.toLocaleDateString('en-US', options)
  if (paramsLang === 'vi') {
<<<<<<< HEAD
    formattedDate = `${weekdayName} - ${createdPostDay.toLocaleDateString(
=======
    formattedDate = `Thứ ${weekdayName} - ${createdPostDay.toLocaleDateString(
>>>>>>> master
      'vi-VI',
      {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      },
    )}`
  }

  const handleScrollToContent = (e) => {
    const indexOfSectionToScroll = parseInt(e.target.id)
    const h2Elements = document.querySelectorAll('.content-wrapper h2')
    Array.from(h2Elements)[indexOfSectionToScroll].scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    })
  }

  useEffect(() => {
    const h2Elements = document.querySelectorAll('.content-wrapper h2')
    const headings = []
    h2Elements.forEach((element) => {
<<<<<<< HEAD
      // console.log(element.textContent)
      headings.push(element.textContent)
=======
      headings.push(element.textContent)
      element.id = 'helloanhem'
>>>>>>> master
    })
    setHeadingTexts(headings)
  }, [])

<<<<<<< HEAD
  // console.log(headingTexts)

  return (
    <div className='flex-1 md:ml-[1.5rem]'>
=======
  return (
    <div>
>>>>>>> master
      <main className='xmd:mx-[0.75rem]'>
        <h1
          className='text-primary-50 xmd:text-[1.375rem] text-[1.875rem] xmd:font-extrabold font-extrabold
       xmd:leading-[130%] leading-[120%] tracking-[-0.0275rem]'
        >
<<<<<<< HEAD
          {res.title?.rendered}
        </h1>
        <div className='text-[1rem] font-semibold leading-[170%] text-primary-50 xmd:mt-[1rem] mt-[1.44rem]'>
          <span>{formattedDate}</span>
=======
          {/* {res?.post_title} */}
        </h1>
        <div className='text-[1rem] font-semibold leading-[170%] text-primary-50 xmd:mt-[1rem] mt-[1.44rem]'>
          {/* <span>{formattedDate}</span> */}
>>>>>>> master
        </div>
        {/* table of contents */}
        <div
          className='xmd:my-[1rem] my-[2rem] xmd:p-[1.12rem_0.88rem] p-[1.875rem] border border-primary-50 
      rounded-[0.5rem] bg-[rgba(43, 70, 168, 0.04)]'
        >
          <h2 className='xmd:mb-[0.75rem] mb-[1rem] !mt-0 text-primary-50 xmd:text-[1rem] text-[1.25rem] font-bold leading-[130%]'>
<<<<<<< HEAD
            {pageLang.main_content}
          </h2>
          <ul>
            {headingTexts.map((headingItem, index) => (
=======
            {/* {pageLang?.main_content} */}
          </h2>
          <ul>
            {/* {headingTexts?.map((headingItem, index) => (
>>>>>>> master
              <li
                onClick={handleScrollToContent}
                key={index}
                id={`${index}`}
                className='mb-[0.5rem] xmd:mb-[0.44rem] last:mb-0 text-greyscaletext-60 xmd:text-[0.875rem] text-[1rem] font-semibold leading-[150%] cursor-pointer'
              >
                {index + 1}. {headingItem}
              </li>
<<<<<<< HEAD
            ))}
=======
            ))} */}
>>>>>>> master
          </ul>
        </div>
        {/* content*/}
        <section
<<<<<<< HEAD
          dangerouslySetInnerHTML={{__html: res.content.rendered}}
=======
          dangerouslySetInnerHTML={{ __html: res?.post_content }}
>>>>>>> master
          className='content-wrapper self-stretch text-greyscaletext-60 xmd:text-[0.875rem] text-[1rem] font-medium
         leading-[150%]'
        ></section>
      </main>
      <RelatedPosts
        lang={lang}
        borderTop={false}
      />
    </div>
  )
}

export default AbroadGuideIndex
