"use client"

import type React from "react"
import { useState } from "react"
import { Mail, MapPin, Send } from "lucide-react"
import contactContent from "@/content/contact.json"

export default function ContactPage() {
  const { hero, contactInfo, form, faq } = contactContent
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
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
    </div>
  )
}
