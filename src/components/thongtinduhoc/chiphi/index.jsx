import Image from 'next/image'
import TableChiPhi from '../components/TableChiPhi'
import ChiTieu from '../components/ChiTieu'

export default function ChiPhi({text, dataAcf}) {
  return (
    <section
      id='chi_phi'
      className='w-full mt-[8.13rem] xmd:mt-[4rem] flex flex-col items-center'
    >
      <div className='lg:w-[76.875rem] w-full xmd:px-[0.75rem] flex flex-col items-start xlg:px-[5.3rem]'>
        <h1 className='title xmd:mb32 relative w-fit mb-[2.8rem] xmd:mb-[1.5rem]'>
          {text?.cost?.title}
        </h1>
        <div className='relative rounded-[0.75rem] flex xmd:pl-[1.44rem] xmd:pt-[2.3rem] pl-[4.05rem] xmd:items-start items-center justify-start xmd:h-[38.5625rem] xlg:w-full xmd:w-[21.9375rem] h-[28.875rem] w-[76.875rem]'>
          <Image
            className='xmd:hidden absolute top-0 left-0 size-full rounded-[0.75rem]'
            alt='Chi phí du học'
            src={'/images/thongtinduhoc/bannerChiphi.jpg'}
            height={462}
            width={1230}
          />
          <Image
            className='lg:hidden xlg:hidden xmd:block absolute top-0 left-0 size-full rounded-[0.75rem]'
            alt='Chi phí du học'
            src={'/images/thongtinduhoc/bannerChiphimb.jpg'}
            height={617}
            width={351}
          />
          <p className='relative xmd:text-center xmd:sub10 z-10 xmd:w-[19rem] w-[30.6rem] text-[1.5rem] font-semibold xmd:font-medium leading-[1.5] text-background-elevation-10 xmd:text-white'>
            {text?.cost?.banner_title}
          </p>
        </div>
        <TableChiPhi
          dataAcf={dataAcf?.cac_loai_chi_phi}
          title={text?.cost?.cost_Of_studyingAbroad}
        />
        <TableChiPhi
          dataAcf={dataAcf?.du_doan_chi_phi}
          title={text?.cost?.cost_estimation}
          flex
        />
        <div className='flex flex-col mt-[1.5rem]'>
          {text?.cost?.note?.map((e, index) => (
            <span className='text-[0.875rem] font-medium leading-[1.7] text-primary-50'>
              {e}
            </span>
          ))}
        </div>
      </div>
      <ChiTieu text={text} />
    </section>
  )
}
