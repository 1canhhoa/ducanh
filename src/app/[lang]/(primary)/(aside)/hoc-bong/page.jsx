import {getDictionary} from '@/app/[lang]/dictionaries'
import HocBong from '@/components/hocbong'

export default async function page({params, searchParams}) {
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params?.lang)
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  return (
    <HocBong
      t={t}
      isMobile={isMobile}
    />
  )
}
