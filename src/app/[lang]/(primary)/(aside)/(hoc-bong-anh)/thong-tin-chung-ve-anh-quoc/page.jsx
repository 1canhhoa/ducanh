import {getDictionary} from '@/app/[lang]/dictionaries'
import getData from '@/lib/getData'
import AboutUnitedKingom from '@/sections/hoc-bong-anh-quoc/components/AboutUnitedKingom'

const UnitedKingDomPage = async ({params, searchParams}) => {
  const t = await getDictionary(params.lang)
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  const res = await getData('/wp-json/wp/v2/pages/1247')
  return (
    <AboutUnitedKingom
      lang={t}
      id={'about-united-kingdom'}
      isMobile={isMobile}
      res={res}
    />
  )
}

export default UnitedKingDomPage
