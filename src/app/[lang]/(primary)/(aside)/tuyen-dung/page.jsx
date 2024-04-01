import TitleAndBanner from "@/sections/recruitment/TitleAndBanner";
import { getDictionary } from '@/app/[lang]/dictionaries.js'
import FilterAndListCardRecuiment from "@/sections/recruitment/FilterAndListCardRecuiment";
export default async function RecruitmentPage({ params, searchParams }) {
  const { viewport } = searchParams
  const isMobile = viewport?.includes('mobile')
  const { recruitment } = await getDictionary(params.lang)
  return <div className='px-[0.69rem]'>
    <TitleAndBanner t={recruitment} />
    <FilterAndListCardRecuiment t={recruitment} isMobile={isMobile} />
  </div>
}
