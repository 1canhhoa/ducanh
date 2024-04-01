import Banner from '@/sections/about-us/Banner'
import React from 'react'
import { getDictionary } from '@/app/[lang]/dictionaries.js'
import Ceo from '@/sections/about-us/Ceo'
const page = async ({ params }) => {
  const { about_us } = await getDictionary(params.lang)
  return (
    <div className=' flex flex-col justify-center items-center'>
      <Banner t={about_us} />
      <Ceo t={about_us} />
      <div className=""></div>
    </div>
  )
}

export default page
