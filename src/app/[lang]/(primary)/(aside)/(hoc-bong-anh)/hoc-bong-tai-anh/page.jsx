import {getDictionary} from '@/app/[lang]/dictionaries'
import getData from '@/lib/getData'
import ScholarshipEngland from '@/sections/hoc-bong-anh-quoc/components/ScholarshipEngland'

const ScholarshipEnglandPage = async ({params}) => {
  const t = await getDictionary(params.lang)
  let resScholarshipTypes = await getData('/wp-json/wp/v2/scholarship-types')
  const resTags = await getData('/wp-json/wp/v2/tags')
  const resSuggestLinks = await getData('/wp-json/wp/v2/suggested-links')
  const resRelativePosts = await getData('/wp-json/wp/v2/posts?categories=39')
  // console.log(resRelativePosts.data)
  // sort type by id asc
  if (resScholarshipTypes && resScholarshipTypes.length > 0) {
    resScholarshipTypes = resScholarshipTypes.sort(
      (prev, before) => prev.id - before.id,
    )
  }
  // console.log(resScholarshipTypes)
  // console.log({slug: resScholarshipTypes?.[0]?.acf?.api_slug})
  // load content of firstab
  const resFirstTab = await getData(
    '/wp-json/wp/v2' + resScholarshipTypes?.[0]?.acf?.api_slug,
  )
  return (
    <ScholarshipEngland
      lang={t}
      scholarships={resFirstTab || []}
      suggestLinks={resSuggestLinks}
      scholarshipTypes={resScholarshipTypes}
      tags={resTags}
      dataRelativePosts={resRelativePosts}
    />
  )
}

export default ScholarshipEnglandPage
