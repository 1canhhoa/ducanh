import {Button} from '@/components/ui/button'
import CategoryItem from './components/CategoryItem'

const recruitmentDetailsIndex = ({lang, res}) => {
  const pageLang = lang.recruitmentDetails
  //   console.log(res)
  return (
    <main className='flex-1 xmd:mx-[0.75rem] xmd:mt-[2rem]'>
      <div className='xmd:text-primary-50 text-secondary-50 xmd:text-[1.75rem] text-[2rem] font-bold leading-[130%] tracking-[-0.04rem]'>
        {res?.title?.rendered}
      </div>
      {/* <ul className='py-[1.5rem] xmd:pt-[0.75rem] xmd:pb-[0] xmd:border-none border-b border-greyscaletext-5'>
        <li className='text-[0.875rem] font-semibold leading-[normal] text-greyscaletext-40'>
          <strong className='text-greyscaletext-80'>Job location</strong>:
          Hanoi/ Hochiminh city{' '}
        </li>
        <li className='text-[0.875rem] font-semibold leading-[normal] text-greyscaletext-40'>
          <strong className='text-greyscaletext-80'>Quantity</strong>: Hanoi 1 |
          HCMC 1
        </li>
        <li className='text-[0.875rem] font-semibold leading-[normal] text-greyscaletext-40'>
          <strong className='text-greyscaletext-80'>Job field</strong>:
          Education / Administration
        </li>
        <li className='text-[0.875rem] font-semibold leading-[normal] text-greyscaletext-40'>
          <strong className='text-greyscaletext-80'>Level</strong>: Staff
        </li>
        <li className='text-[0.875rem] font-semibold leading-[normal] text-greyscaletext-40'>
          <strong className='text-greyscaletext-80'>Working time</strong>:
          Working hours or overtime if required
        </li>
      </ul> */}
      {res.acf.categories?.map((category, index) => (
        <CategoryItem
          data={category}
          key={index}
        />
      ))}
      <p
        className='text-greyscaletext-50 xmd:pt-[1rem] xmd:mb-[1rem] xmd:mt-[1.5rem] xmd:border-t border-greyscaletext-5
       text-[1rem] font-medium leading-[160%] my-[1.5rem]'
      >
        Contact: HR Department- Email:{' '}
        <a
          href='mailto:managermark@ducanh.edu.vn'
          className='text-greyscaletext-80 font-semibold'
        >
          managermark@ducanh.edu.vn
        </a>
      </p>
      <Button
        className='w-[15.1rem] p-[0.75rem_1.25rem] rounded-[0.625rem] bg-primary-50
       text-greyscaletext-5 xmd:text-[0.875rem] text-[1rem] xmd:font-bold font-semibold
        xmd:leading-[120%] leading-[150%] xmd:w-full xmd:uppercase xmd:mb-[2rem]'
      >
        Ứng tuyển
      </Button>
      <h3 className='xmd:hidden text-primary-60 mt-[24rem] text-[1.5rem] font-bold leading-[normal] text-center mb-[1.5rem]'>
        Công ty Tư vấn Du học và Dịch thuật Đức Anh
      </h3>
    </main>
  )
}

export default recruitmentDetailsIndex
