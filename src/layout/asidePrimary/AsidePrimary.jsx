import Image from 'next/image'

export default function AsidePrimary() {
  return (
    <aside className='max-md:hidden w-[21.8125rem] bg-[linear-gradient(95deg,#2E6BC6_9.83%,#2E6BC6_35.38%,#29A4EA_86.69%)] text-white flex items-center justify-center mr-[1.69rem] flex-shrink-0 h-[38.4375rem] sticky top-[9.69rem] left-0'>
      {/* Bạn muốn du học ở đâu? */}
      <Image
        className='object-fill size-full'
        src={'/images/aside/demo.jpg'}
        alt='aside'
        width={300}
        height={500}
      />
    </aside>
  )
}
