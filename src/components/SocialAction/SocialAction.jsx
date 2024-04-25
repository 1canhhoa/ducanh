import Image from 'next/image'
const SocialAction = () => {
  return (
    <div className=" fixed z-[50] xmd:bottom-[5.2rem] bottom-[3.2rem] xmd:right-[0.5rem] right-[1.5rem] flex flex-col xmd:space-y-[0.5rem] space-y-[0.7rem]">
      <Image priority alt="ảnh" src={'/images/homepage/mess4.png'} width={56} height={56} className="w-full h-full xmd:size-[2.5rem] size-[3.5rem]" />
      <Image priority alt="ảnh" src={'/images/homepage/mess.png'} width={56} height={56} className="w-full h-full  xmd:size-[2.5rem] size-[3.5rem]" />
      <Image priority alt="ảnh" src={'/images/homepage/mess3.png'} width={56} height={56} className="w-full h-full xmd:size-[2.5rem] size-[3.5rem]" />
      <Image priority alt="ảnh" src={'/images/homepage/mess2.png'} width={56} height={56} className="w-full h-full xmd:size-[2.5rem] size-[3.5rem]" />
    </div>
  )
}
export default SocialAction