import Image from 'next/image'

export default function Educonnect({dataAcf}) {
  return (
    <section className='px-[11.56rem] xmd:px-[0.75rem] lg:space-y-[2rem]'>
      <div className='xmd:mb-[4.88rem] flex flex-col items-start'>
        <span className='xmd:hidden text_gradient !bg-clip-text bg-[linear-gradient(170deg,#2E6BC6,#29A4EA)] text-[0.98206rem] font-bold uppercase'>
          Đức Anh Educonnect
        </span>
        <h2 className='text-[2.5rem] xmd:text-[1.5rem] xmd:font-extrabold xmd:leading-[1.3] font-bold text_gradient !bg-clip-text bg-[linear-gradient(170deg,#2E6BC6,#29A4EA)]'>
          Chúng tôi có gì cho bạn
        </h2>
      </div>
      <div className='flex flex-col'>
        {dataAcf?.map((e, index) => (
          <>
            <div
              key={index}
              className='xmd:flex-wrap flex justify-start items-center'
            >
              <Image
                className='size-[2.75rem]'
                alt='icon chúng tôi có gì cho bạn'
                src={e?.image?.url}
                width={44}
                height={44}
              />
              <span className='ml-[3rem] xmd:ml-[0.75rem] lg:mr-[0.5rem] h-[1.625rem] w-[17.1875rem] text-[1.25rem] font-bold leading-[1.3] text_gradient !bg-clip-text bg-[linear-gradient(170deg,#082072,#2B46A8)]'>
                {e?.title}
              </span>
              <div
                className='tulamhoso'
                dangerouslySetInnerHTML={{__html: e?.description}}
              />
              {/* <span className='xmd:mt-[0.75rem] flex-1 text-[1rem] font-normal leading-[1.5]'>
                {e?.description}
              </span> */}
            </div>
            <hr className='last:hidden h-[0.0625rem] my-[1rem] w-[76.875rem] xmd:w-[22rem] bg-[#ECECEC]'></hr>
          </>
        ))}
      </div>
    </section>
  )
}
