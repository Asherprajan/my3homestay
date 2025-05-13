import { Building2, Dog, Landmark, Ship } from "lucide-react"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className="h-6 w-6 text-teal-600" />
      case "Dog":
        return <Dog className="h-6 w-6 text-teal-600" />
      case "Landmark":
        return <Landmark className="h-6 w-6 text-teal-600" />
      case "Ship":
        return <Ship className="h-6 w-6 text-teal-600" />
      default:
        return <Building2 className="h-6 w-6 text-teal-600" />
    }
  }

  return (
    <div className="flex flex-col items-center text-center">
      <div className="rounded-full bg-white p-4 shadow-sm">{getIcon(icon)}</div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  )
}
