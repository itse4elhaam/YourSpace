import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// imported to use client there and server here
import AuthProvider from './AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YourSpace',
  description: 'Social Media Company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<AuthProvider>
			<html lang="en">
				<body className={inter.className}>{children}</body>
			</html>
		</AuthProvider>
  );
}
