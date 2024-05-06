import Title from '@/components/Title'
import React from 'react'
import Image from 'next/image'
const Section = ({ title, subTitle }) => {
  return <div className="flex w-[14.1875rem] relative justify-center xmd:w-full xmd:items-start pt-[1.125rem] pb-[1.10631rem] xmd:pr-[0.92rem] pr-[0.87513rem] 
  xmd:pl-[1.25rem] pl-[0.8125rem] xmd:rounded-[0.75rem] rounded-[1rem] space-x-[0.25rem] bg-linear-l9  ">
    <div className="flex pr-[0.7rem] flex-col xmd:justify-between xmd:w-full justify-center items-start xmd:space-y-[0.2rem] space-y-[0.0625rem]">
      <div className="body14 text-primary-5 font-feature-settings text-center">
        {subTitle}
      </div>
      <div className='body16 w-max uppercase text-white font-semibold text-center'>
        {title}
      </div>
    </div>
    <Image priority alt="ảnh ngôi sao " src={'/images/about_us/star.png'} width={50} height={50}
      className=" absolute xmd:bottom-[0.25rem] xmd:right-[1rem] right-[0.5rem] w-[3.48738rem] h-[3.01869rem] xmd:w-[5.32181rem] xmd:h-[4.35606rem] shrink-0" />

  </div>
}
const Section1 = ({ title }) => {
  return <div className="flex items-center w-[10.775rem] space-x-[0.5rem]">
    <div className="text-[1rem] xmd:body16 font-bold leading-[1.2] text-secondary-60 tracking-[0.01rem]">
      {title}
    </div>
  </div>
}
const Section2 = ({ title, subTitle }) => {
  return <div className="text-greyscaletext-40 font-feature-settings text-[0.875rem] font-normal xmd:leading-[1.7rem] leading-[1.375rem]">
    {subTitle}
  </div>
}
const Ceo = ({ t, dataPersons }) => {
  return (
    <section className=' flex mt-[8.13rem] xmd:mt-[0rem] flex-col w-full items-center'>
      <div className=' md:w-[76.875rem] xmd:space-y-[0.75rem] space-y-[2.5rem]'>
        <Title title={t.ceo} />


        <div className="flex flex-col items-start space-y-[1.75rem]">


          {dataPersons?.map((person, i) => (
            <div key={i} className='flex items-start flex-col w-full xmd:w-[21.9375rem] xmd:pb-[0.6rem]  md:p-[1.25rem] rounded-[1.25rem] bg-white border border-[rgba(97,150,246,0.40)]  '>
              <div className="flex-[1_0_0] flex items-start xmd:flex-col xmd:justify-end self-stretch xmd:space-y-[0.75rem] md:space-x-[1.25rem]">
                <Section title={person?.name} subTitle={person?.position} />
                <div className=" min-w-[0.0625rem] h-full bg-[rgba(97,150,246,0.20)]"></div>
                <div className="xmd:px-[1rem] flex flex-col items-start xmd:space-y-[0.875rem] space-y-[1rem] grow-[1] shrink-0 basis-0">
                  {person?.about_person?.map((p, j) => (
                    <div className='flex flex-col items-start xmd:space-y-[0.875rem] space-y-[1rem]' key={j}>
                      <div className="flex items-start xmd:flex-col self-stretch xmd:space-y-[0.875rem] md:space-x-[1.5rem]">
                        <Section1 title={p?.label} />
                        <div className=" flex flex-col items-start self-stretch xmd:space-y-[0.5rem] space-y-[0.375rem] grow-[1] shrink-0 basis-0">
                          {p?.lists_award?.map((award, k) => (
                            <div className='flex flex-col items-start self-stretch xmd:space-y-[0.5rem] space-y-[0.375rem]' key={k}>
                              <Section2 title={award?.name_award} subTitle={award?.desc_short} />
                              {p?.lists_award?.length - 1 !== k && <div className="xmd:w-full w-[45.8125rem] h-[0.0125rem] bg-[rgba(97,150,246,0.20)]"></div>}
                            </div>
                          ))}
                        </div>
                      </div>
                      {person?.about_person?.length - 1 !== j && <div className="xmd:h-[0.375rem] h-[0.0125rem] xmd:bg-[#fafafa] w-full xmd:w-full bg-[rgba(97,150,246,0.20)]"></div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Ceo
