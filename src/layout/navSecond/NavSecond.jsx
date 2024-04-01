import Image from 'next/image'

export default function NavSecond() {
  return (
    <header className='flex items-center bg-white fixed z-[999] top-0 left-0 w-full h-[8.88rem]'>
      <Image
        className='object-fill size-full'
        src={'/images/navSecond/demo.jpg'}
        alt='nav'
        width={1600}
        height={100}
      />
    </header>
  )
}
