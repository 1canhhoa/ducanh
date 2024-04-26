import {getDictionary} from '@/app/[lang]/dictionaries'
import HocBong from '@/components/hocbong'
<<<<<<< HEAD

export default async function page({params, searchParams}) {
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params?.lang)
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
=======
import getData from '@/lib/getData'
export default async function page({params, searchParams}) {
  const t = await getDictionary(params?.lang)
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  const res = await getData('/wp-json/wp/v2/pages/1134')
>>>>>>> master
  return (
    <HocBong
      t={t}
      isMobile={isMobile}
<<<<<<< HEAD
=======
      dataAcf={res?.acf}
>>>>>>> master
    />
  )
}
