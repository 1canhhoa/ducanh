import BannerHome from '@/sections/home/components/banner-home'
import LichHoiThao from '@/sections/home/components/lich-hoi-thao'
import QuaTrinhPhatTrien from '@/sections/home/components/qua-trinh-phat-trien'
import DichVuDucAnh from '@/sections/home/components/dich-vu-duc-anh'
import HocSinhTieuBieu from '@/sections/home/components/hoc-sinh-tieu-bieu'
import TinTucDuHoc from '@/sections/home/components/tin-tuc-du-hoc'
import TruongHocLienKet from '@/sections/home/components/truong-hoc-lien-ket'

import MobileBannerHome from '@/sections/home/components/mobile-banner-home'
import MobileLichHoiThao from '@/sections/home/components/mobile-lich-hoi-thao'
import MobileQuaTrinhPhatTrien from '@/sections/home/components/mobile-qua-trinh-phat-trien'
import MobileDichVuDucAnh from '@/sections/home/components/mobile-dich-vu-duc-anh'
import MobileHocSinhTieuBieu from '@/sections/home/components/mobile-hoc-sinh-tieu-bieu'
import MobileTinTucDuHoc from '@/sections/home/components/mobile-tin-tuc-du-hoc'
import MobileTruongHocLienKet from '@/sections/home/components/mobile-truong-hoc-lien-ket'
import './style.css'
const IndexHome = ({
  t,
  dataHocSinhTieuBieu,
  dataDichVuTaiDucAnh,
  dataQutrinhPhatTrienDucAnh,
  dataLichHoithaos,
  dataCountries,
  dataLocations,
  categories,
  isMobile,
  dataTintucs,
  dataNoibat,
  dataBanner
}) => {
  return (
    <main className='relative w-full flex-col flex justify-center items-start xmd:bg-elevation-blue'>
      {!isMobile && <section className='mx-auto w-full flex justify-center items-center md:mt-[10rem] mt-[3.65rem]'>
        <BannerHome dataBanner={dataBanner} isMobile={isMobile} />
      </section>}
      {!isMobile && <section className='mx-auto w-full flex justify-center items-center'>
        <LichHoiThao
          t={t.home_page}
          isMobile={isMobile} 
          dataLocations={dataLocations}
          dataCountries={dataCountries}
          dataLichHoithaos={dataLichHoithaos}
          />
      </section>}
      {!isMobile && <section className='w-full'>
        <QuaTrinhPhatTrien
          dataQutrinhPhatTrienDucAnh={dataQutrinhPhatTrienDucAnh}
          isMobile={isMobile} />
      </section>}
      {!isMobile && <section className='w-full'>
        <DichVuDucAnh 
          t={t.home_page} 
          dataDichVuTaiDucAnh={dataDichVuTaiDucAnh} 
          isMobile={isMobile} />
      </section>}
      {!isMobile && <section className='w-full'>
        <TinTucDuHoc
          t={t.home_page}
          dataNoibat={dataNoibat}
          categories={categories}
          dataTintucs={dataTintucs} />
      </section>}
      {!isMobile && <section className='w-fit'>
        <HocSinhTieuBieu
          dataHocSinhTieuBieu={dataHocSinhTieuBieu}
          t={t.home_page}
          isMobile={isMobile} />
      </section>}
      {!isMobile && <section className='w-full'>
        <TruongHocLienKet t={t.home_page} />
      </section>}




      {isMobile && <section className='mx-auto w-full flex justify-center items-center md:mt-[10rem] mt-[3.65rem]'>
        <MobileBannerHome dataBanner={dataBanner} isMobile={isMobile} />
      </section>}
      {isMobile && <section className='mx-auto w-full flex justify-center items-center'>
        <MobileLichHoiThao
          t={t.home_page}
          isMobile={isMobile}
          dataLocations={dataLocations}
          dataCountries={dataCountries}
          dataLichHoithaos={dataLichHoithaos}
        />
      </section>}



      {/* Huy làm từ đây nha */}
      {isMobile && <section className='w-full'>
        <MobileQuaTrinhPhatTrien
          dataQutrinhPhatTrienDucAnh={dataQutrinhPhatTrienDucAnh}
          isMobile={isMobile} />
      </section>}
      {isMobile && <section className='w-full'>
        <MobileDichVuDucAnh
          t={t.home_page}
          dataDichVuTaiDucAnh={dataDichVuTaiDucAnh}
          isMobile={isMobile} />
      </section>}
      {isMobile && <section className='w-full'>
        <MobileTinTucDuHoc
          t={t.home_page}
          dataNoibat={dataNoibat}
          categories={categories}
          dataTintucs={dataTintucs} />
      </section>}
      {isMobile && <section className='w-fit'>
        <MobileHocSinhTieuBieu
          dataHocSinhTieuBieu={dataHocSinhTieuBieu}
          t={t.home_page}
          isMobile={isMobile} />
      </section>}
      {<section className='w-full'>
        <MobileTruongHocLienKet t={t.home_page} />
      </section>}

    </main>
  )
}

export default IndexHome
