"use client"
import { useRef } from 'react'
import { tintucduhoc } from '@/lib/data'
import Title from '@/components/Title'
import NavigationCustom from '@/components/navigationcustom'
import SlideTinTucNoiBat from './SlideTinTucNoiBat'
import SLideBaiViet from './SLideBaiViet'
const TinTicDuHoc = () => {
  const swiperRef = useRef(null)
  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }
  return (
    <div className='relative pt-[2.5rem] flex-col  space-y-[1.5625rem] xmd:space-y-[0em] z-10 w-full flex justify-center items-center xmd:bg-elevation-blue bg-white'>
      <div className='w-full md:px-[3.75rem] xmd:w-full flex flex-col items-start xmd:space-y-[1.375rem] space-y-[1.5rem]'>
        <Title className={'xmd:pl-[1rem] '} title={'Tin tức du học'} />
        <div className='w-full xmd:pl-[1rem] hidden-scrollbar xmd:overflow-x-auto relative flex items-end gap-[0.75rem] md:self-stretch'>
          <div className=" xmd:w-max flex items-start gap-[0.5rem] flex-[1_0_0]">
            {tintucduhoc.map((t, i) => (
              <button key={i} className={`flex xmd:w-max justify-center items-center 
              py-[0.75rem] hover:bg-primary-5 duration-500 ease-in-out px-[1rem] 
              gap-[0.625rem] rounded-[0.5rem] border border-primary-20 `
                + (i === 0 ? 'bg-primary-5 ' : '')}>
                <div className="text-greyscaletext-50 text-xs not-italic font-bold leading-[120%] uppercase">
                  {t.tittle}
                </div>
              </button>
            ))}
          </div>
          <div className=' xmd:hidden absolute h-full w-[6.7rem] top-1/2 -translate-y-1/2 right-0 z-1 pointer-events-none'>
            <NavigationCustom
              indexSlider={3}
              length={5}
              handlePrevSlide={handlePrevSlide}
              handleNextSlide={handleNextSlide}
              outline={true}
            />
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className=" flex bg-elevation-blue xmd:flex-col justify-start items-center w-full">
          <SlideTinTucNoiBat />
          <SLideBaiViet swiperRef={swiperRef} />
        </div>
      </div>
      <div className=' md:hidden relative w-[6.7rem] pt-[5rem] z-50 pointer-events-none'>
        <NavigationCustom
          indexSlider={3}
          length={5}
          handlePrevSlide={handlePrevSlide}
          handleNextSlide={handleNextSlide}
          outline={true}
        />
      </div>
    </div>
  )
}

export default TinTicDuHoc
