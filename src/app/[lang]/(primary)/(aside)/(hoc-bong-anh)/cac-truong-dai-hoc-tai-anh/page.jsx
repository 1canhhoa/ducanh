import dynamic from 'next/dynamic'
import {getDictionary} from '@/app/[lang]/dictionaries'
import getDataCustomEndpoint from '@/libs/getDataCustomEndpoint'
import getDataDefaultWPEndpoint from '@/libs/getDataDefaultWPEndpoint'
import PostPrimary from '@/sections/hoc-bong-anh-quoc/components/PostPrimary'

const FindByMapPopup = dynamic(
  () => import('@/components/FindByMapPopup/FindByMapPopup'),
  {ssr: false},
)

const Page = async ({params, searchParams}) => {
  const t = await getDictionary(params.lang)
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
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
  const res = await getDataDefaultWPEndpoint('/posts/655')
  return (
    <>
      <FindByMapPopup
        isMobile={isMobile}
        lang={t}
      />
      <PostPrimary
        lang={t.scholarship}
        tags={resTags}
        suggestLinks={resSuggestLinks}
        dataRelativePosts={resRelativePosts}
        res={res}
        id='university-schools'
        title={t.scholarship.h2_university_schools}
      />
    </>
  )
}

export default Page
