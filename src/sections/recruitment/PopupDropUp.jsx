const PopupDropUp = ({ dataDropDown }) => {
  return <div className=" flex flex-col items-start space-y-[0.5rem] self-stretch px-[0.5rem]">
    {dataDropDown.map((d, i) => (
      <div key={i} className="flex h-[3rem] border-b !z-[1000] border-greyscaletext-5 px-[0.75rem] shrink-0 self-stretch justify-between items-center">
        {d}
      </div>
    ))}
  </div>
}
export default PopupDropUp
