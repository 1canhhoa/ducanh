import Title from '@/components/Title'

export default function VieclamDinhcu({text}) {
  return (
    <section className='mt-[8.12rem] xlg:mt-[3rem] xlg:px-[5.3rem] xmd:px-[0.75rem] w-full flex justify-center'>
      <div className='flex flex-col lg:w-[76.6875rem] w-full items-start'>
        <h1 className='title xmd:mb32 relative w-fit mb-[2.8rem] xmd:mb-[1.5rem]'>
          {text.information.job.title}
          <p className='size-[0.625rem] bg-secondary-40 absolute bottom-[0.625rem] right-[-1.125rem] xmd:right-[17rem]'></p>
        </h1>
        <span className='lg:w-[76.6875rem] xlg:w-full xmd:w-[21.9375rem] mb-[1.88rem] lg:mt-[2.5rem] body16 xmd:body14 font-medium text-greyscaletext-60 xmd:text-[#2B46A8]'>
          {text.information.job.text1}
        </span>
        {/* content / list */}
        <div className='w-full xmd:w-[21.9375rem] flex flex-col space-y-[1.5rem] items-start'>
          <div className='flex xmd:flex-col w-full lg:space-x-[2.5rem]'>
            <span className='w-[16.3125rem] sub24 font-bold text-primary-50'>
              1.Anh
            </span>
            <p className='body16 xmd:body14 font-medium flex-1 text-greyscaletext-60 xmd:text-greyscaletext-70'>
              Tại Anh, sinh viên học chuyên môn được phép làm thêm 20h/ tuần.
              Sau khi tốt nghiệp đại học trở lên, sinh viên được ở làm làm việc
              02 năm. Trong quá trình ở lại làm việc, nếu làm đủ tốt và được
              công ty kí tiếp hợp đồng dài hạn 3-4 năm, bạn có thể đủ điều kiện
              để xin visa định cư dài hạn tại Anh;
            </p>
          </div>
          <div className='flex xmd:flex-col w-full lg:space-x-[2.5rem]'>
            <span className='w-[16.3125rem] sub24 font-bold text-primary-50'>
              1.Anh
            </span>
            <p className='body16 xmd:body14 font-medium flex-1 text-greyscaletext-60 xmd:text-greyscaletext-70'>
              Tại Anh, sinh viên học chuyên môn được phép làm thêm 20h/ tuần.
              Sau khi tốt nghiệp đại học trở lên, sinh viên được ở làm làm việc
              02 năm. Trong quá trình ở lại làm việc, nếu làm đủ tốt và được
              công ty kí tiếp hợp đồng dài hạn 3-4 năm, bạn có thể đủ điều kiện
              để xin visa định cư dài hạn tại Anh;
            </p>
          </div>
        </div>
        <span className='w-[76.6875rem] xlg:w-full lg:mb-[1.88rem] mt-[2.5rem] xmd:mt-[1.5rem] body16 xmd:body14 font-medium text-greyscaletext-60 xmd:text-[#2B46A8]'>
          {text.information.job.text2}
        </span>
      </div>
    </section>
  )
}
