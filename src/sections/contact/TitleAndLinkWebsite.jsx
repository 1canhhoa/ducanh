import Link from "next/link"
const TitleAndLinkWebsite = ({ t, data }) => {
  return (
    <div className="flex flex-col items-start space-y-[1.4375rem]">
      <h2 className="text-primary-60 uppercase font-feature-settings xmd:text-[1rem] xmd:leading-[1.3] xmd:uppercase text-[1.5rem] font-bold">
        {t.contact.officesAndCentersLanguage}
      </h2>
      <div className="flex flex-col items-start gap-[0.75rem]">
        <div className="text-[#4E91F6] text-base not-italic font-semibold leading-[normal] uppercase">
          Website
        </div>
        <div className="flex flex-col items-start gap-[0.5rem]">
          {data?.map((d, i) => (
            <a href={`http://${d?.url}`}>
              <div key={i} className="text-[#132B7D] text-base not-italic font-bold leading-[normal] underline">
                {d?.url}
              </div>
            </a>
          ))}

        </div>
      </div>
    </div>
  )
}

export default TitleAndLinkWebsite
