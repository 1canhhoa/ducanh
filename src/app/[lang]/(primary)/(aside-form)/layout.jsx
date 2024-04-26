import FormDangKyTuVan from '@/components/form-dang-ki-tu-van/FormDangKyTuVan'
import ImageSidebar from '@/components/image-sidebar/ImageSidebar'
import AsidePrimary from '@/layout/asidePrimary/AsidePrimary'
import { headers } from 'next/headers'
export default function AsideLayout({ children }) {
  const headersList = headers()
  const userAgent = headersList.get('user-agent')
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent,
    )
  return (
    <main className='relative flex md:space-x-[1.5rem] w-full justify-center items-start pt-[4.69rem] md:pt-[9.69rem] md:px-[1rem]'>
      <div className='space-y-[1.25rem] xmd:hidden'>
        <AsidePrimary isMobile={isMobile} />
        <FormDangKyTuVan type='mini' />
        <ImageSidebar />
      </div>
      {children}
    </main>
  )
}
