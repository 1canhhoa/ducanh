import Image from 'next/image'

const StudentItem = ({studentData}) => {
  return (
    <div className=''>
      <div
        className='relative w-full tablet:w-full md:w-[21.25rem] min-h-[17.5rem] border 
      border-greyscaletext-5 shadow-[5px_-5px_12px_rgba(22,60,105,0.10)] px-[2rem] pl-0 py-[1.5rem]'
      >
        <p className='w-full pl-[2rem] tablet:text-[1.25rem] line-clamp-[7] overflow-hidden text-[1rem] text-greyscaletext-80 font-feature-settings font-normal leading-[150%]'>
          {studentData.text}
        </p>
        <div className='flex justify-end'>
          <Image
            src={'/images/hoc-vien-duc-anh/Group 1000005614.svg'}
            width={100}
            height={100}
            priority
            className='w-[1rem] h-[1rem] object-cover ml-[2rem] mt-[1rem]'
            alt='hoc-vien-duc-anh'
          />
        </div>
        <div className='w-[2rem] h-[2rem] absolute bottom-[-1rem] left-[-0.25rem]'>
          <Image
            src={'/images/hoc-vien-duc-anh/triangle-right.svg'}
            width={100}
            height={100}
            priority
            className='w-full h-full object-cover'
            alt='hoc-vien-duc-anh'
          />
        </div>
        <div className='absolute w-[1.44rem] top-[0.05rem] h-full bg-white'></div>
      </div>
      <div className='flex mt-[calc(2rem+-0.4rem)]'>
        <div className='mr-[0.75rem]'>
          <Image
            src={studentData.img}
            width={100}
            height={100}
            priority
            className='size-[3rem] tablet:size-[4rem] object-cover rounded-lg'
            alt='hoc-vien-duc-anh'
          />
        </div>
        <div className='flex flex-col'>
          <h3 className='mb-[0.25rem] text-greyscaletext-80 tablet:text-[1.25rem] text-[1rem] font-bold leading-[160%] tracking-[-0.03125rem]'>
            {studentData.name}
          </h3>
          <p className='text-greyscaletext-80 tablet:text-[1rem] text-[0.875rem] font-normal leading-[160%] tracking-[-0.03125rem] italic'>
            {studentData.p}
          </p>
        </div>
      </div>
    </div>
  )
}

export default StudentItem
