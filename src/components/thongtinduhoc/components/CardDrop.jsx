'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import clsx from 'clsx'

export default function CradDrop({index, only = false, width, column, data}) {
  return (
    <Accordion
      className={clsx('accor', width ? `w-[${width}rem]` : 'w-full')}
      type='single'
      collapsible
    >
      <AccordionItem
        className='border-[1px] border-[rgba(52,104,205,0.40)] py-[1rem] pl-[1.5rem] pr-[1rem] border-solid rounded-[0.75rem]'
        value={index + 1}
      >
        <AccordionTrigger className='accortrigger text-primary-50 sub18 xmd:text-[1.125rem] xlg:text-[1.5rem] font-bold p-0 flex justify-between items-start text-start'>
          {column ? index + column : index + 1} {'. '} {data.title}
        </AccordionTrigger>
        <AccordionContent>
          <p className='item h-fit text-greyscaletext-60 mt-[1rem] transition-all overflow-hidden duration-300 text-start text-[1rem] xmd:text-[1rem] xlg:text-[1.25rem] font-normal leading-[1.7]'>
            <div
              className='tulamhoso'
              dangerouslySetInnerHTML={{__html: data?.description}}
            />
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
