'use client'

import Image from 'next/image'
const Pagination = ({pageChangeCallback, page = 1, pageCount = 1}) => {
  const pages = []
  for (let i = 1; i <= Number(pageCount); i++) {
    pages.push(i)
  }
  // console.log({page, pageCount: Number(pageCount), pages})

  const handlePageButtonClick = (pageNum = 1, action = 'page') => {
    if (action === 'prev') {
    }
  }

  return (
    <section className='p-[1.3125rem_2rem_0rem_2rem] bg-white mt-[2.4rem] w-full'>
      <nav className='pagination-wrapper flex items-center justify-center'>
        <button
          className='p-[0.69269rem] grid place-items-center mr-[0.5rem]'
          onClick={() =>
            handlePageButtonClick(Number(page) > 1 ? Number(page) - 1 : 1)
          }
        >
          <Image
            src={'/images/primary/Chevron_Left.svg'}
            width={100}
            height={100}
            className='w-[1rem] h-[1rem]'
            priority
            alt='prev-btn'
          />
        </button>
        <button className='rounded-lg bg-primary-5 border border-primary-10 mr-[0.5rem] p-[0.625rem] flex items-center'>
          <div className='w-[1.125rem] h-[1.125rem] text-primary-50 text-[0.875rem] font-bold uppercase leading-[1.125rem]'>
            1
          </div>
        </button>
        <button className='rounded-lg bg-white border border-primary-10 mr-[0.5rem] p-[0.625rem] flex items-center'>
          <div className='w-[1.125rem] h-[1.125rem] text-primary-50 text-[0.875rem] font-bold uppercase leading-[1.125rem]'>
            2
          </div>
        </button>
        <span className='inline-block mr-[0.5rem] p-[0.625rem] text-primary-50 text-[0.875rem] font-bold uppercase leading-[1.125rem]'>
          ...
        </span>
        <button className='rounded-lg bg-white border border-primary-10 mr-[0.5rem] p-[0.625rem] flex items-center'>
          <div className='w-[1.125rem] h-[1.125rem] text-primary-50 text-[0.875rem] font-bold uppercase leading-[1.125rem]'>
            3
          </div>
        </button>
        <button className='p-[0.69269rem] grid place-items-center'>
          <Image
            src={'/images/primary/Chevron_Right.svg'}
            width={100}
            height={100}
            className='w-[1rem] h-[1rem]'
            priority
            alt='next-btn'
          />
        </button>
      </nav>
    </section>
  )
}

export default Pagination
