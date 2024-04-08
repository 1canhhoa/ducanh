import Image from 'next/image'
const AboutUnitedKingom = ({lang}) => {
  return (
    <section id='about-united-kingom'>
      <div className='w-full h-[32.6rem] rounded-xl bg-primary-10 flex flex-col md:flex-row'>
        <div className='flex-1'>
          <div className='relative w-full h-full'>
            <h1
              className='absolute top-[1.5rem] left-[2rem] uppercase text-white text-[2.1rem]
       font-extrabold leading-[120%] w-[10.5rem]'
            >
              United kingdom
            </h1>
            <Image
              src={'/images/hoc-bong-anh-quoc/UNITED KINGDOM.png'}
              width={160}
              height={320}
              alt='hoc-bong-anh-quoc'
              className='absolute bottom-[2rem] left-[13.25rem] w-[16rem] h-[32.6rem] object-contain'
            ></Image>
          </div>
        </div>
        <div className='flex-1 my-[0.8rem] mr-[0.8rem] p-[1.5rem] rounded-lg bg-white'>
          <p className='flex items-baseline text-greyscaletext-50 text-[1rem] italic font-normal leading-[150%]'>
            <Image
              src={'/images/hoc-vien-duc-anh/Group 1000005614.svg'}
              width={10}
              height={10}
              alt='hoc-bong-anh-quoc'
              className='w-[0.75rem] h-[0.75rem] mr-[0.5rem]'
            ></Image>
            {lang.nationInfor}
          </p>
          <ul>
            <li className='flex items-center'>
              <h3 className='w-[13rem]'>{lang.capital.key}</h3>
              <span>{lang.capital.value}</span>
            </li>
          </ul>
        </div>
      </div>
      <p className='mt-[1.5rem] text-[1rem] font-medium leading-[150%] text-greyscaletext-60'>
        Chỉ tính riêng về giáo dục, ngay lập tức sau Brexit, nước Anh đã quay
        lại chính sách cho phép sinh viên quốc tế ở lại làm việc 02 năm sau khi
        học xong & định cư khi đủ điều kiện, đồng thời, nới lỏng phần nào các
        chính sách về giáo dục, di trú… thuận lợi hơn cho du học sinh quốc tế
        vào.
      </p>
      <p className='mt-[1rem] text-[1rem] font-medium leading-[150%] mb-[1.5rem] text-greyscaletext-60'>
        Với việc rời Cộng đồng châu Âu vào ngày 1/2/2020 nước Anh trở thành một
        quốc gia độc lập theo đuổi các mục tiêu kinh tế, chính trị, giáo dục,
        quân sự, ngoại giao… mà không bị ràng buộc bởi các quy định chung của
        cộng đồng châu Âu như trước đây. Chính sách phát triển đất nước trở nên
        linh hoạt và có vẻ hiệu quả hơn, các quyết định được đưa ra nhanh và kịp
        thời hơn…
      </p>
      <div className='py-[2rem] px-[1.5rem] border border-primary-30 rounded-xl'>
        <p className='text-greyscaletext-60 text-[0.875rem] font-semibold leading-[160%] mb-[1.5rem]'>
          Vui lòng tham khảo các thông tin trên Wikipedia về nước Anh như dưới
          đây:
        </p>
        <ul className='flex [&>li]:whitespace-nowrap'>
          <div className='w-[calc(60%)] flex'>
            <li className='ml-[1.5rem] mr-auto text-primary-50 font-feature-settings text-[0.875rem] font-semibold leading-[150%]'>
              <ul className='[&>li]:mb-[1rem] list-disc'>
                <li>
                  <a href=''>Bản đồ nước Anh</a>
                </li>
                <li>
                  <a href=''>Bản đồ nước Anh</a>
                </li>
                <li>
                  <a href=''>Bản đồ nước Anh</a>
                </li>
                <li className='!mb-0'>
                  <a href=''>Bản đồ nước Anh</a>
                </li>
              </ul>
            </li>
            <li className='ml-[1.5rem] mr-auto text-primary-50 font-feature-settings text-[0.875rem] font-semibold leading-[150%]'>
              <ul className='[&>li]:mb-[1rem] list-disc'>
                <li>
                  <a href=''>Khoa học và công nghệ tại Anh</a>
                </li>
                <li>
                  <a href=''>Khoa học và công nghệ tại Anh</a>
                </li>
                <li>
                  <a href=''>Khoa học và công nghệ tại Anh</a>
                </li>
                <li className='!mb-0'>
                  <a href=''>Khoa học và công nghệ tại Anh</a>
                </li>
              </ul>
            </li>
          </div>
          <div className='flex-1 flex'>
            <li className='ml-[1.5rem] mr-auto text-primary-50 font-feature-settings text-[0.875rem] font-semibold leading-[150%]'>
              <ul className='[&>li]:mb-[1rem] list-disc'>
                <li>
                  <a href=''>Bản đồ nước Anh</a>
                </li>
                <li>
                  <a href=''>Bản đồ nước Anh</a>
                </li>
                <li>
                  <a href=''>Các chính sách y tế tại Anh</a>
                </li>
                <li className='!mb-0'>
                  <a href=''>Bản đồ nước Anh</a>
                </li>
              </ul>
            </li>
            <li className='ml-[1.5rem] text-primary-50 font-feature-settings text-[0.875rem] font-semibold leading-[150%]'>
              <ul className='[&>li]:mb-[1rem] list-disc'>
                <li>
                  <a href=''>Bản đồ nước Anh</a>
                </li>
                <li>
                  <a href=''>Bản đồ nước Anh</a>
                </li>
                <li>
                  <a href=''>Bản đồ nước Anh</a>
                </li>
                <li className='!mb-0'>
                  <a href=''>Bản đồ nước Anh</a>
                </li>
              </ul>
            </li>
          </div>
        </ul>
      </div>
    </section>
  )
}

export default AboutUnitedKingom
