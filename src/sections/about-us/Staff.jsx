import Title from '@/components/Title'
import React from 'react'
import Image from 'next/image'
const Staff = ({ t }) => {
  console.log('tttt', t);
  return (
    <div className='w-[77rem] flex items-start space-x-[7.56rem]'>
      <div className="">
        <Title title={t.staff} />
        <div className="mt-[4.11rem] flex items-center space-x-[2rem]">
          <div className="inline-flex items-center h-[3.21619rem] shrink-0 space-x-[0.5rem]">
            <svg className='size-[2.82929rem]' xmlns="http://www.w3.org/2000/svg" width="43" height="41" viewBox="0 0 43 41" fill="none">
              <path d="M21.5537 0.179688L26.6173 15.7639H43.0036L29.7468 25.3955L34.8104 40.9797L21.5537 31.3481L8.29697 40.9797L13.3606 25.3955L0.103857 15.7639H16.4901L21.5537 0.179688Z" fill="#DC1204" />
            </svg>
            <div className="flex flex-col items-start w-[12.3125rem]">
              <div className="text-primary-50 text-[1.75rem] font-extrabold leading-[1.3]">
                35 nhân viên
              </div>
              <div className="text-greyscaletext-60 text-[0.875rem] font-medium leading-[1.4] uppercase">
                làm việc toàn thời gian
              </div>
            </div>
          </div>
          <div className="inline-flex items-center h-[3.21619rem] shrink-0 space-x-[0.5rem]">
            <svg className='size-[2.82929rem]' xmlns="http://www.w3.org/2000/svg" width="43" height="41" viewBox="0 0 43 41" fill="none">
              <path d="M21.5537 0.179688L26.6173 15.7639H43.0036L29.7468 25.3955L34.8104 40.9797L21.5537 31.3481L8.29697 40.9797L13.3606 25.3955L0.103857 15.7639H16.4901L21.5537 0.179688Z" fill="#DC1204" />
            </svg>
            <div className="flex flex-col items-start w-[12.3125rem]">
              <div className="text-primary-50 text-[1.75rem] font-extrabold leading-[1.3]">
                15 nhân viên
              </div>
              <div className="text-greyscaletext-60 text-[0.875rem] font-medium leading-[1.4] uppercase">
                15 nhân viên
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[2.9rem] flex flex-col items-start w-[34.0625rem] space-y-[1.5rem]">
          <div className="w-[33.8125rem] text-primary-50 sub20 font-semibold">
            Các nhân viên đều yêu nghề, nhiều kinh nghiệm, sẵn sàng hỗ trợ học sinh, được đào tạo bài bản và đáp ứng các tiêu chuẩn nghiêm ngặt về chuyên môn, đạo đức nghề nghiệp, văn hóa làm việc của công ty Đức Anh.
          </div>
          <div className="self-stretch text-greyscaletext-50 body16 font-medium">
            100% nhân viên công ty Đức Anh có trình độ từ Cử nhân trở lên. Kèm theo các chứng chỉ nghiệp vụ theo yêu cầu của các cơ quan quản lý Việt Nam và các đối tác nước ngoài như: Bộ Giáo dục và Đào tạo Việt Nam, Hội đồng Anh, AusTrade, Education New Zealand , các trường đại học…
          </div>
        </div>
      </div>
      <Image priority alt="ảnh những nhân viên của công ty du học đức anh " src={'/images/about_us/love-staff.jpg'}
        width={570} height={510} className="w-[34.875rem] h-[31.4375rem]" />
    </div>
  )
}

export default Staff
