import Image from 'next/image'
import clsx from 'clsx'
import {useState, useEffect, useRef} from 'react'
const EX_OPTIONS = [
  {
    label: 'Nam',
    value: 'male',
  },
  {
    label: 'Nữ',
    value: 'female',
  },
]
const Select = ({
  className,
  options = EX_OPTIONS,
  defaultLabel = 'Giới tính',
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const selectRef = useRef(null)

  const handleSelectOption = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
    onSelect(option.value)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div
      className={clsx('relative !mt-[0.25rem] select-none', {})}
      ref={selectRef}
    >
      <div
        className='flex items-center justify-between p-[0.81rem_1.25rem] bg-white border border-[#C3CAD9] rounded-md cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={clsx(
            'mr-2 text-ellipsis overflow-hidden whitespace-nowrap text-[1rem] font-medium',
            isOpen || !selectedOption?.label
              ? 'text-greyscaletext-10'
              : 'text-primary-60',
          )}
        >
          {selectedOption?.label || defaultLabel}
        </div>
        <div className='text-gray-600'>
          <Image
            src={'/images/primary/CaretDown.svg'}
            alt={'down-img'}
            width={100}
            height={100}
            className={clsx(
              'size-[1.5rem] duration-150',
              isOpen && 'rotate-180',
            )}
            priority
          />
        </div>
      </div>
      {isOpen && (
        <ul className='absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-md'>
          {options.map((option, index) => (
            <li
              key={index}
              className='px-4 py-2 cursor-pointer hover:bg-gray-100'
              onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Select
