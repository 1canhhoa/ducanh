import React from 'react'
import Image from 'next/image'
const CardOffice = () => {
  return (
    <div className='w-full md:w-[21.875rem] md:h-[20.1875rem] rounded-[0.75rem] bg-white relative  border border-[rgba(52,104,205,0.40)]'>
      <div className="flex-col flex space-y-[2rem] pl-[1.39rem] pt-[1.44rem]">
        <div className="inline-flex flex-col items-start space-y-[0.75rem]">
          <h4 className='h4 font-bold text-primary-60 uppercase'>
            Hà Nội
          </h4>
          <div className="sub1 text-greyscaletext-70 font-normal ">
            54 - 56 Tuệ Tĩnh, Q. Hai Bà Trưng
          </div>
        </div>
        <div className="inline-flex flex-col items-start space-y-[0.5rem]">
          <div className="flex items-center space-x-[0.4375rem]">
            <svg className='size-[1rem]' xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path d="M6.61622 2.83815C6.41374 2.33193 5.92346 2 5.37826 2H3.54441C2.84679 2 2.28125 2.5654 2.28125 3.26302C2.28125 9.19281 7.08844 14 13.0182 14C13.7159 14 14.2813 13.4344 14.2813 12.7368L14.2816 10.9026C14.2816 10.3574 13.9497 9.86724 13.4435 9.66475L11.6859 8.96196C11.2312 8.78007 10.7134 8.86193 10.3372 9.17546L9.8836 9.55378C9.35383 9.99526 8.57434 9.96015 8.08671 9.47252L6.8094 8.19404C6.32177 7.70641 6.28574 6.92756 6.72721 6.39779L7.10547 5.9442C7.41899 5.56797 7.50158 5.05011 7.31969 4.59539L6.61622 2.83815Z" stroke="#454545" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div className="label1 font-semibold text-greyscaletext-50 ">
              024 3971 6229
            </div>
          </div>
          <div className="flex items-center space-x-[0.4375rem]">
            <svg className='size-[1rem]' xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path d="M2.28125 5L8.54212 9L14.2812 5" stroke="#454545" stroke-linecap="round" stroke-linejoin="round" />
              <rect x="2.28125" y="4" width="12" height="9" rx="1" stroke="#454545" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div className="label1 font-semibold text-greyscaletext-50 ">
              duhoc@ducanh.edu.vn
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-[2rem] top-[2rem] flex justify-center items-center bg-white size-[2.5rem] p-[0.5rem] shrink-0 rounded-[0.375rem] border border-[rgba(52,104,205,0.50)]">
        <svg className='size-[1.5rem]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C9.89206 1.99989 7.86926 2.83176 6.37124 4.31479C4.87323 5.79782 4.02108 7.81216 4 9.92C4 15.4 11.05 21.5 11.35 21.76C11.5311 21.9149 11.7616 22.0001 12 22.0001C12.2384 22.0001 12.4689 21.9149 12.65 21.76C13 21.5 20 15.4 20 9.92C19.9789 7.81216 19.1268 5.79782 17.6288 4.31479C16.1307 2.83176 14.1079 1.99989 12 2ZM12 19.65C10.33 18.06 6 13.65 6 9.92C6 8.3287 6.63214 6.80258 7.75736 5.67736C8.88258 4.55214 10.4087 3.92 12 3.92C13.5913 3.92 15.1174 4.55214 16.2426 5.67736C17.3679 6.80258 18 8.3287 18 9.92C18 13.62 13.67 18.06 12 19.65Z" fill="#2B46A8" />
          <path d="M12 6C11.3078 6 10.6311 6.20527 10.0555 6.58986C9.47993 6.97444 9.03133 7.52107 8.76642 8.16061C8.50152 8.80015 8.4322 9.50388 8.56725 10.1828C8.7023 10.8618 9.03564 11.4854 9.52513 11.9749C10.0146 12.4644 10.6383 12.7977 11.3172 12.9327C11.9961 13.0678 12.6999 12.9985 13.3394 12.7336C13.9789 12.4687 14.5256 12.0201 14.9101 11.4445C15.2947 10.8689 15.5 10.1922 15.5 9.5C15.5 8.57174 15.1313 7.6815 14.4749 7.02513C13.8185 6.36875 12.9283 6 12 6ZM12 11C11.7033 11 11.4133 10.912 11.1666 10.7472C10.92 10.5824 10.7277 10.3481 10.6142 10.074C10.5007 9.79994 10.4709 9.49834 10.5288 9.20736C10.5867 8.91639 10.7296 8.64912 10.9393 8.43934C11.1491 8.22956 11.4164 8.0867 11.7074 8.02882C11.9983 7.97094 12.2999 8.00065 12.574 8.11418C12.8481 8.22771 13.0824 8.41997 13.2472 8.66665C13.412 8.91332 13.5 9.20333 13.5 9.5C13.5 9.89782 13.342 10.2794 13.0607 10.5607C12.7794 10.842 12.3978 11 12 11Z" fill="#2B46A8" />
        </svg>
      </div>
      <Image alt='anh-trong-card' src='/images/contact/img1.jpg'
        className='mt-[1.44rem] px-[0.93rem] pb-[1rem] rounded-[0.375rem] shrink-0 mx-auto' width={330} height={140} />
    </div>
  )
}

export default CardOffice
