'use client'

<<<<<<< HEAD
import {useEffect, useState} from 'react'
=======
import {useState} from 'react'
>>>>>>> master
import ScholarshipItem from './ScholarshipItem'
import SectionSearch from './SectionSearch'
import SectionTabs from './SectionTabs'
import SectionWrapper from './SectionWrapper'
<<<<<<< HEAD
import Structure1 from './CheckListBox'
import SuggestedSection from './SuggestedSection'
import RelatedPosts from '@/components/BaiVietLienQuan/RelatedPosts'
import getData from '@/lib/getData'
import './page-content.css'

const ScholarshipEngland = ({
  lang,
  id = 'scholarship-england',
  scholarshipTypes = [],
  scholarships = [],
  tags = [],
  suggestLinks = [],
  dataRelativePosts = {},
}) => {
  // console.log(scholarshipTypes)
  const acceptSearchTabIndexs = [0, 1, 2]
  const [tabInfor, setTabInfor] = useState({
    currentIndex: 0,
    // slug: scholarshipTypes?.[0].slug,
    api_slug: scholarshipTypes?.[0].api_slug,
  })
  const [resArray, setResArray] = useState([])
  const [postContent, setPostContent] = useState(null)
  const tabCallBack = (tabItem, index) => {
    setTabInfor({
      currentIndex: index,
      // slug: tabItem?.slug,
      api_slug: tabItem?.acf?.api_slug,
    })
  }
  const [excludePostID, setExcludePostID] = useState('')
  const [topChecklistBlocks, setTopChecklistBlocks] = useState([])
  const [middleChecklistBlocks, setMiddleChecklistBlocks] = useState([])
  const [bottomChecklistBlocks, setBottomChecklistBlocks] = useState([])

  useEffect(() => {
    if ([0, 1].includes(tabInfor.currentIndex)) {
      setExcludePostID('')
    } else if (postContent?.id) {
      setExcludePostID(postContent?.id)
    }
    if (
      tabInfor.currentIndex === 1 &&
      tabInfor.api_slug?.includes('group-scholarship') &&
      resArray?.length <= 0
    ) {
      ;(async function () {
        const res = await getData('/wp-json/wp/v2' + tabInfor?.api_slug)
        // console.log(res)
        setResArray(res)
      })()
    }
    if (tabInfor.currentIndex > 1 && !postContent) {
      ;(async function () {
        const res = await getData('/wp-json/wp/v2' + tabInfor?.api_slug)

        // console.log(res)
        if (res?.acf?.check_list_block?.length > 0) {
          const topCLBs = []
          const middleCLBs = []
          const bottomCLBs = []
          res?.acf?.check_list_block?.forEach((checkListBlockItem) => {
            if (checkListBlockItem?.position === 'top') {
              topCLBs.push(checkListBlockItem)
            }
            if (checkListBlockItem?.position === 'middle') {
              middleCLBs.push(checkListBlockItem)
            }
            if (checkListBlockItem?.position === 'bottom') {
              bottomCLBs.push(checkListBlockItem)
            }
          })
          if (topCLBs.length > 0) {
            setTopChecklistBlocks(topCLBs)
          }
          if (middleCLBs.length > 0) {
            setMiddleChecklistBlocks(middleCLBs)
          }
          if (bottomCLBs.length > 0) {
            setBottomChecklistBlocks(bottomCLBs)
          }
        }
        setExcludePostID(res.id)
        setPostContent(res)
      })()
    }
  }, [tabInfor.api_slug])

=======
const TEMP_TAB = [
  {
    id: 0,
    title: 'Trường Đại học (Cử nhân, Thạc sỹ, Tiến sỹ)',
    slug: 'university',
    search: true,
  },
  {
    id: 1,
    title: 'Dự bị Đại học, Cao đẳng',
    slug: 'preparation',
    search: true,
  },
  {
    id: 2,
    title: 'Lưu ý quan trọng về trường học',
    slug: 'important-note',
  },
]
const ScholarshipEngland = ({lang, id = 'scholarship-england'}) => {
  const [search, setSearch] = useState({
    enabled: true,
    slug: TEMP_TAB[0].slug,
  })
  const tabCallBack = (tabItem) => {
    setSearch({
      enabled: tabItem.search,
      slug: tabItem.slug,
    })
  }
>>>>>>> master
  return (
    <SectionWrapper
      id={id}
      lang={lang}
<<<<<<< HEAD
      title={lang.scholarship.h2_scholarship_en}
      mobileMargin={false}
    >
      <SectionTabs
        items={scholarshipTypes}
        className='mt-[1.25rem] xmd:mt-[0.75rem]'
        selectChange={tabCallBack}
      />
      {acceptSearchTabIndexs.includes(tabInfor.currentIndex) && (
        <SectionSearch className='mt-[1.25rem] xmd:mt-[0] xmd:mx-[0.75rem]' />
      )}
      {tabInfor.currentIndex === 0 && (
        <>
          {scholarships?.map((scholarship, index) => (
            <ScholarshipItem
              key={index}
              index={index}
              data={scholarship}
            />
          ))}
          <span
            className='xmd:mx-[0.75rem] xmd:text-[1.25rem] text-[1.5rem] mt-[1.5rem] inline-block text-primary-50 xmd:font-semibold font-bold xmd:leading-[150%]
           leading-[1.95rem] xmd:tracking-[-0.0125rem]'
          >
            Chi tiết học bổng của hơn 100 trường đại học khác xem 
            <a
              href='#'
              className='underline'
              target='_blank'
            >
              tại đây
            </a>
          </span>
        </>
      )}
      {tabInfor.currentIndex === 1 &&
        resArray?.length > 0 &&
        resArray.map((groupScholarship, index) => (
          <div
            key={groupScholarship?.id}
            className='xmd:mx-[0.75rem]'
          >
            <h2 className='mt-[1.5rem] text-primary-50 text-[1.5rem] font-bold leading-[1.95]'>
              {index + 1}.{groupScholarship?.name}
            </h2>
            <ul>
              {groupScholarship?.acf?.childrens.map((scholarship, index) => (
                <ScholarshipItem
                  key={index}
                  index={index}
                  data={scholarship}
                  format='word'
                />
              ))}
            </ul>
          </div>
        ))}
      {tabInfor.currentIndex > 1 && (
        <>
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
            className='page-content-renderer xmd:mx-[0.75rem] text-greyscaletext-60 text-[1rem] font-medium leading-[1.5]'
            dangerouslySetInnerHTML={{
              __html: postContent?.content?.rendered || '',
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
        </>
      )}
      <SuggestedSection
        className='mt-[5.27rem]'
        tags={tags}
        suggests={suggestLinks}
      />
      <RelatedPosts
        lang={lang}
        data={dataRelativePosts}
        excludePostID={excludePostID}
      />
=======
      title={lang.h2_scholarship_en}
      mobileMargin={false}
    >
      <SectionTabs
        items={TEMP_TAB}
        className='mt-[1.25rem] xmd:mt-[0.75rem]'
        selectChange={tabCallBack}
      />
      {search.enabled && (
        <SectionSearch className='mt-[1.25rem] xmd:mt-[0] xmd:mx-[0.75rem]' />
      )}
      {Array.from({length: 4}).map((item, index) => (
        <ScholarshipItem
          key={index}
          data={{
            title: index + 1 + '. Northumbria University:',
            href: '#',
            details: [
              'Học bổng £3,000 – Northumbria Undergraduate Global Scholarship: dành cho bậc cử nhân ở năm học đầu tiên, yêu cầu: đủ điểm đầu vào của khóa học;',
              'Học bổng £2,000 – Northumbria Postgraduate Global Scholarship: dành cho bậc thạc sỹ, yêu cầu: đủ điểm đầu vào của khóa học;',
              'Học bổng 20% tự động – Northumbria University Alumni Discount: Dành cho các sinh viên đã từng học ở đại học Northumbria, áp dụng cho bậc thạc sỹ tín chỉ hoặc thạc sỹ nghiên cứu.',
            ],
          }}
        />
      ))}
      <span className='xmd:mx-[0.75rem] xmd:text-[1.25rem] text-[1.5rem] mt-[1.5rem] inline-block text-primary-50 xmd:font-semibold font-bold xmd:leading-[150%] leading-[1.95rem] xmd:tracking-[-0.0125rem]'>
        Chi tiết học bổng của hơn 100 trường đại học khác xem 
        <a
          href='#'
          className='underline'
          target='_blank'
        >
          tại đây
        </a>
      </span>
>>>>>>> master
    </SectionWrapper>
  )
}

export default ScholarshipEngland
