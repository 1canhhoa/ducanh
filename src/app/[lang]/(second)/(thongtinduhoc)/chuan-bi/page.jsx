import {getDictionary} from '@/app/[lang]/dictionaries'
import ChuanBi from '@/components/thongtinduhoc/chuanbi'
import getDatawp from '@/libs/getDatawp'

export default async function page({params, searchParams}) {
  const res = await getDatawp('/pages?slug=chuan-bi')
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params?.lang)
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  return (
    <ChuanBi
      isMobile={isMobile}
      text={t}
      dataAcf={res?.[0]?.acf}
    />
  )
}
