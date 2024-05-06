import NavDirectional from '@/layout/navDirectional/NavDirectional'
import NavDirectional2 from '@/layout/navDirectional/NavDirectional2'
import WrapperNavPrimary from "@/layout/navPrimary/WrapperNavPrimary";
export default function SecondLayout({ children }) {
  return (
    <div className='pt-[9.69rem]'>
      <WrapperNavPrimary />
      {/* <NavDirectional /> */}
      {/* <NavDirectional2 /> */}
      {children}
    </div>
  )
}
