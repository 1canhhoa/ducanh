'use client'

import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {Button} from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import clsx from 'clsx'
import CustomSelect from './CustomSelect'
import PostionPopup from './PostionPopup'
import {useState} from 'react'
import {generateFormFields} from '../fakeData'

const RecruitmentForm = ({lang}) => {
  const FORM_FIELDS = generateFormFields(lang)
  const [popup, setPopup] = useState({
    enabled: false,
    onChange: () => {},
  })
  const formSchema = z.object({
    fullname: z.string().min(4, {
      message: lang.form.fullname.message,
    }),
    email: z
      .string()
      .min(1, {message: lang.form.email.message})
      .email(lang.form.email.message2),
    address: z.string().min(1, {
      message: lang.form.address.message,
    }),
    workplace_address: z.string().min(1, {
      message: lang.form.workplace_address.message,
    }),
    gender: z.string().min(0),
    yearOfBirth: z.string().refine((value) => /^\d{4}$/.test(value), {
      message: lang.form.yearOfBirth.message,
    }),
    // .number({
    //   required_error: 'Age is required',
    //   invalid_type_error: 'Age must be a number',
    // })
    // .min(4, {
    //   message: lang.form.yearOfBirth.message,
    // })
    // .max(4, {message: lang.form.yearOfBirth.message}),

    recruitment_position: z.string().min(5, {
      message: lang.form.recruitment_position.message,
    }),
  })
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      email: '',
      address: '',
      workplace_address: '',
      yearOfBirth: '',
      gender: '',
      recruitment_position: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <section className='fixed top-0 left-0 bg-white w-full h-full overflow-y-auto z-[9999] p-[1.5rem_1rem]'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 h-max'
        >
          <h2 className='text-secondary-50 text-[1rem] font-bold leading-[130%] uppercase'>
            ứng tuyển ngay
          </h2>
          {FORM_FIELDS?.map((formField, index) => {
            if (!formField?.doubleCol) {
              return (
                <FormField
                  key={index}
                  control={form.control}
                  name={formField.name}
                  render={({field}) => (
                    <FormItem className={index === 0 ? '' : '!mt-[0.75rem]'}>
                      <FormLabel className='text-greyscaletext-80 text-[0.875rem] font-normal leading-[170%]'>
                        {lang.form?.[formField.name].label}
                        {formField?.required && '*'}
                      </FormLabel>
                      <FormControl>
                        {formField.type === 'select' ? (
                          <CustomSelect
                            className='flex-1'
                            defaultLabel={lang.form[formField.name].placeholder}
                            options={formField.options}
                            onSelect={(value) => {
                              field.onChange(value)
                              // console.log(value)
                            }}
                          />
                        ) : (
                          <Input
                            type={
                              formField.type === 'number' ? 'number' : 'text'
                            }
                            onInput={(e) => {
                              field.onChange(
                                formField.type === 'number'
                                  ? Number(e.target.value)
                                  : e.target.value,
                              )
                            }}
                            onFocus={() => {
                              formField.type === 'popup'
                                ? setPopup({
                                    enabled: true,
                                    onChange: field.onChange,
                                  })
                                : () => {}
                            }}
                            className='!mt-[0.25rem] text-primary-60 border-[#C3CAD9] !p-[0.9375rem_1.25rem] !text-[1rem] !font-medium h-[unset] placeholder:text-[1rem] placeholder:font-medium placeholder:text-greyscaletext-10'
                            placeholder={
                              formField.placeholder ||
                              lang.form?.[formField.name].placeholder
                            }
                            {...field}
                          />
                        )}
                      </FormControl>
                      <FormMessage
                        className={'text-secondary-50 !mt-[0.5rem]'}
                      />
                    </FormItem>
                  )}
                />
              )
            }
            return (
              <div
                key={index}
                className={clsx('flex items-start', {
                  '!mt-[0.75rem]': index > 0,
                })}
              >
                {formField?.childrens.map((ff, fid) => {
                  // console.log(ff)
                  return (
                    <FormField
                      key={ff.name}
                      control={form.control}
                      name={ff.name}
                      render={({field}) => (
                        <FormItem
                          className={
                            fid === 1 ? 'ml-[0.75rem] flex-1' : 'flex-1'
                          }
                        >
                          <FormLabel className='text-greyscaletext-80 text-[0.875rem] font-normal leading-[170%]'>
                            {lang.form?.[ff.name].label}
                            {ff?.required && '*'}
                          </FormLabel>
                          <FormControl>
                            {ff.type === 'select' ? (
                              <CustomSelect
                                className='flex-1'
                                options={ff.options}
                                onSelect={(value) => {
                                  field.onChange(value)
                                  // console.log(value)
                                }}
                              />
                            ) : (
                              <Input
                                type={ff.type === 'number' ? 'number' : 'text'}
                                className='!mt-[0.25rem] text-primary-60 !p-[0.9375rem_1.25rem] !text-[1rem] !font-medium h-[unset] placeholder:text-[1rem] placeholder:font-medium border-[#C3CAD9] placeholder:text-greyscaletext-10'
                                placeholder={
                                  ff.placeholder ||
                                  lang.form?.[ff.name].placeholder
                                }
                                {...field}
                              />
                            )}
                          </FormControl>
                          <FormMessage
                            className={'text-secondary-50 !mt-[0.5rem]'}
                          />
                        </FormItem>
                      )}
                    />
                  )
                })}
              </div>
            )
          })}
          <Button
            type='submit'
            className='uppercase bg-primary-50 text-[0.875rem] leading-[120%] font-bold rounded-lg h-[3rem] p-[0.9375rem_1.875rem] text-white w-full'
          >
            Ứng tuyển
          </Button>
        </form>
      </Form>

      {popup.enabled && (
        <PostionPopup
          currentOption={form.getValues().recruitment_position}
          lang={lang}
          closeCallback={() => {
            setPopup({
              enabled: false,
              onChange: () => {},
            })
          }}
          onSelect={(value) => {
            // console.log(value)
            popup.onChange(value)
          }}
        />
      )}
    </section>
  )
}

export default RecruitmentForm
