import {getDictionary} from '@/app/[lang]/dictionaries'
import DichvuDA from '@/components/thongtinduhoc/dichvu'
import getData from '@/lib/getData'

export default async function page({params}) {
  const res = await getData('/wp-json/wp/v2/pages/278')
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params?.lang)
  return (
    <DichvuDA
      text={t}
      dataAcf={res?.acf}
    />
  )
}
