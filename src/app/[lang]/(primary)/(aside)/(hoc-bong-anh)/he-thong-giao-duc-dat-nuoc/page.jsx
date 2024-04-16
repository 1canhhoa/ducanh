import {getDictionary} from '@/app/[lang]/dictionaries'
import getDataCustomEndpoint from '@/libs/getDataCustomEndpoint'
import getDataDefaultWPEndpoint from '@/libs/getDataDefaultWPEndpoint'
import PostPrimary from '@/sections/hoc-bong-anh-quoc/components/PostPrimary'

const SecondarySchoolsPage = async ({params}) => {
  const t = await getDictionary(params.lang)
  const resTags = await getDataDefaultWPEndpoint('/tags')
  const resSuggestLinks = await getDataCustomEndpoint('/suggested-links')
  const resRelativePosts = await getDataDefaultWPEndpoint(
    '/posts?categories=39',
    {
      enabled: true,
      perPage: 7,
      page: 1,
    },
  )
  const res = await getDataDefaultWPEndpoint('/posts/573')
  return (
    <PostPrimary
      lang={t.scholarship}
      tags={resTags}
      suggestLinks={resSuggestLinks}
      dataRelativePosts={resRelativePosts}
      res={res}
      id='education-system'
      title={t.scholarship.h2_education_system}
    />
  )
}

export default SecondarySchoolsPage
