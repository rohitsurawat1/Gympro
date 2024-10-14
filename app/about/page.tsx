"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, Users, Trophy, Instagram, Facebook, Twitter } from "lucide-react"

export default function About() {
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
            <Link href="/locations" className="text-gray-600 hover:text-blue-600 font-medium transition duration-300">Locations</Link>
            <Link href="/about" className="text-blue-600 font-medium">About</Link>
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
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About GymPro</h1>
            <p className="text-xl text-center max-w-2xl mx-auto">
              Empowering individuals to transform their lives through fitness since 2010.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="GymPro Facility"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  At GymPro, our mission is to empower individuals to transform their lives through fitness. We believe that everyone has the potential to achieve their health and wellness goals, and we're here to provide the support, guidance, and resources needed to make those goals a reality.
                </p>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  Founded in 2010, GymPro started as a small local gym with a passion for helping people get fit. Over the years, we've grown into a network of state-of-the-art facilities across the country, but our commitment to personalized care and community support remains at the heart of everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Dumbbell className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Excellence</h3>
                  <p className="text-gray-600">We strive for excellence in our service, equipment, and programs to ensure the best experience for our members.</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Inclusivity</h3>
                  <p className="text-gray-600">We welcome and respect all members, creating a supportive community for everyone's fitness journey.</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Trophy className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Innovation</h3>
                  <p className="text-gray-600">We continuously innovate our fitness programs and technology to provide cutting-edge solutions for our members.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-xl mb-8">Experience the GymPro difference and start your fitness journey today!</p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 transition-colors text-lg px-8 py-4">
              <Link href="/sign-up">Join GymPro Now</Link>
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