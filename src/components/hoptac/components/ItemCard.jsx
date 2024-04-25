import Image from 'next/image'

export default function ItemCard({data}) {
  return (
    <div className='flex xlg:flex-col lg:justify-between w-full'>
      <span className='sub24 text-start font-bold xlg:text-[2rem] xmd:body16 text-primary-50'>
        {data?.title}
      </span>
      <p className='w-[31.375rem] xmd:my-0 xlg:my-[1rem] xlg:w-full xmd:w-[21.875rem] body16 font-medium xmd:body14 xmd:text-[0.875rem] xlg:text-[2rem] text-greyscaletext-60 flex justify-start text-start xmd:mb-[1rem]'>
        {data?.description}
      </p>
      <Image
        className='rounded-[0.75rem] xmd:w-[21.9375rem] h-[13.75rem] xlg:w-full xmd:h-auto xlg:h-[42.75rem]'
        src={data?.image?.url}
        alt='tuyensinh'
        width={325.482}
        height={204}
      />
    </div>
  )
}
