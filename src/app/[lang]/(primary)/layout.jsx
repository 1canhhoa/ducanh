import NavPrimary from '@/layout/navPrimary/NavPrimary'

export default function PrimaryLayout({children}) {
  return (
    <>
      <NavPrimary />
      {children}
    </>
  )
}
