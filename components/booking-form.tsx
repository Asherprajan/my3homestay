"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { CalendarIcon, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function BookingForm() {
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setFormSubmitted(true)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-kerala-wood hover:bg-kerala-laterite text-kerala-dhoti">Book Now</Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] sm:w-[600px] max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-serif">Book Your Heritage Experience</DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          {formSubmitted ? (
            <div className="text-center p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-kerala-wood">Thank You!</h3>
              <p className="mt-2 text-sm sm:text-base text-kerala-coconut">Your booking inquiry has been received. We will get back to you within 24 hours.</p>
              <Button className="mt-4 sm:mt-6 bg-kerala-wood hover:bg-kerala-laterite text-kerala-dhoti" onClick={() => {
                setFormSubmitted(false)
                setOpen(false)
              }}>
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="first-name" className="text-xs sm:text-sm font-medium text-kerala-wood">
                    First Name
                  </label>
                  <Input id="first-name" placeholder="Enter your first name" required className="text-sm" />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="last-name" className="text-xs sm:text-sm font-medium text-kerala-wood">
                    Last Name
                  </label>
                  <Input id="last-name" placeholder="Enter your last name" required className="text-sm" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="email" className="text-xs sm:text-sm font-medium text-kerala-wood">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" required className="text-sm" />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="phone" className="text-xs sm:text-sm font-medium text-kerala-wood">
                    Phone
                  </label>
                  <Input id="phone" placeholder="Enter your phone number" required className="text-sm" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-kerala-wood">Check-in Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("w-full justify-start text-left font-normal text-sm", !checkIn && "text-muted-foreground")}>
                        <CalendarIcon className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        {checkIn ? format(checkIn, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus disabled={(date) => date < new Date()} className="rounded-md" />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-kerala-wood">Check-out Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("w-full justify-start text-left font-normal text-sm", !checkOut && "text-muted-foreground")}>
                        <CalendarIcon className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        {checkOut ? format(checkOut, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} initialFocus disabled={(date) => date < (checkIn || new Date())} className="rounded-md" />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-kerala-wood">Number of Guests</label>
                  <Select>
                    <SelectTrigger className="text-sm">
                      <SelectValue placeholder="Select number of guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                      <SelectItem value="5">5+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-kerala-wood">Room Type</label>
                  <Select>
                    <SelectTrigger className="text-sm">
                      <SelectValue placeholder="Select room type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="my3-traditional">My3 Traditional Room</SelectItem>
                      <SelectItem value="my3-lake-view">My3 Lake View</SelectItem>
                      <SelectItem value="not-sure">Not Sure (Recommend me)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="special-requests" className="text-xs sm:text-sm font-medium text-kerala-wood">
                  Special Requests
                </label>
                <Textarea id="special-requests" placeholder="Any special requests or questions?" className="min-h-[80px] sm:min-h-[100px] text-sm" />
              </div>
              <Button type="submit" className="w-full bg-kerala-wood hover:bg-kerala-laterite text-kerala-dhoti text-sm sm:text-base">
                Submit Inquiry
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
