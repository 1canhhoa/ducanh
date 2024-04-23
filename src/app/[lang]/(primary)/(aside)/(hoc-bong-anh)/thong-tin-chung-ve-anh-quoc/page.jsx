import {getDictionary} from '@/app/[lang]/dictionaries'
import AboutUnitedKingom from '@/sections/hoc-bong-anh-quoc/components/AboutUnitedKingom'

const UnitedKingDomPage = async ({params, searchParams}) => {
  const t = await getDictionary(params.lang)
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  return (
    <AboutUnitedKingom
      lang={t.scholarship}
      id={'about-united-kingdom'}
      isMobile={isMobile}
    />
  )
}

export default UnitedKingDomPage
