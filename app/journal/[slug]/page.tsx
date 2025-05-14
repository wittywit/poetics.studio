import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// This would typically come from a database or CMS
const journalEntries = {
  "silence-of-white-space": {
    title: "The Silence of White Space",
    date: "MAY 2, 2023",
    author: "Thomas Chen",
    category: "Design Philosophy",
    image: "/placeholder.svg?height=800&width=1200",
    content: [
      "In the philosophy of Kenya Hara, white is not merely an absence of color, but a space of potential. It is the emptiness that invites imagination, the silence that allows for contemplation. This concept of WHITE has been central to our studio's approach to design and our understanding of the poetics found in ordinary objects and experiences.",
      "White space—whether in design, architecture, or daily life—creates room for meaning to emerge. It is the pause between notes in music, the margin around text, the empty field of snow waiting for footprints. These spaces are not vacant but pregnant with possibility.",
      "In our recent material studies, we've been exploring how minimal interventions can activate white space. A single fold in paper creates a line of shadow. A subtle texture variation in a ceramic surface catches light differently throughout the day. These small gestures don't fill the space but rather highlight its presence and potential.",
      "The Japanese concept of 'ma' (間) refers to the meaningful space between elements—the interval which gives shape to the whole. This idea resonates deeply with Hara's philosophy and our own practice. We find that by embracing emptiness, we can create more meaningful and resonant experiences.",
      "As we continue our exploration of white space, we invite you to consider the empty spaces in your own environment. What potential do they hold? How might they be activated not by filling them, but by acknowledging their presence and power?",
    ],
  },
  "materiality-and-texture": {
    title: "Materiality and Texture",
    date: "APRIL 15, 2023",
    author: "Elena Moreno",
    category: "Material Studies",
    image: "/placeholder.svg?height=800&width=1200",
    content: [
      "The surface of an object is where it meets the world—where light reflects, where touch registers, where time leaves its mark. In our studio's exploration of materiality, we've been focusing on how subtle variations in texture can create depth and meaning in minimal objects.",
      "A perfectly smooth white surface appears different from a slightly textured one, even when both are the same color. The textured surface catches light differently, creating micro-shadows that give dimension and life to the object. This interplay between material and light is a fundamental aspect of how we experience the physical world.",
      "In our recent ceramic studies, we've been exploring how different clay bodies and firing techniques create varied textures that transform under changing light conditions. A matte white porcelain piece might appear flat in diffused light but reveal subtle undulations when lit from an angle.",
      "Similarly, our paper experiments demonstrate how the same white sheet can express completely different qualities depending on whether it's machine-made with uniform texture or handmade with irregular fibers. The handmade paper contains a record of its making—the movement of water, the settling of fibers—that creates a rich surface landscape.",
      "These material explorations remind us that simplicity is not the absence of complexity but rather its distillation. A seemingly minimal white object can contain worlds of sensory information when we attend to its material qualities with care and curiosity.",
    ],
  },
  // Add more entries as needed
}

export default function JournalEntryPage({ params }: { params: { slug: string } }) {
  const entry = journalEntries[params.slug as keyof typeof journalEntries]

  if (!entry) {
    return <div>Entry not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
      <Link href="/journal" className="inline-flex items-center gap-2 mb-8 hover:underline">
        <ArrowLeft size={16} /> Back to Journal
      </Link>

      <article>
        <div className="mb-8">
          <div className="text-xs text-[hsl(var(--accent))] mb-2">{entry.category}</div>
          <h1 className="text-4xl md:text-5xl font-normal mb-4">{entry.title}</h1>
          <div className="accent-bar"></div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">{entry.date}</p>
            <p className="text-sm text-gray-600">By {entry.author}</p>
          </div>
        </div>

        <div className="relative aspect-[16/9] mb-8">
          <Image src={entry.image || "/placeholder.svg"} alt={entry.title} fill className="object-cover" />
        </div>

        <div className="prose prose-lg max-w-none">
          {entry.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  )
}
