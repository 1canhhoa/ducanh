import clsx from 'clsx'

const SectionWrapper = ({h2Text, id, shortMargin = false, children}) => {
  return (
    <section
      id={id}
      className={clsx('xmd:mx-[0.75rem]', {
        'mt-[4.5rem] xmd:mt-[3rem]': !shortMargin,
        'mt-[4.5rem] xmd:mt-[1.75rem]': shortMargin,
      })}
    >
      <h2 className='xmd:text-[1.375rem] text-[2.25rem] font-extrabold leading-[120%] text-primary-50'>
        {h2Text}{' '}
        <span className='inline-block w-[0.625rem] h-[0.625rem] bg-secondary-40 xmd:ml-[0.5rem]'></span>
      </h2>
      {children}
    </section>
  )
}

export default SectionWrapper
