import dynamic from 'next/dynamic'
import {getDictionary} from '@/app/[lang]/dictionaries'
import getData from '@/lib/getData'
import PostPrimary from '@/sections/hoc-bong-anh-quoc/components/PostPrimary'

// const FindByMapPopup = dynamic(
//   () => import('@/components/FindByMapPopup/FindByMapPopup'),
//   {ssr: false},
// )

const Page = async ({params, searchParams}) => {
  const t = await getDictionary(params.lang)
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  const resTags = await getData('/wp-json/wp/v2/tags')
  const resSuggestLinks = await getData('/wp-json/wp/v2/suggested-links')
  const resRelativePosts = await getData('/wp-json/wp/v2/posts?categories=39')
  const res = await getData('/wp-json/wp/v2/posts/655')
  return (
    // <>
    //   <FindByMapPopup
    //     isMobile={isMobile}
    //     lang={t}
    //   />
    <PostPrimary
      lang={t.scholarship}
      tags={resTags}
      suggestLinks={resSuggestLinks}
      dataRelativePosts={resRelativePosts}
      res={res}
      id='university-schools'
      title={t.scholarship.h2_university_schools}
    />
    // </>
  )
}

export default Page
