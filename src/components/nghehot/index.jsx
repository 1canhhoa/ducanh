import Image from 'next/image'
import Link from 'next/link'
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

export default function NgheHot() {
  return (
    <section className='w-full'>
      <div className='flex flex-col items-start mb-[2rem] max-md:px-[0.75rem]'>
        <h1 className='text-[3rem] max-md:text-[2rem] max-md:font-extrabold max-md:leading-[1.3] text-primary-50 font-extrabold relative leading-[1.2]'>
          Nghề HOT
          <div className='size-[0.625rem] bg-secondary-40 absolute bottom-[0.625rem] right-[-1.125rem]'></div>
        </h1>
        <div className='mt-[2.56rem] mb-[2.41rem] max-md:my-[1.5rem] max-md:pt-[2.06rem] px-[1.19rem] max-md:h-[24.375rem] max-md:w-[21.9375rem] h-[22.5rem] w-[71.125rem] rounded-[1.25rem] max-md:rounded-[0.5rem] relative lg:pl-[4.31rem] pt-[5.38rem]'>
          <Image
            className='max-md:hidden size-full absolute top-0 left-0 '
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
            <span className='w-[25.9375rem] max-md:text-center max-md:w-[19.5625rem] sub24 text-white'>
              Chọn nghề gì để học là một trong những nội dung đặc biệt quan
              trọng.
            </span>
            <span className='max-md:hidden w-[24.4375rem] body16 text-white'>
              Tham khảo thông tin về ngành học cụ thể, yêu cầu để có thể theo
              học/ làm ngành này, nhu cầu việc làm của ngành này, thu nhập trung
              bình thông qua các thông tin dưới đây:
            </span>
          </div>
        </div>
        <div className='flex flex-col items-start space-y-[1.5rem] max-md:space-y-[0.75rem] lg:py-[1.5rem] lg:w-[71.0625rem] border-y-[1px] border-solid border-greyscaletext-5'>
          <span className='text-[1.25rem] max-md:w-[21.9375rem] font-bold text-primary-50 leading-[1.6] max-md:body16 max-md:font-semibold max-md:leading-[1.5]'>
            Công ty Đức Anh hỗ trợ bạn xác định:
          </span>
          <div className='flex flex-col items-start justify-center space-y-[0.75rem]'>
            <div className='flex justify-start space-x-[0.625rem]'>
              <Image
                className='max-md:size-[1.25rem]'
                alt='check'
                src={'/images/nghehot/check.svg'}
                width={20}
                height={20}
              />
              <span className='body16 max-md:text-[0.875rem] max-md:leading-[1.7] font-medium text-greyscaletext-50 max-md:text-greyscaletext-60'>
                Ngành bạn mong muốn học;
              </span>
            </div>
            <div className='flex justify-start space-x-[0.625rem]'>
              <Image
                className='max-md:size-[1.25rem]'
                alt='check'
                src={'/images/nghehot/check.svg'}
                width={20}
                height={20}
              />
              <span className='body16 max-md:text-[0.875rem] max-md:leading-[1.7] font-medium text-greyscaletext-50 max-md:text-greyscaletext-60'>
                Khả năng thực tế của bạn
              </span>
            </div>
            <div className='flex justify-start space-x-[0.625rem]'>
              <Image
                className='max-md:size-[1.25rem]'
                alt='check'
                src={'/images/nghehot/check.svg'}
                width={20}
                height={20}
              />
              <span className='body16 max-md:text-[0.875rem] max-md:leading-[1.7] font-medium text-greyscaletext-50 max-md:text-greyscaletext-60'>
                Nhu cầu thực tế của thị trường lao động ở nước ngoài và Việt Nam
              </span>
            </div>
            <div className='flex justify-start space-x-[0.625rem]'>
              <Image
                className='max-md:size-[1.25rem]'
                alt='check'
                src={'/images/nghehot/check.svg'}
                width={20}
                height={20}
              />
              <span className='body16 max-md:text-[0.875rem] max-md:leading-[1.7] font-medium text-greyscaletext-50 max-md:text-greyscaletext-60'>
                Ngành học phù hợp nhất với bạn theo nguyện vọng cá nhân bạn, nhu
                cầu của thị trường và khả năng học của bạn.
              </span>
            </div>
          </div>
        </div>
        <div className='mt-[1.5rem] w-full flex flex-col items-start space-y-[1.7rem] py-[1.5rem]'>
          <span className='text-[1.25rem] max-md:w-[22.125rem] font-bold leading-[1.6] text-primary-50 max-md:body16'>
            Dưới đây là danh sách các ngành nghề HOT gợi ý từ thống kê của các
            nước:
          </span>
          {data.map((e, index) => (
            <div
              key={index}
              className='flex flex-col w-full items-start max-md:rounded-[0.375rem] max-md:pb-[1.5rem] max-md:border-[1px] max-md:border-solid max-md:border-[rgba(19,43,125,0.20)]'
            >
              <ListNghe
                data={e}
                index={index}
              />
            </div>
          ))}
        </div>
        <div className='mt-[4.38rem] max-md:mt-[2.38rem] flex flex-col w-full items-start justify-center lg:space-y-[1.5rem]'>
          <h5 className='w-[32.6875rem] max-md:w-[21.9375rem] text-primary-60 font-bold text-[1.5rem] max-md:body16'>
            Bạn hãy đọc các bài dưới đây để tham khảo cụ thể về những ngành mà
            bạn quan tâm:
          </h5>
          <p className='w-[64.375rem] max-md:mb-[2rem] max-md:w-[21.9375rem] text-[1rem] max-md:text-[0.875rem] max-md:font-normal font-medium leading-[1.6] text-greyscaletext-80'>
            Các bài này cung cấp thông tin về ngành học cụ thể, yêu cầu để có
            thể theo học/ làm ngành này, nhu cầu việc làm của ngành này, thu
            nhập trung bình. Thông tin được trích dẫn từ các nguồn chính thức,
            từ Cục thống kê hoặc Bộ lao động các nước:
          </p>
          <div className='flex max-md:flex-col lg:flex-wrap justify-start w-full'>
            {new Array(6).fill(0).map((e, index) => (
              <PostCard key={index} />
            ))}
          </div>
          <div className='w-full max-md:mt-[2.07rem] flex justify-center space-x-[0.75rem]'>
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
