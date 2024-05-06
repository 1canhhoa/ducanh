
import { getDictionary } from '@/app/[lang]/dictionaries.js'
import getData from '@/lib/getData'
import PageLienHe from '@/sections/contact/PageLienHe'


export default async function ContactPage({ params, searchParams }) {
  const { viewport } = searchParams
  const isMobile = viewport?.includes('mobile')
  const t = await getDictionary(params.lang)
  const data = await getData('/wp-json/wp/v2/pages/1337')

  return <PageLienHe data={data?.acf} t={t} />
}
