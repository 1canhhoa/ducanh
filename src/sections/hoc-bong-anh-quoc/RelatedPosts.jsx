import {Button} from '@/components/ui/button'
import Image from 'next/image'
const RelatedPosts = ({lang}) => {
  return (
    <section className='w-full'>
      <div className='w-full my-[1.25rem] md:my-[2.25rem] border-t-[0.0625rem] border-[rgba(52, 104, 205, 0.40)]'></div>
      <h2 className='text-[1.5rem] text-center md:text-left text-primary-50 font-bold leading-[130%] mt-[1.25rem] md:mt-[2.25rem] mb-[1.5rem]'>
        {lang.h2_related_posts}
      </h2>
      <div className='w-full grid grid-rows-6 grid-cols-1 md:grid-rows-3 md:grid-cols-2 gap-x-0 md:gap-x-[1.5rem] gap-y-[0.75rem] md:gap-y-[1.88rem]'>
        {Array.from({length: 6}).map((item, index) => (
          <article
            key={index}
            className='hover:bg-primary-5 group duration-150 flex items-center p-[0.95rem] md:p-[1.5rem] rounded-2xl border border-[rgba(52, 104, 205, 0.40)]'
          >
            <Image
              src={'/images/hoc-bong-anh-quoc/relatedPost.jpg'}
              width={164}
              height={164}
              priority
              alt='hoc-bong-anh-quoc'
              className={
                'rounded-lg w-[7.5rem] h-[5.3rem] md:w-[16.4rem] md:h-[16.4rem] object-cover'
              }
            ></Image>
            <div className='ml-[0.5rem] md:ml-[1.5rem] flex flex-1 flex-col h-full'>
              <h2 className='text-primary-60 text-[1rem] font-bold leading-[150%]'>
                Học bổng toàn phần khối ngành STEM dành cho nữ giới
              </h2>
              <p className='hidden md:block line-clamp-4 overflow-hidden mt-[1rem] mb-auto'>
                Bạn là nữ giới, đã có bằng Cử nhân chuyên ngành STEM và có niềm
                đam mê với lĩnh vực này? Bạn sẽ có cơ hoi duoc tham gia cung nhu
                dong gop
              </p>
              <Button className='hidden md:block h-[2.5rem] px-[1.5rem] w-max group-hover:bg-white'>
                Xem thêm
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default RelatedPosts
