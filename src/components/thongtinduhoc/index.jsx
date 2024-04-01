import ChonNganh from './components/ChonNganh'
import ChuanBi from './components/Chuanbi'
import DuHocTuTuc from './components/DuHocTuTuc'
import HocBong from './components/HocBong'
import LyDoChonDucAnh from './components/LyDo'
import QuyDoiDiemGPA from './components/QuyDoiDiemGPA'

export default function ThongTindh() {
  return (
    <main className='w-full mt-[8.88rem] '>
      <div className='w-full pt-[2.69rem] flex flex-col items-start'>
        <LyDoChonDucAnh />
        <ChuanBi />
        <QuyDoiDiemGPA />
        <HocBong />
        <DuHocTuTuc />
        <ChonNganh />
      </div>
    </main>
  )
}
