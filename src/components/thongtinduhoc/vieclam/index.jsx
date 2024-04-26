export default function Vieclam({text, dataAcf}) {
  return (
    <section
      id='viec_lam'
      className='mt-[8.12rem] xlg:mt-[6rem] xlg:px-[5.3rem] xmd:px-[0.75rem] w-full flex justify-center'
    >
      <div className='flex flex-col lg:w-[76.6875rem] w-full items-start'>
        <h1 className='title xmd:mb32 relative w-fit mb-[2.8rem] xmd:mb-[1.5rem]'>
          {text?.job?.title}
        </h1>
        <span className='lg:w-[76.6875rem] xlg:w-full xmd:w-[21.9375rem] mb-[1.88rem] lg:mt-[2.5rem] body16 xmd:body14 font-medium text-greyscaletext-60 xmd:text-[#2B46A8]'>
          {text?.job?.description}
        </span>
        {/* content / list */}
        <div className='w-full xmd:w-[21.9375rem] flex flex-col space-y-[1.5rem] items-start'>
          {dataAcf?.countries?.map((e, index) => (
            <div className='flex xmd:flex-col w-full lg:space-x-[2.5rem]'>
              <span className='w-[16.3125rem] sub24 font-bold text-primary-50'>
                {index + 1}.{e?.title}
              </span>
              <div
                className='tulamhoso flex-1'
                dangerouslySetInnerHTML={{__html: e?.label}}
              />
            </div>
          ))}
        </div>
        <span className='w-[76.6875rem] xlg:w-full lg:mb-[1.88rem] mt-[2.5rem] xmd:mt-[1.5rem] body16 xmd:body14 font-medium text-greyscaletext-60 xmd:text-[#2B46A8]'>
          {text?.job?.label}
        </span>
      </div>
    </section>
  )
}
