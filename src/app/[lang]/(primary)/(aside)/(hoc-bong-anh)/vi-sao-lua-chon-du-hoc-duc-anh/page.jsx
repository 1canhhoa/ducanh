import {getDictionary} from '@/app/[lang]/dictionaries'
import Reason from '@/sections/hoc-bong-anh-quoc/components/Reason'

const ReasonPage = async ({params}) => {
  const t = await getDictionary(params.lang)
  return <Reason lang={t.scholarship} />
}

export default ReasonPage
