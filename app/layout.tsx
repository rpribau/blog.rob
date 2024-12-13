import type { Metadata } from "next"
import localFont from 'next/font/local'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"

// Load the custom Geist font with multiple weights
const geist = localFont({
  src: [
    {
      path: '../fonts/Geist-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Geist-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Geist-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Geist-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Geist-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-geist',
})

export const metadata: Metadata = {
  title: "Home - Roberto Priego Bautista",
  description: "Personal portfolio of Roberto Priego Bautista",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="container mx-auto px-4 py-8 max-w-5xl pt-20">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

