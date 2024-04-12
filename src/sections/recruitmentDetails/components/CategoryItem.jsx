const CategoryItem = ({data}) => {
  return (
    <div className='py-[1.5rem] xmd:pb-0 xmd:pt-[2rem] xmd:border-none border-b border-greyscaletext-5'>
      <h2 className='text-primary-40 text-[1.125rem] font-bold leading-[160%] mb-[0.5rem]'>
        {data?.category}
      </h2>
      <div
        className='recruitment-desc [&>ul>li]:list-disc [&>ul>li]:ml-[2rem]'
        dangerouslySetInnerHTML={{__html: data?.description}}
      ></div>
    </div>
  )
}

export default CategoryItem
