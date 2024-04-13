"use client"
import { useState } from 'react'
import Image from 'next/image'

const Section = ({ num, text, mobi}) => {
  return <div className={`${mobi ? "!bg-transparent" : ""} group relative bg-white flex xmd:items-center items-end pb-5 justify-center w-[16.375rem] h-[14.0625rem]  shrink-0 
  xmd:w-[8.75rem] xmd:h-[8.8125rem] xmd:rounded-3xl
  shadow-[0px_3px_24px_0px_rgba(0,132,255,0.04),0px_0px_32px_0px_rgba(0,119,229,0.04)] rounded-[1.08213rem]`}>
    <div className='inline-flex flex-col items-center'>
      <div className={` ${mobi ? '!text-white' : 'from-[#2E6BC6] from-[9.83%]  via-[#2E6BC6] via-[9.83%]  to-[#29A4EA] to-[86.69%] text-center text_gradient'}  
          text-6xl not-italic font-extrabold leading-[130%] tracking-[-0.1875rem] bg-clip-text
          xmd:text-[2.75rem]  xmd:tracking-[-0.1375rem]

          bg-gradient-to-r 
          md:from-[#2B46A8] md:from-[100%] 
          md:to-[#082072] 
          md:to-[0%]
      
          md:absolute md:bottom-[2.5rem] md:z-[50]
         `}>{num}</div>
      <div className={`${mobi ? '!text-white' : 'xmd:w-[5.1875rem] from-[#2E6BC6] from-[9.83%]  via-[#2E6BC6] via-[9.83%]  to-[#29A4EA] to-[86.69%] text-center text_gradient'} 
       text-base not-italic font-extrabold leading-[130%] tracking-[-0.02rem] bg-clip-text
      xmd:text-xs xmd:tracking-[-0.015rem]
         bg-gradient-to-r md:from-[#2B46A8] md:from-[100%] md:to-[#082072] md:to-[0%]

         hover:bg-[url("/images/homepage/bg-text.svg")]
         ease-linear duration-1000
         `}>{text}</div>
    </div>
  </div>
}

