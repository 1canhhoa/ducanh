"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Title from '@/components/Title'



const Popup = ({ b, hover }) => {
  return <div className="relative duration-500 ease-in-out px-[0.75rem] md:mt-10 xmd:mb-4  xmd:mt-4 ">
    <div className={"flex relative duration-500 ease-in-out pt-[0.56rem] pb-[0.94rem] px-[0.75rem] z-[2] xmd:bg-linear-l5 justify-center items-center md:w-[30.75rem] rounded-xl md:absolute md:h-[13.49994rem] shrink-0 bg-white "
    }>
      <div className='md:w-[26.625rem] duration-500 ease-in-out xmd:text-white text-greyscaletext-80 xmd:text-[0.875rem] text-base not-italic font-medium leading-[150%]'>
        {b?.content}
      </div>
    </div>
    <div className={(hover ? "xmd:bg-[#2c98e3] xmd:left-[17rem]" : "xmd:left-10 xmd:bg-linear-l5") + '  xmd:w-12 xmd:h-10 w-12 h-16 duration-500  z-[1] ease-in-out rounded-md rotate-45  absolute xmd:top-[-0.2rem]  -top-4 md:left-20  md:bg-white '}></div>
  </div>
}


const MouseButton = ({ check }) => {



  return <div className='absolute size-[3rem] xmd:bottom-[-0.54rem] bottom-0 right-0'>
    <div className='relative'>
      <Image
        loading='lazy'

        alt="ảnh hiệu ứng Hover"
        className={` absolute ease-linear duration-700  bottom-[-2.5rem] right-[0.4rem] size-[1.9rem] ` +
          (check ? 'opacity-100 scale-75' : 'opacity-100 scale-[1.3]')}
        src={'/images/homepage/hover-title.svg'} width={92} height={92} />
      <Image
        loading='lazy'

        alt="ảnh hiệu ứng Hover"
        className={` absolute  bottom-[-2.5rem] right-[0.3rem] size-[1.2rem] ease-linear duration-700 ` +
          (check ? ' xmd:opacity-100 ' : 'xmd:opacity-0')}
        src={'/images/homepage/mouse-cursor1.svg'} width={92} height={92} />
      <Image
        loading='lazy'

        alt="ảnh hiệu ứng Hover"
        className={` absolute  bottom-[-2.5rem] right-[0.41rem] size-[2rem] duration-700 ease-linear ` +
          (check ? 'opacity-100 scale-90' : 'scale-105 opacity-0')}
        src={'/images/homepage/ellipse.png'} width={92} height={92} />
    </div>
  </div>
}



