import NavSecond from '@/layout/navSecond/NavSecond'

export default function SecondLayout({children}) {
  return (
    <div className='pt-[9.69rem]'>
      <NavSecond />
      {children}
    </div>
  )
}
