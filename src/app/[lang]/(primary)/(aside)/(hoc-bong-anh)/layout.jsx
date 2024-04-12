import RelatedPosts from '@/components/BaiVietLienQuan/RelatedPosts'
import SuggestedSection from '@/sections/hoc-bong-anh-quoc/components/SuggestedSection'

const HocBongAnhLayout = ({children, params}) => {
  //   console.log({params})
  return (
    <div className='w-full md:flex-1 mx-auto'>
      {children}
      <SuggestedSection className='mt-[5.27rem]' />
      <RelatedPosts lang={params.lang} />
    </div>
  )
}

export default HocBongAnhLayout
