
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[0.5rem] text-sm font-medium  transition-colors focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        default: " button1 text-primary-40 text-[0.875rem] uppercase text-center h-[3rem] px-[3.5rem] py-[0.6875rem] border border-primary-40",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }