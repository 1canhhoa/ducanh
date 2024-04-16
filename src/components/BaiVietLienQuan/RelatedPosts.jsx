'use client'

import {Button} from '@/components/ui/button'
import clsx from 'clsx'
import Image from 'next/image'
import Pagination from '../pagination/Pagination'
import {useEffect, useState} from 'react'
const RelatedPosts = ({
  lang,
  borderTop = true,
  data = {}, // {pagination:{perPage,total,pageCount},data}
  excludePostID = '',
}) => {
  // console.log(data)
  const perPageToShow = 6
  const perPageFromResult = data?.pagination?.perPage || perPageToShow
  const [page, setPage] = useState(1)
  const [items, setItems] = useState(data?.data || [])
  let filteredItems = items?.filter((item) => item.id != excludePostID)
  if (perPageFromResult > perPageToShow) {
    filteredItems = filteredItems.slice(0, perPageToShow)
  }
  // console.log(filteredItems)

  useEffect(() => {}, [page])
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
        {lang.related_posts}
      </h2>
      <div className='w-full grid grid-rows-6 grid-cols-1 md:grid-rows-3 md:grid-cols-2 gap-x-0 md:gap-x-[1.5rem] gap-y-[0.75rem] md:gap-y-[1.88rem]'>
        {filteredItems?.map((item, index) => (
          <article
            key={index}
            className='hover:bg-primary-5 shadow-[0px_3px_24px_0px_rgba(0,132,255,0.04),0px_0px_32px_0px_rgba(0,119,229,0.04)] group duration-150 flex 
            items-center p-[0.95rem] md:p-[1.5rem] rounded-2xl border border-[rgba(52, 104, 205, 0.40)]'
          >
            <Image
              src={
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
              <h2 className='xmd:text-greyscaletext-60 text-primary-60 text-[1rem] font-bold leading-[150%]'>
                <a href='#'>{item.title.rendered}</a>
              </h2>
              <div
                className='hidden md:block line-clamp-4 overflow-hidden mt-[1rem] mb-auto !text-greyscaletext-80'
                dangerouslySetInnerHTML={{
                  __html: item?.acf?.description || item?.content?.rendered,
                }}
              ></div>
              <Button className='hidden md:block h-[2.5rem] px-[1.5rem] w-max group-hover:bg-white'>
                Xem thêm
              </Button>
            </div>
          </article>
        ))}
      </div>
      {filteredItems?.length > 0 && data?.pagination.total > perPageToShow && (
        <Pagination
          page={page}
          pageCount={data?.pagination?.pageCount || 1}
        />
      )}
    </section>
  )
}

export default RelatedPosts
