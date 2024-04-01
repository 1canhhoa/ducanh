import React from 'react'
import Title from '@/components/Title'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
const Banner = ({ t }) => {
  return (
    <div className=' flex flex-col items-start space-y-[2.5rem] px-[11.56rem]'>
      <Title title={t.legal} />
      <div className=" flex flex-col justify-end space-y-[2.875rem]">
        <Image priority className="min-w-full h-full relative" alt='ảnh banner về công ty du học đức anh' src="/images/about_us/banner_3.jpg" width={1250} height={500} />
        <div className='flex justify-center items-center absolute top-[71%] left-[55%] space-x-[7.31rem]'>
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
        <div className=" flex items-start space-x-[2.6875rem]">
          <div className=" pt-[2.38rem] pl-[2.25rem] w-full h-[16.9375rem] rounded-[1.25rem] border border-[rgba(52,104,205,0.40)]">
            <div className="inline-flex flex-col items-start space-y-[1.5rem]">
              <div className="flex flex-col items-start space-y-[1rem]">
                <div className="text-primary-30 font-feature-settings text-[0.875rem] font-semibold leading-[1.6] uppercase">
                  Giám đốc công ty
                </div>
                <div className="flex flex-col items-start space-y-[0.25rem]">
                  <div className="sub24 text-primary-60 font-bold">
                    LÙ THỊ HỒNG NHÂM
                  </div>
                  <div className="body16 font-semibold text-primary-60">
                    Thạc sỹ Ngôn ngữ học (ĐHQG – Hà Nội) <br />
                    Thạc sỹ Quản lý Giáo dục (ĐH NSW – Sydney)
                  </div>
                </div>
              </div>
              <Button className="body14 border-none normal-case font-semibold h-[2.625rem] text-white py-[0.75rem] px-[1rem] bg-primary-30">
                Xem giới thiệu
              </Button>
            </div>
          </div>
          <div className=" pt-[2.38rem] pl-[2.25rem] w-full h-[16.9375rem] rounded-[1.25rem] border border-[rgba(52,104,205,0.40)]">
            <div className="flex flex-col items-start space-y-[1.25rem]">
              <div className="">
                <div className="text-[0.875rem] font-semibold uppercase text-primary-30 leading-[1.6]">
                  website
                </div>
                <div className="body16 font-semibold text-primary-60">
                  Thạc sỹ Ngôn ngữ học (ĐHQG – Hà Nội) <br />
                  Thạc sỹ Quản lý Giáo dục (ĐH NSW – Sydney)
                </div>

              </div>
              <div className="">
                <div className="text-[0.875rem] font-semibold uppercase text-primary-30 leading-[1.6]">
                  Giấy phép kinh doanh số
                </div>
                <div className="body16 font-semibold text-primary-60">
                  0101054876
                </div>
              </div>
              <div className="">
                <div className="text-[0.875rem] font-semibold uppercase text-primary-30 leading-[1.6]">
                  Giấy phép Bộ Giáo dục & Đào tạo Việt Nam số
                </div>
                <div className="body16 font-semibold text-primary-60">
                  2014/ĐH
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
