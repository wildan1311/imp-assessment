import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Posts CRUD App",
  description: "A Next.js app for managing posts with full CRUD functionality",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Navigation />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  )
}
