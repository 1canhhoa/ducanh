import {getDictionary} from '@/app/[lang]/dictionaries'
import DichvuDA from '@/components/thongtinduhoc/dichvu'
import getDatawp from '@/libs/getDatawp'

export default async function page({params}) {
  const res = await getDatawp('/pages?slug=dich-vu-du-hoc')
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params?.lang)
  return (
    <DichvuDA
      text={t}
      dataAcf={res?.[0]?.acf}
    />
  )
}
