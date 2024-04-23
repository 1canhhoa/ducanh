import {getDictionary} from '@/app/[lang]/dictionaries'
import getData from '@/lib/getData'
import StudentIndex from '@/sections/hoc-vien-duc-anh/StudentIndex'

export default async function HocVienDucAnhPage({searchParams, params}) {
  const t = await getDictionary(params.lang)
  // console.log(params)
  const myPageLang = t.student
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  const res = await getData('/wp-json/wp/v2/pages/866')
  const resStudens = await getData('/wp-json/wp/v2/students?per_page=9&page=1')
  // console.log(res)
  return (
    <StudentIndex
      lang={myPageLang}
      isMobile={isMobile}
      res={res}
      students={resStudens}
    />
  )
}
