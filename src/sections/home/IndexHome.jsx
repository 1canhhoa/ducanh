import React from 'react'
import BannerHome from '@/sections/home/components/banner-home'
import './style.css'
import LichHoiThao from '@/sections/home/components/lich-hoi-thao'
import QuaTrinhPhatTrien from '@/sections/home/components/qua-trinh-phat-trien'
import DichVuDucAnh from '@/sections/home/components/dich-vu-duc-anh'
import HocSinhTieuBieu from '@/sections/home/components/hoc-sinh-tieu-bieu'
import TinTucDuHoc from '@/sections/home/components/tin-tuc-du-hoc'
import TruongHocLienKet from '@/sections/home/components/truong-hoc-lien-ket'
const IndexHome = ({ t, isMobile }) => {
  return (
    <main className='relative flex-col flex justify-center items-start xmd:bg-elevation-blue'>
      <section className='mx-auto md:mt-[10rem] mt-[3.65rem]'>
        <BannerHome isMobile={isMobile} />
      </section>
      <section className='mx-auto'>
        <LichHoiThao t={t.home_page} isMobile={isMobile} />
      </section>
      <section>
        <QuaTrinhPhatTrien isMobile={isMobile} />
      </section>
      <section>
        <DichVuDucAnh t={t.home_page} isMobile={isMobile} />
      </section>
      <section>
        <TinTucDuHoc t={t.home_page} />
      </section>
      {/* <section>
        <HocSinhTieuBieu t={t.home_page} />
      </section> */}
      <section>
        <TruongHocLienKet t={t.home_page} />
      </section>

    </main>
  )
}

export default IndexHome
