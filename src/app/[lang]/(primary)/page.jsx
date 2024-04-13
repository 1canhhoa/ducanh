import {getDictionary} from '../dictionaries'
import IndexHome from '@/sections/home/IndexHome'
import getData from '@/lib/getData'
export default async function HomePage({ searchParams, params }) {
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params.lang)
  const { posts, categories } = await getData(`/first-new-on-home`)
  const dataNoibat = await getData(`/posts-by-category/36`)// get hoặc nhiều bài viết nổi bật
  const dataLocations = await getData(`/locations`)
  const dataCountries = await getData(`/countries`)
  const {events} = await getData(`/events?page=1&per_page=10`)
  const { viewport } = searchParams
  const isMobile = viewport?.includes('mobile')
  return <IndexHome
    t={t}
    dataLichHoithaos={events}
    categories={categories}
    dataLocations={dataLocations}
    dataCountries={dataCountries}
    dataNoibat={dataNoibat}
    dataTintucs={posts}
    isMobile={isMobile}
  />
}
