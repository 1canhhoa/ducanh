import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='h-[28.875rem] bg-primary-40 text-white'>
      <Image
        className='object-cover size-full'
        src={'/images/footer/demo.jpg'}
        alt='footer'
        width={1600}
        height={500}
      />
    </footer>
  )
}
