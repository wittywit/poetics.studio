import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ObservationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="mt-12 mb-8">
        <h1 className="text-5xl font-normal">OBSERVATIONS</h1>
        <div className="accent-bar"></div>
      </div>

      <div className="border-t border-gray-200 mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {observations.map((observation, index) => (
          <div key={index} className="">
            <div className="relative aspect-square">
              <Image
                src={observation.image || "/placeholder.svg"}
                alt={observation.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-xs text-[hsl(var(--accent))] mb-2">{observation.date}</div>
              <h3 className="text-xl font-normal mb-3">{observation.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{observation.description}</p>
              <Link
                href={`/observations/${observation.slug}`}
                className="flex items-center text-sm hover:text-[hsl(var(--accent))]"
              >
                VIEW OBSERVATION <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const observations = [
  {
    title: "Morning Light on White Wall",
    slug: "morning-light",
    date: "MAY 5, 2023",
    description:
      "The subtle gradient of early morning light across a white wall, creating a canvas of temporal change.",
    image: "/placeholder.svg?height=800&width=800",
  },
  {
    title: "Water Surface Patterns",
    slug: "water-surface",
    date: "APRIL 28, 2023",
    description: "Ripples and reflections on still water, documenting the ephemeral geometry of disturbed surfaces.",
    image: "/placeholder.svg?height=800&width=800",
  },
  {
    title: "Shadow Compositions",
    slug: "shadow-compositions",
    date: "APRIL 15, 2023",
    description: "The interplay of objects and light creating temporary drawings across interior spaces.",
    image: "/placeholder.svg?height=800&width=800",
  },
  {
    title: "Weathered Wood Textures",
    slug: "weathered-wood",
    date: "APRIL 2, 2023",
    description: "The subtle patina and grain patterns that emerge as wood ages and responds to its environment.",
    image: "/placeholder.svg?height=800&width=800",
  },
  {
    title: "Urban Negative Spaces",
    slug: "urban-negative-spaces",
    date: "MARCH 20, 2023",
    description: "The overlooked spaces between buildings that frame sky and create unexpected compositions.",
    image: "/placeholder.svg?height=800&width=800",
  },
  {
    title: "Condensation Patterns",
    slug: "condensation-patterns",
    date: "MARCH 8, 2023",
    description:
      "The temporary drawings created by water droplets on glass surfaces, mapping temperature differentials.",
    image: "/placeholder.svg?height=800&width=800",
  },
]
