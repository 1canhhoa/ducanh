import Title from '@/components/Title'
import Image from 'next/image'

export default function ChiTieu({text}) {
  return (
    <section className='w-full lg:mt-[4.8rem] xmd:px-[0.75rem] xlg:px-[5.3rem] px-[11.625rem] flex justify-start items-start lg:bg-background-elevation-10'>
      <div className='flex w-full flex-col items-start xlg:mt-[3rem] mt-[5.9rem] xmd:mt-[2.5rem] relative'>
        <h1 className='title xmd:mb32 relative w-fit mb-[2.8rem] xmd:mb-[1.12rem]'>
          {text.information.spending.title}
          <div className='size-[0.625rem] bg-secondary-40 absolute bottom-[0.625rem] right-[-1.125rem]'></div>
        </h1>
        <p className='w-[44.6875rem] xmd:w-[21.9375rem] mt-[2rem] text-primary-50 text-[1.25rem] font-medium leading-[1.5]'>
          {text.information.spending.text1}
        </p>
        <div className='h-[20.0625rem] w-[28.478rem] xmd:w-[21.9375rem] xmd:h-[15.45481rem] xmd:relative absolute right-0 xmd:top-0 top-[-3rem]'>
          <Image
            className='size-full '
            alt='anh cách chi tiêu'
            src={'/images/thongtinduhoc/asd.png'}
            height={321}
            width={455.648}
          />
          <span className='uppercase w-[9.75rem] xmd:w-[7.5107rem] bottom-[2rem] right-[4rem] xmd:right-[3rem] absolute z-10 text-[1.5rem] xmd:text-[1.1555rem] xmd:leading-[1.2] font-extrabold text-[#CB2128]'>
            {text.information.spending.maxim}
          </span>
        </div>
        <div className='flex xmd:flex-col xmd:space-y-[0.75rem] xmd:space-x-0 xlg:space-x-[2rem] xmd:mt-[1.19rem] mt-[4.44rem] justify-between w-full'>
          {new Array(3).fill(0).map((e, index) => (
            <div
              className={
                'lg:w-[23.125rem] flex flex-col justify-center items-center space-y-[0.75rem] px-[2.25rem] pt-[1.5rem] pb-[2rem] border-[1px] border-solid border-primary-20 bg-primary-5 rounded-[1rem]'
              }
              key={index}
            >
              <Image
                className='size-[0.75rem] mr-[0.5rem] mt-[1rem]'
                alt='icon'
                src={'/images/hoptac/dot.png'}
                width={12}
                height={12}
              />
              <span className='sub20 font-semibold text-primary-60'>
                Khoản chi tiêu bắt buộc
              </span>
              <span className='text-greyscaletext-60 text-center text-[0.875rem] font-medium leading-[1.7]'>
                Khoản chi tiêu bắt buộc: tiền ăn, thuê nhà, đi lại, bảo hiểm y
                tế, học phí, sách vở…
              </span>
            </div>
          ))}
        </div>
        <p className='xmd:hidden mt-[3.81rem] w-[76.3125rem] text-primary-50 text-[0.875rem] font-medium leading-[1.7] italic'>
          {text.information.spending.note}
        </p>
      </div>
    </section>
  )
}
