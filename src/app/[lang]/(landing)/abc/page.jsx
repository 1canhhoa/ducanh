
import clsx from 'clsx'
const page = () => {
  return (
    <div>
      <div
        className={clsx('flex items-center mb-[0.6rem]')}
        key={'a'}
      >
        <input
          type='checkbox'
          name={'a'}
          id={'a'}
          className='size-[1.5rem] accent-primary-40 relative outline-none !border-none
             after:absolute after:content-[""] after:size-[102%] after:bg-transparent
            after:rounded-[0.1875rem] after:border after:border-primary-40'
        />
        <label
          htmlFor={'a'}
          className='ml-[1rem] text-greyscaletext-70 text-[0.875rem] xmd:text-[0.8125rem] font-medium'
        >
          {'ahiii'}
        </label>
      </div>
    </div>
  )
}
export default page