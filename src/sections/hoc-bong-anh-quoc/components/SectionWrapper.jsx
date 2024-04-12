import clsx from 'clsx'

const SectionWrapper = ({
  title,
  id,
  shortMargin = false,
  mobileMargin = true,
  children,
  className = '',
}) => {
  return (
    <section
      id={id}
      className={clsx(
        {
          'mt-[4.5rem] xmd:mt-[3rem]': !shortMargin,
          'mt-[4.5rem] xmd:mt-[1.75rem]': shortMargin,
          'xmd:mx-[0.75rem]': mobileMargin,
          'xmd:mx-0': !mobileMargin,
        },
        className,
      )}
    >
      <h1
        className={clsx(
          'xmd:text-[1.375rem] text-[2.25rem] font-extrabold leading-[120%] text-primary-50',
          {
            'xmd:ml-[0.75rem]': !mobileMargin,
          },
        )}
      >
        {title}
        <span className='inline-block w-[0.625rem] h-[0.625rem] bg-secondary-40 ml-[0.5rem]'></span>
      </h1>
      {children}
    </section>
  )
}

export default SectionWrapper