import clsx from 'clsx'
import Image from 'next/image'
const Structure2 = ({
  h3Text,
  children,
  bottomImage = {
    enabled: false,
    src: '',
    width: 709,
    height: 375,
    className: '',
  },
  href = '',
  marginTop = true,
}) => {
  let links
  if (href) {
    links = href.split(':')
  }
  return (
    <div className={clsx(marginTop && 'mt-[2rem]')}>
      <h3 className='text-primary-50 text-[1.5rem] font-bold leading-[130%] mb-[0.5rem]'>
        {h3Text}
      </h3>
      {href && (
        <a
          href={'https://' + links[1].trim()}
          target='_blank'
          className='text-primary-50 text-[1rem] font-medium leading-[150%] mb-[0.5rem] inline-block'
        >
          {links[0]}:<span className='underline'>{links[1]}</span>
        </a>
      )}
      {children}
      {bottomImage.enabled && (
        <Image
          src={bottomImage.src}
          width={bottomImage.width}
          height={bottomImage.height}
          priority
          alt='hoc-bong-anh-quoc'
          className={clsx('mt-[2rem]', bottomImage.className)}
        ></Image>
      )}
    </div>
  )
}

export default Structure2
