import clsx from 'clsx'

const Paragraph = ({text = '', listDisc = false}) => {
  return (
    <p
      className={clsx(
        'text-[1rem] font-medium leading-[150%] text-greyscaletext-60',
        listDisc && 'list-disc',
        !listDisc && 'xmd:mb-[1rem] mb-[0.5rem] last:mb-0',
      )}
    >
      {text}
    </p>
  )
}

export default Paragraph
