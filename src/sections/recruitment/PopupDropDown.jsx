import {
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
const PopupDropDown = ({ dataDropDown }) => {
  return (
    <div>
      {dataDropDown.map((d, index) => (
        <DropdownMenuItem key={index} className={' !py-0 group  cursor-pointer ' + (index === 0 ? 'bg-primary-10' : 'hover:bg-primary-10')}>

          <div className=' flex justify-start items-start space-x-[0.75rem]  py-[0.625rem] px-[0.75rem] pr-[6rem]'>
            <svg className='size-[1.25rem]' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="AlignBottom">
                <path id="Vector" d="M17.8633 16.875H4.11328" stroke="white" stroke-width="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Vector_2" d="M12.2383 6.25V13.75C12.2383 14.0952 12.5181 14.375 12.8633 14.375H15.9883C16.3335 14.375 16.6133 14.0952 16.6133 13.75V6.25C16.6133 5.90482 16.3335 5.625 15.9883 5.625H12.8633C12.5181 5.625 12.2383 5.90482 12.2383 6.25Z" stroke="white" stroke-width="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Vector_3" d="M9.11328 2.5H5.98828C5.6431 2.5 5.36328 2.77982 5.36328 3.125V13.75C5.36328 14.0952 5.6431 14.375 5.98828 14.375H9.11328C9.45846 14.375 9.73828 14.0952 9.73828 13.75V3.125C9.73828 2.77982 9.45846 2.5 9.11328 2.5Z" stroke="white" stroke-width="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
            <div className="text-primary-50 font-feature-settings text-center text-[0.875rrem] font-semibold">
              {d}
            </div>
            <svg className='size-[1.25rem]' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="AlignBottom">
                <path id="Vector" d="M17.8633 16.875H4.11328" stroke="white" stroke-width="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Vector_2" d="M12.2383 6.25V13.75C12.2383 14.0952 12.5181 14.375 12.8633 14.375H15.9883C16.3335 14.375 16.6133 14.0952 16.6133 13.75V6.25C16.6133 5.90482 16.3335 5.625 15.9883 5.625H12.8633C12.5181 5.625 12.2383 5.90482 12.2383 6.25Z" stroke="white" stroke-width="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Vector_3" d="M9.11328 2.5H5.98828C5.6431 2.5 5.36328 2.77982 5.36328 3.125V13.75C5.36328 14.0952 5.6431 14.375 5.98828 14.375H9.11328C9.45846 14.375 9.73828 14.0952 9.73828 13.75V3.125C9.73828 2.77982 9.45846 2.5 9.11328 2.5Z" stroke="white" stroke-width="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>

        </DropdownMenuItem>
      ))}
    </div>


  )
}

export default PopupDropDown
