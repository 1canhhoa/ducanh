'use client'
import clsx from 'clsx'
import {useState} from 'react'

const SectionTabs = ({tabLabels = [], className = '', selectChange}) => {
  // console.log({tabLabels})
  const [activeIndex, setActiveIndex] = useState(0)
  const handleActiveIndexChange = (index) => {
    setActiveIndex(index)
    selectChange(index)
  }
  return (
    <section className={className}>
      <nav
        className='flex items-center w-full no-scrollbar xmd:pl-[0.75rem] xmd:overflow-x-auto xmd:p-[0.5rem] p-[0.25rem] 
      xmd:border-none border border-primary-20 bg-white rounded-xl'
      >
        {tabLabels?.map((tabLabel, index) => {
          return (
            <div
              key={index}
              onClick={() => handleActiveIndexChange(index)}
              className={clsx(
                `ml-[0.5rem] first:ml-0 rounded-lg xmd:p-[0.75rem] p-[0.625rem_1.25rem] h-[2.625rem] xmd:whitespace-nowrap 
             xmd:text-[0.75rem] text-[0.875rem] md:flex-1 text-center xmd:font-semibold font-bold xmd:leading-[100%] leading-[120%] 
               flex items-center justify-center select-none cursor-pointer`,
                activeIndex === index &&
                  'xmd:bg-primary-40 bg-primary-10 xmd:text-white text-primary-50',
                activeIndex !== index &&
                  'bg-white xmd:bg-primary-5 text-greyscaletext-30 xmd:text-primary-50',
              )}
            >
              {tabLabel}
            </div>
          )
        })}
      </nav>
      <div></div>
    </section>
  )
}

export default SectionTabs
