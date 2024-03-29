import Image from 'next/image'
import React from 'react'

export default function Future() {
  return (
    <div className='w-[76.875rem] h-[25rem] mx-auto'>
      <Image
        className='object-cover size-full'
        src={'/images/future/demo.jpg'}
        alt='Future'
        width={1200}
        height={300}
      />
    </div>
  )
}
