"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, Heart, Users, Instagram, Facebook, Twitter } from "lucide-react"
import { useState, useEffect } from "react"

const heroImages = [
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1623874514711-0f321325f318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
]

const featured_programs = [
  {
    name: "HIIT Bootcamp",
    description: "High-intensity interval training to maximize calorie burn and improve endurance.",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
  },
  {
    name: "Powerlifting",
    description: "Develop raw strength and power through compound lifts like squats, deadlifts, and bench presses.",
    image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Pilates",
    description: "Low-impact exercises to improve flexibility, build strength, and enhance mind-body connection.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  }
]

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="sticky top-0 z-50 w-full bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.svg" // Update the path to your custom logo
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
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition duration-300">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition duration-300">Contact</Link>
          </nav>
          <Button asChild className="hidden md:inline-block">
            <Link href="/free-trial">Start Free Trial</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative h-screen">
          {heroImages.map((img, index) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`GymPro fitness ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="brightness-50"
              />
            </div>
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl mx-auto p-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Unleash Your Potential</h1>
              <p className="text-xl md:text-2xl mb-8">Join GymPro today and discover the power within you. Our expert trainers and cutting-edge facilities will help you achieve your fitness goals faster than ever before.</p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300">
                <Link href="/join-now">Join Now</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Trending Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featured_programs.map((program, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <div className="relative h-64">
                    <Image
                      src={program.image}
                      alt={program.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{program.name}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <Button asChild variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                      <Link href={`/programs/${program.name.toLowerCase().replace(' ', '-')}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-600 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Why GymPro?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center justify-center h-20 w-20 bg-blue-100 rounded-full mx-auto mb-6">
                  <Dumbbell className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">State-of-the-Art Equipment</h3>
                <p className="text-gray-600 text-center">Access the latest and most advanced fitness equipment to take your workouts to the next level.</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center justify-center h-20 w-20 bg-blue-100 rounded-full mx-auto mb-6">
                  <Heart className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Personalized Training</h3>
                <p className="text-gray-600 text-center">Our certified trainers will create a customized workout plan based on your specific goals and needs.</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center justify-center h-20 w-20 bg-blue-100 rounded-full mx-auto mb-6">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Supportive Community</h3>
                <p className="text-gray-600 text-center">Join a welcoming fitness community that will encourage and motivate you every step of the way.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1521117177129-ca6b2e68cb26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="John Smith"
                    width={80}
                    height={80}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">John Smith</h4>
                    <p className="text-gray-600">Age 35</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"I've been a member of GymPro for 6 months now, and I've already lost 30 pounds and gained muscle mass. The trainers are knowledgeable and supportive, and the community keeps me motivated. I feel stronger and healthier than ever before!"</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Sarah Johnson"
                    width={80}
                    height={80}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">Sarah Johnson</h4>
                    <p className="text-gray-600">Age 28</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"As a busy professional, I struggled to find time for fitness. But since joining GymPro, I've been able to easily incorporate workouts into my schedule. The variety of classes and flexible hours have made it possible for me to prioritize my health without sacrificing my career. I feel more energized and focused than ever!"</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Ready to Transform Your Life?</h2>
            <p className="text-xl mb-8 text-gray-300">Take the first step towards a healthier, stronger you. Sign up for GymPro today and get started on your fitness journey!</p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300">
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">GymPro</h3>
              <p className="text-gray-400">Elevate your fitness, transform your life.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/programs" className="text-gray-400 hover:text-white transition duration-300">Programs</Link></li>
                <li><Link href="/locations" className="text-gray-400 hover:text-white transition duration-300">Locations</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="https://www.instagram.com" className="text-gray-400 hover:text-white transition duration-300">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="https://www.facebook.com" className="text-gray-400 hover:text-white transition duration-300">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="https://www.twitter.com" className="text-gray-400 hover:text-white transition duration-300">
                  <Twitter className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}