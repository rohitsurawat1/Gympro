"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, Instagram, Facebook, Twitter } from "lucide-react"

export default function Programs() {
  const programs = [
    {
      name: 'Strength Training',
      description: 'Build muscle and increase your strength with our comprehensive strength training program.',
      image: 'https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      name: 'Cardio Blast',
      description: 'Improve your cardiovascular health and burn calories with our high-energy cardio program.',
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    {
      name: 'Yoga & Flexibility',
      description: 'Enhance your flexibility, balance, and mental well-being with our yoga and flexibility classes.',
      image: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      name: 'HIIT Workouts',
      description: 'Maximize your calorie burn and improve overall fitness with our High-Intensity Interval Training.',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      name: 'Personal Training',
      description: 'Get personalized attention and achieve your fitness goals faster with our expert personal trainers.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      name: 'Group Classes',
      description: 'Join our energetic group classes for a fun and motivating workout experience with fellow members.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full bg-white shadow-md">
  <div className="container mx-auto flex items-center justify-between py-4 px-6">
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/images/logo.svg" // Make sure this path is correct for your project structure
        alt="GymPro Logo"
        width={100}
        height={40}
        className="text-blue-600"
      />
      <span className="text-2xl font-bold text-gray-800">GymPro</span>
    </Link>
    <nav className="hidden md:flex space-x-8">
      <Link href="/programs" className="text-gray-600 hover:text-grey-600 font-medium transition duration-300">Programs</Link>
      <Link href="/locations" className="text-gray-600 hover:text-grey-600 font-medium transition duration-300">Locations</Link>
      <Link href="/about" className="text-gray-600 hover:text-grey-600 font-medium transition duration-300">About</Link>
      <Link href="/contact" className="text-gray-600 hover:text-grey-600 font-medium transition duration-300">Contact</Link>
    </nav>
    <Button asChild className="hidden md:inline-block">
      <Link href="/free-workout">Free Workout</Link>
    </Button>
  </div>
</header>

      <main className="flex-1">
      <section className="py-16 bg-gray-800 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Our Programs</h1>
            <p className="text-xl text-center max-w-2xl mx-auto">
              Discover a variety of fitness programs designed to help you achieve your health and wellness goals.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program) => (
                <Card key={program.name} className="overflow-hidden shadow-lg">
                  <div className="relative h-64">
                    <Image
                      src={program.image}
                      alt={program.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900">{program.name}</h2>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <Button asChild className="w-full">
                      <Link href={`/programs/${program.name.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Fitness Journey?</h2>
            <p className="text-xl mb-8">Join GymPro today and get your first week free!</p>
            <Button asChild size="lg" className="bg-grey-600 hover:bg-grey-700 text-white transition-colors text-lg px-8 py-4">
              <Link href="/sign-up">Sign Up Now</Link>
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