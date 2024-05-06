'use server'

import postData from '@/lib/postData'

export const formDktv = async (values) => {
  try {
    const res = await postData(
      '',
      JSON.stringify({
        email: values.email,
        phone: values.phone,
      }),
    )
    return res
  } catch (error) {
    return error
  }
}
