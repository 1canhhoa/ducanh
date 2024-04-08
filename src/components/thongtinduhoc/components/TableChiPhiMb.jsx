import Image from 'next/image'

export default async function TableChiPhiMb({text}) {
  return (
    <div className='flex w-full flex-col items-start space-y-[1.5rem] xmd:space-y-[1rem] mt-[3.6rem] xmd:mt-[2rem]'>
      <h2 className='sub24 xmd:sub18 font-bold text-center text-primary-50'>
        {text.information.h2_related_costs.title}
      </h2>
      <div className='w-full border-[1px] border-solid border-[rgba(19,43,125,0.20)] rounded-[0.75rem]'>
        <table
          id='table_chiphi'
          className='h-[10.875rem] w-[21.9375rem]'
        >
          <tbody>
            <tr className='h-[6.3125rem] w-full flex rounded-t-[0.75rem] pt-[1.19rem] pl-[1rem] pr-[1.06rem] items-center bg-gradient-to-r from-[#2E6BC6] to-[#29A4EA]'>
              <th className='w-full flex flex-col h-full items-start justify-center'>
                {/* trường phí */}
                <span className='w-[15.875rem] body14 font-bold text-white uppercase whitespace-nowrap text-ellipsis overflow-hidden'>
                  Hành chính (dịch, điện thoại, phone, fax, gửi thư đến
                  trường...)
                </span>
                {/* trường mô tả */}
                <span className='w-[19.875rem] h-[2.4375rem] body12 font-normal leading-[1.5] whitespace-nowrap text-ellipsis overflow-hidden text-white'>
                  Chi trả cho các loại giao dịch bằng điện thoại, email, thư từ,
                  khác... đến các nơi liên quan đến hồ sơ d
                </span>
              </th>
            </tr>
            <tr className='flex justify-center items-center'>
              <td className='w-[19.125rem] h-[5.375rem] flex flex-col items-center justify-center'>
                {/* trường nội tại */}
                <p className='w-[19.125rem] h-[2.625rem] text-greyscaletext-70 font-normal text-[0.875rem]'>
                  <span className='mb14 text-greyscaletext-70 font-bold'>
                    Nộp tại:
                  </span>
                  Hành chính (dịch, điện thoại, phone, fax, gửi thư đến
                  trường...)
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='w-full flex justify-center items-center'>
        <button className='h-[3.3125rem] flex flex-col items-center space-y-[0.375rem]'>
          <div className='w-[0.98719rem] xem_them flex justify-center items-center h-[1.75rem]'>
            <Image
              alt='xem thêm chi phí'
              src={'/images/thongtinduhoc/doubleDown.svg'}
              width={15.795}
              height={15.795}
            />
          </div>
          <span className='body12 text-primary-50 text-center font-bold leading-[1.6]'>
            XEM THÊM
          </span>
        </button>
      </div>
    </div>
  )
}
