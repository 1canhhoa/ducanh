<<<<<<< HEAD
const ScholarshipItem = ({data, index, format = 'digit'}) => {
  // console.log(data)
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase()
  const formattedIndex = alphabet[index]
  return (
    <article className='xmd:mb-[1.25rem] mb-[1.5rem] xmd:mx-[0.75rem]'>
      <h3 className='xmd:text-[1.125rem] text-[1.5rem] font-bold xmd:leading-[1.8] leading-[130%] text-primary-50'>
        {format === 'digit' ? index + 1 : formattedIndex}.
        {data.title?.rendered || data.post_title}
=======
const ScholarshipItem = ({data}) => {
  return (
    <article className='xmd:mt-[1.25rem] mt-[1.5rem] xmd:mx-[0.75rem]'>
      <h3 className='xmd:text-[1.125rem] text-[1.5rem] font-bold xmd:leading-[1.8] leading-[130%] text-primary-50'>
        {data.title}
>>>>>>> master
      </h3>
      <span className='text-[1rem] inline-block xmd:my-[0.75rem] my-[0.5rem] font-medium leading-[150%] text-greyscaletext-60'>
        Xem chi tiết:{' '}
        <a
<<<<<<< HEAD
          href={data.acf?.detail_link || data.guid}
=======
          href={data.href}
>>>>>>> master
          className='underline text-primary-50'
          target='_blank'
        >
          tại đây
        </a>
      </span>
<<<<<<< HEAD
      <div
        className='scholarship-item [&>ul>li]:list-disc [&>ul>li]:ml-[2rem]'
        dangerouslySetInnerHTML={{
          __html: data.content?.rendered || data.post_content,
        }}
      ></div>
      {/* <ul>
=======
      <ul>
>>>>>>> master
        {data.details.map((detailItem, index) => (
          <li
            key={index}
            className='list-disc ml-[2rem] content xmd:text-greyscaletext-30 text-greyscaletext-60'
          >
            {detailItem}
          </li>
        ))}
<<<<<<< HEAD
      </ul> */}
=======
      </ul>
>>>>>>> master
    </article>
  )
}

export default ScholarshipItem
