import {getDictionary} from '@/app/[lang]/dictionaries'
import SecondarySchools from '@/sections/hoc-bong-anh-quoc/components/SecondarySchools'

const SecondarySchoolsPage = async ({params}) => {
  const t = await getDictionary(params.lang)
  return <SecondarySchools lang={t.scholarship} />
}

export default SecondarySchoolsPage
