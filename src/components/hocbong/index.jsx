import Image from 'next/image'
import Item from './components/Item'
import RelatedPosts from '@/components/BaiVietLienQuan/RelatedPosts'

export default function HocBong({t, isMobile}) {
  return (
    <section className='lg:flex-1 xmd:w-full'>
      <div className='w-full flex flex-col items-start xmd:px-[0.75rem]'>
        <h1 className='title xmd:text-[1.375rem] xmd:font-extrabold xmd:leading-[1.2] xmd:text-primary-50 relative w-fit mb-[1rem] xmd:mb-[0.75rem] uppercase'>
          {t.hoc_bong.title}
          <div className='size-[0.625rem] bg-secondary-40 absolute bottom-[0.625rem] right-[-1.125rem]'></div>
        </h1>
        <span className='text-[0.875rem] xmd:w-[21.9375rem] font-medium leading-[1.2] text-greyscaletext-40'>
          {t.hoc_bong.description}
        </span>
        <div className='flex xmd:w-full rounded-[0.5rem] border-[1px] border-solid border-primary-10 xmd:mt-[1rem] xmd:mb-[1.5rem] lg:my-[1.25rem]'>
          <input
            className='lg:w-[12.53125rem] xmd:flex-1 text-[0.875rem] font-medium leading-[1.2] text-greyscaletext-10 pl-[1rem]'
            placeholder='Tìm học bổng'
            type='text'
          />
          <button className='w-[3rem] h-[2.875rem] p-[0.625rem] flex justify-center items-center bg-primary-5 hover:bg-primary-10 rounded-[0.5rem]'>
            <Image
              alt='tìm kiếm học bổng'
              src={'/images/thongtinduhoc/down.svg'}
              width={12}
              height={6}
            />
          </button>
        </div>
        <div className='flex flex-col items-start space-y-[1.25rem] '>
          <Item />
          <Item />
        </div>
        <p className='xmd:hidden mt-[1rem] text-[0.875rem] font-medium leading-[1.2] text-greyscaletext-40 w-[49rem]'>
          {t.hoc_bong.note.text1}
          <span className='text-[0.875rem] font-medium leading-[1.2] text-primary-40'>
            {t.hoc_bong.note.text2}
          </span>{' '}
          {t.hoc_bong.note.text3}
        </p>
        <RelatedPosts
          lang={t}
          borderTop={isMobile ? true : false}
        />
      </div>
    </section>
  )
}
