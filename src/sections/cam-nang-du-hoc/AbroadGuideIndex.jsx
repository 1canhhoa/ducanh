'use client'
import {useEffect, useState} from 'react'
import RelatedPosts from '@/components/BaiVietLienQuan/RelatedPosts'
import './cam-nang-du-hoc.css'

const AbroadGuideIndex = ({lang, res}) => {
  const [h2Texts, setH2Texts] = useState([])
  const pageLang = lang.study_abroad_guide
  const createdDay = new Date(res.post_date)
  const dayOfWeek = createdDay.getMonth()

  const handleScrollToContent = (e) => {
    const indexOfSectionToScroll = parseInt(e.target.id)
    const h2Elements = document.querySelectorAll('.content-wrapper h2')
    Array.from(h2Elements)[indexOfSectionToScroll].scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'start',
    })
  }

  // time display
  const time =
    createdDay.getDate() +
    '/' +
    (createdDay.getMonth() + 1) +
    '/' +
    createdDay.getFullYear()

  useEffect(() => {
    const h2Elements = document.querySelectorAll('.content-wrapper h2')
    const headings = []
    if (h2Elements.length > 0) {
      h2Elements.forEach((element) => {
        headings.push(element.textContent)
      })
    }
    setH2Texts(headings)
  }, [])
  return (
    <main>
      <h1 className='text-primary-50 text-[1.875rem] font-extrabold leading-[120%]'>
        {res.post_title}
      </h1>
      <div className='text-[1rem] font-semibold leading-[170%] text-primary-50 mt-[1.44rem]'>
        <span>Thứ {dayOfWeek + 1}</span>-<span>{time}</span>
      </div>
      {/* table of contents */}
      <div className='my-[2rem] p-[1.875rem] border border-[#2B46A8] rounded-[0.5rem] bg-[rgba(43, 70, 168, 0.04)]'>
        <h2 className='mb-[1rem] !mt-0 text-[#2B46A8] text-[1.25rem] font-bold leading-[130%]'>
          Nội dung chính
        </h2>
        <ul>
          {h2Texts.map((headingItem, index) => (
            <li
              onClick={handleScrollToContent}
              key={index}
              id={`${index}`}
              className='mb-[0.5rem] text-greyscaletext-60 text-[1rem] font-semibold leading-[150%] cursor-pointer'
            >
              {index + 1}. {headingItem}
            </li>
          ))}
        </ul>
      </div>
      {/* content*/}
      <section
        className='content-wrapper self-stretch text-greyscaletext-60 text-[1rem] font-medium leading-[150%]'
        dangerouslySetInnerHTML={{__html: res.post_content}}
      ></section>
      <RelatedPosts lang={lang} />
    </main>
  )
}

export default AbroadGuideIndex
