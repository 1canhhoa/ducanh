import Image from 'next/image'
import CardOffice from './CardOffice'
const OfficeInformation = ({ t }) => {
  return (
    <div className='flex flex-col items-start w-full !mt-[1.5rem] space-y-[1.5rem]'>
      <div className="flex items-center space-x-[0.5rem]">
        <Image priority alt="icon xanh đỏ bên cạnh title" src={'/images/contact/dot.svg'} width={10} height={10} className="size-[0.5rem]" />
        <h2 className="text-greyscaletext-70 text-[1rem] font-bold uppercase">
          {t.contact.office}
        </h2>
      </div>
      <div className="grid xmd:grid-cols-1 grid-cols-3 
      gap-x-[1.5rem] xmd:gap-y-[0.75rem] gap-y-[2rem] w-full"
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
