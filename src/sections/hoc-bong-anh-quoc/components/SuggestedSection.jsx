import clsx from 'clsx'

const SuggestedSection = ({
  tags = [],
  suggests = [],
  className = 'mt-[2.25rem]',
}) => {
<<<<<<< HEAD
  // console.log({tags, suggests})
  return (
    <section className={clsx('xmd:mx-[0.75rem]', className)}>
      <div className='flex flex-wrap items-center xmd:py-0 py-[1rem] xmd:mb-[1.31rem] mb-[1rem] md:border-t border-greyscaletext-5  gap-y-[0.75rem]'>
        <span className='inline-block xmd:mr-[0.5rem] xmd:text-[0.75rem] text-[0.875rem] xmd:font-semibold font-medium xmd:leading-[120%] leading-[150%] text-greyscaletext-80'>
          Tags:
        </span>
        {tags?.map((item, index) => (
          <div
            key={item.id}
            className='xmd:px-[0.5rem] px-[0.75rem] rounded-[1.25rem] ml-[0.75rem] py-[0.25rem] bg-background-elevation-tag-chip'
          >
            <a
              href={item.link}
              target='_blank'
              className='text-[0.875rem] font-medium leading-[150%] text-greyscaletext-60 whitespace-nowrap'
            >
              {item.name}
=======
  return (
    <section className={clsx('xmd:mx-[0.75rem]', className)}>
      <div className='flex items-center xmd:py-0 py-[1rem] xmd:mb-[1.31rem] mb-[1rem] md:border-t border-greyscaletext-5'>
        <span className='inline-block xmd:mr-[0.5rem] xmd:text-[0.75rem] text-[0.875rem] xmd:font-semibold font-medium xmd:leading-[120%] leading-[150%] text-greyscaletext-80'>
          Tags:
        </span>
        {Array.from({length: 3}).map((item, index) => (
          <div
            key={index}
            className='xmd:px-[0.5rem] px-[0.75rem] rounded-[1.25rem] ml-[0.75rem] py-[0.25rem] bg-background-elevation-tag-chip'
          >
            <a
              href='#'
              className='text-[0.875rem] font-medium leading-[150%] text-greyscaletext-60'
            >
              du hoc anh
>>>>>>> master
            </a>
          </div>
        ))}
      </div>
      <div className='xmd:flex items-start'>
        <span className='inline-block text-[0.875rem] mb-[0.69rem] font-medium leading-[150%] text-greyscaletext-80'>
          Tham khảo:
        </span>
        <ul className='ml-[0.44rem]'>
<<<<<<< HEAD
          {suggests?.map((item, index) => (
            <li
              key={item.id}
              target='_blank'
              className='list-disc ml-[2rem] text-[0.875rem] font-medium leading-[150%] text-primary-50 underline'
            >
              <a href={item.link}>{item.name}</a>
=======
          {Array.from({length: 3}).map((item, index) => (
            <li
              key={index}
              className='list-disc ml-[2rem] text-[0.875rem] font-medium leading-[150%] text-primary-50 underline'
            >
              <a href='#'>Học tập tại Bắc Ireland</a>
>>>>>>> master
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default SuggestedSection
