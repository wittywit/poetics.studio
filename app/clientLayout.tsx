"use client"

import type React from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <body className={`bg-white text-black min-h-screen flex flex-col`}>
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          className="flex-1 grid-lines"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <CustomCursor />
    </body>
  )
}
