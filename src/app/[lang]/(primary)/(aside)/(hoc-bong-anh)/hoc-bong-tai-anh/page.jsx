import {getDictionary} from '@/app/[lang]/dictionaries'
import getDataDefaultWPEndpoint from '@/libs/getDataDefaultWPEndpoint'
import getDataCustomEndpoint from '@/libs/getDataCustomEndpoint'
import ScholarshipEngland from '@/sections/hoc-bong-anh-quoc/components/ScholarshipEngland'

const ScholarshipEnglandPage = async ({params}) => {
  const t = await getDictionary(params.lang)
  let resScholarshipTypes = await getDataCustomEndpoint('/scholarship-types')
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
  // console.log(resRelativePosts.data)
  // sort type by id asc
  if (resScholarshipTypes && resScholarshipTypes.length > 0) {
    resScholarshipTypes = resScholarshipTypes.sort(
      (prev, before) => prev.id - before.id,
    )
  }
  // load content of firstab
  const resFirstTab = await getDataCustomEndpoint(
    resScholarshipTypes?.[0]?.acf?.api_slug,
  )
  return (
    <ScholarshipEngland
      lang={t}
      scholarships={resFirstTab}
      suggestLinks={resSuggestLinks}
      scholarshipTypes={resScholarshipTypes}
      tags={resTags}
      dataRelativePosts={resRelativePosts}
    />
  )
}

export default ScholarshipEnglandPage
