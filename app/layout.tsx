import type React from "react"
<<<<<<< HEAD
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import CustomCursor from "@/components/custom-cursor"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Studio Poetics - Design Studio",
  description: "Merging tradition with technology, creating cozy games and custom hardware",
=======
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./clientLayout"

const inter = Inter({ subsets: ["latin"] })

const metadata: Metadata = {
  title: "Studio Poetics",
  description: "A design studio exploring the beauty in everyday objects and experiences",
>>>>>>> c74b1e7 (Initial commit)
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
<<<<<<< HEAD
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#FFFAF8] text-[#333333] relative`}>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
=======
    <html lang="en">
      <ClientLayout>{children}</ClientLayout>
    </html>
  )
}

export { metadata }
>>>>>>> c74b1e7 (Initial commit)
