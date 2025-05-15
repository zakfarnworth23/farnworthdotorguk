import type React from "react"
import GelCard from "./gel-card"

interface CardData {
  title: string
  description?: string
  image?: string
  link?: string
  icon?: React.ReactNode
  type?: "default" | "download" | "internal" | "external"
}

interface GelCardGridProps {
  cards: CardData[]
  columns?: 2 | 3 | 4
}

export default function GelCardGrid({ cards, columns = 3 }: GelCardGridProps) {
  // Determine grid columns based on prop
  const gridClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  }[columns]

  return (
    <div className={`grid ${gridClass} gap-10`}>
      {cards.map((card, index) => (
        <div key={index} className="mb-10">
          <GelCard
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
            icon={card.icon}
            type={card.type}
          />
        </div>
      ))}
    </div>
  )
}
