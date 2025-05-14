"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

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
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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

export default function AwardsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#fb4e4e] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl md:text-7xl font-normal mb-6">
              OUR
              <br />
              AWARDED
              <br />
              DESIGNERS
            </h1>
            <p className="text-sm max-w-xs">
              Studio Poetics has a team of award-winning designers, each with a passion for creating spaces that leave a
              lasting impression.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Designer Profiles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {designers.map((designer, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`bg-[${index % 2 === 0 ? "#fb4e4e" : "black"}] text-white p-12`}>
                  <motion.div variants={fadeIn}>
                    <h2 className="text-4xl mb-6">{designer.name}</h2>
                    <p className="mb-8">{designer.bio}</p>

                    <div className="space-y-4 mb-8">
                      {designer.awards.map((award, i) => (
                        <div key={i}>
                          <div className="text-sm opacity-80">{award.title}</div>
                          <div className="flex justify-between">
                            <span>{award.organization}</span>
                            <span>{award.year}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/designers/${designer.slug}`}
                      className="inline-flex items-center text-sm border-b border-white pb-1 hover:opacity-80"
                    >
                      GET PERSONALIZED ADVICE <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>

                <motion.div className="relative aspect-[3/4]" variants={fadeIn}>
                  <Image src={designer.image || "/placeholder.svg"} alt={designer.name} fill className="object-cover" />
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimatedSection>
            <motion.h2 className="text-5xl mb-12" variants={fadeIn}>
              From luxurious residences to
              <br />
              <span className="text-gray-400">cutting-edge</span>
              <br />
              commercial spaces
            </motion.h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div variants={fadeIn}>
                  <div className="relative aspect-square mb-4">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl mb-2">{project.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pride in Every Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <AnimatedSection>
              <motion.div variants={fadeIn} className="text-8xl font-light text-gray-200">
                PRIDE
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div variants={fadeIn} className="text-8xl font-light text-gray-200">
                IN
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <motion.div variants={fadeIn} className="text-8xl font-light text-gray-200">
                EVERY
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <motion.div variants={fadeIn} className="text-8xl font-light text-gray-200">
                DETAIL
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* More Projects CTA */}
      <section className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimatedSection>
            <motion.div variants={fadeIn} className="flex justify-between items-center">
              <Link href="/experiments" className="text-xl hover:text-[#fb4e4e]">
                VIEW MORE PROJECTS
              </Link>
              <ArrowRight className="h-6 w-6" />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

const designers = [
  {
    name: "Benjamin Adler",
    slug: "benjamin-adler",
    bio: "With over 15 years of experience in interior and product design, Benjamin brings a unique perspective that blends minimalism with warmth and functionality.",
    image: "/placeholder.svg?height=900&width=600",
    awards: [
      {
        title: "SOCIETY AWARD FOR HOUSE & HOME",
        organization: "Design Society",
        year: "2019",
      },
      {
        title: "CORE17 DESIGN AWARD",
        organization: "Core Design Foundation",
        year: "2021",
      },
    ],
  },
  {
    name: "Elena Moreno",
    slug: "elena-moreno",
    bio: "Elena's work focuses on material explorations and the sensory qualities of objects, with special attention to texture and tactility.",
    image: "/placeholder.svg?height=900&width=600",
    awards: [
      {
        title: "EMERGING DESIGNER OF THE YEAR",
        organization: "Design Council",
        year: "2020",
      },
      {
        title: "MATERIAL INNOVATION AWARD",
        organization: "Material Design Institute",
        year: "2022",
      },
    ],
  },
]

const featuredProjects = [
  {
    title: "White Terracotta",
    category: "Residential Architecture",
    year: "2021",
    image: "/placeholder.svg?height=800&width=800",
  },
  {
    title: "Showroom Jolly",
    category: "Commercial Architecture",
    year: "2021",
    image: "/placeholder.svg?height=800&width=800",
  },
  {
    title: "D&D Clinic",
    category: "Commercial Architecture",
    year: "2022",
    image: "/placeholder.svg?height=800&width=800",
  },
  {
    title: "Allure Beauty Salon",
    category: "Commercial Architecture",
    year: "2022",
    image: "/placeholder.svg?height=800&width=800",
  },
]
