'use client'
import {useState} from 'react'
import clsx from 'clsx'
const MobileTableOfContents = ({list}) => {
  const TABLE_OF_CONTENTS_ITEMS = []
  Object.entries(list).forEach((item) => {
    TABLE_OF_CONTENTS_ITEMS.push(item[1])
  })
  const [IDActive, setIDActive] = useState(0)
  const handleChangeIDActive = ({index, id}) => {
    setIDActive(index)
    const elementToScroll = document.getElementById(id)
    elementToScroll?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    })
  }
  return (
    <nav
      id='table-of-contents'
      className='md:hidden h-3rem fixed top-[3.5rem] z-10 bg-white w-full flex items-center overflow-x-auto py-[0.38rem] no-scrollbar'
    >
      {TABLE_OF_CONTENTS_ITEMS.map((totItem, index) => {
        return (
          <div
            key={totItem.id}
            onClick={() => handleChangeIDActive({index, id: totItem.id})}
            className={clsx(
              'whitespace-nowrap py-[1rem] px-[0.75rem] ml-[1.25rem] rounded-lg text-[0.7rem] font-bold leading-[100%] tracking-[0.1rem] uppercase duration-200',
              {
                'bg-primary-40 text-white': IDActive === index,
                'bg-primary-5 text-primary-70': IDActive !== index,
              },
            )}
          >
            {totItem.title}
          </div>
        )
      })}
    </nav>
  )
}

export default MobileTableOfContents
