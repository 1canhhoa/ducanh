import Banner from '@/sections/about-us/Banner'
import React from 'react'
import { getDictionary } from '@/app/[lang]/dictionaries.js'
import Ceo from '@/sections/about-us/Ceo'
import Business from '@/sections/about-us/Business'
import TonChi from '@/sections/about-us/TonChi'
import Achievement from '@/sections/about-us/Achievement'
import Office from '@/sections/about-us/Office.jsx'
import Staff from '@/sections/about-us/Staff'
import WorkTimeabc from '@/sections/about-us/workTimeabc'
import WorkTime from '@/sections/about-us/WorkTime'
import Timestamp from '@/sections/about-us/Timestamp'
const page = async ({ params }) => {
  const { about_us } = await getDictionary(params.lang)
  return (
    <div className=' flex flex-col items-center space-y-[6.75rem] border-red-700'>
      <Banner t={about_us} />
      <Ceo t={about_us} />
      <Business t={about_us} />
      <TonChi t={about_us} />
      <Achievement t={about_us} />
      <Office t={about_us} />
      <Staff t={about_us} />
      <WorkTime t={about_us} />
      <Timestamp t={about_us} />
    </div>
  )
}

export default page
