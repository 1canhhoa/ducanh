'use client'

import Image from 'next/image'
import CradDrop from './CardDrop'
import {useState} from 'react'

export default function LyDoChonDucAnh() {
  const [itemCard, setItemCard] = useState(-1)

  return (
    <>
      <section className='flex space-x-[7.75rem] mb-[4.38rem] w-full relative'>
        <div className='flex flex-col items-end w-[42.6875rem]'>
          <div className='w-[31.3125rem] flex flex-col'>
            <h1 className='title relative w-fit'>
              Lý do chọn Đức Anh
              <div className='size-[0.625rem] bg-secondary-40 absolute bottom-[0.625rem] right-[-1.125rem]'></div>
            </h1>
            <p className='w-[31.3125rem] mb-[1rem] mt-[1.5rem] body16 font-bold text-greyscaletext-50'>
              Có thể bạn từng có ý định tự làm hồ sơ du học, và chúng tôi hoàn
              toàn đồng ý rằng, việc tự làm hồ sơ khi bạn có đủ kiến thức, kinh
              nghiệm, hiểu biết cần… là một trải nghiệm thú vị.
            </p>
            <p className='w-[31.3125rem] body16 font-bold text-greyscaletext-50'>
              Tuy nhiên, nếu bạn chọn tự làm hồ sơ khi có một trong các suy nghĩ
              dưới đây thì chúng tôi đề nghị các bạn xem xét lại:
            </p>
            <div className='flex flex-col items-start space-y-[1rem] mt-[2.5rem]'>
              {new Array(7).fill(0).map((e, index) => (
                <CradDrop
                  key={index}
                  index={index}
                  setItemCard={setItemCard}
                  itemCard={itemCard}
                />
              ))}
            </div>
          </div>
        </div>
        <Image
          className='absolute top-[-16.9375rem] right-[9rem]'
          alt='banner1'
          src={'/images/thongtinduhoc/banner1.jpg'}
          width={649}
          height={850}
        />
      </section>
      <section className='w-full z-10 relative h-[85.5rem] bg-[#FAFAFA] lg:pl-[11.81rem] lg:pt-[6.25rem]'>
        <div className='flex h-full w-[31.125rem] flex-col items-start space-y-[2.25rem]'>
          <h1 className='text_gradient text-[1.875rem] w-full font-extrabold leading-[1.5] bg-gradient-to-b from-[#2E6BC6] to-[#29A4EA] !bg-clip-text '>
            LÝ DO CHỌN CÔNG TY ĐỨC ANH ĐỂ LÀM HỒ SƠ DU HỌC
          </h1>
          <div className='flex flex-col items-start h-full space-y-[2.5rem]'>
            <div className='flex flex-col space-y-[1rem]'>
              <span className='text-greyscaletext-50 body16 text-[1rem] font-bold'>
                Hơn 23 năm qua, công ty Đức Anh đã giúp hàng chục ngàn học sinh,
                sinh viên xin học, xin học bổng và du học thành công ở 16 nước
                chúng tôi hợp tác cùng.
              </span>
              <span className='text-greyscaletext-50 body16 text-[1rem] font-medium'>
                Khảo sát khách hàng của chúng tôi từ năm 2000 đến nay đã chỉ ra
                các lý do cơ bản mà du học sinh chọn công ty Đức Anh, thay vì
                công ty tư vấn du học khác, là:
              </span>
            </div>
            <div className='flex flex-col space-y-[1rem] h-full'>
              {new Array(7).fill(0).map((e, index) => (
                <CradDrop
                  key={index}
                  index={index}
                  setItemCard={setItemCard}
                  itemCard={itemCard}
                />
              ))}
            </div>
          </div>
        </div>
        <Image
          className='absolute top-[-14.88rem] right-[9rem]'
          alt='banner1'
          src={'/images/thongtinduhoc/banner2.png'}
          width={626}
          height={850}
        />
      </section>
      <div className='relative z-20 h-[45.15975rem] bg-[#FAFAFA] w-full left-0'>
        <Image
          className='absolute bottom-0 left-0 w-full'
          alt='banner'
          src={'/images/thongtinduhoc/quotes.png'}
          width={1842.591}
          height={999.277}
        />
        <div className='flex relative mt-[10rem] z-10 flex-col justify-center items-center'>
          <Image
            alt='icon'
            src={'/images/thongtinduhoc/ngoackep.svg'}
            width={60}
            height={42.857}
          />
          <h3 className='w-[45.8125rem] text-center text-[1.75rem] font-bold leading-[1.5] text-white'>
            Bằng kiến thức chuyên môn và kinh nghiệm của mình, Đức Anh hoàn toàn
            có thể giúp các bạn tránh được các rủi ro và toại nguyện ước mơ du
            học. Các bạn có thể tin tưởng ở chúng tôi!
          </h3>
        </div>
      </div>
    </>
  )
}
