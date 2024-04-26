export default function NavigationCustom({
  outline,
  handleNextSlide,
  handlePrevSlide,
  indexSlider = 0,
  length = 0,
}) {
  return (
    <>
      <button
        onClick={handlePrevSlide}
        className={
          `
          ${length && indexSlider === 0 ? 'hidden' : ''} 
<<<<<<< HEAD
          ${outline ? '!bg-white border border-primary-40' : ''}
          absolute pointer-events-auto top-1/2 -translate-y-1/2 z-50 w-[3rem] h-[3rem] rounded-[0.5rem] flex justify-center items-center bg-[rgba(255,255,255,0.40)]`}
      >
        <svg className={`${outline ? 'stroke-primary-40' : 'stroke-white'} size-[1.25rem]`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
=======
          ${outline ? 'hover:!bg-primary-40 group bg-white border border-primary-40' : 'bg-[rgba(255,255,255,0.40)]'}
          duration-300 ease-linear absolute pointer-events-auto top-1/2 -translate-y-1/2 z-50 w-[3rem] h-[3rem] rounded-[0.5rem] flex justify-center items-center `}
      >
        <svg className={`${outline ? 'group-hover:stroke-white stroke-primary-40' : 'stroke-white'} duration-300 ease-linear size-[1.25rem]`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
>>>>>>> master
          <path d="M12.4993 15.8307L6.66602 9.9974L12.4993 4.16406" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <button
        onClick={handleNextSlide}
        className={
          `
          ${length && indexSlider === length - 1 ? 'hidden' : ''}
<<<<<<< HEAD
                    ${outline ? '!bg-white border border-primary-40' : ''}

           absolute right-[0rem] pointer-events-auto top-1/2 -translate-y-1/2  z-50 w-[3rem] h-[3rem] rounded-[0.5rem] flex justify-center items-center shrink-0 bg-rgba-40 bg-[rgba(255,255,255,0.40)]`}
      >
        <svg className={`${outline ? 'stroke-primary-40' : 'stroke-white'} size-[1.25rem]`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
=======
                    ${outline ? 'hover:!bg-primary-40 group !bg-white border border-primary-40' : ''}

          duration-300 ease-linear absolute right-[0rem] pointer-events-auto top-1/2 -translate-y-1/2  z-50 w-[3rem] h-[3rem] rounded-[0.5rem] flex justify-center items-center shrink-0 bg-rgba-40 bg-[rgba(255,255,255,0.40)]`}
      >
        <svg className={`${outline ? 'group-hover:stroke-white stroke-primary-40' : 'stroke-white'} duration-300 ease-linear size-[1.25rem]`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
>>>>>>> master
          <path d="M7.50065 15.8307L13.334 9.9974L7.50065 4.16406" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </>
  )
}
