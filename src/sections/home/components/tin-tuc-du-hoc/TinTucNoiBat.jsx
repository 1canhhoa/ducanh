import Image from 'next/image'
import { useRouter } from 'next/navigation';

const TinTucNoiBat = ({ data }) => {
  const router = useRouter();
  const handleClick = () => {
    // Thực hiện chuyển hướng đến trang chi tiết sản phẩm
    if (data.slug) {
      router.push(`/tin-tuc-du-hoc/${data?.post_slug}`);
    }
  };
  return (
    <div
      onClick={handleClick}
      className=" inline-flex flex-col  items-center xmd:p-[0.75rem] md:px-[1.5rem] md:pt-[1.5rem] md:pb-[1.75rem]
         rounded-[1rem] md:border md:border-primary-50 bg-white
         xmd:shadow-[0px_-8px_24px_0px_rgba(0,0,0,0.08),74px_151px_67px_0px_rgba(158,158,158,0.01),42px_85px_57px_0px_rgba(158,158,158,0.05)] xmd:backdrop-blur-[10px]
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
          <div className="xmd:w-[19.9375rem] line-clamp-3 w-[27.3125rem] text-greyscaletext-80 xmd:text-[1.25rem] text-2xl not-italic xmd:font-semibold font-bold leading-[150%] xmd:tracking-[-0.0125rem] tracking-[-0.015rem]">
            {data?.title}
          </div>
          <div className="xmd:w-[19.9375rem] w-[27.3125rem] text-greyscaletext-50 text-base not-italic font-normal leading-[150%]">
            {data?.description}
          </div>
        </div>
        <Image loading='lazy' alt='ảnh minh họa thẻ tin tức '
          // src={'/images/homepage/card.png'}
          src={data.thumbnail}
          className='xmd:w-[20.0625rem] xmd:h-[12.6875rem] w-[27.375rem] h-[17.375rem] rounded-[0.5rem] shrink-0' width={440} height={280} />
      </div>
    </div>
  )
}

export default TinTucNoiBat