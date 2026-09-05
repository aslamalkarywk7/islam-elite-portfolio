import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Oman Luxury Dash',
  description: 'High-end engineering project management dashboard',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Animated SVG Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Load fonts in browser — avoids build-time network fetch */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Inter:wght@100;200;300;400;500;600;700;800&family=Montserrat:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
