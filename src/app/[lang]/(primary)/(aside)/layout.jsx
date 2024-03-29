import AsidePrimary from '@/layout/asidePrimary/AsidePrimary'

export default function AsideLayout({children}) {
  return (
    <main className='flex w-full max-md:flex-col pt-[9.69rem] md:px-[1.5rem]'>
      <AsidePrimary />
      {children}
    </main>
  )
}
