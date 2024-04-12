
import ContactForm from "@/sections/contact/ContactForm";
import { getDictionary } from '@/app/[lang]/dictionaries.js'
import Image from "next/image";
import OfficeInformation from "@/components/OfficeInformation";
import CentersLanguage from "@/components/CentersLanguage";
import TitleAndLinkWebsite from "@/sections/contact/TitleAndLinkWebsite";

const TitleOfficeOrLanguage = ({ t }) => {
  return <div className="flex items-center space-x-[0.5rem] mb-[1.5rem]">
    <svg className='size-[0.5rem]' xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
      <rect y="4" width="4" height="4" fill="#2B46A8" />
      <rect x="4" width="4" height="4" fill="#ED4343" />
    </svg>
    <div className="text-greyscaletext-70 text-[1rem] font-bold uppercase">
      {t.contact.centersLanguage}
    </div>
  </div>
}
export default async function ContactPage({ params, searchParams }) {
  const { viewport } = searchParams
  const isMobile = viewport?.includes('mobile')
  const t = await getDictionary(params.lang)
  return <div className="flex flex-col items-start md:space-y-[6.6875rem]">
    <div className="flex xmd:flex-col items-start md:w-[68.6875rem] md:relative">
        <ContactForm t={t} />
      <Image priority alt="ảnh mũ cử nhân du học đức anh" src={'/images/contact/img.png'} width={510} height={445} className="w-screen xmd:hidden md:w-[31.4375rem] absolute top-[4rem] right-0" />
      <Image priority alt="ảnh mũ cử nhân du học đức anh mobile" src={'/images/contact/img2.png'} width={500} height={280} className="w-screen pb-[1rem] object-contain md:hidden" />
      </div>

    <div className="xmd:px-[0.75rem] flex flex-col items-start xmd:space-y-[2rem] space-y-[3rem]">
        {/* title and webSite*/}
      <TitleAndLinkWebsite t={t} />

      {/* coponent chung với page about-us*/}
      <div className="w-full">
        <TitleOfficeOrLanguage t={t} />
        <OfficeInformation t={t} />
      </div>

        {/* centers language*/}
      <div>
        <TitleOfficeOrLanguage t={t} />
        <CentersLanguage t={t} />
      </div>
    </div>

      {/* Background */}
    <Image priority alt="ảnh nền bản đồ 1" src={'/images/contact/bg1.jpg'} width={9999} height={9999} className="w-screen object-cover absolute top-0 right-0 -z-10" />
    <Image priority alt="ảnh nền bản đồ 1" src={'/images/contact/bg2.jpg'} width={9999} height={9999} className="w-screen object-cover absolute top-0 right-0 -z-10" />

  </div>
}
