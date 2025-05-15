"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function RolesSection() {
  const [expandedRole, setExpandedRole] = useState<number | null>(null)

  const roles = [
    {
      title: "Member, House of Lords",
      period: "2015 - Present",
      organization: "UK Parliament",
      description:
        "Participates in legislative scrutiny, debates on matters of public interest, and serves on select committees examining government policy and proposed legislation.",
      responsibilities: [
        "Scrutinizing legislation and government activity",
        "Contributing to debates on national and international issues",
        "Serving on the Finance and Environment committees",
        "Representing the UK in international parliamentary forums",
      ],
    },
    {
      title: "Chair",
      period: "2018 - Present",
      organization: "National Infrastructure Commission",
      description:
        "Leads the independent body providing expert advice to the government on major infrastructure challenges facing the UK.",
      responsibilities: [
        "Setting strategic direction for the Commission",
        "Overseeing development of the National Infrastructure Assessment",
        "Engaging with stakeholders across industry, government and civil society",
        "Appearing before parliamentary committees to give evidence",
      ],
    },
    {
      title: "Non-Executive Director",
      period: "2016 - Present",
      organization: "Global Sustainable Development Corporation",
      description:
        "Serves on the board of an international organization focused on promoting sustainable development practices worldwide.",
      responsibilities: [
        "Providing strategic oversight and governance",
        "Chairing the Ethics and Sustainability Committee",
        "Advising on policy development and implementation",
        "Representing the organization at high-level international forums",
      ],
    },
    {
      title: "Chancellor",
      period: "2019 - Present",
      organization: "University of Westminster",
      description:
        "Serves as the ceremonial head of the university, presiding over graduation ceremonies and acting as an ambassador for the institution.",
      responsibilities: [
        "Conferring degrees at graduation ceremonies",
        "Representing the university at official functions",
        "Advocating for higher education policy improvements",
        "Supporting fundraising and development initiatives",
      ],
    },
    {
      title: "Former Chief Executive",
      period: "2008 - 2015",
      organization: "National Economic Development Agency",
      description:
        "Led the government agency responsible for driving economic growth and business development across the UK.",
      responsibilities: [
        "Overseeing a £2 billion annual budget",
        "Managing a team of 1,200 staff across multiple locations",
        "Implementing national economic development strategies",
        "Reporting directly to the Secretary of State for Business",
      ],
    },
  ]

  const toggleRole = (index: number) => {
    if (expandedRole === index) {
      setExpandedRole(null)
    } else {
      setExpandedRole(index)
    }
  }

  return (
    <section id="roles" className="py-8 mt-8">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">Roles & Responsibilities</h2>
      <div className="space-y-4">
        {roles.map((role, index) => (
          <div key={index} className="border border-gray-200 rounded-md overflow-hidden">
            <button
              className={`w-full text-left p-4 flex justify-between items-center ${expandedRole === index ? "govuk-blue text-white" : "bg-gray-50"}`}
              onClick={() => toggleRole(index)}
              aria-expanded={expandedRole === index}
              aria-controls={`role-content-${index}`}
            >
              <div>
                <h3 className="font-bold text-lg">{role.title}</h3>
                <p className={`${expandedRole === index ? "text-white/90" : "text-gray-600"}`}>
                  {role.organization} | {role.period}
                </p>
              </div>
              {expandedRole === index ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
            </button>

            {expandedRole === index && (
              <div id={`role-content-${index}`} className="p-4 bg-white">
                <p className="mb-4">{role.description}</p>
                <h4 className="font-bold mb-2">Key Responsibilities:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {role.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
