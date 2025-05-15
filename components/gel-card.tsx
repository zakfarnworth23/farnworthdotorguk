import Link from "next/link"
import type { ReactNode } from "react"

interface GelCardProps {
  title: string
  description?: string
  image?: string
  link?: string
  icon?: ReactNode
  type?: "default" | "download" | "internal" | "external"
}

export default function GelCard({ title, description, image, icon, link, type = "default" }: GelCardProps) {
  // Simple card with basic styling
  return (
    <div className="border border-gray-300 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Card content with generous padding */}
      <div className="p-8">
        {/* Icon */}
        {icon && <div className="text-govuk-blue mb-4">{icon}</div>}

        {/* Title */}
        <h3 className="text-xl font-bold mb-3">{title}</h3>

        {/* Description */}
        {description && <p className="text-gray-600 mb-6">{description}</p>}

        {/* Action button/label */}
        {type === "download" && (
          <Link href={link || "#"} className="inline-block bg-govuk-blue text-white px-4 py-2 text-sm font-medium">
            Download
          </Link>
        )}

        {type === "internal" && (
          <Link href={link || "#"} className="inline-block bg-govuk-blue text-white px-4 py-2 text-sm font-medium">
            View
          </Link>
        )}

        {type === "external" && (
          <Link href={link || "#"} className="inline-block bg-gray-600 text-white px-4 py-2 text-sm font-medium">
            External Link
          </Link>
        )}
      </div>
    </div>
  )
}
