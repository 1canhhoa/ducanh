
import Image from 'next/image'
const ImageSidebar = () => {
  return (
    <Image priority alt="ảnh sidebar" src={'/images/navPrimary/sidebar.png'} width={350} height={240}
      className="w-full h-full rounded-lg" />
  )
}

export default ImageSidebar
