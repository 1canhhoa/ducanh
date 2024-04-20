import {getDictionary} from '@/app/[lang]/dictionaries'
import getDataDefaultWPEndpoint from '@/libs/getDataDefaultWPEndpoint'
import StudentIndex from '@/sections/hoc-vien-duc-anh/StudentIndex'

export default async function HocVienDucAnhPage({searchParams, params}) {
  const t = await getDictionary(params.lang)
  // console.log(params)
  const myPageLang = t.student
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  const res = await getDataDefaultWPEndpoint('/pages/866')
  // console.log(res)
  return (
    <StudentIndex
      lang={myPageLang}
      isMobile={isMobile}
      res={res}
    />
  )
}
