"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
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

export default function JobsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="mt-12 mb-8">
        <h1 className="text-5xl font-normal">CAREERS</h1>
        <div className="accent-bar"></div>
      </div>

      <div className="border-t border-gray-200 mb-12"></div>

      {/* Introduction */}
      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl mb-6">Join Our Team</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                At Studio Poetics, we're building a team of curious, thoughtful, and passionate individuals who are
                excited about exploring the intersection of design, technology, and everyday life.
              </p>
              <p>
                We believe in creating a collaborative environment where diverse perspectives are valued and where
                everyone has the opportunity to contribute meaningfully to our projects, research, and creative
                explorations.
              </p>
              <p>
                Whether you're a designer, researcher, technologist, or maker, if you're interested in finding beauty
                and meaning in the ordinary, we'd love to hear from you.
              </p>
            </div>
          </motion.div>
          <motion.div className="relative aspect-[4/3]" variants={fadeIn}>
            <Image
              src="/placeholder.svg?key=budlo"
              alt="Studio Poetics team collaborating"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Our Culture */}
      <AnimatedSection>
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="text-3xl mb-6">Our Culture</h2>
          <div className="accent-bar"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Curiosity-Driven</h3>
              <p className="mb-6">
                We encourage continuous exploration and learning. Our team members are given time and resources to
                pursue research interests, experiment with new materials and technologies, and develop their skills.
              </p>
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?key=377ma"
                  alt="Material exploration"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Collaborative</h3>
              <p className="mb-6">
                We believe that the best ideas emerge from diverse perspectives and collaborative processes. Our studio
                is designed to facilitate interaction, knowledge-sharing, and collective problem-solving.
              </p>
              <div className="relative aspect-square">
                <Image
                  src="/design-team-collaboration.png"
                  alt="Team collaboration"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Thoughtful</h3>
              <p className="mb-6">
                We take a considered approach to our work, valuing depth over speed and quality over quantity. We create
                space for reflection, critique, and iteration in all our projects.
              </p>
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?key=9qgel"
                  alt="Thoughtful design process"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection>
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="text-3xl mb-6">Benefits & Perks</h2>
          <div className="accent-bar"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#fb4e4e] mt-1" />
                  <div>
                    <h4 className="font-medium">Flexible Work Arrangements</h4>
                    <p className="text-gray-600">
                      We offer flexible working hours and the option to work remotely part of the week, allowing you to
                      find your optimal work-life balance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#fb4e4e] mt-1" />
                  <div>
                    <h4 className="font-medium">Professional Development</h4>
                    <p className="text-gray-600">
                      We support your growth with a dedicated budget for courses, conferences, and learning resources,
                      plus regular internal workshops and knowledge-sharing sessions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#fb4e4e] mt-1" />
                  <div>
                    <h4 className="font-medium">Research Time</h4>
                    <p className="text-gray-600">
                      Dedicated time for personal research projects and explorations that align with your interests and
                      the studio's focus areas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#fb4e4e] mt-1" />
                  <div>
                    <h4 className="font-medium">Comprehensive Health Benefits</h4>
                    <p className="text-gray-600">
                      We offer health insurance, mental health support, and wellness programs to ensure your wellbeing.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#fb4e4e] mt-1" />
                  <div>
                    <h4 className="font-medium">Creative Studio Environment</h4>
                    <p className="text-gray-600">
                      Work in our thoughtfully designed studio spaces in Goa and Prayagraj, equipped with tools,
                      materials, and resources for experimentation and making.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#fb4e4e] mt-1" />
                  <div>
                    <h4 className="font-medium">Collaborative Projects</h4>
                    <p className="text-gray-600">
                      Opportunity to work on diverse projects with clients across technology, culture, education, and
                      retail sectors.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#fb4e4e] mt-1" />
                  <div>
                    <h4 className="font-medium">Generous Time Off</h4>
                    <p className="text-gray-600">
                      We offer paid vacation, personal days, and holidays, encouraging you to rest and recharge.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#fb4e4e] mt-1" />
                  <div>
                    <h4 className="font-medium">Team Retreats</h4>
                    <p className="text-gray-600">
                      Regular team retreats and outings to foster connection, inspiration, and collective creativity.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Current Openings */}
      <AnimatedSection>
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="text-3xl mb-6">Current Openings</h2>
          <div className="accent-bar"></div>

          <div className="space-y-8">
            {currentOpenings.map((job, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 p-8 hover:border-[#fb4e4e] transition-colors"
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-medium">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-gray-100 px-3 py-1 text-sm">{job.location}</span>
                      <span className="bg-gray-100 px-3 py-1 text-sm">{job.type}</span>
                      {job.tags.map((tag, i) => (
                        <span key={i} className="bg-gray-100 px-3 py-1 text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/jobs/${job.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-[#fb4e4e] transition-colors whitespace-nowrap"
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div>
                  <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    {job.responsibilities.slice(0, 3).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {currentOpenings.length === 0 && (
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl mb-4">No Current Openings</h3>
              <p className="mb-6">
                We don't have any specific positions open at the moment, but we're always interested in connecting with
                talented individuals who share our values and approach.
              </p>
              <p>
                If you'd like to be considered for future opportunities, please see our "General Applications" section
                below.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatedSection>

      {/* General Applications */}
      <AnimatedSection>
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="text-3xl mb-6">General Applications</h2>
          <div className="accent-bar"></div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl mb-4">Don't see a perfect fit?</h3>
            <p className="mb-6">
              We're always interested in connecting with talented individuals who are passionate about our work and
              approach, even if we don't have a specific opening that matches your skills.
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">We're particularly interested in people with backgrounds in:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#fb4e4e]"></div>
                    <span>Interaction Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#fb4e4e]"></div>
                    <span>Material Research</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#fb4e4e]"></div>
                    <span>Creative Technology</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#fb4e4e]"></div>
                    <span>Design Research</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#fb4e4e]"></div>
                    <span>Exhibition Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#fb4e4e]"></div>
                    <span>Design Education</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">How to Apply:</h4>
                <p className="mb-4">
                  To submit a general application, please send an email to{" "}
                  <a href="mailto:jobs@studiopoetics.com" className="text-[#fb4e4e] hover:underline">
                    jobs@studiopoetics.com
                  </a>{" "}
                  with the following:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#fb4e4e] text-white flex items-center justify-center flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <p>
                        <strong>Subject line:</strong> "General Application - [Your Name] - [Your Primary Discipline]"
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#fb4e4e] text-white flex items-center justify-center flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <p>
                        <strong>Cover letter:</strong> Tell us about yourself, your interests, and why you'd like to
                        join Studio Poetics (PDF format)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#fb4e4e] text-white flex items-center justify-center flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <p>
                        <strong>CV/Resume:</strong> Your professional experience and education (PDF format)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#fb4e4e] text-white flex items-center justify-center flex-shrink-0 mt-1">
                      4
                    </div>
                    <div>
                      <p>
                        <strong>Portfolio:</strong> A PDF (max 10MB) or link to your online portfolio showcasing
                        relevant work
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Internships */}
      <AnimatedSection>
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="text-3xl mb-6">Internships</h2>
          <div className="accent-bar"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl mb-4">Learn & Contribute</h3>
              <p className="mb-6">
                Our internship program offers students and recent graduates the opportunity to gain hands-on experience
                in a multidisciplinary design studio. Interns work alongside our team on real projects, participate in
                research, and contribute to our creative process.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">What You'll Do:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-1 text-[#fb4e4e]" />
                      <span>Assist with research, design, and production tasks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-1 text-[#fb4e4e]" />
                      <span>Participate in team meetings, critiques, and brainstorming sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-1 text-[#fb4e4e]" />
                      <span>Develop skills in your area of interest with mentorship from our team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-1 text-[#fb4e4e]" />
                      <span>Work on a self-directed project related to our studio's focus areas</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">What We Offer:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-1 text-[#fb4e4e]" />
                      <span>Paid internships (we don't believe in unpaid work)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-1 text-[#fb4e4e]" />
                      <span>Flexible durations (3-6 months)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-1 text-[#fb4e4e]" />
                      <span>Mentorship from experienced designers and researchers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-1 text-[#fb4e4e]" />
                      <span>Exposure to diverse projects and clients</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl mb-4">Current Internship Opportunities</h3>
                {internships.length > 0 ? (
                  <div className="space-y-6">
                    {internships.map((internship, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                        <h4 className="font-medium text-lg">{internship.title}</h4>
                        <div className="flex flex-wrap gap-2 my-2">
                          <span className="bg-white px-3 py-1 text-xs border border-gray-200">
                            {internship.location}
                          </span>
                          <span className="bg-white px-3 py-1 text-xs border border-gray-200">
                            {internship.duration}
                          </span>
                          <span className="bg-white px-3 py-1 text-xs border border-gray-200">
                            {internship.startDate}
                          </span>
                        </div>
                        <p className="text-sm mb-4">{internship.description}</p>
                        <Link
                          href={`/jobs/internships/${internship.slug}`}
                          className="text-[#fb4e4e] hover:underline text-sm flex items-center gap-1"
                        >
                          Learn more <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <p className="mb-4">
                      We're not currently accepting applications for specific internship positions, but we welcome
                      general expressions of interest for future opportunities.
                    </p>
                    <p className="mb-6">
                      If you're interested in interning with us in the future, please send your portfolio and a brief
                      introduction to{" "}
                      <a href="mailto:internships@studiopoetics.com" className="text-[#fb4e4e] hover:underline">
                        internships@studiopoetics.com
                      </a>
                      .
                    </p>
                    <p className="text-sm">
                      We typically offer internships starting in January, June, and September each year, with
                      applications opening 3 months prior.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Our Process */}
      <AnimatedSection>
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="text-3xl mb-6">Our Hiring Process</h2>
          <div className="accent-bar"></div>

          <div className="space-y-8">
            <p className="text-lg">
              We've designed our hiring process to be thoughtful, transparent, and respectful of your time. Here's what
              you can expect:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-[#fb4e4e] text-white flex items-center justify-center mb-4">
                  1
                </div>
                <h3 className="text-xl font-medium mb-2">Application Review</h3>
                <p className="text-gray-600">
                  We carefully review all applications, considering both skills and alignment with our values and
                  approach.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-[#fb4e4e] text-white flex items-center justify-center mb-4">
                  2
                </div>
                <h3 className="text-xl font-medium mb-2">Initial Conversation</h3>
                <p className="text-gray-600">
                  A casual 30-minute video call to get to know each other and discuss your background and interests.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-[#fb4e4e] text-white flex items-center justify-center mb-4">
                  3
                </div>
                <h3 className="text-xl font-medium mb-2">Portfolio Discussion</h3>
                <p className="text-gray-600">
                  A deeper dive into your work, process, and thinking with relevant team members.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-[#fb4e4e] text-white flex items-center justify-center mb-4">
                  4
                </div>
                <h3 className="text-xl font-medium mb-2">Team Meeting & Offer</h3>
                <p className="text-gray-600">
                  Meet more team members, discuss specific projects, and if there's mutual interest, receive an offer.
                </p>
              </div>
            </div>

            <p>
              Throughout the process, we encourage questions and open dialogue. We aim to make decisions within 2-3
              weeks of initial application and provide feedback to all candidates who reach the interview stage.
            </p>
          </div>
        </motion.div>
      </AnimatedSection>
    </div>
  )
}

// Current Job Openings Data
const currentOpenings = [
  {
    title: "Senior Interaction Designer",
    slug: "senior-interaction-designer",
    location: "Goa, India",
    type: "Full-time",
    tags: ["Design", "Technology"],
    description:
      "We're looking for an experienced interaction designer to lead projects at the intersection of physical and digital experiences, with a focus on creating meaningful interactions with everyday objects and spaces.",
    responsibilities: [
      "Lead the design process for interactive installations, products, and digital experiences",
      "Collaborate with multidisciplinary teams including researchers, technologists, and clients",
      "Develop prototypes that explore novel interactions and experiences",
      "Mentor junior designers and contribute to the studio's design approach",
      "Document and communicate design decisions and processes",
    ],
  },
  {
    title: "Design Researcher",
    slug: "design-researcher",
    location: "Prayagraj, India",
    type: "Full-time",
    tags: ["Research", "Strategy"],
    description:
      "Join our team as a design researcher to uncover insights that inform our design process and help us better understand the relationship between people, objects, and environments.",
    responsibilities: [
      "Plan and conduct qualitative research including interviews, observations, and participatory design sessions",
      "Analyze research data to identify patterns, insights, and opportunities",
      "Translate research findings into actionable design directions",
      "Collaborate with designers to integrate research into the design process",
      "Document and present research findings to team members and clients",
    ],
  },
  {
    title: "Creative Technologist",
    slug: "creative-technologist",
    location: "Goa, India",
    type: "Full-time",
    tags: ["Technology", "Making"],
    description:
      "We're seeking a creative technologist who can bridge the gap between concept and implementation, bringing ideas to life through a combination of hardware, software, and physical making.",
    responsibilities: [
      "Develop prototypes and functional systems for interactive installations and products",
      "Collaborate with designers to explore technical possibilities and constraints",
      "Work with a variety of technologies including sensors, microcontrollers, and digital fabrication tools",
      "Document technical processes and create specifications for production",
      "Stay current with emerging technologies and their potential applications",
    ],
  },
]

// Internship Data
const internships = [
  {
    title: "Design Research Intern",
    slug: "design-research-intern",
    location: "Prayagraj, India",
    duration: "3 months",
    startDate: "January 2024",
    description:
      "Assist our research team in planning and conducting user research, analyzing data, and communicating insights.",
  },
  {
    title: "Interaction Design Intern",
    slug: "interaction-design-intern",
    location: "Goa, India",
    duration: "6 months",
    startDate: "June 2024",
    description:
      "Work alongside our design team on interactive projects, contributing to concept development, prototyping, and user testing.",
  },
]
