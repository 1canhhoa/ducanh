import {getDictionary} from '@/app/[lang]/dictionaries'
import HocBong from '@/components/hocbong'

export default async function page({params}) {
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params?.lang)
  return <HocBong t={t} />
}
