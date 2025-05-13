import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'My3 Heritage Homestay | Traditional Kerala Nalukettu Experience',
  description: 'Experience authentic Kerala living in our 400-year-old traditional Nalukettu homestay. Immerse yourself in Kerala\'s rich architectural heritage and cultural traditions.',
  generator: 'Next.js',
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
