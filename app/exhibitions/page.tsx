"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
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

export default function ExhibitionsPage() {
  const [filter, setFilter] = useState<"all" | "current" | "upcoming" | "past">("all")

  const filteredExhibitions = exhibitions.filter((exhibition) => {
    if (filter === "all") return true
    return exhibition.status === filter
  })

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="mt-12 mb-8">
        <h1 className="text-5xl font-normal">EXHIBITIONS</h1>
        <div className="accent-bar"></div>
      </div>

      <div className="border-t border-gray-200 mb-12"></div>

      {/* Introduction */}
      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl mb-6">Our Exhibition Philosophy</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                At Studio Poetics, we view exhibitions as spaces for dialogue, exploration, and sense-making. Our
                exhibitions are designed to reveal the extraordinary within the ordinary, inviting visitors to engage
                with design in new and meaningful ways.
              </p>
              <p>
                Through careful curation, thoughtful spatial design, and interactive elements, we create immersive
                experiences that challenge perceptions and inspire curiosity. Our exhibitions often explore the
                intersection of traditional craftsmanship and emerging technologies, material explorations, and the
                poetics of everyday objects.
              </p>
            </div>
          </motion.div>
          <motion.div className="relative aspect-[4/3]" variants={fadeIn}>
            <Image src="/placeholder.svg?key=eiev9" alt="Exhibition space" fill className="object-cover" />
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Filter Controls */}
      <AnimatedSection>
        <motion.div variants={fadeIn} className="mb-12">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 border ${
                filter === "all" ? "bg-black text-white" : "border-black hover:bg-black hover:text-white"
              } transition-colors`}
            >
              All Exhibitions
            </button>
            <button
              onClick={() => setFilter("current")}
              className={`px-6 py-2 border ${
                filter === "current" ? "bg-black text-white" : "border-black hover:bg-black hover:text-white"
              } transition-colors`}
            >
              Current
            </button>
            <button
              onClick={() => setFilter("upcoming")}
              className={`px-6 py-2 border ${
                filter === "upcoming" ? "bg-black text-white" : "border-black hover:bg-black hover:text-white"
              } transition-colors`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter("past")}
              className={`px-6 py-2 border ${
                filter === "past" ? "bg-black text-white" : "border-black hover:bg-black hover:text-white"
              } transition-colors`}
            >
              Past
            </button>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Featured Exhibition */}
      {(filter === "all" || filter === "current") && (
        <AnimatedSection>
          <motion.div variants={fadeIn} className="mb-20">
            <div className="relative">
              <div className="absolute top-6 left-6 z-10 bg-[#fb4e4e] text-white px-4 py-1">CURRENT EXHIBITION</div>
              <div className="relative aspect-[21/9] w-full">
                <Image
                  src="/placeholder.svg?key=bzozt"
                  alt="White Space: Material Studies Exhibition"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white p-8 md:p-12 md:w-1/2 md:absolute md:bottom-12 md:right-12 shadow-lg">
                <h2 className="text-3xl mb-4">White Space: Material Studies</h2>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>May 15 - August 30, 2023</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>Main Gallery, Studio Poetics, Goa</span>
                </div>
                <p className="mb-6">
                  An exploration of materiality, texture, and form through a series of white objects and installations.
                  This exhibition invites visitors to engage with subtle variations in surface, light, and shadow,
                  revealing the complexity within apparent simplicity.
                </p>
                <Link
                  href="/exhibitions/white-space-material-studies"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-[#fb4e4e] transition-colors"
                >
                  Exhibition Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      )}

      {/* Exhibition Grid */}
      <AnimatedSection>
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="text-3xl mb-6">
            {filter === "all"
              ? "All Exhibitions"
              : filter === "current"
                ? "Current Exhibitions"
                : filter === "upcoming"
                  ? "Upcoming Exhibitions"
                  : "Past Exhibitions"}
          </h2>
          <div className="accent-bar"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExhibitions.map((exhibition, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 hover:border-[#fb4e4e] transition-colors"
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="relative">
                  {exhibition.status === "upcoming" && (
                    <div className="absolute top-4 left-4 z-10 bg-blue-500 text-white px-3 py-1 text-sm">UPCOMING</div>
                  )}
                  {exhibition.status === "current" && (
                    <div className="absolute top-4 left-4 z-10 bg-[#fb4e4e] text-white px-3 py-1 text-sm">CURRENT</div>
                  )}
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={exhibition.image || "/placeholder.svg"}
                      alt={exhibition.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{exhibition.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exhibition.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{exhibition.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{exhibition.description}</p>
                  <Link
                    href={`/exhibitions/${exhibition.slug}`}
                    className="inline-flex items-center gap-2 text-sm hover:text-[#fb4e4e]"
                  >
                    Exhibition Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Exhibition Spaces */}
      <AnimatedSection>
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="text-3xl mb-6">Our Exhibition Spaces</h2>
          <div className="accent-bar"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3]">
              <Image src="/placeholder.svg?key=g9m7c" alt="Main Gallery" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl mb-4">Main Gallery</h3>
              <p className="mb-4">
                Our primary exhibition space in Goa features 200 square meters of flexible display area with adjustable
                lighting systems, climate control, and state-of-the-art audio-visual capabilities. The white cube design
                provides a neutral backdrop for a wide range of exhibition formats.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#fb4e4e]"></div>
                  <span>200 square meters of exhibition space</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#fb4e4e]"></div>
                  <span>Adjustable lighting system</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#fb4e4e]"></div>
                  <span>Climate-controlled environment</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#fb4e4e]"></div>
                  <span>Audio-visual capabilities</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#fb4e4e]"></div>
                  <span>Wheelchair accessible</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl mb-4">Project Space</h3>
              <p className="mb-4">
                Our smaller, more intimate Project Space is dedicated to experimental exhibitions, works-in-progress,
                and collaborative projects. This 80 square meter space encourages risk-taking and innovation, providing
                a platform for emerging ideas and practices.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#fb4e4e]"></div>
                  <span>80 square meters of flexible space</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#fb4e4e]"></div>
                  <span>Modular display system</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#fb4e4e]"></div>
                  <span>Digital projection capabilities</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#fb4e4e]"></div>
                  <span>Sound system for audio installations</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3]">
              <Image src="/placeholder.svg?key=zlc7y" alt="Project Space" fill className="object-cover" />
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Exhibition Proposals */}
      <AnimatedSection>
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="text-3xl mb-6">Exhibition Proposals</h2>
          <div className="accent-bar"></div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl mb-4">Submit Your Proposal</h3>
            <p className="mb-6">
              Studio Poetics welcomes exhibition proposals from designers, artists, curators, and researchers whose work
              aligns with our focus on materiality, everyday objects, and the intersection of design and technology. We
              are particularly interested in proposals that:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 text-[#fb4e4e]" />
                <span>Explore the poetics of ordinary objects and experiences</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 text-[#fb4e4e]" />
                <span>Investigate material properties and processes</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 text-[#fb4e4e]" />
                <span>Bridge traditional craftsmanship and emerging technologies</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-1 text-[#fb4e4e]" />
                <span>Engage visitors in meaningful interactions and reflections</span>
              </li>
            </ul>
            <p className="mb-6">
              To submit a proposal, please send a PDF document (max 10MB) to{" "}
              <a href="mailto:exhibitions@studiopoetics.com" className="text-[#fb4e4e] hover:underline">
                exhibitions@studiopoetics.com
              </a>{" "}
              that includes:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#fb4e4e] mt-2"></div>
                <span>A concise description of your exhibition concept (max 500 words)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#fb4e4e] mt-2"></div>
                <span>Visual materials (sketches, images, renderings)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#fb4e4e] mt-2"></div>
                <span>Technical requirements and spatial considerations</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#fb4e4e] mt-2"></div>
                <span>Your CV and portfolio or examples of previous work</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#fb4e4e] mt-2"></div>
                <span>Preferred exhibition timeframe</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-[#fb4e4e] transition-colors"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </AnimatedSection>
    </div>
  )
}

// Exhibition Data
const exhibitions = [
  {
    title: "White Space: Material Studies",
    slug: "white-space-material-studies",
    date: "May 15 - August 30, 2023",
    location: "Main Gallery, Studio Poetics, Goa",
    description:
      "An exploration of materiality, texture, and form through a series of white objects and installations.",
    image: "/placeholder.svg?height=800&width=1000&query=minimal white exhibition space",
    status: "current",
  },
  {
    title: "Digital Materiality",
    slug: "digital-materiality",
    date: "September 15 - December 10, 2023",
    location: "Project Space, Studio Poetics, Goa",
    description:
      "Examining the intersection of digital technologies and physical materials through interactive installations.",
    image: "/placeholder.svg?height=800&width=1000&query=digital art installation",
    status: "upcoming",
  },
  {
    title: "Everyday Rituals",
    slug: "everyday-rituals",
    date: "October 5 - November 30, 2023",
    location: "Design Museum, Bangalore",
    description:
      "A collaborative exhibition exploring the design of objects used in daily rituals across different cultures.",
    image: "/placeholder.svg?height=800&width=1000&query=everyday objects exhibition",
    status: "upcoming",
  },
  {
    title: "Paper Explorations",
    slug: "paper-explorations",
    date: "January 10 - March 20, 2023",
    location: "Main Gallery, Studio Poetics, Goa",
    description:
      "A deep dive into the versatility of paper as a material, featuring folding techniques, lighting effects, and structural innovations.",
    image: "/placeholder.svg?height=800&width=1000&query=paper art exhibition",
    status: "past",
  },
  {
    title: "Light as Material",
    slug: "light-as-material",
    date: "November 5, 2022 - January 15, 2023",
    location: "Project Space, Studio Poetics, Goa",
    description:
      "Investigating how light transforms ordinary objects into extraordinary experiences through a series of installations.",
    image: "/placeholder.svg?height=800&width=1000&query=light art installation",
    status: "past",
  },
  {
    title: "Textile Futures",
    slug: "textile-futures",
    date: "August 12 - October 30, 2022",
    location: "National Design Museum, New Delhi",
    description:
      "Exploring innovative approaches to textile design, including e-textiles, sustainable materials, and traditional craft techniques.",
    image: "/placeholder.svg?height=800&width=1000&query=textile exhibition",
    status: "past",
  },
]
