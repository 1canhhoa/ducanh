import {getDictionary} from '@/app/[lang]/dictionaries'
import ScholarshipIndex from '@/sections/hoc-bong-anh-quoc/ScholarshipIndex'
const HocBongAnhQuocPage = async ({params, searchParams}) => {
  const t = await getDictionary(params.lang)
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')

  return (
    <ScholarshipIndex
      lang={t}
      isMobile={isMobile}
    />
  )
}

export default HocBongAnhQuocPage
