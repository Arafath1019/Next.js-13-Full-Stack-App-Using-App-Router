import './globals.css'
import { Inter } from 'next/font/google'

// Components
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { ThemeProvided } from '../context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'App Title',
  description: 'This is the description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvided>
          <div className='container'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvided>
      </body>
    </html>
  )
}
