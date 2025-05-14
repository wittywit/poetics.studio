<<<<<<< HEAD
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import heroContent from "@/content/hero.json"

export default function Home() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="heading-xl text-charcoal">
              {heroContent.title.start} <span className="text-coral-dark">{heroContent.title.highlight}</span>, {heroContent.title.end}
            </h1>
            <p className="text-xl md:text-2xl text-charcoal/80 leading-relaxed">
              {heroContent.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              {heroContent.buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.link}
                  className={`${
                    index === 0
                      ? "bg-[#FA8072] hover:bg-[#F06A5C] text-white"
                      : "border-2 border-[#FA8072] text-[#FA8072] hover:bg-[#FA8072]/10"
                  } px-6 py-3 rounded-full transition-all duration-300 hover-trigger`}
                >
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-[#F8F0ED]">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">What We Do</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 hover-trigger">
              <div className="h-16 w-16 bg-coral-light rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-coral-dark"
                >
                  <path d="M18 8a5 5 0 0 0-10 0v7h10V8z"></path>
                  <path d="M8 15v2a4 4 0 0 0 8 0v-2"></path>
                  <path d="M17 15.7a9 9 0 0 0 .3-2.7V8a7 7 0 0 0-14 0v5a9 9 0 0 0 .3 2.7"></path>
                </svg>
              </div>
              <h3 className="heading-md mb-3">Cozy Games</h3>
              <p className="text-charcoal/80 mb-6">
                We design and develop calm, relaxing games that provide a cozy escape from the everyday hustle.
              </p>
              <Link
                href="/projects?category=games"
                className="text-coral-dark font-medium flex items-center gap-2 hover:gap-3 transition-all"
              >
                Explore Games <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 hover-trigger">
              <div className="h-16 w-16 bg-coral-light rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-coral-dark"
                >
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                  <polygon points="12 15 17 21 7 21 12 15"></polygon>
                </svg>
              </div>
              <h3 className="heading-md mb-3">Custom Hardware</h3>
              <p className="text-charcoal/80 mb-6">
                We create bespoke hardware solutions that blend functionality with beautiful, tactile design.
              </p>
              <Link
                href="/projects?category=hardware"
                className="text-coral-dark font-medium flex items-center gap-2 hover:gap-3 transition-all"
              >
                View Hardware <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 hover-trigger">
              <div className="h-16 w-16 bg-coral-light rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-coral-dark"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="heading-md mb-3">Design Consultancy</h3>
              <p className="text-charcoal/80 mb-6">
                We help brands merge traditional craftsmanship with cutting-edge technology for unique experiences.
              </p>
              <Link
                href="/projects?category=consultancy"
                className="text-coral-dark font-medium flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Featured Project"
                width={600}
                height={600}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <span className="text-coral-dark font-medium">Featured Project</span>
              <h2 className="heading-lg">Harmony Controller</h2>
              <p className="text-charcoal/80 text-lg leading-relaxed">
                A custom game controller that combines traditional woodworking with modern haptic technology, creating a
                warm, tactile gaming experience that connects players to their virtual worlds in a more meaningful way.
              </p>
              <Link
                href="/projects/harmony-controller"
                className="bg-[#FA8072] hover:bg-[#F06A5C] text-white px-6 py-3 rounded-full transition-all duration-300 hover-trigger inline-flex"
              >
                View Case Study
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-[#F8F0ED]">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Our Clients</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-center p-6 bg-cream rounded-xl shadow-sm hover-trigger">
                <Image
                  src={`/placeholder.svg?height=80&width=160&text=Client ${i}`}
                  alt={`Client ${i}`}
                  width={160}
                  height={80}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/about#clients"
              className="border-2 border-[#FA8072] text-[#FA8072] hover:bg-[#FA8072]/10 px-6 py-3 rounded-full transition-all duration-300 hover-trigger inline-flex"
            >
              View All Partners
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24">
        <div className="container-custom max-w-4xl">
          <div className="text-center space-y-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto text-coral-light"
            >
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
            </svg>

            <blockquote className="text-2xl md:text-3xl font-light italic text-charcoal leading-relaxed">
              Studio Poetics helped us create a gaming experience that feels like a warm hug. Their ability to blend
              nostalgic elements with innovative technology resulted in our most successful game launch to date.
            </blockquote>

            <div>
              <p className="font-medium text-lg">Jane Cooper</p>
              <p className="text-charcoal/70">Creative Director, Cozy Games Inc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-coral-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="heading-lg">Ready to bring your ideas to life?</h2>
            <p className="text-white/80 text-lg">
              Let's create something beautiful together. Reach out to discuss your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 mt-6 bg-white text-coral-dark rounded-full font-medium hover:bg-cream transition-colors duration-300 hover-trigger"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
=======
"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null)

  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 md:py-20 border-b overflow-hidden rounded-section">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-start">
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-8 rounded-full bg-black"></div>
              <span className="text-sm">250+ PROJECTS</span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 w-full">
              <div className="flex flex-col justify-center">
                <motion.h1
                  className="text-6xl md:text-8xl font-normal leading-tight mb-6"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  DESIGN
                  <br />
                  ORDINARY
                  <br />
                  EXPERIENCE
                  <br />
                  <span className="text-[#fb4e4e]">CURIOSITY</span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {/* Updated description to reflect sense-making design practice */}
                  <p className="text-lg mb-8 max-w-md">
                    Studio Poetics is a sense-making design practice. We explore the beauty in everyday objects and
                    experiences through thoughtful design inspired by Kenya Hara's concepts of "White" and
                    "Exformation."
                  </p>
                </motion.div>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="grid grid-cols-10 gap-1">
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="aspect-square bg-black rounded-full"
                      initial={{ opacity: 0.2 }}
                      animate={{ opacity: i < 5 ? 1 : 0.2 + (5 - i) * 0.15 }}
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.05 }}
                    ></motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Background Video */}
        <motion.div
          className="max-w-7xl mx-auto px-4 md:px-6 mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="aspect-[16/4.5] rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-black/10 z-10"></div>
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
              <source src="/placeholder.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        <motion.div
          className="max-w-7xl mx-auto px-4 md:px-6 mt-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="relative">
            <motion.div
              className="whitespace-nowrap"
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
            >
              <span className="text-xl inline-flex items-center">
                BUILDING A GENTLE FUTURE WITH TECHNOLOGY AND DESIGN ◎ SENSE-MAKING THROUGH DESIGN ⚙ INSPIRED BY KENYA
                HARA ◎ BUILDING A GENTLE FUTURE WITH TECHNOLOGY AND DESIGN ◎ SENSE-MAKING THROUGH DESIGN ⚙ INSPIRED BY
                KENYA HARA ◎
              </span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Services Section - Updated to match the design in the image */}
      <AnimatedSection>
        <section className="py-20 border-t border-b rounded-section">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.h2 className="text-5xl mb-12" variants={fadeIn}>
              OUR SERVICES
            </motion.h2>

            <div className="space-y-0">
              {serviceItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  variants={fadeIn}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="flex items-center justify-between py-6 border-t border-gray-200 group">
                    <div className="flex items-center gap-8">
                      <span className="text-[#fb4e4e] text-xl font-medium">{item.date}</span>
                      <h3 className="text-2xl font-normal">{item.title}</h3>
                    </div>
                    <ArrowRight className="h-6 w-6 text-[#fb4e4e] transition-transform group-hover:translate-x-2" />
                  </div>

                  {/* Service image preview - only visible when hovered */}
                  {activeService === index && (
                    <motion.div
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 w-64 h-40 z-10 pointer-events-none"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover rounded-md"
                        />
                        <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-[#fb4e4e] opacity-70"></div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
              <div className="border-t border-gray-200"></div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Case Studies Section */}
      <AnimatedSection>
        <section className="py-20 rounded-section">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-12">
              <motion.h2 className="text-4xl" variants={fadeIn}>
                Case Studies
              </motion.h2>
              <motion.div variants={fadeIn}>
                <Link href="/experiments" className="flex items-center text-sm hover:text-[#fb4e4e]">
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  className={`${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                  variants={scaleUp}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="relative aspect-[4/3]">
                    <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-[#fb4e4e] mb-2">{study.category}</div>
                    <h3 className="text-xl font-normal mb-3">{study.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{study.description}</p>
                    <Link
                      href={`/experiments/${study.slug}`}
                      className="flex items-center text-sm hover:text-[#fb4e4e]"
                    >
                      View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Offerings Section */}
      <AnimatedSection>
        <section className="py-20 rounded-section">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.h2 className="text-4xl mb-12" variants={fadeIn}>
              Our Offerings
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Updated to have rounded corners/oval shape */}
              <motion.div
                className="bg-black text-white p-10 rounded-[2rem]" // Large radius for oval shape
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <h3 className="text-2xl mb-4">POETICS JOURNAL</h3>
                <p>Our platform as research hub for exploring design and technology</p>
              </motion.div>

              <motion.div
                className="bg-[#4169e1] text-white p-10 rounded-[2rem]" // Large radius for oval shape
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <h3 className="text-2xl mb-4">RESEARCH LABORATORIES</h3>
                <p>New expertise and new knowledge in material exploration and technological innovation</p>
              </motion.div>

              <motion.div
                className="bg-[#8B4513] text-white p-10 rounded-[2rem]" // Large radius for oval shape
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <h3 className="text-2xl mb-4">MATERIAL STUDIES</h3>
                <p>A series of experimental projects exploring the intersection of design and technology</p>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Journal Section */}
      <AnimatedSection>
        <section className="py-20 border-t rounded-section">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-12">
              <motion.h2 className="text-4xl" variants={fadeIn}>
                Journal
              </motion.h2>
              <motion.div variants={fadeIn}>
                <Link href="/journal" className="flex items-center text-sm hover:text-[#fb4e4e]">
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Updated journal entries to focus on technology and design */}
              {journalEntries.slice(0, 3).map((entry, index) => (
                <motion.div
                  key={index}
                  className=""
                  variants={scaleUp}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="relative aspect-[4/3]">
                    <Image src={entry.image || "/placeholder.svg"} alt={entry.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-[#fb4e4e] mb-2">{entry.category}</div>
                    <h3 className="text-xl font-normal mb-3">{entry.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{entry.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs">{entry.date}</span>
                      <Link href={`/journal/${entry.slug}`} className="flex items-center text-sm hover:text-[#fb4e4e]">
                        Read <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}

// Featured projects data
const featuredProjects = [
  {
    title: "India Blockchain Week",
    category: "BRANDING & WEBSITE 2023",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Sustainable Tech Initiative",
    category: "DESIGN SYSTEM 2023",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Digital Wellness Platform",
    category: "UX/UI DESIGN 2023",
    image: "/placeholder.svg?height=600&width=800",
  },
]

// Service items data
const serviceItems = [
  {
    date: "01",
    title: "Brand Identity & Design Systems",
    image: "/placeholder.svg?height=600&width=1000",
  },
  {
    date: "02",
    title: "Product Design & Development",
    image: "/placeholder.svg?height=600&width=1000",
  },
  {
    date: "03",
    title: "Material Research & Exploration",
    image: "/placeholder.svg?height=600&width=1000",
  },
  {
    date: "04",
    title: "Exhibition & Installation Design",
    image: "/placeholder.svg?height=600&width=1000",
  },
  {
    date: "05",
    title: "Design Workshops & Education",
    image: "/placeholder.svg?height=600&width=1000",
  },
]

// Case studies data - updated to focus on technology and design
const caseStudies = [
  {
    title: "India Blockchain Week",
    slug: "india-blockchain-week",
    category: "BRANDING & WEBSITE",
    description: "Complete branding, website, and NFT development for a major blockchain event.",
    image: "/placeholder.svg?height=600&width=1000",
  },
  {
    title: "Ethical AI Interface",
    slug: "ethical-ai-interface",
    category: "UX/UI DESIGN",
    description: "Creating human-centered interfaces for AI systems that prioritize transparency and trust.",
    image: "/placeholder.svg?height=600&width=1000",
  },
  {
    title: "Sustainable Tech Packaging",
    slug: "sustainable-tech-packaging",
    category: "MATERIAL DESIGN",
    description: "Developing eco-friendly packaging solutions for technology products.",
    image: "/placeholder.svg?height=600&width=1000",
  },
]

// Journal entries data - updated to focus on technology and design
const journalEntries = [
  {
    title: "Building Technology with Empathy",
    slug: "technology-with-empathy",
    category: "Design Philosophy",
    date: "MAY 2, 2023",
    excerpt: "How Kenya Hara's concept of 'Exformation' can guide us in creating more humane technology.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "The Gentle Future of Digital Interfaces",
    slug: "gentle-future-interfaces",
    category: "Technology Design",
    date: "APRIL 15, 2023",
    excerpt: "Exploring how minimalism and thoughtful design can create more calming digital experiences.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Blockchain as a Design Material",
    slug: "blockchain-as-design-material",
    category: "Technology Exploration",
    date: "MARCH 28, 2023",
    excerpt: "Understanding how blockchain technology can be approached as a design material with unique properties.",
    image: "/placeholder.svg?height=600&width=800",
  },
]
>>>>>>> c74b1e7 (Initial commit)
