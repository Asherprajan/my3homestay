"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
      
    {
      src: "/images/kerala-heritage-home.jpg",
      alt: "Traditional Kerala Nalukettu house at My3 Heritage Homestay",
    },
    
    {
      src: "/images/kerala-room.jpg",
      alt: "Traditional wooden room with Kerala style furnishings",
    },
    {
      src: "/images/kerala-exterior.jpg",
      alt: "Kerala backwater view from My3 Heritage Homestay",
    },
    {
      src: "/images/kerala-dining.jpg",
      alt: "Traditional Kerala dining area with banana leaf meal service",
    },
    {
      src: "/images/kerala-courtyard.jpg",
      alt: "Central courtyard (Nadumuttam) of the traditional Kerala home",
    },
    {
      src: "/images/kerala-culture.jpg",
      alt: "Traditional Kerala cultural performance at My3 Heritage Homestay",
    },
  ]

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg cursor-pointer" onClick={() => openLightbox(index)}>
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={400}
              height={300}
              className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 text-white hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-8 w-8" />
            <span className="sr-only">Previous</span>
          </Button>
          <Image
            src={images[currentImage].src || "/placeholder.svg"}
            alt={images[currentImage].alt}
            width={1200}
            height={800}
            className="max-h-[80vh] max-w-full object-contain"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={goToNext}
          >
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      )}
    </>
  )
}
