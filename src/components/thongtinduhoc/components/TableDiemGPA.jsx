'use client'

export default function TableDiemGPA({dataTitle, dataContent}) {
  if (!dataTitle || !dataContent) {
    return
  }
  return (
    <div className='xmd:overflow-x-auto w-full lg:flex justify-center'>
      <table
        id='table_chiphi'
        className='w-[53.125rem] xmd:w-[31.25rem]'
      >
        <tbody>
          <tr className='flex items-center bg-[rgba(0,48,219,0.10)] rounded-t-[0.25rem]'>
            {dataTitle?.map((e, index) => (
              <th
                key={index}
                className={`${
                  dataTitle?.length > 3
                    ? 'xmd:w-[7.8125rem] xmd:h-[3.5rem]  last:xmd:w-[10rem]'
                    : 'flex-1'
                } lg:flex-1 first:border-l-[1px] border-r-[1px] border-y-[1px] border-solid border-[rgba(52,104,205,0.40)] py-[0.625rem] px-[0.75rem] flex justify-start items-center text-[0.875rem] leading-[1.3] font-bold text-[#000]`}
              >
                {e.title_value}
              </th>
            ))}
          </tr>

          {dataContent?.map((e, index) => (
            <tr
              key={index}
              className='flex justify-start items-center last:border-b-[1px] border-solid border-[rgba(52,104,205,0.40)]'
            >
              {e?.label?.map((e, index) => (
                <td
                  key={index}
                  className={`first:border-l-[1px] border-solid border-[rgba(52,104,205,0.40)] max-h-[2.375rem] py-[0.625rem] px-[0.75rem] lg:flex-1 flex flex-col items-start justify-center ${
                    e?.content_value
                      ? 'border-r-[1px] border-t-[1px]'
                      : 'border-r-[1px] h-[2.375rem]'
                  } ${
                    dataTitle?.length > 3
                      ? 'xmd:w-[7.8125rem] last:xmd:w-[10rem]'
                      : 'xmd:flex-1'
                  }`}
                >
                  <p className=' text-[#000] font-medium text-[0.875rem]'>
                    {e?.content_value}
                  </p>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
