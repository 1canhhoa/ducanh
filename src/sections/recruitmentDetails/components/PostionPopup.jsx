import clsx from 'clsx'
import Image from 'next/image'
import {useState} from 'react'
const POSITIONS = [
  'UI/UX',
  'Account',
  'Kế toán',
  'Developer',
  'Hành chính',
  'Thiết kế',
  'Thực tập sinh',
]

const PostionPopup = ({lang, closeCallback, onSelect, currentOption = ''}) => {
  //   console.log(currentOption)
  const [selectedOption, setSelectOption] = useState(currentOption)
  const handleOptionSelect = (option) => {
    onSelect(option)
    setSelectOption(option)
  }
  return (
    <section className='fixed top-0 left-0 w-full h-full bg-white'>
      <header className='flex items-center px-[1rem] h-[3.5rem] justify-between border-b border-b-[rgba(19, 43, 125, 0.20)]'>
        <h2 className='text-primary-60 font-bold leading-[130%] uppercase text-[1rem]'>
          {lang.position}
        </h2>
        <button onClick={closeCallback}>
          <Image
            src={'/images/recruitment/Close_MD.svg'}
            alt={'close-img'}
            width={100}
            height={100}
            className={'size-[1.25rem]'}
            priority
          />
        </button>
      </header>
      {POSITIONS.map((position) => (
        <div
          className='flex items-center justify-between mx-[1rem] h-[3rem] border-b border-b-[rgba(19, 43, 125, 0.20)]'
          key={position}
          onClick={() => handleOptionSelect(position)}
        >
          <span
            className={clsx(
              'text-greyscaletext-30 text-[0.75rem] font-bold leading-[120%]',
              selectedOption === position && 'text-primary-60',
            )}
          >
            {position}
          </span>
          {selectedOption === position && (
            <Image
              src={'/images/recruitment/Check.svg'}
              alt={'close-img'}
              width={100}
              height={100}
              className={'size-[1.25rem]'}
              priority
            />
          )}
        </div>
      ))}
    </section>
  )
}

export default PostionPopup
