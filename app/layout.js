 import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Raleway } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({
  subsets: ['latin']
})

export const metadata = {
  title: 'Conrad Etherington',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
        
      </body>
    </html>
  )
}
