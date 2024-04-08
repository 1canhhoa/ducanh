import Title from '@/components/Title'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
const data = [
  {
    img: '/images/about_us/business1.jpg',
    mainTitle: '01. Tư vấn du học',
    desc: 'Phấn đấu 98- 100% du học sinh được nhận vào học trường yêu thích, được cấp visa du học, du học thành công, tìm được việc làm và có nhiều cơ hội định cư theo mong muốn,đồng thời có được trải nghiệm tốt khi sử dụng dịch vụ của công ty Đức Anh.',
    content: 'Công ty ký kết hợp đồng làm đại diện tuyển sinh với hơn 2.000 trường phổ thông, cao đẳng, đại học nghiêm túc, thứ hạng cao trên toàn cầu, để học sinh- sinh viên Việt Nam có thể đến du học. Công ty tư vấn chọn nước- trường- ngành du học và trực tiếp làm hồ sơ du học cho các học sinh, sinh viên có nhu cầu du học các bậc học phổ thông, cao đẳng, dư bị đại học, cử nhân, thạc sỹ, tiến sỹ, giao lưu văn hóa, du học hè đến 14 nước: Anh, Úc, Mỹ, New Zealand, Canada, Hà Lan, Thụy Sỹ, Pháp, Ý, Ba Lan, Nhật Bản, Hàn Quốc, Singapore, Malaysia. '
  },
  {
    img: '/images/about_us/business2.jpg',
    mainTitle: '02. Đào tạo tiếng Anh và các kỹ năng m02.',
    desc: 'Học viên học được kiến thức và chuẩn bị tốt nhất cho việc làm bài kiểm tra - thi các bài thi chuẩn hóa cho du học, làm việc, định cư.',
    content: 'Đào tạo: Công ty đào tạo các chương trình tiếng Anh học thuật, tiếng Anh chuyên ngành, luyện thi IELTS, PTE đồng thời, đào tạo kỹ năng học tập để thành công ở nước ngoài. '
  },
  {
    img: '/images/about_us/business3.jpg',
    mainTitle: '03. Khảo thí tiếng Anh PTE A, PTE UKVI, PTE Home',
    desc: 'Đảm bảo các kỳ thi tuân thủ đúng - đủ các qui đinh về tổ chức thi, coi thi & hỗ trợ tốt nhất cho thí sinh dự thi.',
    content: 'Tổ chức các kỳ thi khảo thí tiếng Anh quốc tế PTE A, PTE UKVI & PTE Home cho các mục đích du học- làm việc- định cư & các mục đích khác, theo ủy quyền của Pearson Education, Mỹ. '
  },
  {
    img: '/images/about_us/business4.jpg',
    mainTitle: '04. Tư vấn việc làm và định cư',
    desc: 'Đảm bảo các kỳ thi tuân thủ đúng - đủ các qui đinh về tổ chức thi, coi thi & hỗ trợ tốt nhất cho thí sinh dự thi.',
    content: 'Tổ chức các kỳ thi khảo thí tiếng Anh quốc tế PTE A, PTE UKVI & PTE Home cho các mục đích du học- làm việc- định cư & các mục đích khác, theo ủy quyền của Pearson Education, Mỹ.'
  },
]

const CardBuisiness = ({ d }) => {
  return <div className='flex justify-between items-start xmd:flex-col xmd:space-y-[1.125rem] md:w-[76.875rem]'>
    <Image priority alt="ảnh" src={d.img} width={380} height={370} className=" shrink-0" />
    <div className='flex flex-col items-start md:w-[46.875rem] xmd:space-y-[0.5rem] space-y-[1rem] rounded-[0.75rem] shrink-0'>
      <div className="text-secondary-50 font-feature-settings xmd:text-[1.25rem] text-[1.5rem] font-extrabold xmd:leading-[1.5] leading-[1.25] uppercase">
        {d.mainTitle}
      </div>
      <div className="sub24 xmd:text-[1.125rem] xmd:leading-[1.5] text-primary-50 font-semibold ">
        {d.desc}
      </div>
      <div className="text-[0.875rem] text-greyscaletext-70 font-normal leading-[1.7] self-stretch">
        {d.content}
      </div>
      <Button className='xmd:leading-[1.2] h-[2.5rem] xmd:w-full py-[0.75rem] md:normal-case px-[1.5rem] border-primary-50 text-primary-50 text-[1rem] font-semibold'>
        xem thêm
      </Button>
    </div>
  </div>
}
const Business = ({ t, isMobile }) => {
  return (
    <section className='flex flex-col xmd:px-[0.5rem] items-start space-y-[2.5rem] xmd:space-y-[0.75rem] md:w-[77rem]'>
      <Title title={isMobile ? t.business_mobile : t.business} />
      <div className="flex flex-col items-start space-y-[5.25rem] xmd:space-y-[2rem]">
        {data.map((d, i) => (
          <>
            <CardBuisiness d={d} key={i} />
            {i != data.length - 1 && <div className="md:hidden mx-auto w-[21.9375rem] h-[0.0625rem] bg-[rgba(97,150,246,0.20)]">
            </div >}
          </>
        ))}
      </div>
    </section>
  )
}

export default Business
