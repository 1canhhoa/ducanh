import {getDictionary} from '@/app/[lang]/dictionaries'
import AboutUnitedKingom from '@/sections/hoc-bong-anh-quoc/AboutUnitedKingom'
import Reason from '@/sections/hoc-bong-anh-quoc/Reason'
import EducationSystem from '@/sections/hoc-bong-anh-quoc/EducationSystem'
import SecondarySchools from '@/sections/hoc-bong-anh-quoc/SecondarySchools'
import TrainingInstitutesPage from '@/sections/hoc-bong-anh-quoc/TrainingInstitutes'
import RelatedPosts from '@/sections/hoc-bong-anh-quoc/RelatedPosts'
const HocBongAnhQuocPage = async ({params}) => {
  const t = await getDictionary(params.lang)
  const scholarshipLang = t.scholarship
  return (
    <div className='w-full md:flex-1'>
      <AboutUnitedKingom lang={scholarshipLang} />
      <Reason lang={scholarshipLang} />
      <EducationSystem lang={scholarshipLang} />
      <SecondarySchools lang={scholarshipLang} />
      <TrainingInstitutesPage lang={scholarshipLang} />
      <RelatedPosts lang={scholarshipLang} />
    </div>
  )
}

export default HocBongAnhQuocPage
