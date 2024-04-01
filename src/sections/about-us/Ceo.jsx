import Title from '@/components/Title'
import React from 'react'

const Ceo = ({ t }) => {
  return (
    <div className='flex flex-col items-start space-y-[2.5rem] px-[11.56rem]'>
      <div className=' bd text-start'>
        <Title title={t.ceo} />
      </div>
      <div className='flex items-start '>
        display: flex;
        width: 76.875rem;
        padding: 1.25rem;
        flex-direction: column;
        align-items: flex-start;
        border-radius: 1.25rem;
        border: 1px solid rgba(97, 150, 246, 0.40);

        background: #FFF;
      </div>
    </div>
  )
}

export default Ceo
