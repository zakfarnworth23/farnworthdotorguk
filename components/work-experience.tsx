"use client"

import { useState } from "react"
import { Calendar, MapPin, Briefcase, ChevronDown, ChevronUp } from "lucide-react"

interface Experience {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string
  responsibilities: string[]
  technologies?: string[]
}

export default function WorkExperience() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const experiences: Experience[] = [
    {
      id: 1,
      title: "ICT Technician",
      company: "Albany Learning Trust",
      location: "Chorley & Horwich",
      period: "March - May 2025",
      description:
        "Responsible for managing and maintaining IT infrastructure across multiple schools within the trust.",
      responsibilities: [
        "Providing technical support to staff and students",
        "Managing network infrastructure and security",
        "Implementing and maintaining educational software systems",
        "Coordinating IT projects and upgrades",
        "Training staff on new technologies and systems",
      ],
      technologies: ["Windows Server", "Active Directory", "Office 365", "Google Workspace", "Network Management"],
    },
    {
      id: 2,
      title: "IT Apprentice",
      company: "The Quill C of E Trust",
      location: "Bolton",
      period: "2023 - March 2025",
      description: "Delivered comprehensive IT support services to educational institutions.",
      responsibilities: [
        "Resolving hardware and software issues for clients",
        "Setting up and configuring classroom technology",
        "Performing regular maintenance and updates",
        "Documenting technical procedures and solutions",
        "Collaborating with vendors for technology procurement",
      ],
      technologies: ["Windows", "macOS", "Interactive Whiteboards", "Educational Software", "Help Desk Systems"],
    },
    {
      id: 3,
      title: "IT Technician's Assistant",
      company: "Bolton St Catherine's Academy",
      location: "Bolton",
      period: "2022 - 2022",
      description: "Supported the implementation of digital learning initiatives in educational settings.",
      responsibilities: [
        "Assisting with the setup of digital learning environments",
        "Troubleshooting technical issues during classes",
        "Managing digital content and resources",
        "Supporting teachers with technology integration",
        "Maintaining inventory of technical equipment",
      ],
      technologies: [
        "Learning Management Systems",
        "Digital Content Creation",
        "Audio/Visual Equipment",
        "Tablet Deployment",
      ],
    },
  ]

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="space-y-6">
      {experiences.map((exp) => (
        <div key={exp.id} className="border border-gray-200 rounded-md overflow-hidden">
          <button
            className={`w-full text-left p-4 flex justify-between items-center ${expandedId === exp.id ? "govuk-blue text-white" : "bg-gray-50"}`}
            onClick={() => toggleExpand(exp.id)}
            aria-expanded={expandedId === exp.id}
            aria-controls={`experience-content-${exp.id}`}
          >
            <div>
              <h3 className="font-bold text-lg">{exp.title}</h3>
              <p className={`${expandedId === exp.id ? "text-white/90" : "text-gray-600"}`}>{exp.company}</p>
            </div>
            {expandedId === exp.id ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
          </button>

          {expandedId === exp.id && (
            <div id={`experience-content-${exp.id}`} className="p-4 bg-white">
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {exp.period}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {exp.location}
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-1" />
                  {exp.company}
                </div>
              </div>

              <p className="mb-4">{exp.description}</p>

              <h4 className="font-bold mb-2">Key Responsibilities:</h4>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>

              {exp.technologies && (
                <>
                  <h4 className="font-bold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
