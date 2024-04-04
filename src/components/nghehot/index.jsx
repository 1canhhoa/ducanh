import Image from 'next/image'
import ListNghe from './components/ListNghe'
import PostCard from './components/PostCard'

const data = [
  {
    title: 'Nghề hot tại Canada',
    link: [
      'https://www.randstad.ca/hot-jobs/',
      'https://www.lifehacker.com.au/2017/01/here-are-the-most-in-demand-jobs-for-2017/',
    ],
  },
  {
    title: 'Nghề hot tại Canada',
    link: ['https://www.randstad.ca/hot-jobs/'],
  },
  {
    title: 'Nghề hot tại Canada',
    link: [
      'https://www.randstad.ca/hot-jobs/',
      'https://www.lifehacker.com.au/2017/01/here-are-the-most-in-demand-jobs-for-2017/',
    ],
  },
  {
    title: 'Nghề hot tại Canada',
    link: ['https://www.randstad.ca/hot-jobs/'],
  },
  {
    title: 'Nghề hot tại Canada',
    link: [
      'https://www.randstad.ca/hot-jobs/',
      'https://www.lifehacker.com.au/2017/01/here-are-the-most-in-demand-jobs-for-2017/',
      'https://www.lifehacker.com.au/2017/01/here-are-the-most-in-demand-jobs-for-2017/',
    ],
  },
  {
    title: 'Nghề hot tại Canada',
    link: [
      'https://www.randstad.ca/hot-jobs/',
      'https://www.lifehacker.com.au/2017/01/here-are-the-most-in-demand-jobs-for-2017/',
    ],
  },
  {
    title: 'Nghề hot tại Canada',
    link: ['https://www.randstad.ca/hot-jobs/'],
  },
]

export default function NgheHot({t}) {
  return (
    <section className='w-full'>
      <div className='flex flex-col items-start mb-[2rem] xmd:px-[0.75rem]'>
        <h1 className='text-[3rem] xmd:text-[2rem] xmd:font-extrabold xmd:leading-[1.3] text-primary-50 font-extrabold relative leading-[1.2]'>
          {t.nghe_hot.title}
          <div className='size-[0.625rem] bg-secondary-40 absolute bottom-[0.625rem] right-[-1.125rem]'></div>
        </h1>
        <div className='mt-[2.56rem] mb-[2.41rem] xmd:my-[1.5rem] xmd:pt-[2.06rem] px-[1.19rem] xmd:h-[24.375rem] xmd:w-[21.9375rem] h-[22.5rem] w-[71.125rem] rounded-[1.25rem] xmd:rounded-[0.5rem] relative lg:pl-[4.31rem] pt-[5.38rem]'>
          <Image
            className='xmd:hidden size-full absolute top-0 left-0 '
            alt='banner'
            src={'/images/nghehot/banner.jpg'}
            width={1138}
            height={360}
          />
          <Image
            className='size-full absolute top-0 left-0 lg:hidden'
            alt='banner'
            src={'/images/nghehot/banner-mb.jpg'}
            width={351}
            height={390}
          />
          <div className='flex relative z-10 flex-col space-y-[1.22rem]'>
            <span className='w-[25.9375rem] xmd:text-center xmd:w-[19.5625rem] sub24 text-white'>
              {t.nghe_hot.banner.title}
            </span>
            <span className='xmd:hidden w-[24.4375rem] body16 text-white'>
              {t.nghe_hot.banner.description}
            </span>
          </div>
        </div>
        <div className='flex flex-col items-start space-y-[1.5rem] xmd:space-y-[0.75rem] lg:py-[1.5rem] lg:w-[71.0625rem] border-y-[1px] border-solid border-greyscaletext-5'>
          <span className='text-[1.25rem] xmd:w-[21.9375rem] font-bold text-primary-50 leading-[1.6] xmd:body16 xmd:font-semibold xmd:leading-[1.5]'>
            {t.nghe_hot.support_title}
          </span>
          <div className='flex flex-col items-start justify-center space-y-[0.75rem]'>
            {t.nghe_hot.support_text.map((e, index) => (
              <div
                key={index}
                className='flex justify-start space-x-[0.625rem]'
              >
                <Image
                  className='xmd:size-[1.25rem]'
                  alt='check'
                  src={'/images/nghehot/check.svg'}
                  width={20}
                  height={20}
                />
                <span className='body16 xmd:text-[0.875rem] xmd:leading-[1.7] font-medium text-greyscaletext-50 xmd:text-greyscaletext-60'>
                  {e}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-[1.5rem] w-full flex flex-col items-start space-y-[1.7rem] py-[1.5rem]'>
          <span className='text-[1.25rem] xmd:w-[22.125rem] font-bold leading-[1.6] text-primary-50 xmd:body16'>
            {t.nghe_hot.list_hot}
          </span>
          {data.map((e, index) => (
            <div
              key={index}
              className='flex flex-col w-full items-start xmd:rounded-[0.375rem] xmd:pb-[1.5rem] xmd:border-[1px] xmd:border-solid xmd:border-[rgba(19,43,125,0.20)]'
            >
              <ListNghe
                data={e}
                index={index}
              />
            </div>
          ))}
        </div>
        <div className='mt-[4.38rem] xmd:mt-[2.38rem] flex flex-col w-full items-start justify-center lg:space-y-[1.5rem]'>
          <h5 className='w-[32.6875rem] xmd:w-[21.9375rem] text-primary-60 font-bold text-[1.5rem] xmd:body16'>
            {t.nghe_hot.tham_khao.title}
          </h5>
          <p className='w-[64.375rem] xmd:mb-[2rem] xmd:w-[21.9375rem] text-[1rem] xmd:text-[0.875rem] xmd:font-normal font-medium leading-[1.6] text-greyscaletext-80'>
            {t.nghe_hot.tham_khao.description}
          </p>
          <div className='flex xmd:flex-col lg:flex-wrap justify-start w-full'>
            {new Array(6).fill(0).map((e, index) => (
              <PostCard key={index} />
            ))}
          </div>
          <div className='w-full xmd:mt-[2.07rem] flex justify-center space-x-[0.75rem]'>
            <button className='size-[3rem] p-[0.875rem] flex justify-center items-center rounded-[0.5rem]'>
              <Image
                alt='left'
                src={'/images/nghehot/left.svg'}
                width={20}
                height={20}
              />
            </button>
            <button className='size-[3rem] p-[0.875rem] flex justify-center items-center rounded-[0.5rem] border-[1px] border-solid border-primary-10 bg-primary-5'>
              1
            </button>
            <button className='size-[3rem] p-[0.875rem] flex justify-center items-center rounded-[0.5rem] border-[1px] border-solid border-primary-10 bg-white'>
              2
            </button>
            <button className='size-[3rem] p-[0.875rem] flex justify-center items-center rounded-[0.5rem] border-[1px] border-solid border-primary-10 bg-white'>
              ...
            </button>
            <button className='size-[3rem] p-[0.875rem] flex justify-center items-center rounded-[0.5rem] border-[1px] border-solid border-primary-10 bg-white'>
              9
            </button>
            <button className='size-[3rem] p-[0.875rem] flex justify-center items-center rounded-[0.5rem]'>
              <Image
                alt='right'
                src={'/images/nghehot/right.svg'}
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
