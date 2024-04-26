import {getDictionary} from '@/app/[lang]/dictionaries'
import Support from '@/components/thongtinduhoc/components/Support'

export default async function page({params}) {
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params?.lang)
  //   const {viewport} = searchParams
  //   const isMobile = viewport?.includes('mobile')
  return (
    <Support
      text={t}
      className={'px-[11.56rem] xmd:px-[0.75rem]'}
      guide
    />
  )
}
