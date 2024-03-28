import AsidePrimary from '@/layout/asidePrimary/AsidePrimary'

export default function AsideLayout({children}) {
  return (
    <main className='flex pt-[9.69rem] pl-[1.5rem]'>
      <AsidePrimary />
      {children}
    </main>
  )
}
