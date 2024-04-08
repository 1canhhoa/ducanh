import { data } from 'autoprefixer'
import Image from 'next/image'
import Link from 'next/link'
const data_section = [
  "Thông tin du học", "HỌC BỔNG", "VỀ CÔNG TY"
]
const data1_section = [
  "THI PTE ACADEMY", "HỌC TIẾNG ANH", "VIỆC LÀM - ĐỊNH CƯ"
]
const Section = ({ data }) => {
  return <div className="flex flex-col items-start space-y-8">
    {data.map((d, i) => (
      <div key={i} className="w-max text-white button1  uppercase">
        {d}
      </div>
    ))}

  </div>
}

const data_section1 = [
  { place: "Hà Nội", place_detail: "54 - 56 Tuệ Tĩnh", number: "+94 906 225 454" },
  { place: "TP. Hồ Chí Minh", place_detail: "172 Bùi Thị Xuân, Q.1", number: "+94 963 049 860" },
  { place: "Vinh", place_detail: "172 Bùi Thị Xuân, Q.1", number: "+ 94 906 225 454" },
  { place: "Quảng ngãi", place_detail: "01 Trần Thị Hiệp", number: "+94 906 225 454" },
  { place: "Viêng chăn", place_detail: "Tòa nhà Iconic, Phonxay", number: "+94 906 225 454" },
  { place: "melbourne", place_detail: "276 Flinders Street", number: "+94 906 225 454" }
]
export default function Footer() {
  return (
    <footer className='w-screen xmd:px-[1.5rem] relative md:h-[28.875rem] shrink-0 bg-primary-40 mt-[6rem]'>
      <div className='md:absolute md:top-[2.5rem] md:left-1/2 md:-translate-x-1/2 flex flex-col xmd:flex-col-reverse xmd:gap-[1.5rem] space-y-[2.81rem] items-center'>
        <div className='xmd:w-[19rem] xmd:text-white text-primary-10 text-center xmd:text-[1.125rem] text-xl not-italic font-bold xmd:leading-[160%] leading-[120%] xmd:tracking-normal tracking-[-0.00313rem]'>
          CÔNG TY TƯ VẤN DU HỌC & DỊCH THUẬT ĐỨC ANH
        </div>
        <Link
          id='logo_nav'
          href='/'
        >
          <Image priority alt="ảnh logo du học đức anh" src={'/images/footer/logo.png'} width={235} height={69}
            className="md:mr-12  xmd:w-[14.5625rem] xmd:h-[4.271rem]  xlg:w-[19rem] xlg:h-[6.9375rem]   w-[14.5625rem] h-[4.271rem]" />
        </Link>
      </div>
      <div className='flex  xmd:flex-col justify-between items-start md:px-[3.75rem] xmd:space-y-[2.63rem] xmd:pt-[3.42rem] pt-[6.75rem]'>
        <div className='inline-flex xmd:flex-col items-start xmd:space-y-[2rem] md:space-x-[3.4375rem]'>
          <Section data={data_section} />
          <Section data={data1_section} />
        </div>
        <div className=" flex md:w-[26.125rem] flex-col items-start space-y-[0.4375rem]">
          <div className="h5 font-semibold text-white flex items-center xmd:space-x-[0.56rem]">
            <svg className='md:hidden' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <mask id="path-2-inside-1_617_21001" fill="white">
                <path d="M15.5 15.1875H17V14.1875H15.5V15.1875Z" />
              </mask>
              <path d="M15.5 15.1875H17V14.1875H15.5V15.1875Z" fill="#F0FAFF" />
              <path d="M15.5 15.1875H14V16.6875H15.5V15.1875ZM17 15.1875V16.6875H18.5V15.1875H17ZM17 14.1875H18.5V12.6875H17V14.1875ZM15.5 14.1875V12.6875H14V14.1875H15.5ZM15.5 16.6875H17V13.6875H15.5V16.6875ZM18.5 15.1875V14.1875H15.5V15.1875H18.5ZM17 12.6875H15.5V15.6875H17V12.6875ZM14 14.1875V15.1875H17V14.1875H14Z" fill="#F0FAFF" mask="url(#path-2-inside-1_617_21001)" />
              <path d="M17 17.1875H15.5V16.1875H17V17.1875Z" fill="#F0FAFF" />
              <path d="M15.5 19.1875H17V18.1875H15.5V19.1875Z" fill="#F0FAFF" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 2.1875L16.5 3.1875V12.1875H18.5C18.7761 12.1875 19 12.4114 19 12.6875V21.1875H19.5C19.7761 21.1875 20 21.4114 20 21.6875C20 21.9636 19.7761 22.1875 19.5 22.1875H4.5C4.22386 22.1875 4 21.9636 4 21.6875C4 21.4114 4.22386 21.1875 4.5 21.1875H5V10.6875C5 10.4114 5.22385 10.1875 5.5 10.1875H6.5H7.5H8.5V2.1875ZM18 21.1875H17V20.1875H15.5V21.1875H14.5V13.1875H18V21.1875ZM8.5 11.1875H6V21.1875H8.5V11.1875ZM11 6.6875H10V7.6875H11V6.6875ZM12 6.6875H13V7.6875H12V6.6875ZM15 6.6875H14V7.6875H15V6.6875ZM10 8.6875H11V9.6875H10V8.6875ZM13 8.6875H12V9.6875H13V8.6875ZM14 8.6875H15V9.6875H14V8.6875ZM11 10.6875H10V11.6875H11V10.6875ZM12 10.6875H13V11.6875H12V10.6875ZM15 10.6875H14V11.6875H15V10.6875ZM10 12.6875H11V13.6875H10V12.6875ZM13 12.6875H12V13.6875H13V12.6875ZM11 14.6875H10V15.6875H11V14.6875ZM12 14.6875H13V15.6875H12V14.6875ZM10 16.6875H11V17.6875H10V16.6875ZM13 16.6875H12V17.6875H13V16.6875ZM11 18.6875H10V19.6875H11V18.6875ZM12 18.6875H13V19.6875H12V18.6875Z" fill="#F0FAFF" />
            </svg>
            Chi nhánh văn phòng
          </div>
          <div className="  w-[20.4375rem] md:w-[26.125rem] h-[0.0625rem] bg-[#4E91F6]"></div>
          <div className="md:flex md:flex-col xmd:grid xmd:grid-cols-2  xmd:gap-x-[1.38rem] w-max items-start xmd:gap-y-[1.3rem] md:space-y-[1rem] pt-[0.6rem]">
            {data_section1.map((d, i) => (
              <div className='sub1 xmd:flex-col text-white flex xmd:justify-start xmd:items-start items-center justify-center xmd:space-y-[0.75rem] md:space-x-[1.56rem]'>
                <div className="min-w-[6.2rem] xmd:font-bold xmd:leading-normal">{d.place}</div>
                <div className="min-w-[9.75rem] xmd:body12 xmd:font-semibold xmd:text-primary-10">{d.place_detail}</div>
                <div className=" xmd:body12 xmd:font-semibold xmd:text-primary-10">{d.number}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex xmd:flex-col-reverse justify-start xmd:items-start items-end md:space-x-[12.3rem] md:ml-[3.75rem]'>
        <div className="inline-flex items-start space-x-[0.75rem]">
          <svg className='size-[1.5rem]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_401_23428)">
              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#F0FAFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15.75 8.25H14.25C13.6533 8.25 13.081 8.48705 12.659 8.90901C12.2371 9.33097 12 9.90326 12 10.5V21" stroke="#F0FAFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9 13.5H15" stroke="#F0FAFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_401_23428">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg className='size-[1.5rem]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 3.5H19L4 20.5H5L20 3.5Z" stroke="white" />
            <path d="M3.5 3.5H6.07576L20.5 20.5H17.9242L3.5 3.5Z" fill="#3468CD" stroke="white" />
          </svg>
          <svg className='size-[1.5rem]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 12L10.5 9V15L15 12Z" stroke="#F0FAFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2.25 12.0001C2.25 14.8041 2.53781 16.4485 2.75719 17.2941C2.8152 17.5242 2.92694 17.7371 3.08322 17.9156C3.23951 18.094 3.43589 18.2329 3.65625 18.3207C6.79875 19.5329 12 19.5001 12 19.5001C12 19.5001 17.2012 19.5329 20.3438 18.3207C20.5648 18.2334 20.7619 18.0947 20.9189 17.9163C21.0759 17.7378 21.1882 17.5246 21.2466 17.2941C21.4659 16.4504 21.7537 14.8041 21.7537 12.0001C21.7537 9.19602 21.4659 7.55165 21.2466 6.70602C21.1888 6.47477 21.0768 6.26059 20.9198 6.08126C20.7628 5.90192 20.5653 5.76257 20.3438 5.67477C17.2012 4.46727 12 4.50009 12 4.50009C12 4.50009 6.79875 4.46727 3.65625 5.67946C3.43466 5.76726 3.23718 5.9066 3.08017 6.08594C2.92317 6.26528 2.81116 6.47945 2.75344 6.71071C2.53781 7.55071 2.25 9.19602 2.25 12.0001Z" stroke="#F0FAFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className="inline-flex xmd:flex-col-reverse items-start md:space-x-[12rem]">
          <div className="flex flex-col items-start space-y-[0.25rem]">
            <div className="text-[1rem] text-white">
              Tel: 024 3971 6229
            </div>
            <div className="text-[1rem] text-white">
              Tel: 028 3929 3995
            </div>
          </div>
          <div className="flex flex-col items-start space-y-[0.25rem]">
            <div className="text-[1rem] text-white">
              Hotline chung: 098 870 9698
            </div>
            <div className="text-[1rem] text-white">
              Email: duhoc@ducanh.edu.vn
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-[2.25rem] w-[92.5rem] h-[0.03125rem] shrink-0 bg-primary-10"></div>
      <div className='flex pt-[1.03rem] px-[3.75rem] justify-between items-center'>
        <div className="inline-flex items-start space-x-[1.5rem]">
          <div className="sub2 text-white">
            @2023 DucAnh Educonnect
          </div>
          <div className="sub2 text-white">
            @2023 DucAnh Educonnect
          </div>
        </div>
        <div className=" inline-flex items-center space-x-[2rem]">
          <div className="button2 text-white">Policy</div>
          <div className="flex h-[1.5rem] justify-center items-center space-x-[0.625rem] rounded-[0.625rem]">
            <div className="button2 text-white">Policy</div>
            <svg className='size-[1.5rem]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 16L12 9L19 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div> */}

    </footer>
  )
}
