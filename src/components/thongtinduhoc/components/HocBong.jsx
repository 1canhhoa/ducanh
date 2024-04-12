'use client'

import Image from 'next/image'
import CradDrop from './CardDrop'
import {useState} from 'react'
import BoxCard from './BoxCard'

export default function HocBong() {
  const [itemCard1, setItemCard1] = useState(-1)
  const [itemCard2, setItemCard2] = useState(-1)
  const [itemCard3, setItemCard3] = useState(-1)
  return (
    <section className='w-full mt-[8.12rem]'>
      <div className='flex flex-col items-start lg:w-[76.875rem] mx-auto'>
        <div className='h-[27.125rem] w-[76.875rem] mb-[4.12rem]'>
          <Image
            className='rounded-[1.25rem] size-full'
            alt='Học bổng'
            src={'/images/thongtinduhoc/bannerHocbong.jpg'}
            width={1230}
            height={434}
          />
        </div>

        <h1 className='title relative w-fit mb-[1.5rem]'>
          Du học học bổng
          <div className='size-[0.625rem] bg-secondary-40 absolute bottom-[0.625rem] right-[-1.125rem]'></div>
        </h1>
        <p className='w-[35.375rem] body16 text-greyscaletext-50'>
          Du học học bổng là khi du học sinh được cá nhân hay tổ chức nào đó hỗ
          trợ một phần hay toàn phần tài chính cho du học. Những bạn quan tâm
          đến học bổng có thể tham khảo một số chương trình học bổng điển hình.
        </p>

        <div className='flex space-x-[6.87rem]'>
          <div className='flex flex-col items-start space-y-[1rem] mt-[2.5rem] w-[35.3125rem]'>
            {new Array(5).fill(0).map((e, index) => (
              <CradDrop
                key={index}
                index={index}
                setItemCard={setItemCard1}
                itemCard={itemCard1}
              />
            ))}
          </div>
          <div className='w-[34.6155rem] h-[29.375rem] translate-y-[-3.06rem]'>
            <Image
              className='rounded-[1.25rem] size-full'
              alt='Học bổng'
              src={'/images/thongtinduhoc/bannerHocbong2.jpg'}
              width={553.848}
              height={548.128}
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col space-y-[5rem]'>
        <div className='flex flex-col items-start w-full px-[11.625rem] py-[3.75rem] space-y-[1.5rem] bg-background-elevation-10'>
          <span className='w-[52.3125rem] text-[1.5rem] font-bold leading-[1.5] text-primary-50'>
            Học sinh cần phân biệt rõ các dạng học bổng. Công ty Đức Anh hỗ trợ
            các bạn để xin cả 3 loại: Scholarship, Grant, Busary/ Financial aid.
          </span>
          <div className='flex items-start space-x-[1.5rem] w-full'>
            {new Array(3).fill(0).map((e, index) => (
              <CradDrop
                key={index}
                index={index}
                setItemCard={setItemCard2}
                itemCard={itemCard2}
              />
            ))}
          </div>
        </div>
        <div className='flex flex-col items-start space-y-[1.5rem] w-full px-[11.625rem]'>
          <h2 className='desktop32 text-primary-50 flex'>
            <Image
              className='size-[0.75rem] mr-[0.5rem] mt-[1rem]'
              alt='icon'
              src={'/images/hoptac/dot.png'}
              width={12}
              height={12}
            />
            Tiêu chí & cách xét học bổng:
          </h2>
          <div className='flex space-x-[8.12rem] items-start'>
            <div className='flex flex-col items-start space-y-[1rem]'>
              <p className='w-[35rem] text-[1rem] font-medium leading-[1.5625rem] text-greyscaletext-50'>
                Với hầu hết các nước bạn chỉ có thể chính thức được xét học bổng
                sau khi có thư mời học chính thức & không có điều kiện; vì vậy
                tất cả các học sinh được khuyên là cần nộp hồ sơ sớm, ngay trước
                khi bạn có đủ hồ sơ để “xếp hàng” xin học bổng; như vậy khi bạn
                có đủ hồ sơ- bạn sẽ được xét nhanh hơn và cũng ưu tiên hơn.
              </p>
              <p className='w-[35rem] text-[1rem] font-medium leading-[1.5625rem] text-greyscaletext-50'>
                Với hầu hết các nước bạn chỉ có thể chính thức được xét học bổng
                sau khi có thư mời học chính thức & không có điều kiện; vì vậy
                tất cả các học sinh được khuyên là cần nộp hồ sơ sớm, ngay trước
                khi bạn có đủ hồ sơ để “xếp hàng” xin học bổng; như vậy khi bạn
                có đủ hồ sơ- bạn sẽ được xét nhanh hơn và cũng ưu tiên hơn.
              </p>
            </div>
            <div className='flex flex-col items-start space-y-[1rem] w-full'>
              {new Array(3).fill(0).map((e, index) => (
                <CradDrop
                  key={index}
                  index={index}
                  setItemCard={setItemCard3}
                  itemCard={itemCard3}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col items-start space-y-[1.5rem] w-full px-[11.625rem]'>
          <h2 className='desktop32 text-primary-50 flex'>
            <Image
              className='size-[0.75rem] mr-[0.5rem] mt-[1rem]'
              alt='icon'
              src={'/images/hoptac/dot.png'}
              width={12}
              height={12}
            />
            Tham khảo năng lực học sinh{' >< '}mức học bổng có thể đăng ký để
            cạnh tranh
          </h2>
          <div className='flex space-x-[1.5rem] items-start w-full'>
            {new Array(4).fill(0).map((e, index) => (
              <BoxCard key={index} />
            ))}
          </div>
        </div>
        <div className='px-[11.625rem] w-full flex flex-col justify-start items-start'>
          <div className='relative w-full h-[25.8125rem] pt-[2.95rem] pl-[2.45rem]'>
            <Image
              className='rounded-[0.75rem] absolute top-0 left-0 size-full'
              alt='banner hồ sơ xin học bổng'
              src={'/images/thongtinduhoc/bannerHosoxinHb.jpg'}
              width={1230}
              height={413}
            />
            <div className='flex flex-col items-start relative z-10 space-y-[1.5rem]'>
              <h5 className='desktop32 text-white flex'>
                <Image
                  className='size-[0.75rem] mr-[0.5rem] mt-[1rem]'
                  alt='icon'
                  src={'/images/hoptac/dot.png'}
                  width={12}
                  height={12}
                />
                Hồ sơ xin học bổng:
              </h5>
              <ul className='flex flex-col items-start'>
                <li className='body16 text-white'>
                  Học bạ bảng điểm của khóa học gần nhất
                </li>
                <li className='body16 text-white'>
                  Học bạ/ bảng điểm của khóa học gần nhất
                </li>
                <li className='body16 text-white'>
                  Học bạ/ bảng điểm của khóa học gần nhất
                </li>
                <li className='body16 text-white'>
                  Học bạ/ bảng điểm của khóa học gần nhất
                </li>
                <li className='body16 text-white'>
                  Học bạ/ bảng điểm của khóa học gần nhất
                </li>
              </ul>
              <div className='flex flex-col items-start'>
                <span className='text-primary-10 body16'>
                  Với học bổng bậc thạc sỹ, tiến sỹ, bạn cần thêm:
                </span>
                <ul className='flex flex-col items-start'>
                  <li className='body16 text-white'>Work CV</li>
                  <li className='body16 text-white'>1 personal statement</li>
                  <li className='body16 text-white'>2 thư giới thiệu</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='mt-[3.75rem] flex flex-col space-y-[1.3rem]'>
            <h5 className='desktop32 text-primary-50 flex'>
              <Image
                className='size-[0.75rem] mr-[0.5rem] mt-[1rem]'
                alt='icon'
                src={'/images/hoptac/dot.png'}
                width={12}
                height={12}
              />
              Lưu ý khác:
            </h5>
            <p className='body14 w-[37.625rem] text-greyscaletext-80'>
              Với các học sinh đạt học bổng bán phần (chỉ có học phí hoặc 1 phần
              học phí, hoặc 1 phần tiền ăn ở…), học sinh cần đủ tiền để trang
              trải các phí còn lại (học phí, sinh hoạt phí…) Một số nước khi xin
              học bổng thì cần đầy đủ & nhiều loại giấy tờ, một số nước khác chỉ
              xét GPA & tiếng Anh.
            </p>
          </div>
          <div className='mt-[4rem] flex flex-col items-start space-y-[2.25rem]'>
            <h5 className='sub20 text-primary-50 flex'>
              <Image
                className='size-[0.75rem] mr-[0.5rem] mt-[1rem]'
                alt='icon'
                src={'/images/hoptac/dot.png'}
                width={12}
                height={12}
              />
              Các bạn có thể tham khảo chương trình học bổng 10-100% học phí của
              các trường tại các nước:
            </h5>
            <div className='flex flex-wrap'>
              {new Array(12).fill(0).map((e, index) => (
                <div
                  key={index}
                  className='w-[24.3125rem] mt-[1.5rem] mr-[1rem] wrap_hocbong pl-[1.5rem] flex justify-start items-center h-[3rem] relative rounded-[0.25rem]'
                >
                  <span className='text-[0.875rem] relative z-10 font-extrabold leading-[1.5] text-white uppercase'>
                    Australia
                  </span>
                  <Image
                    className='absolute top-0 left-0 size-full'
                    alt='hoc phi cac nuoc'
                    src={'/images/thongtinduhoc/bg-co.jpg'}
                    width={411.807}
                    height={209.807}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
