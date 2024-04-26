import {getDictionary} from '@/app/[lang]/dictionaries'
import getDataCustomEndpoint from '@/lib/getData'
import getData from '@/lib/getData'
import PostPrimary from '@/sections/hoc-bong-anh-quoc/components/PostPrimary'

const Page = async ({params}) => {
  const t = await getDictionary(params.lang)
  const resTags = await getData('/wp-json/wp/v2/tags')
  const resSuggestLinks = await getData('/wp-json/wp/v2/suggested-links')
  const resRelativePosts = await getData('/wp-json/wp/v2/posts?categories=39')
  const res = await getData('/wp-json/wp/v2/posts/663')
  return (
    <PostPrimary
      lang={t.scholarship}
      tags={resTags}
      suggestLinks={resSuggestLinks}
      dataRelativePosts={resRelativePosts}
      res={res}
      id={'register-to-study'}
      title={t.scholarship.h2_register_to_study}
    />
  )
}

export default Page
