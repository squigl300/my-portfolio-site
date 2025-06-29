import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sean Quigley | Graduate AI Engineer',
  description: 'Graduate AI Engineer passionate about building intelligent systems that solve real-world problems. Specializing in machine learning, cloud infrastructure, and scalable AI solutions.',
  keywords: ['AI Engineer', 'Machine Learning', 'Cloud Computing', 'Python', 'TypeScript', 'AWS', 'Azure'],
  authors: [{ name: 'Sean Quigley' }],
  creator: 'Sean Quigley',
  publisher: 'Sean Quigley',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://seanquigley.tech',
    title: 'Sean Quigley | Graduate AI Engineer',
    description: 'Graduate AI Engineer passionate about building intelligent systems that solve real-world problems.',
    siteName: 'Sean Quigley Portfolio',
    images: [
      {
        url: 'https://seanquigley.tech/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sean Quigley - Graduate AI Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sean Quigley | Graduate AI Engineer',
    description: 'Graduate AI Engineer passionate about building intelligent systems that solve real-world problems.',
    images: ['https://seanquigley.tech/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}