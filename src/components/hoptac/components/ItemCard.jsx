import Image from 'next/image'

export default function ItemCard() {
  return (
    <div className='flex max-md:flex-col justify-between lg:space-x-[4.625rem] w-full'>
      <div className='flex items-start space-x-[0.5rem] max-md:mb-[0.75rem]'>
        <Image
          className='pt-[0.5rem]'
          alt='dot'
          src={'/images/hoptac/dot.png'}
          width={12}
          height={12}
        />
        <span className='sub24 max-md:body16'>Về tuyển sinh du học</span>
      </div>
      <p className='w-[31.375rem] max-md:w-[21.875rem] body16 max-md:body14 max-md:text-greyscaletext-60 flex justify-start text-start max-md:mb-[1rem]'>
        Các bạn có thể hợp tác cùng chúng tôi để tuyển du học sinh: chúng tôi
        welcome các tổ chức và cá nhân giới thiệu học sinh, người thân, người
        quen tới chúng tôi để được tư vấn/ làm hồ sơ du học. Với hơn 20 năm kinh
        nghiệm cùng uy tín cao về chuyên môn, đại diện nhiều trường tốt, làm
        việc có tâm, chúng tôi chắc chắn sẽ hỗ trợ được khách hàng hoặc người
        thân của các bạn. Chúng tôi cũng mong muốn được các bạn chia sẻ cơ hội
        để chúng tôi có thể hợp tác với các bạn trong các lĩnh vực mà các bạn có
        thế mạnh.
      </p>
      <Image
        className='rounded-[0.75rem] max-md:w-[21.9375rem] h-[13.75rem]'
        src={'/images/hoptac/itemCard.png'}
        alt='tuyensinh'
        width={325.482}
        height={204}
      />
    </div>
  )
}
