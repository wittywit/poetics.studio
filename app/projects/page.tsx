"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

type Project = {
  id: string
  title: string
  category: string
  description: string
  image: string
  featured: boolean
}

export default function ProjectsPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || "all")

  const projects: Project[] = [
    {
      id: "harmony-controller",
      title: "Harmony Controller",
      category: "hardware",
      description: "A custom game controller that combines traditional woodworking with modern haptic technology.",
      image: "/placeholder.svg?height=600&width=800&text=Harmony Controller",
      featured: true,
    },
    {
      id: "cozy-cabin",
      title: "Cozy Cabin",
      category: "games",
      description: "A relaxing simulation game about restoring and decorating a cabin in the woods.",
      image: "/placeholder.svg?height=600&width=800&text=Cozy Cabin",
      featured: true,
    },
    {
      id: "tea-time",
      title: "Tea Time",
      category: "games",
      description: "A meditative game about brewing the perfect cup of tea and sharing it with friends.",
      image: "/placeholder.svg?height=600&width=800&text=Tea Time",
      featured: false,
    },
    {
      id: "textile-interface",
      title: "Textile Interface",
      category: "hardware",
      description: "A touch-sensitive fabric interface that brings digital controls to traditional textiles.",
      image: "/placeholder.svg?height=600&width=800&text=Textile Interface",
      featured: false,
    },
    {
      id: "heritage-tech",
      title: "Heritage Tech",
      category: "consultancy",
      description: "Helping a museum bring their historical artifacts into the digital age with interactive exhibits.",
      image: "/placeholder.svg?height=600&width=800&text=Heritage Tech",
      featured: true,
    },
    {
      id: "wooden-synthesizer",
      title: "Wooden Synthesizer",
      category: "hardware",
      description: "A handcrafted wooden synthesizer that combines traditional woodworking with modern sound design.",
      image: "/placeholder.svg?height=600&width=800&text=Wooden Synthesizer",
      featured: false,
    },
    {
      id: "digital-craft",
      title: "Digital Craft",
      category: "consultancy",
      description:
        "A workshop series teaching traditional craftspeople how to incorporate digital elements into their work.",
      image: "/placeholder.svg?height=600&width=800&text=Digital Craft",
      featured: false,
    },
    {
      id: "garden-simulator",
      title: "Garden Simulator",
      category: "games",
      description: "A peaceful game about growing and tending to a virtual garden with realistic plant growth.",
      image: "/placeholder.svg?height=600&width=800&text=Garden Simulator",
      featured: false,
    },
  ]

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "games", name: "Cozy Games" },
    { id: "hardware", name: "Custom Hardware" },
    { id: "consultancy", name: "Design Consultancy" },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="heading-xl text-charcoal">Our Projects</h1>
            <p className="text-xl text-charcoal/80 leading-relaxed">
              Explore our portfolio of cozy games, custom hardware, and design consultancy projects.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 hover-trigger ${
                  activeCategory === category.id
                    ? "bg-coral-dark text-white"
                    : "bg-cream text-charcoal hover:bg-coral-light/30"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.id} className="group hover-trigger">
                <div className="bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-coral-dark text-white text-xs font-medium px-3 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-coral-dark font-medium mb-2">
                      {categories.find((c) => c.id === project.category)?.name.replace("All ", "")}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-coral-dark transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-charcoal/80">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F8F0ED]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="heading-lg">Have a project in mind?</h2>
            <p className="text-charcoal/80 text-lg">
              We'd love to help bring your ideas to life. Get in touch to discuss your project.
            </p>
            <Link
              href="/contact"
              className="bg-[#FA8072] hover:bg-[#F06A5C] text-white px-6 py-3 rounded-full transition-all duration-300 hover-trigger inline-flex mt-4"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
