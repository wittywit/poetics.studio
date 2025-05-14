"use client"

import Link from "next/link"
import { useState } from "react"
import { X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <motion.header
        className="py-6 px-4 md:px-6 relative z-50 border-b"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <motion.button
              className="w-8 h-8 flex items-center justify-center z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X size={32} className="text-black" />
              ) : (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black"
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none z-50">
              <div className="flex flex-col items-center">
                <span className="text-xl font-normal">STUDIO POETICS</span>
                <motion.div
                  className="w-full h-0.5 bg-[hsl(var(--accent))] mt-0.5"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                ></motion.div>
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.header>

      {/* Full-page menu overlay */}
      <motion.div
        className={`fixed inset-0 bg-white z-40 ${isMenuOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl mb-6 border-b pb-2">MAIN</h2>
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-3xl hover:underline" onClick={() => setIsMenuOpen(false)}>
                  HOME
                </Link>
                <Link href="/journal" className="text-3xl hover:underline" onClick={() => setIsMenuOpen(false)}>
                  JOURNAL
                </Link>
                <Link href="/experiments" className="text-3xl hover:underline" onClick={() => setIsMenuOpen(false)}>
                  EXPERIMENTS
                </Link>
                <Link href="/observations" className="text-3xl hover:underline" onClick={() => setIsMenuOpen(false)}>
                  OBSERVATIONS
                </Link>
                <Link
                  href="/designed-objects"
                  className="text-3xl hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  DESIGNED OBJECTS
                </Link>
                <Link href="/about" className="text-3xl hover:underline" onClick={() => setIsMenuOpen(false)}>
                  ABOUT
                </Link>
                <Link href="/awards" className="text-3xl hover:underline" onClick={() => setIsMenuOpen(false)}>
                  AWARDS
                </Link>
              </nav>
            </div>

            <div>
              <h2 className="text-2xl mb-6 border-b pb-2">EXPLORE</h2>
              <nav className="flex flex-col space-y-4">
                <Link href="/calendar" className="text-xl hover:underline" onClick={() => setIsMenuOpen(false)}>
                  Calendar
                </Link>
                <Link href="/exhibitions" className="text-xl hover:underline" onClick={() => setIsMenuOpen(false)}>
                  Exhibitions
                </Link>
                <Link href="/workshops" className="text-xl hover:underline" onClick={() => setIsMenuOpen(false)}>
                  Workshops
                </Link>
                <Link href="/talks" className="text-xl hover:underline" onClick={() => setIsMenuOpen(false)}>
                  Talks & Lectures
                </Link>
              </nav>
            </div>

            <div>
              <h2 className="text-2xl mb-6 border-b pb-2">INFORMATION</h2>
              <nav className="flex flex-col space-y-4">
                <Link href="/contact" className="text-xl hover:underline" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
                <Link href="/press" className="text-xl hover:underline" onClick={() => setIsMenuOpen(false)}>
                  Press
                </Link>
                <Link href="/jobs" className="text-xl hover:underline" onClick={() => setIsMenuOpen(false)}>
                  Jobs
                </Link>
              </nav>
            </div>

            <div>
              <h2 className="text-2xl mb-6 border-b pb-2">CONNECT</h2>
              <div className="flex flex-col space-y-4">
                <p className="text-xl">Studio Poetics</p>
                <p className="text-xl">Goa / Prayagraj, India</p>
                <p className="text-xl">hello@studiopoetics.com</p>
                <div className="flex gap-4 mt-4">
                  <Link
                    href="https://instagram.com"
                    className="text-xl hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Instagram
                  </Link>
                  <Link
                    href="https://twitter.com"
                    className="text-xl hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Twitter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
