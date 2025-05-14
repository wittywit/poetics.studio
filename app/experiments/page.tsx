import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ExperimentsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="mt-12 mb-8">
        <h1 className="text-5xl font-normal">CASE STUDIES</h1>
        <div className="accent-bar"></div>
      </div>

      <div className="border-t border-gray-200 mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {experiments.map((experiment, index) => (
          <div key={index} className={`${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
            <div className="relative aspect-video">
              <Image
                src={experiment.image || "/placeholder.svg"}
                alt={experiment.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-xs text-[hsl(var(--accent))] mb-2">CASE STUDY</div>
              <h3 className="text-xl font-normal mb-3">{experiment.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{experiment.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs">{experiment.date}</span>
                <Link
                  href={`/experiments/${experiment.slug}`}
                  className="flex items-center text-sm hover:text-[hsl(var(--accent))]"
                >
                  VIEW CASE STUDY <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const experiments = [
  {
    title: "Paper Folding Study No. 12",
    slug: "paper-folding-12",
    date: "APRIL 2023",
    description: "Exploring the relationship between light, shadow, and folded paper structures.",
    image: "/placeholder.svg?height=600&width=1000",
  },
  {
    title: "Material Transparency Series",
    slug: "material-transparency",
    date: "MARCH 2023",
    description: "Investigating how translucent materials transform and transmit light.",
    image: "/placeholder.svg?height=600&width=1000",
  },
  {
    title: "Textile Draping Experiment",
    slug: "textile-draping",
    date: "FEBRUARY 2023",
    description: "Studies in how different textiles respond to gravity and movement.",
    image: "/placeholder.svg?height=600&width=1000",
  },
  {
    title: "Sound Mapping of Spaces",
    slug: "sound-mapping",
    date: "JANUARY 2023",
    description: "Recording and visualizing the acoustic properties of everyday environments.",
    image: "/placeholder.svg?height=600&width=1000",
  },
]
