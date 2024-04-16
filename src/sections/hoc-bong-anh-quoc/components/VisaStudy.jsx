import Image from 'next/image'
import SectionWrapper from './SectionWrapper'
import Structure1 from './CheckListBox'
import Structure2 from './Structure2'
import Paragraph from './Paragraph'
const TrainingInstitutes = ({lang, id}) => {
  return (
    <SectionWrapper
      id={id}
      title={lang.h2_visa_study}
    >
      <p className='text-[1rem] font-semibold leading-[170%] text-primary-50 my-[1.25rem]'>
        Như đã đề cập, chương trình phổ thông tại Anh có thể 13 năm (A-level)
        hoặc 12 năm (IB). Kết thúc 2 chương trình này, học sinh sẽ học lên năm
        thứ nhất đại học ở bất cứ nước nào trên thế giới. Chi tiết các chương
        trình như dưới đây:
      </p>
      <Structure2
        h3Text={'1. Danh sách các trường phổ thông tại Anh'}
        marginTop={false}
      >
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
      <Structure2 h3Text={'2. Thông tin chung về chương trình phổ thông'}>
        <Paragraph
          text='Chương trình đào tạo nghề được dạy ở các trường phổ thông trung học song song với chương trình phổ thông, hoặc trong các trường cao đẳng chuyên đào tạo nghề và cấp các loại bằng cấp:
Bằng tổng hợp/ kết hợp (Combining qualifications). Sinh viên có thể học kết hợp bằng nghề và chứng chỉ AS hoặc A level, hoặc kết hợp với các chương trình đào tạo khác.'
        />
      </Structure2>
    </SectionWrapper>
  )
}

export default TrainingInstitutes
