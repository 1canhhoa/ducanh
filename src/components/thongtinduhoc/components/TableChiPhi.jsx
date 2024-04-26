<<<<<<< HEAD
export default async function TableChiPhi({text}) {
  return (
    <div className='flex w-full flex-col items-start space-y-[1.5rem] mt-[3.6rem] xmd:mt-[2rem]'>
      <h2 className='sub24 font-bold text-center text-primary-50'>
        {text.information.h2_related_costs.title}
      </h2>
      <div className='w-full border-[1px] border-solid border-primary-50 rounded-[0.75rem]'>
        <table
          id='table_chiphi'
          className=''
        >
          <tbody>
            <tr className='h-[3.875rem] flex rounded-t-[0.75rem] items-center bg-gradient-to-r from-[#2E6BC6] to-[#2E6BC6]'>
              <th className='w-[19.125rem] h-full py-[1rem] pr-[1rem] pl-[1.95rem] flex justify-start items-center body16 font-bold text-white '>
                {text.information.h2_related_costs.title1_table}
              </th>
              <th className='w-[23.6875rem] h-full py-[1rem] p-[1rem] flex justify-start items-center leading-[1.3] body16 font-bold text-white '>
                {text.information.h2_related_costs.title2_table}
              </th>
              <th className='flex-1 h-full py-[1rem] pr-[1rem] pl-[2rem] flex justify-start items-center leading-[1.3] body16 font-bold text-white '>
                {text.information.h2_related_costs.title3_table}
              </th>
            </tr>
            <tr className='flex justify-start items-center'>
              <td className='w-[19.125rem] h-[5.375rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className='w-[14.5625rem] text-primary-50 font-bold text-[0.875rem]'>
                  Hành chính (dịch, điện thoại, phone, fax, gửi thư đến
                  trường...)
                </p>
              </td>
              <td className='w-[23.6875rem] h-[5.375rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className='flex flex-1 justify-center items-center font-normal text-[0.875rem] text-greyscaletext-70'>
                  Tự chi hoặc ủy quyền cho công ty Đức Anh thực hiện
                </p>
              </td>
              <td className='flex-1 h-[5.375rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className='text-greyscaletext-70 font-normal text-[0.875rem] flex-1'>
                  Chi trả cho các loại giao dịch bằng điện thoại, email, thư từ,
                  khác... đến các nơi liên quan đến hồ sơ du học: trường, học
                  sinh, vp visa, bảo trợ, nhà ở, đón, khác...
                </p>
              </td>
            </tr>
            <tr className='flex justify-center items-center'>
              <td className='w-[19.125rem] h-[5.375rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className='w-[14.5625rem] text-primary-50 font-bold text-[0.875rem] '>
                  Hành chính (dịch, điện thoại, phone, fax, gửi thư đến
                  trường...)
                </p>
              </td>
              <td className='w-[23.6875rem] h-[5.375rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className='flex flex-1  justify-center items-center font-normal text-[0.875rem] text-greyscaletext-70'>
                  Tự chi hoặc ủy quyền cho công ty Đức Anh thực hiện
                </p>
              </td>
              <td className='flex-1 h-[5.375rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className=' text-greyscaletext-70 font-normal text-[0.875rem] flex-1'>
                  Chi trả cho các loại giao dịch bằng điện thoại, email, thư từ,
                  khác... đến các nơi liên quan đến hồ sơ du học: trường, học
                  sinh, vp visa, bảo trợ, nhà ở, đón, khác...
                </p>
              </td>
            </tr>
            <tr className='flex justify-center items-center'>
              <td className='w-[19.125rem] h-[5.375rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className='w-[14.5625rem] text-primary-50 font-bold text-[0.875rem] '>
                  Hành chính (dịch, điện thoại, phone, fax, gửi thư đến
                  trường...)
                </p>
              </td>
              <td className='w-[23.6875rem] h-[5.375rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className='flex flex-1 justify-center items-center font-normal text-[0.875rem] text-greyscaletext-70'>
                  Tự chi hoặc ủy quyền cho công ty Đức Anh thực hiện
                </p>
              </td>
              <td className='flex-1 h-[5.375rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className=' text-greyscaletext-70 font-normal text-[0.875rem] flex-1'>
                  Chi trả cho các loại giao dịch bằng điện thoại, email, thư từ,
                  khác... đến các nơi liên quan đến hồ sơ du học: trường, học
                  sinh, vp visa, bảo trợ, nhà ở, đón, khác...
                </p>
              </td>
            </tr>
=======
export default async function TableChiPhi({title, dataAcf, flex = false}) {
  return (
    <div className='flex w-full flex-col items-start space-y-[1.5rem] mt-[3.6rem] xmd:mt-[2rem]'>
      <h2 className='sub24 font-bold text-center text-primary-50 xmd:text-start'>
        {title}
      </h2>
      <div className='xmd:overflow-x-auto w-full border-[1px] border-solid border-primary-50 rounded-[0.75rem]'>
        <table
          id='table_chiphi'
          className='w-full'
        >
          <tbody>
            <tr className='h-[3.875rem] flex rounded-t-[0.75rem] items-center bg-gradient-to-r from-[#2E6BC6] to-[#2E6BC6]'>
              {dataAcf?.table_title?.map((e, index) => (
                <th
                  key={index}
                  className={`${index === 0 && 'w-[19.125rem]'} ${
                    index === 1 && !flex && 'w-[23.6875rem]'
                  } ${
                    flex && 'justify-center'
                  } flex-1 h-full py-[1rem] pr-[1rem] pl-[1.95rem] flex justify-start items-center body16 font-bold text-white`}
                >
                  {e.title_value}
                </th>
              ))}
            </tr>
            {dataAcf?.table_label?.map((e, index) => (
              <tr
                key={index}
                className='flex justify-start items-center odd:bg-[#F8F8F8] even:bg-white last:rounded-b-[0.75rem]'
              >
                {e?.label?.map((item, index) => (
                  <td
                    key={index}
                    className={`${index == 0 && 'w-[19.125rem]'} ${
                      index == 1 && !flex && 'w-[23.6875rem]'
                    } flex-1 h-[5.375rem] py-[1rem] px-[2rem] flex items-center justify-start`}
                  >
                    <p
                      className={`${
                        (!item?.label_value || flex) && 'text-center'
                      } flex-1 text-primary-50 font-bold text-[0.875rem]`}
                    >
                      {item?.label_value ? item?.label_value : '-'}
                    </p>
                  </td>
                ))}
              </tr>
            ))}
>>>>>>> master
          </tbody>
        </table>
      </div>
    </div>
  )
}
