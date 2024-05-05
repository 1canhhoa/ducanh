import { getDictionary } from '@/app/[lang]/dictionaries.js'
import getData from '@/lib/getData'
import TonChi from '@/sections/about-us/TonChi'
const page = async ({ params, searchParams }) => {
  const { about_us } = await getDictionary(params.lang)
  const data = await getData(`/wp-json/acf/v3/pages/1173`)
  const { viewport } = searchParams
  const isMobile = viewport?.includes('mobile')
  console.log({ data });
  return (
    <TonChi isMobile={isMobile} t={about_us} dataTonchi={data?.acf?.ton_chi?.data} />
  )
}

export default page
