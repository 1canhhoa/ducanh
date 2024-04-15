import Image from 'next/image'
import Link from 'next/link'
import NavUp from './components/NavUp'
import NavDown from './components/NavDown'
import { handleViewPort } from '@/lib/utils'
export default function NavPrimary() { 

  return (
    <header className='fixed w-full z-[1000] top-0 flex border border-greyscaletext-5 bg-white justify-center items-center'>
      <div className=" md:w-[100rem] xlg:w-full md:h-[9.6875rem] xlg:relative flex items-center justify-center shrink-0">
        <div className='flex items-center xmd:!px-[0.75rem] xlg:px-[4.75rem]  xmd:py-[0.75rem] xlg:w-full xlg:justify-between md:space-x-[3.94rem]'>
          <Link
            id='logo_nav'
            href='/'
          >
            <Image priority alt="ảnh logo du học đức anh" src={'/images/navPrimary/logo.svg'} width={235} height={69}
              className="xmd:w-[7rem] xmd:h-[1.9375rem] xlg:w-[19rem] xlg:h-[6.9375rem]   w-[14.5625rem] h-[4.271rem]" />
          </Link>

          <div className="xlg:absolute xlg:hidden top-[10rem] flex flex-col xlg:items-start items-end space-y-[1.44rem]">
            <NavUp />
            <NavDown />
          </div>
          <div className="flex lg:hidden bg-elevation-20 xmd:size-[2rem] xlg:size-[6.5rem] justify-center items-center gap-[0.2rem] p-[0.4rem] rounded-[5rem]">
            <Image
              loading='lazy'
              className="xmd:size-[1rem] xlg:size-[3rem] size-[1rem]" alt="icon menu header" src={'/images/navPrimary/menu.png'}
              width={handleViewPort(16, 48, 16)}
              height={handleViewPort(16, 48, 16)} />
          </div>
        </div>

      </div>
    </header>
  )
}
