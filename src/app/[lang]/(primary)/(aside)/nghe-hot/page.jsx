import {getDictionary} from '@/app/[lang]/dictionaries'
import NgheHot from '@/components/nghehot'
<<<<<<< HEAD

export default async function page({params}) {
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params?.lang)
  return <NgheHot t={t} />
=======
import getData from '@/lib/getData'

export default async function page({params}) {
  const t = await getDictionary(params?.lang)
  const res = await getData('/wp-json/wp/v2/pages/1046')
  return (
    <NgheHot
      t={t}
      dataAcf={res?.acf}
    />
  )
>>>>>>> master
}
