import {getDictionary} from '../dictionaries'
import IndexHome from '@/sections/home/IndexHome'
export default async function HomePage({ searchParams, params }) {
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params.lang)
  const { viewport } = searchParams
  const isMobile = viewport?.includes('mobile')
  return <IndexHome t={t} isMobile={isMobile} />
}
