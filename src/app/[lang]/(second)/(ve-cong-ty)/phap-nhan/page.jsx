import Banner from '@/sections/about-us/Banner'
import { getDictionary } from '@/app/[lang]/dictionaries.js'
import Ceo from '@/sections/about-us/Ceo'
import Business from '@/sections/about-us/Business'
import TonChi from '@/sections/about-us/TonChi'
import Achievement from '@/sections/about-us/Achievement'
import Office from '@/sections/about-us/Office.jsx'
import Staff from '@/sections/about-us/Staff'
import WorkTime from '@/sections/about-us/WorkTime'
import Timestamp from '@/sections/about-us/Timestamp'
const page = async ({ params, searchParams }) => {
  const { about_us } = await getDictionary(params.lang)
  const { viewport } = searchParams
  const isMobile = viewport?.includes('mobile')
  return (
    <Banner t={about_us} isMobile={isMobile} />

  )
}

export default page
