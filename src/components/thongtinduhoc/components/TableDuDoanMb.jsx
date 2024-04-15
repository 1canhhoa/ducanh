import Image from 'next/image'

export default function TableDuDoanMb({text}) {
  return (
    <div className='flex w-full flex-col items-start space-y-[1rem] mt-[2rem]'>
      <h2 className='sub18 font-bold text-center text-primary-50'>
        {text.information.h2_predicted_costs.title}
      </h2>
      <div className='w-[21.9375rem] h-[14.9375rem] rounded-[0.375rem] border-[1px] border-solid border-[rgba(19,43,125,0.20)] bg-white'>
        <table
          id='table_dudoan'
          className='w-full'
        >
          <tbody>
            <tr className='h-[2.9375rem] w-[21.9375rem] flex rounded-t-[0.75rem] items-center bg-gradient-to-r from-[#2E6BC6] to-[#29A4EA]'>
              <th className='py-[1rem] px-[1rem] flex items-center justify-center'>
                {/* table phi */}
                <p className='body14 text-white font-normal'>
                  Chi phí tại nước:
                </p>
                <p className='body14 text-white font-bold'>Anh</p>
              </th>
            </tr>
            <tr className='flex flex-col justify-center items-start space-y-[1rem] pl-[1.13rem]'>
              <td className='flex items-center justify-start'>
                <p className='body14 w-[8.5rem] text-greyscaletext-50 font-bold'>
                  Ngoại ngữ/tuần
                </p>
                <span className='body14 font-bold text-greyscaletext-50 mr-[1rem]'>
                  :
                </span>
                <p className='flex-1 text-greyscaletext-50 font-medium body14'>
                  400-550
                </p>
              </td>
              <td className='flex items-center justify-start'>
                <p className='body14 w-[8.5rem] text-greyscaletext-50 font-bold'>
                  THPT/năm
                </p>
                <span className='body14 font-bold text-greyscaletext-50 mr-[1rem]'>
                  :
                </span>
                <p className='flex-1 text-greyscaletext-50 font-medium body14'>
                  12.000-30.000
                </p>
              </td>
              <td className='flex items-center justify-start'>
                <p className='body14 w-[8.5rem] text-greyscaletext-50 font-bold'>
                  Cao đẳng/năm
                </p>
                <span className='body14 font-bold text-greyscaletext-50 mr-[1rem]'>
                  :
                </span>
                <p className='flex-1 text-greyscaletext-50 font-medium body14'>
                  14.000-22.000
                </p>
              </td>
              <td className='flex items-center justify-start'>
                <p className='body14 w-[8.5rem] text-greyscaletext-50 font-bold'>
                  ĐH - Sau ĐH/năm
                </p>
                <span className='body14 font-bold text-greyscaletext-50 mr-[1rem]'>
                  :
                </span>
                <p className='flex-1 text-greyscaletext-50 font-medium body14'>
                  14.000-22.000
                </p>
              </td>
              <td className='flex items-center justify-start'>
                <p className='body14 w-[8.5rem] text-greyscaletext-50 font-bold'>
                  Ăn ở/năm
                </p>
                <span className='body14 font-bold text-greyscaletext-50 mr-[1rem]'>
                  :
                </span>
                <p className='flex-1 text-greyscaletext-50 font-medium body14'>
                  14.000-22.000
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='w-full flex justify-center items-center'>
        <button className='h-[3.3125rem] flex flex-col items-center space-y-[0.375rem]'>
          <div className='w-[0.98719rem] flex justify-center items-center h-[1.75rem] xem_them'>
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
      <div className='flex flex-col items-start justify-center mt-[1.5rem]'>
        <span className='w-[21.875rem] text-[0.875rem] font-medium leading-[1.7] text-primary-50'>
          {text.information.h2_predicted_costs.note1}
        </span>
        <span className='w-[21.875rem] text-[0.875rem] font-medium leading-[1.7] text-primary-50'>
          {text.information.h2_predicted_costs.note2}
        </span>
      </div>
    </div>
  )
}
