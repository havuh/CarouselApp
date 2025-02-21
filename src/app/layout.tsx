import { Public_Sans } from 'next/font/google'
import '@styles/app.scss'
import { Navbar } from '@core/components/navigation'

export const metadata = {
  title: 'Rio',
  description: 'Carousel examples website with SwiperJS',
}

const font = Public_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <main
          style={{
            paddingTop: '67px',
          }}
        >
          {children}
        </main>
      </body>
    </html>
  )
}
