import {getDictionary} from '@/app/[lang]/dictionaries'
import JobSettled from '@/sections/hoc-bong-anh-quoc/components/JobSettled'

const JobSettledPage = async ({params}) => {
  const t = await getDictionary(params.lang)
  return <JobSettled lang={t.scholarship} />
}

export default JobSettledPage
