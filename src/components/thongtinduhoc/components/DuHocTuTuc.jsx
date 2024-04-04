export default function DuHocTuTuc({text}) {
  return (
    <section className='w-full mt-[5rem] xmd:mt-[2rem]'>
      <div className='w-full lg:space-y-[2.06rem] lg:h-[29.5rem] xmd:px-[0.75rem] px-[11.62rem] lg:bg-background-elevation-10 flex flex-col justify-center items-start'>
        <h1 className='title xmd:mb32 relative w-fit mb-[2.05rem] xmd:mb-[1rem]'>
          {text.information.title_5.title}
          <div className='size-[0.625rem] bg-secondary-40 absolute bottom-[0.625rem] right-[-1.125rem]'></div>
        </h1>
        <div className='flex xmd:flex-col xmd:space-y-[1rem] justify-between w-full'>
          <p className='w-[36rem] xmd:w-[21.9375rem] xmd:body16 text-[1.5rem] font-bold text-primary-50 leading-[1.5]'>
            {text.information.title_5.text1}
          </p>
          <p className='lg:w-[31.625rem] body16 text-greyscaletext-60'>
            {text.information.title_5.text2}
          </p>
        </div>
      </div>
    </section>
  )
}
