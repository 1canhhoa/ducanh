import Image from 'next/image'
import SectionWrapper from './SectionWrapper'
import Structure1 from './Structure1'
import Structure2 from './Structure2'
import Paragraph from './Paragraph'
const EducationSystem = ({lang}) => {
  return (
    <SectionWrapper
      id='education-system'
      h2Text={lang.h2_education_system}
    >
      <div className='bg-primary-40 xmd:h-[33.4rem] h-[18rem] rounded-xl px-[3rem] py-[2.3rem] mt-[1.25rem] mb-[1.5rem] relative overflow-hidden'>
        <p className='w-[30.1rem] text-white text-[1.25rem] font-semibold leading-[150%]'>
          Giáo dục phổ cập tại Anh dành cho tất cả trẻ em cho tới 16 tuổi. Anh
          có hai hệ thống giáo dục Anh quốc khác biệt về khóa học đào tạo và
          bằng cấp được cấp, tuy nhiên hai hệ thống này tương thích với nhau. Hệ
          thống thứ nhất được dùng tại England, xứ Wales và Bắc Ireland. Hệ
          thống thứ hai được dùng tại Scotland.
        </p>
        <picture>
          <source
            media='(max-width:767px)'
            srcset='/images/hoc-bong-anh-quoc/en_flag_mobile.jpg'
          />
          <Image
            src={'/images/hoc-bong-anh-quoc/cơ anh 1.png'}
            width={4000}
            height={2000}
            priority
            alt='hoc-bong-anh-quoc'
            className='h-[18rem] w-[30rem] top-0 right-[-0.5rem] object-cover absolute'
          ></Image>
        </picture>
      </div>
      <Structure1
        h3Text={'Về cơ bản học sinh sẽ học:'}
        listText={[
          'Phổ thông: 13 năm nếu học chương trình A level (đa số) và 12 năm nếu học chương trình IB ',
          'Cao đẳng: 1-2 năm',
          'Cử nhân: 3-4-5 năm',
          'Thạc sỹ: 1 năm',
          'Tiến sỹ: 3-5 năm',
        ]}
        separatorClass='mb-[0.5rem]'
      />
      <Structure1
        h3Text={'Về cơ bản học sinh sẽ học:'}
        listText={[
          'Phổ thông: 13 năm nếu học chương trình A level (đa số) và 12 năm nếu học chương trình IB ',
          'Cao đẳng: 1-2 năm',
          'Cử nhân: 3-4-5 năm',
          'Thạc sỹ: 1 năm',
          'Tiến sỹ: 3-5 năm',
        ]}
        separatorClass='mb-[0.5rem] mt-[1.5rem]'
      />
      <Structure2 h3Text={'1. Phổ thông'}>
        <Paragraph
          text='Chương trình mẫu giáo dành cho các học sinh từ 3-4 tuổi;
Chương trình tiểu học dành cho các học sinh từ 5-11 tuổi;
Chương trình Trung học cơ sở (GCSE) dành cho các học sinh từ 12-16 tuổi;
A-levels. A level là sự kế tiếp về học thuật từ GCSE, chương trình kéo dài 2 năm, gồm nhiều môn học được công nhận rộng rãi để vào học cử nhân tại Anh. Năm đầu A level được gọi là AS và  hết năm AS học sinh có thể chọn rẽ ngang sang học chuyên ngành, hoặc học lên năm 2 của  A level để thi lấy bằng A level;
AS: AS là chương trình năm thứ nhất của A level. Sau khi học hết năm 1 A level, học sinh thi lấy chứng chỉ AS. Thường các học sinh có định hướng rõ ràng về ngành nghề tương lai sẽ chọn học tập trung các môn liên quan đến chuyên ngành dự định học trong 01 năm, thi lấy chứng chỉ AS và chuyển sang học chuyên môn sâu thay vì học lên 1 năm với các môn học chung chung để lấy bằng A level;
IB: Bằng trung học phổ thông quốc tế (International Baccalaureate Diploma- IB Diploma), là sự kế tiếp sau IGCSE. Đây là chương trình 2 năm, tương đương A level, được công nhận rộng rãi để vào các trường đại học Anh Quốc và trên thế giới. Có trên 200 trường đào tạo IB tại Anh;
Cao đẳng Cambridge tiền đại học. Là chương trình thiết kế bởi Cambridge International Assessment, được giảng dạy trong một số trường và có giá trị như A level, giúp chuẩn bị kiến thức cho du học sinh học lên đại học;
Standard Grade, Highers và Advanced Highers (Scotland). Sinh viên quốc tế biết đến chứng chỉ National Qualifications (Standard Grade, Highers và Advanced Highers). Sinh viên có thể thi lấy chứng chỉ này tại các trường cao đẳng, các trường nội trú tư tại Anh, hoặc sinh viên có thể học các chương trình dự bị đại học để liên thông lên đại học;
Dự bị đại học và các khóa học liên thông lên đại học. Là các chương trình 1 năm, được đào tạo bởi các trường đại học, cao đẳng, phổ thông công lập hoặc tư thục, nhằm chuẩn bị cho sinh viên các kiến thức cần thiết để học lên đại học, chẳng hạn kiến thức tiếng Anh, phương pháp học, các môn cơ bản và cơ sở cho chuyên ngành sẽ học ở bậc đại học;
Bằng tổng hợp/ kết hợp (Combining qualifications). Sinh viên có thể học kết hợp bằng nghề và chứng chỉ AS hoặc A level, hoặc kết hợp với các chương trình đào tạo khác.'
        />
      </Structure2>
      <Structure2 h3Text={'2. Cao đẳng'}>
        <Paragraph
          text='Chương trình đào tạo nghề được dạy ở các trường phổ thông trung học song song với chương trình phổ thông, hoặc trong các trường cao đẳng chuyên đào tạo nghề và cấp các loại bằng cấp:
Bằng tổng hợp/ kết hợp (Combining qualifications). Sinh viên có thể học kết hợp bằng nghề và chứng chỉ AS hoặc A level, hoặc kết hợp với các chương trình đào tạo khác.'
        />
      </Structure2>
    </SectionWrapper>
  )
}

export default EducationSystem
