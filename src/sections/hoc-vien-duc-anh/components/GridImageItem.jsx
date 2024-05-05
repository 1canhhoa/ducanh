import Image from 'next/image'
import clsx from 'clsx'
const GridImageItem = ({src, index}) => {
  const widthClass = 'w-[5.16rem] md:w-[8.1rem]'
  const heightClass = 'h-[5.16rem] md:h-[8.1rem]'
  if (index === 0) {
    return (
      <div className='col-span-2 row-span-2 w-[10.7rem] h-[10.7rem] duration-200 md:w-[16.8rem] md:h-[16.8rem] rounded-[0.58565rem] overflow-hidden'>
        <Image
          src={src}
          width={160}
          height={160}
          priority
          className='w-full h-full object-cover'
          alt='hoc-vien-duc-anh'
        />
      </div>
    )
  }
  if (index === 1) {
    return (
      <div
        className={clsx('col-span-2 relative overflow-hidden rounded-lg', [
          widthClass,
          heightClass,
        ])}
      >
        <div className='bg-[rgba(6,41,167,0.6)] absolute top-0 left-0 h-full w-full'></div>
        <Image
          src={src}
          width={160}
          height={160}
          priority
          className='w-full h-full object-cover'
          alt='hoc-vien-duc-anh'
        />
      </div>
    )
  }
  if (index === 4) {
    return (
      <div className={clsx('col-span-2 flex items-end', [heightClass])}>
        {/* <div className='bg-[#BE212F] w-[1.25rem] h-[1.25rem] md:w-[2rem] md:h-[2rem] rounded-sm mr-[1.07rem] md:mr-[1.69rem] ml-auto'></div> */}
        <div
          className={clsx(
            widthClass,
            'relative overflow-hidden rounded-lg ml-auto',
          )}
        >
          <div className='bg-[rgba(6,41,167,0.6)] absolute top-0 left-0 h-full w-full'></div>
          <Image
            src={src}
            width={160}
            height={160}
            priority
            className='w-full h-full object-cover rounded-lg'
            alt='hoc-vien-duc-anh'
          />
        </div>
      </div>
    )
  }
  if (index === 5) {
    return (
      <div className={clsx('col-span-2 flex items-end', [heightClass])}>
        <div
          className={clsx(widthClass, 'relative overflow-hidden rounded-lg')}
        >
          <div className='bg-[rgba(6,41,167,0.6)] absolute top-0 left-0 h-full w-full'></div>
          <Image
            src={src}
            width={160}
            height={160}
            priority
            className='w-full h-full object-cover'
            alt='hoc-vien-duc-anh'
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
        <div
          className={clsx(
            'ml-auto relative overflow-hidden rounded-lg',
            widthClass,
          )}
        >
          <div className='bg-[rgba(6,41,167,0.6)] absolute top-0 left-0 h-full w-full'></div>
          <Image
            src={src}
            width={160}
            height={160}
            priority
            className='w-full h-full object-cover'
            alt='hoc-vien-duc-anh'
          />
        </div>
      </div>
    )
  }
  return (
    <div
      className={clsx([
        widthClass,
        heightClass,
        'overflow-hidden rounded-lg relative',
      ])}
    >
      <div className='bg-[rgba(6,41,167,0.6)] absolute top-0 left-0 h-full w-full'></div>
      <Image
        src={src}
        width={160}
        height={160}
        priority
        className='w-full h-full object-cover'
        alt='hoc-vien-duc-anh'
      />
    </div>
  )
}

export default GridImageItem
