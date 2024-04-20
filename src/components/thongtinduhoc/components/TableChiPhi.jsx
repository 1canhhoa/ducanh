export default async function TableChiPhi({title, dataAcf, flex = false}) {
  return (
    <div className='flex w-full flex-col items-start space-y-[1.5rem] mt-[3.6rem] xmd:mt-[2rem]'>
      <h2 className='sub24 font-bold text-center text-primary-50'>{title}</h2>
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
          </tbody>
        </table>
      </div>
    </div>
  )
}
