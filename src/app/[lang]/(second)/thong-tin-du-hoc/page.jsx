import ThongTindh from '@/components/thongtinduhoc'
import {getDictionary} from '../../dictionaries'

export default async function page({params, searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  const t = await getDictionary(params?.lang)
  return (
    <ThongTindh
      text={t}
      isMobile={isMobile}
    />
  )
}
