import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GymPro - Transform Your Body, Transform Your Life',
  description: 'Join GymPro and start your fitness journey today. We offer a variety of programs including strength training, cardio blast, and yoga & flexibility.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}