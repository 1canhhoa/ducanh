import {Button} from '@/components/ui/button'
import CategoryItem from './components/CategoryItem'
import RecruitmentForm from './components/RecruitmentForm'

const recruitmentDetailsIndex = ({lang, res}) => {
  const pageLang = lang.recruitmentDetails
  // console.log(res)
  return (
    <main className='flex-1 md:ml-[1.5rem] xmd:mx-[0.75rem] xmd:mt-[2rem] '>
      <div className='text-secondary-50 xmd:text-[1.75rem] text-[2rem] font-bold leading-[130%] tracking-[-0.04rem]'>
        {res?.title?.rendered}
      </div>
      {res?.acf?.categories?.map((category, index) => (
        <CategoryItem
          data={category}
          key={index}
        />
      ))}
      <div
        className='text-greyscaletext-50 xmd:pt-[1rem] xmd:mb-[1rem] xmd:mt-[1.5rem] xmd:border-t border-greyscaletext-5
       text-[1rem] font-medium leading-[160%] my-[1.5rem]'
        dangerouslySetInnerHTML={{__html: res.content?.rendered}}
      ></div>
      <Button
        className='w-[15.1rem] p-[0.75rem_1.25rem] rounded-[0.625rem] bg-primary-50
       text-greyscaletext-5 xmd:text-[0.875rem] text-[1rem] xmd:font-bold font-semibold
        xmd:leading-[120%] leading-[150%] xmd:w-full xmd:uppercase xmd:mb-[2rem]'
      >
        Ứng tuyển
      </Button>
      <RecruitmentForm lang={lang} />
    </main>
  )
}

export default recruitmentDetailsIndex
