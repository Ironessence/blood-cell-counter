import { Inter } from 'next/font/google'
import { ThemeWrapper } from '../components/shared/ThemeWrapper'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cell Counter App',
  description: 'An app to count cells',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  )
}