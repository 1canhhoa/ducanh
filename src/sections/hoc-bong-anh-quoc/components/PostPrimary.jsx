import Image from 'next/image'
import SectionWrapper from './SectionWrapper'
import CheckListBox from './CheckListBox'
import SuggestedSection from './SuggestedSection'
import RelatedPosts from '@/components/BaiVietLienQuan/RelatedPosts'
import clsx from 'clsx'
import './page-content.css'
const PostPrimary = ({
  lang,
  id = 'section ' + new Date().toLocaleDateString(),
  res,
  tags = [],
  dataRelativePosts = {},
  suggestLinks = [],
  title = 'Post Title',
}) => {
  // console.log(res)
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
  const bannerInlineStyle = {}
  if (res?.acf?.banner_backgroud_color) {
    bannerInlineStyle.backgroundColor = res?.acf?.banner_backgroud_color
  }
  return (
    <SectionWrapper
      id={id}
      title={title}
    >
      {res?.acf?.banner_thumbnail && res?.acf?.banner_text && (
        <div
          style={bannerInlineStyle}
          className={clsx(
            `xmd:h-[33.4rem] h-[18rem] rounded-xl xmd:px-[0.84rem] xmd:py-[0.81rem] px-[3rem]
        py-[2.3rem] mt-[1.25rem] mb-[1.5rem] relative overflow-hidden`,
            {
              'bg-primary-50': !res?.acf?.banner_backgroud_color,
            },
          )}
        >
          <p
            className='xmd:w-full w-[30.1rem] text-white xmd:text-[1.125rem] text-[1.25rem] font-semibold xmd:leading-[160%]
         leading-[150%]'
          >
            {res?.acf?.banner_text}
          </p>
          <picture>
            <source
              media='(max-width:767px)'
              srcSet={
                res?.acf?.banner_thumbnail_mobile || res?.acf?.banner_thumbnail
              }
            />
            <Image
              src={res?.acf?.banner_thumbnail}
              width={4000}
              height={2000}
              priority
              alt='hoc-bong-anh-quoc'
              className='xmd:h-[16.75rem] h-[18rem] xmd:w-[27.3rem] xmd:bottom-0 md:top-0 xmd:right-0 right-[-0.5rem] 
            object-cover absolute'
            ></Image>
          </picture>
        </div>
      )}
      {topChecklistBlocks.length > 0 &&
        topChecklistBlocks.map((topChecklistBlock, index) => (
          <CheckListBox
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
          <CheckListBox
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
        listItems={dataRelativePosts || []}
        excludePostID={res?.id}
      />
    </SectionWrapper>
  )
}

export default PostPrimary
