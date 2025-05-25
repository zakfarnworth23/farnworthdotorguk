"use client";

import { useEffect, useState } from "react"

export default function RecognitionSection() {
  const images = [
    {
      src: "/award-photo-01.jpg",
      alt: "BCS IT & Digital Apprenticeship Awards 2024",
    },
    {
      src: "/award-photo-02.jpg",
      alt: "BCS IT & Digital Apprenticeship Awards 2024",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Switch every 4 seconds
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section id="recognition" className="py-10 mt-10 border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-govuk-blue border-b border-gray-300 pb-2">
          Awards & Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Auto-rotating image */}
          <div className="w-full overflow-hidden rounded-md border border-gray-300">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-auto object-cover transition-opacity duration-700 ease-in-out"
            />
          </div>

          {/* Right: Paragraph */}
          <div>
            <p className="text-lg leading-relaxed text-gray-800">
              In 2018, our organisation was proud to receive the <strong>Queen’s Award for Enterprise</strong>, one of the
              most prestigious accolades granted to UK businesses. The award recognised our outstanding contribution to
              international trade, business innovation, and public value. Presented on behalf of Her Majesty the Queen,
              this honour reflects years of dedicated work and a commitment to delivering impact both at home and abroad.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
