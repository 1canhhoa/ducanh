'use client'
import Image from 'next/image'
import Link from 'next/link'
import NavUp from './components/NavUp'
import NavDown from './components/NavDown'
import { handleViewPort } from '@/lib/utils'
import { useState, useEffect } from 'react'
import NavMobi from './components/NavMobi'
export default function NavPrimary({ data_header }) {
  const [isHidden, setIsHidden] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [openNavMobile, setOpenNavMobile] = useState(false)
  const [isPopupMounted, setIsPopupMounted] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const isScrolledDown = currentScrollPos > prevScrollPos

      setIsHidden(isScrolledDown && currentScrollPos > 500)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])
  // ẩn scroll sau popup
  useEffect(() => {
    if (window.innerWidth < 1200) {
      if (openNavMobile) {
        document.documentElement.style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = 'initial'
        document.body.style.overflow = 'initial'
      }
    }
  }, [openNavMobile])

  const handleOpenNav = () => {
    setOpenNavMobile(true);
    setTimeout(() => {
      setIsPopupMounted(true);
    }, 10)
  }
  const handleCloseNav = () => {
    setIsPopupMounted(false);
    setTimeout(() => {
      setOpenNavMobile(false);
    }, 300)
  }
  return (
    <header className={`${isHidden ? '-translate-y-full' : 'translate-y-0'}  transition-transform duration-700 fixed w-full z-[100] top-0 flex bg-white justify-center items-center`}>
      <div className=" md:w-[100rem] xlg:w-full xlg:relative flex items-center justify-center shrink-0">

        <div className='flex items-center xmd:!px-[0.75rem] xlg:px-[4.75rem]  xmd:py-[0.75rem] xlg:w-full xlg:justify-between md:space-x-[11.12rem]'>
          <Link
            id='logo_nav'
            href='/'
          >
            <Image
              priority
              alt='ảnh logo du học đức anh'
              src={data_header?.logo}
              width={235}
              height={69}
              className='xmd:w-[8.19912rem] xmd:h-[2.2694rem] xlg:w-[19rem] xlg:h-[6.9375rem]   w-[10.65513rem] h-[3.125rem]'
            />
          </Link>

          <div className='xlg:absolute py-[1rem] xlg:hidden top-[10rem] flex flex-col xlg:items-start items-end space-y-[0.875rem]'>
            <NavUp data_header={data_header} />
            <NavDown data_header={data_header} />
          </div>
          <NavMobi
            handleCloseNav={handleCloseNav}
            handleOpenNav={handleOpenNav}
            setOpenNavMobile={setOpenNavMobile}
            openNavMobile={openNavMobile}
            isPopupMounted={isPopupMounted}
            data_header={data_header}
          />

          <div
            onClick={handleOpenNav}
            className='flex lg:hidden bg-elevation-20 xmd:size-[2rem] xlg:size-[6.5rem] justify-center items-center gap-[0.2rem] p-[0.4rem] rounded-[5rem]'
          >
            <Image
              loading='lazy'
              className='xmd:size-[1rem] xlg:size-[3rem] size-[1rem]'
              alt='icon menu header'
              src={'/images/navPrimary/menu.png'}
              width={handleViewPort(16, 48, 16)}
              height={handleViewPort(16, 48, 16)}
            />
          </div>
        </div>
      </div>

    </header>
  )
}
