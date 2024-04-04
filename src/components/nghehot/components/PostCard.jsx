import Image from 'next/image'

export default function PostCard() {
  return (
    <div className='lg:nth_1 flex lg:w-[34.6rem] xmd:mt-[0.75rem] mt-[1.88rem] justify-center space-x-[1.5rem] xmd:space-x-[0.5rem] p-[1.5rem] xmd:p-[0.955rem] rounded-[1rem] border-[1px] border-solid border-[rgba(52,104,205,0.40)]'>
      <Image
        alt='ảnh tham khao'
        src={'/images/hoptac/itemCard.png'}
        width={263}
        height={263}
        className='rounded-[0.75rem] xmd:rounded-[0.4775rem] size-[16.4375rem] xmd:h-[5.3125rem] xmd:w-[7.5rem]'
      />
      <div className='flex flex-col items-start flex-1 self-stretch w-[13.75rem]'>
        <span className='body16 text-primary-60'>
          Học bổng toàn phần khối ngành STEM dành cho nữ giới
        </span>
        <span className='xmd:hidden mt-[1rem] w-full mb-[1.5rem] body16 text-greyscaletext-60 overflow-hidden text-ellipsis whitespace-nowrap '>
          Bạn là nữ giới, đã có bằng Cử nhân chuyên ngành STEM và có niềm đam mê
          với lĩnh vực này? Bạn sẽ có cơ…
        </span>
        <button className='xmd:hidden h-[2.5rem] px-[1.5rem] py-[0.75rem] flex justify-center items-center rounded-[0.5rem] border-[1px] border-solid border-[#2B46A8] bg-white body16 text-center text-primary-50'>
          Xem thêm
        </button>
      </div>
    </div>
  )
}
