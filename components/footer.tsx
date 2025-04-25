import Link from "next/link"
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
        </div>
      </div>
    </footer>
  )
}
