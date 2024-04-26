import {getDictionary} from '@/app/[lang]/dictionaries'
import HocBong from '@/components/hocbong'
import getData from '@/lib/getData'
export default async function page({params, searchParams}) {
  const t = await getDictionary(params?.lang)
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  const res = await getData('/wp-json/wp/v2/pages/1134')
  return (
    <HocBong
      t={t}
      isMobile={isMobile}
      dataAcf={res?.acf}
    />
  )
}
