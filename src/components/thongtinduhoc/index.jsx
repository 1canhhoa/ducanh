import ChiPhi from './components/ChiPhi'
import ChiTieu from './components/ChiTieu'
import ChonNganh from './components/ChonNganh'
import ChuanBi from './components/Chuanbi'
import DuHocTuTuc from './components/DuHocTuTuc'
import HocBong from './components/HocBong'
import LyDoChonDucAnh from './components/LyDo'
import QuyDoiDiemGPA from './components/QuyDoiDiemGPA'
import LienHe from './components/LienHe'
import VieclamDinhcu from './components/VieclamDinhcu'
import Support from './components/Support'
import Image from 'next/image'

export default async function ThongTindh({text, isMobile}) {
  return (
    <main className='w-full'>
      <div className='w-full pt-[2.69rem] flex items-center justify-start flex-col'>
        <LyDoChonDucAnh text={text} />
        <ChuanBi text={text} />
        <QuyDoiDiemGPA text={text} />
        <HocBong text={text} />
        <DuHocTuTuc text={text} />
        <ChonNganh text={text} />
        <ChiPhi
          text={text}
          isMobile={isMobile}
        />
        <ChiTieu text={text} />
        <LienHe text={text} />
        <VieclamDinhcu text={text} />
        <Support text={text} />
        <div className='w-full relative xmd:mt-[4.12rem] h-[18rem] xmd:h-[22.875rem] xmd:w-[23.4375rem] lg:pl-[11.63rem] pl-[0.75rem] flex xmd:items-start xmd:pt-[2rem] items-center'>
          <Image
            className='size-full absolute top-0 left-0'
            alt='lien hệ với đức anh'
            src={'/images/thongtinduhoc/contact.jpg'}
            width={1600}
            height={288}
          />
          <Image
            className='size-full absolute top-0 left-0'
            alt='lien hệ với đức anh'
            src={'/images/thongtinduhoc/contactmb.jpg'}
            width={375}
            height={366}
          />
          <div className='flex relative z-10 flex-col items-start space-y-[1.5rem] xmd:space-y-[0.63rem]'>
            <span className='body16 xmd:body14 text-greyscaletext-50 font-semibold'>
              {text.information.contact_footer.maxim}
            </span>
            <div className='flex flex-col space-y-[1rem] xmd:space-y-[0.62rem]'>
              <span className='text-primary-40 font-bold body16'>
                {text.information.contact_footer.contact_title1}
              </span>
              <ul className='flex flex-col items-start'>
                <li>{text.information.contact_footer.contact_text1}</li>
                <p>
                  {text.information.contact_footer.contact_text2.t1}
                  <span className='text-secondary-50'>
                    {text.information.contact_footer.contact_text2.t2}
                  </span>
                </p>
              </ul>
              <span className='text-primary-40 font-bold body16'>
                {text.information.contact_footer.contact_title2}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
