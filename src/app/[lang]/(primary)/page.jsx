import {getDictionary} from '../dictionaries'
import IndexHome from '@/sections/home/IndexHome'
import getData1 from '@/lib/getData1'
export default async function HomePage({ searchParams, params }) {
  const t = await getDictionary(params.lang)
  const { categories } = await getData1(`/wp-json/okhub/v1/first-new-on-home`)
  const posts = await getData1(`/wp-json/okhub/v1/posts-by-category/54`)
  // const dataNoibat = await getData1(`/wp-json/okhub/v1/posts-by-category/54`)
  const dataLocations = await getData1(`/wp-json/okhub/v1/locations`)
  const dataCountries = await getData1(`/wp-json/okhub/v1/countries`)
  const { events } = await getData1(`/wp-json/okhub/v1/events?page=1&per_page=10`)

  // Banner
  const dataBanner = await getData1(`/wp-json/wp/v2/pages/44`)
  const { viewport } = searchParams
  const isMobile = viewport?.includes('mobile')
  return <IndexHome
    t={t}
    dataBanner={dataBanner?.acf?.sidebar_banner}
    dataQutrinhPhatTrienDucAnh={dataBanner?.acf?.qua_trinh_phat_trien_duc_anh}
    dataDichVuTaiDucAnh={dataBanner?.acf?.dich_vu_tai_duc_anh}
    dataHocSinhTieuBieu={dataBanner?.acf?.hoc_sinh_tieu_bieu}

    categories={categories}
    dataTintucs={posts}
    // dataNoibat={dataNoibat}
    dataLichHoithaos={events}

    dataLocations={dataLocations}
    dataCountries={dataCountries}

    isMobile={isMobile}
  />
}
