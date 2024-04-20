import {getDictionary} from '@/app/[lang]/dictionaries'
import ViecLam from '@/components/thongtinduhoc/vieclam'
import getDatawp from '@/lib/getDatawp'

export default async function page({params}) {
  const res = await getDatawp('/pages?slug=viec-lam-dinh-cu')
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params?.lang)
  //   const {viewport} = searchParams
  //   const isMobile = viewport?.includes('mobile')
  return (
    <ViecLam
      text={t}
      dataAcf={res?.[0]?.acf}
    />
  )
}
