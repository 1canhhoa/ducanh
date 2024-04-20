import Image from 'next/image'

import CradDrop from './CardDrop'

import getDatawp from '@/libs/getDatawp'
import Huongdan from './Huongdan'
import clsx from 'clsx'

export default async function Support({
  text,
  isMobile = false,
  className,
  guide = false,
}) {
  const res = await getDatawp('/pages?slug=ho-tro')
  return (
    <section
      id='ho_tro'
      className={clsx(
        'w-full lg:space-y-[5rem] lg:pt-[4.05rem] flex flex-col items-center',
        className,
      )}
    >
      <div className='w-full py-[4rem] flex flex-col items-start'>
        <h1 className='title xmd:mb32 relative w-fit'>{text.hotro.title}</h1>
        <div className='flex flex-col items-start mt-[2.5rem] xmd:mt-[1rem]'>
          <span className='text-[1rem] font-semibold leading-[1.7] text-primary-50'>
            {text.hotro.description}
          </span>
          {text?.hotro?.question?.map((e, index) => (
            <div
              key={index}
              className='flex space-x-[0.75rem] items-center mt-[1rem] xmd:mt-[0.85rem]'
            >
              <Image
                alt='câu hỏi hỗ trợ su học sinh'
                src={'/images/thongtinduhoc/chamhoi.svg'}
                height={24}
                width={24}
              />
              <span className='flex-1 body14 font-medium text-greyscaletext-50 xmd:text-greyscaletext-60'>
                {e}
              </span>
            </div>
          ))}
        </div>
        <div className='w-full flex xmd:flex-col items-start xmd:space-x-0 space-x-[5rem]'>
          <div className='flex justify-center mt-[2.5rem] relative w-[26.375rem] h-[27.125rem] xmd:w-[21.9375rem] xmd:h-[25.375rem] xmd:rounded-[0.375rem] rounded-[0.49825rem]'>
            <Image
              className='absolute size-full top-0 left-0 rounded-[0.49825rem]'
              alt='banner hỗ trợ du học sinh'
              src={'/images/thongtinduhoc/bannerSupport.jpg'}
              height={434}
              width={422}
            />
            <span className='relative z-10 xmd:mb18 text-[1.25rem] mt-[1.7rem] xmd:mt-[1.75rem] xmd:mx-[1.19rem] font-bold leading-[1.5] w-[23.375rem] xmd:w-[19.5625rem] xmd:text-center text-white'>
              {text.hotro.title_banner}
            </span>
          </div>
          <div className='flex flex-col items-start space-y-[1rem] xmd:space-y-[0.62rem] mt-[2.5rem] xmd:mt-[1.5rem] xmd:w-full flex-1'>
            {res?.[0]?.acf?.support?.map((e, index) => (
              <CradDrop
                key={index}
                index={index}
                data={e}
              />
            ))}
          </div>
        </div>
      </div>
      {isMobile && !guide && <Huongdan text={text} />}
    </section>
  )
}
