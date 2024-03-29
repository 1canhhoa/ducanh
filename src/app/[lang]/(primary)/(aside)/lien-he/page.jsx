import ContactForm from "@/sections/contact/ContactForm";
import { getDictionary } from '@/app/[lang]/dictionaries.js'
import Image from "next/image";
import OfficeInformation from "@/sections/contact/OfficeInformation";
import CentersLanguage from "@/sections/contact/CentersLanguage";
import TitleAndLinkWebsite from "@/sections/contact/TitleAndLinkWebsite";
export default async function ContactPage({ params }) {
  const t = await getDictionary(params.lang)
  return <div className='w-full h-full '>
    <div className="flex flex-col items-start md:space-y-[6.6875rem]">

      <div className="flex xmd:flex-col items-start md:w-[68.6875rem] md:relative">
        <ContactForm t={t} />
        <Image alt="anh-mu-cu-nhan-web" src={'/images/contact/img.png'} width={800} height={400} className="w-screen xmd:hidden md:w-[31.4375rem] absolute top-[4rem] right-0" />
        <Image alt="anh-mu-cu-nhan-mobile" src={'/images/contact/img2.png'} width={470} height={540} className="w-screen pb-[1rem] object-contain md:hidden" />
      </div>

      <div className="xmd:px-[0.75rem] flex flex-col items-start space-y-[3rem]">
        {/* title and webSite*/}
        <TitleAndLinkWebsite t={t} />
        {/* office information*/}
        <OfficeInformation t={t} />
        {/* centers language*/}
        <CentersLanguage t={t} />
      </div>

      {/* Background */}
      <Image alt="anh-nen-1" src={'/images/contact/bg1.jpg'} width={9999} height={9999} className="w-screen object-cover absolute top-0 right-0 -z-10" />
      <Image alt="anh-nen-2" src={'/images/contact/bg2.jpg'} width={9999} height={9999} className="w-screen object-cover absolute top-0 right-0 -z-10" />

    </div>
  </div>
}
