import React from 'react'
import Image from 'next/image'
import CardOffice from './CardOffice'
const OfficeInformation = ({ t }) => {
  return (
    <div className='fl-c-ns w-full space-y-[1.5rem]'>
      <div className="flex items-center space-x-[0.5rem]">
        <Image alt="sss" src={'/images/contact/dot.svg'} width={9999} height={9999} className="size-[0.5rem]" />
        <div className="text-greyscaletext-70 text-[1rem] font-bold uppercase">
          {t.contact.office}
        </div>
      </div>
      <div className="grid xmd:grid-cols-1 grid-cols-3 
      gap-x-[1.5rem] gap-y-[2rem] w-full"
      // space-x-[1.5rem] space-y-[2rem]"
      >
        <CardOffice />
        <CardOffice />
        <CardOffice />
        <CardOffice />
        <CardOffice />
        <CardOffice />
        <CardOffice />
        <CardOffice />
        <CardOffice />
      </div>
    </div>
  )
}

export default OfficeInformation
