import Image from 'next/image'

export default function QuyDoiDiemGPA() {
  return (
    <section className='w-full '>
      <div className='flex flex-col items-start space-y-[2rem] lg:w-[76.4375rem] mx-auto'>
        <h1 className='title relative w-fit mb-[2.05rem]'>
          Chuẩn bị cho du học
          <div className='size-[0.625rem] bg-secondary-40 absolute bottom-[0.625rem] right-[-1.125rem]'></div>
        </h1>
        <ul className='flex flex-col items-start space-y-[1rem]'>
          <li className='text-[1rem] font-medium text-greyscaletext-60 leading-[1.5]'>
            Những bạn muốn chuyển đổi thang điểm 10 sang GPA để du học hoặc xin
            học bổng tại một số quốc gia trên thế giới thì có thể tham khảo bảng
            dưới đây. Đa số các trường Đại học tại Việt Nam hiện nay cũng sử
            dụng thang điểm quy đổi này.
          </li>
          <li className='text-[1rem] font-medium text-greyscaletext-60 leading-[1.5]'>
            1. Quy đổi thang điểm GPA tại Mỹ
          </li>
          <li className='text-[1rem] font-medium text-greyscaletext-60 leading-[1.5]'>
            Tại Mỹ, thang điểm thường được dùng để tính điểm GPA là thang điểm
            4. Dưới đây là bảng quy đổi điểm GPA tại Mỹ mà bạn có thể tham khảo.
          </li>
        </ul>
        <Image
          alt='ảnh quy đổi GPA'
          src={'/images/thongtinduhoc/imgGpa.jpg'}
          width={1223}
          height={647.81}
        />
        <ul className='flex flex-col items-start space-y-[1rem]'>
          <li className='text-[1rem] font-medium text-greyscaletext-60 leading-[1.5]'>
            2. Quy đổi thang điểm GPA tại Anh
          </li>
          <li className='text-[1rem] font-medium text-greyscaletext-60 leading-[1.5]'>
            Tại Anh, thang điểm được quốc gia này sử dụng phổ biến là thang điểm
            IGCSE hay A-level. Điểm khác biệt giữa hai thang điểm này là thang
            điểm IGCSE được dùng để đánh giá năng lực học tập của học viên từ A*
            đến G còn thang điểm A-level là từ A* đến E.
          </li>
          <li className='text-[1rem] font-medium text-greyscaletext-60 leading-[1.5]'>
            3. Quy đổi thang điểm GPA tại Canada
          </li>
          <li className='text-[1rem] font-medium text-greyscaletext-60 leading-[1.5]'>
            Đối với những bạn đang có ý định du học Canada, việc hiểu rõ cách
            tính điểm GPA tại quốc gia này là rất cần thiết. Ở Canada, cách tính
            điểm GPA đều có sự khác nhau tùy vào từng khu vực.
          </li>
          <li className='text-[1rem] font-medium text-greyscaletext-60 leading-[1.5]'>
            Bảng quy đổi thang điểm GPA tại Ontario
          </li>
          <li className='text-[1rem] font-medium text-greyscaletext-60 leading-[1.5]'>
            Ontario là nơi tập trung của 30 trường đại học và cao đẳng hàng đầu
            Canada, có thể kể đến như Đại học Toronto, Đại học Queen, Đại học
            Tây Ontario,… Muốn chuẩn bị hồ sơ du học tại những ngôi trường này
            thật hoàn hảo, việc đầu tiên bạn cần phải biết đó là cách tính điểm
            GPA. Dưới đây là bảng quy đổi điểm tại tỉnh bang Ontario
          </li>
          <li className='text-[1rem] font-medium text-greyscaletext-60 leading-[1.5]'>
            Bảng quy đổi thang điểm GPA ở British Columbia
          </li>
          <li className='text-[1rem] font-medium text-greyscaletext-60 leading-[1.5]'>
            British Columbia luôn luôn mang đến cho cho học viên môi trường học
            tập thực tế, chất lượng. Hệ thống giáo dục tại tỉnh bang này rất
            tiên tiến và nhận được sự công nhận của toàn thế giới. Dưới đây là
            bảng quy đổi điểm tại tỉnh bang British Columbia
          </li>
        </ul>
      </div>
    </section>
  )
}
