import {getDictionary} from '@/app/[lang]/dictionaries'
import ChiPhi from '@/components/thongtinduhoc/chiphi'
import getDatawp from '@/libs/getDatawp'

export default async function page({params}) {
  const res = await getDatawp('/pages?slug=chi-phi')
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params?.lang)
  //   const {viewport} = searchParams
  //   const isMobile = viewport?.includes('mobile')
  return (
    <ChiPhi
      text={t}
      dataAcf={res?.[0]?.acf}
    />
  )
}
