import { getDictionary } from '@/app/[lang]/dictionaries'
import getData from '@/lib/getData'
import PostPrimary from '@/sections/hoc-bong-anh-quoc/components/PostPrimary'

const SecondarySchoolsPage = async ({ params }) => {
  const t = await getDictionary(params.lang)
  const resTags = await getData('/wp-json/wp/v2/tags')
  const resSuggestLinks = await getData('/wp-json/wp/v2/suggested-links')
  const resRelativePosts = await getData('/wp-json/wp/v2/posts?categories=39')
  const res = await getData('/wp-json/wp/v2/posts/566')
  return (
    <div></div>
    // <PostPrimary
    //   lang={t.scholarship}
    //   tags={resTags}
    //   suggestLinks={resSuggestLinks}
    //   dataRelativePosts={resRelativePosts}
    //   res={res}
    //   id={'secondary-schools'}
    //   title={t.scholarship.h2_secondary_schools}
    // />
  )
}

export default SecondarySchoolsPage
