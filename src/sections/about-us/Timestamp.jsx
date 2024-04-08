import Title from "@/components/Title"
import Image from 'next/image'
const Timestamp = ({ t }) => {
  return (
    <div className="w-[77rem]">
      <Title title={t.timestamp} />
      <div className="">
        <Image priority alt="ảnh nền liên hệ " src={'/images/about_us/contact.jpg'} width={1240} height={400} className="mt-[3rem]" />
        <div className="inline-flex flex-col items-start space-y-[0.75rem] p-[1.5rem] rounded-[0.5rem]">
          <div className="text-primary-60 font-semibold sub24">
            Bạn muốn tư vấn?
          </div>
          <div className="w-[21.6875rem] text-greyscaletext-70 font-normal body16">
            Kết nối với Đức Anh để được tư vấn giải đáp. Chúng tôi sẽ đồng hành cùng bạn từ khi có mong muốn du học đến khi sau tốt nghiệp, tìm việc và định cư tại nước sở tại.
          </div>
          <div className="flex justify-between h-[3rem] bg-primary-50 items-center space-x-[0.625rem] self-stretch pl-[1.875rem] pr-[1.25rem] py-[0.6875rem] rounded-[0.625rem]">

            <div className="body14 font-semibold text-white">
              Liên hệ tư vấn
            </div>
            <div className="flex items-start gap-[0.56644rem] p-[0.22656rem] rounded-[2.83206rem] bg-primary-30">
              <Image priority alt="mũi tên liên hệ tư vấn" src={'/images/about_us/chevron_right.svg'} width={22} height={22} className="w-[1.35938rem] h-[1.35938rem]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timestamp
