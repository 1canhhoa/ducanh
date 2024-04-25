import HopTac from '@/components/hoptac'
import {getDictionary} from '../../dictionaries'
import getData from '@/lib/getData'

export default async function page({params}) {
  const t = await getDictionary(params?.lang)
  const res = await getData('/wp-json/wp/v2/pages/1080')
  return (
    <HopTac
      t={t}
      dataAcf={res?.acf}
    />
  )
}
