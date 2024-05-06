"use client"
import Timestamp from "./Timestamp";
import "./style.css"
const TonChi = ({ t, dataTonchi, isMobile }) => {
  console.log({ lll: dataTonchi });
  return (
    <div className='mt-[8.13rem] xmd:mt-[0rem] w-full'>
      <div className='mx-auto xmd:px-[0.75rem]  md:w-[77rem]'>
        <div className='text-primary-50 text-5xl xmd:text-[2rem] font-extrabold xmd:leading-[1.3] leading-[1.2] xmd:tracking-[-0.04rem] tracking-[-0.03rem]'>
          {t?.credo}
        </div>
        {isMobile &&
          <div className="mt-[1rem] text-lg not-italic font-semibold leading-[150%]"><div dangerouslySetInnerHTML={{ __html: dataTonchi?.desc_ton_chi_mobi }} /></div>

        }
        <div className="tonchi mt-[3rem] xmd:mt-[0.88rem]">
          <div dangerouslySetInnerHTML={{ __html: dataTonchi?.desc_ton_chi }} />
        </div>
        <div className="mt-[2rem] flex flex-col xmd:space-y-[0.5rem] space-y-[1rem]">
          {dataTonchi?.lists_ton_chi?.map((d, i) => (
            <div key={i} className=" text-[color:var(--PRIMARY-50,var(--Xanh,#2B46A8))] md:flex md:items-start md:text-base not-italic font-bold leading-[160%]">
              <span className="min-w-max mr-[0.25rem]">{d?.name}</span>
              <span className="text-[color:var(--Xanh,#3F3F3F)] text-base not-italic font-normal leading-[160%]">{d?.concept}</span>
            </div>

          ))}
        </div>

        <div className="xmd:mt-[2rem] mt-[3rem] md:w-[76.875rem] md:h-[12.625rem] shrink-0 rounded-2xl bg-linear-tc flex items-center justify-center">
          <div className="xmd:w-[18.8125rem] py-[1.37rem] w-[65.875rem] text-[color:var(--PRIMARY-50,var(--Xanh,#2B46A8))] text-2xl xmd:text-[1.125rem]  not-italic font-bold leading-[150%] xmd:tracking-normal tracking-[-0.015rem]">
            <svg className="float-left mr-[0.25rem] md:hidden" xmlns="http://www.w3.org/2000/svg" width="29" height="21" viewBox="0 0 29 21" fill="none">
              <path d="M7.07874 21C5.86089 21 4.79528 20.7742 3.88189 20.3226C2.9685 19.8208 2.23272 19.1685 1.67454 18.3656C1.1671 17.5627 0.761155 16.6093 0.456693 15.5054C0.152231 14.4014 0 13.2473 0 12.043C0 9.58423 0.634296 7.27598 1.90289 5.11828C3.22222 2.96058 5.25197 1.25448 7.99213 0L8.67717 1.35484C7.25634 2.00717 5.98775 2.96058 4.87139 4.21506C3.80577 5.41936 3.17148 6.69893 2.9685 8.05377C2.66404 9.10753 2.63867 10.1362 2.89239 11.1398C4.00875 9.93548 5.50569 9.33333 7.3832 9.33333C9.10849 9.33333 10.5293 9.86021 11.6457 10.914C12.762 11.9176 13.3202 13.3226 13.3202 15.129C13.3202 16.8853 12.7367 18.3154 11.5696 19.4194C10.4024 20.4731 8.90551 21 7.07874 21ZM22.7585 21C21.5407 21 20.4751 20.7742 19.5617 20.3226C18.6483 19.8208 17.9125 19.1685 17.3543 18.3656C16.8469 17.5627 16.4409 16.6093 16.1365 15.5054C15.832 14.4014 15.6798 13.2473 15.6798 12.043C15.6798 9.58423 16.3141 7.27598 17.5827 5.11828C18.902 2.96058 20.9318 1.25448 23.6719 0L24.357 1.35484C22.9361 2.00717 21.6675 2.96058 20.5512 4.21506C19.4856 5.41936 18.8513 6.69893 18.6483 8.05377C18.3438 9.10753 18.3185 10.1362 18.5722 11.1398C19.6885 9.93548 21.1855 9.33333 23.063 9.33333C24.7883 9.33333 26.2091 9.86021 27.3255 10.914C28.4418 11.9176 29 13.3226 29 15.129C29 16.8853 28.4165 18.3154 27.2493 19.4194C26.0822 20.4731 24.5853 21 22.7585 21Z" fill="#132B7D" />
            </svg> {dataTonchi?.final_concept}
          </div>
        </div>
        <Timestamp t={t} />
      </div>
    </div>
  )
}

export default TonChi
