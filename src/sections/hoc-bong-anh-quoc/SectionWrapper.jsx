const SectionWrapper = ({h2Text, id, children}) => {
  return (
    <section
      id={id}
      className='mt-[4.5rem]'
    >
      <h2 className='text-[2.25rem] font-extrabold leading-[120%] text-primary-50'>
        {h2Text}{' '}
        <span className='inline-block w-[0.625rem] h-[0.625rem] bg-secondary-40'></span>
      </h2>
      {children}
    </section>
  )
}

export default SectionWrapper
