import {getDictionary} from '@/app/[lang]/dictionaries'
import getDataCustomEndpoint from '@/lib/getData'
import getData from '@/lib/getData'
import PostPrimary from '@/sections/hoc-bong-anh-quoc/components/PostPrimary'

const SecondarySchoolsPage = async ({params}) => {
  const t = await getDictionary(params.lang)
  const resTags = await getData('/wp-json/wp/v2/tags')
  const resSuggestLinks = await getData('/wp-json/wp/v2/suggested-links')
  const resRelativePosts = await getData('/wp-json/wp/v2/posts?categories=39')
  const res = await getData('/wp-json/wp/v2/posts/573')
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
