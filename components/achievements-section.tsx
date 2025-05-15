import { Award, BookOpen, Briefcase, Globe, Heart, Lightbulb } from "lucide-react"

export default function AchievementsSection() {
  const achievements = [
    {
      title: "Queen's Award for Enterprise",
      year: "2018",
      description: "Recognized for outstanding contribution to international trade and business innovation.",
      icon: <Award className="h-8 w-8 text-govuk-blue" />,
    },
    {
      title: "Commander of the Order of the British Empire (CBE)",
      year: "2012",
      description: "For services to economic development and public administration.",
      icon: <Briefcase className="h-8 w-8 text-govuk-blue" />,
    },
    {
      title: "Honorary Doctorate",
      year: "2016",
      description: "Awarded by the University of Cambridge for contributions to public policy.",
      icon: <BookOpen className="h-8 w-8 text-govuk-blue" />,
    },
    {
      title: "Global Leadership Award",
      year: "2019",
      description: "For pioneering work in sustainable development and international cooperation.",
      icon: <Globe className="h-8 w-8 text-govuk-blue" />,
    },
    {
      title: "National Charity Ambassador",
      year: "2014-Present",
      description: "Serving as ambassador for leading national charities focused on youth development.",
      icon: <Heart className="h-8 w-8 text-govuk-blue" />,
    },
    {
      title: "Innovation Policy Framework",
      year: "2017",
      description: "Led the development of a nationally-recognized policy framework for innovation.",
      icon: <Lightbulb className="h-8 w-8 text-govuk-blue" />,
    },
  ]

  return (
    <section id="achievements" className="py-8 mt-8">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">Awards & Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-md border-l-4 border-govuk-blue">
            <div className="mb-4">{achievement.icon}</div>
            <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{achievement.year}</p>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
