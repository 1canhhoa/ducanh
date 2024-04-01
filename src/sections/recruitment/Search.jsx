const Search = () => {
  return (
    <div className='flex xmd:w-full justify-between items-center pl-[1rem]  rounded-[0.5rem] border xmd:border-greyscaletext-5 border-primary-10'>
      <input type='text' className='md:w-[17.8125rem] xmd:leading-[1.2] placeholder:text-[0.875rem] placeholder:font-normal outline-none placeholder:text-greyscaletext-10' placeholder='Tìm tên việc, vị trí..' />
      <div className='flex justify-center items-center flex-col w-[3rem] h-[2.875rem] gap-[0.625rem] shrink-0 rounded-br-[0.5rem] rounded-tr-[0.5rem] xmd:bg-primary-60 bg-primary-5'>
        <svg className='size-[1.5rem] xmd:!stroke-white stroke-[#3468CD]' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <path d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M20.9984 21.5004L16.6484 17.1504" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  )
}

export default Search
