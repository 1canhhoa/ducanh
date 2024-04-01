import Image from 'next/image'
import Link from 'next/link'

export default function NavPrimary() {
  return (
    <header className='flex items-center bg-white fixed z-[999] top-0 left-0 w-full h-[9.69rem]'>
      {/* <Link
        href={'/'}
        className='w-[14.5625rem] h-[4.271rem] block'
      >
        <Image
          className='object-contain size-full'
          src={'/navPrimary/logo.svg'}
          alt='logo duc anh'
          width={240}
          height={70}
        />
      </Link>
      <nav className='w-full text-center title'>NavPrimary</nav> */}
      <Image
        className='object-fill size-full'
        src={'/images/navPrimary/demo.jpg'}
        alt='nav'
        width={1600}
        height={100}
      />
    </header>
  )
}
