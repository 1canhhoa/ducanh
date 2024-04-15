import clsx from 'clsx'

export default function PhanTrang({className}) {
  return (
    <div
      className={clsx(
        'lg:hidden mt-[1.5rem] flex w-full justify-center items-center space-x-[0.5rem]',
        className,
      )}
    >
      <button className='p-[0.625rem] flex justify-center items-center rounded-[0.5rem] border-[1px] border-solid border-primary-60 bg-primary-60'>
        <span className='button14 font-bold text-center text-primary-5 size-[1.125rem]'>
          1
        </span>
      </button>
      <button className='p-[0.625rem] flex justify-center items-center rounded-[0.5rem] border-[1px] border-solid border-primary-60 bg-white'>
        <span className='button14 font-bold text-center text-primary-50 size-[1.125rem]'>
          2
        </span>
      </button>
      <button className='p-[0.625rem] flex justify-center items-center rounded-[0.5rem] border-[1px] border-solid border-primary-60 bg-white'>
        <span className='button14 font-bold text-center text-primary-50 size-[1.125rem]'>
          3
        </span>
      </button>
    </div>
  )
}
