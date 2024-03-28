
import Image from 'next/image'
import CardCentersLanguage from './CardCentersLanguage'
const CentersLanguage = ({ t }) => {
  return (
    <div className='flex w-full flex-col items-start !mt-[1.5rem] space-y-[1.5rem] self-stretch'>
      <div className="flex items-center space-x-[0.5rem]">
        <Image alt="anh-next-title" src={'/images/contact/dot.svg'} width={10} height={10} className="size-[0.5rem]" />
        <div className="text-greyscaletext-70 text-[1rem] font-bold uppercase">
          {t.contact.centersLanguage}
        </div>
      </div>
      <div className='grid xmd:grid-cols-1 grid-cols-3 
      md:gap-x-[1.5rem] xmd:gap-y-[0.75rem] w-full'>
        <CardCentersLanguage />
        <CardCentersLanguage />
        <CardCentersLanguage />
      </div>
    </div>
  )
}

export default CentersLanguage
