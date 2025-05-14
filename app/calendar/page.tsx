"use client"

import Image from "next/image"
import { ArrowUp, ArrowDown } from "lucide-react"
import { useState } from "react"

// Define calendar data
const calendarData = [
  {
    month: "MAY",
    day: "13",
    dayOfWeek: "SATURDAY",
    events: [
      {
        image: "/placeholder.svg?height=300&width=500",
        category: "Workshops",
        title: "Material Exploration Workshop: Paper and Light",
        timeStart: "12:00",
        timeEnd: "15:00",
        location: "STUDIO SPACE",
        registration: "FREE, REGISTRATION REQUIRED",
      },
      {
        image: "/placeholder.svg?height=300&width=500",
        category: "Lectures & Talks",
        title: "Public talk by Kenya Hara: The Aesthetics of Emptiness",
        timeStart: "18:30",
        timeEnd: "21:00",
        location: "GALLERY SPACE",
        registration: "FREE, REGISTRATION REQUIRED",
      },
    ],
  },
  {
    month: "MAY",
    day: "14",
    dayOfWeek: "SUNDAY",
    events: [
      {
        image: "/placeholder.svg?height=300&width=500",
        category: "Lectures & Talks",
        title: "Discussion: Finding Beauty in Everyday Objects",
        timeStart: "16:00",
        timeEnd: "18:00",
        location: "STUDIO GALLERY",
        registration: "FREE, REGISTRATION REQUIRED",
      },
      {
        image: "/placeholder.svg?height=300&width=500",
        category: "Film Screenings",
        title: "Film: In Praise of Shadows",
        timeStart: "17:30",
        timeEnd: "20:00",
        location: "STUDIO AUDITORIUM",
        registration: "₹1,200",
      },
      {
        image: "/placeholder.svg?height=300&width=500",
        category: "Concerts & Performances",
        title: "Sound Performance: Silence and Space",
        timeStart: "19:00",
        timeEnd: "21:00",
        location: "GALLERY SPACE",
        registration: "FREE, REGISTRATION REQUIRED",
      },
    ],
  },
  {
    month: "MAY",
    day: "15",
    dayOfWeek: "MONDAY",
    events: [
      {
        image: "/placeholder.svg?height=300&width=500",
        category: "Exhibitions",
        title: "Opening: White Space - Material Studies",
        timeStart: "18:00",
        timeEnd: "21:00",
        location: "MAIN GALLERY",
        registration: "FREE, REGISTRATION REQUIRED",
      },
    ],
  },
  {
    month: "MAY",
    day: "16",
    dayOfWeek: "TUESDAY",
    events: [
      {
        image: "/placeholder.svg?height=300&width=500",
        category: "Workshops",
        title: "Paper Folding Techniques Workshop",
        timeStart: "14:00",
        timeEnd: "17:00",
        location: "STUDIO SPACE",
        registration: "FREE, REGISTRATION REQUIRED",
      },
    ],
  },
]

export default function CalendarPage() {
  // State to track which calendar sections are open
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    "13": true,
    "14": true,
  })

  // Toggle calendar section
  const toggleSection = (day: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [day]: !prev[day],
    }))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="mt-12 mb-8">
        <h1 className="text-5xl font-normal">CALENDAR</h1>
      </div>

      <div className="border-t border-gray-200 mb-6"></div>

      {/* Calendar entries */}
      <div className="mb-12">
        {calendarData.map((dateSection) => (
          <div key={dateSection.day} className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <span className="text-xl">{dateSection.month}</span>
                <span className="text-2xl">
                  {dateSection.day}, {dateSection.dayOfWeek}
                </span>
              </div>
              <button
                onClick={() => toggleSection(dateSection.day)}
                className="focus:outline-none transition-transform duration-300"
                aria-label={openSections[dateSection.day] ? "Collapse section" : "Expand section"}
              >
                {openSections[dateSection.day] ? <ArrowUp className="h-6 w-6" /> : <ArrowDown className="h-6 w-6" />}
              </button>
            </div>

            <div
              className={`grid grid-cols-1 md:grid-cols-${Math.min(dateSection.events.length, 3)} gap-4 transition-all duration-500 ease-in-out overflow-hidden ${
                openSections[dateSection.day] ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {dateSection.events.map((event, index) => (
                <div key={index} className="border-t pt-4">
                  <div className="image-container-rounded aspect-video relative mb-4">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  </div>
                  <div className="text-xs text-gray-600 mb-1">{event.category}</div>
                  <h3 className="text-lg font-normal mb-2">{event.title}</h3>
                  <div className="flex justify-between text-xs mt-4">
                    <div>
                      <div>{event.timeStart} —</div>
                      <div>{event.timeEnd}</div>
                    </div>
                    <div className="text-right">
                      <div>{event.location}</div>
                      <div>{event.registration}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`border-t transition-all duration-500 ${!openSections[dateSection.day] ? "mt-0" : "mt-8"}`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}
