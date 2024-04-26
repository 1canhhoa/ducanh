import {getDictionary} from '../dictionaries'
import IndexHome from '@/sections/home/IndexHome'
<<<<<<< HEAD
export default async function HomePage({ searchParams, params }) {
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params.lang)
  const { viewport } = searchParams
  const isMobile = viewport?.includes('mobile')
  return <IndexHome t={t} isMobile={isMobile} />
=======
import getData from '@/lib/getData'
export default async function HomePage({ searchParams, params }) {
  console.log({ searchParams });
  const t = await getDictionary(params.lang)
  const { categories } = await getData(`/wp-json/okhub/v1/first-new-on-home`)
  const posts = await getData(`/wp-json/okhub/v1/posts-by-category/54`)
  // const dataNoibat = await getData(`/wp-json/okhub/v1/posts-by-category/54`)
  const dataLocations = await getData(`/wp-json/okhub/v1/locations`)
  const dataCountries = await getData(`/wp-json/okhub/v1/countries`)
  const { events } = await getData(`/wp-json/okhub/v1/events?page=1&per_page=10`)

  // Banner
  const dataHomePage = await getData(`/wp-json/wp/v2/pages/44`)
  const { viewport } = searchParams
  const isMobile = viewport?.includes('mobile')
  return <IndexHome
    t={t}
    dataBanner={dataHomePage?.acf?.banner}
    dataQutrinhPhatTrienDucAnh={dataHomePage?.acf?.qua_trinh_phat_trien_duc_anh}
    dataDichVuTaiDucAnh={dataHomePage?.acf?.dich_vu_tai_duc_anh}
    dataHocSinhTieuBieu={dataHomePage?.acf?.hoc_sinh_tieu_bieu}
    dataTruongLk={dataHomePage?.acf?.truong_lien_ket}
    categories={categories}
    dataTintucs={posts}
    // dataNoibat={dataNoibat}
    dataLichHoithaos={events}

    dataLocations={dataLocations}
    dataCountries={dataCountries}

    isMobile={isMobile}
  />
>>>>>>> master
}
