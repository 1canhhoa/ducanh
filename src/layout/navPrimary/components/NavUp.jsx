<<<<<<< HEAD
import React from 'react'
import Image from 'next/image'
const NavUp = () => {
  const data = [
    {id: 0, title: 'Nghề HOT'},
    {id: 1, title: 'Hợp Tác'},
    {id: 2, title: 'Trắc Nghiệm Nghề Nghiệp'},
    {id: 3, title: 'Tuyển Dụng'},
  ]
  return (
    <div className='flex items-center xlg:items-start xlg:flex-col lg:space-x-[2.38rem]'>
      {/* SEARCH */}
      <div className='flex justify-between lg:w-[28rem] items-center  pl-[1rem]  rounded-[0.5rem] border-primary-10 border'>
        <input
          type='text'
          className=' w-[17.8125rem] placeholder:text-[0.875rem] placeholder:font-light placeholder:tracking-[0.00875rem] outline-none text-greyscaletext20'
          placeholder='Tìm thông tin về trường, học bổng, tin tức...'
        />
        <div className='flex justify-center items-center flex-col w-[3rem] h-[2.875rem] gap-[0.625rem] shrink-0 rounded-br-[0.5rem] rounded-tr-[0.5rem] bg-primary-5'>
          <svg
            className='size-[1.5rem]'
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
              stroke='#3468CD'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M20.9984 20.9984L16.6484 16.6484'
              stroke='#3468CD'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>
      {/* NAV,LANG AND SOCIAL */}
      <div className='flex items-center xlg:items-start xlg:flex-col lg:space-x-[1rem]'>
        {data.map((d, i) => (
          <div
            key={i}
            className='button2 text-primary-60 font-bold flex h-[2.25rem] justify-center items-center px-[0.5rem] py-[0.625rem]'
          >
            {d.title}
          </div>
        ))}
        <div className='inline-flex items-center space-x-[3.3125rem]'>
          <div className='flex items-start space-x-[0.75rem]'>
            <Image
              priority
              alt='ảnh ngôn ngữ tiếng việt'
              src={'/images/navPrimary/vn.jpeg'}
              width={5228}
              height={5228}
              className='w-[1.125rem] h-[1.125rem]'
            />
            <Image
              priority
              alt='ảnh ngôn ngữ tiếng anh'
              src={'/images/navPrimary/en.jpeg'}
              width={18}
              height={18}
              className='w-[1.125rem] h-[1.125rem]'
            />
          </div>
          <div className='flex items-start gap-[0.75rem]'>
            <Image
              priority
              alt='ảnh social facebook'
              src={'/images/navPrimary/fb.svg'}
              width={24}
              height={24}
              className='w-[1.5rem] h-[1.5rem]'
            />
            <Image
              priority
              alt='ảnh social twitter'
              src={'/images/navPrimary/tw.svg'}
              width={24}
              height={24}
              className='w-[1.5rem] h-[1.5rem]'
            />
            <Image
              priority
              alt='ảnh social youtube'
              src={'/images/navPrimary/yt.svg'}
              width={24}
              height={24}
              className='w-[1.5rem] h-[1.5rem]'
            />
=======
import Image from 'next/image'
import Link from 'next/link'
import Search from './Search'
const NavUp = ({ data_header }) => {
  return (
    <div className='flex items-center xlg:items-start xlg:flex-col lg:space-x-[4rem]'>
      <Search />
      {/* NAV,LANG AND SOCIAL */}
      <div className='flex items-center xlg:items-start xlg:flex-col space-x-[1rem]'>
        {data_header?.nav_up?.map((d, i) => (
          <Link href={d?.url}>
            <div
              key={i}
              className='button2 hover:text-[#BE3136]  duration-200 ease-linear  uppercase text-primary-60 font-bold flex h-[2.25rem] justify-center items-center px-[0.5rem] py-[0.625rem]'
            >
              {d?.title}
            </div>
          </Link>
        ))}
        <div className='inline-flex items-center space-x-[4rem]'>
          <div className="flex items-start space-x-[0.75rem]">
            <Image loading='lazy' alt="ảnh ngôn ngữ tiếng việt" src={'/images/navPrimary/vn.jpeg'} width={5228} height={5228} className="w-[1.125rem] h-[1.125rem]" />
            <Image loading='lazy' alt="ảnh ngôn ngữ tiếng anh" src={'/images/navPrimary/en.jpeg'} width={18} height={18} className="w-[1.125rem] h-[1.125rem]" />
          </div>
          <div className='flex items-start gap-[0.75rem]'>
            <Image loading='lazy' alt="ảnh social facebook" src={'/images/navPrimary/fb.svg'} width={24} height={24} className="w-[1.5rem] h-[1.5rem]" />
            <Image loading='lazy' alt="ảnh social twitter" src={'/images/navPrimary/tw.svg'} width={24} height={24} className="w-[1.5rem] h-[1.5rem]" />
            <Image loading='lazy' alt="ảnh social youtube" src={'/images/navPrimary/yt.svg'} width={24} height={24} className="w-[1.5rem] h-[1.5rem]" />

>>>>>>> master
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavUp
