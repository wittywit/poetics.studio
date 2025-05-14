import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function JournalPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="mt-12 mb-8">
        <h1 className="text-5xl font-normal">JOURNAL</h1>
        <div className="accent-bar"></div>
      </div>

      <div className="border-t border-gray-200 mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {journalEntries.map((entry, index) => (
          <div key={index} className={`${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
            <div className="relative aspect-[4/3]">
              <Image src={entry.image || "/placeholder.svg"} alt={entry.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="text-xs text-[hsl(var(--accent))] mb-2">{entry.category}</div>
              <h3 className="text-xl font-normal mb-3">{entry.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{entry.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs">{entry.date}</span>
                <Link
                  href={`/journal/${entry.slug}`}
                  className="flex items-center text-sm hover:text-[hsl(var(--accent))]"
                >
                  READ <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const journalEntries = [
  {
    title: "The Silence of White Space",
    slug: "silence-of-white-space",
    category: "Design Philosophy",
    date: "MAY 2, 2023",
    excerpt: "Exploring how emptiness creates meaning in design and everyday life.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Materiality and Texture",
    slug: "materiality-and-texture",
    category: "Material Studies",
    date: "APRIL 15, 2023",
    excerpt: "How subtle variations in surface create depth in minimal objects.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Light as Material",
    slug: "light-as-material",
    category: "Observations",
    date: "MARCH 28, 2023",
    excerpt: "Investigating how light transforms ordinary objects into extraordinary experiences.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "The Poetry of Everyday Objects",
    slug: "poetry-of-everyday-objects",
    category: "Design Philosophy",
    date: "MARCH 10, 2023",
    excerpt: "Finding beauty and meaning in the objects that surround us daily.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Emptiness as Potential",
    slug: "emptiness-as-potential",
    category: "Design Philosophy",
    date: "FEBRUARY 22, 2023",
    excerpt: "How Kenya Hara's concept of emptiness creates space for imagination.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "The Rhythm of Repetition",
    slug: "rhythm-of-repetition",
    category: "Observations",
    date: "FEBRUARY 5, 2023",
    excerpt: "Exploring patterns and repetition in natural and designed environments.",
    image: "/placeholder.svg?height=600&width=800",
  },
]
