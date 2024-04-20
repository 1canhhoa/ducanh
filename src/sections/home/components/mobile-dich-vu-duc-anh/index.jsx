"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Title from '@/components/Title'




const DichVuDucAnh = ({ t, isMobile, dataDichVuTaiDucAnh }) => {
  const [active, setActive] = useState(-1)
  const [currentItem, setCurrentItem] = useState(dataDichVuTaiDucAnh)
  const [accordionOpen, setAccordionOpen] = useState(false);
  useEffect(() => {
    setCurrentItem(dataDichVuTaiDucAnh[0])
  }, [])
  const handleClick = (i) => {
    if (active === i) {
      setAccordionOpen(false);
      setActive(-1);
    } else {
      setAccordionOpen(true);
      setActive(i);
    }
  };

  return (
    <div className='mt-[2rem] z-[10] h-[46em] space-y-[1.25rem]  w-full relative'>
      <div className="px-[0.75rem] flex z-[1] flex-col  md:absolute top-20 left-20 items-start space-y-[0.5rem]">
        <div className="text-greyscaletext-40 xmd:text-primary-40 text-center text-[0.875rem] not-italic font-bold leading-[normal] uppercase">
          Đồng hành với học sinh
        </div>
        <Title title={t.dich_vu_duc_anh} className={'xmd:text-[1.75rem] xmd:font-bold xmd:leading-[1.3]'} />
      </div>
      <div className='px-[0.75rem] w-full relative space-y-[0.75rem]'>
        {dataDichVuTaiDucAnh?.map((d, i) => (
          <div key={i} className='flex bg-white flex-col items-start  self-stretch border shadow-[0px_3px_24px_0px_rgba(0,132,255,0.04),0px_0px_32px_0px_rgba(0,119,229,0.04)] pl-6 pr-4 py-4 rounded-2xl border-solid border-[rgba(52,104,205,0.40)]'>
            <div onClick={() => handleClick(i)} className={' flex items-center gap-4 self-stretch '}>
              <div className='flex-[1_0_0] text-[color:var(--PRIMARY-50,var(--Xanh,#2B46A8))] text-lg not-italic font-bold leading-[160%]'>{d?.title}</div>
              <div className='flex group-hover:scale-110 ease-linear duration-100 justify-center items-center px-3'>
                <svg className={`duration-200 ease-linear ${accordionOpen && active===i ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                  <path d="M7 4.68677L4 1.68677L1 4.68677" stroke="#132B7D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
          </div>
          <div
              className={`grid overflow-hidden  transition-all duration-500 ease-in-out text-slate-600 text-sm 
          ${accordionOpen && active === i
                  ? "mt-[1rem] grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
          >
            <div className="overflow-hidden">
                Chúng tôi sẽ tư vấn chọn nước, trường, ngành học dựa trên nguyện vọng của DHS, đào tạo tiếng Anh, SAT, GMAT, GRE, tổ chức thi PTE A và đăng ký thi IELTS cho DHS nếu cần; đồng thời, hướng dẫn DHS chuẩn bị hồ sơ du học: học lực, ngoại khóa, luận, PS, video, tài chính…& trực tiếp hỗ trợ DHS hoàn thiện hồ sơ du học.
            </div>
            </div>
        </div>
        ))}

      </div>
      <div className=" h-[19rem] absolute bottom-[0rem] w-full z-[-1]">
        <div className='absolute bottom-[3.4rem] right-[0.3rem] text-white z-10 w-[13.75rem] text-center text-base not-italic font-extrabold leading-[120%]'>
          Các dịch vụ đảm bảo chuyên nghiệp, minh bạch, hiệu quả và thân thiện
        </div>
        <Image className="absolute bottom-[0rem] w-full left-0" riority alt="ảnh" src={'/images/homepage/bg-dichvu-mobi.png'} width={500} height={500} />
      </div>

    </div >
  )
}

export default DichVuDucAnh
