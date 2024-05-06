import ScrollUp from '@/components/scroll-to-top/ScrollUp'
import getData from '@/lib/getData'
import Image from 'next/image'
import Link from 'next/link'
const Section = ({ data }) => {
  return (
    <div className='flex flex-col items-start space-y-8'>
      {data?.map((d, i) => (
        <div
          key={i}
          className='w-max text-white button1  uppercase'
        >
          {d?.title}
        </div>
      ))}
    </div>
  )
}
export default async function Footer() {
  const datasFooter = await getData('/wp-json/acf/v3/pages/476')
  const footer = datasFooter?.acf?.footer
  return (
    <footer className='w-full relative  xmd:px-[1.5rem] shrink-0 bg-primary-40 mt-[6rem]'>
      {/* logo,name */}
      <div className='md:absolute md:top-[2.5rem] md:left-1/2 md:-translate-x-1/2 flex flex-col xmd:flex-col-reverse xmd:gap-[1.5rem] space-y-[2.81rem] items-center'>
        <div className='xmd:w-[19rem] xmd:text-white text-primary-10 text-center xmd:text-[1.125rem] text-xl not-italic font-bold xmd:leading-[160%] leading-[120%] xmd:tracking-normal tracking-[-0.00313rem]'>
          {footer?.name_company}
        </div>
        <Link
          id='logo_nav'
          href='/'
        >
          <Image
            loading='lazy'
            alt='ảnh logo du học đức anh'
            src={footer?.logo?.url}
            width={235}
            height={69}
            className='md:mr-12  xmd:w-[14.5625rem] xmd:h-[4.271rem]  xlg:w-[19rem] xlg:h-[6.9375rem]   w-[14.5625rem] h-[4.271rem]'
          />
        </Link>
      </div>
      {/* thong tin va chi nhanh */}
      <div className='flex  xmd:flex-col justify-between items-start md:px-[3.75rem] xmd:space-y-[2.63rem] xmd:pt-[3.42rem] pt-[6.75rem]'>
        <div className='inline-flex xmd:flex-col items-start xmd:space-y-[2rem] md:space-x-[3.4375rem]'>
          <Section data={footer?.main_footer} />
          <Section data={footer?.main2_footer} />
        </div>
        <div className=' flex md:w-[26.125rem] flex-col items-start space-y-[0.4375rem]'>
          <div className='h5 font-semibold text-white flex items-center xmd:space-x-[0.56rem]'>
            <svg
              className='md:hidden'
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={25}
              viewBox='0 0 24 25'
              fill='none'
            >
              <mask
                id='path-2-inside-1_617_21001'
                fill='white'
              >
                <path d='M15.5 15.1875H17V14.1875H15.5V15.1875Z' />
              </mask>
              <path
                d='M15.5 15.1875H17V14.1875H15.5V15.1875Z'
                fill='#F0FAFF'
              />
              <path
                d='M15.5 15.1875H14V16.6875H15.5V15.1875ZM17 15.1875V16.6875H18.5V15.1875H17ZM17 14.1875H18.5V12.6875H17V14.1875ZM15.5 14.1875V12.6875H14V14.1875H15.5ZM15.5 16.6875H17V13.6875H15.5V16.6875ZM18.5 15.1875V14.1875H15.5V15.1875H18.5ZM17 12.6875H15.5V15.6875H17V12.6875ZM14 14.1875V15.1875H17V14.1875H14Z'
                fill='#F0FAFF'
                mask='url(#path-2-inside-1_617_21001)'
              />
              <path
                d='M17 17.1875H15.5V16.1875H17V17.1875Z'
                fill='#F0FAFF'
              />
              <path
                d='M15.5 19.1875H17V18.1875H15.5V19.1875Z'
                fill='#F0FAFF'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.5 2.1875L16.5 3.1875V12.1875H18.5C18.7761 12.1875 19 12.4114 19 12.6875V21.1875H19.5C19.7761 21.1875 20 21.4114 20 21.6875C20 21.9636 19.7761 22.1875 19.5 22.1875H4.5C4.22386 22.1875 4 21.9636 4 21.6875C4 21.4114 4.22386 21.1875 4.5 21.1875H5V10.6875C5 10.4114 5.22385 10.1875 5.5 10.1875H6.5H7.5H8.5V2.1875ZM18 21.1875H17V20.1875H15.5V21.1875H14.5V13.1875H18V21.1875ZM8.5 11.1875H6V21.1875H8.5V11.1875ZM11 6.6875H10V7.6875H11V6.6875ZM12 6.6875H13V7.6875H12V6.6875ZM15 6.6875H14V7.6875H15V6.6875ZM10 8.6875H11V9.6875H10V8.6875ZM13 8.6875H12V9.6875H13V8.6875ZM14 8.6875H15V9.6875H14V8.6875ZM11 10.6875H10V11.6875H11V10.6875ZM12 10.6875H13V11.6875H12V10.6875ZM15 10.6875H14V11.6875H15V10.6875ZM10 12.6875H11V13.6875H10V12.6875ZM13 12.6875H12V13.6875H13V12.6875ZM11 14.6875H10V15.6875H11V14.6875ZM12 14.6875H13V15.6875H12V14.6875ZM10 16.6875H11V17.6875H10V16.6875ZM13 16.6875H12V17.6875H13V16.6875ZM11 18.6875H10V19.6875H11V18.6875ZM12 18.6875H13V19.6875H12V18.6875Z'
                fill='#F0FAFF'
              />
            </svg>
            Chi nhánh văn phòng
          </div>
          <div className='  w-[20.4375rem] md:w-[26.125rem] h-[0.0625rem] bg-[#4E91F6]'></div>
          <div className='md:flex md:flex-col xmd:grid xmd:grid-cols-2  xmd:gap-x-[1.38rem] w-max items-start xmd:gap-y-[1.3rem] md:space-y-[1rem] pt-[0.6rem]'>
            {footer?.chi_nhanh_van_phong?.map((d, i) => (
              <div
                key={i}
                className='sub1 xmd:flex-col text-white flex xmd:justify-start xmd:items-start items-center justify-center xmd:space-y-[0.75rem] md:space-x-[1.56rem]'
              >
                <div className='min-w-[6.2rem] xmd:font-bold xmd:leading-normal'>
                  {d?.city}
                </div>
                <div className='min-w-[9.75rem] xmd:body12 xmd:font-semibold xmd:text-primary-10'>
                  {d?.place}
                </div>
                <div className=' xmd:body12 xmd:font-semibold xmd:text-primary-10'>
                  {d?.phone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* social and  hotline contact */}
      <div className='flex xmd:flex-col-reverse xmd:space-y-[2.25rem] justify-start xmd:items-start items-end md:space-x-[12.3rem] md:ml-[3.75rem]'>
        <div className='inline-flex items-start xmd:mt-[2.25rem] space-x-[0.75rem]'>
          <svg
            className='size-[1.5rem]'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <g clip-path='url(#clip0_401_23428)'>
              <path
                d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
                stroke='#F0FAFF'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M15.75 8.25H14.25C13.6533 8.25 13.081 8.48705 12.659 8.90901C12.2371 9.33097 12 9.90326 12 10.5V21'
                stroke='#F0FAFF'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M9 13.5H15'
                stroke='#F0FAFF'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </g>
            <defs>
              <clipPath id='clip0_401_23428'>
                <rect
                  width={24}
                  height={24}
                  fill='white'
                />
              </clipPath>
            </defs>
          </svg>

          <svg
            className='size-[1.5rem]'
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M20 3.5H19L4 20.5H5L20 3.5Z'
              stroke='white'
            />
            <path
              d='M3.5 3.5H6.07576L20.5 20.5H17.9242L3.5 3.5Z'
              fill='#3468CD'
              stroke='white'
            />
          </svg>

          <svg
            className='size-[1.5rem]'
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M15 12L10.5 9V15L15 12Z'
              stroke='#F0FAFF'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M2.25 12.0001C2.25 14.8041 2.53781 16.4485 2.75719 17.2941C2.8152 17.5242 2.92694 17.7371 3.08322 17.9156C3.23951 18.094 3.43589 18.2329 3.65625 18.3207C6.79875 19.5329 12 19.5001 12 19.5001C12 19.5001 17.2012 19.5329 20.3438 18.3207C20.5648 18.2334 20.7619 18.0947 20.9189 17.9163C21.0759 17.7378 21.1882 17.5246 21.2466 17.2941C21.4659 16.4504 21.7537 14.8041 21.7537 12.0001C21.7537 9.19602 21.4659 7.55165 21.2466 6.70602C21.1888 6.47477 21.0768 6.26059 20.9198 6.08126C20.7628 5.90192 20.5653 5.76257 20.3438 5.67477C17.2012 4.46727 12 4.50009 12 4.50009C12 4.50009 6.79875 4.46727 3.65625 5.67946C3.43466 5.76726 3.23718 5.9066 3.08017 6.08594C2.92317 6.26528 2.81116 6.47945 2.75344 6.71071C2.53781 7.55071 2.25 9.19602 2.25 12.0001Z'
              stroke='#F0FAFF'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <div className='inline-flex xmd:space-y-[2.25rem] xmd:flex-col items-start md:space-x-[12rem]'>
          <div className=''>
            <div className=' md:hidden flex items-center gap-[0.5625rem]'>
              <svg
                className='size-[1.5rem]'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='25'
                viewBox='0 0 24 25'
                fill='none'
              >
                <path
                  d='M1.5 7.3125C1.5 5.8635 2.676 4.6875 4.125 4.6875H19.875C21.324 4.6875 22.5 5.8635 22.5 7.3125V17.0625C22.5 17.7587 22.2234 18.4264 21.7312 18.9187C21.2389 19.4109 20.5712 19.6875 19.875 19.6875H4.125C3.42881 19.6875 2.76113 19.4109 2.26884 18.9187C1.77656 18.4264 1.5 17.7587 1.5 17.0625V7.3125ZM4.125 6.1875C3.82663 6.1875 3.54048 6.30603 3.3295 6.517C3.11853 6.72798 3 7.01413 3 7.3125V17.0625C3 17.6835 3.504 18.1875 4.125 18.1875H19.875C20.1734 18.1875 20.4595 18.069 20.6705 17.858C20.8815 17.647 21 17.3609 21 17.0625V7.3125C21 7.01413 20.8815 6.72798 20.6705 6.517C20.4595 6.30603 20.1734 6.1875 19.875 6.1875H4.125ZM14.25 9.1875C14.0511 9.1875 13.8603 9.26652 13.7197 9.40717C13.579 9.54782 13.5 9.73859 13.5 9.9375C13.5 10.1364 13.579 10.3272 13.7197 10.4678C13.8603 10.6085 14.0511 10.6875 14.25 10.6875H18.75C18.9489 10.6875 19.1397 10.6085 19.2803 10.4678C19.421 10.3272 19.5 10.1364 19.5 9.9375C19.5 9.73859 19.421 9.54782 19.2803 9.40717C19.1397 9.26652 18.9489 9.1875 18.75 9.1875H14.25ZM14.25 13.6875C14.0511 13.6875 13.8603 13.7665 13.7197 13.9072C13.579 14.0478 13.5 14.2386 13.5 14.4375C13.5 14.6364 13.579 14.8272 13.7197 14.9678C13.8603 15.1085 14.0511 15.1875 14.25 15.1875H18.75C18.9489 15.1875 19.1397 15.1085 19.2803 14.9678C19.421 14.8272 19.5 14.6364 19.5 14.4375C19.5 14.2386 19.421 14.0478 19.2803 13.9072C19.1397 13.7665 18.9489 13.6875 18.75 13.6875H14.25ZM7.8915 11.7585C8.15881 11.7585 8.42349 11.7059 8.67045 11.6036C8.91741 11.5013 9.1418 11.3513 9.33082 11.1623C9.51983 10.9733 9.66976 10.7489 9.77206 10.502C9.87435 10.255 9.927 9.99031 9.927 9.723C9.927 9.45569 9.87435 9.19101 9.77206 8.94405C9.66976 8.69709 9.51983 8.4727 9.33082 8.28368C9.1418 8.09467 8.91741 7.94474 8.67045 7.84244C8.42349 7.74015 8.15881 7.6875 7.8915 7.6875C7.35165 7.6875 6.83391 7.90195 6.45218 8.28368C6.07045 8.66541 5.856 9.18315 5.856 9.723C5.856 10.2628 6.07045 10.7806 6.45218 11.1623C6.83391 11.544 7.35165 11.7585 7.8915 11.7585ZM5.787 12.7755C5.44567 12.7755 5.11831 12.9111 4.87695 13.1525C4.63559 13.3938 4.5 13.7212 4.5 14.0625C4.50005 14.6211 4.68682 15.1637 5.03063 15.604C5.37444 16.0443 5.85555 16.357 6.3975 16.4925L6.477 16.5135C7.407 16.746 8.3775 16.746 9.306 16.5135L9.387 16.494C9.92895 16.3585 10.4101 16.0458 10.7539 15.6055C11.0977 15.1652 11.2845 14.6226 11.2845 14.064C11.2847 13.8949 11.2516 13.7273 11.187 13.571C11.1224 13.4147 11.0276 13.2727 10.9081 13.153C10.7885 13.0333 10.6466 12.9384 10.4904 12.8736C10.3341 12.8088 10.1666 12.7755 9.9975 12.7755H5.787Z'
                  fill='white'
                />
              </svg>
              <div className='body14 font-bold text-white '>Liên hệ</div>
            </div>
            <div className='mt-[0.45rem] md:hidden w-[20.4375rem] md:w-[26.125rem] h-[0.0625rem] bg-[#4E91F6]'></div>
            <div className='mt-[1em] flex flex-col items-start space-y-[0.25rem]'>
              <div className='text-[1rem] xmd:leading-[1.875rem] text-white'>
                {footer?.lien_he?.dien_thoai}
              </div>
              <div className='text-[1rem] xmd:leading-[1.875rem] text-white'>
                {footer?.lien_he?.email}
              </div>
            </div>
          </div>
          <div className=''>
            <div className=' md:hidden flex items-center gap-[0.5625rem]'>
              <svg
                className='size-[1.25rem]'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='21'
                viewBox='0 0 20 21'
                fill='none'
              >
                <path
                  d='M20 10.1875C19.9995 7.5355 18.9457 4.99227 17.0705 3.11702C15.1952 1.24177 12.652 0.18803 10 0.1875V2.1875C11.5821 2.18786 13.1286 2.65714 14.4441 3.53604C15.7596 4.41494 16.7851 5.66403 17.391 7.1255C17.7931 8.09627 18.0001 9.13674 18 10.1875H20ZM0 8.1875V3.1875C0 2.92228 0.105357 2.66793 0.292893 2.48039C0.48043 2.29286 0.734784 2.1875 1 2.1875H6C6.26522 2.1875 6.51957 2.29286 6.70711 2.48039C6.89464 2.66793 7 2.92228 7 3.1875V7.1875C7 7.45272 6.89464 7.70707 6.70711 7.89461C6.51957 8.08214 6.26522 8.1875 6 8.1875H4C4 10.3092 4.84285 12.3441 6.34315 13.8444C7.84344 15.3446 9.87827 16.1875 12 16.1875V14.1875C12 13.9223 12.1054 13.6679 12.2929 13.4804C12.4804 13.2929 12.7348 13.1875 13 13.1875H17C17.2652 13.1875 17.5196 13.2929 17.7071 13.4804C17.8946 13.6679 18 13.9223 18 14.1875V19.1875C18 19.4527 17.8946 19.7071 17.7071 19.8946C17.5196 20.0821 17.2652 20.1875 17 20.1875H12C5.373 20.1875 0 14.8145 0 8.1875Z'
                  fill='white'
                />
                <path
                  d='M15.543 7.8915C15.8449 8.61933 16.0002 9.39956 16 10.1875H14.2C14.2001 9.63591 14.0916 9.0897 13.8806 8.58007C13.6695 8.07045 13.3602 7.60739 12.9701 7.21736C12.5801 6.82733 12.1171 6.51796 11.6074 6.30694C11.0978 6.09591 10.5516 5.98737 10 5.9875V4.1875C11.1867 4.18756 12.3466 4.5395 13.3333 5.1988C14.3199 5.8581 15.0889 6.79517 15.543 7.8915Z'
                  fill='white'
                />
              </svg>
              <div className='body14 font-bold text-white '>Hotline</div>
            </div>
            <div className='mt-[0.45rem] md:hidden w-[20.4375rem] md:w-[26.125rem] h-[0.0625rem] bg-[#4E91F6]'></div>
            <div className='mt-[1em] flex flex-col items-start space-y-[0.25rem]'>
              <div className='text-[1rem] xmd:leading-[1.875rem] text-white'>
                {footer?.host_line?.host_line1}
              </div>
              <div className='text-[1rem] xmd:leading-[1.875rem] text-white'>
                {footer?.host_line?.host_line2}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='xmd:mt-[1rem] mt-[2.25rem] xmd:w-full md:mx-auto w-[92.5rem] h-[0.03125rem] shrink-0 bg-primary-10'></div>
      {/* madeIn and policy */}
      <div className='flex relative pb-[0.73rem] pt-[1.03rem] md:px-[3.75rem] justify-between items-center'>
        <div className='inline-flex items-start space-x-[1.5rem]'>
          <div className='sub2 text-white'>@2023 DucAnh Educonnect</div>
          <div className='sub2 text-white'>Made by OKHUB Agency</div>
        </div>
        <div className=' xmd:absolute bottom-[3.55rem] right-[0rem] inline-flex items-center space-x-[2rem]'>
          <div className='button2 text-white'>Policy</div>
          <ScrollUp/>
        </div>
      </div>
    </footer>
  )
}
