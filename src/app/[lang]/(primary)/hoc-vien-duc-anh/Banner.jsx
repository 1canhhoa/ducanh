import React from 'react'
import Image from 'next/image'
const Banner = ({lang, data}) => {
  return (
    <section className='overflow-hidden w-full h-[11rem] md:h-[38.4375rem] mb-[1.5rem] md:mb-[4.5rem] bg-[linear-gradient(176deg,_rgba(25,87,180,0.75)_-0.03%,_#29A4EA_87.83%)] relative rounded-xl'>
      <Image
        src='/images/hoc-vien-duc-anh/banner-overimage.png'
        width={620}
        height={413}
        priority
        className='w-[62rem] h-[41.3rem] absolute bottom-[-8.63rem] right-0 opacity-5'
      />
      <Image
        src='/images/hoc-vien-duc-anh/student img.png'
        width={416}
        height={531}
        priority
        className='w-[26rem] h-[33.1875rem] object-contain absolute bottom-0 left-[30rem]'
      />
      {/* text 1 */}
      <div className='absolute top-[2.94rem] left-[29rem] w-[12.7rem] h-[7.1rem]'>
        <Image
          src='/images/hoc-vien-duc-anh/Union.svg'
          width={120}
          height={70}
          priority
          className='w-full h-full object-contain absolute top-0 left-0 z-10'
        />
        <div className='relative left-[0.6rem] w-[9rem] top-[0.81rem] z-20'>
          <div className='flex items-center mb-[0.88rem]'>
            <div className='flex items-center'>
              {Array.from({length: 5}).map((star, index) => (
                <div
                  key={index}
                  className='w-[0.75rem] h-[0.75rem] mr-[0.25rem]'
                >
                  <Image
                    src='/images/hoc-vien-duc-anh/star.svg'
                    width={100}
                    height={100}
                    priority
                    className='w-full h-full top-0 left-0'
                  />
                </div>
              ))}
            </div>
            <Image
              src={'/images/hoc-vien-duc-anh/Group 1000005614.svg'}
              width={100}
              height={100}
              priority
              className='w-[0.75rem] h-[0.75rem] object-cover ml-auto'
              alt=''
            />
          </div>
          <p className='z-20 w-full h-[6rem] text-greyscaletext-80 text-justify text-[0.4375rem] font-normal leading-[160%] tracking-[-0.03125rem]'>
            {data.text1}
          </p>
        </div>
      </div>
      {/* text 2 */}
      <div className='absolute top-[2.94rem] left-[54.83rem] w-[16.6rem] h-[15.3rem]'>
        <Image
          src='/images/hoc-vien-duc-anh/Union2.svg'
          width={166}
          height={153}
          priority
          className='w-full h-full object-contain absolute top-0 left-0 z-10'
        />
        <div className='relative left-[1.13rem] w-[14.6rem] top-[0.81rem] z-20'>
          <div className='flex items-center mb-[0.88rem]'>
            <div className='flex items-center'>
              {Array.from({length: 5}).map((star, index) => (
                <div
                  key={index}
                  className='w-[0.75rem] h-[0.75rem] mr-[0.25rem]'
                >
                  <Image
                    src='/images/hoc-vien-duc-anh/star.svg'
                    width={100}
                    height={100}
                    priority
                    className='w-full h-full top-0 left-0'
                  />
                </div>
              ))}
            </div>
            <Image
              src={'/images/hoc-vien-duc-anh/Group 1000005614.svg'}
              width={100}
              height={100}
              priority
              className='w-[0.75rem] h-[0.75rem] object-cover ml-auto'
              alt=''
            />
          </div>
          <p className='z-20 w-full h-[6rem] text-greyscaletext-80 text-justify text-[0.75rem] font-normal leading-[160%] tracking-[-0.03125rem]'>
            {data.text2}
          </p>
        </div>
      </div>
      {/* text 3 */}{' '}
      <div className='absolute bottom-[3.7rem] left-[53rem] w-[20.2rem] h-[10.3rem]'>
        <Image
          src='/images/hoc-vien-duc-anh/Union3.svg'
          width={166}
          height={153}
          priority
          className='w-full h-full object-contain absolute top-0 left-0 z-10'
        />
        <div className='relative left-[6.6rem] w-[12.6rem] top-[0.81rem] z-20'>
          <div className='flex items-center mb-[0.88rem]'>
            <div className='flex items-center'>
              {Array.from({length: 5}).map((star, index) => (
                <div
                  key={index}
                  className='w-[0.75rem] h-[0.75rem] mr-[0.25rem]'
                >
                  <Image
                    src='/images/hoc-vien-duc-anh/star.svg'
                    width={100}
                    height={100}
                    priority
                    className='w-full h-full top-0 left-0'
                  />
                </div>
              ))}
            </div>
            <Image
              src={'/images/hoc-vien-duc-anh/Group 1000005614.svg'}
              width={100}
              height={100}
              priority
              className='w-[0.75rem] h-[0.75rem] object-cover ml-auto'
              alt=''
            />
          </div>
          <p className='w-full text-greyscaletext-80 text-justify text-[0.75rem] font-normal leading-[160%] tracking-[-0.03125rem]'>
            {data.text3}
          </p>
        </div>
      </div>
      <h2 className='text-white text-[3rem] font-medium uppercase flex flex-col absolute left-[5.94rem] top-[10.06rem]'>
        <span className='leading-[120%]'>{lang.textBanner1}</span>{' '}
        <span className='text-[4rem] font-bold w-[28.4375rem] leading-[120%]'>
          {lang.textBannerName}
        </span>{' '}
        <span>{lang.textBanner2}</span>
      </h2>
    </section>
  )
}

export default Banner
