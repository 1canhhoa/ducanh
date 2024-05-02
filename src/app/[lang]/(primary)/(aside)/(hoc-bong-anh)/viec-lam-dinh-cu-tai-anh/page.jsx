import {getDictionary} from '@/app/[lang]/dictionaries'
import getData from '@/lib/getData'
import JobSettled from '@/sections/hoc-bong-anh-quoc/components/JobSettled'

const JobSettledPage = async ({params}) => {
  const t = await getDictionary(params.lang)
  const res = await getData('/wp-json/wp/v2/pages/1102')
  const resTags = await getData('/wp-json/wp/v2/tags')
  const resSuggestLinks = await getData('/wp-json/wp/v2/suggested-links')
  const resRelativePosts = await getData('/wp-json/wp/v2/posts?categories=39')
  return (
    <JobSettled
      lang={t}
      res={res}
      relativePosts={resRelativePosts || []}
      tags={resTags}
      suggestLinks={resSuggestLinks}
    />
  )
}

export default JobSettledPage
