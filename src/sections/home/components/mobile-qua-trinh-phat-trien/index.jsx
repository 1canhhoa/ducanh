"use client"
import { useState } from 'react'
import Image from 'next/image'

const Section = ({ num, text, mobi }) => {
  return <div className={`${mobi ? "!bg-transparent" : ""} group relative bg-white flex items-center pb-5 justify-center shrink-0 
  w-[8.75rem] h-[8.8125rem] xmd:rounded-3xl
  shadow-[0px_3px_24px_0px_rgba(0,132,255,0.04),0px_0px_32px_0px_rgba(0,119,229,0.04)] rounded-[1.08213rem]`}>
    <div className='inline-flex flex-col items-center'>
      <div className={` ${mobi ? '!text-white' : 'from-[#2E6BC6] from-[9.83%]  via-[#2E6BC6] via-[9.83%]  to-[#29A4EA] to-[86.69%] text-center text_gradient'}  
          not-italic font-extrabold leading-[130%] bg-clip-text
          text-[2.75rem]  tracking-[-0.1375rem]

          bg-gradient-to-r 
         `}>{num}</div>
      <div className={`${mobi ? '!text-white' : 'xmd:w-[5.1875rem] from-[#2E6BC6] from-[9.83%]  via-[#2E6BC6] via-[9.83%]  to-[#29A4EA] to-[86.69%] text-center text_gradient'} 
        not-italic font-extrabold leading-[130%] bg-clip-text
      text-[0.75rem] tracking-[-0.015rem]
         bg-gradient-to-r 

         hover:bg-[url("/images/homepage/bg-text.svg")]
         ease-linear duration-1000
         `}>{text}</div>
    </div>
  </div>
}

