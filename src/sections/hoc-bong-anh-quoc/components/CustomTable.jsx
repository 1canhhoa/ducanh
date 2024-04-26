<<<<<<< HEAD
import clsx from 'clsx'
import './tbody-content.css'

const CustomTable = ({theads = [], tbodys = []}) => {
  // console.log({tbodys})
  return (
    <div className='border border-primary-50 w-full rounded-[0.87848rem] overflow-hidden mt-[1rem] mb-[1.5rem]'>
=======
import './tbody-content.css'

const CustomTable = ({theads = [], tbodys = []}) => {
  return (
    <div className='border border-primary-50 w-full rounded-[0.87848rem] overflow-hidden'>
>>>>>>> master
      <table className='w-full rounded-[0.87848rem] border-primary-50'>
        <thead className='bg-[linear-gradient(95deg,#2E6BC6_9.83%,#2E6BC6_35.38%,#29A4EA_86.69%)] text-white'>
          <tr>
            {theads.map((thead, index) => {
              return (
                <th
                  key={index}
<<<<<<< HEAD
                  className='text-[1rem] xmd:text-[0.625rem] font-bold leading-[150%] p-[1rem] xmd:first:pl-[0.625rem] xmd:first:pr-[1rem]
                   xmd:px-0 first:text-left md:first:p-[1rem_1rem_1rem_2rem] xmd:last:px-[0.84rem] last:p-[1rem_1rem_1rem_2rem]'
                >
                  <div
                    className=''
                    dangerouslySetInnerHTML={{__html: thead}}
                  ></div>
=======
                  className='text-[1rem] font-bold leading-[150%] p-[1rem] first:text-left first:p-[1rem_1rem_1rem_2rem] last:p-[1rem_1rem_1rem_2rem]'
                >
                  {thead}
>>>>>>> master
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
<<<<<<< HEAD
          {tbodys?.map((tbodyItems, index) => {
            const contents = Object.values(tbodyItems)
            return (
              <tr
                key={index}
                className={clsx({
                  'bg-elevation-10': index % 2 === 1,
                })}
              >
                {contents?.map((tbodyItem, i) => {
                  return (
                    <td
                      className='tbody-content text-center first:text-left p-[1rem] xmd:px-0 xmd:first:pl-[0.625rem] xmd:first:pr-[1rem] md:first:p-[1rem_1rem_1rem_2rem] xmd:last:px-0 last:p-[1rem_1rem_1rem_2rem]
                  xmd:text-[0.75rem] text-[0.875rem] xmd:p-[1rem_1rem_1rem_0.625rem] font-medium text-greyscaletext-70 [&>h3]:font-bold'
=======
          {tbodys.map((tbodyItems, index) => {
            return (
              <tr key={index}>
                {tbodyItems.map((tbodyItem, i) => {
                  return (
                    <td
                      className='tbody-content text-center first:text-left p-[1rem] first:p-[1rem_1rem_1rem_2rem] last:p-[1rem_1rem_1rem_2rem]
                    text-[0.875rem] font-medium text-greyscaletext-70'
>>>>>>> master
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
