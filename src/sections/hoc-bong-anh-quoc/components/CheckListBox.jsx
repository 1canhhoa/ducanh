import clsx from 'clsx'
import Image from 'next/image'

const CheckListBox = ({
  h3Text,
  listText = [],
  separatorClass = '',
  className = '',
}) => {
  return (
    <div className={className}>
      <h3
        className={clsx(
          'text-[1rem] font-semibold xmd:leading-[150%] leading-[170%] text-primary-50 mb-[1rem]',
          separatorClass,
        )}
      >
        <div
          dangerouslySetInnerHTML={{__html: h3Text}}
          className='[&>p]:mt-[1rem]'
        ></div>
      </h3>
      <ul>
        {listText.map((textItem, index) => (
          <li
            className='flex last:mb-0 mb-[0.75rem] items-center'
            key={index}
          >
            <Image
              src={'/images/hoc-bong-anh-quoc/checked_green.svg'}
              width={125}
              height={125}
              alt='hoc-bong-anh-quoc'
              className='xmd:w-[1rem] xmd:h-[1rem] w-[1.25rem] h-[1.25rem] object-contain mr-[0.62rem]'
            ></Image>
            <span className='text-[1rem] font-semibold xmd:font-bold leading-[150%] xmd:text-greyscaletext-80 text-greyscaletext-60'>
              <div
                dangerouslySetInnerHTML={{__html: textItem?.text_item}}
              ></div>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CheckListBox
