import HopTac from '@/components/hoptac'
import {getDictionary} from '../../dictionaries'

export default async function page({params}) {
  const t = await getDictionary(params?.lang)
  return <HopTac t={t} />
}
