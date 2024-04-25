
import Image from 'next/image'
const BannerHome = ({ dataBanner }) => {
  return (
    <div className=' flex flex-col items-center justify-start pb-[2.23rem]'>
      {/* IMAGE AND MINI_MENU MOBI*/}
      <div className="flex flex-col items-center space-y-[0.75rem]">
        <Image priority alt='ảnh banner mobile' src='/images/homepage/banner-mobi.png'
          className='w-[23.4375rem] shrink-0' width={380} height={195} />
        <div className="menu_mini flex w-[21.9375rem] justify-center items-end space-x-[1rem] shrink-0 shadow-[2px_4px_32px_0px_rgba(37,168,224,0.04),0px_0px_36px_0px_rgba(0,106,218,0.06)] pt-[0.375rem] pb-[0.75rem] px-0 rounded-[0.75rem]">
          {dataBanner?.menu_mini?.map((d, i) => (
            <div key={i} className="pt-[0.5rem] flex w-[4rem] space-y-[0.5rem] flex-col items-center shrink-0">
              <Image priority alt={` icon ${d.title} `} src={d.image} width={20} height={14} className=" size-[1.25rem] shrink-0" />
              <div className="text-[0.625rem] font-semibold text_gradient bg-gradient-to-r bg-clip-text
              from-[#082072] from-[0%] to-[#2B46A8] to-[100%]
              ">{d.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-[2.5rem] flex flex-col items-start '>
        <div className="w-[19.1875rem] text-primary-60 text-base not-italic font-bold leading-[130%] uppercase">
          bạn muốn du học ?
        </div>

      <ul className=' mt-[1rem] grid grid-cols-2 gap-x-[0.5rem] gap-y-[0.475rem]'>
        {dataBanner?.sidebar?.map((d, i) => (
          <li className='w-[10.6875rem] flex justify-start bg-white  h-[2.375rem] items-center shadow-[0px_3px_24px_0px_rgba(0,132,255,0.04),0px_0px_32px_0px_rgba(0,119,229,0.04)] p-2 rounded-lg'>
            <p className='button2 font-semibold text-primary-70'>{d?.title}</p>
          </li>
        ))}
      </ul>
        </div>
    </div >
  )
}

export default BannerHome
