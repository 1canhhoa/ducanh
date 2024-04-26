import {getDictionary} from '@/app/[lang]/dictionaries'
import getData from '@/lib/getData'
import RecruitmentDetailsIndex from '@/sections/recruitmentDetails/RecruitmentDetailsIndex'

const RecruitmentDetailsPage = async ({params}) => {
  const t = await getDictionary(params.lang)
<<<<<<< HEAD
  const res = await getData('/wp-json/wp/v2/recruit/31')
=======
  const res = await getData(
    '/wp-json/wp/v2/recruit/31',
  )
>>>>>>> master
  return (
    <RecruitmentDetailsIndex
      lang={t}
      res={res}
    />
  )
}

export default RecruitmentDetailsPage