const DichVuDucAnh = ({ t, isMobile, dataDichVuTaiDucAnh }) => {
  const [hover, setHover] = useState(0)
  const [currentItem, setCurrentItem] = useState(dataDichVuTaiDucAnh)
  const [accordionOpen, setAccordionOpen] = useState(false);

  const width = isMobile ? 2 : 1
  const lenght = isMobile ? dataDichVuTaiDucAnh.length : 1
  useEffect(() => {
    setAccordionOpen(true)
    setHover(0)
    setCurrentItem(dataDichVuTaiDucAnh[0])
  }, [])
  const renderItems = () => {
    const result = [];
    for (let a = 0; a < lenght; a += width) {
      const group = isMobile ? dataDichVuTaiDucAnh.slice(a, a + width) : dataDichVuTaiDucAnh; // Lấy group phần tử theo width
      const checkIsGroupOpen = group.find((f) => f.id === currentItem.id) 
      result.push(
        <div className='flex xmd:flex-col items-center'>
          <div className='flex'>
            {group.map((b, i) => {
              const translateYValue = `-${i * 2.8}rem`;
              const check = hover != -1 && i === hover && checkIsGroupOpen

              return (
                <a
                  className={' dichvuducanh2 z-10'}
                  key={i}
                  style={{ transform: isMobile ? `` : `translateY(${translateYValue})` }}
                >
                  <div
                    onClick={isMobile ? () => {
                      setAccordionOpen(true)
                      setHover(i)
                      setCurrentItem(b)
                    } : () => { }}
                    onMouseEnter={isMobile ? () => { } : () => { setHover(i) }}
                    onMouseLeave={() => { setHover(0) }}
                    className={(check ? '' : ' ') + ' cursor-pointer duration-300 ease-in-out  dichvuducanh3 relative  w-[11.5rem] h-[5.4375rem] '}>

                    <Image
                      loading='lazy'

                      alt='ảnh nền xanh button khi chưa hover'
                      src='/images/homepage/union1.svg'
                      className={'z-0 xmd:hidden shrink-0  absolute w-[11.5rem] h-[5.4375rem] duration-700 ease-in-out ' +
                        (check ? ' opacity-0 ' : 'opacity-100')}
                      width={185}
                      height={90} />
                    <Image
                      loading='lazy'
                      alt='ảnh nền xanh button khi đã hover'
                      src='/images/homepage/union.svg'
                      className={'z-0 shrink-0  absolute xmd:top-2 duration-700 w-[11.5rem] h-[5.4375rem] ease-in-out ' +
                        (check ? 'opacity-100 ' : 'opacity-0')}
                      width={185} height={90} />
                    <MouseButton index={i} check={check} />

                    <div className={(check ? '' : ' z-[-1] xmd:shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] xmd:rounded-2xl bg-white') + " md:hidden  absolute top-2 left-2  w-[10.59375rem] h-[4.6875rem]"}></div>
                    <div className={' dichvuducanh4 absolute top-3 '}>
                      <div className={(check ? '' : 'xmd:!text-primary-40') + ' text-[1rem] font-bold leading-[1.2]  duration-300 ease-in-out text-center text-white'}>
                        {b?.title}
                      </div>
                    </div>
                  </div>

                  {/* <UnionDef /> */}
                  <div
                    className={`grid overflow-hidden absolute md:w-[35rem] md:h-[30rem]  text-slate-600 text-sm 
                      ${hover === i && !isMobile
                        ? "dichvu-popup dichvu-popup-active"
                        : "dichvu-popup "
                      }`}
                  >
                    <div className="overflow-hidden">
                      <Popup b={currentItem} />
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
          <div
            className={`grid overflow-hidden  transition-all duration-700 ease-out text-slate-600 text-sm 
          ${accordionOpen && checkIsGroupOpen && isMobile
                ? "grid-rows-[1fr]"
                : "grid-rows-[0fr]"
              }`}
          >
            <div className="overflow-hidden">
              <Popup hover={hover === 1} b={currentItem} />
            </div>
          </div>

        </div>
      );
    }
    return result;
  };


  return (
    <div className='xmd:mt-[3rem] xmd:h-[40rem] z-[10]  w-full relative'>
      <div className="flex z-[1] flex-col xmd:px-[0.75rem] md:absolute top-20 left-20 items-start space-y-[0.5rem]">
        <div className="text-greyscaletext-40 xmd:text-primary-40 text-center xmd:text-[0.875rem] text-[1rem] not-italic font-bold leading-[normal] uppercase">
          Đồng hành với học sinh
        </div>
        <Title title={t.dich_vu_duc_anh} className={'xmd:text-[1.75rem] xmd:font-bold xmd:leading-[1.3]'} />
      </div>
      <div className='  dichvuducanh md:absolute xmd:pt-[1.25rem]  xmd:flex-col xmd:left-0  top-[23rem] flex md:left-[3rem] md:gap-3'>
        {renderItems()}
      </div>
      <Image loading='lazy' alt="ảnh nền phần dịch vụ cho web" src={'/images/homepage/bg_dichvu.jpg'} width={1600} height={900} className="xmd:hidden w-full h-[54.375rem]" />
      <Image loading='lazy' alt="ảnh nền phần dịch vụ 2 cho web" src={'/images/homepage/bg-dichvu2.png'} width={1600} height={30} className="xmd:hidden w-full" />
      <Image loading='lazy' alt="ảnh nền phần dịch vụ cho mobile" src={'/images/homepage/bg-dichvu-mobi.png'} width={380} height={620} className="md:hidden absolute w-full z-[-1] left-0 h-[40.5rem] bottom-[0rem] " />

    </div >
  )
}

export default DichVuDucAnh
