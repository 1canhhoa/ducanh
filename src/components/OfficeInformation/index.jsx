import CardOffice from './CardOffice'
const OfficeInformation = ({ t, listsPlace }) => {
  return (
    <div className='flex flex-col items-start md:space-y-[2rem] self-stretch'>
      {listsPlace?.map((d, j) => (
        <div key={j} className={' flex flex-col w-full items-start space-y-[1rem]'}>
          {d?.country && <div className={"mt-[2rem] flex text-[#BE3136] text-base not-italic font-bold leading-[normal] uppercase"}>
            {d?.country}
          </div>}
          <div className="flex flex-col items-start w-full space-y-[1.5rem] self-stretch">
            {d?.lists_card && d?.lists_card?.map((l, i) => (
              <div key={i} className="space-y-[1.5rem] w-full">
                <CardOffice dataCard={l} index={i + 1} />
                {(i !== d?.lists_card?.length - 1) && <div className="xmd:hidden h-[0.0625rem] xmd:w-full w-[67rem] bg-[#D9D9D9] "></div>}
              </div>
            ))}
          </div>
        </div>
      ))
      }

    </div >
  )
}

export default OfficeInformation
