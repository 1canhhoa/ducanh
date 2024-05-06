import {getDictionary} from '@/app/[lang]/dictionaries'
import getData from '@/lib/getData'
import PostPrimary from '@/sections/hoc-bong-anh-quoc/components/PostPrimary'

const ReasonPage = async ({params}) => {
  const t = await getDictionary(params.lang)
  const resTags = await getData('/wp-json/wp/v2/tags')
  const resSuggestLinks = await getData('/wp-json/wp/v2/suggested-links')
  const resRelativePosts = await getData('/wp-json/wp/v2/posts?categories=39')
  const res = await getData('/wp-json/wp/v2/posts/389')
  return (
    <PostPrimary
      lang={t.scholarship}
      res={res}
      tags={resTags}
      suggestLinks={resSuggestLinks}
      dataRelativePosts={resRelativePosts}
      id={'reason-to-select-duc-anh'}
      title={t.scholarship.h2_reason}
    />
  )
}

export default ReasonPage