const QuaTrinhPhatTrien = ({ isMobile, dataQutrinhPhatTrienDucAnh }) => {
  const { qua_trinh_phat_trien, ton_chi_lam_viec, thanh_tuu_dat_duoc }=dataQutrinhPhatTrienDucAnh
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
    <div  className='quatrinhphattrienducanh'>
      <div className="relative w-full  xmd:flex xmd:flex-col justify-center items-center  xmd:pt-[4.3rem] pt-[6rem]">
        {/* title */}
        <div className="md:absolute xmd:w-fit top-[4rem] left-[5rem] inline-flex flex-col items-start xmd:space-y-[0.5rem] space-y-[1.5rem]">
          <div className="text-primary-60 text-[3rem] not-italic font-extrabold leading-[120%] tracking-[-0.03rem]
          xmd:w-[16.1875rem] xmd:text-[1.75rem] xmd:leading-[130%] xmd:tracking-[-0.035rem];
          ">
            Quá trình phát triển của Đức Anh
          </div>
          <div className="flex flex-col items-start xmd:space-y-[2.25rem] space-y-[1.8125rem]">
            <div dangerouslySetInnerHTML={{ __html:qua_trinh_phat_trien?.title }} />
            <div className="flex z-[50] xmd:justify-between self-stretch items-center space-x-[0.9375rem]">

              <button className='w-max  flex h-12 justify-center items-center gap-2.5 xmd:flex-[1_0_0]  px-[1.875rem] py-[0.9375rem] rounded-lg
              text-white text-center text-sm not-italic font-bold leading-[120%] uppercase
              bg-linear-l5
              '><div className='w-max'>Về chúng tôi</div></button>
              <button className='flex h-12 justify-center items-center xmd:flex-[1_0_0] border border-[color:var(--div-blue-6020,rgba(19,43,125,0.20))] px-[1.875rem] py-[0.9375rem] rounded-[0.5rem] border-solid
              text-[0.875rem] not-italic font-bold leading-[1.2] uppercase
              text_gradient  bg-clip-text bg-gradient-to-r from-[#2B46A8] from-[100%] to-[#082072] to-[0%]
              '>
                <div className='w-max'>Liên hệ tư vấn</div>
              </button>
              {/* <Button className={'normal-case flex-1 w-[9.4375rem] px-[1.875rem] py-[0.9375rem] text-white text-sm not-italic font-bold leading-[120%] bg-linear-l5'}>Về chúng tôi</Button>
              <Button className={'normal-case flex-1 w-[9.4375rem] px-[1.875rem] py-[0.9375rem]   text-sm not-italic font-bold leading-[120%] text_gradient  bg-clip-text bg-gradient-to-r from-[#2B46A8] from-[100%] to-[#082072] to-[0%]'}>Liên hệ tư vấn</Button> */}
            </div>
          </div>
        </div>

        {/* WEB ảnh trường học và ảnh nền xanh   */}
        <Image loading='lazy' alt="ảnh nền quá trình phát triển" src={'/images/homepage/bg-quatrinh.png'} width={1600} height={1700} className="xmd:hidden w-full h-full" />
        {/* MOBI ảnh trường học và ảnh nền xanh + CÔ ÁO ĐỎ */}
        <div className="md:hidden h-[50.25rem] w-full relative">
          <Image className="z-[2] absolute top-[-2.4rem] w-full " loading='lazy' alt="ngôi trường và học sinh" src={'/images/homepage/quatrinh-mobi.png'} width={330} height={330} />
          <Image className="z-[1] absolute top-[12.25rem] w-full" loading='lazy' alt="ảnh nên xanh mobi" src={'/images/homepage/quatrinh2-mobi.png'} width={330} height={330} />
        </div>


        <div className='md:absolute flex items-center space-x-[3.2rem] md:left-1/2 md:bottom-[16rem]  md:-translate-x-1/2 md:w-[76.40625rem] md:h-[44.387rem] shrink-0'>
          {/* WEB áo đỏ  */}
          <Image className="xmd:hidden md:w-[45.12425rem] h-[44.387rem]" loading='lazy' alt="ảnh tôn chỉ áo đỏ" src={'/images/homepage/quatrinh1.png'} width={730} height={720} />

          {/* WEB + MOBI ducanh connect */}
          <div className="absolute z-[2] xmd:top-[41.7rem] xmd:left-[-2.3rem] md:top-[13rem] md:left-[0.9rem] flex md:w-[17.8125rem] md:h-[11.4375rem] flex-col xmd:items-start items-end xmd:space-y-[0.5rem] space-y-[1rem] shrink-0">
            <div className=" text-white text-right xmd:text-[0.875rem] text-[1rem] not-italic font-bold leading-[normal] uppercase">
              {ton_chi_lam_viec?.title1}
            </div>
            <div className=" text-white text-right xmd:text-[1.75rem] text-[4.5rem] not-italic xmd:font-bold font-extrabold xmd:leading-[1.3] leading-[100%] xmd:tracking-normal tracking-[-0.045rem]">
              {ton_chi_lam_viec?.title2}
            </div>
          </div>

          {/* WEB */}
          <Image alt="mouse cursor" className="xmd:hidden absolute w-[2.56356rem] h-[2.71663rem] top-[30.27rem] left-[16.5rem]" loading='lazy'
            src={'/images/homepage/mouse-cursor.png'} width={50} height={50} />
          <Image alt="ảnh hiệu ứng Hover" className={`xmd:hidden absolute w-[3.96356rem] h-[3.91663rem] top-[28.57rem] left-[14.7rem] circle  opacity-100 size-[3.8rem] `} loading='lazy' src={'/images/homepage/hover-title.svg'} width={92} height={92} />

          {/* WEB */}
          <Image className="xmd:hidden absolute -bottom-[1.1rem] z-[-1] left-28 w-[78.875rem] h-[9.1875rem]" loading='lazy' alt="ảnh sáng tam giác" src={'/images/homepage/bg-quatrinh1.png'} width={1300} height={150} />

          {/* WEB + MOBI  5 ĐIỀU ĐỨC ANH DẠY */}
          <div className="xmd:absolute xmd:top-[48.3rem] xmd:right-[0.5rem] z-[2] md:mb-20 flex md:w-[24.5625rem] md:h-[26.5625rem] flex-col items-start xmd:space-y-[0.67269rem] space-y-[1.875rem] shrink-0">
            {ton_chi_lam_viec?.lists_ton_chi?.map((d, i) => (
              <div
                key={i}
                onMouseEnter={() => !isMobile ? handleHover(i) : () => { }}
                onMouseLeave={() => !isMobile ? handleLeave(i) : () => { }}
                className="relative group cursor-pointer flex items-end gap-[0.4375rem]">
                <Image className={` ${hover && index === i ? 'circle !opacity-100' : ''} opacity-0 size-[3.8rem] absolute -left-[1.53rem] top-[1.75rem] `} loading='lazy' alt={d} src={'/images/homepage/hover-title.svg'} width={92} height={92} />
                <div className={' w-[0.5rem] h-[0.5rem] bg-secondary-40 rounded-full duration-300 ease-linear absolute xmd:bottom-[0.06rem] xmd:left-[0.04rem] bottom-[0.06rem] left-[0.04rem] xmd:scale-0 scale-50' + (hover && index === i ? 'scale-100 circle1' : '')}></div>

                <div className={' xmd:size-[0.22425rem] size-[0.625rem] bg-secondary-40 absolute xmd:bottom-0 xmd:left-[0.5rem] bottom-0 left-0 duration-300 ease-linear  opacity-100 ' + (hover && index === i ? "translate-x-10 !opacity-0 " : "")}></div>
                <div className=" text-white pl-4 !pointer-events-none xmd:text-[1.07631rem] text-[3rem] not-italic w-max font-bold leading-[normal] xmd:tracking-[-0.02244rem] tracking-[-0.0625rem]">
                  {d?.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* bg - sticky  ,   2000 truong dai hoc    ,text-on-bg-sticky*/}
      <div className="relative w-full xmd:h-[42.6rem] h-[38.5rem]">

        <div className=" absolute w-full xmd:z-[2] xmd:-top-[12.3rem] -top-[25rem] md:h-[88rem]">
          <div className=' z-[10] w-full xmd:h-[44.4375rem]  md:sticky top-[3rem]'>
            <Image loading='lazy' alt="ảnh nền xanh nước biển , phần sticky" src={'/images/homepage/bg-quatrinh2.png'} width={1600} height={720}
              className="xmd:hidden w-full z-[10] h-[44.4375rem]  " />
            <Image loading='lazy' alt="ảnh nền xanh nước biển mobi, phần sticky" src={'/images/homepage/quatrinh3-mobi.png'} width={1050} height={1000}
              className="md:hidden z-[10] w-full  " />
            <div className=" absolute  z-50 xmd:top-[7rem] xmd:left-1/2 xmd:-translate-x-1/2 top-[15rem] left-[5rem] inline-flex flex-col items-start xmd:space-y-[0.5] space-y-[1.5]">
              <div className="text-primary-5 xmd:text-[0.875rem] text-[0.98206rem] not-italic font-bold leading-[150%] xmd:tracking-normal tracking-[-0.00981rem] uppercase">
                {thanh_tuu_dat_duoc?.title1}
              </div>
              <div className="flex flex-col items-start xmd:space-y-[1.5rem] space-y-[1rem]">
                <div className="xmd:w-[20.9375rem] w-[38.625rem] text-primary-5 xmd:text-[1.75rem] text-[2.25rem] 
                not-italic font-bold xmd:leading-[1.3] leading-[1.5] xmd:tracking-normal tracking-[-0.03125rem]">
                  <div dangerouslySetInnerHTML={{ __html: thanh_tuu_dat_duoc?.title2 }} />

                </div>
                <button className="flex  justify-center items-center space-x-[0.75rem] border border-white px-[1.875rem] 
                py-[0.9375rem] rounded-lg border-solid
                text-white  text-center xmd:uppercase text-sm not-italic font-bold leading-[120%]
                ">
                  <div className="w-max">
                    Xem chi tiết
                  </div>
                  <Image loading='lazy' alt="ảnh icon button" src={'/images/homepage/icon_button_quatrinh.png'} width={400} height={400} className=" xmd:hidden w-[1.01856rem] h-[1.07844rem] shrink-0" />
                </button>
              </div>
            </div>
          </div>

        </div>
        <Image loading='lazy' alt="ảnh nền xanh mờ web" src={'/images/homepage/bg-quatrinh3.jpeg'} width={1600} height={920}
          className="xmd:hidden w-[193.875rem] h-[70.5rem] shrink-0" />
        <Image loading='lazy' alt="ảnh nền xanh mờ web" src={'/images/homepage/union-blue.png'} width={1600} height={920}
          className="z-[11] w-[20.95513rem] h-[31.39263rem] shrink-0 md:hidden absolute xmd:top-[11.3rem] xmd:left-1/2 xmd:-translate-x-1/2  -top-[14rem]" />
        <div className=' flex z-[12] space-x-[1.7rem] items-start absolute xmd:top-[12rem] xmd:left-1/2 xmd:-translate-x-1/2  -top-[14rem] md:right-[15rem]  '>
          <div className="flex flex-col xmd:space-y-[1.79rem] space-y-[2.19rem]">
            {thanh_tuu_dat_duoc?.sau_o_thanh_tuu?.slice(0, 3).map((d,i) => (
            <Section num={d?.num} text={d?.text} />
            ))}
          </div>
          <div className=" flex flex-col xmd:space-y-[1.6rem] space-y-[2.19rem] xmd:mt-[0.35rem] md:mt-[5rem]">
            {thanh_tuu_dat_duoc?.sau_o_thanh_tuu?.slice(-3).map((d, i) => (
              <Section num={d?.num} text={d?.text} />
            ))}
          </div>
        </div>



      </div>
    </div >
  )
}


export default QuaTrinhPhatTrien
