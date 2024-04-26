<<<<<<< HEAD
import {getDictionary} from '@/app/[lang]/dictionaries'
import MobileTableOfContents from '@/sections/hoc-bong-anh-quoc/components/MobileTableOfContents'

const HocBongAnhLayout = async ({children, params}) => {
  //   console.log({params})
  const lang = await getDictionary(params.lang)
  return (
    <div className='w-full md:flex-1 mx-auto md:ml-[1.5rem]'>
      <MobileTableOfContents lang={lang} />
      {children}
=======
import RelatedPosts from '@/components/BaiVietLienQuan/RelatedPosts'
import SuggestedSection from '@/sections/hoc-bong-anh-quoc/components/SuggestedSection'

const HocBongAnhLayout = ({children, params}) => {
  return (
    <div className='w-full md:flex-1 mx-auto'>
      {children}
      <SuggestedSection className='mt-[5.27rem]' />
      <RelatedPosts lang={params.lang} />
>>>>>>> master
    </div>
  )
}

export default HocBongAnhLayout
