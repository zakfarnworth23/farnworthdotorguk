"use client"

import Image from "next/image"
import AboutMe from './AboutMe';
import WorkExperience from "@/components/work-experience"
import GelCardGrid from "@/components/gel-card-grid"
import { FileText, Download, ExternalLink } from "lucide-react"

export default function AboutPage() {
  const lastUpdated = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

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
            src="/zfarnworth-tempest.png?height=400&width=300"
            alt="Professional portrait"
            width={300}
            height={400}
            className="w-full rounded-md"
          />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-1">About Zak</h2>
          <p className="text-sm text-gray-500 mb-4">Last updated: {lastUpdated}</p>
          <p className="mb-4">
            I began my career in September 2023, choosing an Apprenticeship route directly after school to gain real-world experience in the IT industry. This hands-on approach allowed me to immediately apply my skills in dynamic and meaningful ways.
          </p>
          <p className="mb-4">
            More recently, I served as ICT Technician at Albany Learning Trust, where I support and develop the digital infrastructure that underpins teaching and learning across multiple schools. My role includes managing hardware and software, troubleshooting technical issues, and implementing improvements that ensure reliability and accessibility for staff and students.
          </p>
          <p className="mb-4">
            My time at Albany Learning Trust came to an end in May 2025. I decided to take a break from the realm of Education, and instead, I moved to a new company where the sky's the limit. In my new role, soon to start, I will be involved in critical projects that I am very much looking forward to starting.
          </p>
          <p className="mb-4">
            I’m passionate about using technology as a tool to enhance education. My focus is on building systems that are sustainable, intuitive, and impactful — helping educators to teach more effectively and learners to engage more confidently.
          </p>
          <p>
            With a strong commitment to innovation, problem-solving, and collaboration, I strive to create environments where technology serves people, not the other way around. I’m driven by the belief that well-designed IT systems can unlock opportunities and drive positive change in education.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">Work Experience</h2>
      <div className="mb-16">
        <WorkExperience />
      </div>

       <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">About me</h2>
      <div className="mb-16">
        <AboutMe />
      </div>

      <h2 className="text-2xl font-bold mb-8 border-b-2 border-gray-200 pb-2">Resources</h2>
      <div className="mb-24">
        <GelCardGrid cards={resources} />
      </div>
    </div>
  )
}
