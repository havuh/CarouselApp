import { Nunito } from 'next/font/google'
import '@styles/app.scss'

export const metadata = {
  title: 'Rio',
  description: 'Carousels for everyone',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
