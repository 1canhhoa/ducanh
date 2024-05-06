import NavLanding from '@/layout/navLanding/NavLanding'

export default function LandingLayout({children}) {
  return (
    <>
      <NavLanding />
      {children}
    </>
  )
}
