import NavDirectional from '@/layout/navDirectional/NavDirectional'
import NavDirectional2 from '@/layout/navDirectional/NavDirectional2'
import NavSecond from '@/layout/navSecond/NavSecond'

export default function SecondLayout({children}) {
  return (
    <div className='pt-[9.69rem]'>
      <NavSecond />
      {/* <NavDirectional /> */}
      {/* <NavDirectional2 /> */}
      {children}
    </div>
  )
}
