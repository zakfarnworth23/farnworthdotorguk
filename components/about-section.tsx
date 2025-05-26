import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-8">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">About Zak Farnworth</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Image
            src="/zfarnworth.jpg"
            alt="Official portrait of Lord Smith"
            width={300}
            height={400}
            className="w-full rounded-md"
          />
        </div>
        <div className="md:col-span-2">
          <p className="mb-4 text-lg">
            From Apprentice to Advocate: Zak Farnworth’s journey starting at 16.
          </p>
          <p className="mb-4">
           At the age of 16, I began my first apprenticeship with The Quill C of E Trust, which lasted for one year and six months. During this time, I introduced revolutionary tools such as automation and scripting to the organisation, spearheaded the planning and delivery of HaloITSM within our IT Services Department for efficient technical support management, and led the technical infrastructure area to ensure that both pupils and staff had access to the resources necessary to effectively support teaching and learning.
          </p>
          <p className="mb-4">
            In March, before completing my apprenticeship, I moved jobs to Albany Learning Trust, where, as ICT Technician, I will support the provision of servers, end-user computers, mobile devices, laptops, projectors, IWBs, and enterprise network equipment while the trust transitions to a centralised network, a task in which I possess significant prior experience before assuming this position.
          </p>
          <p className="mb-4">
            Throughout my still-evolving career, I have presented at several events, including the ANME (Association of Network Managers Event) on two occasions! Additionally, I presented at a Cybrewery Evening hosted by YorCyberSec, a truly innovative and engaging event for all IT and Cybersecurity professionals to share knowledge across the IT community—something I strongly believe in.
          </p>
          <p>
            I am deeply passionate about cloud and hybrid technologies and their transformative potential in driving organisational growth. By helping organisations adapt to rapid technological changes, I strive to unlock new opportunities for innovation, resilience, and future-proofing their technological capabilities.
          </p>
          <p className="mb-4">
            My career aspirations are to move to London, Westminster and work either in government, Houses of Parliament, or for the royal household.
          </p>
        </div>
      </div>
    </section>
  )
}
