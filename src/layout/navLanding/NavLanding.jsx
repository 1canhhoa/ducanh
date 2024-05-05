import Image from 'next/image'
import ItemDrop from './components/ItemDrop'

export default function NavLanding() {
  return (
    <nav className='w-full h-[5.75rem] xmd:h-[3.5rem]'>
      <div className='size-full bg-primary-60 flex items-center justify-between pl-[10.19rem] pr-[11.69rem] xmd:px-[0.75rem] xmd:py-[0.8125rem] xmd:pb-[0.75rem]'>
        <Image
          className='h-[3.0625rem] w-[10.3125rem] xmd:h-[1.9375rem] xmd:w-[7rem]'
          alt='logo du học đức anh landing page sự kiệnkiện'
          src={'/images/landing/logo.svg'}
          width={165}
          height={49}
        />
        <div className='xmd:hidden flex space-x-[2rem]'>
          <ItemDrop />
          <button className='py-[0.625rem] px-[1rem] flex justify-center items-center rounded-[2.5rem] bg-white body12 font-semibold text-primary-50'>
            Đăng ký ngay
          </button>
        </div>
        <div className='lg:hidden w-[1.5625rem] h-[0.97656rem]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='16'
            viewBox='0 0 25 16'
            fill='none'
          >
            <rect
              width='25'
              height='3.125'
              rx='1.5625'
              fill='white'
            />
            <rect
              y='6.25'
              width='25'
              height='3.125'
              rx='1.5625'
              fill='white'
            />
            <rect
              y='12.5'
              width='25'
              height='3.125'
              rx='1.5625'
              fill='white'
            />
          </svg>
        </div>
      </div>
    </nav>
  )
}
