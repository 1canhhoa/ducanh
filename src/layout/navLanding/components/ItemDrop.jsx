'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function ItemDrop() {
  return (
    <Accordion
      type='single'
      collapsible
    >
      <AccordionItem
        value='item-1'
        className='relative border-0'
      >
        <AccordionTrigger className='text-white'>
          <span className='menu14 font-medium text-white mr-[0.25rem]'>
            ve chung toi
          </span>
        </AccordionTrigger>
        <AccordionContent className='absolute bg-white'>
          <div className=''>
            <ul className='flex flex-col'>
              <li>Yes. It adheres to the WAI-ARIA design pattern.</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
