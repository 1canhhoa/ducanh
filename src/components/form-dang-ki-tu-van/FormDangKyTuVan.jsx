"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Title from "../Title"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState, useTransition } from 'react'
import postContactForm7 from "@/lib/postContactForm7"
import { toast } from "sonner"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formDktv } from "@/actions/formDktv"

export default function FormDangKyTuVan({ togglePopup, type, t }) {
  const [isPending, startTransition] = useTransition()
  const large = (type === 'large')
  const mini = (type === 'mini')
  const formSchema = z.object({
    name: z.string().min(1),
    email: z.string().min(5),
    phone: z.string().min(5),
    birthYear: z.string().min(4),
    city: z.string().min(5),
    content: z.string().min(10),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: 'Okhubvn',
      email: 'nhamvanhien31102002@gmail.com',
      phone: '0123456778',
      birthYear: '2021',
      city: 'hanoi',
      content: 'day la Okhub Viet Nam',
    },
  })

  async function onSubmit(values) {
    console.log({ values });
    try {

      startTransition(async () => {
        const formData = new FormData()
        formData.append('name', values.name)
        formData.append('email', values.email)
        formData.append('phone', values.phone)
        formData.append('birthYear', values.birthYear)
        formData.append('city', values.city)
        formData.append('content', values.content)
        formData.append('_wpcf7_unit_tag', '1417')

        const res = await postContactForm7(1417, formData)

        console.log(res)
        if (res.status === 'mail_sent') {
          toast("Mail cảm ơn đã được gửi đến bạn", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
          if (mini && togglePopup) {
            togglePopup()
          }
        } else {
          toast({
            title: "Gửi mail thất bại",
            description: "_____",
          })
        }
      })
    } catch (error) {
      toast.error(lang.recruitment.rq_apply_failure)
      console.log(error)
    }
  }




  const className = {
    base: 'text-primary-60 font-feature-settings text-[0.75rem] xmd:leading-[1.2] font-bold uppercase ',
    input_large: `!border-b !border-l-0 !border-r-0 !border-t-0 w-full !rounded-none !pl-0 xmd:border-[#F1F3F7] border-[#6196F6]
                    placeholder:text-greyscaletext-10 placeholder:text-base placeholder:font-medium placeholder:leading-[1.5]
                    text-greyscaletext-80 text-base not-italic font-semibold leading-[1.5]`,
    input_mini: `flex w-full h-12 items-center gap-2.5 self-stretch px-5 py-[1.0625rem] rounded-[0.625rem] bg-white
                    placeholder:text-[color:var(--greyscaletext-20,#A9A9A9)] placeholder:text-base placeholder:font-medium placeholder:leading-[normal]`
  }
  return (

    <div className={large ? "md:w-[39.8125rem] xmd:px-[0.75rem]" :
      " z-[100] flex flex-col xmd:z-50 items-start gap-3 self-stretch p-5 rounded-[0.625rem] bg-primary-10"}>
      {mini && <div className="
      w-full text_gradient bg-gradient-to-b bg-clip-text
      from-[#082072] from-[100%] to-[#2B46A8] to-[0%]
      text-xl not-italic font-bold leading-[120%] tracking-[-0.00313rem] uppercase">
        ĐĂNG KÝ TƯ VẤN
      </div>}

      {large && <Title title={t.contact.title} />}
      {large && <div className="md:hidden xmd:pt-[0.5rem] self-stretch text-[color:var(--en,#3F3F3F)] text-xs not-italic font-medium leading-[normal]">
        Vui  lòng để lại thông tin dưới đây, chúng tôi sẽ liên hệ lại  với bạn trong thời gian sớm nhất.
      </div>}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={large ? "space-y-[2rem] mt-[1.31rem]" : "space-y-2 w-full"}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                {large && <FormLabel className={className.base}>Họ và tên*</FormLabel>}
                <FormControl>
                  <Input
                    {...field}
                    className={type === "large" ? `${className.input_large}` : `${className.input_mini}`}
                    disabled={isPending}
                    placeholder="Họ tên của bạn *"
                    type="text"
                  />
                </FormControl>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />

          {/* email sdt */}
          <div className={large ? "flex xmd:flex-col items-start xmd:space-y-[2rem] md:space-x-[1.5rem]"
            :
            " space-y-2 w-full"}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  {large && <FormLabel className={className.base}>Email*</FormLabel>}
                  <FormControl>
                    <Input
                      {...field}
                      className={type === "large" ? `${className.input_large}` : `${className.input_mini}`}
                      disabled={isPending}
                      placeholder={large ? "your.email@gmail.com" : "Email của bạn *"}
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  {large && <FormLabel className={className.base}>Số điện thoại*</FormLabel>}
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      className={type === "large" ? `${className.input_large}` : `${className.input_mini}`}
                      placeholder="Số điện thoại của bạn *"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>



          {/* năm sinh,thành phố */}
          <div className={large ? "flex items-start space-x-[1.5rem]" : "space-y-2 w-full"}>
            <FormField
              control={form.control}
              name="birthYear"
              render={({ field }) => (
                <FormItem className="w-full">
                  {large && <FormLabel className={className.base}> năm sinh</FormLabel>}
                  <FormControl>
                    <Input
                      {...field}
                      className={type === "large" ? `${className.input_large}` : `${className.input_mini}`}
                      disabled={isPending}
                      placeholder={type === "large" ? "yyyy" : "Năm Sinh *"}
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="w-full">
                  {large && <FormLabel className={className.base}>Thành phố bạn đang ở</FormLabel>}
                  <FormControl>
                    <Input
                      {...field}
                      className={type === "large" ? `${className.input_large}` : `${className.input_mini}`}
                      disabled={isPending}
                      placeholder="Thành phố bạn đang ở *"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>



          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="w-full">
                {large && <FormLabel className={className.base}>Thông tin bạn cần tư vấn*</FormLabel>}
                <FormControl>
                  <Textarea
                    rows={0}
                    {...field}
                    className={`!ring-0 ` + (type === "large" ? `!h-[0rem] !min-h-[2.75rem] ${className.input_large}` : `flex h-[8.0625rem] bg-white items-start gap-2.5 self-stretch px-5 py-[1.0625rem] rounded-[0.625rem]
                    placeholder:text-[color:var(--greyscaletext-20,#A9A9A9)] placeholder:text-base placeholder:font-medium placeholder:leading-[normal]
                    `)}
                    disabled={isPending}
                    placeholder={type === "large" ? "Nội dung" : "Bạn cần tư vấn về (du học – PTE – định cư – visa – hay vấn đề khác)?"}
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormError message={error} />
        <FormSuccess message={success} /> */}

          <Button
            disabled={isPending}
            className="mt-[0.25rem] flex h-11 w-full justify-center bg-primary-50 items-center gap-2.5 self-stretch px-[1.5625rem] py-3 rounded-[0.625rem]
            text-white text-center normal-case text-base font-semibold leading-[1.5]
            "
            type="submit">Gửi</Button>
        </form>
      </Form>

    </div>

  )
}