import Image from 'next/image'
import Support from '../components/Support'

export default function ChuanBi({text, dataAcf, isMobile}) {
  return (
    <main className='w-full'>
      <section className='w-full px-[11.56rem] xmd:px-[0.75rem] pt-[8rem] xmd:pt-[5rem]'>
        <h1 className='title xmd:mb32 relative w-fit xmd:mb-[1.75rem] mb-[2.05rem] xlg:pl-[5.3rem] xmd:pl-0'>
          {/* {text.chuabiduhoc.title} */}
          <div className='size-[0.625rem] bg-secondary-40 absolute bottom-[0.625rem] right-[-1.125rem]'></div>
        </h1>
        <div className='flex xmd:h-[37rem] xmd:w-[21.9375rem] xmd:mb-[1.75rem] mb-[5rem] xlg:h-[30.875rem] h-[28.875rem] pl-[3.69rem] pt-[6.19rem] xmd:pl-[1.25rem] xmd:pt-[2.06rem] xlg:w-full w-[76.875rem] flex-col items-start relative'>
          <Image
            className='xmd:hidden rounded-[1.25rem] absolute top-0 left-0 size-full'
            alt='chuẩn bị du hoc'
            src={'/images/thongtinduhoc/banner3.jpg'}
            width={1230}
            height={462}
          />
          <Image
            className='lg:hidden xlg:hidden xmd:block rounded-[0.75rem] absolute top-0 left-0 size-full'
            alt='chuẩn bị du hoc'
            src={'/images/thongtinduhoc/banner3mb.jpg'}
            width={351}
            height={592}
          />
          <span className='w-[24.1875rem] xlg:w-[30rem] z-10 xmd:w-[19.375rem] text-white text-[1.25rem] xmd:text-[1.25rem] xlg:text-[1.5rem] font-bold leading-[1.5]'>
            {/* {text.chuabiduhoc.title_banner} */}
          </span>
        </div>
        <div className='space-y-[2rem]'>
          {dataAcf?.yeu_to.map((e, index) => (
            <div
              key={index}
              className='flex xlg:flex-col w-full items-start'
            >
              <h5 className='w-[15.6875rem] xlg:text-[2rem] xmd:mb18 xmd:text-[1rem] sub24 text-primary-50 font-bold'>
                {e.title}
              </h5>
              <div className='flex flex-col items-start flex-1 space-y-[0.5rem] xmd:space-y-[0.37rem] xlg:mt-[0.6rem]'>
                <span className='body16 xmd:text-[1rem] font-semibold xlg:text-[2rem] text-primary-50'>
                  {e.label}
                </span>
                <div
                  className='tulamhoso'
                  dangerouslySetInnerHTML={{__html: e?.description}}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      {isMobile && (
        <section className='w-full px-[0.75rem]'>
          <Support
            text={text}
            isMobile={isMobile}
          />
        </section>
      )}
    </main>
  )
}
