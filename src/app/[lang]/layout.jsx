import {Plus_Jakarta_Sans} from 'next/font/google'
import '../globals.css'
import Footer from '@/layout/footer/Footer'
<<<<<<< HEAD
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
=======
import SocialAction from '@/components/SocialAction/SocialAction'

export async function generateStaticParams() {
  return ['vi', 'en'].map((lang) => ({lang}))
}
>>>>>>> master

const plus = Plus_Jakarta_Sans({
  subsets: ['vietnamese'],
  variable: '--font-plus-jakarta-sans',
})

export const metadata = {
  title: 'Du học Đức Anh',
  description: 'Generated by dev okhub',
}

export default function RootLayout({children, params}) {
  return (
    <html lang={params.lang}>
      <body className={`${plus.className} ${plus.variable}`}>
<<<<<<< HEAD
        {children}
        <Footer />
        <ToastContainer />
=======
        <SocialAction />
        {children}
        <Footer />
>>>>>>> master
      </body>
    </html>
  )
}
