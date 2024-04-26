import Image from 'next/image'
import Title from '@/components/Title'
import { Button } from '@/components/ui/button'

<<<<<<< HEAD
const WorkTime = ({ t }) => {
=======
const WorkTime = ({ t, dataGioLamViec }) => {
>>>>>>> master
  return (
    <section className='relative flex justify-center items-center w-full h-[44.375rem] md:h-[48.375rem]'>
      <div className='xmd:w-full xmd:px-[0.5rem] w-[77rem] relative h-full flex justify-start items-start'>
        <div className="">
          <Title title={t.worktime} />
          <div className="mt-[2.25rem] xmd:mt-[1.5rem] flex flex-col items-start space-y-[0.75rem]">
            <div className="text-primary-30 xmd:body12 xmd:font-bold font-feature-settings  text-[0.875rem] font-extrabold leading-[1.25rem] uppercase tracking-[0.00875rem] ">
              Từ Thứ hai - Thứ bảy
            </div>
            <div className="flex flex-col items-start space-y-[0.5rem]">
              <div className="flex items-start space-x-[1.25rem] ">
                <div className='text-center xmd:body14 xmd:leading-[1.5] text-primary-50 text-[1rem] font-semibold leading-[1.3rem] uppercase'>
                  Buổi Sáng
                </div>
                <div className="text-primary-50 xmd:body14 xmd:leading-[1.2] text-center text-[1rem] font-extrabold leading-[1.3rem]">
<<<<<<< HEAD
                  08:30 - 12:30
=======
                  {dataGioLamViec?.gio_sang}
>>>>>>> master
                </div>
              </div>
              <div className="flex items-start space-x-[1.25rem] ">
                <div className='text-center xmd:body14 xmd:leading-[1.5] text-primary-50 text-[1rem] font-semibold leading-[1.3rem] uppercase'>
                  Buổi Chiều
                </div>
                <div className="text-primary-50 xmd:body14 xmd:leading-[1.2] text-center text-[1rem] font-extrabold leading-[1.3rem]">
<<<<<<< HEAD
                  13:30 - 17:30
=======
                  {dataGioLamViec?.gio_chieu}
>>>>>>> master
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[3.06rem] xmd:mt-[1rem] inline-flex flex-col items-start xmd:space-y-[0.75rem] space-y-[1rem] ">
            <div className="md:w-[25.6875rem] text-greyscaletext-60 xmd:text-greyscaletext-70 body14 font-medium">
<<<<<<< HEAD
              Trong trường hợp khẩn cấp, quý vị có thể liên hệ với
              nhân viên phụ trách qua các số máy sau để được phục vụ:
            </div>
            <div className="flex items-start md:space-x-[2.5rem]
             xmd:w-[21.9375rem] xmd:justify-between  xmd:content-start xmd:gap-y-5 xmd:flex-wrap
            ">
              <div className="flex flex-col justify-center items-start space-y-[0.25rem]">
                <div className="text-primary-30 xmd:body12 font-feature-settings  text-[0.875rem] font-extrabold leading-[1.25rem] uppercase tracking-[0.00875rem] ">
                  Hà Nội
=======
              {dataGioLamViec?.desc_hotline}
            </div>
            <div className="flex items-start xmd:space-x-[3.38rem] space-x-[2.5rem]
             xmd:w-[21.9375rem] xmd:justify-start  xmd:content-start xmd:gap-y-5 xmd:flex-wrap
            ">
              <div className="flex flex-col justify-center items-start space-y-[0.25rem]">
                <div className="text-primary-30 xmd:body12 font-feature-settings  text-[0.875rem] font-extrabold leading-[1.25rem] uppercase tracking-[0.00875rem] ">
                  HOTLINE 1
>>>>>>> master
                </div>
                <div className="text-primary-50 xmd:body12 xmd:leading-[1.6] text-center text-[1rem] font-extrabold leading-[1.3rem]">
                  098 87 09 698
                </div>
              </div>
              <div className="flex flex-col justify-center items-start space-y-[0.25rem]">
                <div className="text-primary-30 xmd:body12 font-feature-settings  text-[0.875rem] font-extrabold leading-[1.25rem] uppercase tracking-[0.00875rem] ">
<<<<<<< HEAD
                  Hồ Chí Minh
=======
                  HOTLINE 2
>>>>>>> master
                </div>
                <div className="text-primary-50 xmd:body12 xmd:leading-[1.6] text-center text-[1rem] font-extrabold leading-[1.3rem]">
                  096 30 49 860
                </div>
              </div>
<<<<<<< HEAD
              <div className="flex flex-col justify-center items-start space-y-[0.25rem]">
                <div className="text-primary-30 xmd:body12 font-feature-settings  text-[0.875rem] font-extrabold leading-[1.25rem] uppercase tracking-[0.00875rem] ">
                  Vinh & Quảng Ngãi
                </div>
                <div className="text-primary-50 xmd:body12 xmd:leading-[1.6] text-center text-[1rem] font-extrabold leading-[1.3rem]">
                  098 68 88 440
                </div>
              </div>
=======
>>>>>>> master
            </div>
          </div>
        </div>

        <div className="absolute xmd:bottom-[7.74rem] bottom-[7.74rem] xmd:left-1/2 xmd:-translate-x-1/2 xmd:w-max md:w-[42.21306rem] text-white xmd:text-[1.25rem] 
        xmd:font-semibold text-[2.25rem] font-extrabold xmd:leading-[150%] leading-[140%] tracking-[0.02rem] md:tracking-[-0.0225rem] uppercase ">
          DU học thảnh thơi <br />
          Cùng đức anh đi muôn nơi!
        </div>

        <div className="inline-flex absolute bottom-[4rem] md:bottom-[6.5rem] md:right-[7rem] xmd:left-1/2 xmd:-translate-x-1/2 xmd:w-max items-start xmd:space-x-[0.625rem] space-x-[0.875rem]">
          <Button className={'text-start xmd:normal-case xmd:relative md:h-[3.375rem] md:w-[9.4375rem] px-[0.9rem] py-[0.9375rem] md:px-[1.875rem] md:py-[0.9375rem] text-white bg-primary-50 font-semibold body16'} >
            Liên hệ tư vấn
            <svg className='ml-[0.375rem] md:hidden z-50 size-[1.1875rem]' xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path d="M5.54102 13.4557L13.4577 5.53906M13.4577 5.53906H7.12435M13.4577 5.53906V11.8724" stroke="white" stroke-width="1.58333" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </Button>

          <Button className={'md:h-[3.375rem] xmd:normal-case w-[9.4375rem] px-[1.875rem] py-[0.9375rem] md:px-[1.875rem] md:py-[0.75rem] bg-white border-none  text-primary-50 body16 font-semibold'}>Về Chúng Tôi</Button>
        </div>
      </div>
      <Image priority alt="ảnh thời gian làm việc du học đức anh" src={'/images/about_us/worktime.jpg'} width={1840} height={680}
        className="w-[114.97544rem] mx-auto xmd:hidden z-[-1] h-[42.48706rem] absolute left-0 right-0 bottom-0" />
      <Image priority alt="ảnh thời gian làm việc du học đức anh" src={'/images/about_us/worktime_mobi.jpg'} width={380} height={520}
<<<<<<< HEAD
        className="z-[-1] absolute md:hidden left-0 right-0 bottom-[0rem]" />
=======
        className="z-[-1] absolute md:hidden w-full left-0 right-0 bottom-[0rem]" />
>>>>>>> master
    </section>
  )
}

export default WorkTime
