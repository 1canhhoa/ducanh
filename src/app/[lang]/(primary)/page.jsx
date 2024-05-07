import { getDictionary } from '../dictionaries'
import IndexHome from '@/sections/home/IndexHome'
import getData from '@/lib/getData'
export default async function HomePage({ searchParams, params }) {
  console.log({ searchParams })
  const { viewport } = searchParams
  const isMobile = viewport?.includes('mobile')
  const t = await getDictionary(params.lang)
  const { categories } = await getData(`/wp-json/okhub/v1/first-new-on-home`)
  const posts = await getData(`/wp-json/okhub/v1/posts-by-category/54`)
  const dataLocations = await getData(`/wp-json/okhub/v1/locations`)
  const dataCountries = await getData(`/wp-json/okhub/v1/countries`)
  const { events } = await getData(`/wp-json/okhub/v1/events?page=1&per_page=10`)
  const dataCountryMobi = !isMobile ? null : (await getData('/wp-json/acf/v3/sidebar/1276'))?.acf['side-bar']
  const dataHomePage = await getData(`/wp-json/wp/v2/pages/44`)
  return (
    <IndexHome
      t={t}
      dataBanner={dataHomePage?.acf?.banner}
      dataQutrinhPhatTrienDucAnh={dataHomePage?.acf?.qua_trinh_phat_trien_duc_anh}
      dataDichVuTaiDucAnh={dataHomePage?.acf?.dich_vu_tai_duc_anh}
      dataHocSinhTieuBieu={dataHomePage?.acf?.hoc_sinh_tieu_bieu}
      dataTruongLk={dataHomePage?.acf?.truong_lien_ket}

      categories={categories}
      dataTintucs={posts}
      dataLichHoithaos={events}
      dataCountryMobi={dataCountryMobi}
      dataLocations={dataLocations}
      dataCountries={dataCountries}

      isMobile={isMobile}
    />
  )
}