const QuaTrinhPhatTrien = ({ isMobile, dataQutrinhPhatTrienDucAnh }) => {
  const { qua_trinh_phat_trien, ton_chi_lam_viec, thanh_tuu_dat_duoc } = dataQutrinhPhatTrienDucAnh
  const [hover, setHover] = useState(false)
  const [index, setIndex] = useState(-1)
  const data = ['Chuyên nghiệp', 'Minh bạch', 'Hiệu quả', 'Thân thiện', 'Đồng hành xuyên suốt']
  const handleHover = (num) => {
    setIndex(num)
    setHover(() => setHover(true))
  }
  const handleLeave = (num) => {
    setIndex(-1)
    setHover(() => setHover(false))
  }
  return (
    <div className='quatrinhphattrienducanh'>
      <div className="relative w-full  flex flex-col justify-center items-center pt-[4.3rem]">
        {/* title */}
        <div className="w-fit px-[0.5rem] top-[4rem] left-[5rem] inline-flex flex-col items-start space-y-[0.5rem]">
          <div className="text-primary-60 text-[3rem] not-italic font-extrabold leading-[120%] tracking-[-0.03rem]
          xmd:w-[16.1875rem] xmd:text-[1.75rem] xmd:leading-[130%] xmd:tracking-[-0.035rem];
          ">
            Quá trình phát triển của Đức Anh
          </div>
          <div className="flex flex-col items-start space-y-[2.25rem]">
            <div dangerouslySetInnerHTML={{ __html: qua_trinh_phat_trien?.title }} />
            <div className="flex z-[50] justify-between self-stretch items-center space-x-[0.9375rem]">

              <button className='w-max flex h-12 justify-center items-center gap-2.5 xmd:flex-[1_0_0]  px-[1.875rem] py-[0.9375rem] rounded-lg
              text-white text-center text-sm not-italic font-bold leading-[120%] uppercase
              bg-linear-l5
              '><div className='w-max'>Về chúng tôi</div></button>
              <button className='flex h-12 justify-center items-center flex-[1_0_0] border border-[color:var(--div-blue-6020,rgba(19,43,125,0.20))] px-[1.875rem] py-[0.9375rem] rounded-[0.5rem] border-solid
              text-[0.875rem] not-italic font-bold leading-[1.2] uppercase
              text_gradient  bg-clip-text bg-gradient-to-r from-[#2B46A8] from-[100%] to-[#082072] to-[0%]
              '>
                <div className='w-max'>Liên hệ tư vấn</div>
              </button>
            </div>
          </div>
        </div>
        {/* MOBI ảnh trường học và ảnh nền xanh + CÔ ÁO ĐỎ */}
        <div className="md:hidden h-[50.25rem] w-full relative">
          <Image className="z-[2] absolute top-[-2.4rem] w-full " loading='lazy' alt="ngôi trường và học sinh" src={'/images/homepage/quatrinh-mobi.png'} width={330} height={330} />
          <Image className="z-[1] absolute top-[12.25rem] w-full" loading='lazy' alt="ảnh nên xanh mobi" src={'/images/homepage/quatrinh2-mobi.png'} width={330} height={330} />
        </div>


        <div className='flex items-center space-x-[3.2rem] shrink-0'>

          {/* WEB + MOBI ducanh connect */}
          <div className="absolute z-[2] top-[43.5rem] left-[1rem] flex flex-col items-start space-y-[0.5rem] shrink-0">
            <div className=" text-white text-right text-[0.875rem] not-italic font-bold leading-[normal] uppercase">
              {ton_chi_lam_viec?.title1}
            </div>
            <div className=" text-white text-right xmd:text-[1.75rem] text-[4.5rem] not-italic xmd:font-bold font-extrabold xmd:leading-[1.3] leading-[100%] xmd:tracking-normal tracking-[-0.045rem]">
              {ton_chi_lam_viec?.title2}
            </div>
          </div>

          {/* WEB + MOBI  5 ĐIỀU ĐỨC ANH DẠY */}
          <div className="absolute top-[52.5rem] right-[0.5rem] z-[2] flex flex-col items-start space-y-[0.67269rem] shrink-0">
            {ton_chi_lam_viec?.lists_ton_chi?.map((d, i) => (
              <div
                key={i}
                onMouseEnter={() => !isMobile ? handleHover(i) : () => { }}
                onMouseLeave={() => !isMobile ? handleLeave(i) : () => { }}
                className="relative group cursor-pointer flex items-end gap-[0.4375rem]">
                <Image className={` ${hover && index === i ? 'circle !opacity-100' : ''} opacity-0 size-[3.8rem] absolute -left-[1.53rem] top-[1.75rem] `} loading='lazy' alt={d} src={'/images/homepage/hover-title.svg'} width={92} height={92} />
                <div className={' w-[0.5rem] h-[0.5rem] bg-secondary-40 rounded-full duration-300 ease-linear absolute bottom-[0.06rem] left-[0.04rem] scale-0 ' + (hover && index === i ? 'scale-100 circle1' : '')}></div>

                <div className={'size-[0.22425rem] bg-secondary-40 absolute left-[0.5rem] bottom-0 duration-300 ease-linear  opacity-100 ' + (hover && index === i ? "translate-x-10 !opacity-0 " : "")}></div>
                <div className=" text-white pl-4 !pointer-events-none text-[1.07631rem] not-italic w-max font-bold leading-[normal] tracking-[-0.02244rem]">
                  {d?.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* bg - sticky  ,   2000 truong dai hoc    ,text-on-bg-sticky*/}
      <div className="relative w-full h-[42.6rem]">

        <div className=" absolute w-full z-[2] -top-[12.3rem]">
          <div className=' z-[10] w-full top-[3rem]'>
            <Image loading='lazy' alt="ảnh nền xanh nước biển mobi, phần sticky" src={'/images/homepage/quatrinh3-mobi.png'} width={1050} height={1000}
              className=" z-[10] w-full  mt-[1.2rem]" />
            <div className=" absolute  z-50 top-[8rem] left-1/2 -translate-x-1/2 inline-flex flex-col items-start space-y-[0.5]">
              <div className="text-primary-5 text-[0.875rem] not-italic font-bold leading-[150%] tracking-normal uppercase">
                {thanh_tuu_dat_duoc?.title1}
              </div>
              <div className="flex flex-col items-start xmd:space-y-[1.5rem] space-y-[1rem]">
                <div className="w-[20.9375rem] text-primary-5 text-[1.75rem]
                not-italic font-bold leading-[1.3] tracking-normal">
                  <div className='w-[20.9375rem] text-[color:var(--greyscaletext-0,#FFF)] text-[1.75rem] not-italic font-bold leading-[130%]'>
                    Những thành tựu nổi bật
                  </div>
                </div>
                <button className="flex  justify-center items-center space-x-[0.75rem] border border-white px-[1.875rem] 
                py-[0.9375rem] rounded-lg border-solid
                text-white  text-center uppercase text-sm not-italic font-bold leading-[120%]
                ">
                  <div className="w-max">
                    Xem chi tiết
                  </div>
                </button>
              </div>
            </div>
          </div>

        </div>
        <Image loading='lazy' alt="ảnh nền xanh mờ web" src={'/images/homepage/union-blue.png'} width={1600} height={920}
          className="z-[11] w-[20.95513rem] h-[31.39263rem] shrink-0 md:hidden absolute top-[6.6rem] left-1/2 -translate-x-1/2" />
        <div className='flex z-[12] space-x-[1.7rem] items-start absolute top-[7.5rem] left-1/2 -translate-x-1/2'>
          <div className="flex flex-col space-y-[1.59rem]">
            {thanh_tuu_dat_duoc?.sau_o_thanh_tuu?.slice(0, 3).map((d, i) => (
              <Section num={d?.num} mobi={i === 0 || i === 2 ? true : false} text={d?.text} />
            ))}
          </div>
          <div className=" flex flex-col space-y-[1.6rem] mt-[0.35rem]">
            {thanh_tuu_dat_duoc?.sau_o_thanh_tuu?.slice(-3).map((d, i) => (
              <Section num={d?.num} mobi={i === 1 ? true : false} text={d?.text} />
            ))}
          </div>
        </div>



      </div>
    </div >
  )
}


export default QuaTrinhPhatTrien
