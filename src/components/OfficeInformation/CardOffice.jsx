
import Image from 'next/image'
const CardOffice = ({ dataCard, index }) => {
  return (
    <div className="flex w-full xmd:flex-col items-start gap-4">
      <div className="text-primary-60 w-[21.875rem] xmd:text-[1rem] text-xl not-italic font-bold leading-[120%] xmd:tracking-[-0.005rem] tracking-[-0.00625rem] uppercase">
        {index}. {dataCard?.place}
      </div>
      <div className="flex flex-col items-start gap-3">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.66732 6.00001C7.66732 5.07917 6.92116 4.33301 6.00099 4.33301C5.08014 4.33301 4.33398 5.07917 4.33398 6.00001C4.33398 6.92018 5.08014 7.66634 6.00099 7.66634C6.92116 7.66634 7.66732 6.92018 7.66732 6.00001Z" stroke="#3F3F3F" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99967 13C5.20069 13 1 9.59892 1 6.04219C1 3.25776 3.23807 1 5.99967 1C8.76128 1 11 3.25776 11 6.04219C11 9.59892 6.79866 13 5.99967 13Z" stroke="#3F3F3F" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div className="text-[color:var(--en,#3F3F3F)] text-base not-italic font-medium leading-[100%]">{dataCard?.place_details?.place_detail}</div>
        </div>
        <div className="flex items-center gap-2">
          <svg className='size-[1rem]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6.33497 2.83815C6.13249 2.33193 5.64221 2 5.09701 2H3.26316C2.56554 2 2 2.5654 2 3.26302C2 9.19281 6.80719 14 12.737 14C13.4346 14 14 13.4344 14 12.7368L14.0003 10.9026C14.0003 10.3574 13.6685 9.86724 13.1622 9.66475L11.4046 8.96196C10.9499 8.78007 10.4322 8.86193 10.056 9.17546L9.60235 9.55378C9.07258 9.99526 8.29309 9.96015 7.80546 9.47252L6.52815 8.19404C6.04052 7.70641 6.00449 6.92756 6.44596 6.39779L6.82422 5.9442C7.13774 5.56797 7.22033 5.05011 7.03844 4.59539L6.33497 2.83815Z" stroke="#3F3F3F" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div className="text-[color:var(--en,#3F3F3F)] text-base not-italic font-medium leading-[100%]">{dataCard?.place_details?.phone}</div>
        </div>
        <div className="flex items-center gap-2">
          <svg className='size-[1rem]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 5L8.26087 9L14 5" stroke="#3F3F3F" stroke-linecap="round" stroke-linejoin="round" />
            <rect x="2" y="4" width="12" height="9" rx="1" stroke="#3F3F3F" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div className="text-[color:var(--en,#3F3F3F)] text-base not-italic font-medium leading-[100%]">{dataCard?.place_details?.email}</div>
        </div>
        {dataCard?.place_details?.hotline && <div className="flex items-center gap-2">
          <div className="text-[color:var(--en,#3F3F3F)] text-base not-italic font-medium leading-[100%]">Hotline:</div>
          <div className="text-[color:var(--en,#3F3F3F)] text-base not-italic font-medium leading-[100%]">{dataCard?.place_details?.hotline}</div>
        </div>}
      </div>
    </div>
  )
}

export default CardOffice
