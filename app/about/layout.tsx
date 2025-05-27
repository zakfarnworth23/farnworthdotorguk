import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Lord Farnworth",
  description: "About page with professional background and work experience",
}

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="govuk-blue text-white py-8 px-4 mb-8">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold">About</h1>
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}
