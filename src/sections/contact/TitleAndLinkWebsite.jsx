import React from 'react'

const TitleAndLinkWebsite = ({ t }) => {
  return (
    <div className="fl-c-ns space-y-[1.4375rem]">
      <div className="text-primary-60 font-feature-settings xmd:text-[1rem] xmd:leading-[1.3] xmd:uppercase text-[1.5rem] font-bold">
        {t.contact.officesAndCentersLanguage}
      </div>
      <div className=" flex xmd:flex-col items-start xmd:space-y-[1rem] md:space-x-[7.5rem]">
        <div className="fl-c-ns space-y-[0.25rem]">
          <div className="text-greyscaletext-80 font-feature-settings text-[1rem]">
            Website 1:
          </div>
          <div className="text-greyscaletext-80 font-bold font-feature-settings text-[1rem]">
            www.ducanhduhoc.vn
          </div>
        </div>
        <div className="fl-c-ns space-y-[0.25rem]">
          <div className="text-greyscaletext-80 font-feature-settings text-[1rem]">
            Website 2:
          </div>
          <div className="text-greyscaletext-80 font-bold font-feature-settings text-[1rem]">
            www.ducanhduhoc.vn
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleAndLinkWebsite
