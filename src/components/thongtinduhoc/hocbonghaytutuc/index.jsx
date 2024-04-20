'use client'

import Image from 'next/image'

export default function HocbongHayTutuc({text, dataAcf}) {
  let newArrImage = []
  for (let i = 0; i < dataAcf?.nation?.nation_image?.length; i++) {
    newArrImage.push(dataAcf?.nation?.nation_image[i].url)
  }
  return (
    <section
      id='hoc_bong'
      className='w-full mt-[8.12rem] xmd:mt-[6rem]'
    >
      <div className='flex flex-col xmd:flex-col-reverse xmd:space-y-[1.5rem] xmd:px-[0.75rem] items-start lg:w-[76.875rem] lg:mx-auto xlg:px-[5.3rem]'>
        <div className='h-[27.125rem] xlg:w-full w-[76.875rem] xmd:h-[16.45313rem] xmd:w-[21.9375rem] mb-[4.12rem] xmd:mb-[1.5rem]'>
          <Image
            className='rounded-[1.25rem] lg:size-full xmd:hidden'
            alt='Học bổng'
            src={'/images/thongtinduhoc/bannerHocbong.jpg'}
            width={1230}
            height={434}
          />
          <Image
            className='rounded-[1.25rem] lg:hidden w-[21.9375rem] h-[16.45313rem]'
            alt='Học bổng'
            src={'/images/thongtinduhoc/bannerHocbongmb.jpg'}
            width={351}
            height={263.25}
          />
        </div>
        <h1 className='text-[3rem] xmd:text-[2rem] xmd:leading-[1.7] font-extrabold leading-[1.2] text-primary-50 relative w-fit mb-[4rem]'>
          {text?.scholarship_or_selfsufficiency?.title}
        </h1>
      </div>
      <div className='flex flex-col space-y-[4rem] xmd:space-y-[1.5rem]'>
        <div className='flex flex-col items-start xmd:space-y-[3rem] space-y-[1.5rem] w-full xmd:px-[0.75rem] xlg:px-[5.3rem] px-[11.625rem]'>
          <h2 className='desktop32 text_gradient !bg-clip-text bg-gradient-to-b from-[#DB2C34] to-[#FF6A70] xmd:text-[2rem] xmd:font-extrabold font-bold flex items-center'>
            {dataAcf?.du_hoc_hoc_bong?.title}
          </h2>
          <div
            className='tulamhoso'
            dangerouslySetInnerHTML={{
              __html: dataAcf?.du_hoc_hoc_bong?.description,
            }}
          />
        </div>
        <div className='flex flex-col items-start px-[11.56rem] xmd:px-[0.75rem] space-y-[3rem]'>
          {dataAcf?.du_hoc_hoc_bong?.content?.map((e, index) => (
            <div
              key={index}
              className='flex flex-col'
            >
              <h3 className='mb-[1rem] text-[1.5rem] font-bold text-primary-50 leading-[1.3]'>
                {e.title}
              </h3>
              <div
                className='tulamhoso'
                dangerouslySetInnerHTML={{
                  __html: e?.description,
                }}
              />
            </div>
          ))}
        </div>

        <div className='xmd:px-[0.75rem] xlg:px-[5.3rem] px-[11.625rem] w-full flex flex-col justify-start items-start'>
          <div className='xmd:w-full xmd:mt-[2rem] flex flex-col items-start space-y-[2.25rem] xmd:space-y-[1.5rem]'>
            <h2 className='sub20 text-primary-50 flex'>
              {text?.scholarship_or_selfsufficiency?.consult}
            </h2>
            <div className='grid grid-cols-3 xmd:grid-cols-1 gap-x-4 gap-y-6 xlg:w-full xmd:w-full'>
              {dataAcf?.nation?.nation_name?.map((e, index) => (
                <div
                  key={index}
                  className=' w-[24.3125rem] xlg:w-[28.9125rem] xmd:w-full xmd:mr-0 pl-[1.5rem] flex justify-start items-center h-[3rem] relative rounded-[0.25rem]'
                >
                  <span
                    className={`${
                      e?.name == 'Nhật' ? 'text-primary-50' : 'text-white'
                    } text-[0.875rem] relative z-10 font-extrabold leading-[1.5] uppercase`}
                  >
                    {e?.name}
                  </span>
                  <Image
                    className='absolute top-0 left-0 size-full'
                    alt='hoc phi cac nuoc'
                    src={newArrImage[index] && newArrImage[index]}
                    width={411.807}
                    height={209.807}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full px-[11.56rem] xmd:px-[0.75rem] xmd:mt-[2.56rem]'>
          <h2 className='desktop32 text_gradient !bg-clip-text bg-gradient-to-b from-[#DB2C34] to-[#FF6A70] xmd:text-[2rem] xmd:font-extrabold font-bold flex items-center'>
            {dataAcf?.du_hoc_tu_tuc?.title}
          </h2>
          <span className='text-[1.5rem] xmd:text-[1.25rem] font-bold leading-[1.5] text-primary-50 mt-[2.5rem] xmd:mt-[1.5rem] mb-[1rem]'>
            {dataAcf?.du_hoc_tu_tuc?.label}
          </span>
          <span className='text-[1rem] font-medium leading-[1.5] text-greyscaletext-60 mb-[2rem]'>
            {dataAcf?.du_hoc_tu_tuc?.description}
          </span>
        </div>
      </div>
    </section>
  )
}
