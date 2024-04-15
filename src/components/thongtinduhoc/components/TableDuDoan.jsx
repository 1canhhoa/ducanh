export default function TableDuDoan({text}) {
  return (
    <div className='flex w-full flex-col items-start space-y-[1.5rem] mt-[3.6rem]'>
      <h2 className='sub24 font-bold text-center text-primary-50'>
        {text.information.h2_predicted_costs.title}
      </h2>
      <div className='xmd:overflow-x-auto w-full border-[1px] border-solid border-primary-50 rounded-[0.75rem]'>
        <table
          id='table_dudoan'
          className='w-full'
        >
          <tbody>
            <tr className='h-[3.875rem] flex rounded-t-[0.75rem] items-center bg-gradient-to-r from-[#2E6BC6] to-[#2E6BC6]'>
              <th className='w-[10.75rem] h-full py-[1rem] pr-[1rem] pl-[1.95rem] flex justify-start items-center body16 font-bold text-white '>
                {text.information.h2_predicted_costs.title1_table}
              </th>
              <th className='w-[11.875rem] h-full py-[1rem] p-[1rem] flex justify-center items-center leading-[1.3] body16 font-bold text-white '>
                {text.information.h2_predicted_costs.title2_table}
              </th>
              <th className='w-[11.875rem] h-full py-[1rem] pr-[1rem] pl-[2rem] flex justify-center items-center leading-[1.3] body16 font-bold text-white '>
                {text.information.h2_predicted_costs.title3_table}
              </th>
              <th className='w-[11.875rem] h-full py-[1rem] pr-[1rem] pl-[2rem] flex justify-center items-center leading-[1.3] body16 font-bold text-white '>
                {text.information.h2_predicted_costs.title3_table}
              </th>
              <th className='w-[11.875rem] h-full py-[1rem] pr-[1rem] pl-[2rem] flex justify-center items-center leading-[1.3] body16 font-bold text-white '>
                {text.information.h2_predicted_costs.title3_table}
              </th>
              <th className='flex-1 xmd:w-[11.875rem] h-full py-[1rem] pr-[1rem] pl-[2rem] flex justify-center items-center leading-[1.3] body16 font-bold text-white '>
                {text.information.h2_predicted_costs.title3_table}
              </th>
            </tr>
            <tr className='flex justify-center items-center'>
              <td className='w-[10.75rem] h-[3.5rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className='flex-1 w-full text-primary-50 font-bold text-[0.875rem]'>
                  Anh
                </p>
              </td>
              <td className='w-[11.875rem] h-[3.5rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className='flex flex-1 justify-center items-center font-normal text-[0.875rem] text-greyscaletext-70'>
                  400-550
                </p>
              </td>
              <td className='w-[11.875rem] h-[3.5rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className='text-greyscaletext-70 font-normal text-[0.875rem] flex-1'>
                  12.000-30.000
                </p>
              </td>
              <td className='w-[11.875rem] h-[3.5rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className='text-greyscaletext-70 font-normal text-[0.875rem] flex-1'>
                  12.000-30.000
                </p>
              </td>
              <td className='w-[11.875rem] h-[3.5rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className='text-greyscaletext-70 font-normal text-[0.875rem] flex-1'>
                  12.000-30.000
                </p>
              </td>
              <td className='flex-1 xmd:w-[11.875rem] h-[3.5rem] py-[1rem] px-[2rem] flex flex-col items-center justify-center'>
                <p className='text-greyscaletext-70 font-normal text-[0.875rem] flex-1'>
                  12.000-30.000
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex xmd:w-full flex-col items-start justify-center mt-[1.5rem]'>
        <span className='w-[76.875rem] xmd:w-full text-[0.875rem] font-medium leading-[1.7] text-primary-50'>
          {text.information.h2_predicted_costs.note1}
        </span>
        <span className='w-[76.875rem] xmd:w-full text-[0.875rem] font-medium leading-[1.7] text-primary-50'>
          {text.information.h2_predicted_costs.note2}
        </span>
      </div>
    </div>
  )
}
