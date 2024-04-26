import Image from 'next/image'
import Link from 'next/link'
import Search from './Search'
import {useState} from 'react'
const NavMobi = ({openNavMobile, data_header, setOpenNavMobile}) => {
  const [accordionOpen, setAccordionOpen] = useState(false)
  const [active, setActive] = useState(false)
  const handleClick = (i) => {
    if (active === i) {
      setAccordionOpen(false)
      setActive(-1)
    } else {
      setAccordionOpen(true)
      setActive(i)
    }
  }
  const handleClickItem = () => {
    setOpenNavMobile(false)
    setAccordionOpen(false)
  }
  return (
    <div
      className={
        'block overflow-y-auto no-scrollbar h-screen w-screen fixed top-0 bottom-0 left-0 z-[999999]] bg-white lg:hidden ease-in-out transition-all duration-300' +
        (openNavMobile ? 'left-0' : ' left-[100%]')
      }
    >
      <div className='flex w-full bg-white h-[4.09956rem] justify-between items-start p-[0.87848rem] border-b-2 border-b-white border-solid'>
        <Link
          id='logo_nav'
          href='/'
        >
          <Image
            onClick={handleClickItem}
            priority
            alt='ảnh logo du học đức anh'
            src={data_header?.logo}
            width={235}
            height={69}
            className='xmd:w-[8.19912rem] xmd:h-[2.2694rem] xlg:w-[19rem] xlg:h-[6.9375rem]   w-[10.65513rem] h-[3.125rem]'
          />
        </Link>
        <div
          onClick={() => setOpenNavMobile(false)}
          className='flex justify-start items-center gap-[0.87848rem] p-[0.43924rem]'
        >
          <svg
            className='size-[1.46413rem]'
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
          >
            <path
              d='M15 15L10 10M10 10L5 5M10 10L15 5M10 10L5 15'
              stroke='#A9A9A9'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </div>
      </div>
      <Search />
      <div className='flex  items-start gap-2.5 self-stretch pt-10 pb-5 px-5'>
        <ul className='flex h-full flex-col space-y-[1.5rem] items-start'>
          {data_header?.nav_down?.map((d, i) => (
            <div key={i}>
              <div className="w-full mb-[1.5rem]">
                <div onClick={() => handleClick(i)} className={'flex group rounded-full justify-between items-center '}>
                  <li key={i} className='flex h-5 space-x-[0.75rem] items-start self-stretch'>
                    <div className="text-[color:var(--PRIMARY-60,#132B7D)] text-sm not-italic font-bold leading-[120%] uppercase">
                      {d?.title}
                    </div>
                    <div className='flex w-5 h-5 justify-center items-center'>
                      <svg
                        className={`${
                          accordionOpen && active === i
                            ? 'rotate-180'
                            : 'rotate-360'
                        } duration-200 ease-linear w-[0.525rem] h-[0.525rem]`}
                        xmlns='http://www.w3.org/2000/svg'
                        width='8'
                        height='6'
                        viewBox='0 0 8 6'
                        fill='none'
                      >
                        <path
                          d='M1 1.5L4 4.5L7 1.5'
                          stroke='#132B7D'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </div>
                  </li>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm 
                        ${
                          accordionOpen && active === i
                            ? 'grid-rows-[1fr] opacity-100'
                            : 'grid-rows-[0fr] opacity-0'
                        }`}
                >
                  <div className='overflow-hidden'>
                    <div className='flex-col pt-[0.7rem] flex items-start space-y-[1rem]'>
                      {d?.children && d?.children?.map((c, i) => (
                        <Link href={c?.url}>
                          <div onClick={handleClickItem}
                            key={i} className='text-sm font-light text-greyscaletext-50'>
                            {c?.title}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {i !== data_header?.nav_down?.length - 1 && (
                <div
                  div
                  className='w-[20.9375rem] h-[0.0625rem] bg-[#ECECEC]'
                ></div>
              )}
            </div>
          ))}

          <button className='flex bg-primary-60 justify-center items-center px-4 py-2.5 rounded-[2.5rem]'>
            <div className='text-white text-[0.75rem] font-semibold leading-[1.2]'>
              Nộp hồ sơ online
            </div>
          </button>
        </ul>
      </div>
    </div>
  )
}

export default NavMobi
