import Image from 'next/image'
import CradDrop from '../components/CardDrop'
import Future from '@/layout/future/Future'

export default function DichvuDA({text, dataAcf}) {
  return (
    <main className='w-full'>
      <section className='flex flex-col pt-[8rem] xmd:pt-[5rem] px-[11.56rem] xmd:px-0 mb-[5rem] xmd:mb-[2rem]'>
        <h1 className='title relative w-fit xmd:mb32 mb-[3rem] xmd:px-[0.75rem]'>
          {text.dichvutaiducanh}
        </h1>
        <div className='flex xmd:flex-col lg:space-x-[5rem] xmd:space-y-[2rem]'>
          <div className='flex flex-col flex-1 space-y-[1rem] xmd:px-[0.75rem]'>
            {dataAcf?.dich_vu?.map((e, index) => (
              <CradDrop
                key={index}
                index={index}
                data={e}
              />
            ))}
          </div>
          <Image
            className='lg:top-[16rem] lg:sticky xmd:h-[27.4375rem] xmd:w-[23.4375rem] lg:rounded-[1.25rem] w-[32.0625rem] h-[37.6875rem]'
            alt='dịch vụ tại đức anh'
            src={'/images/thongtinduhoc/bannerDichvu.jpg'}
            width={513}
            height={603}
          />
        </div>
      </section>
      <Future text={text} />
    </main>
  )
}
