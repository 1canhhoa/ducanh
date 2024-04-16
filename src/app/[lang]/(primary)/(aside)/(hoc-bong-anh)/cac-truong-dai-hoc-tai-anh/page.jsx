import dynamic from 'next/dynamic'
import {getDictionary} from '@/app/[lang]/dictionaries'
import getDataCustomEndpoint from '@/libs/getDataCustomEndpoint'
import getDataDefaultWPEndpoint from '@/libs/getDataDefaultWPEndpoint'
import PostPrimary from '@/sections/hoc-bong-anh-quoc/components/PostPrimary'

const Map = dynamic(() => import('@/components/Map/Map'), {ssr: false})

const Page = async ({params}) => {
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
  const res = await getDataDefaultWPEndpoint('/posts/655')
  return (
    <>
      <Map lang={t} />
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
