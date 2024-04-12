import { cn } from "@/lib/utils"
const Title = ({ title, className, dot }) => {
  return (
    <h1 className={cn(' title relative text-primary-60 inline xmd:text-[2rem] xmd:font-extrabold xmd:tracking-normal', className)}>
      {title}
      <div className={cn("size-[0.625rem]  absolute right-[-1.125rem]  xmd:bottom-[0.4rem] bottom-[0.5625rem] bg-secondary-40", dot)}></div>
    </h1>
  )
}

export default Title
