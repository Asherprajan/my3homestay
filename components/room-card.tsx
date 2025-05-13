import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface RoomCardProps {
  title: string
  description: string
  image: string
  features: string[]
  checkIn: string
  checkOut: string
  capacity: string
}

export default function RoomCard({ title, description, image, features, checkIn, checkOut, capacity }: RoomCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={800}
          height={450}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <ul className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="mr-2 h-5 w-5 flex-shrink-0 text-teal-600" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 grid grid-cols-2 gap-4 rounded-lg bg-teal-50 p-4 text-center">
          <div>
            <p className="text-sm text-gray-600">Check in</p>
            <p className="font-medium">{checkIn}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Check out</p>
            <p className="font-medium">{checkOut}</p>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-teal-50 p-4 text-center">
          <p className="font-medium">{capacity}</p>
        </div>
        <div className="mt-6">
          <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
            <a href="#booking">Book Now</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
