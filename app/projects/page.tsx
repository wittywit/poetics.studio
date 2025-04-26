"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import projectsContent from "@/content/projects.json"

type Project = {
  id: string
  title: string
  category: string
  description: string
  fullDescription: string[]
  challenge: string
  solution: string
  results: string
  technologies: string[]
  images: string[]
  featured: boolean
}

export default function ProjectsPage() {
  const { pageTitle, pageDescription, categories, projects } = projectsContent
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || "all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="heading-xl text-charcoal">{pageTitle}</h1>
            <p className="text-xl text-charcoal/80 leading-relaxed">
              {pageDescription}
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
                      src={project.images[0] || "/placeholder.svg"}
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
