import Structure1 from './CheckListBox'
import SectionWrapper from './SectionWrapper'
import RelatedPosts from '@/components/BaiVietLienQuan/RelatedPosts'
import SuggestedSection from './SuggestedSection'
import './page-content.css'

const Reason = ({
  lang,
  id = 'reason',
  res,
  tags = [],
  dataRelativePosts = {},
  suggestLinks = [],
}) => {
  const topChecklistBlocks = []
  const bottomChecklistBlocks = []
  if (res?.acf?.check_list_block) {
    res?.acf?.check_list_block?.forEach((clb) => {
      if (clb?.position === 'top') {
        topChecklistBlocks.push(clb)
      } else {
        bottomChecklistBlocks.push(clb)
      }
    })
  }
  return (
    <SectionWrapper
      id={id}
      title={lang.h2_reason}
      shortMargin
      className='mt-0'
    >
      {topChecklistBlocks.length > 0 &&
        topChecklistBlocks.map((topChecklistBlock, index) => (
          <Structure1
            key={index}
            h3Text={topChecklistBlock.heading_text}
            listText={topChecklistBlock?.items}
            className='mb-[1.5rem]'
          />
        ))}
      <div
        className='page-content-renderer text-greyscaletext-60 text-[1rem] font-medium leading-[1.5]'
        dangerouslySetInnerHTML={{
          __html: res?.content?.rendered || '',
        }}
      ></div>
      {bottomChecklistBlocks.length > 0 &&
        bottomChecklistBlocks.map((bottomChecklistBlock, index) => (
          <Structure1
            key={index}
            h3Text={bottomChecklistBlock.heading_text}
            listText={bottomChecklistBlock?.items}
            className='mb-[1.5rem]'
          />
        ))}

      <SuggestedSection
        className='mt-[5.27rem]'
        tags={tags || []}
        suggests={suggestLinks || []}
      />
      <RelatedPosts
        lang={lang}
        data={dataRelativePosts || {}}
        excludePostID={res?.id}
      />
    </SectionWrapper>
  )
}

export default Reason
