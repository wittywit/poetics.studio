import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="heading-xl text-charcoal">
              <span className="text-coral-dark">Merging</span> tradition with technology
            </h1>
            <p className="text-xl md:text-2xl text-charcoal/80 leading-relaxed">
              We create cozy games, design custom hardware, and help brands blend the old with the new.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link
                href="/projects"
                className="bg-[#FA8072] hover:bg-[#F06A5C] text-white px-6 py-3 rounded-full transition-all duration-300 hover-trigger"
              >
                View Our Work
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[#FA8072] text-[#FA8072] hover:bg-[#FA8072]/10 px-6 py-3 rounded-full transition-all duration-300 hover-trigger"
              >
                Get in Touch
              </Link>
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
