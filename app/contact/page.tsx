"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.svg"
              alt="GymPro Logo"
              width={100}
              height={40}
              className="text-gray-800"
            />
            <span className="text-2xl font-bold text-gray-800">GymPro</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/programs" className="text-gray-600 hover:text-gray-800 font-medium transition duration-300">Programs</Link>
            <Link href="/locations" className="text-gray-600 hover:text-gray-800 font-medium transition duration-300">Locations</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800 font-medium transition duration-300">About</Link>
            <Link href="/contact" className="text-gray-800 font-medium">Contact</Link>
          </nav>
          <Button asChild className="hidden md:inline-block">
            <Link href="/free-workout">Free Workout</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-16 bg-gray-800 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Contact Us</h1>
            <p className="text-xl text-center max-w-2xl mx-auto">
              Have a question or need assistance? We're here to help. Reach out to us using the contact form below or through any of the provided methods.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input type="text" id="name" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                    <textarea id="message" rows={5} className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" required></textarea>
                  </div>
                  <Button type="submit" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Send Message
                  </Button>
                </form>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Other Ways to Reach Us</h2>
                <div className="space-y-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-white">
                        <Phone className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">Phone</p>
                      <p className="mt-1 text-base text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-white">
                        <Mail className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">Email</p>
                      <p className="mt-1 text-base text-gray-500">info@gympro.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-white">
                        <MapPin className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">Address</p>
                      <p className="mt-1 text-base text-gray-500">123 Fitness St, Cityville, State 12345</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Connect with Us on Social Media</h2>
            <div className="flex justify-center space-x-8">
              <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors">
                <Instagram className="h-8 w-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors">
                <Facebook className="h-8 w-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors">
                <Twitter className="h-8 w-8" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">GymPro</h3>
              <p className="text-gray-400">Transform your body, transform your life.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/programs" className="text-gray-400 hover:text-white transition-colors">Programs</Link></li>
                <li><Link href="/locations" className="text-gray-400 hover:text-white transition-colors">Locations</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-6 w-6" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-6 w-6" /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe for tips and special offers.</p>
              <form className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 w-full text-gray-900 rounded-l-md focus:outline-none" />
                <Button type="submit" className="rounded-l-none">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 GymPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}