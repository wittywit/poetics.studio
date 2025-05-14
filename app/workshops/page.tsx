"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Clock, BookOpen, Briefcase } from "lucide-react"
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

export default function WorkshopsPage() {
  const [filter, setFilter] = useState<"all" | "university" | "corporate">("all")

  const filteredWorkshops = workshops.filter((workshop) => {
    if (filter === "all") return true
    return workshop.audience.includes(filter)
  })

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="mt-12 mb-8">
        <h1 className="text-5xl font-normal">WORKSHOPS</h1>
        <div className="accent-bar"></div>
      </div>

      <div className="border-t border-gray-200 mb-12"></div>

      {/* Introduction */}
      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl mb-6">Our Workshop Approach</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Studio Poetics offers immersive, hands-on workshops for universities and corporate clients. Our
                workshops are designed to demystify complex concepts through creative approaches, interactive exercises,
                and thoughtful facilitation.
              </p>
              <p>
                We believe in learning through making, exploring, and questioning. Our workshops combine theoretical
                frameworks with practical applications, creating engaging experiences that foster deep understanding and
                creative problem-solving.
              </p>
              <p>
                From gamifying complex blockchain concepts to exploring the tactile qualities of e-textiles, our
                workshops span a wide range of topics at the intersection of design, technology, and human experience.
              </p>
            </div>
          </motion.div>
          <motion.div className="relative aspect-[4/3]" variants={fadeIn}>
            <Image
              src="/placeholder.svg?height=800&width=1000&query=design workshop with participants collaborating"
              alt="Workshop in progress"
              fill
              className="object-cover"
            />
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
              All Workshops
            </button>
            <button
              onClick={() => setFilter("university")}
              className={`px-6 py-2 border ${
                filter === "university" ? "bg-black text-white" : "border-black hover:bg-black hover:text-white"
              } transition-colors`}
            >
              University Workshops
            </button>
            <button
              onClick={() => setFilter("corporate")}
              className={`px-6 py-2 border ${
                filter === "corporate" ? "bg-black text-white" : "border-black hover:bg-black hover:text-white"
              } transition-colors`}
            >
              Corporate Workshops
            </button>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Featured Workshop */}
      <AnimatedSection>
        <motion.div variants={fadeIn} className="mb-20">
          <div className="relative">
            <div className="relative aspect-[21/9] w-full">
              <Image
                src="/placeholder.svg?height=800&width=1800&query=blockchain workshop with interactive elements"
                alt="Zero Knowledge Proof Workshop"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white p-8 md:p-12 md:w-1/2 md:absolute md:bottom-12 md:right-12 shadow-lg">
              <div className="inline-block bg-[#fb4e4e] text-white px-3 py-1 text-sm mb-4">FEATURED WORKSHOP</div>
              <h2 className="text-3xl mb-4">Demystifying Zero Knowledge Proofs</h2>
              <p className="mb-6">
                Developed for Reclaim Protocol, this workshop gamifies the complex concept of zero knowledge proofs,
                making it accessible and engaging. Through interactive exercises and visual metaphors, participants gain
                a practical understanding of how ZKPs work and their applications in blockchain technology.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#fb4e4e]" />
                  <span>Corporate Teams</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#fb4e4e]" />
                  <span>Full Day Workshop</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#fb4e4e]" />
                  <span>Blockchain Focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#fb4e4e]" />
                  <span>No Prior Knowledge Required</span>
                </div>
              </div>
              <Link
                href="/workshops/zero-knowledge-proofs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-[#fb4e4e] transition-colors"
              >
                Workshop Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Workshop Grid */}
      <AnimatedSection>
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="text-3xl mb-6">
            {filter === "all"
              ? "Our Workshops"
              : filter === "university"
                ? "University Workshops"
                : "Corporate Workshops"}
          </h2>
          <div className="accent-bar"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkshops.map((workshop, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 hover:border-[#fb4e4e] transition-colors"
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={workshop.image || "/placeholder.svg"}
                    alt={workshop.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/3"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {workshop.audience.includes("university") && (
                      <span className="bg-blue-500 text-white px-2 py-1 text-xs">UNIVERSITIES</span>
                    )}
                    {workshop.audience.includes("corporate") && (
                      <span className="bg-[#fb4e4e] text-white px-2 py-1 text-xs">CORPORATE</span>
                    )}
                    {workshop.categories.map((category, i) => (
                      <span key={i} className="bg-black text-white px-2 py-1 text-xs">
                        {category.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-4">{workshop.title}</h3>
                  <p className="text-gray-600 mb-4">{workshop.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#fb4e4e]" />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#fb4e4e]" />
                      <span>{workshop.participants}</span>
                    </div>
                  </div>
                  <Link
                    href={`/workshops/${workshop.slug}`}
                    className="inline-flex items-center gap-2 text-sm hover:text-[#fb4e4e]"
                  >
                    Workshop Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Past Workshops */}
      <AnimatedSection>
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="text-3xl mb-6">Past Workshops</h2>
          <div className="accent-bar"></div>

          <div className="space-y-6">
            {pastWorkshops.map((workshop, index) => (
              <motion.div
                key={index}
                className="border-t border-gray-200 py-6 grid grid-cols-1 md:grid-cols-4 gap-6"
                variants={fadeIn}
              >
                <div>
                  <span className="text-sm text-gray-500">DATE</span>
                  <div className="text-lg">{workshop.date}</div>
                </div>
                <div className="md:col-span-2">
                  <span className="text-sm text-gray-500">WORKSHOP</span>
                  <h3 className="text-xl font-normal">{workshop.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{workshop.description}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">LOCATION</span>
                  <div className="text-lg">{workshop.location}</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {workshop.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-100 px-2 py-1 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection>
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="text-3xl mb-6">What Participants Say</h2>
          <div className="accent-bar"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} className="bg-gray-50 p-8 rounded-lg" variants={fadeIn}>
                <div className="text-4xl text-[#fb4e4e] mb-4">"</div>
                <p className="text-lg italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Workshop Request */}
      <AnimatedSection>
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="text-3xl mb-6">Request a Workshop</h2>
          <div className="accent-bar"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl mb-4">Customized for Your Needs</h3>
              <p className="mb-6">
                We offer customized workshops tailored to the specific needs of universities and corporate clients. Our
                team works closely with you to understand your objectives, audience, and constraints to design an
                engaging and effective learning experience.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fb4e4e] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Initial Consultation</h4>
                    <p className="text-gray-600">
                      We begin with a detailed discussion to understand your goals, audience, and requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fb4e4e] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Workshop Design</h4>
                    <p className="text-gray-600">
                      Our team develops a customized workshop plan, including activities, materials, and learning
                      outcomes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fb4e4e] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Delivery</h4>
                    <p className="text-gray-600">
                      Our experienced facilitators conduct the workshop, ensuring an engaging and productive experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fb4e4e] text-white flex items-center justify-center flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">Follow-up</h4>
                    <p className="text-gray-600">
                      We provide documentation, resources, and follow-up support to extend the learning beyond the
                      workshop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl mb-6">Get in Touch</h3>
              <p className="mb-6">
                To request a workshop or learn more about our offerings, please contact our education team at{" "}
                <a href="mailto:workshops@studiopoetics.com" className="text-[#fb4e4e] hover:underline">
                  workshops@studiopoetics.com
                </a>{" "}
                or fill out the form below.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb4e4e] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb4e4e] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-1">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb4e4e] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="workshopType" className="block text-sm font-medium mb-1">
                    Workshop Interest
                  </label>
                  <select
                    id="workshopType"
                    name="workshopType"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb4e4e] focus:border-transparent"
                  >
                    <option value="">Select a workshop type</option>
                    <option value="blockchain">Blockchain & Zero Knowledge Proofs</option>
                    <option value="ar-vr">AR/VR Development</option>
                    <option value="hardware">Hardware Design & Physical Computing</option>
                    <option value="semiotics">Metaphors & Semiotics</option>
                    <option value="e-textiles">E-Textiles</option>
                    <option value="custom">Custom Workshop</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb4e4e] focus:border-transparent"
                    placeholder="Tell us about your audience, objectives, and any specific requirements."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-[#fb4e4e] transition-colors"
                >
                  Submit Request <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>
    </div>
  )
}

// Workshop Data
const workshops = [
  {
    title: "Demystifying Zero Knowledge Proofs",
    slug: "zero-knowledge-proofs",
    description:
      "A gamified approach to understanding zero knowledge proofs, making complex blockchain concepts accessible and engaging.",
    image: "/placeholder.svg?height=800&width=1000&query=blockchain workshop",
    audience: ["corporate"],
    categories: ["blockchain", "technology"],
    duration: "Full Day",
    participants: "10-25 participants",
  },
  {
    title: "AR/VR Development Fundamentals",
    slug: "ar-vr-fundamentals",
    description:
      "Hands-on introduction to augmented and virtual reality development, covering key concepts, tools, and design principles.",
    image: "/placeholder.svg?height=800&width=1000&query=VR workshop",
    audience: ["university", "corporate"],
    categories: ["technology", "design"],
    duration: "2 Days",
    participants: "15-30 participants",
  },
  {
    title: "Hardware Design & Physical Computing",
    slug: "hardware-design",
    description:
      "Explore the intersection of hardware and software through interactive prototyping and physical computing projects.",
    image: "/placeholder.svg?height=800&width=1000&query=hardware prototyping workshop",
    audience: ["university"],
    categories: ["technology", "making"],
    duration: "3 Days",
    participants: "12-20 participants",
  },
  {
    title: "Metaphors & Semiotics in Design",
    slug: "metaphors-semiotics",
    description:
      "Investigate how meaning is created and communicated through design, with a focus on metaphors, symbols, and cultural context.",
    image: "/placeholder.svg?height=800&width=1000&query=design semiotics workshop",
    audience: ["university"],
    categories: ["theory", "design"],
    duration: "2 Days",
    participants: "15-40 participants",
  },
  {
    title: "E-Textiles: Merging Craft & Technology",
    slug: "e-textiles",
    description:
      "Combine traditional textile techniques with electronic components to create interactive fabrics and wearable technology.",
    image: "/placeholder.svg?height=800&width=1000&query=e-textiles workshop",
    audience: ["university", "corporate"],
    categories: ["making", "technology"],
    duration: "2 Days",
    participants: "10-20 participants",
  },
  {
    title: "Design Thinking for Innovation",
    slug: "design-thinking",
    description:
      "Learn and apply design thinking methodologies to solve complex problems and drive innovation in your organization.",
    image: "/placeholder.svg?height=800&width=1000&query=design thinking workshop",
    audience: ["corporate"],
    categories: ["methodology", "innovation"],
    duration: "1-2 Days",
    participants: "15-30 participants",
  },
]

// Past Workshops Data
const pastWorkshops = [
  {
    date: "April 15-16, 2023",
    title: "Zero Knowledge Proofs Workshop",
    description: "A gamified approach to understanding ZKPs for the Reclaim Protocol team.",
    location: "Reclaim Protocol HQ, Bangalore",
    tags: ["Blockchain", "Corporate", "Technology"],
  },
  {
    date: "March 5-7, 2023",
    title: "AR/VR Development Workshop",
    description: "Three-day intensive on AR/VR development fundamentals and applications.",
    location: "National Institute of Design, Ahmedabad",
    tags: ["Technology", "University", "Design"],
  },
  {
    date: "February 10-12, 2023",
    title: "Metaphors & Semiotics in Design",
    description: "Exploring meaning-making in design through theory and practice.",
    location: "CEPT University, Ahmedabad",
    tags: ["Theory", "University", "Design"],
  },
  {
    date: "January 20-21, 2023",
    title: "E-Textiles Workshop",
    description: "Hands-on exploration of electronic textiles and wearable technology.",
    location: "National Institute of Design, Gandhinagar",
    tags: ["Making", "University", "Technology"],
  },
  {
    date: "November 15-17, 2022",
    title: "Physical Computing Workshop",
    description: "Introduction to hardware prototyping and physical computing.",
    location: "National Institute of Design, Bangalore",
    tags: ["Technology", "University", "Making"],
  },
]

// Testimonials Data
const testimonials = [
  {
    quote:
      "Studio Poetics transformed our understanding of zero knowledge proofs through their innovative, gamified approach. Complex concepts became tangible and accessible, enabling our team to communicate more effectively with both technical and non-technical stakeholders.",
    name: "Aditya Sharma",
    role: "Product Lead, Reclaim Protocol",
    image: "/placeholder.svg?height=100&width=100&query=professional headshot",
  },
  {
    quote:
      "The AR/VR workshop was exceptional. The balance of theory and hands-on practice gave our students a comprehensive understanding of spatial design principles and technical implementation. Many students have incorporated these skills into their final projects.",
    name: "Dr. Priya Mehta",
    role: "Faculty, National Institute of Design",
    image: "/placeholder.svg?height=100&width=100&query=professional woman headshot",
  },
  {
    quote:
      "The e-textiles workshop opened up a whole new world of possibilities for our design team. The intersection of traditional craftsmanship with technology has inspired us to rethink our approach to wearable products. Studio Poetics' facilitation was exceptional.",
    name: "Vikram Patel",
    role: "Innovation Director, Future Fabrics",
    image: "/placeholder.svg?height=100&width=100&query=professional man headshot",
  },
  {
    quote:
      "The metaphors and semiotics workshop provided our students with critical theoretical frameworks and practical tools for meaning-making in design. The exercises were thoughtfully designed and the discussions were rich and nuanced.",
    name: "Dr. Ananya Desai",
    role: "Department Chair, CEPT University",
    image: "/placeholder.svg?height=100&width=100&query=academic woman headshot",
  },
]
