import {getDictionary} from '@/app/[lang]/dictionaries'
import getData from '@/libs/getData'
import AbroadGuideIndex from '@/sections/cam-nang-du-hoc/AbroadGuideIndex'

const CamNangDuHocPage = async ({params}) => {
  const t = await getDictionary(params.lang)
  const res = await getData(
    'https://astro-api.okhub-tech.com/wp-json/okhub/v1/post/postsBySlug/cam-nang-du-hoc',
  )
  return (
    <AbroadGuideIndex
      lang={t}
      res={res}
    />
  )
}

export default CamNangDuHocPage
