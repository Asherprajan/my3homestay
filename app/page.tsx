"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, MapPin, Menu, X, Leaf, Coffee } from "lucide-react"
import { useState } from "react"
import BookingForm from "@/components/booking-form"
import FeatureCard from "@/components/feature-card"
import RoomCard from "@/components/room-card"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-kerala-ivory">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-kerala-wood/20 bg-kerala-ivory/90 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-kerala-wood flex items-center justify-center">
              <Leaf className="h-6 w-6 text-kerala-dhoti" />
            </div>
            <a href="#" className="text-xl font-semibold tracking-tight text-kerala-wood">
              My3 Heritage
            </a>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-sm font-medium hover:text-kerala-spice transition-colors text-kerala-wood">
              About
            </a>
            <a href="#features" className="text-sm font-medium hover:text-kerala-spice transition-colors text-kerala-wood">
              Features
            </a>
            <a href="#rooms" className="text-sm font-medium hover:text-kerala-spice transition-colors text-kerala-wood">
              Rooms
            </a>
            <a href="#gallery" className="text-sm font-medium hover:text-kerala-spice transition-colors text-kerala-wood">
              Gallery
            </a>
            <a href="#location" className="text-sm font-medium hover:text-kerala-spice transition-colors text-kerala-wood">
              Location
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-kerala-spice transition-colors text-kerala-wood">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <BookingForm />
            <Button variant="ghost" size="icon" className="md:hidden text-kerala-wood" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-kerala-ivory">
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-kerala-wood flex items-center justify-center">
                <Leaf className="h-5 w-5 text-kerala-dhoti" />
              </div>
              <a href="#" className="text-xl font-semibold tracking-tight text-kerala-wood">
                My3 Heritage
              </a>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="text-kerala-wood">
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container flex flex-col gap-6 px-4 py-8">
            <a
              href="#about"
              className="text-lg font-medium hover:text-kerala-spice text-kerala-wood border-b border-kerala-wood/10 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#features"
              className="text-lg font-medium hover:text-kerala-spice text-kerala-wood border-b border-kerala-wood/10 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#rooms"
              className="text-lg font-medium hover:text-kerala-spice text-kerala-wood border-b border-kerala-wood/10 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rooms
            </a>
            <a
              href="#gallery"
              className="text-lg font-medium hover:text-kerala-spice text-kerala-wood border-b border-kerala-wood/10 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </a>
            <a
              href="#location"
              className="text-lg font-medium hover:text-kerala-spice text-kerala-wood border-b border-kerala-wood/10 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Location
            </a>
            <a
              href="#contact"
              className="text-lg font-medium hover:text-kerala-spice text-kerala-wood border-b border-kerala-wood/10 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button asChild className="mt-6 bg-kerala-wood hover:bg-kerala-laterite text-kerala-dhoti border border-kerala-kasavu/20">
              <a href="#booking" onClick={() => setMobileMenuOpen(false)}>
                Book Now
              </a>
            </Button>
          </nav>
        </div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-10 bg-black/40" />
          <Image
            src="/images/kerala-heritage-home.jpg"
            alt="Traditional Kerala Nalukettu Homestay"
            width={1920}
            height={1080}
            className="h-[90vh] w-full object-cover"
            priority
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <div className="bg-kerala-wood/30 backdrop-blur-sm p-8 rounded-lg border border-kerala-kasavu/20 max-w-4xl mx-2">
              <div className="flex items-center justify-center mb-6">
                <div className="h-0.5 w-16 bg-kerala-kasavu"></div>
                <span className="mx-4 text-kerala-dhoti text-sm uppercase tracking-widest">Since 1623</span>
                <div className="h-0.5 w-16 bg-kerala-kasavu"></div>
              </div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-serif text-kerala-dhoti">
                My3 Heritage Homestay
              </h1>
              <p className="mt-4 max-w-2xl text-lg sm:text-xl text-kerala-dhoti/90 mx-auto">
                Experience the authentic charm of an ancient Kerala Nalukettu in Kochi
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
                <Button asChild size="lg" className="bg-kerala-wood hover:bg-kerala-laterite text-kerala-dhoti border border-kerala-kasavu">
                  <a href="#booking">Book Your Heritage Stay</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-kerala-dhoti hover:bg-kerala-wood/20 border-kerala-kasavu"
                >
                  <a href="#gallery">View Gallery</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        </section>

        {/* Quick Links */}
        <section className="relative bg-kerala-dhoti py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-kerala-pattern"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <a
                href="#amenities"
                className="flex flex-col items-center justify-center rounded-lg bg-kerala-ivory p-6 text-center shadow-md transition-transform hover:scale-105 border border-kerala-wood/10"
              >
                <div className="mb-3 rounded-full bg-kerala-wood/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-kerala-wood"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 className="font-medium text-kerala-wood">Traditional Amenities</h3>
              </a>
              <a
                href="#dining"
                className="flex flex-col items-center justify-center rounded-lg bg-kerala-ivory p-6 text-center shadow-md transition-transform hover:scale-105 border border-kerala-wood/10"
              >
                <div className="mb-3 rounded-full bg-kerala-wood/10 p-3">
                  <Coffee className="h-6 w-6 text-kerala-wood" />
                </div>
                <h3 className="font-medium text-kerala-wood">Kerala Cuisine</h3>
              </a>
              <a
                href="#rooms"
                className="flex flex-col items-center justify-center rounded-lg bg-kerala-ivory p-6 text-center shadow-md transition-transform hover:scale-105 border border-kerala-wood/10"
              >
                <div className="mb-3 rounded-full bg-kerala-wood/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-kerala-wood"
                  >
                    <path d="M2 4v16" />
                    <path d="M2 8h18a2 2 0 0 1 2 2v10" />
                    <path d="M2 17h20" />
                    <path d="M6 8v9" />
                  </svg>
                </div>
                <h3 className="font-medium text-kerala-wood">Heritage Rooms</h3>
              </a>
              <a
                href="#location"
                className="flex flex-col items-center justify-center rounded-lg bg-kerala-ivory p-6 text-center shadow-md transition-transform hover:scale-105 border border-kerala-wood/10"
              >
                <div className="mb-3 rounded-full bg-kerala-wood/10 p-3">
                  <MapPin className="h-6 w-6 text-kerala-wood" />
                </div>
                <h3 className="font-medium text-kerala-wood">Kochi Backwaters</h3>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-28 bg-kerala-ivory relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-leaf-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <Image 
                  src="/images/kerala-courtyard.jpg" 
                  alt="Traditional Nadumuttam (Courtyard) of Kerala Nalukettu" 
                  width={600} 
                  height={450}
                  className="rounded-xl shadow-lg border-8 border-white"
                />
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="h-0.5 w-12 bg-kerala-wood"></div>
                  <span className="mx-4 text-kerala-spice text-sm uppercase tracking-widest font-medium">Our Heritage</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-kerala-wood font-serif">
                  Ancient Kerala Architecture & Traditions
                </h2>
                <p className="text-lg leading-relaxed text-kerala-coconut mb-6">
                  Nestled by the serene backwaters and surrounded by swaying coconut palms, My3 Heritage Homestay is a traditional 400-year-old
                  wooden "Nalukettu" (quadrangular homestead) that embodies the rich architectural heritage of Kerala.
                </p>
                <p className="text-lg leading-relaxed text-kerala-coconut mb-8">
                  Our ancestral home features the authentic <span className="text-kerala-spice font-medium">Nadumuttam</span> (central courtyard), 
                  <span className="text-kerala-spice font-medium"> Charupadi</span> (raised platform seating), and traditional 
                  <span className="text-kerala-spice font-medium"> Pathayam</span> (wooden grain storage) that have been preserved for generations, 
                  offering you a glimpse into Kerala's glorious architectural past.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="rounded-full bg-kerala-wood/10 p-2 mr-4 mt-1">
                      <Check className="h-4 w-4 text-kerala-wood" />
                    </div>
                    <div>
                      <h3 className="font-medium text-kerala-wood">400 Years of History</h3>
                      <p className="text-sm text-kerala-coconut mt-1">Built in the traditional Kerala architectural style</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full bg-kerala-wood/10 p-2 mr-4 mt-1">
                      <Check className="h-4 w-4 text-kerala-wood" />
                    </div>
                    <div>
                      <h3 className="font-medium text-kerala-wood">Family Legacy</h3>
                      <p className="text-sm text-kerala-coconut mt-1">Handed down through seven generations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-kerala-wood to-kerala-laterite opacity-95"></div>
          <div className="absolute inset-0 bg-[url('/textures/wood-pattern.png')] opacity-10 mix-blend-overlay"></div>
          
          <div className="container relative z-10 px-4 mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-kerala-kasavu/10 backdrop-blur-sm border border-kerala-kasavu/20">
                <span className="text-kerala-kasavu text-sm font-medium tracking-wider uppercase">Our Heritage Features</span>
              </div>
              <h2 className="mt-6 text-4xl font-serif font-bold text-kerala-dhoti">
                Experience Timeless Kerala Traditions
              </h2>
              <p className="mt-4 text-lg text-kerala-dhoti/80 max-w-2xl mx-auto">
                Step into a world where centuries-old customs meet modern comfort
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Nalukettu Architecture",
                  description: "Experience authentic Kerala quadrangular architecture with our traditional central courtyard design",
                  icon: "home"
                },
                {
                  title: "Master Craftsmanship",
                  description: "Witness intricate wooden carvings and traditional Kerala furniture made by skilled artisans",
                  icon: "tool"
                },
                {
                  title: "Cultural Immersion",
                  description: "Enjoy traditional Kathakali performances and Kalaripayattu demonstrations on premises",
                  icon: "music"
                },
                {
                  title: "Kerala Cuisine",
                  description: "Savor authentic dishes served on banana leaves, prepared using ancestral recipes",
                  icon: "utensils"
                },
                {
                  title: "Ayurvedic Wellness",
                  description: "Rejuvenate with traditional Kerala Ayurvedic treatments in our heritage therapy rooms",
                  icon: "leaf"
                },
                {
                  title: "Scenic Backwaters",
                  description: "Enjoy panoramic views of Kerala's famous backwaters from our historic property",
                  icon: "waves"
                }
              ].map((feature, i) => (
                <div key={i} className="group relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-kerala-kasavu/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-8 rounded-2xl bg-kerala-wood/40 backdrop-blur-sm border border-kerala-kasavu/10 hover:border-kerala-kasavu/30 transition-all duration-300">
                    <div className="w-12 h-12 mb-6 rounded-xl bg-kerala-dhoti/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-kerala-kasavu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium mb-3 text-kerala-kasavu group-hover:text-kerala-dhoti transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-kerala-dhoti/70 group-hover:text-kerala-dhoti/90 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section id="amenities" className="py-20 md:py-28 bg-kerala-ivory">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="h-0.5 w-12 bg-kerala-wood"></div>
                <span className="mx-4 text-kerala-spice text-sm uppercase tracking-widest font-medium">Heritage Comforts</span>
                <div className="h-0.5 w-12 bg-kerala-wood"></div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-kerala-wood font-serif">
                Traditional Amenities with Modern Comfort
              </h2>
              <p className="mt-4 text-lg text-kerala-coconut max-w-2xl mx-auto">
                We preserve the authentic Kerala experience while ensuring your stay is comfortable
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-start">
                <div className="rounded-full bg-kerala-laterite/10 p-3 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-kerala-laterite">
                    <path d="M3 3v18h18"></path>
                    <path d="M7 18v-7"></path>
                    <path d="M11 18v-9"></path>
                    <path d="M15 18v-5"></path>
                    <path d="M19 18v-3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-kerala-wood">Nadumuttam Courtyard</h3>
                <p className="text-kerala-coconut">
                  Our central courtyard follows authentic Kerala architectural principles, allowing natural light and ventilation throughout the home
                </p>
              </div>
              
              <div className="flex flex-col items-start">
                <div className="rounded-full bg-kerala-laterite/10 p-3 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-kerala-laterite">
                    <path d="m2 9 3-3 3 3"></path>
                    <path d="M13 18H7a2 2 0 0 1-2-2V6"></path>
                    <path d="m22 9-3-3-3 3"></path>
                    <path d="M11 18h6a2 2 0 0 0 2-2V6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-kerala-wood">Charupadi Seating</h3>
                <p className="text-kerala-coconut">
                  Traditional wooden platform seating areas along verandas, perfect for relaxation and experiencing the Kerala lifestyle
                </p>
              </div>
              
              <div className="flex flex-col items-start">
                <div className="rounded-full bg-kerala-laterite/10 p-3 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-kerala-laterite">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-kerala-wood">Antique Kerala Furniture</h3>
                <p className="text-kerala-coconut">
                  Rooms furnished with authentic Kerala antique pieces including traditional wooden beds, almirahs, and planters chairs
                </p>
              </div>
              
              <div className="flex flex-col items-start">
                <div className="rounded-full bg-kerala-laterite/10 p-3 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-kerala-laterite">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                    <path d="M3 9h18"></path>
                    <path d="M9 21V9"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-kerala-wood">Traditional Dining Hall</h3>
                <p className="text-kerala-coconut">
                  Meals served in our authentic Kerala-style dining area with traditional banana leaf service available on request
                </p>
              </div>
              
              <div className="flex flex-col items-start">
                <div className="rounded-full bg-kerala-laterite/10 p-3 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-kerala-laterite">
                    <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"></path>
                    <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"></path>
                    <path d="M4 12H2"></path>
                    <path d="M10 12H8"></path>
                    <path d="M16 12h-2"></path>
                    <path d="M22 12h-2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-kerala-wood">Cultural Performance Area</h3>
                <p className="text-kerala-coconut">
                  Dedicated space for cultural demonstrations, from traditional Kerala music to ancient martial arts
                </p>
              </div>
              
              <div className="flex flex-col items-start">
                <div className="rounded-full bg-kerala-laterite/10 p-3 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-kerala-laterite">
                    <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path>
                    <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0Z"></path>
                    <path d="M5 18v2"></path>
                    <path d="M19 18v2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-kerala-wood">Traditional Kerala Kitchen</h3>
                <p className="text-kerala-coconut">
                  Watch our family chefs prepare authentic Kerala cuisine using traditional methods and centuries-old recipes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rooms Section */}
        <section id="rooms" className="py-20 md:py-28 bg-kerala-dhoti relative">
          <div className="absolute inset-0 opacity-5 bg-leaf-pattern"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="h-0.5 w-12 bg-kerala-wood"></div>
                <span className="mx-4 text-kerala-spice text-sm uppercase tracking-widest font-medium">Accommodations</span>
                <div className="h-0.5 w-12 bg-kerala-wood"></div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-kerala-wood font-serif">
                Traditional Kerala Accommodation
              </h2>
              <p className="mt-4 text-lg text-kerala-coconut max-w-2xl mx-auto">
                Stay in our heritage room that blends ancestral Kerala architecture with essential modern comforts
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-lg overflow-hidden shadow-xl border border-kerala-wood/10">
                  <Image
                    src="/images/kerala-room.jpg"
                    alt="Traditional"
                    width={600}
                    height={400}
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-kerala-wood/80 text-kerala-dhoti px-3 py-1 rounded-full text-sm">
                    Heritage Room
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                <h3 className="text-xl sm:text-2xl font-medium mb-4 text-kerala-wood font-serif">Tharavadu Heritage Room</h3>
                <p className="text-kerala-coconut mb-6 text-base sm:text-lg">
                  Experience authentic Kerala living in our traditional wooden room featuring antique furniture and classic design elements.
                </p>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start">
                    <div className="rounded-full bg-kerala-wood/10 p-2 mr-4 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-kerala-wood" />
                    </div>
                    <div>
                      <h4 className="font-medium text-kerala-wood">Authentic Wooden Ceiling</h4>
                      <p className="text-sm sm:text-base text-kerala-coconut mt-1">Traditional Kerala ceiling with exposed wooden beams</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="rounded-full bg-kerala-wood/10 p-2 mr-4 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-kerala-wood" />
                    </div>
                    <div>
                      <h4 className="font-medium text-kerala-wood">Handcrafted Furniture</h4>
                      <p className="text-sm sm:text-base text-kerala-coconut mt-1">Teakwood four-poster bed and traditional seating</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="rounded-full bg-kerala-wood/10 p-2 mr-4 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-kerala-wood" />
                    </div>
                    <div>
                      <h4 className="font-medium text-kerala-wood">Private Veranda</h4>
                      <p className="text-sm sm:text-base text-kerala-coconut mt-1">Traditional Charupadi seating with garden view</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 p-4 bg-kerala-wood/5 rounded-lg">
                  <div className="text-center py-2">
                    <p className="text-sm text-kerala-coconut">Check-in</p>
                    <p className="font-medium text-kerala-wood">2:00 PM</p>
                  </div>
                  <div className="text-center py-2 sm:border-x border-kerala-wood/10">
                    <p className="text-sm text-kerala-coconut">Check-out</p>
                    <p className="font-medium text-kerala-wood">12:00 PM</p>
                  </div>
                  <div className="text-center py-2">
                    <p className="text-sm text-kerala-coconut">Capacity</p>
                    <p className="font-medium text-kerala-wood">2 adults</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 md:py-28 bg-kerala-ivory">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="h-0.5 w-12 bg-kerala-wood"></div>
                <span className="mx-4 text-kerala-spice text-sm uppercase tracking-widest font-medium">Visual Journey</span>
                <div className="h-0.5 w-12 bg-kerala-wood"></div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-kerala-wood font-serif">
                Kerala Heritage Gallery
              </h2>
              <p className="mt-4 text-lg text-kerala-coconut max-w-2xl mx-auto">
                Explore our ancient Kerala heritage property through these visual glimpses
              </p>
            </div>
            
            {/* Custom gallery with Kerala-themed layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-lg shadow-lg h-80 cursor-pointer">
                <Image 
                  src="/images/kerala-heritage-home.jpg" 
                  alt="Traditional Kerala Nalukettu Homestay Exterior" 
                  width={600} 
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kerala-wood/70 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-medium text-kerala-dhoti font-serif">Nalukettu Structure</h3>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-lg shadow-lg h-80 cursor-pointer">
                <Image 
                  src="/images/kerala-courtyard.jpg" 
                  alt="Central courtyard (Nadumuttam) of the traditional Kerala home" 
                  width={600} 
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kerala-wood/70 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-medium text-kerala-dhoti font-serif">Central Courtyard</h3>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-lg shadow-lg h-80 cursor-pointer">
                <Image 
                  src="/images/kerala-room.jpg" 
                  alt="Traditional wooden room with Kerala style furnishings" 
                  width={600} 
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kerala-wood/70 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-medium text-kerala-dhoti font-serif">Heritage Room</h3>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-lg shadow-lg h-80 cursor-pointer">
                <Image 
                  src="/images/kerala-dining.jpg" 
                  alt="Traditional Kerala dining area with banana leaf meal service" 
                  width={600} 
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kerala-wood/70 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-medium text-kerala-dhoti font-serif">Traditional Dining</h3>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-lg shadow-lg h-80 cursor-pointer">
                <Image 
                  src="/images/kerala-exterior.jpg" 
                  alt="Kerala backwater view from My3 Heritage Homestay" 
                  width={600} 
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kerala-wood/70 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-medium text-kerala-dhoti font-serif">Backwater Views</h3>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-lg shadow-lg h-80 cursor-pointer">
                <Image 
                  src="/images/kerala-culture.jpg" 
                  alt="Traditional Kerala cultural performance at My3 Heritage Homestay" 
                  width={600} 
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kerala-wood/70 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-medium text-kerala-dhoti font-serif">Cultural Performance</h3>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-kerala-wood hover:bg-kerala-laterite text-kerala-dhoti border border-kerala-kasavu/20">
                View Full Gallery
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-brown-700 py-16 md:py-24 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
              <Image
                src="/images/kerala-exterior.jpg"
                alt="My3 Heritage Homestay Exterior"
                width={800}
                height={600}
                className="rounded-lg object-cover h-[400px]"
              />
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose My3</h2>
                <p className="mt-6 text-lg">
                  Experience authentic Kerala heritage in a family-owned ancestral home that has preserved traditions for generations.
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 rounded-full bg-white p-1">
                      <Check className="h-4 w-4 text-brown-700" />
                    </div>
                    <span>Live in a genuine 400-year-old Kerala ancestral home</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 rounded-full bg-white p-1">
                      <Check className="h-4 w-4 text-brown-700" />
                    </div>
                    <span>Family-hosted experience with authentic Kerala hospitality</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 rounded-full bg-white p-1">
                      <Check className="h-4 w-4 text-brown-700" />
                    </div>
                    <span>Home-cooked traditional Kerala meals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 rounded-full bg-white p-1">
                      <Check className="h-4 w-4 text-brown-700" />
                    </div>
                    <span>Perfect blend of heritage architecture and essential modern comforts</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button asChild size="lg" className="bg-white text-brown-700 hover:bg-brown-50">
                    <a href="#booking">Book Your Kerala Experience</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-brown-800">Guest Reviews</h2>
              <p className="mt-4 text-lg text-gray-600">What visitors say about their authentic Kerala experience</p>
            </div>
            <Testimonials />
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="bg-brown-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-brown-800">Our Location</h2>
              <p className="mt-4 text-lg text-gray-600">
                My3 Heritage Homestay is located in the beautiful backwaters of Kochi, Kerala
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
              <div>
                <div className="aspect-video overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.6398198673654!2d76.3149!3d9.5982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzUnNTMuNSJOIDc2wrAxOCc1My42IkU!5e0!3m2!1sen!2sin!4v1619653234567!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="mr-3 h-6 w-6 text-brown-800" />
                    <div>
                      <h3 className="text-lg font-semibold text-brown-800">Address</h3>
                      <p className="mt-2 text-gray-600">
                        My3 Heritage Homestay
                        <br />
                        Near Backwaters, Cherthala
                        <br />
                        Kochi, Kerala, India
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brown-800">Getting Here</h3>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li>
                        <span className="font-medium">From Cochin International Airport:</span> 45 km (approximately 1.5
                        hours by car)
                      </li>
                      <li>
                        <span className="font-medium">From Ernakulam Junction Railway Station:</span> 35 km
                        (approximately 1 hour by car)
                      </li>
                      <li>
                        <span className="font-medium">From Alleppey:</span> 25 km (approximately 40 minutes by car)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brown-800">Nearby Kerala Attractions</h3>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li>Traditional Kathakali Performance Center - 5 km</li>
                      <li>Marari Beach - 15 km</li>
                      <li>Alleppey Backwaters - 25 km</li>
                      <li>Fort Kochi Heritage Area - 40 km</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-wood-texture bg-kerala-wood text-kerala-dhoti relative">
          <div className="absolute inset-0 bg-kerala-wood/90"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="h-0.5 w-12 bg-kerala-kasavu"></div>
                <span className="mx-4 text-kerala-kasavu text-sm uppercase tracking-widest font-medium">Connect With Us</span>
                <div className="h-0.5 w-12 bg-kerala-kasavu"></div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-kerala-dhoti font-serif">
                Plan Your Heritage Experience
              </h2>
              <p className="mt-4 text-lg text-kerala-dhoti/80 max-w-2xl mx-auto">
                Reach out to us to book your stay or learn more about our ancient Kerala home
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div className="bg-kerala-wood/40 backdrop-blur-sm p-10 rounded-lg border border-kerala-kasavu/10">
                <h3 className="text-2xl font-medium mb-6 text-kerala-dhoti font-serif">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-kerala-dhoti/10 p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-kerala-kasavu">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-kerala-kasavu">Phone</h4>
                      <p className="mt-2 text-kerala-dhoti/80">+91 98765 43210</p>
                      <p className="mt-1 text-kerala-dhoti/80">+91 98765 43211</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-kerala-dhoti/10 p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-kerala-kasavu">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-kerala-kasavu">Email</h4>
                      <p className="mt-2 text-kerala-dhoti/80">info@my3homestay.com</p>
                      <p className="mt-1 text-kerala-dhoti/80">bookings@my3homestay.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-kerala-dhoti/10 p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-kerala-kasavu">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-kerala-kasavu">Address</h4>
                      <p className="mt-2 text-kerala-dhoti/80">
                        My3 Heritage Homestay<br />
                        Near Backwaters, Cherthala<br />
                        Kochi, Kerala, India
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-kerala-kasavu/10">
                  <h4 className="text-lg font-medium text-kerala-kasavu mb-4">Follow Our Heritage Journey</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="rounded-full bg-kerala-dhoti/10 p-3 hover:bg-kerala-dhoti/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-kerala-kasavu">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="rounded-full bg-kerala-dhoti/10 p-3 hover:bg-kerala-dhoti/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-kerala-kasavu">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="rounded-full bg-kerala-dhoti/10 p-3 hover:bg-kerala-dhoti/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-kerala-kasavu">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-kerala-dhoti rounded-lg shadow-xl p-10 border border-kerala-wood/10">
                <h3 className="text-2xl font-medium mb-6 text-kerala-wood font-serif">Send Us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-kerala-wood mb-1">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-kerala-wood/20 rounded-md focus:ring-2 focus:ring-kerala-spice focus:border-transparent bg-kerala-dhoti text-kerala-wood"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-kerala-wood mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-kerala-wood/20 rounded-md focus:ring-2 focus:ring-kerala-spice focus:border-transparent bg-kerala-dhoti text-kerala-wood"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-kerala-wood mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-kerala-wood/20 rounded-md focus:ring-2 focus:ring-kerala-spice focus:border-transparent bg-kerala-dhoti text-kerala-wood"
                      placeholder="Booking Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-kerala-wood mb-1">Your Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-2 border border-kerala-wood/20 rounded-md focus:ring-2 focus:ring-kerala-spice focus:border-transparent bg-kerala-dhoti text-kerala-wood"
                      placeholder="Tell us about your planned visit..."
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-kerala-wood hover:bg-kerala-laterite text-kerala-dhoti">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        {/* <section id="booking" className="py-20 md:py-28 bg-kerala-ivory">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="h-0.5 w-12 bg-kerala-wood"></div>
                <span className="mx-4 text-kerala-spice text-sm uppercase tracking-widest font-medium">Reservations</span>
                <div className="h-0.5 w-12 bg-kerala-wood"></div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-kerala-wood font-serif">
                Book Your Heritage Experience
              </h2>
              <p className="mt-4 text-lg text-kerala-coconut max-w-2xl mx-auto">
                Reserve your journey into Kerala's ancient architectural traditions
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <BookingForm />
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="border-t border-kerala-wood/10 bg-kerala-dhoti py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-kerala-wood flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-kerala-dhoti" />
                </div>
                <span className="text-xl font-semibold text-kerala-wood">My3 Heritage Homestay</span>
              </div>
              <p className="text-kerala-coconut mb-6 max-w-md">
                A 400-year-old traditional Kerala Nalukettu home nestled in the serene backwaters of Kochi, offering an authentic heritage
                experience that has been preserved through seven generations of our family.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-kerala-wood hover:text-kerala-spice transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-kerala-wood hover:text-kerala-spice transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-kerala-wood hover:text-kerala-spice transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-kerala-wood mb-6">Heritage Experiences</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#nalukettu" className="text-kerala-coconut hover:text-kerala-spice transition-colors">Nalukettu Architecture</a>
                </li>
                <li>
                  <a href="#cuisine" className="text-kerala-coconut hover:text-kerala-spice transition-colors">Traditional Kerala Cuisine</a>
                </li>
                <li>
                  <a href="#cultural" className="text-kerala-coconut hover:text-kerala-spice transition-colors">Cultural Performances</a>
                </li>
                <li>
                  <a href="#ayurveda" className="text-kerala-coconut hover:text-kerala-spice transition-colors">Ayurvedic Treatments</a>
                </li>
                <li>
                  <a href="#backwaters" className="text-kerala-coconut hover:text-kerala-spice transition-colors">Backwater Cruises</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-kerala-wood mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#about" className="text-kerala-coconut hover:text-kerala-spice transition-colors">About Our Heritage</a>
                </li>
                <li>
                  <a href="#rooms" className="text-kerala-coconut hover:text-kerala-spice transition-colors">Traditional Rooms</a>
                </li>
                <li>
                  <a href="#gallery" className="text-kerala-coconut hover:text-kerala-spice transition-colors">Gallery</a>
                </li>
                <li>
                  <a href="#contact" className="text-kerala-coconut hover:text-kerala-spice transition-colors">Contact</a>
                </li>
                <li>
                  <a href="#booking" className="text-kerala-coconut hover:text-kerala-spice transition-colors">Book Now</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-kerala-wood/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-kerala-coconut text-sm">© {new Date().getFullYear()} My3 Heritage Homestay. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-kerala-coconut hover:text-kerala-spice transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-kerala-coconut hover:text-kerala-spice transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-kerala-coconut hover:text-kerala-spice transition-colors text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
