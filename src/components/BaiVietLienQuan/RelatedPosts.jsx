<<<<<<< HEAD
'use client'

=======
>>>>>>> master
import {Button} from '@/components/ui/button'
import clsx from 'clsx'
import Image from 'next/image'
import Pagination from '../pagination/Pagination'
<<<<<<< HEAD
import {useEffect, useState} from 'react'
const RelatedPosts = ({
  lang,
  borderTop = true,
  listItems = [],
  excludePostID = '',
}) => {
  // console.log({lang})
  // console.log(listItems)
  const perPageToShow = 6
  const perPageFromResult = perPageToShow
  const [page, setPage] = useState(1)
  const [items, setItems] = useState(listItems || [])
  let filteredItems = items?.filter((item) => item.id != excludePostID)
  if (perPageFromResult > perPageToShow) {
    filteredItems = filteredItems.slice(0, perPageToShow)
  }

  // console.log(filteredItems)

  useEffect(() => {}, [page])
=======
const RelatedPosts = ({lang, borderTop = true, items = []}) => {
>>>>>>> master
  return (
    <section className='xmd:mx-[0.75rem]'>
      <div
        className={clsx(
          'md:w-full my-[1.25rem] xmd:mx-[0.75rem] md:my-[2.25rem] border-[rgba(52,_104,_205,_0.40)] border-t-[0.0625rem]',
          !borderTop && 'hidden',
        )}
      ></div>
      <h2
        className={clsx(
          'text-[1.5rem] text-center md:text-left text-primary-50 font-bold leading-[130%] mt-[1.25rem] xmd:mb-[1.25rem] mb-[1.5rem]',
          {
            'md:mt-[2.25rem]': borderTop,
            'mt-[3rem]': !borderTop,
          },
        )}
      >
<<<<<<< HEAD
        {lang?.related_posts}
      </h2>
      <div className='w-full flex xmd:flex-col'>
        {filteredItems?.map((item, index) => {
          console.log(item)
          return (
            <article
              key={index}
              className={clsx(
                `hover:bg-primary-5 md:w-1/2 md:mr-[1.5rem] shadow-[0px_3px_24px_0px_rgba(0,132,255,0.04),0px_0px_32px_0px_rgba(0,119,229,0.04)]
              group duration-150 flex md:items-center p-[0.95rem] md:p-[1.5rem] rounded-2xl border border-[rgba(52, 104, 205, 0.40)]`,
                {
                  '!mr-0': index % 2 != 0,
                  'md:!mt-0': index === 1,
                  'mt-[0.75rem] md:mt-[1.88rem]': index > 0,
                },
              )}
            >
              <Image
                src={
                  item?.yoast_head_json?.og_image?.[0]?.url ||
                  item.acf.thumbnail_url ||
                  item.acf.thumbnail_image ||
                  '/images/hoc-bong-anh-quoc/relatedPost.jpg'
                }
                width={164}
                height={164}
                priority
                alt='hoc-bong-anh-quoc'
                className={
                  'rounded-lg w-[7.5rem] h-[5.3rem] md:w-[16.4rem] md:h-[16.4rem] object-cover'
                }
              ></Image>
              <div className='ml-[0.5rem] md:ml-[1.5rem] flex flex-1 flex-col h-full md:h-[16.4rem]'>
                <h2 className='xmd:text-greyscaletext-80 text-primary-60 xmd:text-[0.875rem] text-[1rem] font-bold leading-[150%]'>
                  <a href='#'>
                    <div
                      className='xmd:line-clamp-4'
                      title={item?.title?.rendered}
                      dangerouslySetInnerHTML={{__html: item?.title?.rendered}}
                    ></div>
                  </a>
                </h2>
                <div
                  className='hidden md:block line-clamp-4 text-ellipsis overflow-hidden my-[1rem] !text-greyscaletext-80'
                  title={item?.excerpt?.rendered.slice(
                    3,
                    item?.excerpt?.rendered.length - 5,
                  )}
                  dangerouslySetInnerHTML={{
                    __html: item?.excerpt?.rendered,
                  }}
                ></div>
                <a
                  href='#'
                  className='inline-block w-max'
                >
                  <Button className='hidden md:block h-[2.5rem] mt-auto px-[1.5rem] border border-primary-50 w-max group-hover:bg-white'>
                    {lang.view_more}
                  </Button>
                </a>
              </div>
            </article>
          )
        })}
      </div>
      {filteredItems?.length > 0 && (
        <Pagination
          page={page}
          pageCount={1}
          className='xmd:!mt-[1.25rem] xmd:!mb-[-3rem] md:!pt-0 md:!mt-[1.5rem]'
        />
      )}
=======
        {lang.related_posts}
      </h2>
      <div className='w-full grid grid-rows-6 grid-cols-1 md:grid-rows-3 md:grid-cols-2 gap-x-0 md:gap-x-[1.5rem] gap-y-[0.75rem] md:gap-y-[1.88rem]'>
        {Array.from({length: 6}).map((item, index) => (
          <article
            key={index}
            className='hover:bg-primary-5 shadow-[0px_3px_24px_0px_rgba(0,132,255,0.04),0px_0px_32px_0px_rgba(0,119,229,0.04)] group duration-150 flex items-center p-[0.95rem] md:p-[1.5rem] rounded-2xl border border-[rgba(52, 104, 205, 0.40)]'
          >
            <Image
              src={'/images/hoc-bong-anh-quoc/relatedPost.jpg'}
              width={164}
              height={164}
              priority
              alt='hoc-bong-anh-quoc'
              className={
                'rounded-lg w-[7.5rem] h-[5.3rem] md:w-[16.4rem] md:h-[16.4rem] object-cover'
              }
            ></Image>
            <div className='ml-[0.5rem] md:ml-[1.5rem] flex flex-1 flex-col h-full'>
              <h2 className='xmd:text-greyscaletext-60 text-primary-60 text-[1rem] font-bold leading-[150%]'>
                <a href='#'>
                  Học bổng toàn phần khối ngành STEM dành cho nữ giới
                </a>
              </h2>
              <p className='hidden md:block line-clamp-4 overflow-hidden mt-[1rem] mb-auto'>
                Bạn là nữ giới, đã có bằng Cử nhân chuyên ngành STEM và có niềm
                đam mê với lĩnh vực này? Bạn sẽ có cơ hoi duoc tham gia cung nhu
                dong gop
              </p>
              <Button className='hidden md:block h-[2.5rem] px-[1.5rem] w-max group-hover:bg-white'>
                Xem thêm
              </Button>
            </div>
          </article>
        ))}
      </div>
      <Pagination
        perpage={6}
        page={1}
        total={100}
      />
>>>>>>> master
    </section>
  )
}

export default RelatedPosts
