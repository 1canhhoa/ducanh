import Link from "next/link"

const NavDown = ({ data_header }) => {
  const data2 = [
    { id: 0, title: 'về chúng tôi' },
    { id: 1, title: 'thông tin du học' },
    { id: 2, title: 'học bổng' },
    { id: 3, title: 'thi pte academic' },
    { id: 4, title: 'học tiếng anh' },
    { id: 5, title: 'việc làm - định cư' },
    { id: 6, title: 'cộng đồng' },
  ]
  return (
    <ul className='inline-flex xlg:items-start xlg:flex-col items-center lg:space-x-[1.5rem]'>
      {data_header?.nav_down?.map((d, i) => (
        <Link href={d?.url}>
          <li key={i} className="button1 text-primary-60 uppercase">
            {d?.title}
          </li>
        </Link>
      ))}

      <button className='flex justify-center items-center py-[0.625rem] px-[1.25rem] 
        rounded-[2.5rem] bg-primary-60 button1 uppercase text-white'>
        Nộp hồ sơ online
      </button>
    </ul>
  )
}

export default NavDown
