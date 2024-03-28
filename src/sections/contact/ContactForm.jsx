

const ContactForm = ({ t }) => {

  const className = {
    base: 'text-primary-60 font-feature-settings text-[0.75rem] xmd:leading-[1.2] font-bold uppercase ',
  }

  return (
    <div className='flex px-[0.75rem] flex-col xmd:w-full items-start space-y-[1.3125rem] relative'>
      <div className='relative'>
        <h1 className='title xmd:title-mobile'>
          {t.contact.title}
        </h1>
        <div className="size-[0.625rem] absolute right-[-1.125rem] bottom-[0.5625rem] bg-secondary-40">
        </div>
      </div>
      <div className="flex flex-col items-start w-full md:w-[39.8125rem] space-y-[2rem] rounded-[0.75rem]">
        <div className="flex flex-col items-start space-y-[0.25rem] self-stretch">
          <div className={className.base}>
            {t.contact.firstAndLastName}
          </div>
          <div className="border-b border-linear-l9 w-full">
            <input type="text" className="flex items-center py-[0.625rem] self-stretch border-none " />
          </div>
        </div>
        <div className="flex flex-col items-start space-y-[0.25rem] self-stretch">
          <div className={className.base}>
            {t.contact.firstAndLastName}
          </div>
          <div className="border-b border-linear-l9 w-full">
            <input type="text" className="flex items-center py-[0.625rem] self-stretch border-none " />
          </div>
        </div>
        <div className="flex flex-col items-start space-y-[0.25rem] self-stretch">
          <div className={className.base}>
            {t.contact.firstAndLastName}
          </div>
          <div className="border-b border-linear-l9 w-full">
            <input type="text" className="flex items-center py-[0.625rem] self-stretch border-none " />
          </div>
        </div>
        <div className="flex flex-col items-start space-y-[0.25rem] self-stretch">
          <div className={className.base}>
            {t.contact.firstAndLastName}
          </div>
          <div className="border-b border-linear-l9 w-full">
            <input type="text" className="flex items-center py-[0.625rem] self-stretch border-none " />
          </div>
        </div>
        <div className="flex flex-col items-start space-y-[0.25rem] self-stretch">
          <div className={className.base}>
            {t.contact.firstAndLastName}
          </div>
          <div className="border-b border-linear-l9 w-full">
            <input type="text" className="flex items-center py-[0.625rem] self-stretch border-none " />
          </div>
        </div>
        {/* button */}
        <button className="flex justify-center items-center w-full md:w-[15.125rem] h-[3rem] py-[0.625rem] px-[1.25rem] rounded-[0.625rem] bg-primary-50">
          <div className="button1 text-white text-center">
            {t.contact.sendNow}
          </div>
        </button>
      </div>
    </div>
  )
}

export default ContactForm
