"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export default function Locations() {
  const locations = [
    {
      name: 'Downtown Fitness Center',
      address: '123 Main St, Cityville, State 12345',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      name: 'Westside Gym',
      address: '456 Oak Ave, Townsburg, State 67890',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      name: 'Northside Health Club',
      address: '789 Pine Rd, Villageton, State 13579',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ]

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
              className="text-blue-600"
            />
            <span className="text-2xl font-bold text-gray-800">GymPro</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/programs" className="text-gray-600 hover:text-blue-600 font-medium transition duration-300">Programs</Link>
            <Link href="/locations" className="text-blue-600 font-medium">Locations</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition duration-300">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition duration-300">Contact</Link>
          </nav>
          <Button asChild className="hidden md:inline-block">
            <Link href="/free-workout">Free Workout</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
      <section className="py-16 bg-gray-800 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Our Locations</h1>
            <p className="text-xl text-center max-w-2xl mx-auto">
              Find a GymPro location near you and start your fitness journey today.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location) => (
                <Card key={location.name} className="overflow-hidden shadow-lg">
                  <div className="relative h-64">
                    <Image
                      src={location.image}
                      alt={location.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900">{location.name}</h2>
                    <p className="text-gray-600 mb-4 flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      {location.address}
                    </p>
                    <Button asChild className="w-full">
                      <Link href={`/locations/${location.name.toLowerCase().replace(' ', '-')}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Can't Find a Location Near You?</h2>
            <p className="text-xl mb-8">We're constantly expanding! Let us know where you'd like to see a GymPro.</p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white transition-colors text-lg px-8 py-4">
              <Link href="/contact">Contact Us</Link>
            </Button>
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