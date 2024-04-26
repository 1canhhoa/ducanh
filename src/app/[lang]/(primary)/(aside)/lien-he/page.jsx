
import { getDictionary } from '@/app/[lang]/dictionaries.js'
import PageLienHe from '@/sections/contact/PageLienHe'


export default async function ContactPage({ params, searchParams }) {
  const { viewport } = searchParams
  const isMobile = viewport?.includes('mobile')
  const t = await getDictionary(params.lang)
  return <PageLienHe t={t} />
}
