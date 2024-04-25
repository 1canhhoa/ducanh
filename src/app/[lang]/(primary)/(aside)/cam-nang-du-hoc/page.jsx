import {getDictionary} from '@/app/[lang]/dictionaries'
import getData from '@/lib/getData'
import AbroadGuideIndex from '@/sections/cam-nang-du-hoc/AbroadGuideIndex'

const CamNangDuHocPage = async ({params}) => {
  const t = await getDictionary(params.lang)
  const res = await getData(
    '/wp-json/acf/v3/pages/204',
  )
  return (
    <AbroadGuideIndex
      lang={t}
      res={res}
      paramsLang={params.lang}
    />
  )
}

export default CamNangDuHocPage
