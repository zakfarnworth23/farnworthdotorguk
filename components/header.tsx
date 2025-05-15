"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="govuk-blue text-white">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="mr-4">
              <Image src="/crown-white.svg" alt="Crown logo" width={36} height={25} priority />
            </div>
            <Link href="/" className="text-2xl font-bold">
              Zak Farnworth
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`hover:underline focus:outline-none focus:text-black focus:bg-yellow-400 focus:box-shadow-none ${
                isActive("/") ? "underline" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`hover:underline focus:outline-none focus:text-black focus:bg-yellow-400 focus:box-shadow-none ${
                isActive("/about") ? "underline" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/#achievements"
              className="hover:underline focus:outline-none focus:text-black focus:bg-yellow-400 focus:box-shadow-none"
            >
              Achievements
            </Link>
            <Link
              href="/#roles"
              className="hover:underline focus:outline-none focus:text-black focus:bg-yellow-400 focus:box-shadow-none"
            >
              Roles
            </Link>
            <Link
              href="/#contact"
              className="hover:underline focus:outline-none focus:text-black focus:bg-yellow-400 focus:box-shadow-none"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center">
            <button className="p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden govuk-blue-dark">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`py-2 hover:bg-[#5694ca] px-2 rounded focus:outline-none focus:text-black focus:bg-yellow-400 focus:box-shadow-none ${
                  isActive("/") ? "bg-[#5694ca]" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`py-2 hover:bg-[#5694ca] px-2 rounded focus:outline-none focus:text-black focus:bg-yellow-400 focus:box-shadow-none ${
                  isActive("/about") ? "bg-[#5694ca]" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#achievements"
                className="py-2 hover:bg-[#5694ca] px-2 rounded focus:outline-none focus:text-black focus:bg-yellow-400 focus:box-shadow-none"
                onClick={() => setMenuOpen(false)}
              >
                Achievements
              </Link>
              <Link
                href="/#roles"
                className="py-2 hover:bg-[#5694ca] px-2 rounded focus:outline-none focus:text-black focus:bg-yellow-400 focus:box-shadow-none"
                onClick={() => setMenuOpen(false)}
              >
                Roles
              </Link>
              <Link
                href="/#contact"
                className="py-2 hover:bg-[#5694ca] px-2 rounded focus:outline-none focus:text-black focus:bg-yellow-400 focus:box-shadow-none"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
