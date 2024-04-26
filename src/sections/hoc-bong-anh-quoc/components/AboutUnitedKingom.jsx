'use client'
import clsx from 'clsx'
import Image from 'next/image'
import {useState} from 'react'
import './AboutUnitedKingdom.css'
import SuggestedSection from './SuggestedSection'
import RelatedPosts from '@/components/BaiVietLienQuan/RelatedPosts'
import FindModal from '@/components/FindModal/FindModal'

const AboutUnitedKingom = ({
  lang,
  res,
  id,
  isMobile,
  tags = [],
  suggestLinks = [],
  relatedPosts = [],
}) => {
  // console.log(res)
  const chunkedLinks = ((array, chunkSize) => {
    const result = []
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize))
    }
    return result
  })(res?.acf?.links || [], 4)
  // console.log({chunkedLinks})
  const [formShow, setFormShow] = useState(true)
  const [expand, setExpand] = useState(false)
  const handleViewMore = () => {
    setExpand(true)
  }
  return (
    <section id={id}>
      <div className='w-full xmd:h-[calc(100vh-3.625rem)] h-[44.5rem] md:h-max rounded-xl bg-primary-10 flex flex-col md:flex-row'>
        <div className='flex-1'>
          <div className='relative w-full h-full'>
            {!formShow && (
              <h1
                className='absolute top-[0.94rem] left-[0.75rem] md:top-[1.5rem] md:left-[2rem] uppercase text-white text-[1.5rem] md:text-[2.1rem]
       font-extrabold leading-[120%] w-[7.6rem] md:w-[10.5rem]'
              >
                United kingdom
              </h1>
            )}
            <picture>
              <source
                media='(max-width:767px)'
                srcSet='/images/hoc-bong-anh-quoc/united_kingdom_mobile.png'
              />
              <Image
                src={'/images/hoc-bong-anh-quoc/UNITED KINGDOM.png'}
                width={160}
                height={320}
                alt='hoc-bong-anh-quoc'
                className='absolute bottom-[0] md:top-[-1rem] left-[6.88rem] md:left-[13.25rem] w-[9.61063rem] h-[18.81263rem] md:w-[16.68731rem] 
              md:h-[32.6rem] object-contain'
              ></Image>
            </picture>
            <Image
              loading='lazy'
              className='absolute bottom-[1.94rem] right-[2.94rem] w-[23.0625rem] h-[4.5rem]'
              alt='ảnh button tìm đường'
              src={'/images/homepage/button-timduong.png'}
              width={370}
              height={75}
            />
            <Image
              loading='lazy'
              className='kinh-loop absolute bottom-[1.5rem] right-[-1.5rem] w-[2.46225rem] h-[2.61319rem]'
              alt='ảnh kính loop'
              src={'/images/homepage/search-timduong.png'}
              width={40}
              height={44}
            />
            <div className='absolute z-50 bottom-[2.8rem] left-[4.94rem] text-white text-center text-[0.75rem] not-italic font-semibold leading-[150%] tracking-[-0.0075rem] uppercase'>
              Tìm trường cùng Đức Anh
            </div>
            {/* <button
              className='bg-white p-[2rem] text-black absolute bottom-[1rem] right-[1.5rem]'
              onClick={() => {
                setFormShow((prev) => !prev)
              }}
            >
              Expand - Show Form
            </button> */}
          </div>
        </div>

        {formShow ? (
          <FindModal
            lang={lang}
            className='!ml-0 mr-[1.64rem] my-[1.5rem]'
          />
        ) : (
          <div className='flex-1 my-[0.8rem] mx-[0.75rem] md:ml-0 mr-[0.8rem] p-[1.5rem] xmd:p-[1rem] rounded-lg bg-white'>
            <p className='flex items-baseline text-greyscaletext-50 text-[1rem] xmd:text-[0.75rem] italic font-normal leading-[150%]'>
              {/* <Image
              src={'/images/hoc-vien-duc-anh/Group 1000005614.svg'}
              width={10}
              height={10}
              alt='hoc-bong-anh-quoc'
              className='w-[0.75rem] h-[0.75rem] mr-[0.5rem]'
            ></Image> */}
              {res?.acf?.introduce_text || lang.scholarship.nationInfor}
            </p>
            <ul className='xmd:mt-[0.81rem] mt-[1.25rem]'>
              {res?.acf?.stats.map((stat, index) => {
                return (
                  <div
                    className=''
                    key={index}
                  >
                    <li className='md:list-disc md:ml-[1.5rem] xmd:mb-[0.44rem]'>
                      <div className='flex items-start'>
                        <h3 className='w-[13rem] xmd:min-w-[8rem] text-greyscaletext-80 text-[0.875rem] font-semibold leading-[120%] md:leading-[150%]'>
                          {stat.key}
                        </h3>
                        <span className='w-full md:w-[12.875rem] xmd:font-semibold inline-block ml-[0.75rem] text-primary-40 text-[0.875rem] font-bold leading-[130%] md:leading-[120%]'>
                          :{stat.value}
                        </span>
                      </div>
                    </li>
                    {index < res?.acf?.stats.length - 1 && (
                      <div className='w-full bg-greyscaletext-5 h-[1px] my-[0.75rem] xmd:hidden'></div>
                    )}
                  </div>
                )
              })}
            </ul>
          </div>
        )}
      </div>

      {/* render content */}
      <div
        className={clsx(
          'my-[1.5rem] xmd:my-[1rem] text-[1rem] font-medium leading-[150%] text-greyscaletext-60 xmd:px-[0.75rem]',
          {
            'auk-content': !formShow,
            'auk-form-content': formShow,
          },
        )}
        dangerouslySetInnerHTML={{
          __html: formShow ? res?.acf?.sub_content : res?.content?.rendered,
        }}
      ></div>

      {!formShow && (
        <div className='py-[2rem] xmd:py-[1.21rem] xmd:px-[0.69rem] px-[1.5rem] border border-primary-30 rounded-xl xmd:mx-[0.75rem]'>
          <p className='text-greyscaletext-60 text-[0.875rem] font-semibold leading-[160%] mb-[1.5rem]'>
            Vui lòng tham khảo các thông tin trên Wikipedia về nước Anh như dưới
            đây:
          </p>
          <ul
            className={clsx(
              'flex xmd:flex-wrap [&>li]:whitespace-nowrap overflow-y-hidden duration-150',
              {
                'max-h-[10rem]': !expand,
              },
            )}
          >
            {chunkedLinks.map((linkGroup, pIndex) => {
              // console.log(link)
              return (
                <li
                  className='w-max mr-auto last:mr-0 xmd:mb-[1rem]'
                  key={pIndex}
                >
                  {linkGroup.map((link, index) => {
                    return (
                      <div
                        key={index}
                        className='mb-[1rem] last:mb-0'
                      >
                        <a
                          className='text-primary-50 text-[0.875rem] xmd:text-[0.75rem] font-semibold xmd:leading-[130%] leading-[150%]'
                          href={link?.url || '#'}
                        >
                          <span className='mr-[0.25rem]'>•</span>{' '}
                          {link?.display_text}
                        </a>
                      </div>
                    )
                  })}
                </li>
              )
            })}
          </ul>
          {!expand && (
            <button
              className='mb-[0.4rem] mt-[0.5rem] flex items-center md:hidden'
              onClick={handleViewMore}
            >
              <Image
                src={'/images/primary/CaretDown.svg'}
                alt={'down-arrow'}
                width={100}
                height={100}
                className={'size-[0.875rem] mr-[0.25rem]'}
                priority
              />
              <span className='text-primary-50 text-[0.75rem] font-semibold leading-[120%]'>
                {lang.view_more}
              </span>
            </button>
          )}
        </div>
      )}
      <SuggestedSection
        tags={tags}
        suggests={suggestLinks}
      />
      <RelatedPosts
        lang={lang}
        listItems={relatedPosts}
      />
    </section>
  )
}

export default AboutUnitedKingom
