import Image from 'next/image'
import Structure1 from './Structure1'
import Structure2 from './Structure2'
import Paragraph from './Paragraph'
import SectionWrapper from './SectionWrapper'

const Reason = ({lang, id}) => {
  return (
    <SectionWrapper
      id={id}
      h2Text={lang.h2_reason}
      shortMargin
    >
      <Structure1
        separatorClass={'mt-[0.75rem] mb-[1rem]'}
        h3Text={
          'Du học Anh luôn hấp dẫn sinh viên quốc tế bởi các lý do vừa truyền thống, vừa hiện đại:'
        }
        listText={[
          'Anh Quốc là cái nôi tiếng Anh của thế giới',
          'Chất lượng giáo dục Anh đạt chất lượng cao & bằng cấp được công nhận trên toàn cầu',
          'Nền giáo dục đa dạng và mang tính hỗ trợ',
          'Thời gian học đại học, thạc sỹ tại Anh ngắn (giúp tiết kiệm thời gian và chi phí)',
          'Anh là cửa ngõ châu Âu',
          'Chính sách visa Anh thân thiện (rõ ràng, minh bạch)',
          'Sinh viên được ở lại làm việc 2-3  năm sau khi tốt nghiệp',
          'Sinh viên được định cư tại Anh khi đủ điều kiện',
        ]}
      />
      <Structure2 h3Text={'1. Anh quốc là cái nôi tiếng Anh của thế giới'}>
        <Paragraph
          text={`Anh quốc là quê hương của tiếng Anh, là nơi mà từ đây những người Anh
          đem tiếng Anh cùng nền văn hóa, khoa học… đến Mỹ, Úc, New Zealand,
          Canada và nhiều nước khác để lập nghiệp. Tại các quốc gia này, ngày
          nay, tiếng Anh trở thành quốc ngữ và cùng với người Anh thì người Mỹ,
          Úc, New Zealand, Canada trở thành những người bản xứ nói tiếng Anh.`}
        />
        <Paragraph
          text={`Anh quốc là quê hương của tiếng Anh, là nơi mà từ đây những người Anh
        đem tiếng Anh cùng nền văn hóa, khoa học… đến Mỹ, Úc, New Zealand,
        Canada và nhiều nước khác để lập nghiệp. Tại các quốc gia này, ngày
        nay, tiếng Anh trở thành quốc ngữ và cùng với người Anh thì người Mỹ,
        Úc, New Zealand, Canada trở thành những người bản xứ nói tiếng Anh.`}
        />
      </Structure2>
      <Structure2
        h3Text={
          '2. Chất lượng giáo dục Anh đạt chất lượng cao & bằng cấp được công nhận trên toàn cầu'
        }
        bottomImage={{
          enabled: true,
          src: '/images/hoc-bong-anh-quoc/image 108873.jpg',
          width: 700,
          height: 400,
          className: 'w-full',
        }}
      >
        <Paragraph
          text={`Anh áp dụng tiêu chuẩn chất lượng chặt chẽ cho các chương trình đào tạo từ bậc thấp nhất: tiền phổ thông đến bậc cao nhất là đại học. Tiêu chí đánh giá chất lượng đào tạo được cập nhật thường xuyên, chất lượng được kiểm tra, giám sát chặt chẽ bởi cơ quan quản lý chất lượng giáo dục quốc gia Anh, nơi chuyên đánh giá, xếp loại một cách toàn diện các đơn vị đào tạo. Liên quan đến việc đào tạo cho du học sinh quốc tế, một lần nữa các trường, viện đào tạo Anh lại bị giám sát chặt chẽ hơn: các trường được phân loại A, B… trong thứ hạng được phép hay không được phép bảo trợ trước bộ di trú để nhận đào tạo sinh viên quốc tế.`}
        />
        <Paragraph
          text={`Hệ thống giáo dục Anh quốc đã thu hút nhiều du học sinh theo học và nhiều người trong số họ đã trở thành những nhà lãnh đạo trong các lĩnh vực quan trọng như: tài chính, chính trị, tư tưởng, hòa bình, nghiên cứu khoa học… trên toàn cầu.`}
        />
        <Paragraph
          text={`Bằng cấp của Anh luôn được công nhận và đánh giá cao trên toàn cầu. Với tấm bằng đại học tại Anh Quốc, du học sinh có thể học thêm lên hoặc xin việc làm tại bất cứ nước nào trên thế giới. Những cựu du học sinh Anh Quốc cũng là những người được giới tuyển dụng ưa chuộng, do họ có kiến thức cơ bản tốt, kỷ luật làm việc cao và kĩ năng mềm đảm bảo cần thiết để hỗ trợ cho công việc thành công.`}
        />
      </Structure2>
      <Structure2 h3Text={'3. Nền giáo dục đa dạng và mang tính hỗ trợ'}>
        <Paragraph
          text={`Đa dạng về cơ sở đào tạo: Anh có số lượng lớn các cơ sở đào tạo: hàng ngàn trường phổ thông công lập và tư thục dạng nội trú hoặc bán trú, hàng mấy trăm trường đào tạo nghề công lập và tư thục, từ dạng chỉ đào tạo lý thuyết đến dạng vừa học vừa làm; 115 trường đại học công lập và hàng trăm trường đại học tư thục khác;[]
          Đa dạng về ngành nghề đào tạo: các trường đào tạo nghề và đại học Anh Quốc cung cấp hàng ngàn khóa học cho sinh viên bản xứ và du học sinh, từ các ngành mang tính thời sự, hot nhất cho đến các ngành học quý tộc, hiếm người học;[]
          Đa dạng về hình thức đào tạo: các trường Anh đào tạo sinh viên theo nhiều dạng: chính quy hoặc tại chức, lên lớp hoặc online, đào tạo độc lập và toàn phần tại Anh hoặc liên kết đào tạo giữa Anh và các nước khác;[]
          Chương trình đào tạo hỗ trợ cho sinh viên quốc tế: hầu hết các trường tại Anh đều có chương trình dự bị đại học, dự bị sau đại học để giúp sinh viên quốc tế hoàn thiện, hoàn chỉnh kiến thức của mình và bắt nhịp tốt với kiến thức và phương pháp học tập tại Anh;[]
          Dịch vụ hỗ trợ sinh viên quốc tế: các trường tại Anh đều có văn phòng sinh viên quốc tế, các khu vực và thậm chí ở cấp chính phủ, có các tổ chức hỗ trợ sinh viên quốc tế, hoạt động theo chương trình nhằm hỗ trợ du học sinh trong các vấn đề học tập, ăn ở, visa, tài chính, pháp luật và các vấn đề liên quan khác.`}
        />
      </Structure2>
      <Structure2 h3Text={'4. Thời gian học đại học tại Anh ngắn'}>
        <Paragraph
          text={`So với nhiều nước khác, thời gian học tại Anh được coi là ngắn: bậc cử nhân được đào tạo trong 3 năm và bậc thạc sỹ được đào tạo trong 01 năm. Điều này giúp các du học sinh tiết kiệm thời gian, tiền bạc, ra trường sớm và sớm tiếp cận các cơ hội việc làm, thu nhập cao.`}
        />
      </Structure2>
      <Structure2 h3Text={'5. Anh là cửa ngõ châu Âu'}>
        <Paragraph
          text={`Từ Anh, du học sinh có thể du lịch đến các nước châu Âu khác ngay vào dịp cuối tuần hoặc các kỳ nghỉ hè bằng những phương tiện tiện lợi và rẻ nhất: tầu cao tốc, tàu thủy, ôtô, máy bay…. Với thẻ sinh viên quốc tế, du học sinh được giảm giá nhiều loại dịch vụ trong khi du lịch: đi lại, vé vào cửa công viên, bảo tàng, các công trình văn hóa và thậm chí, giảm tiền ăn. Đây đương nhiên là cơ hội rất tốt cho du học sinh khám phá thêm những nền văn minh và văn hóa mới, trau dồi kiến thức cho cuộc sống, học tập và làm việc về sau của mình.`}
        />
      </Structure2>
      <Structure2
        h3Text={'6. Chính sách visa Anh rõ ràng, minh bạch'}
        href='(Link tham khảo: www.gov.uk/student-visa)'
      >
        <Paragraph
          text={`Anh là nước đầu tiên trong khối thịnh vượng chung áp dụng chính sách xét cấp visa dựa trên hệ thống tính điểm, theo đó, năng lực học tập của học sinh được đề cao và yêu cầu chứng minh năng lực tài chính mang tính thiết thực hơn và thời gian xét hồ sơ xin visa du học Anh cắt giảm xuống chỉ còn 2 tuần. Điều này tạo điều kiện cho các du học sinh có nhu cầu du học thực sự có cơ hội được học tập tại Anh và cảm thấy thoải mái khi thực hiện hồ sơ xin học, xin visa du học Anh.`}
        />
      </Structure2>
      <Structure2
        h3Text={'7. Sinh viên được ở lại 2-3 năm làm việc sau khi tốt nghiệp'}
        href={`(Link tham khảo: www.ukcisa.org.uk/Information–Advice/Working/Working-after-studies)`}
      >
        <Paragraph
          text={`Chính sách Visa Anh mới được Thủ tướng công bố cho phép du học sinh ở lại quốc gia này trong vòng 2-3 năm. Cụ thể, từ năm 2021, sinh viên quốc tế tốt nghiệp bậc đại học, sau đại học được ở lại 2 năm, sinh viên tốt nghiệp bậc Tiến sĩ được ở lại 3 năm. Chiến lược này được cho rằng nhằm thúc đẩy sự thu hút của du học Anh, coi xứ sở sương mù là điểm đến du học tuyệt vời.
          Sinh viên có 2-3 năm để tìm việc làm, nếu sở hữu được công việc tốt và nhận được lời mời từ nhà tuyển dụng, sinh viên sẽ dễ dàng hơn rất nhiều để có working visa và cơ hội làm việc lâu dài tại Anh.`}
        />
      </Structure2>
      <Structure2
        h3Text={'8. Sinh viên được định cư khi đủ điều kiện'}
        href={`(Link tham khảo: homeofficemedia.blog.gov.uk/2019/10/14/fact-sheet-graduate-immigration-route/)`}
      >
        <Paragraph
          text={`Để được định cư tại Anh, bạn sẽ phải đáp ứng được khá nhiều điều kiện khắt khe như điều kiện việc làm, độ tuổi, thời gian cư trú… Dựa vào ngành nghề, thời gian dự định ở lại mà bạn có thể cân nhắc một trong những hạng mục visa dưới đây.[]
          Tier 2 Visa: Người lao động có trình độ[]
          Tier 2 (General): Dành cho đối tượng đi làm việc tại Anh theo thư mời, do tính chất công việc không tìm kiếm được người phù hợp từ nguồn lao động trong nước. Loại visa này cũng dành cho những người mong muốn sang Anh làm công việc thay thế tạm thời.[]
          Tier 2 (Intra Company Transfer Worker): Dành cho những người được thuyên chuyển từ một công ty nước ngoài sang làm công việc đòi hỏi trình độ cao ở chi nhánh của công ty này tại Anh.[]
          Tier 5 Visa: Người lao động trẻ và lao động tạm thời[]
          Tier 5 (Government Authorised Exchange): đây là visa dành cho những đối tượng làm việc theo chương trình trao đổi giữa 2 chính phủ: Dành cho người đến Anh làm việc theo chương trình đã được thông qua với mục đích chia sẻ kiến thức, kinh nghiệm và ứng dụng.[]
          Tier 5 (Youth Mobility Scheme): Dành cho thanh niên một số nước tham gia chương trình này muốn khám phá cuộc sống tại Anh.[]
          Tier 5 (Creative Sporting Visas): Dành cho người sang Anh làm việc hoặc tham gia vào hoạt động thể thao, giải trí. Gồm vận động viên, ca sĩ, diễn viên, người làm về nghệ thuật, nghệ sĩ sáng tạo… trong thời gian 12 tháng[]
          Tier 5 (International Agreement): Dành cho những đối tượng đến Anh làm việc theo hợp đồng cung cấp dịch vụ được quy định trong Luật Quốc tế.[]
          Tier 5 (Religious Worker): Dành cho người làm các công việc như thuyết giáo và giúp việc trong các tổ chức tôn giáo.[]
          Tier 5 (Charity Worker): Dành cho người sang Anh làm công tác từ thiện không hưởng lương.`}
        />
        <span className='text-primary-50 text-[1rem] font-medium leading-[150%] xmd:mt-0 mt-[1.5rem] inline-block'>
          Vui lòng{' '}
          <a
            href='#'
            className='underline mx-[0.05rem]'
          >
            liên hệ
          </a>{' '}
          với chúng tôi để biết thêm thông tin chi tiết.
        </span>
      </Structure2>
    </SectionWrapper>
  )
}

export default Reason
