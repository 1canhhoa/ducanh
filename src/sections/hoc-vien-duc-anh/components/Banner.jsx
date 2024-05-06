import Image from 'next/image'
const Banner = ({lang, res}) => {
  // console.log({res})
  return (
    <section className='overflow-hidden w-full h-[11rem] md:h-[38.4375rem] mb-[1.5rem] md:mb-[4.5rem] relative rounded-xl bg-[linear-gradient(176deg,rgba(25,87,180,0.75)_-0.03%,#29A4EA_87.83%)]'>
      {/* overlay students */}
      <Image
        src={res?.acf?.overlay || '/images/hoc-vien-duc-anh/banner.png'}
        width={620}
        height={413}
        priority
        className='w-full h-full absolute left-0 top-0'
        alt='hoc-vien-duc-anh'
      />
      {/* student */}
      <Image
        src={res?.acf?.person || '/images/hoc-vien-duc-anh/student img.png'}
        width={416}
        height={531}
        priority
        className='xmd:w-[8rem] xmd:h-[10rem] w-[26rem] h-[33.1875rem] object-contain absolute bottom-0 xmd:left-[8.5rem] tablet:left-[44rem] left-[30rem]'
        alt='hoc-vien-duc-anh'
      />
      {/* text 1 */}
      <div
        className='bg-white rounded-[0.875rem] absolute top-[2.94rem] xmd:left-[7.5rem] xmd:top-[-1.5rem] xmd:w-[4rem]
        tablet:top-[4rem] tablet:left-[38rem]
        left-[26rem] w-[11rem] min-h-[7.2rem]'
      >
        <Image
          src={'/images/hoc-vien-duc-anh/frame1.png'}
          alt={'hoc-vien-duc-anh'}
          width={500}
          height={500}
          className={'absolute left-full bottom-[2rem] w-[3rem] h-[2rem]'}
          priority
        />
        <div className='xmd:w-[calc(100%-0.69rem*2)] mt-[0.81rem] mx-[0.69rem]'>
          <div className='flex items-center xmd:mb-[0.2rem] mb-[0.88rem]'>
            <div className='flex items-center'>
              {Array.from({length: 5}).map((star, index) => (
                <div
                  key={index}
                  className='xmd:size-[0.1625rem] xmd:mr-[0.15rem] w-[0.75rem] h-[0.75rem] mr-[0.25rem]'
                >
                  <Image
                    src='/images/hoc-vien-duc-anh/star.svg'
                    width={100}
                    height={100}
                    priority
                    className='w-full h-full top-0 left-0'
                    alt='hoc-vien-duc-anh'
                  />
                </div>
              ))}
            </div>
            <Image
              src={'/images/hoc-vien-duc-anh/Group 1000005614.svg'}
              width={100}
              height={100}
              priority
              className='xmd:size-[0.2rem] w-[0.75rem] h-[0.75rem] object-cover ml-auto'
              alt='hoc-vien-duc-anh'
            />
          </div>
          <p
            className='z-20 w-ful text-greyscaletext-80 text-justify xmd:text-[0.1875rem] text-[0.44rem] font-normal 
            xmd:leading-[150%] leading-[160%] tracking-[-0.03125rem]'
          >
            {res?.acf?.message_1}
          </p>
        </div>
      </div>
      {/* text 2 */}
      <div className='bg-white absolute rounded-[0.875rem] xmd:top-0 xmd:left-0 xmd:w-[8rem] top-[2.94rem] tablet:left-[66.83rem] left-[54.83rem] w-[16.5rem] min-h-[11.6rem]'>
        <Image
          src={'/images/hoc-vien-duc-anh/frame2.png'}
          alt={'hoc-vien-duc-anh'}
          width={500}
          height={500}
          className={'absolute left-[0.2rem] top-full w-[6rem] h-[4rem]'}
          priority
        />
        <div className='w-[calc(100%-0.94rem*2)] xmd:left-[0.2rem] xmd:top-[2.7rem] mt-[1.28rem] mx-[0.94rem]'>
          <div className=' flex items-center xmd:mb-[0.2rem] mb-[0.88rem]'>
            <div className='flex items-center'>
              {Array.from({length: 5}).map((star, index) => (
                <div
                  key={index}
                  className='xmd:size-[0.1625rem] xmd:mr-[0.15rem] w-[0.75rem] h-[0.75rem] mr-[0.25rem]'
                >
                  <Image
                    src='/images/hoc-vien-duc-anh/star.svg'
                    width={100}
                    height={100}
                    priority
                    className='w-full h-full top-0 left-0'
                    alt='hoc-vien-duc-anh'
                  />
                </div>
              ))}
            </div>
            <Image
              src={'/images/hoc-vien-duc-anh/Group 1000005614.svg'}
              width={100}
              height={100}
              priority
              className='xmd:size-[0.2rem] w-[0.75rem] h-[0.75rem] object-cover ml-auto'
              alt='hoc-vien-duc-anh'
            />
          </div>
          <p
            className='z-20 w-full h-[6rem] text-greyscaletext-80 text-justify xmd:text-[0.1875rem] text-[0.75rem] font-normal 
            xmd:leading-[150%] leading-[160%] tracking-[-0.03125rem]'
          >
            {res?.acf?.message_2}
          </p>
        </div>
      </div>
      {/* text 3 */}
      <div
        className='bg-white xmd:rounded-md rounded-[0.875rem] absolute xmd:right-[0.75rem] xmd:bottom-[1.4rem] bottom-[3.7rem] right-[2rem] xmd:w-[4rem] xmd:min-h-[2rem]
       w-[15rem] md:min-h-[10.2rem]'
      >
        <Image
          src={'/images/hoc-vien-duc-anh/frame3.png'}
          alt={'hoc-vien-duc-anh'}
          width={500}
          height={500}
          className={
            'absolute right-full w-[6rem] xmd:h-[0.875rem] xmd:w-[1.6rem] xmd:bottom-[0.875rem] h-[2.75rem] bottom-[2rem]'
          }
          priority
        />
        <div className='w-[calc(100%-0.94rem*2)] mx-[0.94rem] mt-[1.28rem] z-20'>
          <div className=' flex items-center xmd:mb-[0.2rem] mb-[0.88rem]'>
            <div className='flex items-center'>
              {/* star */}
              {Array.from({length: 5}).map((star, index) => (
                <div
                  key={index}
                  className='xmd:size-[0.1625rem] xmd:mr-[0.15rem] w-[0.75rem] h-[0.75rem] mr-[0.25rem]'
                >
                  <Image
                    src='/images/hoc-vien-duc-anh/star.svg'
                    width={100}
                    height={100}
                    priority
                    className='w-full h-full top-0 left-0'
                    alt='hoc-vien-duc-anh'
                  />
                </div>
              ))}
            </div>
            <Image
              src={'/images/hoc-vien-duc-anh/Group 1000005614.svg'}
              width={100}
              height={100}
              priority
              className='xmd:size-[0.2rem] w-[0.75rem] h-[0.75rem] object-cover ml-auto'
              alt='hoc-vien-duc-anh'
            />
          </div>
          <p
            className='z-20 w-full text-greyscaletext-80 text-justify xmd:text-[0.1875rem] text-[0.75rem] font-normal 
            xmd:leading-[150%] leading-[160%] tracking-[-0.03125rem]'
          >
            {res?.acf?.message_3}
          </p>
        </div>
      </div>
      <h2 className='text-white xmd:text-[0.875rem] text-[3rem] font-medium uppercase flex flex-col absolute xmd:left-[1.4rem] left-[5rem] xmd:top-[3rem] top-[10rem]'>
        <span className='leading-[120%]'>{lang.textBanner1}</span>{' '}
        <span className='xmd:text-[1.175rem] text-[4rem] font-bold xmd:w-[10rem] w-[28.4375rem] leading-[120%]'>
          {res?.acf?.banner_main_title}
        </span>{' '}
        <span>{lang.textBanner2}</span>
      </h2>
    </section>
  )
}

export default Banner
