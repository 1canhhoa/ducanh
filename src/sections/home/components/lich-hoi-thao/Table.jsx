<<<<<<< HEAD
import React from 'react'
import { data_table } from '@/lib/data'
import { cn } from '@/lib/utils';
const Table = ({ isMobile }) => {
=======

import { cn } from '@/lib/utils';
const Table = ({ isMobile,dataLichHoithaos }) => {
>>>>>>> master
  function catChuoiNgayThang(ngayThang) {
    var parts = ngayThang.split('/');
    var ngay = parts[0];
    var thang = parts[1];
    return ngay + '/' + thang;
  }
<<<<<<< HEAD



  const className = {
    wrap: "md:!border min-w-full md:!border-primary-50 bg-white xmd:rounded-[0.5rem] rounded-[0.75rem]",
    th_text: "xmd:mx-auto text-white  font-semibold  xmd:text-[0.875rem] xmd:leading-[130%] text-[1rem] w-max leading-[150%]",
    td_boder: "md:border-none  xmd:!text-greyscaletext-40 xmd:!text-[0.75rem]"
  }
  return (
    <div className={cn("xmd:ml-[0.625rem] xmd:w-min overflow-hidden", className.wrap)}>
      <table className=' min-w-full' >
        <thead>
          <tr className="bg-linear-l5">
            <th className={cn(className.td_boder, "  border-b border-r  xmd:px-[0rem]  px-[1.25rem] xmd:h-[3.175rem] h-[3.875rem] ")}>
=======
  function layGioTuThoiGian(thoiGian) {
    const gio = thoiGian.split(' ')[1];
    return gio;
  }
  function layNgayTuThoiGian(thoiGian) {
    const ngay = thoiGian.split(' ')[0];
    return ngay;
  }
  const className = {
    th_text: " text-white  font-semibold text-[1rem] w-max leading-[1.5]",
    wrap: "!border min-w-full md:!border-primary-50 bg-white rounded-[0.75rem]",
    td_boder: "border-none "
  }
  return (
    <div className={cn("overflow-hidden", className.wrap)}>
      <table className=' min-w-full' >
        <thead>
          <tr className="bg-linear-l5">
            <th className={cn(className.td_boder, " w-[3.875rem]  border-b border-r   px-[1.25rem] h-[3.875rem] ")}>
>>>>>>> master
              <div className={cn("", className.th_text)}>
                {isMobile ? 'Ngày' : 'Ngày - Giờ'}
              </div>
            </th>

<<<<<<< HEAD
            {isMobile && <th className={cn(className.td_boder, "  border-b border-r  ")}>
=======
            {isMobile && <th className={cn(className.td_boder, " w-[3.8125rem]  border-b border-r  ")}>
>>>>>>> master
              <div className={cn("", className.th_text)}>
                Giờ
              </div>
            </th>}

<<<<<<< HEAD
            <th className={cn(className.td_boder, " border-b border-r xmd:px-[0rem] px-[0.5rem]")}>
=======
            <th className={cn(className.td_boder, "border-b border-r px-[0.5rem]")}>
>>>>>>> master
              <div className={cn("", className.th_text)}>
                Địa điểm
              </div>
            </th>
<<<<<<< HEAD
            <th className={cn(className.td_boder, " border-b border-r xmd:px-[0rem]  px-[1rem] ")}>
=======
            <th className={cn(className.td_boder, "border-b border-r  px-[1rem] ")}>
>>>>>>> master
              <div className={cn("", className.th_text)}>
                Đất nước
              </div>
            </th>
<<<<<<< HEAD
            <th className={cn(className.td_boder, "  border-b border-r xmd:px-[0rem]  px-[1.5rem] ")}>
              <div className={cn("", className.th_text)}>
                Sự kiện
              </div>
            </th>
            <th className={cn(className.td_boder, "   border-b xmd:px-[0rem] px-[2.25rem]")}>
=======
            <th className={cn(className.td_boder, " border-b border-r px-[1.5rem] ")}>
              <div className={cn("", className.th_text)}> 
                Sự kiện
              </div>
            </th>
            <th className={cn(className.td_boder, "   border-b px-[2.25rem]")}>
>>>>>>> master
              <div className={cn("", className.th_text)}>
                {isMobile ? "Đăng kí" : <>Chi tiết và <br /> đăng ký</>}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
<<<<<<< HEAD
          {data_table?.map((data, i) => (

            <tr key={i} className={i % 2 === 1 ? " bg-[rgba(134,189,253,0.10)] md:bg-[#FBFBFB]" : ""}>
              <td className={cn(className.td_boder, " text-center border-b border-r  xmd:px-[0rem] px-[1.25rem] h-[3.1rem] min-h-[3.1rem] text-greyscaletext-50 text-[0.75rem] not-italic font-medium leading-[1.3125rem]")}>

                {isMobile ? catChuoiNgayThang(data.time) : data.time}
=======
          {dataLichHoithaos?.map((data, i) => (

            <tr key={i} className={i % 2 === 1 ? " bg-[rgba(134,189,253,0.10)] md:bg-[#FBFBFB]" : ""}>
              <td className={cn(className.td_boder, " text-center border-b border-r  px-[1.25rem] h-[3.1rem] min-h-[3.1rem] text-greyscaletext-50 text-[0.75rem] not-italic font-medium leading-[1.3125rem]")}>

                {isMobile ? layNgayTuThoiGian(data?.date_time) : layNgayTuThoiGian(data?.date_time)}
>>>>>>> master

                {!isMobile && <div className='flex h-[1.25rem] justify-center items-center gap-[0.73206rem] shrink-0 px-[0.5rem] py-0 rounded-[1.1713rem]
                  text-[#262626] text-[0.75rem] font-medium leading-[1.3125rem] bg-[#F0FAFF]
                  '>
<<<<<<< HEAD
                  {data.timeDetail}
                </div>}
              </td>
              {isMobile && <td className={cn(className.td_boder, " text-center border-b border-r xmd:px-[0rem] not-italic font-semibold leading-[130%]")}>
                {data.timeDetail}
              </td>}

              <td className={cn(className.td_boder, "text-[0.875rem] font-medium leading-[150%] text-center border-b border-r  xmd:px-[0rem] px-[0.5rem] ")}>
                <div className="  mx-auto md:px-[0.75rem] py-[0.25rem] rounded-[1.25rem] md:bg-[#EBF5FA] w-max
                  ">
                  {data.place}
                </div>
              </td>
              <td className={cn(className.td_boder, " text-center border-b border-r  xmd:px-[0rem] px-[1rem]              text-[0.875rem] font-medium leading-[150%]")}>{data.country}</td>
              <td className={cn(className.td_boder, "xmd:max-w-[15rem] border-b border-r  xmd:px-[0.75rem] px-[1.5rem] text-primary-50 text-[0.875rem] font-semibold leading-[150%]")}>{data.event} </td>
              <td className={cn(className.td_boder, " border-b text-sm not-italic font-semibold leading-[130%] ")}>
                <button className='mx-auto  flex h-[2rem] items-center text-primary-40 md:border md:border-primary-40 md:px-[1rem] md:py-[0.625rem] rounded-[0.5rem] border-solid'>
=======
                  {layGioTuThoiGian(data?.date_time)}
                </div>}
              </td>
              {isMobile && <td className={cn(className.td_boder, " text-center border-b border-r not-italic font-semibold leading-[130%]")}>
                {layGioTuThoiGian(data?.date_time)}
              </td>}

              <td className={cn(className.td_boder, "text-[0.875rem] font-medium leading-[150%] text-center border-b border-r  px-[0.5rem] ")}>
                <div className="  mx-auto px-[0.75rem] py-[0.25rem] rounded-[1.25rem] bg-[#EBF5FA] w-max
                  ">
                  {data?.location_primary_category?.name}
                </div>
              </td>
              <td className={cn(className.td_boder, " text-center border-b border-r  px-[1rem] text-[0.875rem] font-medium leading-[150%]")}>{data?.country_primary_category?.name}</td>
              <td className={cn(className.td_boder, " border-b border-r px-[1.5rem] text-primary-50 text-[0.875rem] font-semibold leading-[150%]")}>{data?.title} </td>
              <td className={cn(className.td_boder, " border-b text-sm not-italic font-semibold leading-[130%] ")}>
                <button className='mx-auto  flex h-[2rem] items-center text-primary-40 border border-primary-40 px-[1rem] py-[0.625rem] rounded-[0.5rem] border-solid'>
>>>>>>> master
                  {!isMobile ? "chi tiết" :
                    <>
                      Xem chi tiết
                      <span className="text-[1.2rem] ml-[0.3rem]">
                        ➛
                      </span>
                    </>}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
