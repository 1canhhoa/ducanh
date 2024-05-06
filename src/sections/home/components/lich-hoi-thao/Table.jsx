
import { cn } from '@/lib/utils';
const Table = ({ isMobile, dataLichHoithaos }) => {
  function catChuoiNgayThang(ngayThang) {
    var parts = ngayThang.split('/');
    var ngay = parts[0];
    var thang = parts[1];
    return ngay + '/' + thang;
  }
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
              <div className={cn("", className.th_text)}>
                {isMobile ? 'Ngày' : 'Ngày - Giờ'}
              </div>
            </th>

            {isMobile && <th className={cn(className.td_boder, " w-[3.8125rem]  border-b border-r  ")}>
              <div className={cn("", className.th_text)}>
                Giờ
              </div>
            </th>}

            <th className={cn(className.td_boder, "border-b border-r px-[0.5rem]")}>
              <div className={cn("", className.th_text)}>
                Địa điểm
              </div>
            </th>
            <th className={cn(className.td_boder, "border-b border-r  px-[1rem] ")}>
              <div className={cn("", className.th_text)}>
                Đất nước
              </div>
            </th>
            <th className={cn(className.td_boder, " border-b border-r px-[1.5rem] ")}>
              <div className={cn("", className.th_text)}>
                Sự kiện
              </div>
            </th>
            <th className={cn(className.td_boder, "   border-b px-[2.25rem]")}>
              <div className={cn("", className.th_text)}>
                {isMobile ? "Đăng kí" : <>Chi tiết và <br /> đăng ký</>}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {dataLichHoithaos?.map((data, i) => (

            <tr key={i} className={i % 2 === 1 ? " bg-[rgba(134,189,253,0.10)] md:bg-[#FBFBFB]" : ""}>
              <td className={cn(className.td_boder, " text-center border-b border-r  px-[1.25rem] h-[3.1rem] min-h-[3.1rem] text-greyscaletext-50 text-[0.75rem] not-italic font-medium leading-[1.3125rem]")}>

                {isMobile ? layNgayTuThoiGian(data?.date_time) : layNgayTuThoiGian(data?.date_time)}

                {!isMobile && <div className='flex h-[1.25rem] justify-center items-center gap-[0.73206rem] shrink-0 px-[0.5rem] py-0 rounded-[1.1713rem]
                  text-[#262626] text-[0.75rem] font-medium leading-[1.3125rem] bg-[#F0FAFF]
                  '>
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
                <a href={'landing-su-kien'}>
                  <button href={'landing-su-kien'} className='mx-auto duration-200 ease-linear hover:bg-primary-50 hover:text-white flex h-[2rem] items-center text-primary-40 border border-primary-40 px-[1rem] py-[0.625rem] rounded-[0.5rem] border-solid'>
                    {!isMobile ? "chi tiết" :
                      <>
                        Xem chi tiết
                        <span className="text-[1.2rem] ml-[0.3rem]">
                          ➛
                        </span>
                      </>}
                  </button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
