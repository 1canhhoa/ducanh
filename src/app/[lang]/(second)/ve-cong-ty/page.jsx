import Banner from '@/sections/about-us/Banner'
import React from 'react'
import { getDictionary } from '@/app/[lang]/dictionaries.js'
import Ceo from '@/sections/about-us/Ceo'
import Business from '@/sections/about-us/Business'
import TonChi from '@/sections/about-us/TonChi'
import Achievement from '@/sections/about-us/Achievement'
import Office from '@/sections/about-us/Office.jsx'
import Staff from '@/sections/about-us/Staff'
import WorkTime from '@/sections/about-us/workTime'

const page = async ({ params }) => {
  const { about_us } = await getDictionary(params.lang)
  return (
    <div className=' flex flex-col items-center space-y-[6.75rem]'>
      <Banner t={about_us} />
      <Ceo t={about_us} />
      <Business t={about_us} />
      <TonChi t={about_us} />
      <Achievement t={about_us} />
      <Office t={about_us} />
      <Staff t={about_us} />
      <WorkTime t={about_us} />
    </div>
  )
}

export default page
