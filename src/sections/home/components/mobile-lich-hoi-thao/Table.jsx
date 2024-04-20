import { data_table } from '@/lib/data'
import { cn } from '@/lib/utils';
const Table = ({ isMobile,dataLichHoithaos }) => {

  function layGioTuThoiGian(thoiGian) {
    const gio = thoiGian.split(' ')[1];
    var ngay_cat = gio.split(":")[0] + ":" + gio.split(":")[1];

    return ngay_cat;
  }
  function layNgayTuThoiGian(thoiGian) {
    const ngay = thoiGian.split(' ')[0];
    var ngay_cat = ngay.split("-")[1] + "-" + ngay.split("-")[2];
    return ngay_cat;
  }
  const className = {
    th_text: "mx-auto text-white  font-semibold  text-[0.875rem] leading-[130%] w-max",
    wrap: "min-w-full md:!border-primary-50 bg-white rounded-[0.5rem]",
    td_boder: " !text-greyscaletext-40 !text-[0.75rem]"
  }
  return (
    <div className={cn("ml-[0.625rem] w-min overflow-hidden", className.wrap)}>
      <table className=' min-w-full' >
        <thead>
          <tr className="bg-linear-l5">
            <th className={cn(className.td_boder, " w-[3.875rem]  border-b border-r  px-[0rem]  h-[3.175rem]")}>
              <div className={cn("", className.th_text)}>
                Ngày
              </div>
            </th>

            <th className={cn(className.td_boder, " w-[3.8125rem]  border-b border-r  ")}>
              <div className={cn("", className.th_text)}>
                Giờ
              </div>
            </th>

            <th className={cn(className.td_boder, "w-[5.1875rem] border-b border-r px-[0rem]")}>
              <div className={cn("", className.th_text)}>
                Địa điểm
              </div>
            </th>
            <th className={cn(className.td_boder, "w-[5.96875rem] border-b border-r px-[0rem] ")}>
              <div className={cn("", className.th_text)}>
                Đất nước
              </div>
            </th>
            <th className={cn(className.td_boder, "w-[24rem]  border-b border-r px-[0rem] ")}>
              <div className={cn("", className.th_text)}>
                Sự kiện
              </div>
            </th>
            <th className={cn(className.td_boder, "   border-b px-[0rem]")}>
              <div className={cn("", className.th_text)}>
                {isMobile ? "Đăng kí" : <>Chi tiết và <br /> đăng ký</>}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {dataLichHoithaos?.map((data, i) => (

            <tr key={i} className={i % 2 === 1 ? " bg-[rgba(134,189,253,0.10)] md:bg-[#FBFBFB]" : ""}>
              <td className={cn(className.td_boder, " text-center border-b border-r  px-[0rem] h-[3.1rem] min-h-[3.1rem] text-greyscaletext-50 text-[0.75rem] not-italic font-medium leading-[1.3125rem]")}>
                {layNgayTuThoiGian(data?.date_time)}
              </td>
              <td className={cn(className.td_boder, " text-center border-b border-r xmd:px-[0rem] not-italic font-semibold leading-[130%]")}>
                {layGioTuThoiGian(data?.date_time)}
              </td>

              <td className={cn(className.td_boder, "text-[0.875rem] font-medium leading-[150%] text-center border-b border-r px-[0rem]")}>
                <div className="  mx-auto py-[0.25rem] rounded-[1.25rem]  w-max
                  ">
                  {data?.location_primary_category?.name}
                </div>
              </td>
              <td className={cn(className.td_boder, " text-center border-b border-r px-[0rem] text-[0.875rem] font-medium leading-[150%]")}>{data?.country_primary_category?.name}</td>
              <td className={cn(className.td_boder, " border-b border-r px-[0.75rem] text-primary-50 text-[0.875rem] font-semibold leading-[150%]")}>{data?.title} </td>
              <td className={cn(className.td_boder, " border-b text-sm not-italic font-semibold leading-[130%] ")}>
                <button className='mx-auto  flex h-[2rem] items-center text-primary-40 rounded-[0.5rem] border-solid'>
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
