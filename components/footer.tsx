import Link from "next/link"
<<<<<<< HEAD
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#F8F0ED] py-16 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-coral-dark mb-4">Studio Poetics</h3>
            <p className="text-charcoal/80 mb-6 max-w-xs">
              Merging tradition with technology, creating cozy games and custom hardware.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                className="hover-trigger text-charcoal hover:text-coral-dark transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://twitter.com"
                className="hover-trigger text-charcoal hover:text-coral-dark transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com"
                className="hover-trigger text-charcoal hover:text-coral-dark transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:hello@studiopoetics.com"
                className="hover-trigger text-charcoal hover:text-coral-dark transition-colors"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="hover-trigger text-charcoal/80 hover:text-coral-dark transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover-trigger text-charcoal/80 hover:text-coral-dark transition-colors">
                About Us
              </Link>
              <Link href="/projects" className="hover-trigger text-charcoal/80 hover:text-coral-dark transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="hover-trigger text-charcoal/80 hover:text-coral-dark transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Contact</h4>
            <address className="not-italic text-charcoal/80 space-y-2">
              <p>123 Creativity Lane</p>
              <p>Design District, CA 90210</p>
              <p className="mt-4">
                <a
                  href="mailto:hello@studiopoetics.com"
                  className="hover-trigger hover:text-coral-dark transition-colors"
                >
                  hello@studiopoetics.com
                </a>
              </p>
              <p>
                <a href="tel:+11234567890" className="hover-trigger hover:text-coral-dark transition-colors">
                  +1 (123) 456-7890
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-charcoal/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-charcoal/60">
            &copy; {new Date().getFullYear()} Studio Poetics. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm hover-trigger text-charcoal/60 hover:text-coral-dark transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm hover-trigger text-charcoal/60 hover:text-coral-dark transition-colors"
            >
              Terms of Service
            </Link>
          </div>
=======

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-6 rounded-t-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-normal mb-4">VISIT</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="hover:underline">
                  SHOP
                </Link>
              </li>
              <li>
                <Link href="/tickets" className="hover:underline">
                  BUY TICKETS
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:underline">
                  MEMBERSHIP
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-normal mb-4">Exhibitions and Events</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/exhibitions" className="hover:underline">
                  Exhibitions
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="hover:underline">
                  Calendar
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:underline">
                  Public program
                </Link>
              </li>
              <li>
                <Link href="/digital" className="hover:underline">
                  Digital Content
                </Link>
              </li>
              <li>
                <Link href="/screenings" className="hover:underline">
                  Screenings
                </Link>
              </li>
              <li>
                <Link href="/live" className="hover:underline">
                  Live Events
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:underline">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/lectures" className="hover:underline">
                  Lecture series
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:underline">
                  Exhibition programs
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:underline">
                  External projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-normal mb-4">Learn</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="hover:underline">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/academic" className="hover:underline">
                  Academic Program
                </Link>
              </li>
              <li>
                <Link href="/professional" className="hover:underline">
                  Professional Program
                </Link>
              </li>
              <li>
                <Link href="/conferences" className="hover:underline">
                  Conferences
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-normal mb-4">Research and Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/library" className="hover:underline">
                  Library
                </Link>
              </li>
              <li>
                <Link href="/archive" className="hover:underline">
                  Archive Collection
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:underline">
                  The Studio Poetics Journal
                </Link>
              </li>
              <li>
                <Link href="/field-studies" className="hover:underline">
                  Field Studies
                </Link>
              </li>
              <li>
                <Link href="/grants" className="hover:underline">
                  Grants
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="hover:underline">
                  Studio Workshops
                </Link>
              </li>
              <li>
                <Link href="/editions" className="hover:underline">
                  Editions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-normal mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/history" className="hover:underline">
                  History and program
                </Link>
              </li>
              <li>
                <Link href="/mission" className="hover:underline">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/chronicle" className="hover:underline">
                  Studio Chronicle
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:underline">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:underline">
                  News
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:underline">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:underline">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-lg font-normal mb-4">We are on socials</h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://instagram.com"
                className="border border-white rounded-full px-3 py-1 text-sm hover:bg-white hover:text-black transition-colors"
              >
                INSTAGRAM
              </Link>
              <Link
                href="https://facebook.com"
                className="border border-white rounded-full px-3 py-1 text-sm hover:bg-white hover:text-black transition-colors"
              >
                FACEBOOK
              </Link>
              <Link
                href="https://twitter.com"
                className="border border-white rounded-full px-3 py-1 text-sm hover:bg-white hover:text-black transition-colors"
              >
                TWITTER
              </Link>
              <Link
                href="https://youtube.com"
                className="border border-white rounded-full px-3 py-1 text-sm hover:bg-white hover:text-black transition-colors"
              >
                YOUTUBE
              </Link>
              <Link
                href="https://telegram.org"
                className="border border-white rounded-full px-3 py-1 text-sm hover:bg-white hover:text-black transition-colors"
              >
                TELEGRAM
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-800">
          <div>
            <h3 className="text-lg font-normal mb-4">Contact Us</h3>
            <p className="mb-2">Studio No. 42, Design District, Bangalore, India</p>
            <p className="mb-2">hello@studiopoetics.com</p>
          </div>

          <div>
            <h3 className="text-lg font-normal mb-4">Hours</h3>
            <p className="mb-2">Open daily, 11:00–22:00</p>
            <p className="mb-2">Ticket office closes 30 minutes before Studio closing time</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400 flex flex-wrap justify-between gap-4">
          <div className="flex gap-4">
            <Link href="/policies" className="hover:underline">
              Visitor Policies
            </Link>
            <Link href="/license" className="hover:underline">
              License Agreement
            </Link>
          </div>
          <div>© Studio Poetics {new Date().getFullYear()}</div>
          <div>Designed by Studio Poetics</div>
>>>>>>> c74b1e7 (Initial commit)
        </div>
      </div>
    </footer>
  )
}
