import OfficeInformation from "@/components/OfficeInformation";
import CentersLanguage from "@/components/CentersLanguage";
import Title from "@/components/Title";

const TitleOfficeOrLanguage = ({ t }) => {
  return <div className="flex items-center space-x-[0.5rem] mb-[1.5rem]">
    <svg className='size-[0.5rem]' xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
      <rect y="4" width="4" height="4" fill="#2B46A8" />
      <rect x="4" width="4" height="4" fill="#ED4343" />
    </svg>
    <div className="text-greyscaletext-70 text-[1rem] font-bold uppercase">
      {t.centersLanguage}
    </div>
  </div>
}

const Office = ({ t }) => {
  return <section className="md:w-[77rem]  flex flex-col items-start space-y-[1.81rem]">
    <Title title={t.office} />
    <div className="flex flex-col items-start space-y-[2rem] w-full">
      <OfficeInformation t={t} />
      <div className="w-full">
        <TitleOfficeOrLanguage t={t} />
        <CentersLanguage />
      </div>
    </div>
  </section>

}

export default Office
