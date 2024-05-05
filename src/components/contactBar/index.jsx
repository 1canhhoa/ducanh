import Image from 'next/image'
const CONTACTS = [
  {id: 0, image: '/images/primary/MESSAGE_contact.svg'},
  {id: 1, image: '/images/primary/MESSAGE.svg'},
  {id: 2, image: '/images/primary/MESSAGE_zalo.svg'},
  {id: 3, image: '/images/primary/MESSAGE_phone.svg'},
]
const ContactBar = () => {
  return (
    <section className='fixed xmd:right-[0.5rem] right-[1.75rem] xmd:bottom-[1rem] bottom-[4rem] z-[9999]'>
      <ul>
        {CONTACTS.map((contact) => (
          <li
            className='xmd:size-[2.5rem] size-[3.5rem] mb-[0.7rem] cursor-pointer'
            key={contact.id}
          >
            <Image
              src={contact.image}
              alt={'du học đức anh'}
              width={100}
              height={100}
              className={'size-full'}
              priority
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ContactBar
