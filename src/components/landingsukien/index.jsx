import BannerSlider from './components/BannerSlider'
import CauChuyen from './components/CauChuyen'
import DangKy from './components/DangKy'
import DanhGia from './components/DanhGia'
import Educonnect from './components/Educonnect'
import FormDangKy from './components/FormDangKy'
import HocBong from './components/HocBong'
import TableTruong from './components/TableTruong'
import UuDai from './components/UuDai'

export default function LandingSukien({dataAcf, isMobile}) {
  return (
    <main className='space-y-[6.25rem] xmd:space-y-[2rem]'>
      <BannerSlider isMobile={isMobile} />
      <DangKy />
      <FormDangKy isMobile={isMobile} />
      <Educonnect dataAcf={dataAcf?.educonnect} />
      <HocBong isMobile={isMobile} />
      <TableTruong
        dataAcf={dataAcf}
        isMobile={isMobile}
      />
      <UuDai dataAcf={dataAcf} />
      <DanhGia
        dataAcf={dataAcf}
        isMobile={isMobile}
      />
      <CauChuyen />
    </main>
  )
}
