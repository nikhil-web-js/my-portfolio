import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nikhil Sharma - Senior Frontend Engineer',
  description: 'Senior Frontend Engineer | AI-Native Builder | React, Node.js & TypeScript | 7+ Years',
  keywords: ['Frontend Engineer', 'React', 'TypeScript', 'Node.js', 'AI', 'Web Development'],
  authors: [{ name: 'Nikhil Sharma' }],
  openGraph: {
    title: 'Nikhil Sharma - Senior Frontend Engineer',
    description: 'Senior Frontend Engineer | AI-Native Builder | React, Node.js & TypeScript | 7+ Years',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
