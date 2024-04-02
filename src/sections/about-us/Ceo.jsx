import Title from '@/components/Title'
import React from 'react'
import Image from 'next/image'
const Section = ({ title, subTitle }) => {
  return <div className="flex justify-center items-start pt-[1.125rem] pb-[1.10631rem] pr-[0.87513rem] pl-[0.8125rem] rounded-[1rem] space-x-[0.25rem] bg-linear-l9  ">
    <div className="flex flex-col justify-center items-start space-y-[0.0625rem]">
      <div className="body14 text-primary-5 font-feature-settings text-center">
        {subTitle}
      </div>
      <div className='body16 w-max text-white font-bold text-center'>
        {title}
      </div>
    </div>
    <Image priority alt="ảnh ngôi sao " src={'/images/about_us/star.png'} width={50} height={50} className="w-[3.48738rem] h-[3.01869rem]" />
  </div>
}
const Section1 = ({ title }) => {
  return <div className="flex items-center w-[10.775rem] space-x-[0.5rem]">
    <svg className='size-[0.75rem]' xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
      <rect y="6.5" width="6" height="6" fill="#2B46A8" />
      <rect x="6" y="0.5" width="6" height="6" fill="#ED4343" />
    </svg>
    <div className="text-[1rem] font-bold leading-[1.2] text-secondary-60 tracking-[0.01rem]">
      {title}
    </div>
  </div>
}
const Section2 = ({ title, subTitle }) => {
  return <div className="flex flex-col items-start self-stretch">
    <div className="text-primary-40 font-feature-settings text-[0.875rem] font-bold leading-[1.25rem] capitalize">
      {title}
    </div>
    <div className="text-greyscaletext-40 font-feature-settings text-[0.875rem] font-normal leading-[1.375rem]">
      {subTitle}
    </div>
  </div>
}
const Ceo = ({ t }) => {
  return (
    <div className='flex flex-col items-start space-y-[2.5rem] w-[77rem]'>
      <Title title={t.ceo} />
      <div className="flex flex-col items-start space-y-[1.75rem]">

        <div className='flex items-start flex-col w-full  p-[1.25rem] rounded-[1.25rem] bg-white border border-[rgba(97,150,246,0.40)]  '>
          <div className="flex items-start self-stretch space-x-[1.25rem]">
            <Section title={'Lù Thị Hồng Nhâm'} subTitle={'Giám đốc - CEO'} />
            <div className="w-[0.0625rem] h-[34rem] bg-[rgba(97,150,246,0.20)]"></div>
            <div className="flex flex-col items-start space-y-[1rem] grow-[1] shrink-0 basis-0">
              <div className="flex items-start self-stretch space-x-[1.5rem]">
                <Section1 title={'Kinh nghiệm:'} />
                <div className="flex flex-col items-start self-stretch space-y-[0.375rem] grow-[1] shrink-0 basis-0">
                  <Section2 title={'16 năm giảng dạy'} subTitle={'Môn Ngữ Văn, bậc trung học phổ thông.'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'01 năm dạy bán thời'} subTitle={'Đại học Tổng hợp Hà Nội.'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'Hơn 23 năm kinh nghiệm'} subTitle={'Điều hành công ty tư vấn du học, đào tạo ngoại ngữ, khảo thí tiếng Anh PTE.'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'Kinh nghiệm học tập dài hạn'} subTitle={'Tại Australia.'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'Đào tạo ngắn hạn và  khảo sát '} subTitle={'Tại các nước: Anh, Úc, Mỹ, New Zealand, Canada, Pháp, Thụy sỹ, Singapore, Malaysia…'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'kinh nghiệm về hệ thống giáo dục, luật giáo dục và luật visa- di trú'} subTitle={'Trên 20 nước trên thế giới.'} />
                </div>
              </div>
              <div className="w-[57.6875rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
              <div className="flex items-start self-stretch space-x-[1.5rem]">
                <Section1 title={'Bằng cấp cao nhất:'} />
                <div className="flex flex-col items-start self-stretch space-y-[0.375rem] grow-[1] shrink-0 basis-0">
                  <Section2 title={'Thạc sỹ Quản lý Giáo dục'} subTitle={'Đại học New South Wales, Úc, 1998 (Học bổng AusAid, chính phủ Úc)'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'Cử nhân Anh văn'} subTitle={'Đại học Quốc gia, Hà Nội, 1994'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'Cử nhân Văn khoa'} subTitle={'Đại học Sư phạm 1, Hà Nội, 1987'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'Các chứng chỉ khác'} subTitle={'Chuyên viên tư vấn du học quốc tế từ 12 quốc gia từ năm 2000 đến nay'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-start flex-col w-full  p-[1.25rem] rounded-[1.25rem] bg-white border border-[rgba(97,150,246,0.40)]  '>
          <div className="flex items-start self-stretch space-x-[1.25rem]">
            <Section title={'Trần Thị Lan Hương'} subTitle={'Phó giám đốc'} />
            <div className="w-[0.0625rem] h-[27.5rem] bg-[rgba(97,150,246,0.20)]"></div>
            <div className="flex flex-col items-start space-y-[1rem] grow-[1] shrink-0 basis-0">
              <div className="flex items-start self-stretch space-x-[1.5rem]">
                <Section1 title={'Kinh nghiệm:'} />
                <div className="flex flex-col items-start self-stretch space-y-[0.375rem] grow-[1] shrink-0 basis-0">
                  <Section2 title={'Tham gia và điều phối các dự án '} subTitle={'Việt Nam và Quốc tế của Bộ LĐ&TBXH'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'Giám đốc Marketing New Zealand Milk'} subTitle={'Tại New Zealand Milk.'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'Hơn 22 năm kinh nghiệm'} subTitle={'Điều hành và tư vấn du học'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'Hơn 15 năm kinh nghiệm'} subTitle={'Điều hành trường quốc tế'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'Đào tạo ngắn hạn và  khảo sát '} subTitle={'Tại các nước: Anh, Úc, Mỹ, New Zealand, Canada, Pháp, Thụy sỹ, Singapore, Malaysia…'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'kinh nghiệm về hệ thống giáo dục, luật giáo dục và luật visa- di trú'} subTitle={'Trên 20 nước trên thế giới.'} />
                </div>
              </div>
              <div className="w-[57.6875rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
              <div className="flex items-start self-stretch space-x-[1.5rem]">
                <Section1 title={'Bằng cấp cao nhất:'} />
                <div className="flex flex-col items-start self-stretch space-y-[0.375rem] grow-[1] shrink-0 basis-0">
                  <Section2 title={'Cao học về Nhân khẩu học'} subTitle={'Cairo, Ai Cập, 1989, học bổng Cộng đồng Châu Âu'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'Cử nhân kinh tế'} subTitle={'Đại học Kinh tế Kế hoạch, 1982.'} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-start flex-col w-full  p-[1.25rem] rounded-[1.25rem] bg-white border border-[rgba(97,150,246,0.40)]  '>
          <div className="flex items-start self-stretch space-x-[1.25rem]">
            <Section title={'Trần Thị Lan Hương'} subTitle={'Phó giám đốc'} />
            <div className="w-[0.0625rem] h-[35.625rem] bg-[rgba(97,150,246,0.20)]"></div>
            <div className="flex flex-col items-start space-y-[1rem] grow-[1] shrink-0 basis-0">
              <div className="flex items-start self-stretch space-x-[1.5rem]">
                <Section1 title={'Kinh nghiệm:'} />
                <div className="flex flex-col items-start self-stretch space-y-[0.375rem] grow-[1] shrink-0 basis-0">
                  <Section2 title={'02 năm kinh nghiệm tư vấn'} subTitle={'Các khóa đào tạo ngắn hạn,chương trình đào tạo ACCA.'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'01 năm kinh nghiệm quản lý'} subTitle={'Văn phòng tuyển sinh, chương trình đào tạo ACCA'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'09 năm kinh nghiệm quản lý'} subTitle={'Trung tâm khảo thí Pearson (PTE Academic) tại Việt Nam'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'09 năm kinh nghiệm marketing'} subTitle={'Các chương trình tư vấn du học & đào tạo ngoại ngữ.'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'06 năm vị trí công tác '} subTitle={'Phó Giám Đốc công ty Đức Anh.'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'Kinh nghiệm về đào tạo ngắn hạn và tham quan/ khảo sát '} subTitle={'Tại các nước: Anh, Úc, Singapore, Malaysia, Thái Lan, Indonesia…'} />
                </div>
              </div>
              <div className="w-[57.6875rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
              <div className="flex items-start self-stretch space-x-[1.5rem]">
                <Section1 title={'Bằng cấp cao nhất:'} />
                <div className="flex flex-col items-start self-stretch space-y-[0.375rem] grow-[1] shrink-0 basis-0">
                  <Section2 title={'Cử nhân Anh Văn'} subTitle={'Đại học Thương Mại Hà Nội, 2011'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'Chứng chỉ coi thi '} subTitle={'Của Pearson VUE, từ 2014 – nay.'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'Chứng chỉ Chuyên viên tư vấn'} subTitle={'Úc (QEAC – số N057), 2017.'} />
                  <div className="w-[45.8125rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]"></div>
                  <Section2 title={'Chứng chỉ Chuyên viên tư vấn'} subTitle={'Du học Education New Zealand, 2015.'} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Ceo
