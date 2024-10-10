import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav  className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-2xl text-primary">GymPro</Link>
          <ul className="hidden md:flex space-x-8">
            <li><Link href="/programs" className="text-gray-600 hover:text-primary">Programs</Link></li>
            <li><Link href="/locations" className="text-gray-600 hover:text-primary">Locations</Link></li>
            <li><Link href="/about" className="text-primary font-semibold">About</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
          </ul>
          <Button asChild>
            <Link href="/free-workout">Free Workout</Link>
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">About GymPro</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="GymPro Facility"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">
              At GymPro, our mission is to empower individuals to transform their lives through fitness. We believe that everyone has the potential to achieve their health and wellness goals, and we're here to provide the support, guidance, and resources needed to make those goals a reality.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="mb-4">
              Founded in 2010, GymPro started as a small local gym with a passion for helping people get fit. Over the years, we've grown into a network of state-of-the-art facilities across the country, but our commitment to personalized care and community support remains at the heart of everything we do.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Excellence in service and equipment</li>
              <li>Inclusivity and respect for all members</li>
              <li>Continuous innovation in fitness programs</li>
              <li>Commitment to member success and well-being</li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">GymPro</h3>
              <p>Transform your body, transform your life.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/programs" className="hover:text-primary">Programs</Link></li>
                <li><Link href="/locations" className="hover:text-primary">Locations</Link></li>
                <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary">Facebook</a></li>
                <li><a href="#" className="hover:text-primary">Instagram</a></li>
                <li><a href="#" className="hover:text-primary">Twitter</a></li>
                <li><a href="#" className="hover:text-primary">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="mb-4">Subscribe to our newsletter for tips and special offers.</p>
              <form className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 w-full text-gray-900 rounded-l-md focus:outline-none" />
                <Button type="submit" className="rounded-l-none">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 GymPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}