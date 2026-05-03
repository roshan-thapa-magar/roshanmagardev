import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import Header from "@/components/header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Roshan Magar",
  description: "Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background overflow-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Sticky Header */}
          <div className="sticky top-0 z-50 bg-background border-b">
            <Header />
          </div>

          {/* Scrollable Content */}
          <main className="max-w-6xl mx-auto px-4 md:px-8 py-4 h-[calc(100vh-64px)] overflow-y-auto hide-scrollbar">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}