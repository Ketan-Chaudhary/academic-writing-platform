import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12 bg-white rounded-full p-1">
                <Image
                  src="/images/logo.png"
                  alt="Akshat Thesis and Research Services Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Akshat</h3>
                <p className="text-sm">Thesis & Research Services</p>
              </div>
            </div>
            <p className="mb-4">Professional academic writing services for students, researchers, and professionals.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Thesis Writing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Dissertation Help
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Research Paper Writing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Publication Assistance
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Editing & Proofreading
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@akshatthesis.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <address className="not-italic">
                  123 Academic Avenue
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Akshat Thesis & Research Services. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm hover:text-accent transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
