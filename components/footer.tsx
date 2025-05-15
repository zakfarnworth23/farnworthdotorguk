import Link from "next/link"

export default function Footer() {
  return (
    <footer className="govuk-blue-dark text-white py-8 mt-8">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Parliamentary Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.parliament.uk/" className="hover:underline">
                  UK Parliament
                </Link>
              </li>
              <li>
                <Link href="https://www.parliament.uk/business/lords/" className="hover:underline">
                  House of Lords
                </Link>
              </li>
              <li>
                <Link href="https://hansard.parliament.uk/" className="hover:underline">
                  Hansard
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#achievements" className="hover:underline">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="#roles" className="hover:underline">
                  Roles
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Accessibility Statement
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#5694ca]">
          <p className="text-sm">© {new Date().getFullYear()} Office of Lord Smith. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
