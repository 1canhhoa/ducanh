'use client'
import RelatedPosts from '@/components/BaiVietLienQuan/RelatedPosts'
import CustomTable from './CustomTable'
import SectionTabs from './SectionTabs'
import SectionWrapper from './SectionWrapper'
import './job-settled.css'
import {useState} from 'react'
import SuggestedSection from './SuggestedSection'

const JobSettled = ({
  lang,
  id = 'job-settled',
  res,
  relativePosts = [],
  tags = [],
  suggestLinks = [],
}) => {
  // console.log({res})
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const splitContents =
    res?.acf?.list_content?.[activeTabIndex]?.content.split('{{table}}')
  // console.log(splitContents)
  const selectChangeCallBack = (tabIndex) => {
    setActiveTabIndex(tabIndex)
  }
  return (
    <SectionWrapper
      title={lang?.scholarship?.h2_job_settled}
      id={id}
      mobileMargin={false}
    >
      <SectionTabs
        tabLabels={res?.acf?.list_content.map(
          (contentItem) => contentItem.tab_label,
        )}
        selectChange={selectChangeCallBack}
        className='mt-[1.25rem] xmd:mt-[1.06rem] mb-[2.25rem] xmd:mb-[0.75rem]'
      />
      <div className='xmd:mx-[0.75rem]'>
        <h2 className='hidden md:block text-[1.5rem] font-bold leading-[130%] text-primary-50 mb-[0.5rem]'>
          {res?.acf?.list_content?.[activeTabIndex]?.tab_label}
        </h2>
        <div
          className='content-wrapper text-[1rem] font-medium leading-[1.5rem] text-greyscaletext-60'
          dangerouslySetInnerHTML={{
            __html: splitContents[0],
          }}
        ></div>
        {/* render table (if it existed) */}
        {res?.acf?.tables?.length > 0 &&
          res?.acf?.tables.map((table, index) => {
            if (parseInt(table.tab_index) - 1 == activeTabIndex) {
              return (
                <CustomTable
                  key={index}
                  theads={table?.header_labels?.map((label) => label?.label)}
                  tbodys={table?.body_rows}
                />
              )
            }
          })}
        <div
          className='content-wrapper text-[1rem] font-medium leading-[1.5rem] text-greyscaletext-60'
          dangerouslySetInnerHTML={{
            __html: splitContents[1],
          }}
        ></div>
        <SuggestedSection
          className='mt-[2.25rem] xmd:mt-[3rem]'
          tags={tags || []}
          suggests={suggestLinks || []}
        />
        <RelatedPosts
          lang={lang}
          listItems={relativePosts}
        />
      </div>
    </SectionWrapper>
  )
}

export default JobSettled
