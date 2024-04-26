import {getDictionary} from '@/app/[lang]/dictionaries.js'
import getData from '@/lib/getData'
import DucanhCTG from '@/sections/about-us/DucanhCTG'
const page = async ({params, searchParams}) => {
  const {about_us} = await getDictionary(params.lang)
  const dataFetch = await getData(`/wp-json/acf/v3/pages/1014`)
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  return (
    <DucanhCTG
      t={about_us}
      data={dataFetch?.acf?.data}
    />
  )
}

export default page
