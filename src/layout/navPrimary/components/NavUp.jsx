import Image from 'next/image'
import Link from 'next/link'
import Search from './Search'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
const NavUp = ({ data_header }) => {
  const [active, setActive] = useState(-1)
  const pathName = usePathname()
  const handleActive = (i) => {
    setActive(i)
  }
  return (
    <div className='flex items-center xlg:items-start xlg:flex-col lg:space-x-[4rem]'>
      <Search />
      {/* NAV,LANG AND SOCIAL */}
      <div className='flex items-center xlg:items-start xlg:flex-col space-x-[1rem]'>
        {data_header?.nav_up?.map((d, i) => (
          <Link key={i} href={d?.url}>
            <div
              onClick={() => handleActive(i)}
              key={i}
              className={(pathName.includes(d?.url) ? 'text-[#BE3136] ' : 'text-primary-60') + ' button2 hover:text-[#BE3136]  duration-200 ease-linear  uppercase  font-bold flex h-[2.25rem] justify-center items-center px-[0.5rem] py-[0.625rem]'}
            >
              {d?.title}
            </div>
          </Link>
        ))}
        <div className='inline-flex items-center space-x-[4rem]'>
          <div className="flex items-start space-x-[0.75rem]">
            <Image loading='lazy' alt="ảnh ngôn ngữ tiếng việt" src={'/images/navPrimary/vn.jpeg'} width={5228} height={5228} className="w-[1.125rem] h-[1.125rem]" />
            <Image loading='lazy' alt="ảnh ngôn ngữ tiếng anh" src={'/images/navPrimary/en.jpeg'} width={18} height={18} className="w-[1.125rem] h-[1.125rem]" />
          </div>
          <div className='flex items-start gap-[0.75rem]'>
            <Image loading='lazy' alt="ảnh social facebook" src={'/images/navPrimary/fb.svg'} width={24} height={24} className="w-[1.5rem] h-[1.5rem]" />
            <Image loading='lazy' alt="ảnh social twitter" src={'/images/navPrimary/tw.svg'} width={24} height={24} className="w-[1.5rem] h-[1.5rem]" />
            <Image loading='lazy' alt="ảnh social youtube" src={'/images/navPrimary/yt.svg'} width={24} height={24} className="w-[1.5rem] h-[1.5rem]" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default NavUp
