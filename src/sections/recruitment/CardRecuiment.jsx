import { Button } from "@/components/ui/button"
const CardRecuiment = ({ t, isMobile }) => {
  return (
    <div className=' py-[0.6875rem] xmd:rounded-[0.5rem] xmd:shadow-[0px_3px_24px_0px_rgba(0,132,255,0.04),_0px_0px_32px_0px_rgba(0,119,229,0.04)] px-[0.75rem] flex w-full md:pb-[1.5rem] justify-between items-end md:border-b md:border-[rgba(52,104,205,0.40)]'>
      <div className="flex flex-col items-start xmd:space-y-[0.5rem] space-y-[1rem]">
        <h2 className="text-primary-60 xmd:text-[1rem] text-[1.25rem] font-bold leading-[1.3] ">
          Board of Directors Assistant
        </h2>
        <div className="flex flex-col items-start space-y-[0.5rem]">
          <div className="flex xmd:items-center items-start xmd:space-x-[0.25rem] space-x-[0.5rem]">
            <div className="xmd:text-greyscaletext-30 text-greyscaletext-50 xmd:text-[0.875rem] text-[1rem] font-normal xmd:leading-[1] font-feature-settings">
              Địa điểm:
            </div>
            <div className="xmd:text-primary-40 text-primary-50 xmd:text-[0.875rem] text-[1rem] font-semibold font-feature-settings">
              Hà Nội
            </div>
          </div>
          <div className="flex xmd:items-center items-start xmd:space-x-[0.25rem] space-x-[0.5rem]">
            <div className="xmd:text-greyscaletext-30 text-greyscaletext-50 xmd:text-[0.875rem] text-[1rem] font-normal xmd:leading-[1] font-feature-settings">
              Ngày hết hạn:
            </div>
            <div className="xmd:text-primary-40 text-primary-50 xmd:text-[0.875rem] text-[1rem] font-semibold font-feature-settings">
              10/03/2024
            </div>
          </div>
          <div className="flex xmd:items-center items-start xmd:space-x-[0.25rem] space-x-[0.5rem]">
            <div className="xmd:text-greyscaletext-30 text-greyscaletext-50 xmd:text-[0.875rem] text-[1rem] font-normal xmd:leading-[1] font-feature-settings">
              Lương:
            </div>
            <div className="xmd:text-primary-40 text-primary-50 xmd:text-[0.875rem] text-[1rem] font-semibold font-feature-settings">
              Thoả thuận
            </div>
          </div>
        </div>
      </div>
      <Button className={'xmd:h-[2.25rem] xmd:py-[0.375rem] xmd:px-[0.75rem] xmd:bg-primary-60 xmd:text-white'}>{isMobile ? t.applyNowMobile : t.applyNow}</Button>
    </div>
  )
}

export default CardRecuiment
