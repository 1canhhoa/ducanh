import Image from "next/image"
const WorkTime = () => {
  return (
    <div className=' flex justify-center items-center w-full h-[48.375rem] relative bd'>
      <Image priority alt="ảnh thời gian làm việc du học đức anh" src={'/images/about_us/worktime.jpg'} width={1840} height={680}
        className="w-[114.97544rem] h-[42.48706rem] absolute bottom-0" />
    </div>
  )
}

export default WorkTime
