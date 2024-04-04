import Image from 'next/image'
import Item from './components/Item'

export default function HocBong() {
  return (
    <section className='flex-1'>
      <div className='w-full flex flex-col items-start'>
        <h1 className='title xmd:mb32 relative w-fit mb-[1rem] xmd:mb-[1.5rem]'>
          Học bổng
          <div className='size-[0.625rem] bg-secondary-40 absolute bottom-[0.625rem] right-[-1.125rem]'></div>
        </h1>
        <span className='text-[0.875rem] font-medium leading-[1.2] text-greyscaletext-40'>
          Đức Anh EduConnect trân trọng thông báo chương trình học bổng du học
          10-100% học phí tại các nước:
        </span>
        <div className='flex rounded-[0.5rem] border-[1px] border-solid border-primary-10 my-[1.25rem]'>
          <input
            className='w-[12.53125rem] text-[0.875rem] font-medium leading-[1.2] text-greyscaletext-10 pl-[1rem]'
            placeholder='Tìm học bổng'
            type='text'
          />
          <button className='w-[3rem] h-[2.875rem] p-[0.625rem] flex justify-center items-center bg-primary-5 hover:bg-primary-10 rounded-[0.5rem]'>
            <Image
              alt='tìm kiếm học bổng'
              src={'/images/thongtinduhoc/down.svg'}
              width={12}
              height={6}
            />
          </button>
        </div>
        <div className='flex flex-col items-start space-y-[1.25rem]'>
          <Item />
          <Item />
        </div>
        <p className='mt-[1rem] text-[0.875rem] font-medium leading-[1.2] text-greyscaletext-40 w-[49rem]'>
          Các thí sinh cần 
          <span className='text-[0.875rem] font-medium leading-[1.2] text-primary-40'>
            liên hệ
          </span>{' '}
           với chúng tôi sớm nhất để kịp làm hồ sơ và xin học bổng du học cho
          các kỳ nhập học 2023-2024.
        </p>
        <div className='mt-[3rem]'></div>
      </div>
    </section>
  )
}
