"use client"

import type React from "react"
<<<<<<< HEAD
import { useState } from "react"
import { Mail, MapPin, Send } from "lucide-react"
import contactContent from "@/content/contact.json"

export default function ContactPage() {
  const { hero, contactInfo, form, faq } = contactContent
  const [formData, setFormData] = useState({
=======

import Image from "next/image"
import Link from "next/link"
import { Send, Mail, Phone, MapPin, Clock, Instagram, Twitter } from "lucide-react"
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

export default function ContactPage() {
  const [formState, setFormState] = useState({
>>>>>>> c74b1e7 (Initial commit)
    name: "",
    email: "",
    subject: "",
    message: "",
  })
<<<<<<< HEAD

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
=======
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
>>>>>>> c74b1e7 (Initial commit)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
<<<<<<< HEAD
      setSubmitted(true)
      setFormData({
=======
      setIsSubmitted(true)
      setFormState({
>>>>>>> c74b1e7 (Initial commit)
        name: "",
        email: "",
        subject: "",
        message: "",
      })
<<<<<<< HEAD

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
=======
>>>>>>> c74b1e7 (Initial commit)
    }, 1500)
  }

  return (
<<<<<<< HEAD
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="heading-xl text-charcoal">{hero.title}</h1>
            <p className="text-xl text-charcoal/80 leading-relaxed">
              {hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-[#F8F0ED]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="heading-lg mb-6">Contact Information</h2>

              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 bg-coral-light rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-coral-dark" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email Us</h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-charcoal/80 hover:text-coral-dark transition-colors hover-trigger"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 bg-coral-light rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-coral-dark" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Location</h3>
                  <address className="not-italic text-charcoal/80">
                    {contactInfo.location}
                  </address>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-lg font-medium mb-4">Available For</h3>
                <ul className="space-y-2 text-charcoal/80">
                  {contactInfo.availableFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-coral-dark rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cream rounded-2xl p-8 shadow-md">
              <h2 className="heading-md mb-6">{form.title}</h2>
              <p className="text-charcoal/80 mb-6">{form.description}</p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                  Thank you for your message! We'll get back to you soon.
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                {form.fields.map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-charcoal mb-1">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.id}
                        name={field.id}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={handleChange}
                        required={field.required}
                        placeholder={field.placeholder}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-coral-dark focus:ring-1 focus:ring-coral-dark outline-none transition-colors"
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={handleChange}
                        required={field.required}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-coral-dark focus:ring-1 focus:ring-coral-dark outline-none transition-colors"
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#FA8072] hover:bg-[#F06A5C] text-white px-6 py-3 rounded-full transition-all duration-300 hover-trigger w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">{faq.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faq.questions.map((item, index) => (
              <div key={index} className="bg-cream rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-medium mb-3">{item.question}</h3>
                <p className="text-charcoal/80">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
=======
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="mt-12 mb-8">
        <h1 className="text-5xl font-normal">CONTACT</h1>
        <div className="accent-bar"></div>
      </div>

      <div className="border-t border-gray-200 mb-12"></div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <AnimatedSection>
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl mb-6">Get in Touch</h2>
            <p className="text-lg mb-8">
              We'd love to hear from you. Whether you're interested in collaborating, have a question about our work, or
              just want to say hello, please reach out using the form or contact details below.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#fb4e4e] mt-1" />
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <p>hello@studiopoetics.com</p>
                  <p className="text-sm text-gray-500">For general inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#fb4e4e] mt-1" />
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p>+91 98765 43210</p>
                  <p className="text-sm text-gray-500">Monday to Friday, 10:00–18:00 IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#fb4e4e] mt-1" />
                <div>
                  <h3 className="text-lg font-medium">Studio Locations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Goa</p>
                      <p>Studio No. 42, Design District</p>
                      <p>Anjuna, Goa 403509</p>
                    </div>
                    <div>
                      <p className="font-medium">Prayagraj</p>
                      <p>Creative Hub, Civil Lines</p>
                      <p>Prayagraj, UP 211001</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#fb4e4e] mt-1" />
                <div>
                  <h3 className="text-lg font-medium">Hours</h3>
                  <p>Monday to Friday: 10:00–18:00</p>
                  <p>Saturday: By appointment only</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Follow Us</h3>
              <div className="flex gap-4">
                <Link
                  href="https://instagram.com"
                  className="flex items-center gap-2 hover:text-[#fb4e4e] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </Link>
                <Link
                  href="https://twitter.com"
                  className="flex items-center gap-2 hover:text-[#fb4e4e] transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                  <span>Twitter</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.div variants={fadeIn}>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl mb-6">Send a Message</h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
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
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb4e4e] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb4e4e] focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Project Collaboration">Project Collaboration</option>
                      <option value="Workshop Request">Workshop Request</option>
                      <option value="Exhibition Inquiry">Exhibition Inquiry</option>
                      <option value="Press Inquiry">Press Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb4e4e] focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-[#fb4e4e] transition-colors ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </AnimatedSection>
      </div>

      {/* Map Section */}
      <AnimatedSection delay={0.3}>
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="text-3xl mb-6">Visit Our Studio</h2>
          <div className="accent-bar"></div>

          <div className="relative aspect-[21/9] w-full bg-gray-100 rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?key=zlcks" alt="Studio Poetics location map" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg max-w-md">
                <h3 className="text-lg font-medium mb-2">Studio Poetics</h3>
                <p>
                  Our Goa studio is located in the creative district of Anjuna, easily accessible from the main road.
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 text-[#fb4e4e] hover:underline"
                >
                  Get Directions <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Specific Inquiries Section */}
      <AnimatedSection delay={0.4}>
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="text-3xl mb-6">Specific Inquiries</h2>
          <div className="accent-bar"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 hover:border-[#fb4e4e] transition-colors">
              <h3 className="text-xl font-medium mb-4">Workshop Inquiries</h3>
              <p className="mb-4">
                Interested in our workshops for your university or company? Contact our education team.
              </p>
              <a href="mailto:workshops@studiopoetics.com" className="text-[#fb4e4e] hover:underline">
                workshops@studiopoetics.com
              </a>
            </div>

            <div className="border border-gray-200 p-6 hover:border-[#fb4e4e] transition-colors">
              <h3 className="text-xl font-medium mb-4">Exhibition Opportunities</h3>
              <p className="mb-4">
                For exhibition proposals or collaboration opportunities, reach out to our curatorial team.
              </p>
              <a href="mailto:exhibitions@studiopoetics.com" className="text-[#fb4e4e] hover:underline">
                exhibitions@studiopoetics.com
              </a>
            </div>

            <div className="border border-gray-200 p-6 hover:border-[#fb4e4e] transition-colors">
              <h3 className="text-xl font-medium mb-4">Press & Media</h3>
              <p className="mb-4">
                Journalists and media professionals, please contact our press office for inquiries.
              </p>
              <a href="mailto:press@studiopoetics.com" className="text-[#fb4e4e] hover:underline">
                press@studiopoetics.com
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>
>>>>>>> c74b1e7 (Initial commit)
    </div>
  )
}
