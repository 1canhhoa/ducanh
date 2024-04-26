
import { getDictionary } from '@/app/[lang]/dictionaries.js'
import getData from '@/lib/getData'
import Ceo from '@/sections/about-us/Ceo'

const page = async ({ params, searchParams }) => {
  const { about_us } = await getDictionary(params.lang)
  const dataCeo = await getData(`/wp-json/wp/v2/pages/935`)
  const { viewport } = searchParams
  const isMobile = viewport?.includes('mobile')
  return (
    <Ceo t={about_us} dataPersons={dataCeo?.acf?.ceo?.persons} />
  )
}

export default page
