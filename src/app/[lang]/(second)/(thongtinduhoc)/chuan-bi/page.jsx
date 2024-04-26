import {getDictionary} from '@/app/[lang]/dictionaries'
import ChuanBi from '@/components/thongtinduhoc/chuanbi'
import getData from '@/lib/getData'

export default async function page({params, searchParams}) {
  const res = await getData('/wp-json/wp/v2/pages/406')
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params?.lang)
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  return (
    <ChuanBi
      isMobile={isMobile}
      text={t}
      dataAcf={res?.acf}
    />
  )
}
