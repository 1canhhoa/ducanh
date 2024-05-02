import WrapperNavPrimary from '@/layout/navPrimary/WrapperNavPrimary'

// import WrapperNavPrimary from "@/layout/navPrimary/WrapperNavPrimary"
export default function PrimaryLayout({children}) {
  return (
    <>
      <WrapperNavPrimary />
      {children}
    </>
  )
}
