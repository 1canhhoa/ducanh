import clsx from 'clsx'
import Image from 'next/image'

const Structure1 = ({h3Text, listText = [], separatorClass = ''}) => {
  return (
    <div className=''>
      <h3
        className={clsx(
          'text-[1rem] font-semibold leading-[170%] text-primary-50',
          separatorClass,
        )}
      >
        {h3Text}
      </h3>
      <ul>
        {listText.map((text, index) => (
          <li
            className='flex last:mb-0 mb-[0.75rem]'
            key={index}
          >
            <Image
              src={'/images/hoc-bong-anh-quoc/checked_green.svg'}
              width={125}
              height={125}
              alt='hoc-bong-anh-quoc'
              className='w-[1.25rem] h-[1.25rem] object-contain mr-[0.62rem]'
            ></Image>
            <span className='text-[1rem] font-semibold leading-[150%] text-greyscaletext-60'>
              {text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Structure1
