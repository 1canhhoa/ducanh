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
    <div className='tonchi-business flex w-min flex-col items-start'>
      <div className='mb-[3.31rem]'><Title title={t.credo} /></div>
      <div className='mb-[2.44rem] w-[33.375rem] font-semibold text-primary-50 sub24'>
        Tôn chỉ việc làm của công ty được thể hiện ngay trong chính tên của công ty – Đức Anh:
      </div>
      <div className="mb-[5.13rem] flex items-start space-x-[1.5rem]">
        <div className='w-[19rem] relative h-[11.6875rem] shrink-0 rounded-[1.25rem] border bg-white border-[rgba(52,104,205,0.40)]'>
          <div className='absolute top-[1.69rem] left-[2.25rem] flex flex-col items-start space-y-[0.62rem]'>
            <div className='text_linear_l6'>
              Đức
            </div>
            <div className="text-primary-50 font-feature-settings body16 font-semibold">
              hàm ý đạo đức,<br />
              có đức
            </div>
          </div>
        </div>
        <div className='w-[19rem] relative h-[11.6875rem] shrink-0 rounded-[1.25rem] border bg-white border-[rgba(52,104,205,0.40)]'>
          <div className='absolute top-[1.63rem] left-[2.31rem] flex flex-col items-start space-y-[0.62rem]'>
            <div className='text_linear_l6'>
              Anh
            </div>
            <div className="text-primary-50 font-feature-settings body16 font-semibold">
              hàm ý sự anh minh,<br />
              trong sáng
            </div>
          </div>
        </div>
        <div className='w-[35.8125rem] relative h-[11.6875rem] shrink-0 rounded-[1.25rem] border bg-white border-[rgba(52,104,205,0.40)]'>
          <div className='absolute top-[1.63rem] left-[2.31rem] flex flex-col items-start space-y-[0.62rem]'>
            <div className='text_linear_l2'>
              Đức Anh
            </div>
            <div className="text-primary-50 font-feature-settings body16 font-semibold">
              Thể hiện ý nguyện – định hướng làm việc chuyên nghiệp –<br />
              minh bạch – hiệu quả – có đạo đức & hữu ích cho cộng đồng.
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[3.2rem] sub20 w-[76.6875rem] font-semibold text-greyscaletext-60">
        Tôn chỉ, tinh thần làm việc trên đây được quán triệt trong toàn công ty ở mọi nơi, mọi lúc và được xây dựng thành văn hóa truyền thống của công ty ngay từ những ngày đầu thành lập, được cụ thể hóa trong những việc làm hằng ngày:
      </div>
      <div className='mb-[4.2rem]  flex items-start space-x-[3.44rem]'>
        <div className="flex flex-1 flex-col items-start space-y-[2rem]">
          <Section1 title={'Tôn trọng và tuân thủ'} content={'Tôn trọng và tuân theo pháp luật Việt Nam và nước sinh viên đến du học.'} />
          <Section1 title={'Chuyên nghiệp'} content={'Chuyên nghiệp: đảm bảo kiến thức – kỹ năng chuyên môn tốt nhất trong công việc.'} />
          <Section1 title={'Hiệu quả'} content={'Hiệu quả: hỗ trợ khách hàng tốt nhất để đạt nguyện vọng du học, rèn luyện, thi cử.'} />
          <Section1 title={'Đóng góp'} content={'Hữu ích cho cộng đồng: nỗ lực tốt góp phần xây dựng và phát triển nguồn nhân lực chất lượng cao cho Việt Nam và quốc tế.'} />
        </div>
        <div className="flex flex-1 flex-col items-start space-y-[2rem]">
          <Section1 title={'Tôn trọng quyền lợi'} content={'Tôn trọng quyền lợi và nguyện vọng của khách hàng, đối tác.'} />
          <Section1 title={'Minh bạch'} content={'Minh bạch về tài chính & công việc: chi phí được thông báo đầy đủ, các công việc được trao đổi trước – rõ ràng.'} />
          <Section1 title={'Đạo đức'} content={'Có đạo đức: có trách nhiệm tốt nhất, cao nhất với từng khách hàng, luôn thân thiện & chu đáo, không vì quyền lợi công ty mà xem nhẹ quyền lợi khách hàng, tuyệt đối không đem con bỏ chợ, tuyệt đối không tiếp tay cho các hiện tượng tiêu cực…'} />
        </div>
      </div>
      <div className="w-full h-[12.625rem] px-[2.94rem] py-[5.5rem] flex justify-center items-center bg-lll shrink-0 rounded-[1rem]">
        <div className="sub24 text-primary-50 font-bold">
          Tôn chỉ việc làm đúng đắn kèm theo sự thực thi nghiêm túc đã đem lại cho Đức Anh sự tôn trọng của các đối tác và khách hàng. Vì vậy Đức Anh đã phát triển bền vững và đạt thành tích cao nhờ vào sự tin cậy, ủng hộ của các đối tác và các khách hàng là phụ huynh, học sinh.
        </div>
      </div>
    </div>
  )
}

export default TonChi
