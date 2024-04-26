'use client'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {Button} from '../ui/button'
import {FAKE_COUNTRIES} from '../FindByMapPopup/fakeData'
import clsx from 'clsx'
import useClickOutSide from '@/hooks/useClickOutSide'
const CHECK_BOXS = [
  {
    label: 'Du học cấp 3',
    value: 'high_school',
  },
  {
    label: 'Du học đại học',
    value: 'university',
  },
  {
    label: 'Du học sau đại học',
    value: 'postgraduate',
  },
]

const FindModal = ({lang, countries = [], className = ''}) => {
  const [country, setCountry] = useState({})
  const [state, setState] = useState({})
  const [activeSelect, setActiveSelect] = useState({
    id: '',
    enabled: false,
  })

  const [countryDropdownRef, iscountryDropdownOutside] = useClickOutSide()
  const [stateDropdownRef, isStateDropdownOutside] = useClickOutSide()

  useEffect(() => {
    if (iscountryDropdownOutside || isStateDropdownOutside) {
      setActiveSelect((prev) => {
        return {
          ...prev,
          enabled: false,
        }
      })
    }
  }, [iscountryDropdownOutside, isStateDropdownOutside])

  const handleToggleSelect = (id) => {
    setActiveSelect((prevState) => {
      return {
        id,
        enabled: id !== prevState.id ? true : !prevState.enabled,
      }
    })
  }
  const handleCountrySelect = (countryObj) => {
    setCountry(countryObj)
    setActiveSelect('')
  }

  return (
    <section>
      <form
        action=''
        className={clsx(
          'bg-white min-w-[calc(100%-0.75rem*2)] xmd:mb-[0.75rem] md:min-w-[24.3125rem] md:ml-[2.87rem] rounded-[1rem] p-[1.5rem] xmd:h-[13rem]',
          className && className,
        )}
      >
        {/* title */}
        <h2 className='text-primary-60 font-bold text-[1.5rem] leading-[120%]'>
          <div
            className=''
            dangerouslySetInnerHTML={{__html: lang.map.find_school}}
          ></div>
        </h2>
        {/* input tìm trường */}
        <div className='mt-[1rem] mb-[0.7rem] rounded-lg border border-primary-40 flex h-[2.5rem] p-[0.625rem_1rem] items-center'>
          <Image
            src={'/images/primary/AlignBottom_color.svg'}
            alt={'duc-anh'}
            width={100}
            height={100}
            className={
              'w-[1.25rem] h-[1.25rem] object-cover mr-[0.62rem] xmd:hidden'
            }
            priority
          />
          <input
            type='text'
            name='school_name'
            placeholder='Tìm tên trường...'
            className='placeholder:text-greyscaletext-30 font-bold text-[0.875rem] leading-[100%] tracking-[0.013rem] uppercase'
          />
        </div>
        <span className='text-greyscaletext-40 text-[0.875rem] font-normal leading-[120%] block'>
          Harvard, Cambridge, Stanford,...
        </span>
        {/* custom select quốc gia*/}
        <div
          ref={countryDropdownRef}
          className='mt-[1.25rem] select-none cursor-pointer mb-[0.7rem] relative rounded-lg border border-primary-40 flex h-[2.5rem] p-[0.625rem_1rem] items-center'
        >
          <Image
            src={'/images/primary/AlignBottom_color.svg'}
            alt={'duc-anh'}
            width={100}
            height={100}
            className={
              'w-[1.25rem] h-[1.25rem] object-cover mr-[0.62rem] xmd:hidden'
            }
            priority
          />
          <label
            onClick={() => handleToggleSelect('country')}
            className='text-primary-50 font-bold text-[0.875rem] cursor-pointer leading-[100%] tracking-[0.013rem] uppercase absolute top-0 left-[3.12rem]
             flex items-center bg-white w-[calc(100%-3.12rem*2)] h-full'
          >
            {country.name ? (
              country.name
            ) : (
              <>
                {lang.map.select_country}{' '}
                <span className='text-secondary-50'>*</span>
              </>
            )}
          </label>
          {activeSelect.id === 'country' && activeSelect.enabled && (
            <div
              className='absolute w-full left-0 top-[calc(100%+0.5rem)] bg-white py-[0.5rem] z-10 shadow-lg rounded-b-lg
            h-max max-h-[10rem] overflow-y-auto'
            >
              {FAKE_COUNTRIES.map((country) => (
                <div
                  key={country.country}
                  className='p-[0.5rem_1rem] hover:bg-greyscaletext-10 duration-150 text-[0.875rem] cursor-pointer leading-[100%] tracking-[0.013rem] uppercase'
                  onClick={() => handleCountrySelect(country)}
                >
                  {country.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* custom select chọn bang/tỉnh */}
        <div
          ref={stateDropdownRef}
          className='mt-[1.5rem] select-none cursor-pointer mb-[0.7rem] relative rounded-lg border border-primary-40 flex h-[2.5rem] p-[0.625rem_1rem] items-center'
        >
          <Image
            src={'/images/primary/AlignBottom_color.svg'}
            alt={'duc-anh'}
            width={100}
            height={100}
            className={
              'w-[1.25rem] h-[1.25rem] object-cover mr-[0.62rem] xmd:hidden'
            }
            priority
          />
          <label
            onClick={() => handleToggleSelect('state_province')}
            className='text-primary-50 font-bold text-[0.875rem] cursor-pointer leading-[100%] tracking-[0.013rem] uppercase 
            absolute top-0 left-[3.12rem] flex items-center bg-white w-[calc(100%-3.12rem*2)] h-full'
          >
            {state.name ? state.name : lang.map.select_state_province}
          </label>
          {activeSelect.id === 'state_province' && activeSelect.enabled && (
            <div
              className='absolute w-full left-0 top-[calc(100%+0.5rem)] bg-white py-[0.5rem] z-10 shadow-lg rounded-b-lg
            h-max max-h-[10rem] overflow-y-auto'
            >
              {FAKE_COUNTRIES?.find(
                (c) => country.country === c.country,
              )?.states?.map((state) => (
                <div
                  key={state.name}
                  className='p-[0.5rem_1rem] hover:bg-greyscaletext-10 duration-150 text-[0.875rem] cursor-pointer leading-[100%] tracking-[0.013rem] uppercase'
                  onClick={() => setState(state)}
                >
                  {state.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* checkbox */}
        <h3 className='mt-[1.25rem] text-primary-50 text-[1rem] font-bold leading-[120%] mb-[0.75rem]'>
          {lang.map.level_select_title}
        </h3>
        {CHECK_BOXS.map((checkbox, index) => (
          <div
            className={clsx('flex items-center mb-[0.6rem]', {
              '!mb-0': index === CHECK_BOXS.length - 1,
            })}
            key={checkbox.value}
          >
            <input
              type='checkbox'
              name={checkbox.value}
              id={checkbox.value}
              className='size-[1.5rem] accent-primary-40 relative outline-none border-none
             after:absolute after:content-[""] after:size-[99%] after:bg-transparent
            after:rounded-[0.1875rem] after:border after:border-primary-40'
            />
            <label
              htmlFor={checkbox.value}
              className='ml-[1rem]'
            >
              {checkbox.label}
            </label>
          </div>
        ))}

        {/* button tìm kiếm */}
        <Button
          onClick={(e) => {
            e.preventDefault()
          }}
          className='uppercase w-full bg-primary-50 text-white mt-[1rem]'
        >
          {' '}
          <Image
            src={'/images/primary/AlignBottom_color.svg'}
            alt={'duc-anh'}
            width={100}
            height={100}
            className={'w-[1.25rem] h-[1.25rem] object-cover'}
            priority
          />
          <span className='inline-block mx-[0.62rem]'>{lang.map.search}</span>
          <Image
            src={'/images/primary/AlignBottom_color.svg'}
            alt={'duc-anh'}
            width={100}
            height={100}
            className={'w-[1.25rem] h-[1.25rem] object-cover'}
            priority
          />
        </Button>
      </form>
    </section>
  )
}

export default FindModal
