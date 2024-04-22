import {getDictionary} from '@/app/[lang]/dictionaries'
import Quydoi from '@/components/thongtinduhoc/quydoi'
import getDatawp from '@/lib/getDatawp'

export default async function page({params}) {
  const res = await getDatawp('/wp-json/wp/v2/pages?slug=quy-doi-diem-gpa')
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params?.lang)
  //   const {viewport} = searchParams
  //   const isMobile = viewport?.includes('mobile')
  return (
    <Quydoi
      text={t}
      dataAcf={res?.[0]?.acf}
    />
  )
}
