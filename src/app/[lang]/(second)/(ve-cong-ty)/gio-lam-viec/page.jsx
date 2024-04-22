
import { getDictionary } from '@/app/[lang]/dictionaries.js'
import getData from '@/lib/getData'
import WorkTime from '@/sections/about-us/WorkTime'
const page = async ({ params, searchParams }) => {
  const { about_us } = await getDictionary(params.lang)
  const data = await getData(`/wp-json/acf/v3/pages/979`)
  const { viewport } = searchParams
  const isMobile = viewport?.includes('mobile')
  return (
    <WorkTime t={about_us} dataGioLamViec={data?.acf?.gio_lam_viẹc} />
  )
}

export default page
