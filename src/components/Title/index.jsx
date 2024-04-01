
const Title = ({ title }) => {
  return (
    <h1 className='title relative inline  xmd:hidden'>
      {title}
      <div className="size-[0.625rem] absolute right-[-1.125rem] bottom-[0.5625rem] bg-secondary-40">
      </div>
    </h1>
  )
}

export default Title
