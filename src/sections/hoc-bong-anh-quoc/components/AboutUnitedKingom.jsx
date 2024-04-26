'use client'
<<<<<<< HEAD
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
=======
import Image from 'next/image'
import {useState} from 'react'
const AboutUnitedKingom = ({lang, id, isMobile}) => {
>>>>>>> master
  const [expand, setExpand] = useState(false)
  const handleViewMore = () => {
    setExpand(true)
  }
  return (
    <section id={id}>
<<<<<<< HEAD
      <div className='w-full xmd:h-[calc(100vh-3.625rem)] h-[44.5rem] md:h-max rounded-xl bg-primary-10 flex flex-col md:flex-row'>
        <div className='flex-1'>
          <div className='relative w-full h-full xmd:overflow-hidden'>
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
                className='absolute bottom-[0] xmd:top-[4rem] md:top-[-1rem] left-[6.88rem] md:left-[13.25rem] xmd:w-[9rem] w-[9.61063rem] h-[18.8rem] md:w-[16.68731rem] 
              md:h-[32.6rem] object-contain'
              ></Image>
            </picture>
            {/* button show form */}
            <div
              className='absolute bottom-[1.25rem] xmd:bottom-[0.75rem] xmd:right-[0.75rem] xmd:w-[17.1rem] xmd:h-max w-[23rem] h-[4.5rem] right-[1.86rem] cursor-pointer'
              onClick={() => {
                setFormShow((prev) => !prev)
              }}
            >
              <picture>
                <source
                  media='(max-width:767px)'
                  srcSet='/images/homepage/button-search-map-mobile.png'
                />
                <Image
                  loading='lazy'
                  className='size-full object-cover'
                  alt='ảnh button tìm đường'
                  src={'/images/homepage/button-timduong.png'}
                  width={370}
                  height={75}
                />
              </picture>
              <Image
                loading='lazy'
                className='absolute xmd:bottom-[-1rem] bottom-[-1.1rem] right-[0.5rem] w-[2.46225rem] h-[2.61319rem] rotate-[-30deg] animate-kinh-loop xmd:animate-kinh-loop-mobile'
                alt='ảnh kính loop'
                src={'/images/homepage/search-timduong.png'}
                width={40}
                height={44}
              />
              <div className='absolute z-50 bottom-[0.9rem] xmd:bottom-[1rem] left-[1.2rem] text-white text-center text-[0.75rem] not-italic font-semibold xmd:font-extrabold leading-[150%] tracking-[-0.0075rem] uppercase'>
                Tìm trường cùng Đức Anh
              </div>
            </div>
          </div>
        </div>

        {formShow ? (
          <FindModal
            lang={lang}
            isMobile={isMobile}
            className='!ml-0 mr-[1.64rem] my-[1.5rem] xmd:mt-0 xmd:mb-[1.15rem]'
          />
        ) : (
          <div className='flex-1 my-[0.8rem] mx-[0.75rem] md:ml-0 mr-[0.8rem] p-[1.5rem] xmd:p-[1rem] rounded-lg bg-white'>
            <p className='flex items-baseline text-greyscaletext-50 text-[1rem] xmd:text-[0.75rem] italic font-normal leading-[150%]'>
              {/* <Image
=======
      <div className='w-full h-[44.5rem] md:h-[32.6rem] rounded-xl bg-primary-10 flex flex-col md:flex-row'>
        <div className='flex-1'>
          <div className='relative w-full h-full'>
            <h1
              className='absolute top-[0.94rem] left-[0.75rem] md:top-[1.5rem] md:left-[2rem] uppercase text-white text-[1.5rem] md:text-[2.1rem]
       font-extrabold leading-[120%] w-[7.6rem] md:w-[10.5rem]'
            >
              United kingdom
            </h1>
            <Image
              src={'/images/hoc-bong-anh-quoc/UNITED KINGDOM.png'}
              width={160}
              height={320}
              alt='hoc-bong-anh-quoc'
              className='absolute bottom-[0] md:bottom-[2rem] left-[6.88rem] md:left-[13.25rem] w-[9.61063rem] h-[18.81263rem] md:w-[16rem] 
              md:h-[32.6rem] object-contain'
            ></Image>
          </div>
        </div>
        <div className='flex-1 my-[0.8rem] mx-[0.75rem] md:ml-0 mr-[0.8rem] p-[1.5rem] rounded-lg bg-white'>
          <p className='flex items-baseline text-greyscaletext-50 text-[1rem] italic font-normal leading-[150%]'>
            <Image
>>>>>>> master
              src={'/images/hoc-vien-duc-anh/Group 1000005614.svg'}
              width={10}
              height={10}
              alt='hoc-bong-anh-quoc'
              className='w-[0.75rem] h-[0.75rem] mr-[0.5rem]'
<<<<<<< HEAD
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
=======
            ></Image>
            {lang.nationInfor}
          </p>
          <ul className='xmd:mt-[0.81rem] mt-[1.25rem]'>
            <li className='md:list-disc md:ml-[1.5rem] xmd:mb-[0.44rem]'>
              <div className='flex items-center'>
                <h3 className='w-[13rem] xmd:w-[6.8rem] text-greyscaletext-80 text-[0.875rem] font-semibold leading-[120%] md:leading-[150%]'>
                  {lang.capital.key}
                </h3>
                <span className='w-[10.3rem] inline-block ml-[0.75rem] text-primary-40 text-[0.875rem] font-semibold leading-[130%] md:leading-[120%]'>
                  :{lang.capital.value}
                </span>
              </div>
            </li>
            <div className='w-full bg-greyscaletext-5 h-[1px] my-[0.75rem] xmd:hidden'></div>
            <li className='md:list-disc md:ml-[1.5rem] xmd:mb-[0.44rem]'>
              <div className='flex items-center'>
                <h3 className='w-[13rem] xmd:w-[6.8rem] text-greyscaletext-80 text-[0.875rem] font-semibold leading-[120%] md:leading-[150%]'>
                  {lang.capital.key}
                </h3>
                <span className='w-[10.3rem] inline-block ml-[0.75rem] text-primary-40 text-[0.875rem] font-semibold leading-[130%] md:leading-[120%]'>
                  :{lang.capital.value}
                </span>
              </div>
            </li>
            <div className='w-full bg-greyscaletext-5 h-[1px] my-[0.75rem] xmd:hidden'></div>
          </ul>
        </div>
      </div>
      <p className='mt-[1.5rem] xmd:mt-[1rem] text-[1rem] font-medium leading-[150%] text-greyscaletext-60 xmd:px-[0.75rem]'>
        Chỉ tính riêng về giáo dục, ngay lập tức sau Brexit, nước Anh đã quay
        lại chính sách cho phép sinh viên quốc tế ở lại làm việc 02 năm sau khi
        học xong & định cư khi đủ điều kiện, đồng thời, nới lỏng phần nào các
        chính sách về giáo dục, di trú… thuận lợi hơn cho du học sinh quốc tế
        vào.
      </p>
      <p className='mt-[1rem] xmd:mt-[1rem] text-[1rem] font-medium leading-[150%] mb-[1.5rem] xmd:mb-[2.62rem] text-greyscaletext-60 xmd:px-[0.75rem]'>
        Với việc rời Cộng đồng châu Âu vào ngày 1/2/2020 nước Anh trở thành một
        quốc gia độc lập theo đuổi các mục tiêu kinh tế, chính trị, giáo dục,
        quân sự, ngoại giao… mà không bị ràng buộc bởi các quy định chung của
        cộng đồng châu Âu như trước đây. Chính sách phát triển đất nước trở nên
        linh hoạt và có vẻ hiệu quả hơn, các quyết định được đưa ra nhanh và kịp
        thời hơn…
      </p>
      <div className='py-[2rem] xmd:py-[1.21rem] xmd:px-[0.69rem] px-[1.5rem] border border-primary-30 rounded-xl xmd:mx-[0.75rem]'>
        <p className='text-greyscaletext-60 text-[0.875rem] font-semibold leading-[160%] mb-[1.5rem]'>
          Vui lòng tham khảo các thông tin trên Wikipedia về nước Anh như dưới
          đây:
        </p>
        <ul className='flex xmd:flex-col [&>li]:whitespace-nowrap'>
          <div className='md:w-[calc(60%)] flex'>
            <li className='ml-[1.5rem] mr-[0.87rem] md:mr-auto text-primary-50 font-feature-settings text-[0.875rem] font-semibold leading-[150%]'>
              <ul
                className='[&>li]:mb-[1rem] [&>li>a]:whitespace-nowrap [&>li>a]:text-[0.75rem] 
              md:[&>li>a]:text-[0.875rem] [&>li>a]:font-semibold [&>li>a]:leading-[120%] md:[&>li>a]:leading-[150%] list-disc'
              >
                <li>
                  <a href=''>Bản đồ nước Anh</a>
                </li>
                <li>
                  <a href=''>Bản đồ nước Anh</a>
                </li>
                <li>
                  <a href=''>Bản đồ nước Anh</a>
                </li>
                <li className='!mb-0'>
                  <a href=''>Bản đồ nước Anh</a>
                </li>
              </ul>
            </li>
            <li className='ml-[1.5rem] mr-[0.87rem] md:mr-auto text-primary-50 font-feature-settings text-[0.875rem] font-semibold leading-[150%]'>
              <ul
                className='[&>li]:mb-[1rem] [&>li>a]:whitespace-nowrap [&>li>a]:text-[0.75rem] 
              md:[&>li>a]:text-[0.875rem] [&>li>a]:font-semibold [&>li>a]:leading-[120%] md:[&>li>a]:leading-[150%]  list-disc'
              >
                <li>
                  <a href=''>Khoa học và công nghệ tại Anh</a>
                </li>
                <li>
                  <a href=''>Khoa học và công nghệ tại Anh</a>
                </li>
                <li>
                  <a href=''>Khoa học và công nghệ tại Anh</a>
                </li>
                <li className='md:!mb-0'>
                  <a href=''>Khoa học và công nghệ tại Anh</a>
                </li>
              </ul>
            </li>
          </div>
          {!expand && isMobile && (
            <div
              className='flex cursor-pointer items-center mt-[1.8rem]'
              onClick={handleViewMore}
            >
              <Image
                src={'/images/hoc-bong-anh-quoc/down-arrow.svg'}
                width={150}
                height={150}
                className='w-[0.5rem] h-[0.5rem] mx-[0.4rem]'
                priority
              />
              <span className='text-[0.75rem] font-semibold leading-[120%] text-primary-50'>
                Xem thêm
              </span>
            </div>
          )}
          {(expand || !isMobile) && (
            <div className='flex-1 flex'>
              <li className='ml-[1.5rem] mr-[0.87rem] md:mr-auto text-primary-50 font-feature-settings text-[0.875rem] font-semibold leading-[150%]'>
                <ul
                  className='[&>li]:mb-[1rem] [&>li>a]:whitespace-nowrap [&>li>a]:text-[0.75rem] 
              md:[&>li>a]:text-[0.875rem] [&>li>a]:font-semibold [&>li>a]:leading-[120%] md:[&>li>a]:leading-[150%]  list-disc'
                >
                  <li>
                    <a href=''>Bản đồ nước Anh</a>
                  </li>
                  <li>
                    <a href=''>Bản đồ nước Anh</a>
                  </li>
                  <li>
                    <a href=''>Các chính sách y tế tại Anh</a>
                  </li>
                  <li className='!mb-0'>
                    <a href=''>Bản đồ nước Anh</a>
                  </li>
                </ul>
              </li>
              <li className='ml-[1.5rem] mr-[0.87rem] md:mr-auto text-primary-50 font-feature-settings text-[0.875rem] font-semibold leading-[150%]'>
                <ul
                  className='[&>li]:mb-[1rem] [&>li>a]:whitespace-nowrap [&>li>a]:text-[0.75rem] 
              md:[&>li>a]:text-[0.875rem] [&>li>a]:font-semibold [&>li>a]:leading-[120%] md:[&>li>a]:leading-[150%]  list-disc'
                >
                  <li>
                    <a href=''>Bản đồ nước Anh</a>
                  </li>
                  <li>
                    <a href=''>Bản đồ nước Anh</a>
                  </li>
                  <li>
                    <a href=''>Bản đồ nước Anh</a>
                  </li>
                  <li className='!mb-0'>
                    <a href=''>Bản đồ nước Anh</a>
                  </li>
                </ul>
              </li>
            </div>
          )}
        </ul>
      </div>
>>>>>>> master
    </section>
  )
}

export default AboutUnitedKingom
