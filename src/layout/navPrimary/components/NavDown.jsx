'use client'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link"
const NavDown = ({ data_header }) => {
  return (
    <ul className='flex items-center w-full justify-between'>
      {data_header?.nav_down?.map((d, i) => (
        <HoverCard openDelay={0} closeDelay={0} key={i}>
          <HoverCardTrigger asChild>
            {d?.children?.length > 0 ? (
              <li key={i} className="button1 hover:text-[#BE3136] duration-200 ease-linear text-primary-60 uppercase cursor-pointer">
                {d?.title}
              </li>
            ) : (
              <Link href={d?.url}>
                <li key={i} className="button1 hover:text-[#BE3136] duration-200 ease-linear text-primary-60 uppercase cursor-pointer">
                  {d?.title}
                </li>
              </Link>
            )}
          </HoverCardTrigger>
          {d?.children?.length > 0 && <HoverCardContent className='pt-6'>

            <ul className="flex bg-[#3468CD] w-[20.4246rem] flex-col items-start space-y-[0.14641rem] shadow-[0px_4px_12px_0px_rgba(78,145,246,0.15)] p-[0.58565rem] rounded-[1.1713rem]">
              {d?.children && d?.children?.map((a, i) => (
                <Link className="w-full" href={`/${a?.url}`}>
                <li className="flex group hover:bg-white cursor-pointer items-center duration-300 ease-linear gap-[0.73206rem] self-stretch px-[0.73206rem] py-[0.43924rem] rounded-[0.43924rem]" key={i}>
                    <div className="text-white group-hover:text-[#3468CD] duration-100 ease-linear text-[1.02489rem] not-italic font-semibold leading-[150%] w-max">{a?.title}</div>
                </li>
                </Link>
              ))}
            </ul>
          </HoverCardContent>}
        </HoverCard>
      ))}

      <button
        className='flex justify-center items-center py-[0.625rem] px-[1.25rem] 
        rounded-[2.5rem] bg-primary-60 button1 uppercase text-white'
      >
        Nộp hồ sơ online
      </button>
    </ul>
  )
}

export default NavDown
