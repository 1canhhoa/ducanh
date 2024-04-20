import {getDictionary} from '@/app/[lang]/dictionaries'
import HocbongHayTutuc from '@/components/thongtinduhoc/hocbonghaytutuc'
import getDatawp from '@/libs/getDatawp'

export default async function page({params}) {
  const res = await getDatawp('/pages?slug=hoc-bong-hay-tu-tuc')
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params?.lang)
  //   const {viewport} = searchParams
  //   const isMobile = viewport?.includes('mobile')
  return (
    <HocbongHayTutuc
      text={t}
      dataAcf={res?.[0]?.acf}
    />
  )
}
