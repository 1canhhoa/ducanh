import {getDictionary} from '@/app/[lang]/dictionaries'
import ChonnganhVaChuongtrinh from '@/components/thongtinduhoc/chonnganhvachuongtrinh'
import getDatawp from '@/lib/getDatawp'

export default async function page({params}) {
  const res = await getDatawp('/pages?slug=chon-nganh-va-chuong-trinh')
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params?.lang)
  //   const {viewport} = searchParams
  //   const isMobile = viewport?.includes('mobile')
  return (
    <ChonnganhVaChuongtrinh
      text={t}
      dataAcf={res?.[0]?.acf}
    />
  )
}
