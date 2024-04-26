import Image from 'next/image'
import Link from 'next/link'

export default function ListNghe({data, index}) {
  return (
    <>
      <div className='xmd:mb-[1rem] flex items-center space-x-[0.5rem] xmd:pl-[1rem] xmd:w-[21.9375rem] xmd:h-[2.9375rem] xmd:bg-gradient-to-r xmd:from-[#2E6BC6] xmd:to-[#29A4EA] xmd:rounded-t-[0.375rem]'>
        <h5 className='text-[1.25rem] xmd:text-[1.25rem] xlg:text-[1.5rem] font-bold leading-[1.6] text-greyscaletext-80'>
<<<<<<< HEAD
          {index + 1}
          {'. '}
          {data.title}
=======
          {data?.title?.title_text}
>>>>>>> master
        </h5>
        <Image
          className='rounded-full xmd:size-[2rem]'
          alt='cờ'
<<<<<<< HEAD
          src={'/images/nghehot/co.jpg'}
=======
          src={data?.title?.image?.url}
>>>>>>> master
          width={42}
          height={42}
        />
      </div>
<<<<<<< HEAD
      {data?.link?.map((e, index) => (
        <Link
          key={index}
          className='text-[1rem] xlg:text-[1.5rem] xmd:text-[0.875rem] pl-[1.5rem] xmd:pl-[1rem] xlg:pl-[2rem] xmd:w-[21.9375rem] relative font-normal leading-[1.6] text-primary-40 flex space-x-[0.5rem]'
          href={`${e}`}
        >
          <div className='size-[0.5rem]  xlg:size-[1rem] xmd:size-[0.25rem] absolute left-[0.5rem] top-[50%] translate-y-[-50%] rounded-full bg-primary-40'></div>
          {e}
=======
      {data?.label?.map((e, index) => (
        <Link
          key={index}
          className='text-[1rem] xlg:text-[1.5rem] xmd:text-[0.875rem] pl-[1.5rem] xmd:pl-[1rem] xlg:pl-[2rem] xmd:w-[21.9375rem] relative font-normal leading-[1.6] text-primary-40 flex space-x-[0.5rem] xmd:overflow-hidden'
          href={e?.label_link?.url}
        >
          <div className='size-[0.5rem] xlg:size-[1rem] xmd:size-[0.25rem] absolute left-[0.5rem] top-[50%] translate-y-[-50%] rounded-full bg-primary-40'></div>
          {e?.label_link?.title}
>>>>>>> master
        </Link>
      ))}
    </>
  )
}
