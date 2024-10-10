'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-2xl text-primary">GymPro</Link>
          <ul className="hidden md:flex space-x-8">
            <li><Link href="/programs" className="text-gray-600 hover:text-primary">Programs</Link></li>
            <li><Link href="/locations" className="text-gray-600 hover:text-primary">Locations</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-primary">About</Link></li>
            <li><Link href="/contact" className="text-primary font-semibold">Contact</Link></li>
          </ul>
          <Button asChild>
            <Link href="/free-workout">Free Workout</Link>
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4">
              Have questions about our programs or want to schedule a tour? Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md"
                ></textarea>
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="GymPro Facility"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold">Visit Us</h3>
              <p>123 Fitness Street<br />Healthyville, EX 12345</p>
              <h3 className="text-xl font-semibold">Call Us</h3>
              <p>(555) 123-4567</p>
              <h3 className="text-xl font-semibold">Email Us</h3>
              <p>info@gympro.com</p>
            </div>
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