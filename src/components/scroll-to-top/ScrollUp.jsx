'use client'
import React, { useEffect, useRef } from 'react'
function ScrollUp() {
  const arrowRef = useRef()

  useEffect(() => {
    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    window.addEventListener('click', (e) => {
      if (e.target === arrowRef?.current) {
        handleClick()
      }
    })
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])
  return (

    <div
      ref={arrowRef}
      className='flex h-[1.5rem] cursor-pointer justify-center items-center space-x-[0.625rem] rounded-[0.625rem]'>
      <div
        className='button2 text-white pointer-events-none'>Back to top</div>
      <svg
        className='xmd:hidden size-[1.5rem] pointer-events-none'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
      >
        <path
          d='M5 16L12 9L19 16'
          stroke='white'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
      <svg
        className='md:hidden size-[1.5rem] pointer-events-none'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='25'
        viewBox='0 0 24 25'
        fill='none'
      >
        <path
          d='M12 19.1875V5.1875M12 5.1875L6 11.1875M12 5.1875L18 11.1875'
          stroke='white'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </div>
  )
}

export default ScrollUp