import Modal from './components/Modals/Modal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import {Nunito} from 'next/font/google'

const font = Nunito({
  subsets:['latin']
})

export const metadata = {
  title: 'Plan Trip',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
          <Modal/>
          <Navbar/>
          {children}

        </body>
    </html>
  )
}
