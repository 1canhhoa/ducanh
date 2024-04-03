import Image from 'next/image'
import SectionTabs from './SectionTabs'
import SectionWrapper from './SectionWrapper'

const JobSettled = ({lang, id}) => {
  return (
    <SectionWrapper
      h2Text={lang.h2_job_settled}
      id={id}
      mobileMargin={false}
    >
      <SectionTabs className='mt-[1.25rem] xmd:mt-[1.06rem] mb-[2.25rem] xmd:mb-[0.75rem]' />
      <h3 className='hidden md:block text-[1.5rem] font-bold leading-[130%] text-primary-50'>
        Làm thêm
      </h3>
      <h4 className='text-[1rem] mx-[0.75rem] font-bold leading-[150%] text-primary-50 mt-[0.5rem]'>
        a. Ai được làm thêm?
      </h4>
      <p className='content text-greyscaletext-60 my-[0.5rem] last:mb-0 mx-[0.75rem] '>
        Du học sinh Anh Quốc với visa Tier 4 (General) được phép làm thêm 20h/
        tuần; visa Tier 4 (Child) từ tròn 16 tuổi trở lên có thể làm thêm tối đa
        10 tiếng/tuần. Sinh viên dưới 16 tuổi không được phép đi làm thêm.
      </p>
      <p className='content text-greyscaletext-60 my-[0.5rem] last:mb-0 mx-[0.75rem] '>
        Nếu bạn học tại một trường cao đẳng tư thục, trong hầu hết các trường
        hợp bạn sẽ không được phép đi làm thêm, ngoại trừ trường hợp làm việc
        theo chương trình thực tập (work placement) như là một phần trong chương
        trình học của bạn. Tuy nhiên, nếu trường cao đẳng tư thục này là một đơn
        vị được phép cấp bằng (recognised body- xem danh sách bên dưới), bạn sẽ
        được phép đi làm thêm.
      </p>
      <Image
        src={'/images/hoc-bong-anh-quoc/demo.jpg'}
        width={7000}
        height={3500}
        className='xmd:w-[calc(100%-0.75rem*2)] w-full xmd:h-[13.8rem] h-[35.4rem] xmd:rounded-xl object-cover xmd:my-[1.31rem] my-[1rem] mx-[0.75rem]'
      />
      <h4 className='text-[1rem] font-bold leading-[150%] text-primary-50 mt-[0.5rem] mx-[0.75rem] '>
        b. Làm thế nào để được làm thêm hợp pháp
      </h4>
      <p className='content text-greyscaletext-60 my-[0.5rem] last:mb-0 mx-[0.75rem] '>
        Để làm việc tại nước này, tất cả mọi người phải đăng kí số thẻ bảo hiểm,
        phục vụ cho các mục đích về thuế (tương tự mã sỗ thuế cá nhân). Sẽ là
        bất hợp pháp nếu bạn làm việc mà không có thẻ bảo hiểm. Số thẻ bảo hiểm
        cũng được dùng như thẻ đăng kí với các văn phòng cho du học sinh tại Anh
        Quốc như DWP (Department of Work and Pensions) hay HMRC (Her Majesty\’s
        Revenue and Customs).
      </p>
      <p className='content text-greyscaletext-60 my-[0.5rem] last:mb-0 mx-[0.75rem] '>
        Để có được số NI, bạn có thể gọi đến Jobcentre Plus (0845 600 0643). Giờ
        làm việc từ 8.00 giờ sáng đến 6.00 giờ tối từ thứ hai đến thứ sáu.
        Jobcentre Plus sẽ xắp xếp một buổi phỏng vấn EOI (Evidence of Identity)
        cho bạn hoặc gửi cho bạn một bản đăng kí qua bưu điện. Họ sẽ xác nhận
        ngày, giờ và địa điểm của buổi phỏng vấn. Họ cũng sẽ cho bạn biết bạn
        cần những thông tin và tài liệu gì trong bản đăng kí.
      </p>
      <p className='content text-greyscaletext-60 my-[0.5rem] last:mb-0 mx-[0.75rem] '>
        Buổi phỏng vấn thường là môt- một (bạn và người phỏng vấn) trừ những
        trường hợp ngoại lệ (ví dụ, bạn cần một người phiên dịch). Bạn sẽ được
        hỏi bạn là ai, tại sao bạn cần thẻ bảo hiểm quốc gia, quá trình học tập
        và hoàn cảnh hiện tại của bạn. Trong quá trình phỏng vấn, bản đăng kí
        thẻ bảo hiểm quốc gia sẽ được hoàn tất và bạn sẽ kí tên lên bản đăng kí
        đó.
      </p>
      <p className='content text-greyscaletext-60 my-[0.5rem] last:mb-0 mx-[0.75rem] '>
        Nếu bạn được yêu cầu cung cấp thêm thông tin, bạn cần phải hoàn tất
        trong thời gian đã được đinh sẵn. Jobcentre Plus sau đó sẽ báo cho bạn
        biết bản đăng kí của bạn có được chấp nhận hay không và gửi cho bạn số
        thẻ bảo hiểm.
      </p>
      <p className='content text-greyscaletext-60 my-[0.5rem] last:mb-0 mx-[0.75rem] '>
        Bạn nên báo lại nơi làm việc số thẻ bảo hiểm của bạn ngay khi bạn có.
        Thông thường khi bạn có số thẻ bảo biểm, bạn cũng sẽ được cung cấp một
        thẻ bảo hiểm kèm theo. Bạn sẽ có thẻ sau khi đăng kí khoảng 12 tuần.
      </p>
      <p className='content text-greyscaletext-60 my-[0.5rem] last:mb-0 mx-[0.75rem] '>
        Để có thêm thông tin đăng kí thẻ bảo hiểm quốc gia tại Anh Quốc bạn có
        thể truy cập vào Gov.uk.
      </p>
    </SectionWrapper>
  )
}

export default JobSettled
