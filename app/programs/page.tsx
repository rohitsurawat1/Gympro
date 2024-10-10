import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

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
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-2xl text-primary">GymPro</Link>
          <ul className="hidden md:flex space-x-8">
            <li><Link href="/programs" className="text-primary font-semibold">Programs</Link></li>
            <li><Link href="/locations" className="text-gray-600 hover:text-primary">Locations</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-primary">About</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
          </ul>
          <Button asChild>
            <Link href="/free-workout">Free Workout</Link>
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Programs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={program.image}
                alt={program.name}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="font-bold text-xl mb-2">{program.name}</h2>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Button asChild variant="outline">
                  <Link href={`/programs/${program.name.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}>Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
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