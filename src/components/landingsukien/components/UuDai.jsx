import CradDrop from '@/components/thongtinduhoc/components/CardDrop'
import Image from 'next/image'

export default function UuDai({dataAcf}) {
  return (
    <>
      <section className='w-full lg:px-[11.56rem] xmd:pl-[0.75rem] xmd:pb-[1.39rem] flex flex-col space-y-[2.5rem] xmd:space-y-[1.5rem]'>
        <h2 className='w-[23.5rem] xmd:w-[18.3125rem] xmd:text-[1.5rem] xmd:font-extrabold text-[2.5rem] font-bold leading-[1.2] text_gradient !bg-clip-text bg-[linear-gradient(170deg,#2E6BC6,#29A4EA)]'>
          Ưu đãi dành cho quý khách tham dự
        </h2>
        <div className='relative overflow-hidden w-full xmd:h-[9.98069rem]'>
          <div className='xmd:absolute xmd:overflow-auto flex space-x-[1.5rem] xmd:space-x-[0.75rem]'>
            <Image
              className='rounded-[1rem] w-[37.6875rem] h-[20.125rem] xmd:h-[9.98069rem] xmd:w-[18.69056rem]'
              alt='ưu đãi'
              src={'/images/landing/bgform.jpg'}
              width={603}
              height={322}
            />
            <Image
              className='rounded-[1rem] w-[37.6875rem] h-[20.125rem] xmd:h-[9.98069rem] xmd:w-[18.69056rem]'
              alt='ưu đãi'
              src={'/images/landing/bgform.jpg'}
              width={603}
              height={322}
            />
          </div>
        </div>
      </section>
      <section className='w-full flex flex-col items-center'>
        <h2 className='text-center mb-[2rem] xmd:mb-[1.69rem] xmd:text-[1.5rem] xmd:w-[18.8125rem] w-[40.5rem] text-[2.5rem] font-bold leading-[1.2] text_gradient !bg-clip-text bg-[linear-gradient(170deg,#2E6BC6,#29A4EA)]'>
          Vì sao nhiều du học sinh chọn Đức Anh Educonnect để làm hồ sơ
        </h2>
        <div className='xmd:relative xmd:overflow-hidden w-full xmd:h-[7.95831rem] flex justify-center'>
          <div className='xmd:absolute xmd:overflow-auto flex space-x-[2.06rem]'>
            {dataAcf?.ly_do_tieu_bieu?.map((e, index) => (
              <div
                key={index}
                className='flex flex-col items-center xmd:w-[5.39613rem] w-[8.6875rem]'
              >
                <div className='size-[8rem] xmd:size-[4.96913rem] xmd:p-[1.55rem] p-[2.5rem] flex justify-center items-center rounded-full bg-primary-5'>
                  <Image
                    className='size-[3rem] xmd:size-[1.86344rem]'
                    alt='vì sao nhiều du học sinh chọn đức anh'
                    src={e?.image?.url}
                    width={48}
                    height={48}
                  />
                </div>
                <span className='mt-[1.06rem] xmd:mt-[0.66rem] text-center text-[1.75rem] xmd:text-[1.087rem] font-bold leading-[1.2] text-primary-60'>
                  {e?.title}
                </span>
                <span className='font-sans mt-[0.25rem] xmd:tracking-[-0.014rem] xmd:mt-[0.16rem] text-center text-[1.125rem] xmd:text-[0.69875rem] font-medium leading-[1.2] text-greyscaletext-40'>
                  {e?.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-[2rem] w-full px-[11.56rem] xmd:px-[0.75rem] flex space-x-[1.5rem]'>
          <div className='flex flex-col flex-1 space-y-[0.75rem]'>
            {new Array(3).fill(0).map((e, index) => (
              <CradDrop
                className='bg-primary-5'
                data={dataAcf?.chi_tiet_ly_do[index]}
                index={index}
              />
            ))}
          </div>
          <div className='flex flex-col flex-1 space-y-[0.75rem]'>
            {new Array(3).fill(0).map((e, index) => (
              <CradDrop
                className='bg-primary-5'
                data={dataAcf?.chi_tiet_ly_do[index + 3]}
                index={index + 3}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
