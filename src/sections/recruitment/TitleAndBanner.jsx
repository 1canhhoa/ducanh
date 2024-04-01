import Title from '@/components/Title'
import Image from 'next/image'
const TitleAndBanner = ({ t }) => {
  return (
    <div>
      <Title title={t.title} />
      <div className="relative">
        <Image priority className=' size-full xmd:hidden mt-[2.45rem]' alt='ảnh banner trang tuyển dụng du học đức ' src={'/images/recruitment/bg.jpg'} width={1300} height={370} />
        <Image priority className=' md:hidden w-full h-full' alt='ảnh banner trang tuyển dụng du học đức cho điện thoại' src={'/images/recruitment/banner-mobile.jpg'} width={360} height={190} />
        <div className='xmd:hidden w-[13.375rem] absolute z-50 left-[4.31rem] top-[5.62rem] text-[1.5rem] text-white font-bold tracking-[-0.015rem]'>
          {t.title_banner_1}
        </div>
        <div className='xmd:hidden absolute z-50 left-[4.31rem] top-[11.37rem] text-[1rem] w-[22.3125rem] font-feature-settings text-white font-normal'>
          {t.title_banner_2}
        </div>
        <div className='md:hidden absolute z-50 left-[4.75rem] top-[3.94rem] text-[1.65rem] font-feature-settings text-white font-medium'>
          {t.title_banner_3}
        </div>
        <div className='md:hidden absolute z-50 left-[1.75rem] top-[6.34rem] text-[1.65rem] font-feature-settings text-white font-medium'>
          {t.title_banner_4}
        </div>
      </div>

    </div >
  )
}

export default TitleAndBanner
