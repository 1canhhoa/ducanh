'use client'

import Image from 'next/image'
import {useEffect, useRef, useState} from 'react'

export default function CradDrop({setItemCard, itemCard, index}) {
  const [heightItem, setHeightItem] = useState(0)
  const itemRef = useRef(null)
  useEffect(() => {
    setHeightItem(
      itemRef.current.querySelector('.item').getBoundingClientRect().height,
    )
  })
  return (
    <button
      onClick={() => {
        itemCard == index ? setItemCard(-1) : setItemCard(index)
      }}
      className='w-full bg-white flex py-[1rem] pl-[1.5rem] h-fit pr-[1rem] flex-col items-start justify-center rounded-[1rem] border-[1px] border-[rgba(52,104,205,0.40)] border-solid'
    >
      <span className='flex-1 flex justify-between w-full text-[1.125rem] font-bold leading-[1.6] text-primary-50'>
        {index + 1}. Năng lực hỗ trợ sinh viên tốt:
        <div className='size-[1.25rem] flex justify-center items-center'>
          <Image
            className='h-[0.6875rem] w-[0.875rem]'
            alt='down'
            src={'/images/thongtinduhoc/down.svg'}
            width={6}
            height={3}
          />
        </div>
      </span>
      <div
        ref={itemRef}
        style={
          itemCard == index
            ? {height: `${heightItem}px`, marginTop: '1rem'}
            : {height: '0px'}
        }
        className={`text-greyscaletext-60 transition-all overflow-hidden duration-300 text-start text-[1rem] font-normal leading-[1.7]`}
      >
        <p className='item h-fit'>
          <span className='text-[1rem] font-bold leading-[1.7] text-primary-60'>
            Thực tế thì:
          </span>
          Mỗi hồ sơ là một trường hợp du học riêng biệt, từ học lực, tài chính,
          kỹ năng… đến các yếu tố khác, trong khi website trường hay bộ di trú
          chỉ có các hướng dẫn & giải đáp chung, mà không có hướng dẫn chi tiết-
          cụ thể cho trường hợp của bạn. Vì vậy nếu chưa đủ hiểu biết, bạn không
          nên liều, mà nên có 1 công ty tư vấn du học (agent) có kinh nghiệm
          đồng hành để đảm bảo phần thắng cao.
        </p>
      </div>
    </button>
  )
}
