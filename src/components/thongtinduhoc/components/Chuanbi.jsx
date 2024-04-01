import Image from 'next/image'

export default function ChuanBi() {
  return (
    <section className='lg:w-[76.875rem] mx-auto mb-[8.12rem]'>
      <div className='flex flex-col items-start'>
        <h1 className='title relative w-fit mb-[2.05rem]'>
          Chuẩn bị cho du học
          <div className='size-[0.625rem] bg-secondary-40 absolute bottom-[0.625rem] right-[-1.125rem]'></div>
        </h1>
        <div className='flex mb-[5rem] h-[28.875rem] pl-[3.69rem] pt-[2.87rem] w-[76.875rem] flex-col items-start relative'>
          <Image
            className='rounded-[1.25rem] absolute top-0 left-0 size-full'
            alt='chuẩn bị du hoc'
            src={'/images/thongtinduhoc/banner3.jpg'}
            width={1230}
            height={462}
          />
          <div className='flex flex-col items-start z-10'>
            <span className='w-[24.1875rem] text-white text-[1.25rem] font-bold leading-[1.5]'>
              Phụ huynh và học sinh quan tâm đến du học cần chuẩn bị tốt ít nhất
              5 yếu tố sau:
            </span>
            <div className='flex mt-[2.25rem] flex-col items-start justify-center space-y-[1.53rem]'>
              <div className='flex justify-start space-x-[1.0625rem]'>
                <Image
                  className='max-md:size-[1.25rem]'
                  alt='check'
                  src={'/images/thongtinduhoc/check.svg'}
                  width={20}
                  height={20}
                />
                <span className='text-[1.5rem] font-bold leading-[1.3] max-md:text-[0.875rem] max-md:leading-[1.7] text-white max-md:text-greyscaletext-60'>
                  Tài chính
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
                <span className='text-[1.5rem] font-bold leading-[1.3] max-md:text-[0.875rem] max-md:leading-[1.7] text-white max-md:text-greyscaletext-60'>
                  Kiến thức
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
                <span className='text-[1.5rem] font-bold leading-[1.3] max-md:text-[0.875rem] max-md:leading-[1.7] text-white max-md:text-greyscaletext-60'>
                  Tư tưởng
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
                <span className='text-[1.5rem] font-bold leading-[1.3] max-md:text-[0.875rem] max-md:leading-[1.7] text-white max-md:text-greyscaletext-60'>
                  Ngoại ngữ
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
                <span className='text-[1.5rem] font-bold leading-[1.3] max-md:text-[0.875rem] max-md:leading-[1.7] text-white max-md:text-greyscaletext-60'>
                  Các kỹ năng mền
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-start w-full space-y-[2.25rem]'>
          <div className='flex w-full items-start'>
            <h5 className='w-[15.6875rem] sub24'>1.Về tài chính</h5>
            <div className='flex flex-col items-start flex-1 space-y-[0.5rem]'>
              <span className='body16 text-primary-50'>
                Nhất thiết, bạn phải có đủ tiền học và tiền ăn ở trong thời gian
                du học.
              </span>
              <p className='text-greyscaletext-70 font-medium text-[0.875rem]'>
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
          <div className='flex w-full items-start'>
            <h5 className='w-[15.6875rem] sub24'>2.Về kiến thức</h5>
            <div className='flex flex-col items-start flex-1 space-y-[0.5rem]'>
              <span className='body16 text-primary-50'>
                Nhất thiết, bạn phải có đủ tiền học và tiền ăn ở trong thời gian
                du học.
              </span>
              <p className='text-greyscaletext-70 font-medium text-[0.875rem]'>
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
          <div className='flex w-full items-start'>
            <h5 className='w-[15.6875rem] sub24'>3.Về tư tưởng</h5>
            <div className='flex flex-col items-start flex-1 space-y-[0.5rem]'>
              <span className='body16 text-primary-50'>
                Nhất thiết, bạn phải có đủ tiền học và tiền ăn ở trong thời gian
                du học.
              </span>
              <p className='text-greyscaletext-70 font-medium text-[0.875rem]'>
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
          <div className='flex w-full items-start'>
            <h5 className='w-[15.6875rem] sub24'>4.Về ngoại ngữ</h5>
            <div className='flex flex-col items-start flex-1 space-y-[0.5rem]'>
              <span className='body16 text-primary-50'>
                Ngôn ngữ là chìa khóa mở ra cánh cửa của tri thức và trải nghiệm
                mới trong cuộc sống du học.
              </span>
              <p className='text-greyscaletext-70 font-medium text-[0.875rem]'>
                Hãy xem xét các yêu cầu về ngoại ngữ dưới đây và tự chuẩn bị
                những gì mình cần phải có. Với các nước nói tiếng Anh, yêu cầu
                chung là:
              </p>
              <ul>
                <li className='text-greyscaletext-70 font-medium text-[0.875rem]'>
                  Để nhập học dự bị đại học, A level hoặc cao đẳng: PTE Academic
                  36 – 43 điểm, tương đương IELTS đạt 5.0 hoặc 5.5 trở lên và
                  không môn nào dưới 5;
                </li>
                <li className='text-greyscaletext-70 font-medium text-[0.875rem]'>
                  Để vào thẳng đại học: PTE Academic từ 50 – 60 điểm, tương
                  đương IELTS 6.0- 7.0  trở lên và không môn nào dưới 6;
                </li>
                <li className='text-greyscaletext-70 font-medium text-[0.875rem]'>
                  SAT, GRE và GMAT nếu du học US, Canada hoặc MBA ở một số nước;
                </li>
                <li className='text-greyscaletext-70 font-medium text-[0.875rem]'>
                  Để xin visa du học, một số nước yêu cầu học sinh đạt trình độ
                  tiếng Anh nhất định. Hãy liên hệ với công ty Đức Anh để biết
                  yêu cầu cụ thể.
                </li>
              </ul>
              <p className='text-greyscaletext-60 font-normal italic text-[0.875rem]'>
                Trong trường hợp học sinh chưa có điểm PTE Academic, IELTS hay
                TOEFL, học sinh chỉ cần làm bài kiểm tra trình độ tiếng Anh đầu
                vào của các trường tại công ty Đức Anh để trường xếp lớp tiếng
                Anh ở trình độ phù hợp tại trường và xây dựng kế hoạch học tập
                chuyên môn cho học sinh.
              </p>
            </div>
          </div>
          <div className='flex w-full items-start'>
            <h5 className='w-[15.6875rem] sub24'>5.Các kỹ năng mềm</h5>
            <div className='flex flex-col items-start flex-1 space-y-[0.5rem]'>
              <span className='body16 text-primary-50'>
                Nhất thiết, bạn phải có đủ tiền học và tiền ăn ở trong thời gian
                du học.
              </span>
              <p className='text-greyscaletext-70 font-medium text-[0.875rem]'>
                Rất quan trọng. Bạn cần tự chuẩn bị cho mình các kỹ năng này để
                tồn tại và thành công ở môi trường mới lạ. Chúng bao gồm nhưng
                không giới hạn trong các kỹ năng: máy tính, sử dụng internet và
                điện thoại, giao tiếp, quản lý thời gian, quản lý công việc,
                quản lý chi tiêu, đi chợ và nấu ăn, chọn hàng, sinh hoạt/ vệ
                sinh cá nhân…
              </p>
            </div>
          </div>
        </div>
        <div className='mb-[5rem] flex items-center justify-start mt-[4.81rem] pl-[3.75rem] relative h-[15rem] w-[76.875rem]'>
          <Image
            className='absolute top-0 left-0 size-full'
            alt='5 yếu tố học sinh cần chuẩn bị'
            src={'/images/thongtinduhoc/banner4.jpg'}
            width={1230}
            height={240}
          />
          <p className='w-[43.3125rem] z-10 text-[1.25rem] font-medium leading-[1.5] text-white'>
            5 yếu tố trên là những yếu tố học sinh cần chuẩn bị kỹ càng để thuận
            lợi cho cuộc sống khi du học. Ngoài ra Du học Đức Anh cũng liệt kê
            ra một vài yếu tố khác mà bạn nên quan tâm để quá trình du học được
            suôn sẻ. Hãy tìm hiểu ngay bên dưới nhé
          </p>
        </div>
        <div className='flex flex-col items-start w-full space-y-[2.25rem]'>
          <div className='flex w-full items-start'>
            <h5 className='w-[15.6875rem] sub24'>6.Về tài chính</h5>
            <div className='flex flex-col items-start flex-1 space-y-[0.5rem]'>
              <span className='body16 text-primary-50'>
                Nhất thiết, bạn phải có đủ tiền học và tiền ăn ở trong thời gian
                du học.
              </span>
              <p className='text-greyscaletext-70 font-medium text-[0.875rem]'>
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
          <div className='flex w-full items-start'>
            <h5 className='w-[15.6875rem] sub24'>7.Về kiến thức</h5>
            <div className='flex flex-col items-start flex-1 space-y-[0.5rem]'>
              <span className='body16 text-primary-50'>
                Nhất thiết, bạn phải có đủ tiền học và tiền ăn ở trong thời gian
                du học.
              </span>
              <p className='text-greyscaletext-70 font-medium text-[0.875rem]'>
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
          <div className='flex w-full items-start'>
            <h5 className='w-[15.6875rem] sub24'>8.Về tư tưởng</h5>
            <div className='flex flex-col items-start flex-1 space-y-[0.5rem]'>
              <span className='body16 text-primary-50'>
                Nhất thiết, bạn phải có đủ tiền học và tiền ăn ở trong thời gian
                du học.
              </span>
              <p className='text-greyscaletext-70 font-medium text-[0.875rem]'>
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
