import {getDictionary} from '@/app/[lang]/dictionaries'
import getDataDefaultWPEndpoint from '@/libs/getDataDefaultWPEndpoint'
import AbroadGuideIndex from '@/sections/cam-nang-du-hoc/AbroadGuideIndex'

const CamNangDuHocPage = async ({params}) => {
  const t = await getDictionary(params.lang)
  const res = await getDataDefaultWPEndpoint('/posts/822')
  return (
    <AbroadGuideIndex
      lang={t}
      res={res}
      paramsLang={params.lang}
    />
  )
}

export default CamNangDuHocPage
