"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Check,
  MapPin,
  Menu,
  X,
  Leaf,
  Coffee,
  Landmark,
  Church,
  Ship,
  Plane,
  Train,
} from "lucide-react";
import { useState } from "react";
import BookingForm from "@/components/booking-form";
import FeatureCard from "@/components/feature-card";
import RoomCard from "@/components/room-card";
import Gallery from "@/components/gallery";
import Testimonials from "@/components/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-kerala-ivory">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-kerala-wood/20 bg-kerala-ivory/90 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-kerala-wood flex items-center justify-center">
              <Leaf className="h-6 w-6 text-kerala-dhoti" />
            </div>
            <a
              href="#"
              className="text-xl font-semibold tracking-tight text-kerala-wood"
            >
              My3 Heritage Serviced Villa
            </a>
          </div>
          <nav className="hidden md:flex gap-8">
            <a
              href="#about"
              className="text-sm font-medium hover:text-kerala-spice transition-colors text-kerala-wood"
            >
              About
            </a>
            <a
              href="#features"
              className="text-sm font-medium hover:text-kerala-spice transition-colors text-kerala-wood"
            >
              Features
            </a>
            <a
              href="#rooms"
              className="text-sm font-medium hover:text-kerala-spice transition-colors text-kerala-wood"
            >
              Rooms
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium hover:text-kerala-spice transition-colors text-kerala-wood"
            >
              Gallery
            </a>
            <a
              href="#location"
              className="text-sm font-medium hover:text-kerala-spice transition-colors text-kerala-wood"
            >
              Location
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-kerala-spice transition-colors text-kerala-wood"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <BookingForm />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-kerala-wood"
              onClick={() => setMobileMenuOpen(true)}
            >
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
              <a
                href="#"
                className="text-xl font-semibold tracking-tight text-kerala-wood"
              >
                My3 Heritage
              </a>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              className="text-kerala-wood"
            >
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
            <Button
              asChild
              className="mt-6 bg-kerala-wood hover:bg-kerala-laterite text-kerala-dhoti border border-kerala-kasavu/20"
            >
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
            src="/hero_bg.jpg"
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
                <span className="mx-4 text-kerala-dhoti text-sm uppercase tracking-widest">
                  Welcome
                </span>
                <div className="h-0.5 w-16 bg-kerala-kasavu"></div>
              </div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-serif text-kerala-dhoti">
                My3 Heritage Serviced Villa
              </h1>
              <p className="mt-4 max-w-2xl text-lg sm:text-xl text-kerala-dhoti/90 mx-auto">
                Experience the charm of a traditional Kerala home nestled in the
                tanquil village of Mevelloor, Velloor.{" "}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-kerala-wood hover:bg-kerala-laterite text-kerala-dhoti border border-kerala-kasavu"
                >
                  <a href="#booking">Book Your Stay</a>
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
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3 className="font-medium text-kerala-wood">
                  Traditional Home
                </h3>
                <p className="text-sm text-kerala-coconut mt-2">
                  Experience authentic Kerala architecture
                </p>
              </a>
              <a
                href="#dining"
                className="flex flex-col items-center justify-center rounded-lg bg-kerala-ivory p-6 text-center shadow-md transition-transform hover:scale-105 border border-kerala-wood/10"
              >
                <div className="mb-3 rounded-full bg-kerala-wood/10 p-3">
                  <Coffee className="h-6 w-6 text-kerala-wood" />
                </div>
                <h3 className="font-medium text-kerala-wood">
                  Regional Cuisines
                </h3>
                <p className="text-sm text-kerala-coconut mt-2">
                  Savor authentic Kerala and North-East Indian flavours
                </p>
              </a>
              <a
                href="#activities"
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
                    <path d="M2 18h1.4c.8 0 1.6-.4 2.1-1.1L9 12l3.5 4.9c.5.7 1.3 1.1 2.1 1.1H18" />
                    <path d="M18 8h-1.4c-.8 0-1.6.4-2.1 1.1L12 12l-3.5-4.9C8 6.4 7.2 6 6.4 6H2" />
                  </svg>
                </div>
                <h3 className="font-medium text-kerala-wood">
                  River Activities
                </h3>
                <p className="text-sm text-kerala-coconut mt-2">
                  Experience peaceful boating and fishing
                </p>
              </a>
              <a
                href="#location"
                className="flex flex-col items-center justify-center rounded-lg bg-kerala-ivory p-6 text-center shadow-md transition-transform hover:scale-105 border border-kerala-wood/10"
              >
                <div className="mb-3 rounded-full bg-kerala-wood/10 p-3">
                  <MapPin className="h-6 w-6 text-kerala-wood" />
                </div>
                <h3 className="font-medium text-kerala-wood">
                  Velloor, Kottayam
                </h3>
                <p className="text-sm text-kerala-coconut mt-2">
                  Discover our serene location
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-20 md:py-28 bg-kerala-ivory relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-leaf-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <Image
                  src="/about.jpg"
                  alt="Traditional Kerala Homestay"
                  width={600}
                  height={450}
                  className="rounded-xl shadow-lg border-8 border-white"
                />
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="h-0.5 w-12 bg-kerala-wood"></div>
                  <span className="mx-4 text-kerala-spice text-sm uppercase tracking-widest font-medium">
                    An Authentic Malayali Experience
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-kerala-wood font-serif">
                  Welcome to My3 <br /> Heritage Serviced Villa
                </h2>
                <p className="text-lg leading-relaxed text-kerala-coconut mb-6">
                  Experience the charm of a traditional Kerala home, over 75
                  years old, nestled in the tranquil village of Mevelloor, in
                  scenic Velloor. Discover the warmth of Kerala hospitality in a
                  heritage residence.
                </p>
                <p className="text-lg leading-relaxed text-kerala-coconut mb-8">
                  During your stay, you can savour authentic Malayali and
                  North-East Indian dishes, prepared using traditional recipes
                  and fresh, seasonal produce. All this, surrounded by lush
                  greenery, serene riverfront views, and the gentle sounds of
                  nature.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="rounded-full bg-kerala-wood/10 p-2 mr-4 mt-1">
                      <Check className="h-4 w-4 text-kerala-wood" />
                    </div>
                    <div>
                      <h3 className="font-medium text-kerala-wood">
                        Traditional Home
                      </h3>
                      <p className="text-sm text-kerala-coconut mt-1">
                        Built in the traditional Kerala architectural style.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full bg-kerala-wood/10 p-2 mr-4 mt-1">
                      <Check className="h-4 w-4 text-kerala-wood" />
                    </div>
                    <div>
                      <h3 className="font-medium text-kerala-wood">
                        A legacy continues
                      </h3>
                      <p className="text-sm text-kerala-coconut mt-1">
                        A carefully restored and lovingly maintained home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <br />
            {/* Features Section */}
            <section id="features" className="relative py-8 overflow-hidden">
              <div className="container relative z-10 px-4 mx-auto">
                <div className="text-center mb-6">
                  {/* <div className="inline-flex items-center px-3 py-1 rounded-full bg-kerala-kasavu/10 backdrop-blur-sm border border-kerala-kasavu/20">
                <span className="text-kerala-spice text-xs font-medium tracking-wider uppercase">Our Heritage Features</span>
              </div> */}
                  <h2 className="mt-3 text-2xl font-serif font-bold text-kerala-wood">
                    My3 Features
                  </h2>
                  <p className="mt-2 text-sm text-kerala-coconut max-w-xl mx-auto">
                    Where centuries-old customs meet modern comfort{" "}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Malayali Architecture",
                      description:
                        "Built and restored according to the traditional Kerala style.",
                      image: "/malayali_archit.jpg",
                    },
                    {
                      title: "Ayurvedic Wellness",
                      description:
                        "Rejuvenate with traditional Kerala Ayurvedic treatments in  nearby wellness centeres.",
                      image: "/ayurveda_medicines.jpg",
                    },
                    {
                      title: "Modern Conveniences",
                      description:
                        "Air-conditioned bedrooms, Wi-fi, parking space, ample outdoor space.",
                      image: "/modern.jpeg",
                    },
                    {
                      title: "Scenic Riverview",
                      description:
                        "Enjoy panoramic views of the beautiful Muvattupuzha River.",
                      image: "/river_view.jpg",
                    },
                  ].map((feature, i) => (
                    <div key={i} className="group relative">
                      <div className="relative rounded-lg border border-kerala-wood/10 hover:border-kerala-wood/30 transition-all duration-300 overflow-hidden">
                        <div className="aspect-w-16 aspect-h-9 h-48">
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="p-3">
                          <h3 className="text-lg font-medium mb-1 text-kerala-wood group-hover:text-kerala-spice transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-kerala-coconut group-hover:text-kerala-coconut/90 transition-colors duration-300">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section
              id="rooms"
              className="py-20 md:py-28 bg-kerala-dhoti relative"
            >
              <div className="absolute inset-0 opacity-5 bg-leaf-pattern"></div>
              <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                  <div className="flex items-center justify-center mb-6">
                    <div className="h-0.5 w-12 bg-kerala-wood"></div>
                    <span className="mx-4 text-kerala-spice text-sm uppercase tracking-widest font-medium">
                      Our Home
                    </span>
                    <div className="h-0.5 w-12 bg-kerala-wood"></div>
                  </div>
                  <p className="text-lg font-bold tracking-tight sm:text-4xl text-kerala-wood font-serif">
                    We preserve the authentic Kerala experience while ensuring
                    your stay is comfortable.
                  </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-lg overflow-hidden shadow-xl border border-kerala-wood/10 group">
                      <Carousel
                        opts={{
                          align: "start",
                          loop: true,
                        }}
                        className="w-full"
                      >
                        <CarouselContent>
                          <CarouselItem>
                            <div className="relative">
                              <Image
                                src="/hero_bg.jpg"
                                alt="Traditional Kerala Home"
                                width={600}
                                height={400}
                                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </CarouselItem>
                          <CarouselItem>
                            <div className="relative">
                              <Image
                                src="/about.jpg"
                                alt="Traditional Kerala Home Interior"
                                width={600}
                                height={400}
                                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </CarouselItem>
                          <CarouselItem>
                            <div className="relative">
                              <Image
                                src="/front_view.jpg"
                                alt="Traditional Kerala Home Garden"
                                width={600}
                                height={400}
                                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </CarouselItem>
                          <CarouselItem>
                            <div className="relative">
                              <Image
                                src="/interior-room.jpg"
                                alt="Traditional Kerala Home Garden"
                                width={600}
                                height={400}
                                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <CarouselNext className="right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Carousel>
                      <div className="absolute top-4 right-4 bg-kerala-wood/90 text-kerala-dhoti px-4 py-1.5 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm">
                        Heritage Home
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-start">
                        <div className="rounded-full bg-kerala-wood/10 p-2 mr-4 mt-1 flex-shrink-0">
                          <Check className="h-4 w-4 text-kerala-wood" />
                        </div>
                        <div>
                          <h4 className="font-medium text-kerala-wood">
                            Traditional Portico
                          </h4>
                          <p className="text-sm sm:text-base text-kerala-coconut mt-1">
                            The porch greets visitors with its brick-lined
                            warmth and gracious proportions
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="rounded-full bg-kerala-wood/10 p-2 mr-4 mt-1 flex-shrink-0">
                          <Check className="h-4 w-4 text-kerala-wood" />
                        </div>
                        <div>
                          <h4 className="font-medium text-kerala-wood">
                            Charupadi-style Seating
                          </h4>
                          <p className="text-sm sm:text-base text-kerala-coconut mt-1">
                            Wooden benches, inspired by charupadi designs, grace
                            the entrance porch and living room
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="rounded-full bg-kerala-wood/10 p-2 mr-4 mt-1 flex-shrink-0">
                          <Check className="h-4 w-4 text-kerala-wood" />
                        </div>
                        <div>
                          <h4 className="font-medium text-kerala-wood">
                            Paved Front Yard
                          </h4>
                          <p className="text-sm sm:text-base text-kerala-coconut mt-1">
                            Ideal for children's play, hosting small gatherings
                            or al-fresco dining
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="rounded-full bg-kerala-wood/10 p-2 mr-4 mt-1 flex-shrink-0">
                          <Check className="h-4 w-4 text-kerala-wood" />
                        </div>
                        <div>
                          <h4 className="font-medium text-kerala-wood">
                            Bedrooms
                          </h4>
                          <p className="text-sm sm:text-base text-kerala-coconut mt-1">
                            2 comfortably appointed, air-conditioned bedrooms
                            with attached bathrooms.
                          </p>
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
                        <p className="font-medium text-kerala-wood">
                          2 adults per room
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Activities */}
            {/* <div className="mt-20">
              <h3 className="text-2xl font-bold text-kerala-wood mb-8 text-center">Activities & Experiences</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-kerala-wood/10 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-kerala-wood/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-kerala-wood" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-kerala-wood mb-2">Shikara Boat Service</h4>
                  <p className="text-kerala-coconut">Glide along the serene backwaters in a traditional shikara boat</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-kerala-wood/10 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-kerala-wood/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-kerala-wood" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-kerala-wood mb-2">Angling in the River</h4>
                  <p className="text-kerala-coconut">Try your hand at fishing in the nearby river</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-kerala-wood/10 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-kerala-wood/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-kerala-wood" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-kerala-wood mb-2">Yoga Classes</h4>
                  <p className="text-kerala-coconut">Yoga sessions with trained teachers for all levels</p>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* Amenities Section */}
        {/* <section id="amenities" className="py-20 md:py-28 bg-kerala-ivory">
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
        </section> */}

        {/* Rooms Section */}

        {/* Gallery Section */}
        <section id="gallery" className="py-20 md:py-28 bg-kerala-ivory">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="h-0.5 w-12 bg-kerala-wood"></div>
                <span className="mx-4 text-kerala-spice text-sm uppercase tracking-widest font-medium">
                  Gallery
                </span>
                <div className="h-0.5 w-12 bg-kerala-wood"></div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-kerala-wood font-serif">
                Explore Our Property
              </h2>
            </div>

            {/* Custom gallery with Kerala-themed layout */}
            <div className="relative">
              <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide">
                <div className="relative group overflow-hidden rounded-lg shadow-lg h-80 w-80 flex-shrink-0 snap-center cursor-pointer">
                  <Image
                    src="/front_view.jpg"
                    alt="Traditional Kerala Nalukettu Homestay Exterior"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg h-80 w-80 flex-shrink-0 snap-center cursor-pointer">
                  <Image
                    src="/about.jpg"
                    alt="Central courtyard (Nadumuttam) of the traditional Kerala home"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg h-80 w-80 flex-shrink-0 snap-center cursor-pointer">
                  <Image
                    src="/river_view.jpg"
                    alt="Traditional wooden room with Kerala style furnishings"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg h-80 w-80 flex-shrink-0 snap-center cursor-pointer">
                  <Image
                    src="/malayali_archit.jpg"
                    alt="Traditional Kerala dining area with banana leaf meal service"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg h-80 w-80 flex-shrink-0 snap-center cursor-pointer">
                  <Image
                    src="/kitchen.jpg"
                    alt="Kerala backwater view from My3 Heritage Homestay"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg h-80 w-80 flex-shrink-0 snap-center cursor-pointer">
                  <Image
                    src="/interior-room.jpg"
                    alt="Traditional Kerala cultural performance at My3 Heritage Homestay"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-lg h-80 w-80 flex-shrink-0 snap-center cursor-pointer">
                  <Image
                    src="/1.jpg"
                    alt="Traditional Kerala cultural performance at My3 Heritage Homestay"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow-lg h-80 w-80 flex-shrink-0 snap-center cursor-pointer">
                  <Image
                    src="/2.jpg"
                    alt="Traditional Kerala cultural performance at My3 Heritage Homestay"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-lg h-80 w-80 flex-shrink-0 snap-center cursor-pointer">
                  <Image
                    src="/3.jpg"
                    alt="Traditional Kerala cultural performance at My3 Heritage Homestay"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Scroll Indicators */}
              {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-kerala-wood/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-kerala-wood">
                <svg className="w-6 h-6 text-kerala-dhoti" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-kerala-wood/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-kerala-wood">
                <svg className="w-6 h-6 text-kerala-dhoti" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div> */}
            </div>

            <div className="text-center mt-12"></div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-kerala-wood py-16 md:py-24 text-kerala-dhoti">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
              <Image
                src="/hosts.jpeg"
                alt="My3 Heritage Homestay Exterior"
                width={800}
                height={600}
                className="rounded-lg object-cover h-[400px]"
              />
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Meet Your Hosts{" "}
                </h2>
                <p className="mt-6 text-lg">
                  Ajit and Srilatha Varma returned to Kerala after 35 years of
                  expat life. As they put down roots in their home district of
                  Kottayam, they realised they wanted to share the beauty and
                  tranquillity around them with others. They purchased and
                  lovingly restored the house they rechristened ‘My3 Villa’ into
                  a comfortable serviced vacation stay. Today, you can
                  experience this riverside traditional home that has preserved
                  the charm of bygone days, with the added must-haves of
                  air-conditioning and wi-fi, everything you could want from a
                  holiday home.{" "}
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 rounded-full bg-kerala-dhoti/10 p-1">
                      <Check className="h-4 w-4 text-kerala-dhoti" />
                    </div>
                    <span>
                      Delicious Malayali and North-East Indian cuisine prepared using
                      traditional recipes.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 rounded-full bg-kerala-dhoti/10 p-1">
                      <Check className="h-4 w-4 text-kerala-dhoti" />
                    </div>
                    <span>
                      Peaceful, green surroundings with riverfront views.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 rounded-full bg-kerala-dhoti/10 p-1">
                      <Check className="h-4 w-4 text-kerala-dhoti" />
                    </div>
                    <span>
                      Personalized hospitality and attention to detail.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 rounded-full bg-kerala-dhoti/10 p-1">
                      <Check className="h-4 w-4 text-kerala-dhoti" />
                    </div>
                    <span>
                      Easy access to top tourist attractions in central Kerala.
                    </span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-kerala-dhoti text-kerala-wood hover:bg-kerala-dhoti/90"
                  >
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-brown-800">
                Guest Reviews
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                What visitors say about their authentic Kerala experience
              </p>
            </div>
            <Testimonials />
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-kerala-wood/5 to-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-kerala-wood/10 mb-4">
                <span className="text-kerala-wood text-sm font-medium">
                  Local Experiences
                </span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-kerala-wood">
                Activities & Experiences
              </h2>
              <p className="mt-4 text-kerala-coconut/90 max-w-2xl mx-auto text-lg">
                At My3 Villa, you can immerse yourself in the local way of life
                or simply relax in peaceful surroundings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="group bg-white rounded-2xl shadow-lg border border-kerala-wood/10 hover:border-kerala-wood/30 transition-all duration-300 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/shikara.jpg"
                    alt="Traditional Shikara boat on Kerala backwaters"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-kerala-wood/10 group-hover:bg-kerala-wood/20 flex items-center justify-center transition-colors duration-300">
                    <svg
                      className="w-8 h-8 text-kerala-wood"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-kerala-wood mb-3 text-center">
                    Shikara Boat Service
                  </h3>
                  <p className="text-kerala-coconut/80 text-center leading-relaxed">
                    Glide along the serene backwaters in a traditional shikara
                    boat.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-2xl shadow-lg border border-kerala-wood/10 hover:border-kerala-wood/30 transition-all duration-300 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/choonda.jpeg"
                    alt="Fishing on Kerala river"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-kerala-wood/10 group-hover:bg-kerala-wood/20 flex items-center justify-center transition-colors duration-300">
                    <svg
                      className="w-8 h-8 text-kerala-wood"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-kerala-wood mb-3 text-center">
                    Angling in the River
                  </h3>
                  <p className="text-kerala-coconut/80 text-center leading-relaxed">
                    Try your hand at fishing in the river.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-2xl shadow-lg border border-kerala-wood/10 hover:border-kerala-wood/30 transition-all duration-300 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/yoga.jpeg"
                    alt="Yoga session in Kerala"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-kerala-wood/10 group-hover:bg-kerala-wood/20 flex items-center justify-center transition-colors duration-300">
                    <svg
                      className="w-8 h-8 text-kerala-wood"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-kerala-wood mb-3 text-center">
                    Yoga Classes
                  </h3>
                  <p className="text-kerala-coconut/80 text-center leading-relaxed">
                    Yoga sessions can be arranged at any of the nearby centres
                    with trained teachers for all levels.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-kerala-coconut/90 text-lg max-w-3xl mx-auto">
                We are happy to help arrange sightseeing tours, cultural
                experiences, and more to make your stay memorable.
              </p>
              <div className="mt-6 inline-flex items-center px-4 py-2 rounded-full bg-kerala-wood/5 border border-kerala-wood/10">
                <span className="text-sm text-kerala-coconut/70">
                  Note: You can enjoy the views, but swimming in the river at
                  the property is not permitted.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="relative py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-kerala-wood to-kerala-laterite opacity-95"></div>
          <div className="absolute inset-0 bg-[url('/textures/wood-pattern.png')] opacity-10 mix-blend-overlay"></div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-kerala-kasavu/10 backdrop-blur-sm border border-kerala-kasavu/20">
                <span className="text-kerala-kasavu text-xs font-medium tracking-wider uppercase">
                  Connect With Us
                </span>
              </div>
              <h2 className="mt-3 text-3xl font-serif font-bold text-kerala-dhoti">
                Plan Your Heritage Experience
              </h2>
             
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
              <div className="group">
                <div className="aspect-video overflow-hidden rounded-xl shadow-lg border border-kerala-wood/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4074.5059505877716!2d76.4548549!3d9.835108499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0877d35472b5e9%3A0xa192d66e3bc615ff!2sMy3%20Heritage%20Serviced%20Villa!5e1!3m2!1sen!2sin!4v1753731044079!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="transition-transform duration-300 group-hover:scale-105"
                  ></iframe>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-kerala-wood/20">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="rounded-full bg-kerala-wood/10 p-3 mr-4">
                      <MapPin className="h-5 w-5 text-kerala-wood" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-kerala-dhoti">
                        Address
                      </h3>
                      <p className="mt-2 text-kerala-dhoti/80">
                        My3 Heritage Serviced Villa
                        <br />
                        Near Panchayat Bus Stand
                        <br />
                        Mevelloor, Velloor
                        <br />
                        Kottayam, Kerala, India
                        <br />
                        686616
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-kerala-dhoti mb-4">
                      Getting Here
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center text-kerala-dhoti/80">
                        <Plane className="h-4 w-4 mr-2 text-kerala-spice" />
                        <span className="font-medium text-kerala-dhoti">
                          Cochin International Airport:
                        </span>
                        <span className="ml-2">60 km (1.5 hours)</span>
                      </li>
                      <li className="flex items-center text-kerala-dhoti/80">
                        <Train className="h-4 w-4 mr-2 text-kerala-spice" />
                        <span className="font-medium text-kerala-dhoti">
                          Ernakulam Junction:
                        </span>
                        <span className="ml-2">35 km (1 hour)</span>
                      </li>
                      <li className="flex items-center text-kerala-dhoti/80">
                        <Ship className="h-4 w-4 mr-2 text-kerala-spice" />
                        <span className="font-medium text-kerala-dhoti">
                          Alleppey:
                        </span>
                        <span className="ml-2">45 km (1.5 hour)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-kerala-dhoti mb-4">
                      Nearby Attractions
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <li className="flex items-center text-kerala-dhoti/80">
                        <MapPin className="h-4 w-4 mr-2 text-kerala-spice" />
                        Kathakali Center - 5 km
                      </li>
                      <li className="flex items-center text-kerala-dhoti/80">
                        <MapPin className="h-4 w-4 mr-2 text-kerala-spice" />
                        Marari Beach -40 km
                      </li>
                      <li className="flex items-center text-kerala-dhoti/80">
                        <MapPin className="h-4 w-4 mr-2 text-kerala-spice" />
                        Alleppey Backwaters - 25 km
                      </li>
                      <li className="flex items-center text-kerala-dhoti/80">
                        <MapPin className="h-4 w-4 mr-2 text-kerala-spice" />
                        Fort Kochi - 40 km
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 md:py-28 bg-wood-texture bg-kerala-wood text-kerala-dhoti relative"
        >
          <div className="absolute inset-0 bg-kerala-wood/90"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="h-0.5 w-12 bg-kerala-kasavu"></div>
                <span className="mx-4 text-kerala-kasavu text-sm uppercase tracking-widest font-medium">
                  Connect With Us
                </span>
                <div className="h-0.5 w-12 bg-kerala-kasavu"></div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-kerala-dhoti font-serif">
                Plan Your Heritage Experience
              </h2>
              <p className="mt-4 text-lg text-kerala-dhoti/80 max-w-2xl mx-auto">
                Reach out to us to book your stay or learn more about our
                heritage villa in Kerala.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div className="bg-kerala-wood/40 backdrop-blur-sm p-10 rounded-lg border border-kerala-kasavu/10">
                <h3 className="text-2xl font-medium mb-6 text-kerala-dhoti font-serif">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-kerala-dhoti/10 p-3">
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
                        className="h-5 w-5 text-kerala-kasavu"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-kerala-kasavu">
                        Phone
                      </h4>
                      <p className="mt-2 text-kerala-dhoti/80">
                        +91 98461 56533
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-kerala-dhoti/10 p-3">
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
                        className="h-5 w-5 text-kerala-kasavu"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-kerala-kasavu">
                        Email
                      </h4>
                      <p className="mt-2 text-kerala-dhoti/80">
                        info@my3villa.com
                      </p>
                      <p className="mt-1 text-kerala-dhoti/80">
                        bookings@my3villa.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-kerala-dhoti/10 p-3">
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
                        className="h-5 w-5 text-kerala-kasavu"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-kerala-kasavu">
                        Address
                      </h4>
                      <p className="mt-2 text-kerala-dhoti/80">
                        My3 Heritage Serviced Villa
                        <br />
                        Near Panchayat Bus Stand
                        <br />
                        Mevelloor, Velloor
                        <br />
                        Kottayam, Kerala, India
                        <br />
                        686616
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-kerala-kasavu/10">
                  <h4 className="text-lg font-medium text-kerala-kasavu mb-4">
                    Follow My3 Heritage Serviced Villa
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="rounded-full bg-kerala-dhoti/10 p-3 hover:bg-kerala-dhoti/20 transition-colors"
                    >
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
                        className="h-5 w-5 text-kerala-kasavu"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="rounded-full bg-kerala-dhoti/10 p-3 hover:bg-kerala-dhoti/20 transition-colors"
                    >
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
                        className="h-5 w-5 text-kerala-kasavu"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </a>
                    
                  </div>
                </div>
              </div>

              <div className="bg-kerala-dhoti rounded-lg shadow-xl p-10 border border-kerala-wood/10">
                <h3 className="text-2xl font-medium mb-6 text-kerala-wood font-serif">
                  Send Us a Message
                </h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-kerala-wood mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-kerala-wood/20 rounded-md focus:ring-2 focus:ring-kerala-spice focus:border-transparent bg-kerala-dhoti text-kerala-wood"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-kerala-wood mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-kerala-wood/20 rounded-md focus:ring-2 focus:ring-kerala-spice focus:border-transparent bg-kerala-dhoti text-kerala-wood"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-kerala-wood mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-kerala-wood/20 rounded-md focus:ring-2 focus:ring-kerala-spice focus:border-transparent bg-kerala-dhoti text-kerala-wood"
                      placeholder="Booking Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-kerala-wood mb-1"
                    >
                      Your Message
                    </label>
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
                <span className="text-xl font-semibold text-kerala-wood">
                  My3 Heritage Serviced Villa
                </span>
              </div>
              <p className="text-kerala-coconut mb-6 max-w-md">
              My3 is a carefully restored and lovingly maintained 2-bedroomed, traditional home, built in classic Kerala architectural style but featuring all the conveniences of 21st century living. The house features a tiled roof, joisted wooden ceilings, airconditioned bedrooms, wi-fi connectivity, and cool terracotta floors. Come, be our guest at My3 Heritage Serviced Villa and experience the true spirit of Kerala.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-kerala-wood hover:text-kerala-spice transition-colors"
                >
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-kerala-wood hover:text-kerala-spice transition-colors"
                >
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
                    className="h-5 w-5"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
              
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-kerala-wood mb-6">
                Experiences
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#shikara"
                    className="text-kerala-coconut hover:text-kerala-spice transition-colors"
                  >
                    Shikara Boat Service
                  </a>
                </li>
                <li>
                  <a
                    href="#angling"
                    className="text-kerala-coconut hover:text-kerala-spice transition-colors"
                  >
                    Angling in the River
                  </a>
                </li>
                <li>
                  <a
                    href="#yoga"
                    className="text-kerala-coconut hover:text-kerala-spice transition-colors"
                  >
                    Yoga Classes
                  </a>
                </li>
                <li>
                  <a
                    href="#attractions"
                    className="text-kerala-coconut hover:text-kerala-spice transition-colors"
                  >
                    Nearby Attractions
                  </a>
                </li>
                <li>
                  <a
                    href="#cultural"
                    className="text-kerala-coconut hover:text-kerala-spice transition-colors"
                  >
                    Cultural Sites
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-kerala-wood mb-6">
                Quick Links
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#about"
                    className="text-kerala-coconut hover:text-kerala-spice transition-colors"
                  >
                    About My3
                  </a>
                </li>
                <li>
                  <a
                    href="#rooms"
                    className="text-kerala-coconut hover:text-kerala-spice transition-colors"
                  >
                    Accommodations
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-kerala-coconut hover:text-kerala-spice transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-kerala-coconut hover:text-kerala-spice transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#booking"
                    className="text-kerala-coconut hover:text-kerala-spice transition-colors"
                  >
                    Book Now
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-kerala-wood/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-kerala-coconut text-sm">
              © {new Date().getFullYear()} My3 Heritage Serviced Villa. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-kerala-coconut hover:text-kerala-spice transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-kerala-coconut hover:text-kerala-spice transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-kerala-coconut hover:text-kerala-spice transition-colors text-sm"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
