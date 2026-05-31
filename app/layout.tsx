import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://periyakaruppan.is-a.dev"),
  title: "Periyakaruppan's Portfolio",
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
  description: 'Member Technical Staff at Zoho | Rank 1 | Full Stack Developer. Building secure, scalable and intelligent software systems.',
  keywords: ['Periyakaruppan Nagappan', 'Software Engineer', 'Full Stack Developer', 'Zoho', 'Java', 'React', 'Node.js', 'PostgreSQL'],
  authors: [{ name: 'Periyakaruppan Nagappan' }],
  creator: 'Periyakaruppan Nagappan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://periyakaruppan.is-a.dev',
    title: 'Periyakaruppan Nagappan | Software Engineer Portfolio',
    description: 'Member Technical Staff at Zoho | Rank 1 | Building Secure, Scalable and Intelligent Software Systems',
    siteName: 'Periyakaruppan Nagappan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Periyakaruppan Nagappan | Software Engineer Portfolio',
    description: 'Member Technical Staff at Zoho | Building Secure, Scalable and Intelligent Software Systems',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-[#050505]">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-[#050505] text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
