import {getDictionary} from '@/app/[lang]/dictionaries'
import StudentIndex from '@/sections/hoc-vien-duc-anh/StudentIndex'

export default async function HocVienDucAnhPage({params}) {
  const t = await getDictionary(params.lang)
  // console.log(params)
  const myPageLang = t.student
  return <StudentIndex lang={myPageLang} />
}
