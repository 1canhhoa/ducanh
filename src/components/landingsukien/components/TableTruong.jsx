import TableChiPhi from '@/components/thongtinduhoc/components/TableChiPhi'
import Image from 'next/image'

export default function TableTruong({dataAcf, isMobile}) {
  return (
    <section className='w-full flex flex-col h-[46.1875rem] xmd:h-[41rem] relative'>
      <Image
        className='absolute bottom-0 left-0 size-full'
        alt='banner table danh sách trường tốt'
        src={
          isMobile
            ? '/images/landing/bgTable-mb.png'
            : '/images/landing/bgTable.png'
        }
        width={1600}
        height={739}
      />
      <h2 className='z-10 px-[11.56rem] xmd:px-[0.75rem] xmd:py-[0.625rem] lg:w-[53.725rem] text-[2.5rem] xmd:text-[1.5rem] font-bold leading-[1.2] text_gradient !bg-clip-text bg-[linear-gradient(170deg,#2E6BC6,#29A4EA)]'>
        Danh sách các trường tốt nhất dành cho bạn
      </h2>
      <div className='xmd:mt-[2rem] px-[11.56rem] xmd:px-[0.75rem] z-10'>
        <TableChiPhi
          dataAcf={dataAcf?.danh_sach_truong}
          more
        />
      </div>
    </section>
  )
}
