import Image from 'next/image'
import ItemCard from './components/ItemCard'

export default function HopTac({t}) {
  return (
    <section className='w-full text-center mb-[4.56rem]'>
      <div className='flex flex-col items-start justify-start xmd:space-y-[1.5rem] space-y-[3rem] lg:w-[76.875rem] xmd:pl-[0.75rem] mx-auto'>
        <h2 className='text-[3rem] xmd:text-[2rem] xmd:font-extrabold xmd:leading-[1.3] text-primary-50 font-extrabold relative leading-[1.2]'>
          {t.hop_tac.title}
          <div className='size-[0.625rem] bg-secondary-40 absolute bottom-[0.625rem] right-[-1.125rem]'></div>
        </h2>
        <div className='flex relative px-[4.31rem] xmd:px-[1.19rem] xmd:pt-[2.06rem] pt-[4.06rem] justify-start xmd:h-[30rem] xmd:w-[21.9375rem] h-[22.5rem] w-[76.875rem] rounded-[1.25rem] xmd:rounded-[0.5]'>
          <Image
            className='xmd:hidden absolute top-0 left-0 size-full object-cover'
            alt='banner'
            src={'/images/hoptac/banner.png'}
            width={1230}
            height={360}
          />
          <Image
            className='lg:hidden absolute top-0 left-0 size-full object-cover'
            alt='banner-mb'
            src={'/images/hoptac/banner-mb.png'}
            width={351}
            height={480}
          />
          <p className='w-[25.8125rem] xmd:w-[19.5625rem] z-10 text-[1.5rem] xmd:text-[1.25rem] text-white xmd:font-bold xmd:text-center font-semibold leading-[1.5] tracking-[-0.015rem]'>
            {t.hop_tac.banner}
          </p>
        </div>
        <div className='flexx flex-col w-full space-y-[3rem]'>
          {new Array(3).fill(0).map((e, index) => (
            <ItemCard key={index} />
          ))}
        </div>
        <div className='w-full h-[19.4375rem] relative flex justify-start lg:px-[4.75rem] pt-[4.53rem] xmd:pl-[1.63rem] xmd:pt-[2.03rem] rounded-[0.75rem] border-[1px] border-solid border-[rgba(52,104,205,0.40)] bg-white'>
          <Image
            alt='tu van'
            src={'/images/hoptac/bg-tuvan.png'}
            width={1230}
            height={311}
            className='absolute top-0 left-0 object-cover size-full xmd:hidden'
          />
          <Image
            alt='tu van'
            src={'/images/hoptac/bg-tuvan-mb.png'}
            width={351}
            height={3311}
            className='absolute top-0 left-0 object-cover size-full lg:hidden'
          />
          <div className='z-10 flex flex-col space-y-[1.5rem] '>
            <div className='flex flex-col items-start space-y-[0.75rem]'>
              <div className='flex justify-start w-full space-x-[1rem]'>
                <div className='flex body16 text-greyscaletext-80 xmd:text-linear-l9 font-bold space-x-[1rem]'>
                  <Image
                    alt='phone'
                    src={'/images/hoptac/phone.svg'}
                    width={16}
                    height={16}
                    className='pt-[0.25rem] mr-[0.5rem]'
                  />
                  Phone:
                </div>
                <span className='body16 xmd:text-greyscaletext-80 text-linear-l9 font-semibold'>
                  +84 9887 09698
                </span>
              </div>
              <div className='flex justify-start w-full space-x-[1rem]'>
                <div className='flex body16 text-greyscaletext-80 xmd:text-linear-l9 font-bold space-x-[1rem]'>
                  <Image
                    alt='phone'
                    src={'/images/hoptac/phone.svg'}
                    width={16}
                    height={16}
                    className='pt-[0.25rem] mr-[0.5rem]'
                  />
                  Phone:
                </div>
                <span className='body16 xmd:text-greyscaletext-80 text-linear-l9 font-semibold'>
                  +84 9887 09698
                </span>
              </div>
              <div className='flex justify-start w-full space-x-[1rem]'>
                <div className='flex body16 text-greyscaletext-80 xmd:text-linear-l9 font-bold space-x-[1rem]'>
                  <Image
                    alt='phone'
                    src={'/images/hoptac/phone.svg'}
                    width={16}
                    height={16}
                    className='pt-[0.25rem] mr-[0.5rem]'
                  />
                  Phone:
                </div>
                <span className='body16 xmd:text-greyscaletext-80 text-linear-l9 font-semibold'>
                  +84 9887 09698
                </span>
              </div>
            </div>
            <button className='px-[1.875rem] py-[0.9375rem]  h-fit flex justify-center items-center rounded-[0.5rem] body14 text-center bg-primary-50 text-white'>
              {t.hop_tac.tu_van}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
