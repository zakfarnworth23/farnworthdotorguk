import Image from "next/image"
import WorkExperience from "@/components/work-experience"
import GelCardGrid from "@/components/gel-card-grid"
import { FileText, Download, ExternalLink } from "lucide-react"

export default function AboutPage() {
  // Sample resources for the GEL cards
  const resources = [
    {
      title: "Curriculum Vitae",
      description: "Download my full CV in PDF format",
      icon: <FileText className="h-8 w-8" />,
      link: "/files/cv.pdf",
      type: "download",
    },
    {
      title: "Portfolio",
      description: "View my complete portfolio of projects",
      icon: <ExternalLink className="h-8 w-8" />,
      link: "/portfolio",
      type: "internal",
    },
    {
      title: "Certifications",
      description: "Download my professional certifications",
      icon: <Download className="h-8 w-8" />,
      link: "/files/certifications.pdf",
      type: "download",
    },
  ]

  return (
    <div className="container mx-auto max-w-5xl px-4 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-1">
          <Image
            src="/placeholder.svg?height=400&width=300"
            alt="Professional portrait"
            width={300}
            height={400}
            className="w-full rounded-md"
          />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Professional Background</h2>
          <p className="mb-4 text-lg">
            With over a decade of experience in the technology sector, I have developed expertise in IT infrastructure,
            educational technology, and digital transformation.
          </p>
          <p className="mb-4">
            Currently serving as an ICT Technician at Albany Learning Trust, I am responsible for maintaining and
            improving the technology infrastructure that supports educational delivery across multiple schools.
          </p>
          <p className="mb-4">
            My approach combines technical knowledge with a deep understanding of how technology can enhance learning
            outcomes. I believe in creating sustainable, user-friendly systems that empower educators and students
            alike.
          </p>
          <p>
            Throughout my career, I have consistently demonstrated a commitment to innovation, problem-solving, and
            collaborative working. I am passionate about leveraging technology to create positive change in educational
            environments.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">Work Experience</h2>
      <div className="mb-16">
        <WorkExperience />
      </div>

      <h2 className="text-2xl font-bold mb-8 border-b-2 border-gray-200 pb-2">Resources</h2>
      <div className="mb-24">
        <GelCardGrid cards={resources} />
      </div>
    </div>
  )
}
