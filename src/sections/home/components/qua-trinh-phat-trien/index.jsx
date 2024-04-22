"use client"
import { useState } from 'react'
import Image from 'next/image'
import Count from '@/components/count/Count'

const Section = ({ num, text, active }) => {
  const [hover, setHover] = useState()
  return <div onMouseEnter={() => setHover(active)} onMouseLeave={() => setHover(-1)} className={`group relative bg-white flex xmd:items-center items-end pb-5 justify-center w-[16.375rem] h-[14.0625rem]  shrink-0 
  shadow-[0px_3px_24px_0px_rgba(0,132,255,0.04),0px_0px_32px_0px_rgba(0,119,229,0.04)] rounded-[1.08213rem]`}>
    <div className='inline-flex flex-col items-start'>
      <div className={` ${hover === active ? 'opacity-100' : 'opacity-0'}
          text-6xl not-italic font-extrabold leading-[130%] tracking-[-0.1875rem]
          absolute bottom-[2.5rem] z-[50] 
          text_gradient bg-clip-text
          bg-gradient-to-br  from-[#608AE5] from-[27.2%] to-[#BC678D] to-[86.72%]
          duration-500 ease-linear
          `}>
        {<Count num={num} />}+
      </div>
      <div className={` 
      ${hover === active ? 'opacity-0' : 'opacity-100'}
          text-6xl not-italic font-extrabold leading-[130%] tracking-[-0.1875rem]
          absolute bottom-[2.5rem] z-[50] 
          text_gradient bg-clip-text
          bg-gradient-to-br  from-[#082072] from-[0%] to-[#2B46A8] to-[100%]
          duration-500 ease-linear
          `}>
        <Count num={num} />+

      </div>

      <div className={`
       text-base not-italic font-extrabold leading-[130%] tracking-[-0.02rem] 
    text-[#2B46A8] group-hover:text-[#29A4EA]
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
      <div className="relative w-full justify-center items-center pt-[6rem]">
        {/* title */}
        <div className="absolute top-[4rem] left-[5rem] inline-flex flex-col items-start space-y-[1.5rem]">
          <div className="text-primary-60 text-[3rem] not-italic font-extrabold leading-[120%] tracking-[-0.03rem]">
            Quá trình phát triển của Đức Anh
          </div>
          <div className="flex flex-col items-start space-y-[1.8125rem]">
            <div dangerouslySetInnerHTML={{ __html: qua_trinh_phat_trien?.title }} />
            <div className="flex z-[50] self-stretch items-center space-x-[0.9375rem]">

              <button className='w-max  flex h-12 justify-center items-center gap-2.5 px-[1.875rem] py-[0.9375rem] rounded-lg
              text-white text-center text-sm not-italic font-bold leading-[120%] uppercase
              bg-linear-l5
              '><div className='w-max'>Về chúng tôi</div></button>
              <button className='relative bg-linear-l5 group z-0 flex h-12 justify-center items-center border border-[color:var(--div-blue-6020,rgba(19,43,125,0.20))] px-[1.875rem] py-[0.9375rem] rounded-[0.5rem] border-solid
              text-[0.875rem] not-italic font-bold leading-[1.5] uppercase

              '>
                <div className='absolute w-full h-full border group-hover:opacity-0 duration-300 ease-linear z-5 bg-white rounded-[0.5rem]'></div>
                <div className='w-max group-hover:from-white group-hover:to-white text_gradient z-10 bg-clip-text bg-gradient-to-r from-[#2B46A8] from-[100%] to-[#082072] to-[0%]'>Liên hệ tư vấn</div>
              </button>
              {/* <Button className={'normal-case flex-1 w-[9.4375rem] px-[1.875rem] py-[0.9375rem] text-white text-sm not-italic font-bold leading-[120%] bg-linear-l5'}>Về chúng tôi</Button>
              <Button className={'normal-case flex-1 w-[9.4375rem] px-[1.875rem] py-[0.9375rem]   text-sm not-italic font-bold leading-[120%] text_gradient  bg-clip-text bg-gradient-to-r from-[#2B46A8] from-[100%] to-[#082072] to-[0%]'}>Liên hệ tư vấn</Button> */}
            </div>
          </div>
        </div>

        {/* WEB ảnh trường học và ảnh nền xanh   */}
        <Image loading='lazy' alt="ảnh nền quá trình phát triển" src={'/images/homepage/bg-quatrinh.png'} width={1600} height={1700} className=" w-full h-full" />


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

          {/* 5 ĐIỀU */}
          <div className="xmd:absolute xmd:top-[48.3rem] xmd:right-[0.5rem] z-[2] md:mb-20 flex md:w-[24.5625rem] md:h-[26.5625rem] flex-col items-start space-y-[1.875rem] shrink-0">
            {ton_chi_lam_viec?.lists_ton_chi?.map((d, i) => (
              <div
                key={i}
                onMouseEnter={() => !isMobile ? handleHover(i) : () => { }}
                onMouseLeave={() => !isMobile ? handleLeave(i) : () => { }}
                className="relative group cursor-pointer flex items-end gap-[0.4375rem]">
                <Image className={` ${hover && index === i ? 'circle !opacity-100' : ''} opacity-0 size-[3.8rem] absolute -left-[1.6rem] top-[1.75rem] `} loading='lazy' alt={d} src={'/images/homepage/hover-title.svg'} width={92} height={92} />
                <div className={' w-[0.5rem] h-[0.5rem] opacity-0 bg-secondary-40 rounded-full duration-300 ease-linear absolute xmd:bottom-[0.06rem] xmd:left-[0.04rem] bottom-[0.06rem] left-[0.04rem]'
                  + (hover && index === i ? 'opacity-100 opacity_infinity' : '')}></div>
                {/* <div className={' xmd:size-[0.22425rem] size-[0.625rem] bg-secondary-40 absolute xmd:bottom-0 xmd:left-[0.5rem] bottom-0 left-0 duration-300 ease-linear  opacity-100 ' + (hover && index === i ? "translate-x-10 !opacity-0 " : "")}></div> */}
                <div className={`${hover && index === i ? 'translate-x-[1.5rem]' : ''}  flex items-center duration-300 ease-linear  text-white pl-4 !pointer-events-none xmd:text-[1.07631rem] text-[3rem] not-italic w-max font-bold leading-[normal] xmd:tracking-[-0.02244rem] tracking-[-0.0625rem]`}>
                  <div className='size-[1rem] rounded-full  bg-white mr-[1rem]'></div>
                  {d?.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* bg - sticky  ,   2000 truong dai hoc    ,text-on-bg-sticky*/}
      <div className="relative w-full xmd:h-[42.6rem] h-[36.6rem]">

        <div className=" absolute w-full -top-[25rem] h-[88rem]">
          <div className=' z-[10] w-full sticky top-[-5rem]'>
            <Image loading='lazy' alt="ảnh nền xanh nước biển , phần sticky" src={'/images/homepage/bg-quatrinh2.png'} width={1600} height={720}
              className="w-full z-[10] h-[44.4375rem]  " />
            <div className=" absolute  z-50 top-[19rem] left-[5rem] inline-flex flex-col items-start space-y-[1.5]">
              <div className="text-primary-5 text-[0.98206rem] not-italic font-bold leading-[150%] tracking-[-0.00981rem] uppercase">
                {thanh_tuu_dat_duoc?.title1}
              </div>
              <div className="flex flex-col items-start space-y-[2.94rem]">
                <div className="w-[38.625rem] text-primary-5 text-[3rem] 
                not-italic font-bold leading-[1.5] tracking-[-0.03125rem]">
                  <div dangerouslySetInnerHTML={{ __html: thanh_tuu_dat_duoc?.title2 }} />

                </div>
                <button className="flex  justify-center items-center space-x-[0.75rem] border border-white px-[1.875rem] 
                py-[0.9375rem] rounded-lg border-solid
                text-white  text-center text-sm not-italic font-bold leading-[120%]
                ">
                  <div className="w-max">
                    Xem chi tiết
                  </div>
                  <Image loading='lazy' alt="ảnh icon button" src={'/images/homepage/icon_button_quatrinh.png'} width={400} height={400} className="w-[1.01856rem] h-[1.07844rem] shrink-0" />
                </button>
              </div>
            </div>
          </div>

        </div>
        <Image loading='lazy' alt="ảnh nền xanh mờ web" src={'/images/homepage/bg-quatrinh3.jpeg'} width={1600} height={920}
          className=" w-[193.875rem] h-[70.5rem] shrink-0" />
        <Image loading='lazy' alt="ảnh nền xanh mờ web" src={'/images/homepage/union-blue.png'} width={1600} height={920}
          className="z-[11] w-[20.95513rem] h-[31.39263rem] shrink-0 hidden absolute -top-[14rem]" />
        <div className=' flex z-[12] space-x-[1.7rem] items-start absolute -top-[13.5rem] right-[15rem]  '>
          <div className="flex flex-col space-y-[2.19rem]">
            {thanh_tuu_dat_duoc?.sau_o_thanh_tuu?.slice(0, 3).map((d, i) => (
              <Section num={d?.num} text={d?.text} active={i} />
            ))}
          </div>
          <div className=" flex flex-col space-y-[2.19rem] mt-[5rem]">
            {thanh_tuu_dat_duoc?.sau_o_thanh_tuu?.slice(-3).map((d, i) => (
              <Section num={d?.num} text={d?.text} active={i + 3} />
            ))}
          </div>
        </div>



      </div>
    </div >
  )
}


export default QuaTrinhPhatTrien
