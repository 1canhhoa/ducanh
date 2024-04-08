import Image from 'next/image'

export default function ChuanBi({text}) {
  return (
    <section
      id='chuan_bi'
      className='lg:w-[76.875rem] w-full lg:mx-auto mb-[8.12rem] xmd:mb-[3rem]'
    >
      <div className='flex flex-col items-start xmd:w-full xmd:px-[0.75rem]'>
        <h1 className='title xmd:mb32 relative w-fit xmd:mb-[1.75rem] mb-[2.05rem] xlg:pl-[5.3rem] xmd:pl-0'>
          {text.information.title_2}
          <div className='size-[0.625rem] bg-secondary-40 absolute bottom-[0.625rem] right-[-1.125rem]'></div>
        </h1>
        <div className='flex xmd:h-[37rem] xmd:w-[21.9375rem] xmd:mb-[1.75rem] mb-[5rem] xlg:h-[30.875rem] h-[28.875rem] pl-[3.69rem] pt-[2.87rem] xmd:pl-[1.25rem] xmd:pt-[1.3rem] xlg:w-full w-[76.875rem] flex-col items-start relative'>
          <Image
            className='xmd:hidden rounded-[1.25rem] absolute top-0 left-0 size-full'
            alt='chuẩn bị du hoc'
            src={'/images/thongtinduhoc/banner3.jpg'}
            width={1230}
            height={462}
          />
          <Image
            className='lg:hidden xlg:hidden xmd:block rounded-[0.75rem] absolute top-0 left-0 size-full'
            alt='chuẩn bị du hoc'
            src={'/images/thongtinduhoc/banner3mb.jpg'}
            width={351}
            height={592}
          />
          <div className='flex flex-col items-start z-10'>
            <span className='w-[24.1875rem] xlg:w-[30rem] xmd:w-[19.375rem] text-white text-[1.25rem] xmd:text-[1.25rem] xlg:text-[1.5rem] font-bold leading-[1.5]'>
              {text.information.banner_prepare}
            </span>
            <div className='flex mt-[2.25rem] xmd:mt-[1rem] flex-col items-start justify-center space-y-[1.53rem] xmd:space-y-[0.75rem]'>
              <div className='flex justify-start space-x-[1.0625rem] xmd:space-x-[0.75rem]'>
                <Image
                  className='max-md:size-[1.25rem]'
                  alt='check'
                  src={'/images/thongtinduhoc/check.svg'}
                  width={20}
                  height={20}
                />
                <span className='text-[1.5rem] xmd:mb18 xmd:space-x-[0.75rem] font-bold leading-[1.3] max-md:text-[0.875rem] max-md:leading-[1.7] text-white max-md:text-greyscaletext-60'>
                  {text.information.text_banner_prepare.banner_finance}
                </span>
              </div>
              <div className='flex justify-start space-x-[1.0625rem]'>
                <Image
                  className='max-md:size-[1.25rem]'
                  alt='check'
                  src={'/images/thongtinduhoc/check.svg'}
                  width={20}
                  height={20}
                />
                <span className='text-[1.5rem] xmd:mb18 xmd:space-x-[0.75rem] font-bold leading-[1.3] max-md:text-[0.875rem] max-md:leading-[1.7] text-white max-md:text-greyscaletext-60'>
                  {text.information.text_banner_prepare.banner_tknowledge}
                </span>
              </div>
              <div className='flex justify-start space-x-[1.0625rem]'>
                <Image
                  className='max-md:size-[1.25rem]'
                  alt='check'
                  src={'/images/thongtinduhoc/check.svg'}
                  width={20}
                  height={20}
                />
                <span className='text-[1.5rem] xmd:mb18 xmd:space-x-[0.75rem] font-bold leading-[1.3] max-md:text-[0.875rem] max-md:leading-[1.7] text-white max-md:text-greyscaletext-60'>
                  {text.information.text_banner_prepare.banner_thought}
                </span>
              </div>
              <div className='flex justify-start space-x-[1.0625rem]'>
                <Image
                  className='max-md:size-[1.25rem]'
                  alt='check'
                  src={'/images/thongtinduhoc/check.svg'}
                  width={20}
                  height={20}
                />
                <span className='text-[1.5rem] xmd:mb18 xmd:space-x-[0.75rem] font-bold leading-[1.3] max-md:text-[0.875rem] max-md:leading-[1.7] text-white max-md:text-greyscaletext-60'>
                  {text.information.text_banner_prepare.banner_language}
                </span>
              </div>
              <div className='flex justify-start space-x-[1.0625rem]'>
                <Image
                  className='max-md:size-[1.25rem]'
                  alt='check'
                  src={'/images/thongtinduhoc/check.svg'}
                  width={20}
                  height={20}
                />
                <span className='text-[1.5rem] xmd:mb18 xmd:space-x-[0.75rem] font-bold leading-[1.3] max-md:text-[0.875rem] max-md:leading-[1.7] text-white max-md:text-greyscaletext-60'>
                  {text.information.text_banner_prepare.banner_soft_skills}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-start xlg:px-[5.3rem] xmd:px-0 w-full space-y-[2.25rem]'>
          <div className='flex xlg:flex-col w-full items-start'>
            <h5 className='w-[15.6875rem] xlg:text-[2rem] xmd:mb18 xmd:text-[1rem] sub24 text-primary-50 font-bold'>
              1.Về tài chính
            </h5>
            <div className='flex flex-col items-start flex-1 space-y-[0.5rem] xmd:space-y-[0.37rem] xlg:mt-[0.6rem]'>
              <span className='body16 xmd:text-[1rem] xlg:text-[2rem] text-primary-50'>
                Nhất thiết, bạn phải có đủ tiền học và tiền ăn ở trong thời gian
                du học.
              </span>
              <p className='text-greyscaletext-70 xmd:body14 xmd:text-[1rem] xlg:text-[2rem] font-medium text-[0.875rem]'>
                Cần nhớ rằng tuy một số nước cho phép sinh viên lao động để có
                thêm thu nhập, nhưng thu nhập từ nguồn này khó đủ để trang trải
                các chi phí lớn trên. Có một thuận lợi là số tiền trên không
                phải nộp một lần cho toàn bộ khoá học mà sinh viên được phép nộp
                theo năm hoặc theo kỳ; và tiền sinh hoạt phí thì sinh viên trên
                18 tuổi có thể tự quản lý, nên thực ra, chỉ cần bạn có kế hoạch
                sử dụng hợp lý là ổn.
              </p>
            </div>
          </div>
          <div className='flex xlg:flex-col w-full items-start'>
            <h5 className='w-[15.6875rem] xlg:text-[2rem] xmd:mb18 xmd:text-[1rem] sub24 text-primary-50 font-bold'>
              1.Về tài chính
            </h5>
            <div className='flex flex-col items-start flex-1 space-y-[0.5rem] xmd:space-y-[0.37rem] xlg:mt-[0.6rem]'>
              <span className='body16 xmd:text-[1rem] xlg:text-[2rem] text-primary-50'>
                Nhất thiết, bạn phải có đủ tiền học và tiền ăn ở trong thời gian
                du học.
              </span>
              <p className='text-greyscaletext-70 xmd:body14 xmd:text-[1rem] xlg:text-[2rem] font-medium text-[0.875rem]'>
                Cần nhớ rằng tuy một số nước cho phép sinh viên lao động để có
                thêm thu nhập, nhưng thu nhập từ nguồn này khó đủ để trang trải
                các chi phí lớn trên. Có một thuận lợi là số tiền trên không
                phải nộp một lần cho toàn bộ khoá học mà sinh viên được phép nộp
                theo năm hoặc theo kỳ; và tiền sinh hoạt phí thì sinh viên trên
                18 tuổi có thể tự quản lý, nên thực ra, chỉ cần bạn có kế hoạch
                sử dụng hợp lý là ổn.
              </p>
            </div>
          </div>
          <div className='flex xlg:flex-col w-full items-start'>
            <h5 className='w-[15.6875rem] xlg:text-[2rem] xmd:mb18 xmd:text-[1rem] sub24 text-primary-50 font-bold'>
              1.Về tài chính
            </h5>
            <div className='flex flex-col items-start flex-1 space-y-[0.5rem] xmd:space-y-[0.37rem] xlg:mt-[0.6rem]'>
              <span className='body16 xmd:text-[1rem] xlg:text-[2rem] text-primary-50'>
                Nhất thiết, bạn phải có đủ tiền học và tiền ăn ở trong thời gian
                du học.
              </span>
              <p className='text-greyscaletext-70 xmd:body14 xmd:text-[1rem] xlg:text-[2rem] font-medium text-[0.875rem]'>
                Cần nhớ rằng tuy một số nước cho phép sinh viên lao động để có
                thêm thu nhập, nhưng thu nhập từ nguồn này khó đủ để trang trải
                các chi phí lớn trên. Có một thuận lợi là số tiền trên không
                phải nộp một lần cho toàn bộ khoá học mà sinh viên được phép nộp
                theo năm hoặc theo kỳ; và tiền sinh hoạt phí thì sinh viên trên
                18 tuổi có thể tự quản lý, nên thực ra, chỉ cần bạn có kế hoạch
                sử dụng hợp lý là ổn.
              </p>
            </div>
          </div>
          <div className='flex xlg:flex-col w-full items-start'>
            <h5 className='w-[15.6875rem] xlg:text-[2rem] xmd:mb18 xmd:text-[1rem] sub24 text-primary-50 font-bold'>
              1.Về tài chính
            </h5>
            <div className='flex flex-col items-start flex-1 space-y-[0.5rem] xmd:space-y-[0.37rem] xlg:mt-[0.6rem]'>
              <span className='body16 xmd:text-[1rem] xlg:text-[2rem] text-primary-50'>
                Nhất thiết, bạn phải có đủ tiền học và tiền ăn ở trong thời gian
                du học.
              </span>
              <p className='text-greyscaletext-70 xmd:body14 xmd:text-[1rem] xlg:text-[2rem] font-medium text-[0.875rem]'>
                Cần nhớ rằng tuy một số nước cho phép sinh viên lao động để có
                thêm thu nhập, nhưng thu nhập từ nguồn này khó đủ để trang trải
                các chi phí lớn trên. Có một thuận lợi là số tiền trên không
                phải nộp một lần cho toàn bộ khoá học mà sinh viên được phép nộp
                theo năm hoặc theo kỳ; và tiền sinh hoạt phí thì sinh viên trên
                18 tuổi có thể tự quản lý, nên thực ra, chỉ cần bạn có kế hoạch
                sử dụng hợp lý là ổn.
              </p>
            </div>
          </div>
        </div>
        <div className='mb-[5rem] flex xmd:items-start items-center justify-start mt-[4.81rem] pl-[3.75rem] xmd:pt-[2.37rem] xmd:px-[2.06rem] relative xmd:w-[21.9375rem] xmd:h-[31.75rem] h-[15rem] xlg:h-[20rem] w-[76.875rem] xlg:w-full'>
          <Image
            className='absolute top-0 left-0 size-full xmd:hidden'
            alt='5 yếu tố học sinh cần chuẩn bị'
            src={'/images/thongtinduhoc/banner4.jpg'}
            width={1230}
            height={240}
          />
          <Image
            className='absolute top-0 left-0 size-full xlg:hidden xmd:block lg:hidden'
            alt='5 yếu tố học sinh cần chuẩn bị'
            src={'/images/thongtinduhoc/banner4mb.jpg'}
            width={351}
            height={508}
          />
          <p className='w-[43.3125rem] xmd:sub18 z-10 text-[1.25rem] font-medium leading-[1.5] text-white'>
            5 yếu tố trên là những yếu tố học sinh cần chuẩn bị kỹ càng để thuận
            lợi cho cuộc sống khi du học. Ngoài ra Du học Đức Anh cũng liệt kê
            ra một vài yếu tố khác mà bạn nên quan tâm để quá trình du học được
            suôn sẻ. Hãy tìm hiểu ngay bên dưới nhé
          </p>
        </div>
        <div className='flex flex-col items-start w-full space-y-[2.25rem] xlg:px-[5.3rem] xmd:p-0'>
          <div className='flex xlg:flex-col w-full items-start'>
            <h5 className='w-[15.6875rem] xlg:text-[2rem] xmd:mb18 xmd:text-[1rem] sub24 text-primary-50 font-bold'>
              1.Về tài chính
            </h5>
            <div className='flex flex-col items-start flex-1 space-y-[0.5rem] xmd:space-y-[0.37rem] xlg:mt-[0.6rem]'>
              <span className='body16 xmd:text-[1rem] xlg:text-[2rem] text-primary-50'>
                Nhất thiết, bạn phải có đủ tiền học và tiền ăn ở trong thời gian
                du học.
              </span>
              <p className='text-greyscaletext-70 xmd:body14 xmd:text-[1rem] xlg:text-[2rem] font-medium text-[0.875rem]'>
                Cần nhớ rằng tuy một số nước cho phép sinh viên lao động để có
                thêm thu nhập, nhưng thu nhập từ nguồn này khó đủ để trang trải
                các chi phí lớn trên. Có một thuận lợi là số tiền trên không
                phải nộp một lần cho toàn bộ khoá học mà sinh viên được phép nộp
                theo năm hoặc theo kỳ; và tiền sinh hoạt phí thì sinh viên trên
                18 tuổi có thể tự quản lý, nên thực ra, chỉ cần bạn có kế hoạch
                sử dụng hợp lý là ổn.
              </p>
            </div>
          </div>
          <div className='flex xlg:flex-col w-full items-start'>
            <h5 className='w-[15.6875rem] xlg:text-[2rem] xmd:mb18 xmd:text-[1rem] sub24 text-primary-50 font-bold'>
              1.Về tài chính
            </h5>
            <div className='flex flex-col items-start flex-1 space-y-[0.5rem] xmd:space-y-[0.37rem] xlg:mt-[0.6rem]'>
              <span className='body16 xmd:text-[1rem] xlg:text-[2rem] text-primary-50'>
                Nhất thiết, bạn phải có đủ tiền học và tiền ăn ở trong thời gian
                du học.
              </span>
              <p className='text-greyscaletext-70 xmd:body14 xmd:text-[1rem] xlg:text-[2rem] font-medium text-[0.875rem]'>
                Cần nhớ rằng tuy một số nước cho phép sinh viên lao động để có
                thêm thu nhập, nhưng thu nhập từ nguồn này khó đủ để trang trải
                các chi phí lớn trên. Có một thuận lợi là số tiền trên không
                phải nộp một lần cho toàn bộ khoá học mà sinh viên được phép nộp
                theo năm hoặc theo kỳ; và tiền sinh hoạt phí thì sinh viên trên
                18 tuổi có thể tự quản lý, nên thực ra, chỉ cần bạn có kế hoạch
                sử dụng hợp lý là ổn.
              </p>
            </div>
          </div>
          <div className='flex xlg:flex-col w-full items-start'>
            <h5 className='w-[15.6875rem] xlg:text-[2rem] xmd:mb18 xmd:text-[1rem] sub24 text-primary-50 font-bold'>
              1.Về tài chính
            </h5>
            <div className='flex flex-col items-start flex-1 space-y-[0.5rem] xmd:space-y-[0.37rem] xlg:mt-[0.6rem]'>
              <span className='body16 xmd:text-[1rem] xlg:text-[2rem] text-primary-50'>
                Nhất thiết, bạn phải có đủ tiền học và tiền ăn ở trong thời gian
                du học.
              </span>
              <p className='text-greyscaletext-70 xmd:body14 xmd:text-[1rem] xlg:text-[2rem] font-medium text-[0.875rem]'>
                Cần nhớ rằng tuy một số nước cho phép sinh viên lao động để có
                thêm thu nhập, nhưng thu nhập từ nguồn này khó đủ để trang trải
                các chi phí lớn trên. Có một thuận lợi là số tiền trên không
                phải nộp một lần cho toàn bộ khoá học mà sinh viên được phép nộp
                theo năm hoặc theo kỳ; và tiền sinh hoạt phí thì sinh viên trên
                18 tuổi có thể tự quản lý, nên thực ra, chỉ cần bạn có kế hoạch
                sử dụng hợp lý là ổn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
