import Image from 'next/image'
import Link from 'next/link'

export default function ListNghe({data, index}) {
  return (
    <>
      <div className='max-md:mb-[1rem] flex items-center space-x-[0.5rem] max-md:pl-[1rem] max-md:w-[21.9375rem] max-md:h-[2.9375rem] max-md:bg-gradient-to-r max-md:from-[#2E6BC6] max-md:to-[#29A4EA] max-md:rounded-t-[0.375rem]'>
        <h5 className='text-[1.25rem] font-bold leading-[1.6] text-greyscaletext-80'>
          {index + 1}
          {'. '}
          {data.title}
        </h5>
        <Image
          className='rounded-full max-md:size-[2rem]'
          alt='cờ'
          src={'/images/nghehot/co.jpg'}
          width={42}
          height={42}
        />
      </div>
      {data?.link?.map((e, index) => (
        <Link
          key={index}
          className='text-[1rem] max-md:text-[0.875rem] pl-[1rem] max-md:w-[21.9375rem] relative font-normal leading-[1.6] text-primary-40 flex space-x-[0.5rem]'
          href={`${e}`}
        >
          <div className='size-[0.5rem] max-md:size-[0.25rem] absolute left-[0.5rem] rounded-full bg-primary-40 mt-[0.7rem] mr-[0.5rem]'></div>
          {e}
        </Link>
      ))}
    </>
  )
}
