'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import clsx from 'clsx'

export default function CradDrop({index, width, column}) {
  return (
    <Accordion
      className={clsx('accor', width ? `w-[${width}rem]` : 'w-full')}
      type='single'
      collapsible
    >
      <AccordionItem
        className='border-[1px] border-[rgba(52,104,205,0.40)] py-[1rem] pl-[1.5rem] pr-[1rem] border-solid rounded-[0.75rem]'
        value='item-1'
      >
        <AccordionTrigger className='accortrigger text-primary-50 sub18 xmd:text-[1.125rem] xlg:text-[1.5rem] font-bold p-0'>
          {column ? index + column : index + 1}. Năng lực hỗ trợ sinh viên tốt:
        </AccordionTrigger>
        <AccordionContent>
          <p className='item h-fit text-greyscaletext-60 mt-[1rem] transition-all overflow-hidden duration-300 text-start text-[1rem] xmd:text-[1rem] xlg:text-[1.25rem] font-normal leading-[1.7]'>
            <span className='text-[1rem] xmd:text-[1rem] xlg:text-[1.25rem] font-bold leading-[1.7] text-primary-60'>
              Thực tế thì:
            </span>
            Mỗi hồ sơ là một trường hợp du học riêng biệt, từ học lực, tài
            chính, kỹ năng… đến các yếu tố khác, trong khi website trường hay bộ
            di trú chỉ có các hướng dẫn & giải đáp chung, mà không có hướng dẫn
            chi tiết- cụ thể cho trường hợp của bạn. Vì vậy nếu chưa đủ hiểu
            biết, bạn không nên liều, mà nên có 1 công ty tư vấn du học (agent)
            có kinh nghiệm đồng hành để đảm bảo phần thắng cao.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
