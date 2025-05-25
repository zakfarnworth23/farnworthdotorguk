"use client";

import { useEffect, useState } from "react";

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
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!hovering) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [hovering]);

  return (
    <section
      id="recognition"
      className="py-10 mt-10 border-t border-gray-300 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-govuk-blue border-b border-gray-300 pb-2">
          National Recognition
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Auto-fading image with thumbnail selector */}
          <div
            className="relative group"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <div className="relative h-64 overflow-hidden rounded-md border border-gray-300">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Thumbnails shown on hover */}
            <div className="mt-3 flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-12 w-20 object-cover border-2 cursor-pointer rounded-sm transition duration-200 ${
                    currentIndex === i
                      ? "border-govuk-blue opacity-100"
                      : "border-gray-300 opacity-50 hover:opacity-100"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Description and LinkedIn button */}
          <div className="flex flex-col justify-between h-full">
            <div className="text-lg leading-relaxed text-gray-800 mb-6 space-y-4">
              <p>
                In 2018, our organisation was proud to receive the{" "}
                <strong>Queen’s Award for Enterprise</strong>, one of the most
                prestigious accolades granted to UK businesses.
              </p>
              <p>
                The award recognised our outstanding contribution to
                international trade, business innovation, and public value.
                Presented on behalf of Her Majesty the Queen, this honour
                reflects years of dedicated work and a commitment to delivering
                impact both at home and abroad.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/posts/zakfarnworth_i-am-pleased-to-announce-that-i-have-been-activity-7212210405014675457-88U2?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoAp94BaJDwvFOMsE7qHeD_1lM33VUrLxY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium w-max transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 mr-2"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.378-.028-3.15-1.922-3.15-1.923 0-2.219 1.5-2.219 3.043v5.607h-3v-10h2.881v1.366h.041c.401-.759 1.381-1.56 2.842-1.56 3.038 0 3.6 2.002 3.6 4.604v5.59z" />
              </svg>
              View on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
