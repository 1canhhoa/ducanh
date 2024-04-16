import AboutUnitedKingom from '@/sections/hoc-bong-anh-quoc/components/AboutUnitedKingom'
import Reason from '@/sections/hoc-bong-anh-quoc/components/Reason'
import EducationSystem from '@/sections/hoc-bong-anh-quoc/components/PostPrimary'
import SecondarySchools from '@/sections/hoc-bong-anh-quoc/components/SecondarySchools'
import TrainingInstitutes from '@/sections/hoc-bong-anh-quoc/components/TrainingInstitutes'
import UniversitySchools from '@/sections/hoc-bong-anh-quoc/components/UniversitySchools'
import RegisterStudy from '@/sections/hoc-bong-anh-quoc/components/RegisterStudy'
import VisaStudy from '@/sections/hoc-bong-anh-quoc/components/VisaStudy'
import RelatedPosts from '@/components/BaiVietLienQuan/RelatedPosts'
import MobileTableOfContents from '@/sections/hoc-bong-anh-quoc/components/MobileTableOfContents'
import ScholarshipEngland from '@/sections/hoc-bong-anh-quoc/components/ScholarshipEngland'
import SuggestedSection from '@/sections/hoc-bong-anh-quoc/components/SuggestedSection'
import JobSettled from '@/sections/hoc-bong-anh-quoc/components/JobSettled'
const ScholarshipIndex = ({lang, isMobile}) => {
  const scholarshipLang = lang.scholarship
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
        isMobile={isMobile}
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
      <UniversitySchools
        lang={scholarshipLang}
        id={IDs.university_schools.id}
      />
      <RegisterStudy
        lang={scholarshipLang}
        id={IDs.register_study.id}
      />
      <VisaStudy
        lang={scholarshipLang}
        id={IDs.visa_study.id}
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
      <RelatedPosts lang={lang} />
    </div>
  )
}

export default ScholarshipIndex
