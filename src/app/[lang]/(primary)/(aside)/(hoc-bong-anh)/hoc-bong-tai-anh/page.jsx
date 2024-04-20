import {getDictionary} from '@/app/[lang]/dictionaries'
import ScholarshipEngland from '@/sections/hoc-bong-anh-quoc/components/ScholarshipEngland'

const ScholarshipEnglandPage = async ({params}) => {
  const t = await getDictionary(params.lang)
  return <ScholarshipEngland lang={t.scholarship} />
}

export default ScholarshipEnglandPage
