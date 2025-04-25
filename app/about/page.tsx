import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Founder & Creative Director",
      bio: "With over 15 years of experience in game design and hardware development, Alex leads our creative vision.",
      image: "/placeholder.svg?height=400&width=400&text=Alex",
    },
    {
      name: "Sam Taylor",
      role: "Hardware Engineer",
      bio: "Sam combines traditional craftsmanship with cutting-edge technology to create our unique hardware products.",
      image: "/placeholder.svg?height=400&width=400&text=Sam",
    },
    {
      name: "Jordan Lee",
      role: "Game Designer",
      bio: "Jordan specializes in creating cozy, relaxing game experiences that captivate and comfort players.",
      image: "/placeholder.svg?height=400&width=400&text=Jordan",
    },
    {
      name: "Riley Chen",
      role: "Technology Consultant",
      bio: "Riley helps our clients navigate the intersection of tradition and innovation in their products and services.",
      image: "/placeholder.svg?height=400&width=400&text=Riley",
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="heading-xl text-charcoal">About Studio Poetics</h1>
            <p className="text-xl text-charcoal/80 leading-relaxed">
              We're a design studio that believes in the power of blending tradition with technology. Founded in 2018,
              we've been creating experiences that feel both familiar and innovative, bringing warmth and humanity to
              digital spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-[#F8F0ED]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Studio Poetics Workspace"
                width={600}
                height={600}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="heading-lg">Our Story</h2>
              <p className="text-charcoal/80 text-lg leading-relaxed">
                Studio Poetics began as a small collective of designers, engineers, and artists who shared a common
                vision: to create technology that feels more human, more connected to our traditions and values.
              </p>
              <p className="text-charcoal/80 text-lg leading-relaxed">
                We noticed that as technology advanced, it often left behind the warmth and tactile satisfaction of
                traditional crafts. Our mission became to bridge that gap, creating experiences that honor the past
                while embracing the future.
              </p>
              <p className="text-charcoal/80 text-lg leading-relaxed">
                Today, we work with clients across the globe, helping them infuse their digital products with a sense of
                humanity and craftsmanship that resonates with users on a deeper level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Our Values</h2>

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
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <h3 className="heading-md mb-3">Craftsmanship</h3>
              <p className="text-charcoal/80">
                We believe in attention to detail and the value of well-crafted experiences. Every pixel, every
                interaction, and every material is carefully considered.
              </p>
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
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m7 10 2 2 6-6"></path>
                  <path d="m7 16 2 2 6-6"></path>
                </svg>
              </div>
              <h3 className="heading-md mb-3">Balance</h3>
              <p className="text-charcoal/80">
                We strive to find the perfect balance between tradition and innovation, creating solutions that feel
                both familiar and forward-thinking.
              </p>
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
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="heading-md mb-3">Warmth</h3>
              <p className="text-charcoal/80">
                We believe technology should feel warm and inviting. Our designs prioritize comfort, coziness, and human
                connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#F8F0ED]">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 hover-trigger"
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-coral-dark mb-3">{member.role}</p>
                  <p className="text-charcoal/80 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-16">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Our Clients & Partners</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-coral-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="heading-lg">Want to work with us?</h2>
            <p className="text-white/80 text-lg">
              We're always looking for new challenges and exciting projects. Let's create something beautiful together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 mt-6 bg-[#FA8072] hover:bg-[#F06A5C] text-white px-6 py-3 rounded-full transition-all duration-300 hover-trigger"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
