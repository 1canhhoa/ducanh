import './tbody-content.css'

const CustomTable = ({theads = [], tbodys = []}) => {
  return (
    <div className='border border-primary-50 w-full rounded-[0.87848rem] overflow-hidden'>
      <table className='w-full rounded-[0.87848rem] border-primary-50'>
        <thead className='bg-[linear-gradient(95deg,#2E6BC6_9.83%,#2E6BC6_35.38%,#29A4EA_86.69%)] text-white'>
          <tr>
            {theads.map((thead, index) => {
              return (
                <th
                  key={index}
                  className='text-[1rem] font-bold leading-[150%] p-[1rem] first:text-left first:p-[1rem_1rem_1rem_2rem] last:p-[1rem_1rem_1rem_2rem]'
                >
                  {thead}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {tbodys.map((tbodyItems, index) => {
            return (
              <tr key={index}>
                {tbodyItems.map((tbodyItem, i) => {
                  return (
                    <td
                      className='tbody-content text-center first:text-left p-[1rem] first:p-[1rem_1rem_1rem_2rem] last:p-[1rem_1rem_1rem_2rem]
                    text-[0.875rem] font-medium text-greyscaletext-70'
                      key={i}
                      dangerouslySetInnerHTML={{__html: tbodyItem}}
                    ></td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default CustomTable
