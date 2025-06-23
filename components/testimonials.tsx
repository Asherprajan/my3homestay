"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Elizabeth Pulimood",
      location: "India",
      text: "My stay at My3 Villa was absolutely magical. The cosiness of the home and warmth of service were top-notch. I also arranged a small alumni reunion lunch at My3 during my visit. The food and service provided by our hosts was wonderful. The peaceful surroundings and river views made the experience truly memorable!",
      rating: 5
    },
    {
      name: "Smita & Ameya Damle",
      location: "India",
      text: "The traditional look of My3 immediately charmed us. Its tiled roof, brick exteriors, and surrounding lush greenery were a welcome change from our busy city environment. The food, visits to nearby tourist spots, boating, ayurvedic treatments... All this made My3 the best part of our Kerala holiday!",
      rating: 5
    }
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }, 8000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="mt-16 relative">
      <div className="overflow-hidden rounded-xl border border-kerala-kasavu/20 bg-gradient-to-br from-kerala-ivory to-kerala-dhoti p-10 md:p-12 shadow-lg relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-leaf-pattern opacity-5"></div>
        <div className="absolute top-6 right-8">
          <Quote className="h-16 w-16 text-kerala-kasavu/10 rotate-180" />
        </div>
        
        <div
          key={currentIndex}
          className="flex flex-col items-center text-center relative z-10 transition-opacity duration-500"
        >
          <div className="flex mb-4">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-kerala-kasavu text-kerala-kasavu" />
            ))}
          </div>
          <blockquote className="max-w-2xl text-lg md:text-xl italic text-kerala-wood leading-relaxed">
            "{testimonials[currentIndex].text}"
          </blockquote>
          <div className="mt-8 border-t border-kerala-wood/10 pt-4 w-20"></div>
          <div className="mt-4 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-kerala-wood/10 flex items-center justify-center border-2 border-kerala-kasavu mb-3">
              <User className="h-8 w-8 text-kerala-wood/60" />
            </div>
            <p className="font-semibold text-kerala-wood text-lg">{testimonials[currentIndex].name}</p>
            <p className="text-sm text-kerala-coconut">{testimonials[currentIndex].location}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center gap-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={goToPrevious} 
          className="rounded-full border-kerala-wood/20 bg-kerala-ivory hover:bg-kerala-wood hover:text-kerala-dhoti transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        
        <div className="flex items-center space-x-3 mx-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? "bg-kerala-wood scale-125" 
                  : "bg-kerala-wood/30 hover:bg-kerala-wood/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <Button 
          variant="outline" 
          size="icon" 
          onClick={goToNext} 
          className="rounded-full border-kerala-wood/20 bg-kerala-ivory hover:bg-kerala-wood hover:text-kerala-dhoti transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}
