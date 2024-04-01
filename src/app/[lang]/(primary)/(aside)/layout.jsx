import AsidePrimary from '@/layout/asidePrimary/AsidePrimary'
import {headers} from 'next/headers'
export default function AsideLayout({children}) {
  const headersList = headers()
  const userAgent = headersList.get('user-agent')
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent,
    )
  return (
    <main className='flex w-full justify-center items-start pt-[9.69rem] md:px-[1.5rem]'>
      <AsidePrimary isMobile={isMobile} />
      {children}
    </main>
  )
}
