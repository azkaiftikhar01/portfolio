import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Azka Iftikhar – Senior Full Stack Engineer',
  description: 'Portfolio of Azka Iftikhar, Senior Full Stack Engineer & Team Lead',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
