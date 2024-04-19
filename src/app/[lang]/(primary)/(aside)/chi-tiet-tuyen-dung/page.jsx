import {getDictionary} from '@/app/[lang]/dictionaries'
import getDataDefaultWPEndpoint from '@/libs/getDataDefaultWPEndpoint'
import RecruitmentDetailsIndex from '@/sections/recruitmentDetails/RecruitmentDetailsIndex'

const RecruitmentDetailsPage = async ({params}) => {
  const t = await getDictionary(params.lang)
  const res = await getDataDefaultWPEndpoint('/recruit/31')
  return (
    <RecruitmentDetailsIndex
      lang={t}
      res={res}
    />
  )
}

export default RecruitmentDetailsPage
