export default async function postContactForm7(formID, body) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/wp-json/contact-form-7/v1/contact-forms/${formID}/feedback`,
    {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body,
    },
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error('Failed to fetch data')
    return null
  }
  return res.json()
}
