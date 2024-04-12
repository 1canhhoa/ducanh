import {getDictionary} from '../dictionaries'
import IndexHome from '@/sections/home/IndexHome'
import getData from '@/lib/getData'
export default async function HomePage({ searchParams, params }) {
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params.lang)
  const { categories, posts } = await getData(`/first-new-on-home`)
  const { viewport } = searchParams
  const isMobile = viewport?.includes('mobile')
  return <IndexHome dataTintucNoibat={posts} t={t} isMobile={isMobile} />
}
