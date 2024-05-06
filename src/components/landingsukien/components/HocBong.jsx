import CradDrop from '@/components/thongtinduhoc/components/CardDrop'
import Image from 'next/image'

const data = [
  {
    title: 'Đánh giá năng lực - nhận diện học bổng',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ea atque omnis at rerum provident repellendus blanditiis, placeat veritatis ab hic velit, voluptate ipsum itaque, minus quaerat nesciunt ducimus cum?',
  },
  {
    title: 'Đánh giá năng lực - nhận diện học bổng',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ea atque omnis at rerum provident repellendus blanditiis, placeat veritatis ab hic velit, voluptate ipsum itaque, minus quaerat nesciunt ducimus cum?',
  },
]

export default function HocBong({isMobile}) {
  return (
    <>
      <div className='relative xmd:h-[30.6875rem] xmd:w-[23.4375rem] h-[16.125rem] w-[76.875rem] mx-auto rounded-[1.25rem]'>
        <Image
          className='absolute size-full top-0 left-0'
          alt='banner học bổng'
          src={
            isMobile
              ? '/images/landing/bannerHocbong-mb.jpg'
              : '/images/landing/bannerHocbong.jpg'
          }
          width={1230}
          height={258}
        />
        <div className='absolute xmd:top-[3.69rem] xmd:left-[1.06rem] top-[3.19rem] left-[21rem] flex flex-col items-start'>
          <span className='text-[1.25rem] xmd:text-[1.01006rem] font-semibold leading-[1.2] text-white translate-y-[1.5rem] translate-x-[0.5rem] font-sans'>
            HỌC BỔNG
          </span>
          <span className='text-[7.17281rem] xmd:text-[5.79606rem] font-bold leading-[1.2] text-white tracking-[-0.35863rem] font-sans'>
            20-100%
          </span>
          <span className='xmd:w-[14.875rem] xmd:translate-x-1/2 xmd:mt-[1.37rem] texte text-[1.25rem] font-bold leading-[1.2] text-white tracking-[-0.025rem] font-sans'>
            TRÙM SĂN HỌC BỔNG Đức Anh EduConnect sẽ giúp bạn
          </span>
        </div>
      </div>
      <div className='flex flex-col items-start px-[11.56rem] xmd:px-[0.75rem] xmd:py-[2.5rem]'>
        <h2 className='mb-[2.5rem] text-[2.5rem] xmd:text-[1.5rem] xmd:font-extrabold xmd:leading-[1.3] font-bold leading-[1.2] text_gradient !bg-clip-text bg-[linear-gradient(170deg,#2E6BC6,#29A4EA)]'>
          Các bước xin học bổng
        </h2>

        {isMobile ? (
          <div className='flex flex-col space-y-[0.75rem]'>
            {data?.map((e, index) => (
              <CradDrop
                key={index}
                noIcon
                data={e}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className='xmd:hidden relative flex justify-center items-center bg-[linear-gradient(170deg,#2E6BC6_10.78%,#29A4EA_81.3%)] w-[24.5rem] h-[7rem] rounded-[0.75rem] shadow-[116px_235px_73px_0px_rgba(158,158,158,0.00),74px_151px_67px_0px_rgba(158,158,158,0.01),42px_85px_57px_0px_rgba(158,158,158,0.05),19px_38px_42px_0px_rgba(158,158,158,0.09),5px_9px_23px_0px_rgba(158,158,158,0.10)]'>
            <span className='text-center text-[1.25rem] font-bold leading-[1.2] text-white w-[12.5rem]'>
              Đánh giá năng lực - nhận diện học bổng
            </span>
            <div className='text-white size-[2.9375rem] rounded-[50%] absolute -top-[1rem] -left-[1rem] bg-[linear-gradient(170deg,#2e6bc6_10.78%,#2E6BC6_81.3%)] flex justify-center items-center before:absolute'>
              <div className='size-[1.9375rem] bg-[#D9D9D9] rounded-[50%] flex justify-center items-center'>
                1
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
