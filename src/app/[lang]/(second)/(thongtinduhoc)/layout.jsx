import NavDirectional from '@/layout/navDirectional/NavDirectional'

export default function SecondLayout({children}) {
  return (
    <>
      <NavDirectional />
      {children}
    </>
  )
}
