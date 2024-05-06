'use client'
import {useState} from 'react'
const CustomSelect = ({
  items = [],
  callback,
  showLabel = true,
  selectedItem,
  id = '',
  mark = false,
  placeholder = 'Chọn quốc gia',
}) => {
  return (
    <div className='mt-[2rem] cursor-pointer mb-[0.7rem] relative rounded-lg border border-primary-40 flex h-[3rem] p-[0.625rem_1rem] items-center'>
      <Image
        src={'/images/primary/AlignBottom_color.svg'}
        alt={'duc-anh'}
        width={100}
        height={100}
        className={'w-[1.25rem] h-[1.25rem] object-cover mr-[0.62rem]'}
        priority
      />
      <label
        onClick={() => handleToggleSelect(id)}
        className='font-bold text-[0.875rem] cursor-pointer leading-[100%] tracking-[0.013rem] uppercase absolute top-0 left-[3.12rem] flex items-center bg-white w-[calc(100%-3.12rem*2)] h-full'
      >
        {showLabel ? (
          country.name
        ) : (
          <>
            {placeholder} {mark && <span className='text-secondary-50'>*</span>}
          </>
        )}
      </label>
      {activeSelect.id === 'country' && activeSelect.enabled && (
        <div className='absolute w-full left-0 top-[calc(100%+0.5rem)] bg-white py-[0.5rem]'>
          {items?.map((item, index) => (
            <div
              key={index}
              className='p-[0.5rem_1rem] hover:bg-greyscaletext-10 duration-150 text-[0.875rem] cursor-pointer leading-[100%] tracking-[0.013rem] uppercase'
              onClick={() => callback(item)}
            >
              {item?.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CustomSelect
