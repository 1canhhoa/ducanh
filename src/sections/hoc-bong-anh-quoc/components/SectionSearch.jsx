import clsx from 'clsx'
import Image from 'next/image'
const SectionSearch = ({className = '', placeholder = 'Tìm học bổng'}) => {
  return (
    <div
      className={clsx(
        'flex items-center pl-[1rem] rounded-lg border border-primary-10 overflow-hidden md:w-[22rem]',
        className,
      )}
    >
      <label
        htmlFor='search'
        className='mr-[0.25rem]'
      >
        <Image
          priority
          width={100}
          height={100}
          className='w-[1rem] h-[1rem]'
          src='/images/hoc-bong-anh-quoc/search.svg'
          alt='hoc-bong-duc-anh'
        />
      </label>
      <input
        type='text'
        name='search'
        id='search'
        className='text-[0.875rem] flex-1 font-medium leading-[120%] pr-[0.25rem] text-black placeholder:text-greyscaletext-10'
        placeholder={placeholder}
      />
      <button className='w-[3rem] h-[2.875rem] flex items-center justify-center bg-primary-5'>
        <Image
          priority
          width={100}
          height={100}
          className='w-[0.75rem] h-[0.375rem]'
          src='/images/hoc-bong-anh-quoc/down-arrow.svg'
          alt='hoc-bong-duc-anh'
        />
      </button>
    </div>
  )
}

export default SectionSearch
