import Image from 'next/image'
import clsx from 'clsx'
const GridImageItem = ({src, index}) => {
  const widthClass = 'w-[5.16rem] md:w-[8.1rem]'
  const heightClass = 'h-[5.16rem] md:h-[8.1rem]'
  if (index === 0) {
    return (
      <div className='col-span-2 row-span-2 w-[10.7rem] h-[10.7rem] md:w-[16.8rem] md:h-[16.8rem]'>
        <Image
          src={src}
          width={160}
          height={160}
          priority
          className='w-full h-full object-cover rounded-[0.5rem]'
          alt='student image - du hoc duc anh'
        />
      </div>
    )
  }
  if (index === 1) {
    return (
      <div className={clsx('col-span-2', [widthClass, heightClass])}>
        <Image
          src={src}
          width={160}
          height={160}
          priority
          className='w-full h-full object-cover rounded-lg'
          alt='student image - du hoc duc anh'
        />
      </div>
    )
  }
  if (index === 4) {
    return (
      <div className={clsx('col-span-2 flex items-end', [heightClass])}>
        <div className='bg-[#BE212F] w-[1.25rem] h-[1.25rem] md:w-[2rem] md:h-[2rem] rounded-sm mr-[1.07rem] md:mr-[1.69rem] ml-auto'></div>
        <div className={clsx(widthClass)}>
          <Image
            src={src}
            width={160}
            height={160}
            priority
            className='w-full h-full object-cover rounded-lg'
            alt='student image - du hoc duc anh'
          />
        </div>
      </div>
    )
  }
  if (index === 5) {
    return (
      <div className={clsx('col-span-2 flex items-end', [heightClass])}>
        <div className={clsx(widthClass)}>
          <Image
            src={src}
            width={160}
            height={160}
            priority
            className='w-full h-full object-cover rounded-lg'
            alt='student image - du hoc duc anh'
          />
        </div>
        <div
          className={clsx('bg-[#2B46A8] rounded-lg ml-auto', [
            widthClass,
            heightClass,
          ])}
        ></div>
      </div>
    )
  }
  if (index === 6) {
    return (
      <div className={clsx('col-span-3 flex items-end', [heightClass])}>
        <div className={clsx('ml-auto', widthClass)}>
          <Image
            src={src}
            width={160}
            height={160}
            priority
            className='w-full h-full object-cover rounded-lg'
            alt='student image - du hoc duc anh'
          />
        </div>
      </div>
    )
  }
  return (
    <div className={clsx([widthClass, heightClass])}>
      <Image
        src={src}
        width={160}
        height={160}
        priority
        className='w-full h-full object-cover rounded-lg'
        alt='student image - du hoc duc anh'
      />
    </div>
  )
}

export default GridImageItem
