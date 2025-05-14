import Image from "next/image"
import Link from "next/link"
<<<<<<< HEAD
import aboutContent from "@/content/about.json"

export default function AboutPage() {
  const { hero, mission, team, clients } = aboutContent

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
              <h2 className="heading-lg">{mission.title}</h2>
              <p className="text-charcoal/80 text-lg leading-relaxed">
                {mission.description}
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
            {mission.values.map((value, index) => (
              <div key={index} className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 hover-trigger">
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
                  </svg>
                </div>
                <h3 className="heading-md mb-3">{value.title}</h3>
                <p className="text-charcoal/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#F8F0ED]">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
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
          <h2 className="heading-lg text-center mb-16">{clients.title}</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.list.map((client, i) => (
              <div key={i} className="flex items-center justify-center p-6 bg-cream rounded-xl shadow-sm hover-trigger">
                <Image
                  src={client.logo || `/placeholder.svg?height=80&width=160&text=${client.name}`}
                  alt={client.name}
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
=======

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="mt-12 mb-8">
        <h1 className="text-5xl font-normal">ABOUT</h1>
        <div className="accent-bar"></div>
      </div>

      <div className="border-t border-gray-200 mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div className="relative">
          <div className="relative aspect-[4/5]">
            <Image src="/placeholder.svg?height=1000&width=800" alt="Studio space" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 border border-[hsl(var(--accent))] translate-x-4 translate-y-4 z-[-1]"></div>
        </div>
        <div>
          <h2 className="text-3xl mb-6">Our Studio</h2>
          <div className="accent-bar"></div>
          <div className="space-y-4 text-lg">
            <p>
              Founded in 2023, Studio Poetics began as a research project exploring the intersection of design,
              philosophy, and everyday life. We have since evolved into a multidisciplinary studio that creates objects,
              spaces, and experiences that celebrate the beauty of the ordinary.
            </p>
            <p>
              Our work is guided by the philosophy of Kenya Hara's WHITE concept, which emphasizes emptiness not as
              absence, but as potential—a space where imagination and sensibility can thrive. We believe in the power of
              simplicity, materiality, and thoughtful design to transform our relationship with the everyday.
            </p>
            <p>
              Through our journal, experiments, observations, and products, we invite others to join us in slowing down
              and finding meaning in the overlooked details of daily life.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-24" id="philosophy">
        <h2 className="text-3xl mb-6">Our Philosophy</h2>
        <div className="accent-bar"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4 text-lg">
            <p>
              At Studio Poetics, we are deeply influenced by Kenya Hara's concept of WHITE. For us, white is not merely
              a color but a philosophy that embraces emptiness as a space of potential and possibility.
            </p>
            <p>
              We believe that by stripping away the unnecessary, we can reveal the inherent beauty and meaning in
              ordinary objects and experiences. Our approach is characterized by:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Embracing emptiness as a creative force</li>
              <li>Attention to subtle material qualities</li>
              <li>Appreciation for natural processes and changes</li>
              <li>Thoughtful consideration of how objects exist in space and time</li>
              <li>Respect for craftsmanship and material integrity</li>
            </ul>
          </div>
          <div className="relative">
            <div className="relative aspect-square">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="White objects arrangement"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 border border-[hsl(var(--accent))] -translate-x-4 -translate-y-4 z-[-1]"></div>
          </div>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl mb-6">Our Team</h2>
        <div className="accent-bar"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div key={index} className="">
              <div className="relative aspect-[3/4]">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-1">{member.name}</h3>
                <p className="text-[hsl(var(--accent))] text-sm mb-4">{member.role}</p>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div>
          <h2 className="text-3xl mb-6">Contact Us</h2>
          <div className="accent-bar"></div>
          <div className="space-y-4">
            <p className="text-lg">
              We welcome inquiries, collaborations, and conversations about our work and philosophy.
            </p>
            <div className="space-y-2">
              <p>
                <strong>Email:</strong> hello@poetics.studio
              </p>
              <p>
                <strong>Studio:</strong> Studio Poetics, Goa / Pryaagraj, India
              </p>
              <p>
                <strong>Hours:</strong> Monday–Friday, 10:00–18:00
              </p>
            </div>
            <div className="pt-4">
              <p className="mb-2">
                <strong>Follow Us</strong>
              </p>
              <div className="flex gap-4">
                <Link href="https://instagram.com" className="hover:text-[hsl(var(--accent))]">
                  Instagram
                </Link>
                <Link href="https://twitter.com" className="hover:text-[hsl(var(--accent))]">
                  Twitter
                </Link>
                <Link href="https://pinterest.com" className="hover:text-[hsl(var(--accent))]">
                  Pinterest
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-square">
            <Image src="/placeholder.svg?height=800&width=800" alt="Studio space" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 border border-[hsl(var(--accent))] translate-x-4 translate-y-4 z-[-1]"></div>
        </div>
      </div>
    </div>
  )
}

const team = [
  {
    name: "Pranshu Chaudhary",
    role: "Playful Futurist",
    bio: "With a background in engineering and design, Pranshu founded Studio Poetics to explore the intersection of design and everyday life.",
    image: "/placeholder.svg?height=900&width=600",
  },
  {
    name: "R M Udahayan",
    role: "Game Designer and XR",
    bio: "Udhayan's Work focuses on developing and envisioning the application of XR and designing and building all of our cozy games.",
    image: "/placeholder.svg?height=900&width=600",
  },
  {
    name: "Monalisa Thakur",
    role: "Designer & Material Researcher",
    bio: "Monalisa's work focuses on material explorations and the sensory qualities of objects, with special attention to visual storytelling, texture and tactility.",
    image: "/placeholder.svg?height=900&width=600",
  },
]
>>>>>>> c74b1e7 (Initial commit)
