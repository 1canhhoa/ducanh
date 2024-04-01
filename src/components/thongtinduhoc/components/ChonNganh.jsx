import Image from 'next/image'
import Link from 'next/link'

export default function ChonNganh() {
  return (
    <section className='w-full mt-[5rem]'>
      <div className='w-full px-[11.62rem] flex flex-col justify-center items-start'>
        <h1 className='title relative w-fit mb-[2.05rem]'>
          Chọn ngành và chương trình học
          <div className='size-[0.625rem] bg-secondary-40 absolute bottom-[0.625rem] right-[-1.125rem]'></div>
        </h1>
        <div className='flex w-full justify-between items-center'>
          <div className='flex flex-col items-start w-[38.375rem]'>
            <span className='w-[38.375rem] text-[1.125rem] font-medium leading-[1.7] text-primary-50'>
              Bạn đã học xong chương trình X nào đó tại Việt Nam, và không biết
              nên chọn chương trình học nào tại nước ngoài cho phù hợp?
            </span>
            <span className='w-[38.375rem] text-[1.125rem] font-medium leading-[1.7] text-primary-50'>
              Bạn và gia đình bàn bạc mãi mà chưa quyết định được học ngành gì?
            </span>
            <span className='text-[0.875rem] mt-[1.5rem] mb-[0.5rem] font-bold uppercase leading-[1.7] text-greyscaletext-30'>
              Hãy tham khảo:
            </span>
            <ul className='flex space-y-[1.5rem] flex-col items-start text-greyscaletext-60 text-[0.875rem] font-semibold leading-[1.7] '>
              <li>
                1. Hướng dẫn của một trong số các trường đại học nổi tiếng ở
                nước ngoài về các ngành nghề- học gì để có thể làm được ở lĩnh
                vực ngành nghề đó:
                <Link
                  className='text-primary-30 text-[0.875rem] font-semibold underline'
                  href={
                    'www.adelaide.edu.au/publications/ua/media/60/get-a-great-future.pdf'
                  }
                >
                  www.adelaide.edu.au/publications/ua/media/60/get-a-great-future.pdf
                </Link>
              </li>

              <li>
                2. Đối chiếu với hoàn cảnh cá nhân bạn, hãy liên hệ với chúng
                tôi để được tư vấn về một giải pháp- lộ trình học đảm bảo: học
                tốt- chi phí phải chăng- ra trường dễ kiếm việc làm.
              </li>
            </ul>
          </div>
          <Image
            alt='chọn ngành'
            src={'/images/thongtinduhoc/bannerChonnganh.jpg'}
            width={491}
            height={294}
          />
        </div>
      </div>
      <div className='w-full pt-[4.875rem] px-[11.5625rem] pb-[6.25rem] bg-white flex flex-col items-center'>
        <div className='flex flex-col w-full items-start space-y-[1.5rem]'>
          <h2 className='desktop32 text-primary-50 flex'>
            <Image
              className='size-[0.75rem] mr-[0.5rem] mt-[1rem]'
              alt='icon'
              src={'/images/hoptac/dot.png'}
              width={12}
              height={12}
            />
            Chọn ngành học
          </h2>
          <div className='flex flex-col space-y-[1rem]'>
            <span className='text-[1rem] font-semibold leading-[1.7] text-primary-50'>
              Việc chọn ngành học của bạn phụ thuộc nhiều vào các yếu tố:
            </span>
            <div className='flex space-x-[1rem]'>
              <div className='flex justify-start items-center space-x-[1.0625rem]'>
                <Image
                  className='max-md:size-[1.25rem]'
                  alt='check'
                  src={'/images/thongtinduhoc/check.svg'}
                  width={20}
                  height={20}
                />
                <span className='body14 font-normal max-md:text-[0.875rem] max-md:leading-[1.7] text-greyscaletext-60 max-md:text-greyscaletext-60'>
                  Bạn thích trở thành ai?
                </span>
              </div>
              <div className='flex justify-start items-center space-x-[1.0625rem]'>
                <Image
                  className='max-md:size-[1.25rem]'
                  alt='check'
                  src={'/images/thongtinduhoc/check.svg'}
                  width={20}
                  height={20}
                />
                <span className='body14 font-normal max-md:text-[0.875rem] max-md:leading-[1.7] text-greyscaletext-60 max-md:text-greyscaletext-60'>
                  Bạn mạnh về lĩnh vực học tập nào?
                </span>
              </div>
              <div className='flex justify-start items-center space-x-[1.0625rem]'>
                <Image
                  className='max-md:size-[1.25rem]'
                  alt='check'
                  src={'/images/thongtinduhoc/check.svg'}
                  width={20}
                  height={20}
                />
                <span className='body14 font-normal max-md:text-[0.875rem] max-md:leading-[1.7] text-greyscaletext-60 max-md:text-greyscaletext-60'>
                  Cơ hội việc làm sau khi tốt nghiệp?
                </span>
              </div>
              <div className='flex justify-start items-center space-x-[1.0625rem]'>
                <Image
                  className='max-md:size-[1.25rem]'
                  alt='check'
                  src={'/images/thongtinduhoc/check.svg'}
                  width={20}
                  height={20}
                />
                <span className='body14 font-normal max-md:text-[0.875rem] max-md:leading-[1.7] text-greyscaletext-60 max-md:text-greyscaletext-60'>
                  Làm việc tại nước ngoài hay tại Việt Nam sau khi tốt nghiệp?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
