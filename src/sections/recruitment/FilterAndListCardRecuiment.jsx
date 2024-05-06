import { Button } from '@/components/ui/button'
import CardRecuiment from './CardRecuiment'
import PopupDropDown from './PopupDropDown'
import PopupDropUp from './PopupDropUp'
import Search from './Search'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Pagination from '@/components/pagination/Pagination'
const FilterAndListCardRecuiment = ({ t, isMobile }) => {
  const dataDropDown = ['UI/UX', 'ccount', 'Kế toán', 'Developer', 'Hành chính', 'Thiết Kế', 'Thực Tập Sinh', 'Thiết Kế', 'Thực Tập Sinh']
  return (
    <div className="flex items-start justify-start flex-col xmd:mt-[0.75rem] mt-[2rem]">
      <div className="flex xmd:flex-col w-full justify-start items-start  xmd:space-y-[0.75rem] md:space-x-[1.5rem] ">
        <Search />
        <div className=" flex items-start xmd:w-full xmd:space-x-[0.5rem] space-x-[0.75rem]">

          {!isMobile && <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className={'border-primary-10 normal-case text-primary-50 py-[0.6875rem]'}>{t.position}</Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="!p-0">
              <DropdownMenuGroup className='bg-white'>
                <PopupDropDown dataDropDown={dataDropDown} />
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>}

          {isMobile && <Sheet>
            <SheetTrigger asChild>
              <Button className={' xmd:h-[2.5rem] normal-case xmd:py-[0.5rem] text-primary-50  xmd:w-full xmd:px-[1rem] xmd:border-divblue-6020'}>{t.position}</Button>
            </SheetTrigger>

            <SheetContent side={'bottom'} className='!z-[1000] border-none !p-0 w-full h-max rounded-tl-[0.75rem] rounded-tr-[0.75rem] bg-white'>
              <SheetHeader className={'flex justify-center items-start h-[3.5rem] px-[1rem] border-b border-divblue-6020 rounded-tl-[0.7rem] rounded-tr-[0.7rem]'}>
                <SheetTitle className="text-primary-60 text-[1rem] font-bold left-[1.3] uppercase">{t.position}</SheetTitle>
              </SheetHeader>
              <PopupDropUp dataDropDown={dataDropDown} />
            </SheetContent>

          </Sheet>}
          <Button className={'border-primary-10 py-[0.6875rem] xmd:h-[2.5rem] normal-case xmd:py-[0.5rem] text-primary-50  xmd:w-full xmd:px-[1rem] xmd:border-divblue-6020'}>{t.erea}</Button>
          <Button className={'border-primary-10 py-[0.6875rem] xmd:h-[2.5rem] normal-case xmd:py-[0.5rem] text-primary-50  xmd:w-full xmd:px-[1rem] xmd:border-divblue-6020'}>{t.time}</Button>

        </div>
      </div>
      <div className='w-full mt-[0.8rem] xmd:space-y-[0.75rem] space-y-[1.5rem]'>
        <CardRecuiment t={t} isMobile={isMobile} />
        <CardRecuiment t={t} isMobile={isMobile} />
        <CardRecuiment t={t} isMobile={isMobile} />
        <CardRecuiment t={t} isMobile={isMobile} />
        <CardRecuiment t={t} isMobile={isMobile} />
        <CardRecuiment t={t} isMobile={isMobile} />
        <CardRecuiment t={t} isMobile={isMobile} />
        <CardRecuiment t={t} isMobile={isMobile} />
      </div>
      <Pagination />
    </div>

  )
}

export default FilterAndListCardRecuiment

