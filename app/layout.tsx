import '@/app/globals.css'
import type { Metadata } from 'next'

import { NextAuthProvider } from '@/app/providers'

export const metadata: Metadata = {
  title: 'Project Timer Tracker',
  description: 'Project Timer Tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
