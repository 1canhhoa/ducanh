import Image from 'next/image'

const TinTucNoiBat = ({ data }) => {
  return (
    <div
      className=" inline-flex flex-col items-center p-[0.75rem]
         rounded-[1rem] bg-white
         shadow-[0px_-8px_24px_0px_rgba(0,0,0,0.08),74px_151px_67px_0px_rgba(158,158,158,0.01),42px_85px_57px_0px_rgba(158,158,158,0.05)] backdrop-blur-[10px]
         "

    >
      <div className=" flex flex-col items-start gap-[1.5rem]">
        <div className=" flex flex-col items-start gap-[1rem]">
          <div className="flex justify-between items-center self-stretch">
            <div className="flex items-center gap-[0.75rem]">
              <div className="text-[0.875rem] not-italic font-normal leading-[170%] font-feature-settings  text-greyscaletext-30">
                12 Tháng 12, 2023
              </div>
              <svg className='size-[1rem]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect y="8" width="8" height="8" fill="#2B46A8" />
                <rect x="8" width="8" height="8" fill="#ED4343" />
              </svg>
            </div>
            <div className="flex justify-center items-center py-[0.75rem] px-[1rem] rounded-[0.75rem] bg-secondary-10">
              <div className="text-greyscaletext-80 text-[0.625rem] not-italic font-bold leading-[120%] tracking-[-0.00625rem] uppercase">
                tin tức nổi bật
              </div>
            </div>
          </div>
          <div className="w-[19.9375rem] line-clamp-3 text-greyscaletext-80 text-[1.25rem] not-italic font-semibold leading-[150%] tracking-[-0.0125rem]">
            {data?.title}
          </div>
          <div className="w-[19.9375rem] text-greyscaletext-50 text-base not-italic font-normal leading-[150%]">
            {data?.description}
          </div>
        </div>
        <Image loading='lazy' alt='ảnh minh họa thẻ tin tức '
          src={data.thumbnail}
          className='w-[20.0625rem] h-[12.6875rem] rounded-[0.5rem] shrink-0' width={440} height={280} />
      </div>
    </div>
  )
}

export default TinTucNoiBat