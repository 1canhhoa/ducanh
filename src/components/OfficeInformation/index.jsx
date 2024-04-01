import CardOffice from './CardOffice'
const OfficeInformation = ({ t }) => {
  return (
    <div className=" grid xmd:grid-cols-1 grid-cols-3 
      gap-x-[1.5rem] xmd:gap-y-[0.75rem] gap-y-[2rem] w-full"
    >
      <CardOffice />
      <CardOffice />
      <CardOffice />
      <CardOffice />
      <CardOffice />
      <CardOffice />
      <CardOffice />
      <CardOffice />
      <CardOffice />
    </div>
  )
}

export default OfficeInformation
