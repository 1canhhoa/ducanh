
import AsidePrimary from '@/layout/asidePrimary/AsidePrimary';
import SlideBanner from './SlideBanner';
const BannerHome = ({ dataBanner }) => {

  return (
    <div className='flex items-start justify-start space-x-[1.5rem] pb-[4rem]'>
      {/* SIDE_BAR BANNER HOME */}
      <AsidePrimary />

      {/* SWIPER BANNER WEB */}
      <SlideBanner dataBanner={dataBanner}/>
    </div >
  )
}

export default BannerHome
