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
    <main className='flex justify-center items-center'>
      <div className=' flex flex-col items-center xmd:space-y-[1.5rem] space-y-[6.75rem] border-red-700 w-full'>
        <Banner t={about_us} isMobile={isMobile} />
        <Ceo t={about_us} />
        <Business t={about_us} isMobile={isMobile} />
        <TonChi t={about_us} />
        <Achievement t={about_us} />
        <Office t={about_us} />
        <Staff t={about_us} />
        <WorkTime t={about_us} />
        <Timestamp t={about_us} />
      </div>
    </main>
  )
}

export default page
