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
            With a distinguished career spanning over three decades, Lord Smith has served in various governmental and
            non-governmental roles, focusing primarily on economic development, environmental sustainability, and public
            service reform.
          </p>
          <p className="mb-4">
            Prior to joining the House of Lords, Lord Smith held several senior positions including Chief Executive of a
            major public body and Chair of an international charitable foundation. His expertise in policy development
            and implementation has been recognized through numerous awards and appointments.
          </p>
          <p className="mb-4">
            Lord Smith holds a Master's degree in Public Administration from the London School of Economics and a
            Bachelor's degree in Politics, Philosophy and Economics from the University of Oxford.
          </p>
          <p>
            As a member of the House of Lords, Lord Smith contributes to debates, scrutinizes legislation, and serves on
            select committees, bringing a wealth of practical experience to the legislative process.
          </p>
        </div>
      </div>
    </section>
  )
}
