const Search = () => {
  return (
    <div className=' xlg:p-[0.75rem]'>

      <div div className='flex justify-between overflow-hidden xlg:w-full xlg:h-[2.875rem] w-[17.375rem] h-[2.5rem] items-center  pl-[1rem]  rounded-[0.5rem] xlg:border-greyscaletext-5 border-primary-10 border' >
        <input
          type='text'
          className=' w-[17.8125rem] text-black placeholder:text-[0.875rem] placeholder:text-greyscaletext-20 placeholder:font-normal placeholder:leading-[1] placeholder:tracking-[0.00875rem] outline-none text-greyscaletext20'
          placeholder='Tìm thông tin về trường, học bổng, tin tức...'
        />
        <div className='flex xlg:h-full justify-center items-center flex-col xlg:p-[0.62rem] p-[0.5rem] shrink-0 rounded-br-[0.5rem] rounded-tr-[0.5rem] bg-primary-5 xlg:bg-primary-60'>
          <svg
            className='size-[1.5rem] stroke-[#3468CD] xlg:stroke-white'
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M20.9984 20.9984L16.6484 16.6484'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>
    </div >
  )
}

export default Search
