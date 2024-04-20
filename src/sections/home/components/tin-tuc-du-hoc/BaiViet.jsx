import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'
const BaiViet = ({ data, loadingBaiviet }) => {
  return (
    <>
      {loadingBaiviet ?
        <Skeleton className=' bg-greyscaletext-10 w-full h-[5rem]' /> :
        <div className='flex items-start space-x-[1.5rem] self-stretch'>
          <Image loading='lazy' alt='ảnh minh họa chi tiết tin tức' src={data.thumbnail}
            className='w-[11.9375rem] h-[7.875rem] rounded-[0.5rem] shrink-0' width={192} height={130} />
          <div className='flex flex-col items-start space-y-[0.75rem] w-[15.25rem] self-stretch'>
            <div className="line-clamp-2 h-[2.4625rem] self-stretch overflow-hidden text-greyscaletext-80 text-ellipsis whitespace-wrap text-base not-italic font-semibold leading-[120%] tracking-[-0.0025rem]">
              {data?.title}
            </div>
            <div className=" 
          text-greyscaletext-70 text-xs not-italic font-semibold leading-[100%] tracking-[0.015rem] uppercase
          py-[0.5rem] px-[1rem] flex justify-center items-center gap-[0.625rem] rounded-[1.75rem] bg-primary-10">
              Học Sinh Đức Anh
            </div>
          </div>
        </div>}
    </>
  )
}

export default BaiViet