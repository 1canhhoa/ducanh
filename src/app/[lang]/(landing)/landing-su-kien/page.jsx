import LandingSukien from '@/components/landingsukien'
import getData from '@/lib/getData'

export default async function page({searchParams}) {
  const res = await getData('/wp-json/wp/v2/pages/1364')
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  return (
    <LandingSukien
      dataAcf={res?.acf}
      isMobile={isMobile}
    />
  )
}
