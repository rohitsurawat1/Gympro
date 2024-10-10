'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FaDumbbell, FaHeartbeat, FaUsers } from 'react-icons/fa'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48', title: 'Welcome to GymPro', subtitle: 'Your Journey to Fitness Starts Here' },
    { image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155', title: 'State-of-the-Art Equipment', subtitle: 'Train with the Best Gear' },
    { image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f', title: 'Expert Trainers', subtitle: 'Get Personalized Guidance' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <motion.h1
                  className="text-5xl font-bold mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  className="text-xl mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button asChild size="lg">
                    <Link href="/free-workout">Start Your Free Trial</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose GymPro?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaDumbbell className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Top-notch Equipment</h3>
              <p>Train with state-of-the-art fitness gear designed to maximize your workout efficiency.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaHeartbeat className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Programs</h3>
              <p>Get custom workout plans tailored to your fitness goals and lifestyle.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaUsers className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Supportive Community</h3>
              <p>Join a motivating community of fitness enthusiasts to keep you inspired and accountable.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
          <p className="text-xl mb-8">Join GymPro today and start your journey to a healthier, stronger you!</p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/signup">Sign Up Now</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'John D.', text: 'GymPro has completely changed my life. I\'ve never felt stronger or more confident!' },
              { name: 'Sarah M.', text: 'The trainers at GymPro are amazing. They really know how to push you to your limits.' },
              { name: 'Mike R.', text: 'I love the community at GymPro. Everyone is so supportive and motivating.' }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p className="mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">Subscribe to our newsletter for fitness tips, exclusive offers, and more!</p>
          <form className="max-w-md mx-auto flex gap-4">
            <Input type="email" placeholder="Enter your email" className="flex-grow" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  )
}