import {getDictionary} from '@/app/[lang]/dictionaries'
import MobileTableOfContents from '@/sections/hoc-bong-anh-quoc/components/MobileTableOfContents'

const HocBongAnhLayout = async ({children, params}) => {
  //   console.log({params})
  const lang = await getDictionary(params.lang)
  return (
    <div className='w-full md:flex-1 mx-auto md:ml-[1.5rem]'>
      <MobileTableOfContents lang={lang} />
      {children}
    </div>
  )
}

export default HocBongAnhLayout
