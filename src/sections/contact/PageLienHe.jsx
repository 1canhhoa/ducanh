"use client"
import Image from "next/image";
import OfficeInformation from "@/components/OfficeInformation";
import CentersLanguage from "@/components/CentersLanguage";
import TitleAndLinkWebsite from "@/sections/contact/TitleAndLinkWebsite";
import FormDangKyTuVan from "@/components/form-dang-ki-tu-van/FormDangKyTuVan";
const Title = ({ t, index }) => {
  return <div className={(index === 0 ? '' : ' mb-[1.5rem]') + " text-greyscaletext-70 text-lg not-italic font-bold leading-[normal] uppercase"}>
    {t}
  </div>
}
const PageLienHe = ({ t, data }) => {

  return (
    <div className="flex flex-col w-full items-start md:space-y-[6.6875rem]">
      <div className="flex xmd:flex-col items-start md:w-[68.6875rem] md:relative">
        <FormDangKyTuVan type="large" t={t} />
        <Image priority alt="ảnh mũ cử nhân du học đức anh" src={'/images/contact/img.png'} width={510} height={445} className="w-screen xmd:hidden md:w-[31.4375rem] absolute top-[4rem] right-0" />
        <Image priority alt="ảnh mũ cử nhân du học đức anh mobile" src={'/images/contact/img2.png'} width={500} height={280} className="w-screen pb-[1rem] object-contain md:hidden" />
      </div>

      <div className="xmd:px-[0.75rem] w-full flex flex-col items-start xmd:space-y-[2rem] space-y-[3rem]">

        <TitleAndLinkWebsite data={data?.lists_websibe} t={t} />
        <div className=" space-y-[1.5rem]">
          {data?.office_pte_lang?.map((d, i) => (
            <div key={i} className="w-full">
              <Title t={d?.title} index={i} />
              <OfficeInformation listsPlace={d?.lists_place} t={t} />
            </div>
          ))}
        </div>


      </div>

      {/* Background */}
      <Image priority alt="ảnh nền bản đồ 1" src={'/images/contact/bg1.jpg'} width={9999} height={9999} className="w-screen object-cover absolute top-0 right-0 -z-10" />
      <Image priority alt="ảnh nền bản đồ 1" src={'/images/contact/bg2.jpg'} width={9999} height={9999} className="w-screen object-cover absolute top-0 right-0 -z-10" />

    </div>
  )
}

export default PageLienHe
