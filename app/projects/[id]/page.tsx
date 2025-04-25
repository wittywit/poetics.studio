"use client"

import { useEffect, useState } from "react"
import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

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

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params.id as string
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching project data
    const fetchProject = () => {
      setLoading(true)

      // Mock project data
      const projectsData: Project[] = [
        {
          id: "harmony-controller",
          title: "Harmony Controller",
          category: "hardware",
          description: "A custom game controller that combines traditional woodworking with modern haptic technology.",
          fullDescription: [
            "The Harmony Controller is a unique gaming peripheral that brings the warmth of traditional craftsmanship to the digital gaming experience.",
            "Each controller is handcrafted from sustainable hardwoods, with custom-designed haptic feedback systems that respond differently based on the type of wood used.",
            "The result is a controller that not only looks beautiful but provides a tactile connection to virtual worlds that plastic controllers simply cannot match.",
          ],
          challenge:
            "Traditional gaming controllers often feel cold and disconnected from the gaming experience, especially for games that aim to create warm, cozy atmospheres. We wanted to create a controller that would enhance immersion through natural materials and thoughtful haptic design.",
          solution:
            "We combined traditional woodworking techniques with custom-designed haptic feedback systems. Each controller is handcrafted from sustainable hardwoods, with electronics that are carefully integrated to preserve the natural feel of the wood while providing responsive gameplay.",
          results:
            "The Harmony Controller has been adopted by several indie game studios specializing in cozy games, and has received overwhelmingly positive feedback from players who report a deeper sense of connection to their gaming experiences.",
          technologies: [
            "Custom PCB Design",
            "Haptic Feedback Systems",
            "Traditional Woodworking",
            "Ergonomic Design",
            "Wireless Technology",
          ],
          images: [
            "/placeholder.svg?height=600&width=800&text=Harmony Controller 1",
            "/placeholder.svg?height=600&width=800&text=Harmony Controller 2",
            "/placeholder.svg?height=600&width=800&text=Harmony Controller 3",
          ],
          featured: true,
        },
        {
          id: "cozy-cabin",
          title: "Cozy Cabin",
          category: "games",
          description: "A relaxing simulation game about restoring and decorating a cabin in the woods.",
          fullDescription: [
            "Cozy Cabin is a peaceful simulation game that invites players to restore and personalize an old cabin in the woods.",
            "With no time pressure or fail states, players can focus on creating their ideal retreat through woodworking, decorating, and gardening activities.",
            "The game features realistic material simulations, day/night cycles, and changing seasons that affect gameplay and atmosphere.",
          ],
          challenge:
            "Many simulation games introduce stress through time limits, resource management, and competition. We wanted to create a truly relaxing experience that still offered depth and satisfaction.",
          solution:
            "We developed a game focused entirely on creativity and personalization, with realistic material simulations that make virtual woodworking and decorating feel tactile and satisfying. The game's sound design and visuals were carefully crafted to induce a state of calm.",
          results:
            "Cozy Cabin has built a dedicated community of players who use the game as a form of digital self-care. Many players report using the game to unwind after stressful days or as part of their bedtime routine.",
          technologies: [
            "Unity Engine",
            "Procedural Generation",
            "Material Physics Simulation",
            "Dynamic Weather System",
            "Ambient Sound Design",
          ],
          images: [
            "/placeholder.svg?height=600&width=800&text=Cozy Cabin 1",
            "/placeholder.svg?height=600&width=800&text=Cozy Cabin 2",
            "/placeholder.svg?height=600&width=800&text=Cozy Cabin 3",
          ],
          featured: true,
        },
        {
          id: "heritage-tech",
          title: "Heritage Tech",
          category: "consultancy",
          description:
            "Helping a museum bring their historical artifacts into the digital age with interactive exhibits.",
          fullDescription: [
            "Heritage Tech was a consultancy project for a major historical museum looking to modernize their visitor experience.",
            "We developed interactive exhibits that allowed visitors to engage with historical artifacts through touch, sound, and augmented reality, while respecting the historical significance of each piece.",
            "The project included custom hardware interfaces that resembled traditional materials but incorporated modern technology.",
          ],
          challenge:
            "The museum wanted to attract younger visitors and increase engagement with their collection, but was concerned about maintaining the dignity and historical context of their artifacts.",
          solution:
            "We created a series of interactive exhibits that used technology to enhance rather than replace the physical artifacts. This included projection mapping, subtle touch-sensitive displays integrated into traditional materials, and an AR app that revealed historical context when pointed at exhibits.",
          results:
            "The museum saw a 45% increase in visitor engagement time and a 30% increase in visitors under 30. The exhibits have been praised for their respectful integration of technology with historical artifacts.",
          technologies: [
            "Projection Mapping",
            "Capacitive Touch Interfaces",
            "Augmented Reality",
            "Custom Hardware Design",
            "Content Management System",
          ],
          images: [
            "/placeholder.svg?height=600&width=800&text=Heritage Tech 1",
            "/placeholder.svg?height=600&width=800&text=Heritage Tech 2",
            "/placeholder.svg?height=600&width=800&text=Heritage Tech 3",
          ],
          featured: true,
        },
      ]

      const foundProject = projectsData.find((p) => p.id === projectId)

      if (foundProject) {
        setProject(foundProject)
      }

      setLoading(false)
    }

    fetchProject()
  }, [projectId])

  if (loading) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  if (!project) {
    return notFound()
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container-custom">
          <Link
            href="/projects"
            className="inline-flex items-center text-coral-dark hover:underline mb-8 hover-trigger"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Projects
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 mb-8">
              <div className="text-coral-dark font-medium">
                {project.category === "hardware"
                  ? "Custom Hardware"
                  : project.category === "games"
                    ? "Cozy Games"
                    : "Design Consultancy"}
              </div>
              <h1 className="heading-xl text-charcoal">{project.title}</h1>
              <p className="text-xl text-charcoal/80 leading-relaxed">{project.description}</p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg mb-12">
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-[#F8F0ED]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Overview */}
              <div>
                <h2 className="heading-lg mb-6">Overview</h2>
                <div className="space-y-4">
                  {project.fullDescription.map((paragraph, index) => (
                    <p key={index} className="text-lg text-charcoal/80 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-cream rounded-2xl p-8 shadow-sm">
                  <h3 className="heading-md mb-4">The Challenge</h3>
                  <p className="text-charcoal/80 leading-relaxed">{project.challenge}</p>
                </div>

                <div className="bg-cream rounded-2xl p-8 shadow-sm">
                  <h3 className="heading-md mb-4">Our Solution</h3>
                  <p className="text-charcoal/80 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="heading-md mb-4">Results</h3>
                <p className="text-lg text-charcoal/80 leading-relaxed">{project.results}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Project Gallery</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-[#F8F0ED]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-center mb-12">Technologies Used</h2>

            <div className="flex flex-wrap justify-center gap-4">
              {project.technologies.map((tech, index) => (
                <div key={index} className="bg-cream px-6 py-3 rounded-full shadow-sm text-charcoal">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next/Prev Navigation */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <Link
              href="/projects"
              className="border-2 border-[#FA8072] text-[#FA8072] hover:bg-[#FA8072]/10 px-6 py-3 rounded-full transition-all duration-300 hover-trigger mb-4 sm:mb-0 inline-flex items-center"
            >
              <ArrowLeft size={16} className="mr-2" /> All Projects
            </Link>

            <Link
              href="/contact"
              className="bg-[#FA8072] hover:bg-[#F06A5C] text-white px-6 py-3 rounded-full transition-all duration-300 hover-trigger inline-flex items-center"
            >
              Start a Similar Project <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
