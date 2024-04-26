<<<<<<< HEAD
import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import {Controller, FormProvider, useFormContext} from 'react-hook-form'

import {cn} from '@/lib/utils'
import {Label} from '@/components/ui/label'
=======
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { Controller, FormProvider, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
>>>>>>> master

const Form = FormProvider

const FormFieldContext = React.createContext({})

<<<<<<< HEAD
const FormField = ({...props}) => {
  return (
    <FormFieldContext.Provider value={{name: props.name}}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
=======
const FormField = (
  {
    ...props
  }
) => {
  return (
    (<FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>)
  );
>>>>>>> master
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
<<<<<<< HEAD
  const {getFieldState, formState} = useFormContext()
=======
  const { getFieldState, formState } = useFormContext()
>>>>>>> master

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
<<<<<<< HEAD
    throw new Error('useFormField should be used within <FormField>')
  }

  const {id} = itemContext
=======
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext
>>>>>>> master

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

const FormItemContext = React.createContext({})

<<<<<<< HEAD
const FormItem = React.forwardRef(({className, ...props}, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{id}}>
      <div
        ref={ref}
        className={cn('space-y-[1.5rem]', className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = 'FormItem'

const FormLabel = React.forwardRef(({className, ...props}, ref) => {
  const {error, formItemId} = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && 'text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = 'FormLabel'

const FormControl = React.forwardRef(({...props}, ref) => {
  const {error, formItemId, formDescriptionId, formMessageId} = useFormField()

  return (
    <Slot
=======
const FormItem = React.forwardRef(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    (<FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>)
  );
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    (<Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props} />)
  );
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    (<Slot
>>>>>>> master
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
<<<<<<< HEAD
      {...props}
    />
  )
})
FormControl.displayName = 'FormControl'

const FormDescription = React.forwardRef(({className, ...props}, ref) => {
  const {formDescriptionId} = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
})
FormDescription.displayName = 'FormDescription'

const FormMessage = React.forwardRef(({className, children, ...props}, ref) => {
  const {error, formMessageId} = useFormField()
=======
      {...props} />)
  );
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    (<p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props} />)
  );
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
>>>>>>> master
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
<<<<<<< HEAD
    <p
      ref={ref}
      id={formMessageId}
      className={cn('text-sm font-medium text-destructive', className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = 'FormMessage'
=======
    (<p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}>
      {body}
    </p>)
  );
})
FormMessage.displayName = "FormMessage"
>>>>>>> master

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
