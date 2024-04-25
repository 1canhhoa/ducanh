import {getDictionary} from '@/app/[lang]/dictionaries'
import ChonnganhVaChuongtrinh from '@/components/thongtinduhoc/chonnganhvachuongtrinh'
import getData from '@/lib/getData'

export default async function page({params}) {
  const res = await getData('/wp-json/wp/v2/pages/792')
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params?.lang)
  //   const {viewport} = searchParams
  //   const isMobile = viewport?.includes('mobile')
  return (
    <ChonnganhVaChuongtrinh
      text={t}
      dataAcf={res?.acf}
    />
  )
}
