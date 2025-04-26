import Image from "next/image"
import Link from "next/link"
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
