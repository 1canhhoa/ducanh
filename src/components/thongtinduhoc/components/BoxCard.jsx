export default function BoxCard() {
  return (
    <div className='flex flex-1 xmd:w-full flex-col p-[1rem] items-start space-y-[1rem] rounded-[0.75rem] border-[1px] border-solid border-primary-20 bg-white'>
      <div className='flex justify-center items-center px-[1rem] py-[0.6875rem] rounded-[0.5rem] bg-secondary-5 sub20 text-secondary-50'>
        HB 100%
      </div>
      <div className='flex flex-col items-start space-y-[0.75rem]'>
        <span className='text-[1rem] font-semibold leading-[1.2] text-greyscaletext-80'>
          Học bổng 100% học phí
        </span>
        <ul className='flex flex-col space-y-[0.25rem]'>
          <li className='body14 text-greyscaletext-60'>
            GPA 98- 100 {'->'} 100%
          </li>
          <li className='body14 text-greyscaletext-60'>
            Tiếng Anh: ≥ 7.0 IELTS
          </li>
        </ul>
      </div>
    </div>
  )
}
