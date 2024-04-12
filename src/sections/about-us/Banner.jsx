import React from 'react'
import Title from '@/components/Title'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
const Banner = ({ t }) => {
  return (
    <section className=' flex flex-col items-start xmd:space-y-[0.75rem] space-y-[2.5rem]'>
      <Title title={t.legal} />
      <div className=" flex flex-col justify-end space-y-[2.875rem] xmd:space-y-[0.75rem]">
        <div className="relative">
          <Image priority className=" xmd:hidden md:w-[77rem]" alt='ảnh banner về công ty du học đức anh' src="/images/about_us/banner_3.jpg" width={1250} height={500} />
          <Image priority className="md:hidden" alt='ảnh banner về công ty du học đức anh mobile ' src="/images/about_us/banner_mobi.jpg" width={360} height={400} />
          <div className="xmd:inline-flex xmd:flex-col xmd:items-start xmd:space-y-[1.125rem] xmd:w-max w-full  absolute xmd:bottom-[1.5rem] xmd:-translate-x-1/2 xmd:left-[47%]  md:top-[75%] right-[-9rem]">
            <div className="w-[17.1875rem] md:hidden text-white text-[1.25rem]  font-bold leading-[150%]">
              Công ty TNHH Tư vấn du học &dịch thuật Đức Anh
            </div>
            <div className='flex justify-center items-center  xmd:space-x-[2.94rem] space-x-[7.31rem]'>
              <div className="inline-flex flex-col items-start space-y-[0.25rem]">
                <div className='text-[rgba(255,255,255,0.70)] font-feature-settings text-[0.875rem] font-bold leading-[1.6] uppercase '>
                  Tên Tiếng Anh
                </div>
                <div className="text-white body16 font-bold ">
                  Duc Anh EduConnect
                </div>
              </div>
              <div className="inline-flex flex-col items-start space-y-[0.25rem]">
            <div className='text-[rgba(255,255,255,0.70)] font-feature-settings text-[0.875rem] font-bold leading-[1.6] uppercase '>
              THÀNH LẬP
            </div>
            <div className="text-white body16 font-bold ">
                Năm 2000
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className=" flex items-start xmd:flex-col xmd:space-y-[0.75rem] md:space-x-[2.6875rem]">
          <div className=" xmd:pb-[1.25rem] pt-[2.38rem] xmd:pt-[1.25rem] xmd:pl-[1rem] pl-[2.25rem] w-full xmd:h-full h-[16.9375rem] rounded-[1.25rem] xmd:rounded-[0.75rem] border border-[rgba(52,104,205,0.40)]">
            <div className="inline-flex flex-col items-start xmd:space-y-[1.75rem] space-y-[1.5rem]">
              <div className="flex flex-col items-start xmd:space-y-[0.38rem] space-y-[1rem]">
                <div className=" xmd:body12 xmd:font-bold text-primary-30 font-feature-settings text-[0.875rem] font-semibold leading-[1.6] uppercase">
                  Giám đốc công ty
                </div>
                <div className="flex flex-col items-start xmd:space-y-[0.6rem] space-y-[0.25rem]">
                  <div className="sub24 xmd:body16 text-primary-60 font-bold">
                    LÙ THỊ HỒNG NHÂM
                  </div>
                  <div className="body16 xmd:body14 xmd:font-bold font-semibold text-primary-60">
                    Thạc sỹ Ngôn ngữ học (ĐHQG – Hà Nội) <br />
                    Thạc sỹ Quản lý Giáo dục (ĐH NSW – Sydney)
                  </div>
                </div>
              </div>
              <Button className="body14 xmd:body12 border-none normal-case font-semibold h-[2.625rem] text-white py-[0.75rem] px-[1rem] bg-primary-30">
                Xem giới thiệu
              </Button>
            </div>
          </div>
          <div className=" xmd:pb-[2rem] pt-[2.38rem] xmd:pt-[1.25rem] xmd:pl-[1rem] pl-[2.25rem] w-full  xmd:h-full h-[16.9375rem] rounded-[1.25rem] border border-[rgba(52,104,205,0.40)]">
            <div className="flex flex-col items-start xmd:space-y-[1rem] space-y-[1.25rem]">
              <div className="flex items-start flex-col gap-[0.25rem]">
                <div className=" xmd:body12 xmd:font-bold text-[0.875rem] font-semibold uppercase text-primary-30 leading-[1.6]">
                  website
                </div>
                <div className="body16 xmd:body14 xmd:font-bold font-semibold text-primary-60">
                  www.ducanhduhoc.vn : <br />
                  www.pteatest.ducanh.edu.vn
                </div>

              </div>
              <div className="flex items-start flex-col gap-[0.25rem]">
                <div className="text-[0.875rem] xmd:body12 xmd:font-bold font-semibold uppercase text-primary-30 leading-[1.6]">
                  Giấy phép kinh doanh số
                </div>
                <div className="body16 xmd:body14 xmd:font-bold font-semibold text-primary-60">
                  0101054876
                </div>
              </div>
              <div className="flex items-start flex-col gap-[0.25rem]">
                <div className="text-[0.875rem] xmd:body12 xmd:font-bold font-semibold uppercase text-primary-30 leading-[1.6]">
                  Giấy phép Bộ Giáo dục & Đào tạo Việt Nam số
                </div>
                <div className="body16 xmd:body14 xmd:font-bold font-semibold text-primary-60">
                  2014/ĐH
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
