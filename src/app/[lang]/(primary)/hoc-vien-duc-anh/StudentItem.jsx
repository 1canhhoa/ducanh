import Image from 'next/image'

const StudentItem = ({studentData}) => {
  return (
    <div className=''>
      <div
        className='relative w-full md:w-[21.25rem] h-[17.5rem] border 
      border-greyscaletext-5 shadow-[5px_-5px_12px_rgba(22,60,105,0.10)]'
      >
        <Image
          src={'/images/hoc-vien-duc-anh/Group 1000005614.svg'}
          width={100}
          height={100}
          priority
          className='w-[1rem] z-20 h-[1rem] object-cover rounded-lg absolute right-[1.75rem] bottom-[4rem]'
          alt=''
        />
        <p className='absolute z-10 w-[17rem] left-[1.81rem] line-clamp-[7] overflow-hidden text-[1rem] top-[1.75rem] text-greyscaletext-80 font-feature-settings font-normal leading-[150%]'>
          {studentData.text}
        </p>
        <div class='w-[2rem] h-[2rem] absolute bottom-[-1rem] left-[-0.25rem]'>
          <Image
            src={'/images/hoc-vien-duc-anh/triangle-right.svg'}
            width={100}
            height={100}
            priority
            className='w-full h-full object-cover'
            alt=''
          />
        </div>
        <div className='absolute w-[1.44rem] top-[0.05rem] h-full bg-white'></div>
      </div>
      <div className='flex mt-[calc(2rem+0.4rem)]'>
        <div className='mr-[0.75rem]'>
          <Image
            src={studentData.img}
            width={100}
            height={100}
            priority
            className='w-[3rem] h-[3rem] object-cover rounded-lg'
            alt=''
          />
        </div>
        <div className='flex flex-col'>
          <h3 className='mb-[0.25rem] text-greyscaletext-80 text-[1rem] font-bold leading-[160%] tracking-[-0.03125rem]'>
            {studentData.name}
          </h3>
          <p className='text-greyscaletext-80 text-[0.875rem] font-normal leading-[160%] tracking-[-0.03125rem] italic'>
            {studentData.p}
          </p>
        </div>
      </div>
    </div>
  )
}

export default StudentItem
