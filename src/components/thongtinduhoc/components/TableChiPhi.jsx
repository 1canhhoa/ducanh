export default async function TableChiPhi({text}) {
  return (
    <div className='flex w-full flex-col items-start space-y-[1.5rem] xmd:space-y-[1rem] mt-[3.6rem] xmd:mt-[2rem]'>
      <h2 className='sub24 font-bold text-center text-primary-50'>
        {text.information.h2_related_costs.title}
      </h2>
      <div className='max-md:overflow-auto w-full border-[1px] border-solid border-primary-50 rounded-[0.75rem]'>
        <table
          id='table_chiphi'
          className=' lg:mr-[1.5rem]'
        >
          <tbody>
            <tr className='h-[3.875rem] flex rounded-t-[0.75rem] items-center bg-gradient-to-r from-[#2E6BC6] to-[#2E6BC6]'>
              <th className='max-md:hidden max-md:border-[1px] max-md:border-solid max-md:border-white lg:w-[19.125rem] h-full max-md:py-[2.13333rem] max-md:px-[3.2rem] py-[1rem] pr-[1rem] pl-[1.95rem] flex justify-start items-center body16 max-md:text-[3.73333rem] max-md:text-center font-bold text-white '>
                {text.information.h2_related_costs.title1_table}
              </th>
              <th className='max-md:w-[14.13rem] max-md:border-[1px] max-md:border-solid max-md:border-white lg:w-[23.6875rem] h-full max-md:py-[2.13333rem] max-md:px-[3.2rem] py-[1rem] p-[1rem] flex justify-start items-center leading-[1.3] body16 font-bold text-white '>
                {text.information.h2_related_costs.title2_table}
              </th>
              <th className='max-md:w-[16.26667rem] max-md:border-[1px] max-md:border-solid max-md:border-white lg:w-[34rem] h-full max-md:py-[2.13333rem] max-md:px-[3.2rem] py-[1rem] pr-[1rem] pl-[2rem] flex justify-start items-center leading-[1.3] body16 font-bold text-white '>
                {text.information.h2_related_costs.title3_table}
              </th>
            </tr>
            <tr className='flex justify-center items-center'>
              <td className='w-[19.125rem] max-md:w-[14.13rem] max-md:h-[11.2rem] h-[5.375rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className='w-[14.5625rem] text-primary-50 font-bold text-[0.875rem] max-md:text-[3.2rem] max-md:text-greyscaletext-40'>
                  Hành chính (dịch, điện thoại, phone, fax, gửi thư đến
                  trường...)
                </p>
              </td>
              <td className='max-md:w-[16.26667rem] w-[23.6875rem] max-md:h-[11.2rem] h-[5.375rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className='flex flex-1 max-md:hidden max-md:text-[3.2rem] max-md:text-greyscaletext-40 justify-center items-center font-normal text-[0.875rem] text-greyscaletext-70'>
                  Tự chi hoặc ủy quyền cho công ty Đức Anh thực hiện
                </p>
              </td>
              <td className='w-[34rem] max-md:w-[25.46667rem] max-md:h-[11.2rem] h-[5.375rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className='max-md:text-[3.2rem] max-md:text-greyscaletext-40 text-greyscaletext-70 font-normal text-[0.875rem] flex-1'>
                  Chi trả cho các loại giao dịch bằng điện thoại, email, thư từ,
                  khác... đến các nơi liên quan đến hồ sơ du học: trường, học
                  sinh, vp visa, bảo trợ, nhà ở, đón, khác...
                </p>
              </td>
            </tr>
            <tr className='flex justify-center items-center'>
              <td className='w-[19.125rem] max-md:w-[14.13rem] max-md:h-[11.2rem] h-[5.375rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className='w-[14.5625rem] text-primary-50 font-bold text-[0.875rem] max-md:text-[3.2rem] max-md:text-greyscaletext-40'>
                  Hành chính (dịch, điện thoại, phone, fax, gửi thư đến
                  trường...)
                </p>
              </td>
              <td className='max-md:w-[16.26667rem] w-[23.6875rem] max-md:h-[11.2rem] h-[5.375rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className='flex flex-1 max-md:hidden max-md:text-[3.2rem] max-md:text-greyscaletext-40 justify-center items-center font-normal text-[0.875rem] text-greyscaletext-70'>
                  Tự chi hoặc ủy quyền cho công ty Đức Anh thực hiện
                </p>
              </td>
              <td className='w-[34rem] max-md:w-[25.46667rem] max-md:h-[11.2rem] h-[5.375rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center border-r-[1px] border-solid border-primary-50'>
                <p className='max-md:text-[3.2rem] max-md:text-greyscaletext-40 text-greyscaletext-70 font-normal text-[0.875rem] flex-1'>
                  Chi trả cho các loại giao dịch bằng điện thoại, email, thư từ,
                  khác... đến các nơi liên quan đến hồ sơ du học: trường, học
                  sinh, vp visa, bảo trợ, nhà ở, đón, khác...
                </p>
              </td>
            </tr>
            <tr className='flex justify-center items-center'>
              <td className='w-[19.125rem] max-md:w-[14.13rem] max-md:h-[11.2rem] h-[5.375rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className='w-[14.5625rem] text-primary-50 font-bold text-[0.875rem] max-md:text-[3.2rem] max-md:text-greyscaletext-40'>
                  Hành chính (dịch, điện thoại, phone, fax, gửi thư đến
                  trường...)
                </p>
              </td>
              <td className='max-md:w-[16.26667rem] w-[23.6875rem] max-md:h-[11.2rem] h-[5.375rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className='flex flex-1 max-md:hidden max-md:text-[3.2rem] max-md:text-greyscaletext-40 justify-center items-center font-normal text-[0.875rem] text-greyscaletext-70'>
                  Tự chi hoặc ủy quyền cho công ty Đức Anh thực hiện
                </p>
              </td>
              <td className='w-[34rem] max-md:w-[25.46667rem] max-md:h-[11.2rem] h-[5.375rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className='max-md:text-[3.2rem] max-md:text-greyscaletext-40 text-greyscaletext-70 font-normal text-[0.875rem] flex-1'>
                  Chi trả cho các loại giao dịch bằng điện thoại, email, thư từ,
                  khác... đến các nơi liên quan đến hồ sơ du học: trường, học
                  sinh, vp visa, bảo trợ, nhà ở, đón, khác...
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
