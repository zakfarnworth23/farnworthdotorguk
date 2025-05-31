import Link from "next/link"
import AboutSection from "@/components/about-section"
import AchievementsSection from "@/components/achievements-section"
import WorkExperience from "@/components/work-experience"

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="govuk-blue text-white py-12 px-4 md:py-16">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Zak Farnworth MMVI</h1>
          <p className="text-xl md:text-2xl mb-8">New headline coming soon...</p>
          <div className="flex flex-row gap-4 mt-8">
            <Link
              href="#contact"
              className="bg-white text-govuk-blue font-bold py-3 px-6 inline-block text-center hover:bg-gray-100 transition-colors focus:outline-none focus:ring-4 focus:ring-yellow-400"
            >
              Contact Office
            </Link>
            <Link
              href="#roles"
              className="govuk-blue-dark text-white font-bold py-3 px-6 inline-block text-center border-2 border-white hover:bg-[#1d70b8] transition-colors focus:outline-none focus:ring-4 focus:ring-yellow-400"
            >
              View Roles & Responsibilities
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <AboutSection />
        <AchievementsSection />
        <WorkExperience />

        {/* Contact section */}
        <section id="contact" className="mt-16 border-t-2 border-gray-200 pt-8 mb-24">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="bg-gray-50 p-6 rounded-md">
            <p className="mb-2">
              <strong>Email:</strong> zak@farnworth.org.uk
            </p>
            <p className="mt-4 text-sm text-gray-600">
              For all matters, please include your full name and address in all correspondence.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
