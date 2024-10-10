
import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="font-bold text-2xl text-primary">
            GymPro
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/programs" className="text-gray-600 hover:text-primary transition-colors">
              Programs
            </Link>
            <Link href="/locations" className="text-gray-600 hover:text-primary transition-colors">
              Locations
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/free-workout">Free Workout</Link>
            </Button>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 bg-white">
            <Link href="/programs" className="py-2 text-gray-600 hover:text-primary transition-colors">
              Programs
            </Link>
            <Link href="/locations" className="py-2 text-gray-600 hover:text-primary transition-colors">
              Locations
            </Link>
            <Link href="/about" className="py-2 text-gray-600 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="py-2 text-gray-600 hover:text-primary transition-colors">
              Contact
            </Link>
            <Button asChild className="mt-4">
              <Link href="/free-workout">Free Workout</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}