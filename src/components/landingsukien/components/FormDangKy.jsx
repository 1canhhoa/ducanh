'use client'

import Image from 'next/image'

import {Check, ChevronsUpDown} from 'lucide-react'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import * as z from 'zod'
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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {useState} from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// const languages = [
//   {label: 'English', value: 'en'},
//   {label: 'French', value: 'fr'},
//   {label: 'German', value: 'de'},
//   {label: 'Spanish', value: 'es'},
//   {label: 'Portuguese', value: 'pt'},
//   {label: 'Russian', value: 'ru'},
//   {label: 'Japanese', value: 'ja'},
//   {label: 'Korean', value: 'ko'},
//   {label: 'Chinese', value: 'zh'},
// ]

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  phone: z
    .string()
    .min(1, {message: 'Vui lòng nhập số điện thoại!'})
    .regex(/^[0-9]{6,15}$/, {message: 'Định dạng không hợp lệ!'}),
  email: z
    .string()
    .min(1, {message: 'Vui lòng điền email!'})
    .email({message: 'Nhập đúng định dạng email!'}),
  country: z.string(),
})

export default function FormDangKy({isMobile}) {
  // const [isOpen, setIsOpen] = useState(false)
  // const [selectedItem, setSelectedItem] = useState('')
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      phone: '',
      email: '',
      country: '',
      yeah: '',
      office: '',
      reason: '',
    },
  })

  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <section className='w-[78.375rem] xmd:w-full lg:mx-auto lg:h-[36.5625rem] xmd:h-[60.0625rem] relative'>
      <Image
        className='size-full absolute top-0 left-0'
        alt='banner form landing page sự kiện'
        src={
          isMobile
            ? '/images/landing/bgform-mb.jpg'
            : '/images/landing/bgform.jpg'
        }
        width={1230}
        height={585}
      />
      <div className='relative z-10 size-full lg:p-[3.88rem] xmd:pt-[2.19rem] xmd:pl-[1rem]'>
        <h3 className='h4 text-[2rem] font-bold text-white mb-[1.69rem]'>
          Bạn cần tư vấn du học?
        </h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-[1rem] w-[32.6875rem] xmd:w-[21.4375rem]'
          >
            <div className='flex justify-between space-x-[1rem]'>
              <FormField
                control={form.control}
                name='username'
                render={({field}) => (
                  <FormItem className='flex-1'>
                    <FormControl>
                      <Input
                        className='h-[3.125rem] py-[0.9375rem] px-[1.25rem] rounded-[0.5rem] border-[1px] border-solid border-white bg-white placeholder:text-[1rem] placeholder:text-greyscaletext-20 font-semibold'
                        placeholder='Họ và tên*'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='phone'
                render={({field}) => (
                  <FormItem className='flex-1'>
                    <FormControl>
                      <Input
                        className='h-[3.125rem] py-[0.9375rem] px-[1.25rem] rounded-[0.5rem] border-[1px] border-solid border-white bg-white placeholder:text-[1rem] placeholder:text-greyscaletext-20 font-semibold'
                        placeholder='Số điện thoại*'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name='email'
              render={({field}) => (
                <FormItem className='flex-1'>
                  <FormControl>
                    <Input
                      className='h-[3.125rem] py-[0.9375rem] px-[1.25rem] rounded-[0.5rem] border-[1px] border-solid border-white bg-white placeholder:text-[1rem] placeholder:text-greyscaletext-20 font-semibold'
                      placeholder='Email*'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex xmd:flex-col lg:justify-between lg:space-x-[1rem] xmd:space-y-[1rem]'>
              <FormField
                control={form.control}
                name='country'
                render={({field}) => (
                  <FormItem className='flex-1'>
                    <FormControl>
                      <Select className=''>
                        <SelectTrigger
                          id='framework'
                          className='bg-white'
                        >
                          <SelectValue placeholder='Select' />
                        </SelectTrigger>
                        <SelectContent
                          position='popper'
                          className='bg-white'
                        >
                          <SelectItem value='next'>Next.js</SelectItem>
                          <SelectItem value='sveltekit'>SvelteKit</SelectItem>
                          <SelectItem value='astro'>Astro</SelectItem>
                          <SelectItem value='nuxt'>Nuxt.js</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='yeah'
                render={({field}) => (
                  <FormItem className='flex-1'>
                    <FormControl>
                      <Input
                        onchange={() => setIsOpen(!isOpen)}
                        className='h-[3.125rem] py-[0.9375rem] px-[1.25rem] rounded-[0.5rem] border-[1px] border-solid border-white bg-white placeholder:text-[1rem] placeholder:text-greyscaletext-20 font-semibold'
                        placeholder='Năm học dự kiến*'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name='office'
              render={({field}) => (
                <FormItem className='flex-1'>
                  <FormControl>
                    <Input
                      onchange={() => setIsOpen(!isOpen)}
                      className='h-[3.125rem] py-[0.9375rem] px-[1.25rem] rounded-[0.5rem] border-[1px] border-solid border-white bg-white placeholder:text-[1rem] placeholder:text-greyscaletext-20 font-semibold'
                      placeholder='Văn phòng*'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='reason'
              render={({field}) => (
                <FormItem className='flex-1'>
                  <FormControl>
                    <Input
                      onchange={() => setIsOpen(!isOpen)}
                      className='h-[3.125rem] py-[0.9375rem] px-[1.25rem] rounded-[0.5rem] border-[1px] border-solid border-white bg-white placeholder:text-[1rem] placeholder:text-greyscaletext-20 font-semibold'
                      placeholder='Vì sao bạn biết đến DUCANHEDUCATION*'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex w-full space-x-[1rem]'>
              <Button
                className='h-[3.5rem] py-[1rem] px-[2rem] rounded-[0.624rem] flex-1 bg-primary-50 text-white flex justify-center items-center !body16 font-bold'
                type='submit'
              >
                Gửi yêu cầu
              </Button>
              <Button className='h-[3.5rem] py-[1rem] px-[2rem] rounded-[0.624rem] flex-1 bg-white text-primary-60 !body16 font-bold flex justify-center items-center'>
                1900 72 11 (Hotline)
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  )
}
