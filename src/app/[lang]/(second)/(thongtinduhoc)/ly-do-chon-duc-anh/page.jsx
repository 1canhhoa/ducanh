import {getDictionary} from '@/app/[lang]/dictionaries'
import LyDoChonDucAnh from '@/components/thongtinduhoc/lydochonducanh'
import getData from '@/lib/getData'

export default async function page({params}) {
  const res = await getData('/wp-json/wp/v2/pages/250')
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params?.lang)
  return (
    <LyDoChonDucAnh
      text={t}
      dataAcf={res?.acf}
    />
  )
}
