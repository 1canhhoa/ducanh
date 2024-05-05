<<<<<<< HEAD
import Title from '@/components/Title'
import React from 'react'

const Section1 = ({ title, content }) => {
  return <div className="flex flex-col items-start space-y-[0.25rem] self-stretch">
    <div className="flex items-center space-x-[0.5rem] pb-[0.75rem] self-stretch border-b border-t-greyscaletext-10">
      <svg className='size-[0.75rem]' xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
        <rect y="6.5" width="6" height="6" fill="#2B46A8" />
        <rect x="6" y="0.5" width="6" height="6" fill="#ED4343" />
      </svg>
      <div className="text-primary-50 font-bold sub18">
        {title}
      </div>
    </div>
    <div className="to-greyscaletext-60 self-stretch text-[0.875rem] leading-[1.7]">
      {content}
    </div>
  </div>
}
const TonChi = ({ t }) => {
  return (
    <section className='tonchi-business flex w-min flex-col xmd:w-full xmd:px-[0.5rem] items-start'>
      <div className='mb-[3.31rem] xmd:mb-[1rem]'><Title title={t.credo} /></div>

      <div className='mb-[2.44rem] xmd:mb-[0.875rem] md:w-[33.375rem] xmd:text-[1.125rem] xmd:leading-[1.5] font-semibold text-primary-50 sub24'>
        Tôn chỉ việc làm của công ty được thể hiện ngay trong chính tên của công ty – Đức Anh:
      </div>

      <div className="mb-[5.13rem] xmd:mb-[2rem] w-full flex items-start xmd:flex-col xmd:space-y-[0.625rem] md:space-x-[1.5rem]">
        <div className='flex items-start w-full justify-between space-x-[0.625rem] md:space-x-[1.5rem]'>
          <div className='w-[19rem]  xmd:flex-1 xmd:h-[6.75rem] relative h-[11.6875rem] shrink-0 rounded-[1.25rem] border bg-white border-[rgba(52,104,205,0.40)]'>
            <div className='absolute xmd:top-[0.88rem] xmd:left-[1.12rem] top-[1.69rem] left-[2.25rem] flex flex-col items-start space-y-[0.62rem]'>
              <div className='text_gradient text-right xmd:text-[2.125rem] xmd:tracking-[-0.02125rem] text-[3.75rem] not-italic font-extrabold leading-[120%]  tracking-[-0.0375rem] uppercase bg-gradient-to-b from-[#2E6BC6] to-[#29A4EA] !bg-clip-text'>
                Đức
              </div>
              <div className="text-primary-50 font-feature-settings body16 xmd:text-[0.75rem] xmd:leading-[1.4] font-semibold">
                hàm ý đạo đức,<br />
                có đức
              </div>
            </div>
          </div>
          <div className='w-[19rem] flex-1 xmd:flex-1 xmd:h-[6.75rem] relative h-[11.6875rem] shrink-0 rounded-[1.25rem] border bg-white border-[rgba(52,104,205,0.40)]'>
            <div className='absolute xmd:top-[0.88rem] xmd:left-[1.12rem] top-[1.63rem] left-[2.31rem] flex flex-col items-start space-y-[0.62rem]'>
              <div className='text_gradient  text-right xmd:text-[2.125rem] xmd:tracking-[-0.02125rem]  text-[3.75rem] not-italic font-extrabold leading-[120%] tracking-[-0.0375rem] uppercase bg-gradient-to-b from-[#2E6BC6] to-[#29A4EA] !bg-clip-text'>
                Anh
              </div>
              <div className="text-primary-50 xmd:text-[0.75rem] xmd:leading-[1.4] font-feature-settings body16 font-semibold">
                hàm ý sự anh minh,<br />
                trong sáng
              </div>
            </div>
          </div>
        </div>

        <div className='w-[35.8125rem] xmd:w-full xmd:h-[8.1875rem] relative h-[11.6875rem] shrink-0 rounded-[1.25rem] border bg-white border-[rgba(52,104,205,0.40)]'>
          <div className='absolute xmd:top-[0.88rem] xmd:left-[1.12rem] top-[1.63rem] left-[2.31rem] flex flex-col items-start space-y-[0.62rem]'>
            <div className='text_gradient xmd:text-[2.125rem] xmd:tracking-[-0.02125rem]  text-right text-[3.75rem] not-italic font-extrabold leading-[120%] tracking-[-0.0375rem] uppercase bg-gradient-to-r from-[#CB2128] from-[-1.03%] via-[#CB2128] via-[36.82%] to-[#FC4D54] to-[88.7%] !bg-clip-text'>
              Đức Anh
            </div>
            <div className="text-primary-50 xmd:text-[0.75rem] xmd:leading-[1.4] font-feature-settings body16 font-semibold">
              Thể hiện ý nguyện – định hướng làm việc chuyên nghiệp –<br />
              minh bạch – hiệu quả – có đạo đức & hữu ích cho cộng đồng.
            </div>
          </div>
        </div>
      </div>

      <div className="mb-[3.2rem] xmd:mb-[1.5rem] sub20 xmd:body16 md:w-[76.6875rem] font-semibold text-greyscaletext-60">
        Tôn chỉ, tinh thần làm việc trên đây được quán triệt trong toàn công ty ở mọi nơi, mọi lúc và được xây dựng thành văn hóa truyền thống của công ty ngay từ những ngày đầu thành lập, được cụ thể hóa trong những việc làm hằng ngày:
      </div>

      <div className='mb-[4.2rem] xmd:mb-[2rem] xmd:flex-col flex items-start xmd:space-y-[1.125rem] md:space-x-[3.44rem]'>
        <div className="flex flex-1 flex-col items-start xmd:space-y-[1.125rem] space-y-[2rem]">
          <Section1 title={'Tôn trọng và tuân thủ'} content={'Tôn trọng và tuân theo pháp luật Việt Nam và nước sinh viên đến du học.'} />
          <Section1 title={'Chuyên nghiệp'} content={'Chuyên nghiệp: đảm bảo kiến thức – kỹ năng chuyên môn tốt nhất trong công việc.'} />
          <Section1 title={'Hiệu quả'} content={'Hiệu quả: hỗ trợ khách hàng tốt nhất để đạt nguyện vọng du học, rèn luyện, thi cử.'} />
          <Section1 title={'Đóng góp'} content={'Hữu ích cho cộng đồng: nỗ lực tốt góp phần xây dựng và phát triển nguồn nhân lực chất lượng cao cho Việt Nam và quốc tế.'} />
        </div>
        <div className="flex flex-1 flex-col items-start xmd:space-y-[1.125rem] space-y-[2rem]">
          <Section1 title={'Tôn trọng quyền lợi'} content={'Tôn trọng quyền lợi và nguyện vọng của khách hàng, đối tác.'} />
          <Section1 title={'Minh bạch'} content={'Minh bạch về tài chính & công việc: chi phí được thông báo đầy đủ, các công việc được trao đổi trước – rõ ràng.'} />
          <Section1 title={'Đạo đức'} content={'Có đạo đức: có trách nhiệm tốt nhất, cao nhất với từng khách hàng, luôn thân thiện & chu đáo, không vì quyền lợi công ty mà xem nhẹ quyền lợi khách hàng, tuyệt đối không đem con bỏ chợ, tuyệt đối không tiếp tay cho các hiện tượng tiêu cực…'} />
        </div>
      </div>

      <div className="w-full md:h-[12.625rem] xmd:px-[1.56rem] xmd:py-[1.35rem] px-[2.94rem] py-[5.5rem] flex justify-center items-center bg-lll shrink-0 rounded-[1rem]">
        <div className="sub24 text-[1.125rem] text-primary-50 font-bold">
          <svg className='w-[1.6125rem] h-[1.3125rem] float-left mr-2'
            xmlns="http://www.w3.org/2000/svg" width="29" height="21" viewBox="0 0 29 21" fill="none">
            <path d="M7.07874 21C5.86089 21 4.79528 20.7742 3.88189 20.3226C2.9685 19.8208 2.23272 19.1685 1.67454 18.3656C1.1671 17.5627 0.761155 16.6093 0.456693 15.5054C0.152231 14.4014 0 13.2473 0 12.043C0 9.58423 0.634296 7.27598 1.90289 5.11828C3.22222 2.96058 5.25197 1.25448 7.99213 0L8.67717 1.35484C7.25634 2.00717 5.98775 2.96058 4.87139 4.21506C3.80577 5.41936 3.17148 6.69893 2.9685 8.05377C2.66404 9.10753 2.63867 10.1362 2.89239 11.1398C4.00875 9.93548 5.50569 9.33333 7.3832 9.33333C9.10849 9.33333 10.5293 9.86021 11.6457 10.914C12.762 11.9176 13.3202 13.3226 13.3202 15.129C13.3202 16.8853 12.7367 18.3154 11.5696 19.4194C10.4024 20.4731 8.90551 21 7.07874 21ZM22.7585 21C21.5407 21 20.4751 20.7742 19.5617 20.3226C18.6483 19.8208 17.9125 19.1685 17.3543 18.3656C16.8469 17.5627 16.4409 16.6093 16.1365 15.5054C15.832 14.4014 15.6798 13.2473 15.6798 12.043C15.6798 9.58423 16.3141 7.27598 17.5827 5.11828C18.902 2.96058 20.9318 1.25448 23.6719 0L24.357 1.35484C22.9361 2.00717 21.6675 2.96058 20.5512 4.21506C19.4856 5.41936 18.8513 6.69893 18.6483 8.05377C18.3438 9.10753 18.3185 10.1362 18.5722 11.1398C19.6885 9.93548 21.1855 9.33333 23.063 9.33333C24.7883 9.33333 26.2091 9.86021 27.3255 10.914C28.4418 11.9176 29 13.3226 29 15.129C29 16.8853 28.4165 18.3154 27.2493 19.4194C26.0822 20.4731 24.5853 21 22.7585 21Z" fill="#132B7D" />
          </svg>
          Tôn chỉ việc làm đúng đắn kèm theo sự thực thi nghiêm túc đã đem lại cho Đức Anh sự tôn trọng của các đối tác và khách hàng. Vì vậy Đức Anh đã phát triển bền vững và đạt thành tích cao nhờ vào sự tin cậy, ủng hộ của các đối tác và các khách hàng là phụ huynh, học sinh.
        </div>
      </div>
    </section>
=======
"use client"
import Timestamp from "./Timestamp";
import "./style.css"
const TonChi = ({ t, dataTonchi, isMobile }) => {
  console.log({ lll: dataTonchi });
  return (
    <div className='w-full'>
      <div className='mx-auto xmd:px-[0.75rem]  md:w-[77rem]'>
        <div className='text-primary-50 text-5xl xmd:text-[2rem] font-extrabold xmd:leading-[1.3] leading-[1.2] xmd:tracking-[-0.04rem] tracking-[-0.03rem]'>
          {t?.credo}
        </div>
        {isMobile &&
          <div className="mt-[1rem] text-lg not-italic font-semibold leading-[150%]"><div dangerouslySetInnerHTML={{ __html: dataTonchi?.desc_ton_chi_mobi }} /></div>

        }
        <div className="tonchi mt-[3rem] xmd:mt-[0.88rem]">
          <div dangerouslySetInnerHTML={{ __html: dataTonchi?.desc_ton_chi }} />
        </div>
        <div className="mt-[2rem] flex flex-col xmd:space-y-[0.5rem] space-y-[1rem]">
          {dataTonchi?.lists_ton_chi?.map((d, i) => (
            <div className=" text-[color:var(--PRIMARY-50,var(--Xanh,#2B46A8))] md:flex md:items-start md:text-base not-italic font-bold leading-[160%]">
              <span className="min-w-max mr-[0.25rem]">{d?.name}</span>
              <span className="text-[color:var(--Xanh,#3F3F3F)] text-base not-italic font-normal leading-[160%]">{d?.concept}</span>
            </div>

          ))}
        </div>

        <div className="xmd:mt-[2rem] mt-[3rem] md:w-[76.875rem] md:h-[12.625rem] shrink-0 rounded-2xl bg-linear-tc flex items-center justify-center">
          <div className="xmd:w-[18.8125rem] py-[1.37rem] w-[65.875rem] text-[color:var(--PRIMARY-50,var(--Xanh,#2B46A8))] text-2xl xmd:text-[1.125rem]  not-italic font-bold leading-[150%] xmd:tracking-normal tracking-[-0.015rem]">
            <svg className="float-left mr-[0.25rem] md:hidden" xmlns="http://www.w3.org/2000/svg" width="29" height="21" viewBox="0 0 29 21" fill="none">
              <path d="M7.07874 21C5.86089 21 4.79528 20.7742 3.88189 20.3226C2.9685 19.8208 2.23272 19.1685 1.67454 18.3656C1.1671 17.5627 0.761155 16.6093 0.456693 15.5054C0.152231 14.4014 0 13.2473 0 12.043C0 9.58423 0.634296 7.27598 1.90289 5.11828C3.22222 2.96058 5.25197 1.25448 7.99213 0L8.67717 1.35484C7.25634 2.00717 5.98775 2.96058 4.87139 4.21506C3.80577 5.41936 3.17148 6.69893 2.9685 8.05377C2.66404 9.10753 2.63867 10.1362 2.89239 11.1398C4.00875 9.93548 5.50569 9.33333 7.3832 9.33333C9.10849 9.33333 10.5293 9.86021 11.6457 10.914C12.762 11.9176 13.3202 13.3226 13.3202 15.129C13.3202 16.8853 12.7367 18.3154 11.5696 19.4194C10.4024 20.4731 8.90551 21 7.07874 21ZM22.7585 21C21.5407 21 20.4751 20.7742 19.5617 20.3226C18.6483 19.8208 17.9125 19.1685 17.3543 18.3656C16.8469 17.5627 16.4409 16.6093 16.1365 15.5054C15.832 14.4014 15.6798 13.2473 15.6798 12.043C15.6798 9.58423 16.3141 7.27598 17.5827 5.11828C18.902 2.96058 20.9318 1.25448 23.6719 0L24.357 1.35484C22.9361 2.00717 21.6675 2.96058 20.5512 4.21506C19.4856 5.41936 18.8513 6.69893 18.6483 8.05377C18.3438 9.10753 18.3185 10.1362 18.5722 11.1398C19.6885 9.93548 21.1855 9.33333 23.063 9.33333C24.7883 9.33333 26.2091 9.86021 27.3255 10.914C28.4418 11.9176 29 13.3226 29 15.129C29 16.8853 28.4165 18.3154 27.2493 19.4194C26.0822 20.4731 24.5853 21 22.7585 21Z" fill="#132B7D" />
            </svg> {dataTonchi?.final_concept}
          </div>
        </div>
        <Timestamp t={t} />
      </div>
    </div>
>>>>>>> master
  )
}

export default TonChi
