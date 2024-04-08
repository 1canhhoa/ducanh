import Image from 'next/image'
import Title from '@/components/Title'
import { Button } from '@/components/ui/button'

const WorkTime = ({ t }) => {
  return (
    <div className='relative flex justify-center items-center w-full h-[48.375rem]'>
      <Image priority alt="ảnh thời gian làm việc du học đức anh" src={'/images/about_us/worktime.jpg'} width={1840} height={680}
        className="w-[114.97544rem] z-[-1] h-[42.48706rem] absolute bottom-0" />
      <div className='w-[77rem] relative h-full flex justify-start items-start'>
        <div className="">
          <Title title={t.worktime} />
          <div className="mt-[2.25rem] flex flex-col items-start space-y-[0.75rem]">
            <div className="text-primary-30 font-feature-settings  text-[0.875rem] font-extrabold leading-[1.25rem] uppercase tracking-[0.00875rem] ">
              Từ Thứ hai - Thứ bảy
            </div>
            <div className="flex flex-col items-start space-y-[0.5rem]">
              <div className="flex items-start space-x-[1.25rem] ">
                <div className='text-center text-primary-50 text-[1rem] font-semibold leading-[1.3rem] uppercase'>
                  Buổi Sáng
                </div>
                <div className="text-primary-50 text-center text-[1rem] font-extrabold leading-[1.3rem]">
                  08:30 - 12:30
                </div>
              </div>
              <div className="flex items-start space-x-[1.25rem] ">
                <div className='text-center text-primary-50 text-[1rem] font-semibold leading-[1.3rem] uppercase'>
                  Buổi Chiều
                </div>
                <div className="text-primary-50 text-center text-[1rem] font-extrabold leading-[1.3rem]">
                  13:30 - 17:30
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[3.06rem] inline-flex flex-col items-start space-y-[1rem] ">
            <div className="w-[25.6875rem] to-greyscaletext-60 body14 font-medium">
              Trong trường hợp khẩn cấp, quý vị có thể liên hệ với
              nhân viên phụ trách qua các số máy sau để được phục vụ:
            </div>
            <div className="flex items-start space-x-[2.5rem]">
              <div className="flex flex-col justify-center items-start space-y-[0.25rem]">
                <div className="text-primary-30 font-feature-settings  text-[0.875rem] font-extrabold leading-[1.25rem] uppercase tracking-[0.00875rem] ">
                  Hà Nội
                </div>
                <div className="text-primary-50 text-center text-[1rem] font-extrabold leading-[1.3rem]">
                  098 87 09 698
                </div>
              </div>
              <div className="flex flex-col justify-center items-start space-y-[0.25rem]">
                <div className="text-primary-30 font-feature-settings  text-[0.875rem] font-extrabold leading-[1.25rem] uppercase tracking-[0.00875rem] ">
                  Hồ Chí Minh
                </div>
                <div className="text-primary-50 text-center text-[1rem] font-extrabold leading-[1.3rem]">
                  096 30 49 860
                </div>
              </div>
              <div className="flex flex-col justify-center items-start space-y-[0.25rem]">
                <div className="text-primary-30 font-feature-settings  text-[0.875rem] font-extrabold leading-[1.25rem] uppercase tracking-[0.00875rem] ">
                  Vinh & Quảng Ngãi
                </div>
                <div className="text-primary-50 text-center text-[1rem] font-extrabold leading-[1.3rem]">
                  098 68 88 440
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[7.74rem] w-[42.21306rem] text-white text-[2.25rem] font-extrabold leading-[140%] tracking-[-0.0225rem] uppercase ">
          DU học thảnh thơi <br />
          Cùng đức anh đi muôn nơi!
        </div>
        <div className="inline-flex absolute bottom-[6.86rem] right-[7rem] items-start space-x-[0.875rem]">
          <Button className={'h-[3.375rem] px-[1.875rem] py-[0.9375rem] text-white bg-primary-50 font-semibold body16'} >Liên hệ tư vấn </Button>
          <Button className={'h-[3.375rem] px-[1.875rem] bg-white border-none py-[0.75rem] text-primary-50 body16 font-semibold'}>Về Chúng Tôi</Button>
        </div>
      </div>

    </div>
  )
}

export default WorkTime
