import {getDictionary} from '@/app/[lang]/dictionaries'
import LyDoChonDucAnh from '@/components/thongtinduhoc/lydochonducanh'
import getDatawp from '@/lib/getDatawp'

export default async function page({params}) {
  const res = await getDatawp('/pages?slug=ly-do-chon-duc-anh')
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params?.lang)
  return (
    <LyDoChonDucAnh
      text={t}
      dataAcf={res?.[0]?.acf}
    />
  )
}
