import {getDictionary} from '@/app/[lang]/dictionaries'
import NgheHot from '@/components/nghehot'

export default async function page({params}) {
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params?.lang)
  return <NgheHot t={t} />
}
