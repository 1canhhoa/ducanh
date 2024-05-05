import { getDictionary } from '@/app/[lang]/dictionaries.js'
import getData from '@/lib/getData'
import Business from '@/sections/about-us/Business'
const page = async ({ params, searchParams }) => {
  const { about_us } = await getDictionary(params.lang)
  const data = await getData(`/wp-json/acf/v3/pages/964`)
  const { viewport } = searchParams
  const isMobile = viewport?.includes('mobile')
  return (
    <Business t={about_us} dataLinhvuc={data?.acf?.linh_vuc_chinh?.tat_ca_linh_vuc} isMobile={isMobile} />
  )
}

export default page
