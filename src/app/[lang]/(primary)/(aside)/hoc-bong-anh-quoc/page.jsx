import {getDictionary} from '@/app/[lang]/dictionaries'
import AboutUnitedKingom from '@/sections/hoc-bong-anh-quoc/AboutUnitedKingom'
import Reason from '@/sections/hoc-bong-anh-quoc/Reason'
import EducationSystem from '@/sections/hoc-bong-anh-quoc/EducationSystem'
import SecondarySchools from '@/sections/hoc-bong-anh-quoc/SecondarySchools'
import TrainingInstitutes from '@/sections/hoc-bong-anh-quoc/TrainingInstitutes'
import RelatedPosts from '@/sections/hoc-bong-anh-quoc/RelatedPosts'
import MobileTableOfContents from '@/sections/hoc-bong-anh-quoc/MobileTableOfContents'
import ScholarshipEngland from '@/sections/hoc-bong-anh-quoc/ScholarshipEngland'
import SuggestedSection from '@/sections/hoc-bong-anh-quoc/SuggestedSection'
import JobSettled from '@/sections/hoc-bong-anh-quoc/JobSettled'
const HocBongAnhQuocPage = async ({params, searchParams}) => {
  const t = await getDictionary(params.lang)
  const scholarshipLang = t.scholarship
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  const IDs = {
    about_united_kingdom: {
      id: 'about-united-kingdom',
      title: scholarshipLang.h2_about_united_kingdom,
    },
    reason: {
      id: 'reason',
      title: scholarshipLang.h2_reason_mb,
    },
    education_system: {
      id: 'education-system',
      title: scholarshipLang.h2_education_system,
    },
    secondary_schools: {
      id: 'secondary-schools',
      title: scholarshipLang.h2_secondary_schools_mb,
    },
    training_institutes: {
      id: 'training-institutes',
      title: scholarshipLang.h2_training_institutes_mb,
    },
    university_schools: {
      id: 'university-schools',
      title: scholarshipLang.h2_university_schools_mb,
    },
    register_study: {
      id: 'register-study',
      title: scholarshipLang.h2_register_study_mb,
    },
    visa_study: {
      id: 'visa-study',
      title: scholarshipLang.h2_visa_study_mb,
    },
    scholarship_en: {
      id: 'scholarship-en',
      title: scholarshipLang.h2_scholarship_en_mb,
    },
    job_settled: {
      id: 'job-settked',
      title: scholarshipLang.h2_job_settled_mb,
    },
  }

  return (
    <div className='w-full md:flex-1'>
      {isMobile && <MobileTableOfContents list={IDs} />}
      <AboutUnitedKingom
        lang={scholarshipLang}
        id={IDs.about_united_kingdom.id}
      />
      <Reason
        lang={scholarshipLang}
        id={IDs.reason.id}
      />
      <EducationSystem
        lang={scholarshipLang}
        id={IDs.education_system.id}
      />
      <SecondarySchools
        lang={scholarshipLang}
        id={IDs.education_system.id}
      />
      <TrainingInstitutes
        lang={scholarshipLang}
        id={IDs.education_system.id}
      />
      <div className='flex flex-col xmd:flex-col-reverse'>
        <ScholarshipEngland
          lang={scholarshipLang}
          id={IDs.scholarship_en.id}
        />
        <JobSettled
          lang={scholarshipLang}
          id={IDs.job_settled.id}
        />
      </div>
      <SuggestedSection />
      <RelatedPosts lang={scholarshipLang} />
    </div>
  )
}

export default HocBongAnhQuocPage
