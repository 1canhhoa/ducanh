import {getDictionary} from '@/app/[lang]/dictionaries'
import StudentIndex from '@/sections/hoc-vien-duc-anh/StudentIndex'

export default async function HocVienDucAnhPage({searchParams, params}) {
  const t = await getDictionary(params.lang)
  // console.log(params)
  const myPageLang = t.student
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  console.log({isMobile})
  return (
    <StudentIndex
      lang={myPageLang}
      isMobile={isMobile}
    />
  )
}
