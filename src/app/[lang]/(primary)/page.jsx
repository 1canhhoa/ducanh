import {getDictionary} from '../dictionaries'

export default async function HomePage({params}) {
  console.log('🚀 ~ HomePage ~ params:', params)
  const t = await getDictionary(params.lang)
  return (
    <main className='flex flex-col items-center justify-between min-h-screen md:p-24'>
      <h1 className='title'>Lý do chọn Đức Anh</h1>
      <h1 className='title'>{t.hello}</h1>
    </main>
  )
}
