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
  title: {
    default: "Roshan Thapa Magar - Portfolio",
    template: "%s | Roshan Thapa Magar",
  },
  description:
    "Personal portfolio of Roshan Thapa Magar - Full Stack Developer specializing in modern web applications, scalable systems, and UI/UX design.",
  keywords: [
    "Roshan Thapa Magar",
    "Portfolio",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Nepal",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Roshan Thapa Magar" }],
  creator: "Roshan Thapa Magar",

  metadataBase: new URL("https://roshanthapamagar.vercel.app"), // change this later

  openGraph: {
    title: "Roshan Thapa Magar - Portfolio",
    description:
      "Full Stack Developer building modern, scalable web applications.",
    url: "https://roshanthapamagar.vercel.app",
    siteName: "Roshan Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/roshan.jpeg", // put this in /public folder
        width: 1200,
        height: 630,
        alt: "Roshan Thapa Magar Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Roshan Thapa Magar - Portfolio",
    description:
      "Full Stack Developer building modern web applications.",
    images: ["/roshan.jpeg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
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
          {/* HEADER */}
          <div className="sticky top-0 z-50 bg-background border-b">
            <Header />
          </div>

          {/* CONTENT */}
          <main className="max-w-6xl mx-auto px-4 md:px-8 py-4 h-[calc(100vh-64px)] overflow-y-auto hide-scrollbar">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}