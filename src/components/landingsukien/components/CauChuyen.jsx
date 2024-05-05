import Image from 'next/image'

export default function CauChuyen() {
  return (
    <div className='w-full px-[11.56rem] xmd:px-[0.75rem] flex flex-col items-start'>
      <h2 className='mt-[3rem] mb-[2rem] w-[35.1875rem] xmd:w-[12.5625rem] text-[2.5rem] xmd:text-[1.5rem] xmd:font-extrabold xmd:leading-[1.3] font-bold leading-[1.2] text_gradient !bg-clip-text bg-[linear-gradient(170deg,#2E6BC6,#29A4EA)]'>
        Các câu chuyện của du học sinh
      </h2>
      <div className='grid grid-cols-2 xmd:grid-cols-1 gap-[1.5rem]'>
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
      <button className='mt-[1.5rem] w-[15.84375rem] xmd:w-full h-[3.5rem] rounded-[0.625rem] bg-primary-50 py-[1rem] px-[2rem] flex justify-center items-center button1 text-center uppercase font-bold text-white'>
        Đăng ký ngay
      </button>
    </div>
  )
}
